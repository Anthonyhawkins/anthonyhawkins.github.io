# Module 05: Satellite Link Engineering

**Phase:** 2 — Acceleration
**Builds on:** Modules 01, 02, 03

---

## 🔢 Math You'll Learn

### Pre-Calculus Completion + Calculus I Introduction

The math that makes satellite link design quantitative — and the start of calculus.

- **Exponential & logarithmic functions (deeper)** — exponential decay, log-linear relationships
  - *Space application:* signal power decay models, noise floor calculations
- **Conic sections — focus on ellipses** — eccentricity, semi-major axis, foci
  - *Space application:* **Kepler's orbits are ellipses** — orbit shape, apogee/perigee geometry
- **Calculus I: Limits & continuity** — the foundation for derivatives
- **Calculus I: Derivatives — definition, power rule** — rate of change
  - *Space application:* Doppler shift = d(range)/dt — the rate of change of distance to a satellite

**🔓 After this:** You understand orbit shapes (ellipses), can compute Doppler shift conceptually, and can build complete link budgets.

**Resources:**
- Khan Academy — Pre-Calculus completion (free)
- *Calculus: Early Transcendentals* — James Stewart (Chapters 1–3)
- 3Blue1Brown — *Essence of Calculus* (watch now!)

---

## 🛰️ What You'll Learn

How to design a communication link that "closes" — meaning the signal arrives with enough energy to be decoded. This is the equivalent of "capacity planning" in terrestrial networking, except you're fighting physics instead of budget.

### Link Budget Analysis
- The link equation: EIRP + G/T - path loss - atmospheric loss = C/N₀
- Transmit power, antenna gain, beamwidth
- Free-space path loss (FSPL) — scales with distance² and frequency²
- System noise temperature and noise figure
- Eb/N₀ requirements for different modulation + coding schemes
- Link margin philosophy: how much margin is enough?

### Atmospheric Effects
- Rain attenuation (ITU-R P.618 model) — critical for Ka-band and above
- Gaseous absorption, cloud attenuation, scintillation
- Faraday rotation at lower frequencies
- Site diversity: using multiple ground stations to combat weather
- Why Ka-band is dominant in new LEO constellations despite rain issues

### Antenna Systems
- Parabolic reflectors, phased arrays, flat-panel antennas
- Antenna gain, beamwidth, sidelobe patterns
- Electronically steered arrays (ESAs) — the key enabler for LEO user terminals
- Multi-beam satellites and frequency reuse

### Multiple Access & Capacity
- FDMA, TDMA, CDMA, OFDMA — trade-offs for satellite
- Demand assignment vs. fixed assignment
- Bandwidth-limited vs. power-limited systems
- Capacity calculations for a bent-pipe vs. regenerative transponder
- High Throughput Satellites (HTS) — multi-spot-beam architecture

---

## 💻 C++ & Python Skills

**C++ focus:** File I/O, JSON config parsing (nlohmann/json), CMake project structure, Google Test (gtest)
**Python focus:** SciPy for statistical models, matplotlib for curves

---

## Projects

### Project 1: Complete Link Budget Calculator (C++)

Build a configurable link budget calculator with JSON input.

**What you'll build:**
- Read link parameters from a JSON config file (transmit power, antenna gain, frequency, distance, atmospheric model)
- Compute full link budget: EIRP → path loss → atmospheric loss → G/T → C/N₀ → Eb/N₀ → link margin
- Output a formatted link budget table (like a real engineering spreadsheet)
- Support presets for common scenarios (LEO Ka-band, GEO Ku-band, Deep space X-band)
- Unit tests with gtest for each calculation step

**C++ skills used:** nlohmann/json, file I/O, gtest, CMake, structured output

**🔧 Toolkit:** Add `LinkBudget` module to the Space Network Toolkit

### Project 2: Rain Fade Availability Simulator (Python)

Simulate how rain affects Ka-band link availability.

**What you'll build:**
- Implement a simplified ITU-R P.618 rain attenuation model
- Given a ground station location and link frequency, calculate attenuation at different rain rates
- Plot availability curves: what percentage of time does the link meet its margin requirement?
- Compare Ka-band vs. Ku-band vs. X-band rain sensitivity
- Show how site diversity (2 ground stations) improves availability

**Python skills used:** SciPy, NumPy, matplotlib, statistical distributions

---

## Protocol Reference Table

| Protocol/Standard | Spec | Problem It Solves | New/Legacy |
|---|---|---|---|
| ITU-R P.618 | ITU | Rain attenuation prediction | `[BOTH]` |
| ITU-R S.1503 | ITU | EPFD limits — interference to GEO from NGSO | `[BOTH]` |
| DVB-S2X ACM | ETSI EN 302 307-2 | Adaptive coding/modulation for varying link conditions | `[NEW SPACE]` |

## Where This Tech Is Used

| Application | Companies | Notes |
|---|---|---|
| LEO user terminal design | SpaceX (Starlink), Amazon (Kuiper) | Phased array design, Ka-band links |
| GEO HTS operations | Viasat, Hughes (EchoStar), SES | Multi-spot-beam capacity planning |
| Ground gateway design | SpaceX, Amazon, Telesat | Gateway diversity, rain mitigation |
| Deep space comms | NASA DSN, ESA ESTRACK | X-band and Ka-band link budgets |
| CubeSat missions | Planet Labs, Spire | Low-power S/X-band link design |

## Books & Resources

| Resource | Chapters/Sections |
|---|---|
| *Satellite Communications* (Pratt et al.) | Ch. 4–6 (Link budgets, propagation, multiple access) |
| *Satellite Comms Systems Engineering* (Ippolito) | Entire book focuses on this |
| *Satellite Comms Systems* (Maral et al.) | Ch. 5–7 (Link design, multiple access) |
