# Module 12: Capstone Projects

**Phase:** 4 — Mastery
**Builds on:** All previous modules

---

## 🔢 Math You'll Learn

### Graph Theory & Optimization

The final math module — algorithms for routing, scheduling, and optimization.

- **Graph fundamentals** — nodes, edges, weighted, directed
- **Shortest path — Dijkstra, Bellman-Ford** — optimal routing through networks
  - *Space application:* satellite routing, ISL path selection
- **Time-expanded graphs** — modeling networks that change over time
  - *Space application:* Contact Graph Routing (CGR) — the core DTN routing algorithm
- **Linear programming (LP) and Integer LP** — optimization under constraints
  - *Space application:* traffic engineering, ground station contact scheduling
  - *Space application:* resource allocation under limited capacity

**🔓 After this:** You can implement CGR, optimize traffic engineering, and design full-system scheduling algorithms.

**Resources:**
- *Introduction to Algorithms* (CLRS) — Chapters 22–26
- *Discrete Mathematics and Its Applications* — Rosen

---

## 🛰️ Overview

Choose **2 of the following 5** capstone projects. Each synthesizes multiple modules and produces portfolio-grade work that demonstrates your space networking expertise.

---

## Project A: DTN Bundle Protocol Implementation

**Modules Used:** 01, 04, 11
**Language:** C++

### Deliverable
A complete, working BPv7 (RFC 9171) node implementation in C++ that can:
- Create, serialize (CBOR), and parse bundles (extended from Module 04 toolkit)
- Store bundles persistently (SQLite or filesystem)
- Forward bundles over simulated disrupted links using LTP or TCPCL
- Support BPSec integrity and confidentiality blocks (from Module 11)
- Implement CGR for multi-hop routing using your new Graph Theory knowledge

### Why It Matters
This directly demonstrates the highest-value skill in space networking. NASA, ESA, and defense contractors all need DTN engineers.

### Stretch Goals
- Interop with ION-DTN (also written in C)
- Performance benchmarks vs. TCP over disrupted link
- Python dashboard showing bundle flow and node status

---

## Project B: LEO Constellation Network Simulator

**Modules Used:** 03, 08, 09, 10
**Language:** C++ (routing engine) + Python (visualization)

### Deliverable
A simulator that:
- Generates a configurable Walker constellation (extended from Module 08 toolkit)
- Computes ISL topology with optical link constraints (from Module 09)
- Routes traffic using shortest-path or CGR (C++ engine with Boost.Graph)
- Compares satellite-routed latency vs. great-circle fiber for city pairs worldwide
- Includes SDN controller for dynamic route management (from Module 10)
- Visualizes in 3D with Plotly or on a map with Cartopy

### Why It Matters
Constellation operators (SpaceX, Amazon, Telesat) need people who understand the networking layer — not just RF or orbital mechanics.

### Stretch Goals
- Gateway handover and ground segment simulation
- Capacity simulation: apply traffic demand and show congestion
- Multi-orbit networking (LEO + MEO)

---

## Project C: Ground Station Network Orchestrator

**Modules Used:** 03, 10
**Language:** C++ (core engine) + Python (scheduling optimization)

### Deliverable
A microservice system that:
- Ingests satellite ephemeris data (TLEs) and computes passes (extending Module 03)
- Computes contact schedules for a global ground station network
- Allocates contacts based on priority, data volume, and antenna availability
- Exposes a gRPC API (C++ with grpc++) for scheduling and status queries
- Python dashboard for monitoring contact status and utilization

### Why It Matters
**This project directly leverages your gRPC expertise** while demonstrating space domain knowledge. Ground segment orchestration is a hot area — AWS Ground Station, Azure Orbital, and Atlas Space Operations all need this.

### Stretch Goals
- Weather-aware scheduling (avoid rain-impacted Ka-band contacts)
- Multi-constellation support
- Cost optimizer for GSaaS pricing models

---

## Project D: Satellite-Friendly Transport Protocol

**Modules Used:** 04, 05, 06
**Language:** C++

### Deliverable
A transport protocol optimized for satellite links:
- Custom congestion control algorithm for high-latency, variable-capacity links
- Both reliable and unreliable delivery modes
- Graceful link disruption handling (reconnect, resume)
- Benchmarks against TCP and LTP over simulated satellite conditions (Python test harness)
- Results published as a technical blog post

### Why It Matters
**This is the most direct application of your TCP expertise.** You're designing next-gen satellite transport — the kind of work SpaceX's network team does.

### Stretch Goals
- Implement as a QUIC extension
- Multipath support (ground link + ISL)
- Integration with your BPv7 as a convergence layer

---

## Project E: Space Network Security Testbed

**Modules Used:** 01, 04, 11
**Language:** C++ (crypto) + Python (analysis)

### Deliverable
A security testbed that:
- Implements SDLS encryption for TM/TC frames in C++ (extending Module 11 work)
- Implements BPSec for DTN bundles
- Simulates attacks in Python: replay, injection, jamming (at protocol level)
- Demonstrates detection and mitigation of each attack
- Produces a security analysis report with visualizations

### Why It Matters
Space systems security is a critical growth area, especially for defense-adjacent roles (SDA, L3Harris, Northrop).

### Stretch Goals
- Key management subsystem for a 100-satellite constellation
- Anomaly detection using ML (scikit-learn) on telemetry patterns
- NIST SP 800-53 compliance mapping

---

## Presentation & Portfolio

For each completed capstone:

1. **GitHub Repository:** Clean C++/Python code with README, architecture diagram, CMakeLists.txt / pyproject.toml, build instructions
2. **Technical Blog Post:** 1500–3000 words explaining the problem, your design decisions, and results
3. **Demo Video:** 3–5 minute screen recording showing the system in action
4. **Benchmark/Analysis:** Quantitative results with charts (latency, throughput, reliability)

These artifacts become the centerpiece of your job applications.
