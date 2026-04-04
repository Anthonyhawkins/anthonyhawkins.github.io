# Module 05: LEO Constellations & Routing

**Duration:** 5 weeks
**Prerequisites:** Modules 01, 03, 04

---

## What You'll Learn

How to design, model, and route traffic through large LEO constellations. This is where your networking skills become your superpower — constellation routing is essentially distributed systems + graph theory under extreme dynamism.

## The Problem

A single LEO satellite sees a ground station for ~5–10 minutes per pass. A constellation of thousands of satellites creates a **continuously changing mesh topology** where:
- Neighbors change every few minutes
- Inter-satellite link (ISL) distances vary with orbital geometry
- Ground station handover happens every ~15 seconds for a user terminal
- You need end-to-end latency competitive with terrestrial fiber (~20–40ms)

## Topics

### Week 1: Constellation Design
- Walker Delta and Walker Star patterns
- Orbital planes, phasing, and the "seam" problem (counter-rotating planes)
- Constellation parameters: altitude, inclination, satellites/plane, number of planes
- Coverage analysis: latitude-dependent performance
- Starlink's shell architecture (540km, 550km, 570km shells)

### Weeks 3–6: Inter-Satellite Link Routing
- **Static routing:** Pre-computed based on orbital mechanics (deterministic topology)
- **Shortest-path:** Modified Dijkstra over time-varying topology snapshots
- **Segment routing:** Pre-computed path segments, stitched at runtime
- **+Grid routing:** Exploiting the regular grid structure of Walker constellations
- **Bent-pipe vs. ISL:** When satellites relay to each other vs. always bounce to ground
- Latency optimization: ISL path vs. fiber path — when does space routing win?

### Week 4: Ground Segment Integration
- User terminal handover: beam switching, cell assignment
- Gateway handover and load balancing
- POP (Point of Presence) integration with terrestrial internet
- Peering and traffic engineering at ground gateways
- **This is where your edge routing experience is directly applicable**

### Week 5: Traffic Engineering & QoS
- Capacity allocation across ISL topology
- Traffic matrices for a global constellation
- Congestion management when ISL capacity is limited
- QoS differentiation: real-time (voice/video) vs. bulk transfer
- Multi-path routing and load spreading

## Protocol Reference Table

| Protocol/Concept | Spec/Source | Problem It Solves | New/Legacy |
|---|---|---|---|
| CGR (Contact Graph Routing) | CCSDS / ION | Time-variant routing with scheduled contacts | `[NEW SPACE]` |
| Segment Routing (SRv6 in space) | Research (various) | Source-routing for deterministic path control | `[NEW SPACE]` |
| OSPF/IS-IS adaptations | Research | Traditional IGP adapted for dynamic satellite topology | `[NEW SPACE]` |
| BGP (ground peering) | RFC 4271 | Peering at satellite ground gateways | `[BOTH]` |
| MPLS-TP | RFC 5921 | Label-switched paths for satellite backhaul | `[NEW SPACE]` |

## Where This Tech Is Used

| System | Company | Satellites | ISLs | Notes |
|---|---|---|---|---|
| Starlink | SpaceX | ~6,000+ | Laser (4 per sat) | Largest operational LEO constellation |
| Kuiper | Amazon | 3,236 planned | Laser | Launching 2026+ |
| OneWeb (Eutelsat) | Eutelsat | ~648 | No ISLs (bent-pipe) | GW-reliant architecture |
| Lightspeed | Telesat | 188 planned | Laser | Enterprise/gov focus |
| SDA Transport Layer | US DoD / SDA | ~300+ | Laser | Military PWSA mesh |
| Rivada | Rivada Space | 600 planned | Laser mesh | Network-as-a-service |

## Math Used
- **Graph theory:** Dijkstra's algorithm, time-expanded graphs for CGR
- **Linear algebra:** Coordinate transforms for satellite positions (ECI↔ECEF↔lat/lon)
- **Calculus III:** Orbital velocity vectors, relative geometry between satellites
- **Linear programming:** Traffic engineering optimization
- **Probability:** Queuing theory for traffic modeling

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Communications Systems* (Maral et al.) | Constellation design chapters |
| *SMAD* (Larson & Wertz) | Constellation design methodology |
| *Delay-Tolerant Satellite Networks* (Fraire, Burleigh) | CGR algorithms and analysis |
| Papers: Handley 2018 — "Delay is Not an Option" | Foundational analysis of Starlink routing |
| Papers: Bhattacherjee et al. — "Network Topology Design at 27000 km/h" | Grid routing for LEO constellations |
| Hypatia simulator | https://github.com/snkas/hypatia |

## Hands-On Exercises

1. **Constellation Visualizer (Python):** Generate and visualize a Walker Delta constellation with Matplotlib/Plotly. Compute ISL link geometry over one orbital period using Skyfield
2. **Shortest Path Router (C++):** Given a snapshot of constellation topology (nodes + links with latency weights), implement Dijkstra to find the lowest-latency path between two cities. Use Boost.Graph or a hand-written adjacency list
3. **Latency Comparison (Python):** For 10 city pairs (NYC↔London, LA↔Tokyo, etc.), compute: (a) great-circle fiber latency, (b) satellite ISL latency through your constellation. Plot comparative bar charts with Matplotlib
4. **Handover Simulator (Python):** Simulate a user terminal's view of the constellation. Track which satellite is "serving" at each timestep and how often handover occurs
5. **Hypatia Lab:** Set up the Hypatia simulator, define a Starlink-like constellation, and run routing experiments
