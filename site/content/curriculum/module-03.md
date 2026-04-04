---
title: "Module 03: Delay-Tolerant Networking (DTN)"
module_number: 03
weight: 03
---


**Duration:** 5 weeks
**Prerequisites:** Modules 01–02

---

## What You'll Learn

DTN is the most important paradigm shift from terrestrial networking. TCP assumes end-to-end connectivity exists. DTN assumes it doesn't. You'll learn the Bundle Protocol, Licklider Transmission Protocol, and Contact Graph Routing — the core of how the "Solar System Internet" works.

## The Problem DTN Solves

In terrestrial networks, if you send a TCP SYN, you expect a SYN-ACK within milliseconds. In space:
- A Mars link has **4–24 minute one-way delay** (8–48 min round-trip)
- A LEO satellite has **~5 minutes of contact** per ground station pass
- Links are **scheduled**, not always-on — a node may only be reachable at specific orbital windows
- TCP's assumption of continuous end-to-end path **completely breaks**

DTN solves this with **store-and-forward** at the application layer, using custodial transfer where each node takes responsibility for data until the next hop is available.

## Topics

### Weeks 1–4: Bundle Protocol (BP)
- RFC 9171 (BPv7) — the current standard
- Bundle structure: primary block, canonical blocks, payload block, extension blocks
- Bundle endpoint IDs (EIDs) — `ipn:` and `dtn:` URI schemes
- Custody transfer and bundle status reports
- Fragmentation and reassembly
- How BP compares to IP — and why it's an overlay, not a replacement

### Week 3: Licklider Transmission Protocol (LTP)
- RFC 5326 — LTP specification
- The "convergence layer" concept — how BP sits on top of LTP (or TCP, or UDP)
- LTP segments: red parts (reliable) vs. green parts (unreliable)
- Checkpoint/report retransmission mechanism
- Why LTP exists: TCP can't handle 8-minute RTTs, but you still need reliability
- **Your TCP expertise directly maps here** — LTP is essentially "TCP redesigned for space delays"

### Week 4: Contact Graph Routing (CGR)
- Time-variant routing: the topology changes on a schedule
- Contact plans: list of (start_time, end_time, node_A, node_B, data_rate) tuples
- Route computation: Dijkstra-like but over a time-expanded graph
- Overbooking and congestion management
- CGR in ION — NASA/JPL's reference implementation

### Week 5: Integration & Deployment
- DTN on the ISS — operational since 2018
- DTN in deep space: Mars relay network architecture
- HDTN — NASA Glenn's High-rate DTN implementation
- DTN for LEO constellations — emerging applications
- DTN vs. TCP/IP in space: when to use which

## Protocol Reference Table

| Protocol | Spec | Layer | Problem It Solves | New/Legacy | Who Uses It |
|---|---|---|---|---|---|
| Bundle Protocol v7 | RFC 9171 | Overlay/Application | Store-and-forward across disrupted links | `[NEW SPACE]` | ISS, future deep space missions |
| Bundle Protocol v6 | RFC 5050 | Overlay/Application | Original BP (being superseded) | `[LEGACY]` | Early ISS DTN experiments |
| LTP | RFC 5326 | Convergence Layer | Reliable transfer over long-delay links | `[NEW SPACE]` | Deep space, ISS |
| TCPCL (TCP Conv. Layer) | RFC 9174 | Convergence Layer | BP over TCP for ground segments | `[BOTH]` | Ground networks |
| UDPCL | Draft | Convergence Layer | BP over UDP for low-overhead links | `[NEW SPACE]` | Experimental |
| CGR | CCSDS Green Book | Routing | Time-variant multi-hop routing | `[NEW SPACE]` | ION, research networks |
| BIBE | RFC 9172 | Tunneling | BP-in-BP encapsulation for admin regions | `[NEW SPACE]` | Future architectures |

## Where This Tech Is Used

| Application | Organizations | Status |
|---|---|---|
| ISS payload data relay | NASA | **Operational** since 2018 |
| Mars relay network | NASA/JPL | DTN planned for future surface ops |
| Lunar communications | NASA (LunaNet) | DTN is baseline architecture |
| LEO constellation store-forward | Research / startups | Emerging — DTN for IoT data mules |
| Disaster/disrupted terrestrial | Military, humanitarian | DTN for networks with no infrastructure |

## Companies & Organizations

| Entity | Role | New/Legacy |
|---|---|---|
| NASA/JPL | ION-DTN development, CGR research | `[BOTH]` |
| NASA Glenn | HDTN (High-rate DTN) | `[NEW SPACE]` |
| ESA | µPCN, DTN for European missions | `[BOTH]` |
| IETF DTN WG | Standards body for BP, LTP, TCPCL | `[BOTH]` |
| CCSDS SIS Area | Space DTN standardization | `[BOTH]` |

## Math Used
- **Graph theory (Discrete Math):** CGR is Dijkstra over a time-expanded graph
- **Queuing theory (Probability):** buffer management, bundle congestion
- **Logarithms:** data rate calculations, contact capacity

## Books & Resources

| Resource | Notes |
|---|---|
| RFC 9171 (BPv7) | **Read this first.** The actual standard. |
| RFC 5326 (LTP) | LTP specification — compare mentally to TCP |
| *Delay-Tolerant Satellite Networks* (Fraire, Burleigh) | **The** book for this module — by the creators of CGR and ION |
| CCSDS 734.x (DTN standards) | CCSDS profiling of BP for space missions |
| ION-DTN Documentation | https://ion-dtn.readthedocs.io/ |
| NASA HDTN GitHub | https://github.com/nasa/HDTN |

## Hands-On Exercises

1. **Deploy ION-DTN:** Set up NASA's ION on a VM using the DTN Development Kit ISO. Run the included tutorials — send bundles between nodes
2. **Build a Minimal BP Forwarder (C++):** Implement BPv7 bundle creation, serialization (CBOR via tinycbor or nlohmann), and store-and-forward — start with `ipn:` EIDs
3. **LTP Simulator (C++):** Build an LTP sender/receiver over UDP sockets. Implement red/green segments, checkpoints, and retransmission. Inject artificial delay (use `tc netem`) to simulate a 5-second one-way delay
4. **CGR Path Finder (Python):** Given a contact plan (list of scheduled contacts), implement Dijkstra over a time-expanded graph using NetworkX to find the earliest-arrival path between two nodes
5. **DTN vs TCP Experiment (Python):** Run a file transfer over a simulated disrupted link using both TCP and your BP implementation. Measure completion time, plot results with Matplotlib. Write up findings.
