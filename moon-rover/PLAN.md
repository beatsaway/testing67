# Lunar Rover — Mission Plan

Drive a moon rover, grab glowing samples, sell them for money, buy helpers. Tuned for KS2: big on-screen controls, short tips, green→red warning bars before fails.

**Primary KPI = money (¤).** Grab → bag → Sell → Shop.

## Pillars

1. **Hazardous driving** — Steep hills, cliffs, rocks, heat. Health bars warn before a fail.
2. **Sample commerce** — Grab deposits into the bag; Sell turns them into money.
3. **Autonomy ladder** — Path trail → sensors → satellite planning → second rover.

## Controls (v0 · KS2)

| Input | Action |
| --- | --- |
| **On-screen arrow pad** (also keyboard arrows / WASD) | Drive |
| **Grab** button (also E / Space) | Pick up a glowing rock when close |
| **Helper** | Gentle cruise assist |
| **Sell** | Cash in bag rocks |
| **Shop** | Buy helpers |
| **Restart** | After a break |
| Mouse drag / scroll | Look / zoom |

## Health bars (green → yellow → red)

| Meter | Meaning |
| --- | --- |
| **Strength** | How healthy the rover is (high = good) |
| **Heat** | Hot orange ground |
| **Tip risk** | Steep hills |
| **Edge risk** | Cliffs / map edge |

Center warnings show while meters climb. Failures need a short red grace time — not instant popups.

## v0 (playable now)

- Moon terrain with slopes, cliffs, rocks, hot zones
- On-screen drive pad + Grab / Helper
- Short tip line (no dense console walls)
- Sell + Shop; Glow Path upgrade purchasable
- Tip warnings always on

## Later milestones

| Milestone | Unlocks |
| --- | --- |
| **Sensors** | Camera, heat eyes, battery, ground scanner |
| **Path memory** | Drawn map of driven routes |
| **Satellite → Planning** | Safest path + checkpoints |
| **Second rover** | Autonomous companion |
