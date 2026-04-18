# Module 06: DVB Standards & Satellite Broadband

**Phase:** 2 — Acceleration
**Builds on:** Modules 03, 05

---

## 🔢 Math You'll Learn

### Calculus I: Derivatives — Chain Rule, Optimization & Applications

Deepening your calculus with the tools for optimization and rate-of-change analysis.

- **Chain rule, product/quotient rules** — composing derivatives of complex functions
  - *Space application:* Doppler shift rate — how fast Doppler changes during a pass
- **Implicit differentiation** — related rates in orbital rendezvous
- **Applications — optimization, related rates** — finding maxima/minima
  - *Space application:* optimizing antenna pointing angle for maximum gain
  - *Space application:* maximum data throughput given power and bandwidth constraints
  - *Space application:* ACM optimization — choosing the best MODCOD for current conditions

**🔓 After this:** You can optimize system parameters, compute rate-of-change for dynamic systems, and understand adaptive coding/modulation mathematically.

**Resources:**
- *Calculus: Early Transcendentals* — Stewart (Chapters 3–4)
- Khan Academy — Calculus 1: Derivatives (free)

---

## 🛰️ What You'll Learn

DVB-S2/S2X and DVB-RCS2 are the dominant standards for satellite broadband — they define how data is modulated, multiplexed, and delivered over satellite. This is the "how" behind nearly every commercial satellite internet service.

### DVB-S2 / S2X (Forward Link)
- Physical layer: modulation (QPSK to 256APSK), coding (LDPC+BCH)
- MODCOD table: mapping signal quality to efficiency
- ACM (Adaptive Coding & Modulation): real-time adaptation to link conditions
- Frame structure: BBFRAME → FECFRAME → PLFRAME
- GSE (Generic Stream Encapsulation): mapping IP packets into DVB-S2 frames
- S2X extensions: finer MODCODs, lower roll-off, beam hopping

### DVB-RCS2 (Return Link)
- MF-TDMA (Multi-Frequency TDMA): how terminals share return bandwidth
- Burst structure, timing, synchronization
- RLE (Return Link Encapsulation): efficient IP mapping for return channel
- DAMA (Demand Assigned Multiple Access): capacity request categories (CRA, RBDC, VBDC, AVBDC)
- NCC (Network Control Center): the brain that allocates return capacity
- Terminal logon and synchronization procedures

### Performance Enhancement
- TCP/IP over satellite: latency, ACK delays, slow start problems
- PEPs (Performance Enhancing Proxies): TCP splitting, spoofing, acceleration
- IP header compression (ROHC)
- Quality of Service: traffic shaping, bandwidth allocation
- Comparison with Starlink's approach (proprietary PHY, different architecture)

### System Architecture & Deployment
- Star (hub-spoke) vs. mesh vs. multi-star topologies
- Transparent vs. regenerative payloads — impact on networking
- VSAT network design: sizing, capacity planning
- Industry convergence: will LEO constellations adopt DVB standards?

---

## 💻 C++ & Python Skills

**C++ focus:** Templates, state machine patterns, design patterns (strategy, observer), enum classes
**Python focus:** Animated plots, interactive simulation with matplotlib

---

## Projects

### Project 1: DAMA Capacity Allocator (C++)

Build a simplified NCC (Network Control Center) that manages bandwidth allocation.

**What you'll build:**
- Simulate N terminals, each requesting capacity via CRA, RBDC, or VBDC
- Implement the NCC scheduling algorithm: allocate MF-TDMA slots based on request priorities
- Use a state machine pattern for terminal states (logged-off → syncing → logged-on → transmitting)
- Support configurable total bandwidth and slot sizes
- Output utilization statistics and allocation tables

**C++ skills used:** Templates, enum classes, state machine pattern, STL algorithms, strategy pattern for allocator

### Project 2: MODCOD Selector & ACM Simulator (Python)

Visualize adaptive coding and modulation in action.

**What you'll build:**
- Load the DVB-S2X MODCOD table (Es/N₀ threshold → spectral efficiency)
- Given an Es/N₀ value, select the optimal MODCOD
- Simulate a forward link with time-varying channel quality (rain event that reduces Es/N₀ over time)
- Animate how ACM adapts MODCOD in real-time to maintain throughput vs. fixed coding that drops out
- Plot spectral efficiency vs. SNR curves

**Python skills used:** matplotlib animation, NumPy, lookup tables, event simulation

---

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
| **UHP Networks** | Software-defined VSAT | `[NEW SPACE]` |
| **SES** | O3b mPOWER (MEO), Astra (GEO) | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Communications and Networking* (Höyhtyä, 2025) | Modern DVB-S2/RCS2 coverage |
| ETSI EN 302 307-1/2 | DVB-S2/S2X specifications (free from ETSI) |
| ETSI TR 101 545-4 | DVB-RCS2 implementation guidelines |
| *Digital Video Broadcasting* (DVB Project docs) | https://www.dvb.org |
