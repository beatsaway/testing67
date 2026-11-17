# Lunar Deck — Rover Ops (v0, KS2-friendly)

CDN Three.js moon rover with a big on-screen arrow pad, short tips, and green→red health bars.

```bash
python3 -m http.server 8765 --bind 127.0.0.1
# → http://127.0.0.1:8765/
```

## Controls

| Control | Action |
| --- | --- |
| On-screen **↑ ↓ ← →** (arrows / WASD also work) | Drive |
| **Grab** (or E / Space) | Pick up a glowing rock when close |
| **Helper** | Gentle cruise assist |
| **Sell** / **Shop** / **Restart** | Cash in · buy helpers · retry |

## Health bars (green → yellow → red)

- **Strength** — damage from rocks / tips / heat (high is good)
- **Heat** — climbs on orange ground
- **Tip risk** — steep hills
- **Edge risk** — cliffs / map edge

Center warnings appear **before** a fail. Fails only after a meter stays red for a short grace time.
