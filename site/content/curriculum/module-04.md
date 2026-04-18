---
title: "Module 04: Delay-Tolerant Networking"
module_number: 04
weight: 04
---


**Phase:** 2 — Acceleration
**Builds on:** Modules 01, 02, 03

---

## 🔢 Math You'll Learn

### Trigonometry Completion + Pre-Calculus Introduction

Finishing trig and starting pre-calc — the bridge to calculus.

- **Trig review & polar coordinates** — antenna radiation patterns are plotted in polar coordinates
- **Angular velocity, arc length, radians** — satellite angular rate as seen from ground
- **Functions, composition, inverses** — building mathematical models that chain together
  - *Space application:* composing coordinate transforms, signal processing chains
- **Parametric equations** — curves defined by a parameter (time)
  - *Space application:* satellite ground tracks are parametric curves (lat(t), lon(t))
- **Vectors introduction** — magnitude, direction, addition
  - *Space application:* relative position and velocity between nodes in a DTN network

**🔓 After this:** You can trace satellite ground tracks, work with antenna patterns, and reason about parametric motion.

**Resources:**
- Khan Academy — Trigonometry completion + Pre-Calculus (free)
- *Precalculus: Mathematics for Calculus* — Stewart

---

## 🛰️ What You'll Learn

DTN is the most important paradigm shift from terrestrial networking. TCP assumes end-to-end connectivity exists. DTN assumes it doesn't. You'll learn the Bundle Protocol, Licklider Transmission Protocol, and Contact Graph Routing — the core of how the "Solar System Internet" works.

### The Problem DTN Solves

In terrestrial networks, if you send a TCP SYN, you expect a SYN-ACK within milliseconds. In space:
- A Mars link has **4–24 minute one-way delay** (8–48 min round-trip)
- A LEO satellite has **~5 minutes of contact** per ground station pass
- Links are **scheduled**, not always-on — a node may only be reachable at specific orbital windows
- TCP's assumption of continuous end-to-end path **completely breaks**

DTN solves this with **store-and-forward** at the application layer, using custodial transfer where each node takes responsibility for data until the next hop is available.

### Bundle Protocol (BP)
- RFC 9171 (BPv7) — the current standard
- Bundle structure: primary block, canonical blocks, payload block, extension blocks
- Bundle endpoint IDs (EIDs) — `ipn:` and `dtn:` URI schemes
- Custody transfer and bundle status reports
- Fragmentation and reassembly
- How BP compares to IP — and why it's an overlay, not a replacement

### Licklider Transmission Protocol (LTP)
- RFC 5326 — LTP specification
- The "convergence layer" concept — how BP sits on top of LTP (or TCP, or UDP)
- LTP segments: red parts (reliable) vs. green parts (unreliable)
- Checkpoint/report retransmission mechanism
- Why LTP exists: TCP can't handle 8-minute RTTs, but you still need reliability
- **Your TCP expertise directly maps here** — LTP is essentially "TCP redesigned for space delays"

### Contact Graph Routing (CGR) — Concepts
- Time-variant routing: the topology changes on a schedule
- Contact plans: list of (start_time, end_time, node_A, node_B, data_rate) tuples
- Route computation: Dijkstra-like but over a time-expanded graph
- *Note: Full CGR implementation comes in Module 12 (Capstone) after you learn Graph Theory*

### Integration & Deployment
- DTN on the ISS — operational since 2018
- DTN in deep space: Mars relay network architecture
- HDTN — NASA Glenn's High-rate DTN implementation
- DTN for LEO constellations — emerging applications

---

## 💻 C++ & Python Skills

**C++ focus:** Networking (POSIX sockets, UDP), serialization (CBOR via tinycbor), Boost.Asio intro, async I/O basics
**Python focus:** Socket programming, scientific comparison, matplotlib for results

---

## Projects

### Project 1: BPv7 Bundle Creator (C++)

Build a library that creates, serializes, and parses Bundle Protocol v7 bundles.

**What you'll build:**
- Define bundle structures: primary block, payload block, extension blocks
- Serialize bundles to CBOR format (using tinycbor or nlohmann/json for prototyping)
- Parse CBOR-encoded bundles back into structured data
- Support `ipn:` endpoint IDs
- Build as a reusable library with CMake

**C++ skills used:** Structs/classes, serialization, CBOR, CMake library targets, unit tests (gtest)

**🔧 Toolkit:** Add `BundleProtocol` module to the Space Network Toolkit — builds on the `PacketParser` from Module 01

### Project 2: DTN vs TCP File Transfer Experiment (Python)

Compare file delivery over a simulated disrupted link using TCP vs. a simple store-and-forward approach.

**What you'll build:**
- Set up a simulated lossy, delayed link using `tc netem` (add 2-second delay, 10% packet loss)
- Transfer a file using TCP sockets
- Transfer the same file using a basic store-and-forward approach over UDP
- Measure completion time for both, plot comparison with matplotlib
- Write up findings: when does DTN-style delivery win?

**Python skills used:** Socket programming, subprocess (for `tc netem`), timing, matplotlib

---

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

## Books & Resources

| Resource | Notes |
|---|---|
| RFC 9171 (BPv7) | **Read this first.** The actual standard. |
| RFC 5326 (LTP) | LTP specification — compare mentally to TCP |
| *Delay-Tolerant Satellite Networks* (Fraire, Burleigh) | **The** book for this module — by the creators of CGR and ION |
| CCSDS 734.x (DTN standards) | CCSDS profiling of BP for space missions |
| ION-DTN Documentation | https://ion-dtn.readthedocs.io/ |
| NASA HDTN GitHub | https://github.com/nasa/HDTN |
