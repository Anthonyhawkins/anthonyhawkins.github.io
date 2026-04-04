# Learning Path — Parallel Tracks with Unlock System

Your starting point: **Algebra 1 (through quadratics)**, senior-level networking expertise, new to C++.

This curriculum runs **three tracks in parallel**. Space networking topics unlock as your math progresses — but many topics need **zero advanced math** and can start Day 1.

---

## The Skill Tree

```
YOUR STARTING SKILLS                    WHAT THEY UNLOCK (Day 1)
─────────────────────                   ─────────────────────────
Algebra 1 (quadratics)  ──────────────► dB arithmetic, basic link math
TCP/IP / gRPC expertise ──────────────► CCSDS protocol stack, DTN concepts,
                                         protocol state machines, SDN, security
Software engineering    ──────────────► C++ fundamentals, build systems


MATH UNLOCKS                            SPACE NETWORKING UNLOCKS
────────────                            ────────────────────────
Algebra 2 + Trig        ──────────────► Link budgets, elevation angles,
                                         antenna beam geometry, Doppler (basic)

Pre-Calculus             ──────────────► Frequency analysis concepts,
                                         signal power, modulation intuition

Calculus I               ──────────────► Doppler rate-of-change, orbital velocity,
                                         signal energy over a pass

Calculus II              ──────────────► Fourier basics, spectral efficiency,
                                         coding theory

Calculus III             ──────────────► Orbital mechanics vectors, satellite
                                         position/velocity, constellation geometry

Linear Algebra           ──────────────► Coordinate frame transforms (ECI↔ECEF),
                                         rotation matrices, antenna patterns

Probability & Stats      ──────────────► BER curves, noise analysis, rain fade
                                         availability, channel modeling

Graph Theory             ──────────────► Contact Graph Routing, Dijkstra,
                                         traffic engineering optimization
```

---

## Phase 1: Foundation (Weeks 1–20)

> **Math:** Algebra 2 → Trigonometry
> **C++:** Language fundamentals → OOP
> **Space:** Protocol concepts + industry landscape (no advanced math needed)

### Week-by-Week

