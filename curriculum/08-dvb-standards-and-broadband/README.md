# Module 08: DVB Standards & Satellite Broadband

**Duration:** 4 weeks
**Prerequisites:** Modules 04, 07

---

## What You'll Learn

DVB-S2/S2X and DVB-RCS2 are the dominant standards for satellite broadband — they define how data is modulated, multiplexed, and delivered over satellite. This is the "how" behind nearly every commercial satellite internet service (GEO VSAT and increasingly LEO broadband).

## The Problem

You need to deliver IP traffic (web, video, VoIP) over a satellite link that has:
- Variable signal quality (weather, elevation angle)
- Shared bandwidth among many users (VSAT network)
- Asymmetric forward/return capacity
- Need for TCP acceleration (PEP) due to latency

DVB-S2/RCS2 provides the complete system: forward link broadcast, return link multiple access, and adaptive mechanisms to maximize throughput.

## Topics

### Week 1: DVB-S2 / S2X (Forward Link)
- Physical layer: modulation (QPSK to 256APSK), coding (LDPC+BCH)
- MODCOD table: mapping signal quality to efficiency
- ACM (Adaptive Coding & Modulation): real-time adaptation to link conditions
- Frame structure: BBFRAME → FECFRAME → PLFRAME
- GSE (Generic Stream Encapsulation): mapping IP packets into DVB-S2 frames
- S2X extensions: finer MODCODs, lower roll-off, beam hopping

### Week 2: DVB-RCS2 (Return Link)
- MF-TDMA (Multi-Frequency TDMA): how terminals share return bandwidth
- Burst structure, timing, synchronization
- RLE (Return Link Encapsulation): efficient IP mapping for return channel
- DAMA (Demand Assigned Multiple Access): capacity request categories (CRA, RBDC, VBDC, AVBDC)
- NCC (Network Control Center): the brain that allocates return capacity
- Terminal logon and synchronization procedures

### Week 3: Performance Enhancement
- TCP/IP over satellite: latency, ACK delays, slow start problems
- PEPs (Performance Enhancing Proxies): TCP splitting, spoofing, acceleration
- IP header compression (ROHC)
- Quality of Service: traffic shaping, bandwidth allocation
- Comparison with Starlink's approach (proprietary PHY, different architecture)

### Week 4: System Architecture & Deployment
- Star (hub-spoke) vs. mesh vs. multi-star topologies
- Transparent vs. regenerative payloads — impact on networking
- VSAT network design: sizing, capacity planning
- Migration from DVB-S/S2 to S2X
- Industry convergence: will LEO constellations adopt DVB standards?

## Protocol Reference Table

| Protocol | Spec | Layer | Problem It Solves | New/Legacy |
|---|---|---|---|---|
| DVB-S2 | EN 302 307-1 | Physical (forward) | Efficient satellite broadcast modulation | `[BOTH]` |
| DVB-S2X | EN 302 307-2 | Physical (forward) | Extended MODCODs, beam hopping | `[NEW SPACE]` |
| DVB-RCS2 | EN 301 545-2 | MAC/Physical (return) | Multi-user return channel access | `[BOTH]` |
| GSE | TS 102 606 | Adaptation | IP encapsulation into DVB-S2 | `[BOTH]` |
| RLE | EN 301 545-2 | Adaptation | IP encapsulation for return link | `[BOTH]` |
| TRANSEC | EN 301 545-2 | Security | Over-the-air encryption | `[BOTH]` |
| PEP / TCP acceleration | RFC 3135 | Transport | Mitigate TCP over high-latency satellite | `[LEGACY]` evolving |
| ROHC | RFC 5795 | Adaptation | IP header compression | `[BOTH]` |

## Companies

| Company | Role | New/Legacy |
|---|---|---|
| **ST Engineering iDirect** | VSAT platform (Dialog), DVB-S2X hubs | `[BOTH]` |
| **Hughes (EchoStar)** | Jupiter system, VSAT platforms | `[LEGACY]` |
| **Viasat** | ViaSat-3 ground system, VSAT | `[BOTH]` |
| **Newtec (ST Engineering)** | DVB-S2X modems and hubs | `[BOTH]` |
| **Gilat Satellite Networks** | VSAT platforms, multi-orbit | `[BOTH]` |
| **Comtech** | VSAT, mobile satcom, troposcatter | `[BOTH]` |
| **UHP Networks** | Software-defined VSAT | `[NEW SPACE]` |
| **SES** | O3b mPOWER (MEO), Astra (GEO) | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Communications and Networking* (Höyhtyä, 2025) | Modern DVB-S2/RCS2 coverage |
| ETSI EN 302 307-1/2 | DVB-S2/S2X specifications (free from ETSI) |
| ETSI TR 101 545-4 | DVB-RCS2 implementation guidelines |
| *Digital Video Broadcasting* (DVB Project docs) | https://www.dvb.org |

## Hands-On Exercises

1. **MODCOD Selector (Python):** Build a tool that, given Es/N₀, selects the optimal MODCOD from the DVB-S2X table and computes the resulting spectral efficiency and throughput. Plot efficiency vs. SNR curves with Matplotlib
2. **ACM Simulator (Python):** Simulate a forward link with time-varying channel quality (rain event). Show how ACM adapts MODCOD and maintains throughput vs. fixed coding. Animate with Matplotlib
3. **DAMA Allocator (C++):** Implement a simplified NCC that processes capacity requests (CRA, RBDC, VBDC) from terminals and assigns MF-TDMA slots. Build as a simulation with configurable terminal count
4. **PEP Experiment (Python):** Set up a delayed link (using `tc netem`), run TCP and compare throughput with/without a TCP splitting proxy. Plot results
