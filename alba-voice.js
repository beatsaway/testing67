(function () {
  var base = "../piperalbaweb-main/";
  var session = null;
  var phonemizer = null;
  var queue = [];
  var busy = false;
  var last = "";
  var audio = new Audio();

  function albaSay(text) {
    text = String(text || "").replace(/^Alba:\s*/, "").trim();
    if (!text || text === last) return;
    last = text;
    queue.push(text);
    pump();
  }

  async function pump() {
    if (busy || !queue.length || !session || !phonemizer) return;
    busy = true;
    var text = queue.shift();
    try {
      var lines = [];
      phonemizer.print = function (data) { lines.push(String(data)); };
      phonemizer.callMain(["-l", "en-gb-x-rp", "--input", JSON.stringify([{ text: text }]), "--espeak_data", "/espeak-ng-data"]);
      var ids = null;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.charAt(0) !== "{") continue;
        var parsed = JSON.parse(line);
        if (parsed.phoneme_ids && parsed.phoneme_ids.length) { ids = parsed.phoneme_ids; break; }
      }
      if (!ids) { busy = false; pump(); return; }
      var result = await session.run({
        input: new ort.Tensor("int64", BigInt64Array.from(ids, function (id) { return BigInt(id); }), [1, ids.length]),
        input_lengths: new ort.Tensor("int64", BigInt64Array.from([BigInt(ids.length)]), [1]),
        scales: new ort.Tensor("float32", Float32Array.from([0.667, 1, 0.8]), [3])
      });
      var data = result.output.data;
      var pcm = new Int16Array(data.length);
      for (var j = 0; j < data.length; j++) {
        var s = Math.max(-1, Math.min(1, data[j]));
        pcm[j] = s < 0 ? s * 0x8000 : s * 0x7fff;
      }
      var buffer = new ArrayBuffer(44 + pcm.byteLength);
      var view = new DataView(buffer);
      var write = function (at, str) { for (var k = 0; k < str.length; k++) view.setUint8(at + k, str.charCodeAt(k)); };
      write(0, "RIFF");
      view.setUint32(4, 36 + pcm.byteLength, true);
      write(8, "WAVE");
      write(12, "fmt ");
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, 1, true);
      view.setUint32(24, 22050, true);
      view.setUint32(28, 44100, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      write(36, "data");
      view.setUint32(40, pcm.byteLength, true);
      new Int16Array(buffer, 44).set(pcm);
      audio.src = URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
      audio.onended = function () { busy = false; pump(); };
      audio.play().catch(function () { busy = false; });
    } catch (err) {
      console.warn(err);
      busy = false;
    }
  }

  window.albaSay = albaSay;
  createPiperPhonemize({
    locateFile: function (path) { return base + "phonemize/" + path; },
    print: function () {},
    printErr: function () {}
  }).then(function (mod) {
    phonemizer = mod;
    return fetch(base + "voice/en_GB-alba-medium.onnx");
  }).then(function (response) {
    return response.arrayBuffer();
  }).then(function (buf) {
    ort.env.wasm.wasmPaths = base + "vendor/118/";
    ort.env.wasm.numThreads = 1;
    return ort.InferenceSession.create(new Uint8Array(buf), { executionProviders: ["wasm"] });
  }).then(function (created) {
    session = created;
    pump();
  }).catch(function (err) {
    console.warn(err);
  });
})();