| Week | 🔢 Math (45 min/day) | 💻 C++ (30 min/day) | 🛰️ Space Networking (45 min/day) |
|------|----------------------|--------------------|------------------------------------|
| 1–2 | Algebra 2: polynomials, rational expressions | Variables, types, control flow, functions | Read: CCSDS 130.0-G-4 (protocol overview — it's a map, no math needed) |
| 3–4 | Algebra 2: exponentials & logarithms | Arrays, strings, pointers, references | **dB arithmetic unlocked** — learn dB, dBW, dBm conversions (just log₁₀) |
| 5–6 | Algebra 2: logarithm properties, log equations | Classes, constructors, RAII | Read: RFC 9171 (BPv7) — the Bundle Protocol spec (pure protocol design) |
| 7–8 | Algebra 2: sequences, series, summation notation | Inheritance, polymorphism, virtual functions | DTN concepts: store-and-forward, custody transfer, convergence layers |
| 9–10 | Trigonometry: unit circle, sin/cos/tan | Templates basics, STL containers | **Elevation angle unlocked** — ground station visibility geometry |
| 11–12 | Trig: law of sines/cosines, identities | Iterators, algorithms, lambdas | Read: module 02 (CCSDS Protocol Stack) — it's all protocol architecture |
| 13–14 | Trig: polar coordinates, vectors intro | File I/O, binary data, bitwise ops | **🔨 Project: CCSDS Packet Parser (C++)** — parse binary protocol headers |
| 15–16 | Trig: angular velocity, arc length | Smart pointers, move semantics | Link budget intro: FSPL equation uses log₁₀ and trig (you now have both) |
| 17–18 | Trig review + problem sets | Error handling, exceptions, RAII patterns | **🔨 Project: dB Link Budget Calculator (C++)** — compute FSPL for LEO/GEO |
| 19–20 | Assessment: Algebra 2 + Trig mastery check | CMake, project structure, gtest | Read: module 07 (Ground Segment Architecture) — systems knowledge, no math |

### Phase 1 Integrated Project

**📦 CCSDS Protocol Toolkit (C++)**
Build a CLI tool that:
- Parses CCSDS Space Packet headers (binary/bitwise — C++ + protocol knowledge)
- Computes free-space path loss for different bands (logarithms + trig)
- Calculates ground station elevation angle for a given satellite altitude (trig)

**Math used:** Logarithms, basic trig (sin, cos, elevation angle)
**C++ skills used:** Binary I/O, bitwise ops, classes, CMake

---

## Phase 2: Acceleration (Weeks 21–44)

> **Math:** Pre-Calculus → Calculus I
> **C++:** Networking + systems programming
> **Space:** DTN implementation + link engineering

| Week | 🔢 Math (45 min/day) | 💻 C++ (30 min/day) | 🛰️ Space Networking (45 min/day) |
|------|----------------------|--------------------|------------------------------------|
| 21–22 | Pre-calc: functions, composition, inverses | Networking: sockets (POSIX/Boost.Asio) | Read: RFC 5326 (LTP) — compare to TCP mentally |
| 23–24 | Pre-calc: exponential/log functions (deeper) | UDP client/server, async I/O | **🔨 Start: LTP Simulator (C++)** — red/green segments over UDP |
| 25–26 | Pre-calc: parametric equations, vectors | TCP client/server, protocol framing | LTP Simulator continued — checkpoint/retransmission |
| 27–28 | Pre-calc: conic sections (ellipses!) | Multithreading: std::thread, mutex | **Ellipse unlocked** → Kepler orbits are ellipses! Orbital shape intuition |
| 29–30 | Calculus I: limits, continuity | Concurrency: condition variables, atomics | Read: module 05 (LEO Constellations) — conceptual routing, topology |
| 31–32 | Calc I: derivatives — definition, rules | Serialization: CBOR (tinycbor), JSON | **Rate-of-change unlocked** → Doppler is derivative of range |
| 33–34 | Calc I: chain rule, implicit differentiation | CMake advanced, linking libraries | **🔨 Project: Doppler Curve Plotter (Python)** — derivatives in action |
| 35–36 | Calc I: applications — optimization, related rates | Boost.Graph intro | Read: module 10 (SDN) — you know SDN from terrestrial, concepts transfer |
| 37–38 | Calc I: integrals — fundamental theorem | Google Test, unit testing patterns | **Signal energy unlocked** → energy = ∫ power dt over a pass |
| 39–40 | Calc I: integration techniques | Profiling, performance optimization | Read: module 08 (DVB Standards) — system architecture (conceptual) |
| 41–42 | Calc I: applications of integration | Code review / refactor LTP Simulator | **🔨 Project: Contact Window Calculator (Python)** — when can a ground station see a satellite? Uses trig + calculus |
| 43–44 | Calc I mastery check + review | Polish and test all projects | Read: module 09 (5G NTN) — architecture overview (conceptual) |

### Phase 2 Integrated Project

**📦 DTN Node Prototype (C++)**
Build a Bundle Protocol v7 node that:
- Creates and serializes bundles (CBOR encoding — C++ + serialization)
- Sends bundles over UDP using your LTP simulator (networking + protocol)
- Stores bundles when no link available, forwards when link opens (store-and-forward)

**Math used:** Logarithms (data rate), basic calculus (contact window duration)
**C++ skills used:** Sockets, async I/O, serialization, multithreading

---

## Phase 3: Depth (Weeks 45–76)

> **Math:** Calculus II → Calculus III → Linear Algebra
> **C++:** Advanced patterns + space libraries
> **Space:** Constellation routing, optical links, full link engineering

| Week | 🔢 Math (45 min/day) | 💻 C++ (30 min/day) | 🛰️ Space Networking (45 min/day) |
|------|----------------------|--------------------|------------------------------------|
| 23–24 | Calc II: techniques of integration | Design patterns for protocol engines | **Spectral efficiency unlocked** → understanding modulation trade-offs |
| 25–26 | Calc II: sequences & series | Template metaprogramming, concepts | DVB-S2 deep dive: MODCOD selection, ACM |
| 27–28 | Calc II: Fourier series intro | State machine patterns (for protocols) | **Fourier unlocked** → why OFDM works, bandwidth concepts |
| 29–30 | Calc III: vectors in 3D, dot/cross product | Eigen library integration | **3D vectors unlocked** → satellite position/velocity vectors |
| 31–32 | Calc III: partial derivatives, gradients | Spatial algorithms, KD-trees | **🔨 Project: Orbit Propagator (C++ + Eigen)** — compute satellite positions |
| 33–34 | Calc III: coordinate systems (spherical, cylindrical) | Python/C++ interop (pybind11) | **Coordinate transforms unlocked** → lat/lon ↔ ECEF ↔ ECI |
| 35–36 | Linear algebra: matrices, transforms, rotations | Performance-critical C++ patterns | **Rotation matrices unlocked** → reference frame conversions |
| 37–38 | Linear algebra: eigenvalues, least squares | Build system mastery, CI/CD | **🔨 Project: Constellation Topology Engine (C++)** — compute ISL links for a Walker constellation using 3D geometry |

### Phase 3 Integrated Project

**📦 LEO Constellation Simulator (C++ engine + Python visualization)**
- C++ engine: propagate orbits, compute ISL topology, run Dijkstra routing
- Python layer: visualize constellation on a globe, plot latency heatmaps
- Uses: Calc III vectors, linear algebra transforms, graph algorithms

---

## Phase 4: Mastery (Weeks 77–104)

> **Math:** Probability & Statistics → Graph Theory → Optimization
> **C++:** Production-quality systems
> **Space:** Full link engineering, CGR, security, capstone

| Week | 🔢 Math (45 min/day) | 💻 C++ (30 min/day) | 🛰️ Space Networking (45 min/day) |
|------|----------------------|--------------------|------------------------------------|
| 39–40 | Probability: distributions, Gaussian, CLT | OpenSSL/libsodium integration | **Noise analysis unlocked** → Eb/N₀, BER, link margin |
| 41–42 | Probability: Rayleigh/Rician, Markov chains | Performance testing, benchmarking | **Full link budgets unlocked** → complete rain fade analysis |
| 43–44 | Statistics: hypothesis testing, confidence intervals | gRPC in C++ (grpc++) | **🔨 Project: Complete Link Budget Tool (Python)** with rain fade, atmospheric effects, availability |
| 45–46 | Graph theory: Dijkstra, Bellman-Ford, time-expanded graphs | Advanced async patterns | **CGR fully unlocked** → time-variant routing implementation |
| 47–48 | Graph theory + LP: optimization, scheduling | System design for distributed systems | **🔨 Project: Contact Graph Router (C++)** — the core DTN routing algorithm |
| 49–50 | Review + applied problem sets | Capstone project work | Module 11 (Security) — SDLS, BPSec implementation |
| 51–52 | Final assessment | Capstone project work | **🔨 Capstone: see Module 12 — pick 2 projects** |

---

## What You Can Read RIGHT NOW (No Math Needed)

These modules are primarily **conceptual, architectural, and protocol-focused** — your networking background is the prerequisite, not math:

| Module | Why No Math | Your Advantage |
|--------|------------|----------------|
| 02 — CCSDS Protocol Stack | It's protocol architecture, like learning a new RFC suite | You already think in protocol layers |
| 03 — DTN (concepts) | Store-and-forward, custody transfer, convergence layers are networking concepts | TCP state machines → COP-1 state machines |
| 07 — Ground Segment | Systems architecture: gateways, POPs, load balancing | This is edge infrastructure |
| 10 — SDN in Space | Control plane / data plane separation, flow rules | You already know SDN concepts |
| 11 — Security (concepts) | SDLS ≈ TLS at the data link layer, BPSec ≈ end-to-end encryption | You already know mTLS |
| 09 — 5G NTN (architecture) | System architecture, handover concepts | Mobile networking concepts |

---

## Integrated Project Roadmap

Each project combines your current math level + C++ skills + space networking knowledge:

```
Week  Math Level         Project                              C++ Skills Used
─────────────────────────────────────────────────────────────────────────────
13-14 Trig              CCSDS Packet Parser                   Binary I/O, bitwise
17-18 Trig + Logs       dB Link Budget Calculator             Classes, CLI
23-26 Pre-calc          LTP Simulator                         UDP sockets, async
33-34 Calc I (deriv)    Doppler Curve Plotter (Python)         (Python + NumPy)
41-42 Calc I (integ)    Contact Window Calculator (Python)     (Python + Skyfield)
43-44 Calc I            DTN Node Prototype                    Serialization, threads
61-64 Calc III          Orbit Propagator                      Eigen, 3D math
73-76 Linear Algebra    Constellation Topology Engine         Spatial algorithms
85-88 Probability       Complete Link Budget Tool (Python)     (Python + SciPy)
93-96 Graph Theory      Contact Graph Router                  Boost.Graph, algorithms
101-104 All               CAPSTONE (pick 2 from Module 12)      Full stack
```

---

## Daily Schedule Template

| Block | Duration | Focus |
|-------|----------|-------|
| Morning | 1.5 hrs | 🔢 Math — structured lessons + problem sets |
| Midday | 1.0 hr | 💻 C++ — language learning + small exercises |
| Evening | 1.5 hrs | 🛰️ Space — reading + project work (using current math + C++) |

**Total: ~2 hours/day, 5 days/week**

Weekends: project work, reading CCSDS specs, watching 3Blue1Brown

---

## Math Resources (Starting from Algebra 2)

| Topic | Primary Resource | Visual Supplement |
|-------|-----------------|-------------------|
| Algebra 2 | Khan Academy (free) | 3Blue1Brown — *Essence of Calculus* (watch early for context) |
| Trigonometry | Khan Academy (free) | — |
| Pre-Calculus | Khan Academy (free) | — |
| Calculus I–II | *Calculus: Early Transcendentals* (Stewart) | 3Blue1Brown — *Essence of Calculus* |
| Calculus III | Stewart + *Orbital Mechanics* (Curtis) | 3Blue1Brown — *Essence of Linear Algebra* |
| Linear Algebra | *Intro to Linear Algebra* (Strang) + MIT OCW 18.06 | 3Blue1Brown — *Essence of Linear Algebra* |
| Probability | Khan Academy + *Probability for Engineers* (Devore) | — |
| Graph Theory | CLRS Ch. 22–26 + Khan Academy discrete math | — |
