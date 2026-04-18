# Learning Path — Skill Tree & Roadmap

Your starting point: **Algebra 1 (through quadratics)**, senior-level networking expertise, new to C++.

Each module teaches the math you need, then applies it to a space networking topic with hands-on C++ and Python projects. Start at Module 01 and work forward.

---

## The Skill Tree

```
YOUR STARTING SKILLS                    WHAT THEY UNLOCK (Module 01)
─────────────────────                   ────────────────────────────
Algebra 1 (quadratics)  ──────────────► dB arithmetic, basic link math
TCP/IP / gRPC expertise ──────────────► CCSDS protocol stack, DTN concepts,
                                         protocol state machines, SDN, security
Software engineering    ──────────────► C++ fundamentals, build systems


MATH UNLOCKS                            SPACE NETWORKING UNLOCKS
────────────                            ────────────────────────
Algebra 2 + Trig        ──────────────► Link budgets, elevation angles,
(Modules 01–03)                          antenna beam geometry, Doppler (basic)

Pre-Calculus             ──────────────► Frequency analysis concepts,
(Modules 04–05)                          signal power, modulation intuition,
                                         Kepler orbits (ellipses!)

Calculus I               ──────────────► Doppler rate-of-change, orbital velocity,
(Modules 05–07)                          signal energy over a pass, optimization

Calculus II              ──────────────► Fourier basics, spectral efficiency,
(Modules 07–08)                          coding theory

Calculus III             ──────────────► Orbital mechanics vectors, satellite
(Modules 08–09)                          position/velocity, constellation geometry

Linear Algebra           ──────────────► Coordinate frame transforms (ECI↔ECEF),
(Modules 09–10)                          rotation matrices, antenna patterns

Probability & Stats      ──────────────► BER curves, noise analysis, rain fade
(Module 11)                              availability, channel modeling

Graph Theory             ──────────────► Contact Graph Routing, Dijkstra,
(Module 12)                              traffic engineering optimization
```

---

## Phase 1: Foundation (Modules 01–03)

> **Math:** Algebra 2 → Trigonometry
> **C++:** Language fundamentals → OOP
> **Space:** Protocol concepts + industry landscape

| Module | Math | C++ | Space Topic |
|--------|------|-----|-------------|
| 01 — CCSDS Protocol Stack | Algebra 2: logs, exponentials, dB | Variables, types, binary I/O, bitwise | Protocol architecture, Space Packets, data link |
| 02 — Foundations of Space Comms | Algebra 2 + Trig intro | Control flow, classes, enums | Space environment, frequency bands, delays |
| 03 — Ground Segment Architecture | Trig: law of cosines, elevation angles | OOP, containers, algorithms | Ground stations, gateways, POPs, cloud GS |

### Phase 1 Integrated Project: **CCSDS Protocol Toolkit (C++)**
- Parses CCSDS Space Packet headers (binary/bitwise)
- Computes free-space path loss for different bands (logarithms + trig)
- Calculates ground station elevation angle for a given satellite altitude (trig)

---

## Phase 2: Acceleration (Modules 04–07)

> **Math:** Pre-Calculus → Calculus I → Calculus II intro
> **C++:** Networking + systems programming + first concurrency
> **Space:** DTN implementation + link engineering + broadband standards

| Module | Math | C++ | Space Topic |
|--------|------|-----|-------------|
| 04 — Delay-Tolerant Networking | Trig completion + Pre-Calc intro | Sockets, UDP, CBOR serialization | Bundle Protocol, LTP, store-and-forward |
| 05 — Satellite Link Engineering | Pre-Calc + Calc I intro | JSON config, CMake, gtest | Link budgets, FSPL, rain fade, antennas |
| 06 — DVB Standards & Broadband | Calc I: derivatives, optimization | Templates, state machines, patterns | DVB-S2/RCS2, MODCOD, ACM, PEPs |
| 07 — 5G NTN Integration | Calc I completion + Calc II intro | `std::thread`, mutex, concurrency | NTN architecture, HARQ, handover |

