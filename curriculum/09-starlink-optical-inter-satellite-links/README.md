# Module 09: Starlink Optical Inter-Satellite Links and Laser Mesh Topology

**Phase:** 3 - Depth
**Builds on:** Modules 05 and 08

---

## Math You'll Learn

### Calculus III Completion + Linear Algebra

Optical inter-satellite links require coordinate transforms, relative motion, pointing vectors, and graph constraints.

- **Coordinate systems** - Cartesian, spherical, cylindrical, ECI, ECEF, topocentric, and satellite body frames.
  - *Starlink application:* transform from global satellite positions to laser-terminal pointing vectors.
- **Matrices** - operations, inverse, transpose, determinant.
- **Rotation matrices and coordinate transforms** - core tool for laser pointing and geometry.
  - *Starlink application:* ECI to ECEF to body frame to terminal frame.
- **Eigenvalues/eigenvectors basics** - stability and principal-axis intuition.
- **Point-ahead geometry** - target where the receiving satellite will be when light arrives, not where it is now.
- **Graph constraints** - limited laser terminals create link-assignment constraints.

**After this:** You can model laser-link geometry, assign constrained OISLs, and study route behavior when the mesh changes.

**Resources:**

- Strang, *Introduction to Linear Algebra*
- MIT OCW 18.06
- Hemmati, *Free-Space Laser Communications*
- Starlink Technology and FCC filings for public laser-link context

---

## What You'll Learn

Optical inter-satellite links are what turn individual satellites into a space backbone. This module focuses on Starlink-like laser mesh topology, not generic optical communications alone.

### Optical Link Physics

- Free-space optical communication principles.
- Laser divergence, aperture, received power, pointing loss, detector sensitivity.
- Acquisition, tracking, and pointing.
- Point-ahead angle and relative motion.
- Background noise and atmospheric effects for optical ground links.

### Starlink Laser Mesh Concepts

- Public Starlink OISL model: multiple optical space lasers per satellite and high-capacity inter-satellite backhaul.
- Limited-terminal topology constraints instead of assuming every satellite can link to every neighbor.
- Intra-plane, inter-plane, polar, and shortcut links.
- Link scheduling: acquire, maintain, release, and reacquire.
- Failure modes: terminal failure, blocked geometry, excessive range, pointing degradation, capacity reduction.
- Mini-laser interoperability as an advanced public-facing topic for third-party spacecraft.

### Routing Over the Laser Mesh

- Topology assignment as a constrained graph problem.
- Trade off latency, capacity, stability, and route churn.
- Compare +Grid, fixed-neighbor, shortcut, and adaptive topologies.
- Feed laser-link state into the Module 10 topology controller.

---

## C++ and Python Skills

**C++ focus:** Eigen rotation matrices, concurrent computation, pybind11, JSON output, performance profiling.

**Python focus:** NumPy, matplotlib/Plotly animation, topology comparison, failure studies.

---

## Projects

### Project 1: OISL Link Assignment and Scheduler (C++)

Build a constrained laser-link scheduler.

**What you'll build:**

- Use Module 08 topology snapshots as input.
- Compute candidate laser links based on line-of-sight, max range, relative geometry, and stability duration.
- Limit each satellite to a configurable number of laser terminals.
- Assign links using a greedy baseline, then improve with local search or matching.
- Compute point-ahead angle and pointing vectors for assigned links.
- Export topology snapshots for routing and visualization.

**C++ skills used:** Eigen, Boost.Graph, algorithms, concurrency, pybind11 optional.

**Toolkit:** Add `LaserMeshScheduler`.

### Project 2: Laser Mesh Visualization and Failure Study (Python)

Visualize and stress-test OISL topology.

**What you'll build:**

- Animate laser links over time.
- Compare fixed-grid, limited-terminal, and shortcut-link topologies.
- Simulate laser-terminal failures and forced link drops.
- Plot route latency, hop count, capacity bottlenecks, and path churn.
- Write a brief analysis of which topology is more stable and why.

**Python skills used:** NetworkX, NumPy, Plotly/matplotlib animation.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| OISL | High-capacity satellite-to-satellite backhaul | Starlink space mesh |
| ATP/PAT | Establish and maintain laser lock | Core optical-link constraint |
| Point-ahead angle | Corrects for light-time and relative motion | Required for accurate pointing |
| Link assignment | Chooses active laser neighbors | Topology and routing input |
| Mini-laser | Third-party spacecraft interop concept | Advanced public Starlink service idea |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink satellite mesh | Global routing without immediate gateway visibility |
| Polar/ocean coverage | Laser backhaul to reachable gateways |
| Low-latency routing | Space paths can bypass terrestrial detours |
| Failure resilience | Mesh routing around lost links/satellites |

## Books and Resources

| Resource | Notes |
|---|---|
| Hemmati, *Free-Space Laser Communications* | Optical link physics |
| Starlink Technology | Public OISL context |
| Handley routing paper | Latency through laser-connected constellation |
| Hypatia | Simulation comparison ideas |
