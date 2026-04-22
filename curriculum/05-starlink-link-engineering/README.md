# Module 05: Starlink Link Engineering: Ku, Ka, E-Band, Rain Fade, and Interference

**Phase:** 2 - Acceleration
**Builds on:** Modules 01, 02, 03, and 04

---

## Math You'll Learn

### Pre-Calculus Completion + Calculus I Introduction

This module makes link design quantitative and introduces derivatives as rates of change.

- **Exponential and logarithmic functions, deeper pass** - log-linear signal models and noise-density calculations.
  - *Starlink application:* link margin changes across range, frequency, antenna gain, and weather.
- **Conic sections and orbital geometry preview** - why shells and orbital altitude matter.
- **Limits and continuity** - foundation for differentiating link-quality curves.
- **Derivatives and rate of change** - range rate and Doppler intuition.
  - *Starlink application:* Doppler is driven by d(range)/dt; margin sensitivity is d(margin)/d(parameter).
- **Sensitivity analysis** - which parameter matters most: elevation, rain rate, scan angle, bandwidth, or antenna gain.

**After this:** You can build Starlink-style access and gateway link budgets, reason about rain fade and scan loss, and explain which assumptions dominate the result.

**Resources:**

- Stewart, *Calculus: Early Transcendentals*, Chapters 1-3
- Ippolito, *Satellite Communications Systems Engineering*
- ITU-R P.618 propagation model
- FCC Starlink authorizations for public frequency context

---

## What You'll Learn

Link engineering answers whether a link closes with enough margin to carry traffic. For Starlink, you care most about Ku user links, Ka/E-band feeder links, phased-array scan loss, rain fade, interference constraints, and gateway diversity.

### Link Budgets

- EIRP, G/T, FSPL, atmospheric loss, implementation loss, C/N0, Eb/N0, and link margin.
- Ku-band service-link examples for user terminals.
- Ka/E-band feeder-link examples for gateways.
- Elevation mask, slant range, scan loss, and antenna gain.
- Doppler and frequency compensation as link-budget adjacent effects.
- Transparent vs regenerative payload context, without assuming Starlink internals.

### Atmospheric and Interference Effects

- Rain attenuation with ITU-R P.618, especially for Ka/E-band gateway links.
- Gaseous absorption, clouds, scintillation, and availability targets.
- Gateway diversity and weather-aware routing.
- EPFD and protecting GEO systems from NGSO interference.
- Sidelobes, frequency reuse, beam isolation, and coordination constraints.

### Engineering Judgment

- Link margin philosophy: nominal, degraded, outage, and recovery states.
- Sensitivity analysis to avoid over-optimizing the wrong term.
- Public data vs inferred values; documenting assumptions cleanly.
- How link state becomes an input to scheduler and topology decisions.

---

## C++ and Python Skills

**C++ focus:** JSON config parsing with nlohmann/json, CMake structure, Google Test, clean calculation modules.

**Python focus:** SciPy/NumPy for attenuation curves, Monte Carlo availability, and plotting.

---

## Projects

### Project 1: Starlink-Style Link Budget Calculator (C++)

Build a configurable link-budget calculator.

**What you'll build:**

- Read JSON input for frequency, bandwidth, range, elevation, antenna gain, scan loss, power, noise temperature, rain rate, and implementation loss.
- Support presets for Ku user link, Ka feeder link, E-band feeder link, and a generic comparison link.
- Compute FSPL, atmospheric/rain loss, G/T, C/N0, Eb/N0, and link margin.
- Emit a spreadsheet-style table and machine-readable JSON.
- Unit-test each formula and conversion.

**C++ skills used:** CMake, nlohmann/json, gtest, structured output.

**Toolkit:** Add `StarlinkLinkBudget`.

### Project 2: Gateway Diversity and Rain Fade Simulator (Python)

Model weather-aware gateway selection.

**What you'll build:**

- Implement a simplified ITU-R P.618 rain attenuation model.
- Simulate rain fade at multiple gateway sites.
- Estimate link availability with one gateway vs multiple gateways.
- Route traffic to the gateway with best margin, then show the latency trade-off.
- Plot availability, outage duration, and margin distributions.

**Python skills used:** NumPy, SciPy, matplotlib, random sampling, tabular summaries.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| ITU-R P.618 | Rain attenuation prediction | Gateway availability and diversity |
| EPFD | Protect GSO systems from NGSO interference | Regulatory constraint |
| E-band feeder links | High-capacity gateway backhaul | Publicly authorized Starlink expansion area |
| Scan loss | Phased-array off-boresight penalty | User/gateway link margin |
| Link margin | Whether service can be decoded reliably | Scheduler and operations input |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink access service | Ku user-link quality and capacity |
| Starlink gateways | Ka/E feeder-link availability |
| Gateway planning | Weather, diversity, capacity, and latency |
| Topology controller | Link state feeds path selection and TE |

## Books and Resources

| Resource | Notes |
|---|---|
| Ippolito, *Satellite Communications Systems Engineering* | Propagation and link design |
| Pratt, *Satellite Communications* | Link-budget fundamentals |
| ITU-R P.618 | Rain attenuation model |
| FCC Starlink filings | Public frequency and interference constraints |
