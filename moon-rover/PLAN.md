# Lunar Rover — Mission Plan

Remote-control a semi-autonomous moon rover: survive terrain and heat, extract samples with the arm, sell them for money, and unlock autonomy.

**Primary KPI = money (¤ credits).** Extracts stock cargo; selling converts cargo → money; upgrades spend money.

## Pillars

1. **Hazardous driving** — Slopes tip you, cliffs end the run, rocks bruise the chassis, heat cooks the pack. Every meter is a decision.
2. **Sample commerce** — Arm + claw work at marked deposits (minerals, water ice). Extracts fill cargo; Sell Bay cashes them into money.
3. **Autonomy ladder** — Sensors → path memory → satellite planning → a second rover. The machine grows smarter as you invest money.

## Controls (v0)

| Input | Action |
| --- | --- |
| **W / A / S / D** or arrows | Drive / steer |
| **Mouse drag** | Orbit camera |
| **Scroll** | Zoom |
| **Shift** (hold) | Path-assist cruise (auto-throttle with hazard slowdown; can still fail) |
| **E** | Enter / exit arm mode near a deposit |
| **I / K** | Arm pitch |
| **J / L** | Arm yaw / claw reach |
| **Space** | Clamp claw / extract when aligned |
| **C** or **Sell** button | Open Sell Bay (cargo → money) |
| **U** or **Upgrades** button | Open upgrade panel |
| **R** | Reset after failure |

## v0 (playable now)

- Procedural lunar terrain: slopes, cliffs, rock field, hot zones
- Raycast grounding + tip / fall / bump / overheat failure states
- Manual drive + hold-to-cruise path assist
- Arm + claw extract at mineral and water-ice markers → **cargo**
- Hero **money** HUD; Sell Bay converts cargo to ¤; upgrades spend ¤ (**Slope Warning** + **Path Trail** purchasable)
- **CTRAC** mission console: Contract · Telemetry · Route track · Acquisition · Cargo

## Money-as-KPI notes

- Money is always visible, large, labeled as credits (¤) — the score that matters
- Extract does not grant money directly; sell does
- CTRAC stays on-screen as the mission strip (do not remove)

## Visual notes (testing67 lift)

- Black void sky + hard sun disk / glow, dense stars, soft black fog
- ACES Filmic + subtle bloom; warm key light, cool earthshine fill, soft shadows
- Procedural regolith albedo/normals; vertex tints for dust, ice, soak, steep grade
- Rover hull rivets + solar wings; cream-on-ink HUD (Syne / IBM Plex Mono), earthshine accents
- Intentional motion: brand breath, deposit pulse, dust motes, sun wash

## Later milestones

| Milestone | Unlocks |
| --- | --- |
| **Sensors** | Camera feed, heat signature overlay, battery checker, terrain/slope scanner with audio/visual warnings |
| **Path memory** | Drawn map of driven routes; revisit safe corridors |
| **Satellite data → Planning** | Buy terrain packets; safest-path routing with checkpoints for water / rare earth |
| **Second rover** | Autonomous companion; share money and map; higher autonomy as the default |

Autonomy rises with progress: more assist, better foresight, less babysitting — still never risk-free.
