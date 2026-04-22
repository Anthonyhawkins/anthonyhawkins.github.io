---
title: "Module 08: Starlink LEO Constellations, Shells, Routing, and Latency"
module_number: 8
weight: 8
---


**Phase:** 3 - Depth
**Builds on:** Modules 03, 04, 05, and 07

---

## Math You'll Learn

### Calculus II Completion + Calculus III: 3D Vectors

This is the math that makes constellation routing possible: state vectors, line-of-sight, topology snapshots, and gradients across several changing dimensions.

- **Taylor/Maclaurin series** - approximating complex functions.
- **Fourier series intro** - signal and bandwidth intuition.
- **3D vectors** - position, velocity, and acceleration.
  - *Starlink application:* satellite state vector = [x, y, z, vx, vy, vz].
- **Dot product and cross product** - angles, visibility, orbital planes, and relative geometry.
- **Partial derivatives and gradients** - link quality changes with range, elevation, weather, gateway state, and load.

**After this:** You can compute LEO satellite positions, build topology snapshots, and run routing algorithms over a changing constellation graph.

**Resources:**

- Stewart, *Calculus: Early Transcendentals*, Chapters 7-14
- Curtis, *Orbital Mechanics for Engineering Students*
- Handley, "Delay is Not an Option"
- Bhattacherjee/Singla, "Network Topology Design at 27,000 km/hour"
- Hypatia LEO simulator

---

## What You'll Learn

This is the first core topology module. The goal is to model a Starlink-inspired constellation using public shell/orbital data where possible, then route traffic across satellites, gateways, POPs, and terrestrial destinations.

### Constellation Design

- Starlink shell architecture: altitude, inclination, planes, satellites per plane, and phasing.
- Walker Delta/Star patterns as useful simplifications.
- Public Starlink shell data vs simplified models.
- Coverage analysis, latitude effects, and elevation masks.
- Partial deployment, satellite churn, deorbit/replacement, and operational topology changes.

### Routing and Latency

- Time-varying topology snapshots from deterministic orbital motion.
- Shortest path, A*, k-shortest paths, ECMP, and constrained shortest path.
- Route churn minimization: avoid changing paths too often when a slightly worse path is stable.
- Gateway selection and POP egress as part of routing.
- Latency vs terrestrial fiber: when LEO can beat fiber and when it cannot.
- Failure-aware rerouting around satellites, gateways, POPs, and links.

### Public Research Patterns

- +Grid routing and structure-aware paths.
- Motif-based and long-short-link topology ideas.
- Time-expanded graphs as a bridge to Module 12.
- How to validate against public simulators without copying assumptions blindly.

---

## C++ and Python Skills

**C++ focus:** Eigen, Boost.Graph, `std::async`, spatial algorithms, deterministic simulation.

**Python focus:** Skyfield, NetworkX, Plotly/Cartopy, latency heatmaps, animation.

---

## Projects

### Project 1: Starlink-Inspired Constellation Topology Engine (C++)

Build the first full topology engine.

**What you'll build:**

- Generate shell-based LEO topologies from altitude, inclination, planes, and satellites per plane.
- Optionally ingest public TLE/ephemeris data.
- Compute satellite positions and line-of-sight relationships.
- Add ground nodes: users, gateways, POPs, and destinations.
- Build graph snapshots at time intervals.
- Run Dijkstra/A* and k-shortest paths between ground endpoints.
- Track latency, hop count, gateway egress, and route churn.

**C++ skills used:** Eigen, Boost.Graph, async computation, JSON output, CMake.

**Toolkit:** Add `ConstellationEngine`.

### Project 2: Latency and Path Comparator (Python)

Compare LEO routing against terrestrial paths.

**What you'll build:**

- Visualize constellation snapshots on a globe or map.
- Select city pairs and compare satellite-path latency vs great-circle fiber estimates.
- Plot latency, hop count, gateway egress, and route stability over time.
- Simulate failed satellites/gateways and show path recovery.
- Write a short report on which pairs benefit from space routing and why.

**Python skills used:** Skyfield, NetworkX, Plotly/Cartopy, matplotlib.

---

## Technology Reference

| Protocol/Concept | Problem It Solves | Starlink Relevance |
|---|---|---|
| Topology snapshot | Freezes moving graph for routing | Practical simulation unit |
| Dijkstra/A* | Lowest-cost path | Baseline routing |
| k-shortest paths | Path diversity | Failure and TE inputs |
| Constrained shortest path | Policy/capacity-aware routes | Gateway/POP/link constraints |
| Route churn minimization | Operational stability | Avoids excessive path changes |

## Where This Tech Is Used

| System | Notes |
|---|---|
| Starlink | Large LEO constellation with public shell data and laser mesh |
| Kuiper/Telesat/SDA | Similar LEO topology problems with different parameters |
| ISP traffic engineering | Ground egress and policy constraints |
| Research simulators | Hypatia and related LEO networking work |

## Books and Resources

| Resource | Notes |
|---|---|
| Handley, "Delay is Not an Option" | Starlink-like low-latency routing analysis |
| Bhattacherjee/Singla paper | LEO topology design at orbital speed |
| Hypatia | Open LEO network simulator |
| Curtis, *Orbital Mechanics* | State vectors and geometry |
