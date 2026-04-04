---
title: "Module 04: Satellite Link Engineering"
module_number: 04
weight: 04
---


**Duration:** 6 weeks
**Prerequisites:** Module 01

---

## What You'll Learn

How to design a communication link that closes — meaning the signal arrives with enough energy to be decoded. This is the equivalent of "capacity planning" in terrestrial networking, except you're fighting physics instead of budget.

## Topics

### Weeks 1–4: Link Budget Analysis
- The link equation: EIRP + G/T - path loss - atmospheric loss = C/N₀
- Transmit power, antenna gain, beamwidth
- Free-space path loss (FSPL) — scales with distance² and frequency²
- System noise temperature and noise figure
- Eb/N₀ requirements for different modulation + coding schemes
- Link margin philosophy: how much margin is enough?

### Week 3: Atmospheric Effects
- Rain attenuation (ITU-R P.618 model) — critical for Ka-band and above
- Gaseous absorption, cloud attenuation, scintillation
- Faraday rotation at lower frequencies
- Site diversity: using multiple ground stations to combat weather
- Why Ka-band is dominant in new LEO constellations despite rain issues

### Week 4: Antenna Systems
- Parabolic reflectors, phased arrays, flat-panel antennas
- Antenna gain, beamwidth, sidelobe patterns
- Electronically steered arrays (ESAs) — the key enabler for LEO user terminals
- Multi-beam satellites and frequency reuse

### Weeks 9–12: Multiple Access & Capacity
- FDMA, TDMA, CDMA, OFDMA — trade-offs for satellite
- Demand assignment vs. fixed assignment
- Bandwidth-limited vs. power-limited systems
- Capacity calculations for a bent-pipe vs. regenerative transponder
- High Throughput Satellites (HTS) — multi-spot-beam architecture

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

## Math Used
- **Logarithms:** Everything in a link budget is dB — addition in log domain = multiplication in linear
- **Calculus:** Integration for total received energy, thermal noise power
- **Probability:** BER curves, rain attenuation statistics, availability calculations
- **Trigonometry:** Elevation angle, slant range geometry

## Hands-On Exercises

1. **Link Budget Calculator (Python):** Build a link budget calculator for a LEO-to-ground Ka-band link using NumPy. Include FSPL, atmospheric attenuation, antenna gain, and required Eb/N₀. Output a formatted table
2. **Rain Fade Simulator (Python):** Implement the ITU-R P.618 rain attenuation model with SciPy. Given a ground station location and link frequency, calculate and plot availability at different rain rates
3. **Capacity Planner (C++):** For a given satellite with N spot beams, each with a specific bandwidth and frequency reuse pattern, calculate total forward and return capacity. Build as a CLI tool with JSON config input
