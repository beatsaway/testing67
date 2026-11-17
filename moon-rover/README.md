# Lunar Deck — Rover Ops (v0)

CDN Three.js moon-rover prototype for Project “rover lesson”.

## Play

```bash
# from repo root
npx --yes serve moon-rover -l 8765
# or
python3 -m http.server 8765 --bind 127.0.0.1 --directory moon-rover
```

Open http://127.0.0.1:8765/

If GitHub Pages is on for this repo: `/moon-rover/` on the Pages URL.

## Controls

| Input | Action |
| --- | --- |
| WASD / arrows | Drive |
| Mouse drag | Orbit camera |
| Shift | Path-assist cruise |
| E | Arm mode near a deposit |
| I/K J/L | Arm pitch / reach |
| Space | Clamp / extract |
| U | Upgrade bay |
| R | Reset after failure |

## Files

- `index.html` — full playable game (Three.js via CDN)
- `PLAN.md` — pillars, v0 vs later milestones, controls
