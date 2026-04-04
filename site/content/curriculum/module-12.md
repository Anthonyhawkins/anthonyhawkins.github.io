---
title: "Module 12: Capstone Projects"
module_number: 12
weight: 12
---


**Duration:** 6 weeks
**Prerequisites:** All previous modules

---

## Overview

Choose 2 of the following 5 capstone projects. Each synthesizes multiple modules and produces portfolio-grade work that demonstrates your space networking expertise to potential employers.

---

## Project A: DTN Bundle Protocol Implementation

**Modules Used:** 02, 03, 11
**Language:** C++
**Duration:** 3 weeks

### Deliverable
A complete, working BPv7 (RFC 9171) node implementation in C++ that can:
- Create, serialize (CBOR via tinycbor), and parse bundles
- Store bundles persistently (SQLite or filesystem)
- Forward bundles over simulated disrupted links using LTP or TCPCL
- Support BPSec integrity and confidentiality blocks
- Implement basic CGR for multi-hop routing

### Math Used
- Graph theory (CGR), probability (error modeling), finite state machines

### Why It Matters
This directly demonstrates the highest-value skill in space networking. NASA, ESA, and defense contractors all need DTN engineers. C++ is ION-DTN's implementation language.

### Stretch Goals
- Interop with ION-DTN (also written in C)
- Performance benchmarks vs. TCP over disrupted link
- Python dashboard (Flask/Dash) showing bundle flow and node status

---

## Project B: LEO Constellation Network Simulator

**Modules Used:** 00, 01, 05, 06, 10
**Language:** Python (analysis/visualization) + C++ (routing engine)
**Duration:** 3 weeks

### Deliverable
A simulator that:
- Generates a configurable Walker constellation (altitude, inclination, planes, sats/plane) using Skyfield
- Computes inter-satellite link topology with optical link constraints
- Routes traffic across the mesh using shortest-path (C++ engine with Boost.Graph) or CGR
- Compares satellite-routed latency vs. great-circle fiber for city pairs worldwide
- Visualizes the constellation and routing in 3D with Plotly or on a map with Cartopy

### Math Used
- Linear algebra (coordinate transforms), calculus III (orbital vectors), graph theory (shortest path)

### Why It Matters
Constellation operators (SpaceX, Amazon, Telesat, Rivada) need people who understand the networking layer of their constellations, not just the RF or orbital mechanics.

### Stretch Goals
- SDN controller (C++) that pushes routes dynamically
- Model gateway handover and ground segment
- Capacity simulation: apply traffic demand and show congestion

---

## Project C: Ground Station Network Orchestrator

**Modules Used:** 07, 10
**Language:** C++ (core engine) + Python (scheduling optimization)
**Duration:** 3 weeks

### Deliverable
A microservice system that:
- Ingests satellite ephemeris data (TLEs) and computes passes with Skyfield
- Computes contact schedules for a global network of ground stations
- Allocates contacts to satellites based on priority, data volume, and antenna availability
- Exposes a gRPC API (C++ with grpc++) for scheduling and status queries
- Python dashboard for monitoring contact status and ground station utilization

### Math Used
- Optimization (LP/ILP for scheduling), probability (weather modeling), spherical geometry

### Why It Matters
**This project directly leverages your gRPC expertise** while demonstrating space domain knowledge. Ground segment orchestration is a hot area — AWS Ground Station, Azure Orbital, and companies like Atlas Space Operations all need this.

### Stretch Goals
- Multi-constellation support (manage contacts for different customers)
- Weather-aware scheduling (pull weather data, avoid rain-impacted Ka-band contacts)
- Cost optimizer for GSaaS pricing models

---

## Project D: Satellite-Friendly Transport Protocol

**Modules Used:** 00, 03, 04, 08
**Language:** C++
**Duration:** 3 weeks

### Deliverable
A transport protocol in C++ optimized for satellite links that:
- Implements a custom congestion control algorithm for high-latency, variable-capacity links
- Supports both reliable and unreliable delivery modes
- Handles link disruptions gracefully (reconnect, resume)
- Benchmarks against TCP and LTP over simulated satellite conditions (Python test harness with `tc netem`)
- Publishes results as a technical blog post or paper

### Math Used
- Calculus (rate calculations), probability (loss modeling, queuing), statistics (benchmark analysis)

### Why It Matters
**This is the most direct application of your TCP expertise.** You're designing the next generation of satellite transport — this is the kind of work SpaceX's network team does.

### Stretch Goals
- Implement as a QUIC extension
- Multipath support (ground link + ISL)
- Integration with your BPv7 as a convergence layer

---

## Project E: Space Network Security Testbed

**Modules Used:** 02, 03, 11
**Language:** C++ (crypto implementations) + Python (attack simulation & analysis)
**Duration:** 3 weeks

### Deliverable
A security testbed that:
- Implements SDLS (CCSDS 355.0) encryption for TM/TC frames in C++ (using OpenSSL or libsodium)
- Implements BPSec for DTN bundles in C++
- Simulates attacks in Python: replay, injection, jamming (at protocol level)
- Demonstrates detection and mitigation of each attack
- Produces a security analysis report with Matplotlib visualizations

### Math Used
- Probability (detection rates, false alarms), signal processing (spread spectrum), number theory (crypto)

### Why It Matters
Space systems security is a critical growth area, especially for defense-adjacent roles (SDA, L3Harris, Northrop). Few engineers can bridge networking + security + space.

### Stretch Goals
- Key management subsystem for multi-satellite constellation
- Anomaly detection using ML (scikit-learn) on telemetry patterns
- Compliance mapping to NIST SP 800-53 (space systems security framework)

---

## Presentation & Portfolio

For each completed capstone:

1. **GitHub Repository:** Clean C++/Python code with README, architecture diagram, CMakeLists.txt / pyproject.toml, build instructions
2. **Technical Blog Post:** 1500–3000 words explaining the problem, your design decisions, and results
3. **Demo Video:** 3–5 minute screen recording showing the system in action
4. **Benchmark/Analysis:** Quantitative results with charts (latency, throughput, reliability) — use Matplotlib/Plotly

These artifacts become the centerpiece of your job applications.
