# Module 09: 5G Non-Terrestrial Networks (NTN)

**Duration:** 4 weeks
**Prerequisites:** Modules 04, 05, 08

---

## What You'll Learn

3GPP is integrating satellites directly into the 5G (and 6G) standard. This means satellite connectivity that's native to your phone — no special terminal needed. You'll learn the NTN architecture, protocol adaptations, and how this converges the telecom and space industries.

## The Problem

Terrestrial cellular covers ~20% of Earth's land surface and ~5% of the total surface (including ocean). NTN aims to provide:
- **Ubiquitous coverage:** Phone works everywhere, even at sea or in remote areas
- **Direct-to-device (D2D):** Satellite connects to standard smartphones
- **Network resilience:** Satellite backhaul when terrestrial infrastructure fails
- **IoT everywhere:** Sensor data from any location on Earth

## Topics

### Week 1: NTN Architecture
- Transparent (bent-pipe) vs. regenerative satellite payloads
- gNB (5G base station) placement: on-ground vs. on-satellite
- Feeder link + service link architecture
- LEO vs. GEO NTN: trade-offs
- Integration with terrestrial 5G core (AMF, UPF, SMF)

### Week 2: Protocol Adaptations (Release 17)
- Timing advance: compensating for satellite propagation delay
- HARQ (Hybrid ARQ): disabling/adapting for long RTT
- Random access: PRACH adaptations for large cell sizes and delay
- Doppler pre-compensation: UE and gNB responsibilities
- GNSS dependency: why NTN UEs need GPS
- Scheduling: DCI and PDSCH timing relationships

### Week 3: Release 18+ Enhancements
- Regenerative payload support (on-board gNB)
- Enhanced mobility: NTN-to-TN and NTN-to-NTN handover
- RedCap (Reduced Capability) for IoT
- Network slicing for NTN: different QoS for different services
- Positioning and timing services via NTN
- Satellite backhaul for terrestrial cells (IAB over NTN)

### Week 4: Industry & Convergence
- Direct-to-cell services: T-Mobile/SpaceX, AST SpaceMobile, Lynk Global
- IoT via NTN: Skylo, Sateliot, EchoStar (S-band)
- Coexistence: managing interference between NTN and terrestrial 5G
- Spectrum: L-band, S-band, Ka-band for NTN
- The path to 6G: fully integrated terrestrial-satellite-aerial networks

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
| **AST SpaceMobile** | Direct-to-smartphone LEO constellation (large phased arrays) | `[NEW SPACE]` |
| **SpaceX / T-Mobile** | Starlink direct-to-cell | `[NEW SPACE]` |
| **Lynk Global** | Direct-to-phone satellite cells | `[NEW SPACE]` |
| **Skylo** | NB-IoT NTN for maritime, logistics | `[NEW SPACE]` |
| **Sateliot** | 5G IoT LEO constellation (NB-IoT) | `[NEW SPACE]` |
| **Qualcomm** | Snapdragon NTN modem (X75, X80) | `[NEW SPACE]` |
| **MediaTek** | NTN-capable chipsets | `[NEW SPACE]` |
| **Ericsson / Nokia** | NTN-capable RAN software | `[BOTH]` |
| **Thales Alenia Space** | Regenerative NTN payloads | `[BOTH]` |
| **Apple / Globalstar** | Emergency SOS via satellite (proprietary, pre-NTN) | `[NEW SPACE]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Comms and Networking* (Höyhtyä, 2025) | Best modern NTN coverage |
| 3GPP TR 38.811 | Study on NTN for NR (foundational document) |
| 3GPP TR 38.821 | Solutions for NR to support NTN |
| IEEE ComSoc NTN tutorials | https://www.comsoc.org/ |
| Qualcomm NTN whitepapers | Free technical overviews |

## Hands-On Exercises

1. **Delay Budget Calculator (Python):** Compute the timing advance and HARQ round-trip for LEO (600km), MEO (8000km), and GEO (35786km) using NumPy. Show why standard 5G HARQ breaks for GEO. Tabulate and plot results
2. **Doppler Analysis (Python):** For a LEO satellite at 550km altitude, compute the maximum Doppler shift at S-band (2 GHz) and Ka-band (20 GHz) using Skyfield. Determine the pre-compensation accuracy needed. Plot Doppler curves over a pass
3. **Cell Coverage Mapper (Python):** Given a satellite altitude and beam configuration, compute the cell footprint size and compare to terrestrial 5G cell size. Visualize with Cartopy
4. **NTN-TN Handover Simulator (C++):** Model a UE moving from NTN coverage to terrestrial coverage. Implement the signaling sequence for handover as a state machine
