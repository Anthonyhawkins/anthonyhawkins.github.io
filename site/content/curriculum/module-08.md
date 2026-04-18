---
title: "Module 08: LEO Constellations & Routing"
module_number: 08
weight: 08
---


**Phase:** 3 — Depth
**Builds on:** Modules 03, 04, 05

---

## 🔢 Math You'll Learn

### Calculus II Completion + Calculus III: 3D Vectors

The math that makes constellation engineering possible — signal decomposition and 3D orbital geometry.

- **Calculus II: Taylor/Maclaurin series** — approximating complex functions
- **Calculus II: Fourier series intro** — decomposing signals into frequency components
  - *Space application:* understanding bandwidth, spectral efficiency, why OFDM works
- **Calculus III: Vectors in 3D** — position, velocity, acceleration vectors
  - *Space application:* satellite state vector = [x, y, z, vx, vy, vz]
- **Calc III: Dot product & cross product** — angles between vectors, perpendicular components
  - *Space application:* angular momentum = r × v, orbital plane normal vector
- **Calc III: Partial derivatives & gradients** — how functions change in multiple directions
  - *Space application:* link quality gradient as elevation, range, and weather change simultaneously

**🔓 After this:** You can propagate orbits, compute satellite positions in 3D, and work with constellation geometry.

**Resources:**
- *Calculus: Early Transcendentals* — Stewart (Chapters 7–14)
- *Orbital Mechanics for Engineering Students* (Curtis) — applies Calc III directly
- 3Blue1Brown — *Essence of Linear Algebra* (watch early for context)
- 3Blue1Brown — *But what is a Fourier series?*

---

## 🛰️ What You'll Learn

How to design, model, and route traffic through large LEO constellations. This is where your networking skills become your superpower — constellation routing is essentially distributed systems + graph theory under extreme dynamism.

### The Problem
A single LEO satellite sees a ground station for ~5–10 minutes per pass. A constellation of thousands of satellites creates a **continuously changing mesh topology** where:
- Neighbors change every few minutes
- Inter-satellite link (ISL) distances vary with orbital geometry
- Ground station handover happens every ~15 seconds for a user terminal
- You need end-to-end latency competitive with terrestrial fiber (~20–40ms)

### Constellation Design
- Walker Delta and Walker Star patterns
- Orbital planes, phasing, and the "seam" problem (counter-rotating planes)
- Constellation parameters: altitude, inclination, satellites/plane, number of planes
- Coverage analysis: latitude-dependent performance
- Starlink's shell architecture (540km, 550km, 570km shells)

### Inter-Satellite Link Routing
- **Static routing:** Pre-computed based on orbital mechanics (deterministic topology)
- **Shortest-path:** Modified Dijkstra over time-varying topology snapshots
- **Segment routing:** Pre-computed path segments, stitched at runtime
- **+Grid routing:** Exploiting the regular grid structure of Walker constellations
- **Bent-pipe vs. ISL:** When satellites relay to each other vs. always bounce to ground
- Latency optimization: ISL path vs. fiber path — when does space routing win?

### Ground Segment Integration
- User terminal handover: beam switching, cell assignment
- Gateway handover and load balancing
- POP (Point of Presence) integration with terrestrial internet
- **This is where your edge routing experience is directly applicable**

### Traffic Engineering & QoS
- Capacity allocation across ISL topology
- Traffic matrices for a global constellation
- Congestion management when ISL capacity is limited
- QoS differentiation: real-time (voice/video) vs. bulk transfer

---

## 💻 C++ & Python Skills

**C++ focus:** Eigen library, Boost.Graph, `std::async`/`std::future`, spatial algorithms
**Python focus:** Skyfield, Plotly/Cartopy for 3D visualization, NetworkX

This module introduces **Eigen** for linear algebra and **async patterns** for concurrent computation.

---

## Projects

### Project 1: Constellation Topology Engine (C++)

Build a C++ engine that computes satellite positions and inter-satellite link topology for a Walker constellation.

**What you'll build:**
- Generate Walker Delta constellation parameters (altitude, inclination, planes, sats/plane)
- Propagate satellite positions using simplified circular orbit model (Eigen vectors)
- Compute ISL links: determine which satellites can see each other (line-of-sight, max distance)
- Build a graph of the constellation topology at each timestep using Boost.Graph
- Run Dijkstra to find lowest-latency path between two ground points through the constellation
- Use `std::async` to parallelize orbit propagation across satellites

**C++ skills used:** Eigen, Boost.Graph, `std::async`, `std::future`, spatial geometry, CMake with external libraries

**🔧 Toolkit:** Add `ConstellationEngine` to the Space Network Toolkit

### Project 2: Constellation Visualizer & Latency Comparator (Python)

Visualize and benchmark your constellation.

**What you'll build:**
- Visualize the constellation on a 3D globe (Plotly) or 2D map (Cartopy)
- For 10 city pairs (NYC↔London, LA↔Tokyo, etc.), compute: (a) great-circle fiber latency, (b) satellite ISL latency
- Plot comparative bar charts showing where satellite routing beats fiber
- Animate the constellation topology over one orbital period

**Python skills used:** Skyfield, Plotly or Cartopy, NetworkX, matplotlib animation

---

## Protocol Reference Table

| Protocol/Concept | Spec/Source | Problem It Solves | New/Legacy |
|---|---|---|---|
| CGR (Contact Graph Routing) | CCSDS / ION | Time-variant routing with scheduled contacts | `[NEW SPACE]` |
| Segment Routing (SRv6 in space) | Research | Source-routing for deterministic path control | `[NEW SPACE]` |
| OSPF/IS-IS adaptations | Research | Traditional IGP adapted for dynamic satellite topology | `[NEW SPACE]` |
| BGP (ground peering) | RFC 4271 | Peering at satellite ground gateways | `[BOTH]` |

## Where This Tech Is Used

| System | Company | Satellites | ISLs | Notes |
|---|---|---|---|---|
| Starlink | SpaceX | ~6,000+ | Laser (4 per sat) | Largest operational LEO constellation |
| Kuiper | Amazon | 3,236 planned | Laser | Launching 2026+ |
| OneWeb (Eutelsat) | Eutelsat | ~648 | No ISLs (bent-pipe) | GW-reliant architecture |
| Lightspeed | Telesat | 188 planned | Laser | Enterprise/gov focus |
| SDA Transport Layer | US DoD / SDA | ~300+ | Laser | Military PWSA mesh |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Communications Systems* (Maral et al.) | Constellation design chapters |
| *Delay-Tolerant Satellite Networks* (Fraire, Burleigh) | CGR algorithms and analysis |
| Handley 2018 — "Delay is Not an Option" | Foundational analysis of Starlink routing |
| Bhattacherjee et al. — "Network Topology Design at 27000 km/h" | Grid routing for LEO constellations |
| Hypatia simulator | https://github.com/snkas/hypatia |