### Phase 2 Integrated Project: **DTN Node Prototype (C++)**
- BPv7 bundle creation and CBOR serialization
- LTP over UDP with checkpoint/retransmission
- Store-and-forward when link unavailable

---

## Phase 3: Depth (Modules 08–10)

> **Math:** Calculus II → Calculus III → Linear Algebra
> **C++:** Eigen, async, system design
> **Space:** Constellation routing, optical links, SDN orchestration

| Module | Math | C++ | Space Topic |
|--------|------|-----|-------------|
| 08 — LEO Constellations & Routing | Calc II + Calc III (3D vectors) | Eigen, Boost.Graph, `std::async` | Walker constellations, ISL routing, handover |
| 09 — Optical Inter-Satellite Links | Calc III + Linear Algebra | pybind11, performance-critical | Laser links, ATP, OISL mesh topology |
| 10 — SDN & Network Management | Linear Algebra + Optimization | REST API, gRPC, system design | Programmable networks, TS-SDN, traffic eng. |

### Phase 3 Integrated Project: **LEO Constellation Simulator (C++ + Python)**
- C++ engine: propagate orbits, compute ISL topology, run Dijkstra routing
- Python layer: visualize constellation on a globe, plot latency heatmaps

---

## Phase 4: Mastery (Modules 11–12)

> **Math:** Probability & Statistics → Graph Theory
> **C++:** Production-quality, crypto, distributed systems
> **Space:** Security, full system integration, capstone

| Module | Math | C++ | Space Topic |
|--------|------|-----|-------------|
| 11 — Security in Space Networks | Probability & Statistics | OpenSSL, concurrent crypto | SDLS, BPSec, jamming, QKD |
| 12 — Capstone Projects | Graph Theory & Optimization | Full production stack | Choose 2 portfolio-grade projects |

### Phase 4 Integrated Project: **Capstone (choose 2)**
- DTN Bundle Protocol implementation
- LEO Constellation Network Simulator
- Ground Station Network Orchestrator
- Satellite-Friendly Transport Protocol
- Space Network Security Testbed

---

## Long-Running Project: Space Network Toolkit

A C++ library that grows across modules:

```
Module  Addition                              Builds On
──────────────────────────────────────────────────────────
01      PacketParser (CCSDS Space Packets)     —
03      GroundStation (elevation, visibility)  —
04      BundleProtocol (BPv7 bundles, CBOR)   PacketParser
05      LinkBudget (FSPL, atmospheric loss)    —
08      ConstellationEngine (orbits, topology) GroundStation
09      ISLTopology (optical links, mesh)      ConstellationEngine
10      SDNController (forwarding, REST API)   ConstellationEngine + ISLTopology
```

---

## Daily Schedule Template

| Block | Duration | Focus |
|-------|----------|-------|
| Morning | ~45 min | 🔢 Math — structured lessons + problem sets |
| Midday | ~30 min | 💻 C++ — language learning + small exercises |
| Evening | ~45 min | 🛰️ Space — reading + project work (using current math + C++) |

Weekends: project work, reading CCSDS specs, watching 3Blue1Brown

---

## Math Resources

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

## C++ & Python Setup (Do This Before Module 01)

### C++ Toolchain
- Compiler: `clang++` or `g++` with C++20
- Build system: CMake
- Libraries: Eigen (linear algebra), Boost (networking, math), nlohmann/json
- Testing: Google Test (gtest)
- IDE: VS Code with clangd

### Python Toolchain
- Python 3.11+
- Libraries: NumPy, SciPy, Matplotlib, Astropy, Skyfield, NetworkX
- Jupyter notebooks for exploration
- pytest for testing

### Setup Exercise
1. Build a C++ project with CMake — verify by printing "Hello, Space Networking"
2. Build a Python environment that imports NumPy and Matplotlib — verify by plotting sin(x)
