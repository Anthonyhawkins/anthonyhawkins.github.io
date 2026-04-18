---
title: "Module 07: 5G Non-Terrestrial Networks (NTN)"
module_number: 07
weight: 07
---


**Phase:** 2 — Acceleration
**Builds on:** Modules 05, 06

---

## 🔢 Math You'll Learn

### Calculus I Completion + Calculus II Introduction

Finishing single-variable calculus and starting the tools for signal analysis.

- **Integrals — fundamental theorem of calculus** — accumulating quantities over time
  - *Space application:* total signal energy = ∫ power(t) dt over a satellite pass
  - *Space application:* total data transferred = ∫ data_rate(t) dt during a contact window
- **Integration techniques — substitution, parts**
- **Applications of integrals — area, average value**
  - *Space application:* average data rate over a variable-capacity link
- **Calculus II intro: sequences & series** — infinite sums and convergence
  - *Space application:* error correction coding theory relies on series expansions

**🔓 After this:** You can compute signal energy budgets, total data transfer over variable links, and begin understanding spectral analysis.

**Resources:**
- *Calculus: Early Transcendentals* — Stewart (Chapters 5–7)
- Khan Academy — Calculus 1 completion + Calculus 2 intro (free)

---

## 🛰️ What You'll Learn

3GPP is integrating satellites directly into the 5G (and 6G) standard. This means satellite connectivity that's native to your phone — no special terminal needed. You'll learn the NTN architecture, protocol adaptations, and how this converges the telecom and space industries.

### The Problem
Terrestrial cellular covers ~20% of Earth's land surface and ~5% of the total surface (including ocean). NTN aims to provide:
- **Ubiquitous coverage:** Phone works everywhere, even at sea or in remote areas
- **Direct-to-device (D2D):** Satellite connects to standard smartphones
- **Network resilience:** Satellite backhaul when terrestrial infrastructure fails
- **IoT everywhere:** Sensor data from any location on Earth

### NTN Architecture
- Transparent (bent-pipe) vs. regenerative satellite payloads
- gNB (5G base station) placement: on-ground vs. on-satellite
- Feeder link + service link architecture
- LEO vs. GEO NTN: trade-offs
- Integration with terrestrial 5G core (AMF, UPF, SMF)

### Protocol Adaptations (Release 17)
- Timing advance: compensating for satellite propagation delay
- HARQ (Hybrid ARQ): disabling/adapting for long RTT
- Random access: PRACH adaptations for large cell sizes and delay
- Doppler pre-compensation: UE and gNB responsibilities
- GNSS dependency: why NTN UEs need GPS

### Release 18+ Enhancements
- Regenerative payload support (on-board gNB)
- Enhanced mobility: NTN-to-TN and NTN-to-NTN handover
- Network slicing for NTN: different QoS for different services
- Satellite backhaul for terrestrial cells (IAB over NTN)

### Industry & Convergence
- Direct-to-cell services: T-Mobile/SpaceX, AST SpaceMobile, Lynk Global
- IoT via NTN: Skylo, Sateliot, EchoStar (S-band)
- The path to 6G: fully integrated terrestrial-satellite-aerial networks

---

## 💻 C++ & Python Skills

**C++ focus:** `std::thread`, `std::mutex`, condition variables, basic concurrency patterns
**Python focus:** Skyfield, NumPy for orbital computations, tabular output

This is the first module where you'll write **concurrent C++ code**.

---

## Projects

### Project 1: NTN-TN Handover Simulator (C++)

Simulate a UE (user equipment) handing over between satellite and terrestrial base stations.

**What you'll build:**
- Model a UE, an NTN gNB (satellite), and a TN gNB (terrestrial) as separate threads
- Implement the handover signaling sequence as a state machine (connected-NTN → measurement → handover-prep → handover-exec → connected-TN)
- Use `std::mutex` and condition variables for inter-thread signaling
- Simulate variable signal strength (the satellite moves, signal fades; terrestrial signal strengthens)
- Log the handover timeline and state transitions

**C++ skills used:** `std::thread`, `std::mutex`, `std::condition_variable`, state machines, concurrent programming

### Project 2: NTN Delay Budget & Doppler Analyzer (Python)

Compute and visualize the timing challenges of satellite-based 5G.

**What you'll build:**
- Compute timing advance and HARQ round-trip for LEO (600km), MEO (8000km), and GEO (35786km)
- Show why standard 5G HARQ (expecting reply in ~4ms) breaks for satellite
- For a LEO satellite at 550km, compute max Doppler at S-band (2 GHz) and Ka-band (20 GHz)
- Determine the pre-compensation accuracy needed
- Plot Doppler curves over a full overhead pass

**Python skills used:** Skyfield, NumPy, matplotlib, tabular comparison

---

## Protocol Reference Table

| Protocol/Standard | Spec | Problem It Solves | New/Legacy |
|---|---|---|---|
| NR NTN | 3GPP TS 38.300 (Rel-17) | 5G NR over satellite | `[NEW SPACE]` |
| NB-IoT/eMTC NTN | 3GPP TS 36.300 (Rel-17) | IoT over satellite | `[NEW SPACE]` |
| NTN Rel-18 enhancements | 3GPP TS 38.300 (Rel-18) | Regenerative, enhanced mobility | `[NEW SPACE]` |
| GNSS timing | 3GPP TS 38.133 | UE timing/frequency pre-compensation | `[NEW SPACE]` |

## Companies

| Company | Product/Focus | New/Legacy |
|---|---|---|
| **AST SpaceMobile** | Direct-to-smartphone LEO constellation | `[NEW SPACE]` |
| **SpaceX / T-Mobile** | Starlink direct-to-cell | `[NEW SPACE]` |
| **Lynk Global** | Direct-to-phone satellite cells | `[NEW SPACE]` |
| **Skylo** | NB-IoT NTN for maritime, logistics | `[NEW SPACE]` |
| **Sateliot** | 5G IoT LEO constellation (NB-IoT) | `[NEW SPACE]` |
| **Qualcomm** | Snapdragon NTN modem (X75, X80) | `[NEW SPACE]` |
| **MediaTek** | NTN-capable chipsets | `[NEW SPACE]` |
| **Ericsson / Nokia** | NTN-capable RAN software | `[BOTH]` |
| **Thales Alenia Space** | Regenerative NTN payloads | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Comms and Networking* (Höyhtyä, 2025) | Best modern NTN coverage |
| 3GPP TR 38.811 | Study on NTN for NR (foundational document) |
| 3GPP TR 38.821 | Solutions for NR to support NTN |
| Qualcomm NTN whitepapers | Free technical overviews |
