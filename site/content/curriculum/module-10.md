---
title: "Module 10: SDN & Autonomous Network Management"
module_number: 10
weight: 10
---


**Phase:** 3 — Depth
**Builds on:** Modules 03, 08, 09

---

## 🔢 Math You'll Learn

### Linear Algebra (Applied) + Optimization Introduction

Applying linear algebra to real systems and beginning optimization.

- **Linear algebra: Least squares** — fitting models to noisy data
  - *Space application:* orbit determination from noisy tracking data
  - *Space application:* fitting traffic demand models to observations
- **Optimization intro: Linear programming (LP)** — maximizing/minimizing subject to constraints
  - *Space application:* ground station contact scheduling
  - *Space application:* traffic engineering — optimal link utilization
- **Finite state machines** — formal models of protocol and system behavior
  - *Space application:* SDN controller states, satellite mode transitions

**🔓 After this:** You can formulate optimization problems, fit models to data, and design formal state machine specifications.

**Resources:**
- *Introduction to Linear Algebra* — Strang (least squares chapters)
- *Introduction to Algorithms* (CLRS) — Chapters 22–26 (graph algorithms used in optimization)

---

## 🛰️ What You'll Learn

Software-Defined Networking (SDN) and Network Function Virtualization (NFV) are transforming satellite networks from manually configured, static systems into programmable, self-healing networks. This is where your software engineering skills dominate.

### The Problem
Traditional satellite networks are:
- **Statically configured:** Link parameters set at launch, hard to change
- **Manually managed:** Operators monitor and intervene by hand
- **Vendor-locked:** Proprietary ground systems tied to specific satellite platforms
- **Inflexible:** Can't dynamically reroute traffic or adapt to changing demand

Modern constellations with 1000+ satellites can't be managed this way.

### SDN Fundamentals for Space
- SDN architecture review: control plane / data plane separation
- OpenFlow, P4, and programmable forwarding in satellite context
- Centralized vs. distributed controllers for constellations
- Challenge: controller-to-satellite communication latency
- Ground-based vs. on-board controllers

### Network Function Virtualization
- NFV in satellite ground segments: virtualized modems, gateways
- On-board processing (OBP): moving compute to orbit
- Edge computing in space: processing data before downlink
- Container orchestration for ground segment (Kubernetes in ground stations)

### Autonomous Network Operations
- Intent-based networking for constellations
- AI/ML for traffic prediction and resource allocation
- Self-healing networks: automatic rerouting around failed satellites or links
- Digital twin: simulation-based network planning and optimization

### Aalyria Spacetime & Industry
- Aalyria's "Spacetime" platform: the most ambitious space SDN effort (ex-Google Loon)
- Temporospatial SDN (TS-SDN): controlling networks whose topology changes in time
- Multi-orbit, multi-operator networking

---

## 💻 C++ & Python Skills

**C++ focus:** REST API (cpp-httplib or Crow), async orchestration, gRPC in C++ (grpc++), system design patterns
**Python focus:** PuLP or SciPy for LP optimization, NetworkX, matplotlib animation

This module brings together your C++ skills into a **system-level design** — an SDN controller that ties together the toolkit modules.

---

## Projects

### Project 1: SDN Controller for Satellite Mesh (C++)

Build a simplified SDN controller that manages forwarding for a satellite constellation.

**What you'll build:**
- Load constellation topology from Module 08's `ConstellationEngine`
- Compute forwarding tables for each satellite node using Dijkstra
- Expose a REST API (cpp-httplib) for: querying routes, pushing flow rules, simulating link failures
- Implement failure detection and automatic rerouting (self-healing)
- Use async I/O for handling multiple simultaneous API requests
- Load a contact plan and pre-compute SDN flow rules for each time window

**C++ skills used:** cpp-httplib (REST API), `std::async`, JSON serialization, Boost.Graph integration, system design

**🔧 Toolkit:** Add `SDNController` to the Space Network Toolkit — this is the integration point that ties modules together

### Project 2: Traffic Engineering Optimizer (Python)

Optimize bandwidth allocation across a constellation.

**What you'll build:**
- Given a constellation topology (from Module 08) and a traffic demand matrix (city-to-city data rates)
- Formulate the traffic engineering problem as a linear program
- Solve with PuLP or SciPy `linprog`: minimize maximum link utilization subject to demand and capacity constraints
- Visualize optimal vs. shortest-path routing — show how TE reduces congestion
- Animate link failure and re-optimization with matplotlib

**Python skills used:** PuLP/SciPy, NetworkX, matplotlib animation

---

## Technology Reference

| Technology | Problem It Solves | New/Legacy |
|---|---|---|
| SDN / OpenFlow | Programmable forwarding, centralized control | `[NEW SPACE]` |
| P4 (Protocol-Indep. Switch Architecture) | Custom packet processing on satellite routers | `[NEW SPACE]` |
| ONOS / OpenDaylight | SDN controllers (adapted for space) | `[NEW SPACE]` |
| Kubernetes (ground segment) | Orchestrating virtualized ground functions | `[NEW SPACE]` |
| TS-SDN (Temporospatial SDN) | Controlling topology that changes over time | `[NEW SPACE]` |

## Companies

| Company | Product/Focus | New/Legacy |
|---|---|---|
| **Aalyria** (ex-Google Loon) | Spacetime — network orchestration for space/ground/air | `[NEW SPACE]` |
| **Rivada Space Networks** | SDN-managed optical LEO mesh | `[NEW SPACE]` |
| **Lockheed Martin** | SmartSat — software-defined satellite platform | `[NEW SPACE]` |
| **SES** | O3b mPOWER — software-defined MEO constellation | `[BOTH]` |
| **Astranis** | Software-defined GEO microsats | `[NEW SPACE]` |

## Books & Resources

| Resource | Notes |
|---|---|
| Aalyria Spacetime docs/papers | https://aalyria.com/ |
| "Software-Defined Networking for Satellites" (IEEE papers) | Search IEEE Xplore |
| ONF (Open Networking Foundation) SDN specs | https://opennetworking.org/ |
