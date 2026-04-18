---
title: "Module 09: Optical Inter-Satellite Links (OISL)"
module_number: 09
weight: 09
---


**Phase:** 3 — Depth
**Builds on:** Modules 05, 08

---

## 🔢 Math You'll Learn

### Calculus III Completion + Linear Algebra

Coordinate transforms and rotation matrices — the math behind reference frame conversions.

- **Calc III: Coordinate systems** — Cartesian, spherical, cylindrical
  - *Space application:* lat/lon/alt ↔ ECEF ↔ ECI — the core coordinate frames for space
- **Linear algebra: Matrices** — operations, inverse, transpose, determinant
- **Linear algebra: Rotation matrices & coordinate transforms** — the core tool for space math
  - *Space application:* ECI ↔ ECEF ↔ topocentric ↔ body frame — every space system uses these
  - *Space application:* pointing vectors for laser terminals
- **Linear algebra: Eigenvalues & eigenvectors (basics)** — stability analysis
  - *Space application:* principal axes, stability of pointing systems

**🔓 After this:** You can transform between any coordinate frame and implement reference frame conversions — essential for laser pointing.

**Resources:**
- *Calculus: Early Transcendentals* — Stewart (Chapters 15–16)
- *Introduction to Linear Algebra* — Gilbert Strang
- 3Blue1Brown — *Essence of Linear Algebra*
- MIT OCW 18.06 (full course, free)

---

## 🛰️ What You'll Learn

Optical (laser) inter-satellite links are the backbone of modern constellations — they're what turn thousands of individual satellites into a coherent global network. You'll learn how they work physically, the networking challenges they introduce, and why they represent the biggest growth area in space networking.

### The Problem OISL Solves
RF inter-satellite links are bandwidth-limited. Optical/laser links provide:
- **10–100+ Gbps** data rates (vs. RF ISL ~Mbps–low Gbps)
- **No spectrum licensing** needed (laser frequencies are unregulated in space)
- **Narrow beamwidth** = low probability of intercept/interference
- **Lower SWaP** (size, weight, power) per Gbps

The trade-off: pointing accuracy must be **sub-microradian** — you're aiming a laser at a target moving at 7.5 km/s, hundreds or thousands of km away.

### Physics & Hardware
- Free-space optical communication principles
- Laser types: DPSSL, fiber lasers, semiconductor
- Modulation formats: OOK, BPSK, DPSK, coherent detection
- Laser communication terminals (LCTs): gimbal-based vs. MEMS vs. liquid crystal
- Acquisition, tracking, and pointing (ATP) subsystem
- Point-ahead angle: accounting for light travel time

### Link Design
- Optical link budget: transmit power, divergence, aperture, detector sensitivity
- Background noise: sun, Earth albedo, other satellites
- Atmospheric effects on optical ground links (scintillation, clouds)
- Optical ground stations and site diversity

### Networking Over OISL
- Mesh topology formation: which satellites link to which?
- 4-link topology: intra-plane (±1) + cross-plane (±1) — the standard approach
- Link scheduling: when to acquire/release optical links
- Integration of L2/L3 routing into optical terminals
- **This is where the industry is heading:** satellites as network routers

### Industry & Future Directions
- Starlink laser ISL deployment and capabilities
- Cislunar optical links (LCRD, ILLUMA-T demonstrations)
- Deep space optical: DSOC (NASA's Deep Space Optical Communications)
- Quantum key distribution (QKD) over satellite optical links

---

## 💻 C++ & Python Skills

**C++ focus:** pybind11 (Python/C++ interop), performance-critical patterns, Eigen for coordinate transforms
**Python focus:** Matplotlib animation, NumPy for optical link geometry, Plotly for heatmaps

---

## Projects

### Project 1: OISL Mesh Topology Generator (C++)

Build a high-performance engine that computes optical link topology for a constellation.

**What you'll build:**
- Given Walker constellation parameters (from Module 08's `ConstellationEngine`), compute the 4-link OISL topology at each timestep
- Implement coordinate transforms: ECI ↔ ECEF ↔ satellite body frame using rotation matrices (Eigen)
- Compute pointing vectors for each laser terminal (which direction to aim)
- Calculate point-ahead angle for each link
- Output topology snapshots as JSON for visualization
- Use concurrent computation for multi-satellite processing

**C++ skills used:** Eigen (rotation matrices), concurrent computation, pybind11 wrapper for Python visualization, JSON output, performance optimization

**🔧 Toolkit:** Add `ISLTopology` module to the Space Network Toolkit

### Project 2: Optical Link Budget & ATP Visualization (Python)

Visualize optical link performance and laser acquisition.

**What you'll build:**
- Compute received power for a LEO-LEO laser link given: transmit power, beam divergence, aperture diameter, range, pointing loss
- Plot sensitivity curves: received power vs. range for different aperture sizes
- Animate the ATP acquisition process: spatial uncertainty cone → spiral scan → lock
- Build a global latency heatmap using Module 08's router + your OISL topology

**Python skills used:** NumPy, matplotlib animation, Plotly for heatmaps, calling C++ via pybind11

---

## Technology Reference

| Technology | Problem It Solves | New/Legacy | Who Uses It |
|---|---|---|---|
| Coherent optical detection | Higher data rates + sensitivity | `[NEW SPACE]` | Mynaric, CACI, Tesat-Spacecom |
| ATP (Acq/Track/Point) | Establishing/maintaining laser lock | `[BOTH]` | All OISL vendors |
| WDM in free-space optical | Multiplying capacity per link | `[NEW SPACE]` | Research, emerging products |
| CCSDS Optical Comms standards | Interoperability for optical links | `[NEW SPACE]` | CCSDS member agencies |

## Companies

| Company | Product/Focus | New/Legacy |
|---|---|---|
| **Mynaric** (Germany/US) | CONDOR laser terminals, high-volume manufacturing | `[NEW SPACE]` |
| **Tesat-Spacecom** (Germany) | LCT heritage (EDRS), new SmartLCT products | `[BOTH]` |
| **CACI** (ex-SA Photonics) | Laser comms terminals for DoD/SDA | `[NEW SPACE]` |
| **SpaceX** | Custom-built laser ISLs for Starlink (in-house) | `[NEW SPACE]` |
| **Honeywell** | Optical terminals for SDA satellites | `[BOTH]` |
| **NASA/JPL** | DSOC, LCRD, ILLUMA-T demos | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Free-Space Laser Communications* (Hemmati, ed.) | Comprehensive reference on optical link physics |
| CCSDS Optical Communications Working Group docs | Standards in development |
| NASA DSOC results papers | https://www.nasa.gov/mission/dsoc/ |
