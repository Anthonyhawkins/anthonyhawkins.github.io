# Module 02: Starlink RF Foundations and Phased-Array Access Links

**Phase:** 1 - Foundation
**Builds on:** Module 01

---

## Math You'll Learn

### Algebra 2 Completion + Trigonometry Introduction

You will finish the Algebra 2 pieces needed for RF calculations and begin trigonometry, the math used for satellite visibility, phased-array steering, and handover timing.

- **Sequences and summation notation** - time-series link quality, telemetry samples, and scheduler history.
- **Unit circle, sine, cosine, tangent** - the foundation for beam direction and satellite geometry.
  - *Starlink application:* user-terminal beam steering and satellite look angles.
- **Inverse trig functions** - compute angles from known distances and vectors.
  - *Starlink application:* elevation and scan angle from terminal to satellite.
- **Frequency and wavelength relationship** - lambda = c/f.
  - *Starlink application:* antenna size, gain, and beamwidth depend on wavelength.

**After this:** You can reason about Starlink access-link geometry, why phased arrays are required for LEO broadband, and how slant range drives delay and path loss.

**Resources:**

- Khan Academy - Algebra 2 sequences and Trigonometry intro
- Pratt, *Satellite Communications*, propagation and frequency-band chapters
- Starlink Technology - phased-array and low-latency architecture overview

---

## What You'll Learn

This module refocuses generic space communications into Starlink's access-link model: moving LEO satellites, electronically steered user terminals, Ku/Ka/E-band links, and rapid handover.

### Starlink RF Access Model

- Ku-band service links between user terminals and satellites.
- Ka/E-band feeder links between satellites and gateways.
- TT&C links as operational context, separate from broadband traffic.
- Link categories: user service link, feeder/gateway link, inter-satellite link, and management/telemetry.
- Why LEO reduces propagation delay but forces constant tracking and handover.

### Phased-Array Antenna Concepts

- Beam steering, beamwidth, scan loss, sidelobes, aperture, gain, and polarization.
- Electronically steered arrays vs mechanically steered antennas.
- Why flat-panel user terminals matter for moving LEO satellites.
- Beam switching and preserving user sessions at the system level.
- Publicly known behavior vs inferred scheduler/PHY behavior.

### Link Concepts

- FSPL vs frequency and range.
- Modulation/coding only at the level needed now: MCS, LDPC, OFDM/OFDMA/TDMA trade-offs.
- Spectrum coordination, interference, and FCC/ITU constraints.
- Doppler as a preview topic; the full math arrives later.

---

## C++ and Python Skills

**C++ focus:** control flow, functions, basic classes, constructors, enums, formatted output.

**Python focus:** NumPy arrays, matplotlib plotting, simple geometric visualization.

---

## Projects

### Project 1: Starlink Delay and Path-Loss Calculator (C++)

Build a CLI tool for Starlink-like LEO link estimates.

**What you'll build:**

- Represent orbit altitude, frequency band, and terminal/gateway link type with enums/classes.
- Compute one-way delay and RTT from slant range.
- Compute FSPL for Ku, Ka, and E-band examples.
- Print comparison tables for low-elevation, mid-elevation, and near-overhead passes.
- Keep assumptions configurable and documented.

**C++ skills used:** functions, classes, enums, `<iomanip>`, command-line arguments.

**Toolkit:** Add `AccessLinkModel` foundations.

### Project 2: Phased-Array Beam Geometry Plotter (Python)

Visualize how terminal look angle affects link quality.

**What you'll build:**

- Plot scan angle, elevation, estimated scan loss, and slant range over a satellite pass.
- Show visible satellite intervals for a fixed user terminal.
- Compare low vs high elevation masks.
- Annotate where handover would likely be preferred based on geometry.

**Python skills used:** NumPy, matplotlib, simple trigonometric models.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| Ku service link | User-terminal broadband access | Customer traffic path |
| Ka/E feeder link | High-capacity gateway connection | Satellite-to-ground backhaul |
| Electronically steered array | Tracks LEO satellites without moving dish | User-terminal and gateway antenna model |
| MCS/ACM | Adapts data rate to link quality | Later scheduler and capacity work |
| Spectrum coordination | Prevents harmful interference | FCC/ITU constraints and filings |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink user terminals | Beam steering and handover |
| Starlink gateways | High-capacity feeder links and diversity |
| LEO broadband competitors | Similar RF geometry even when implementation differs |
| Network simulation | Access-link delay and path-loss inputs |

## Books and Resources

| Resource | Notes |
|---|---|
| Starlink Technology | Public access and satellite system overview |
| FCC Starlink filings | Frequency and interference constraints |
| Pratt, *Satellite Communications* | Propagation and antenna fundamentals |
| Balanis, *Antenna Theory* | Deeper antenna geometry reference |
