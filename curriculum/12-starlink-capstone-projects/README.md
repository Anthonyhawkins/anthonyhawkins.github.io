# Module 12: Starlink-Focused Capstone Projects

**Phase:** 4 - Mastery
**Builds on:** All previous modules

---

## Math You'll Learn

### Graph Theory and Optimization

The final math module turns the moving Starlink-inspired network into graphs, flows, assignments, schedules, and online decisions.

- **Graph fundamentals** - nodes, edges, directed/undirected, weighted, capacities.
- **Shortest paths** - Dijkstra, Bellman-Ford, A*, k-shortest paths.
  - *Starlink application:* satellite/gateway/POP routing across topology snapshots.
- **Time-expanded graphs** - represent a moving network through time.
  - *Starlink application:* scheduled topology and route planning.
- **Flows and cuts** - max flow, min cut, min-cost flow.
  - *Starlink application:* gateway/POP capacity and traffic-engineering constraints.
- **Integer and linear programming** - optimize under discrete constraints.
  - *Starlink application:* limited laser terminals, gateway assignment, maintenance windows.
- **Online algorithms** - update decisions as demand, failures, and topology change.

**After this:** You can build portfolio-grade Starlink-facing systems that combine RF, topology, routing, automation, and resilience.

**Resources:**

- CLRS Chapters 22-26 and flow chapters
- Rosen, *Discrete Mathematics and Its Applications*
- Hypatia and LEO routing papers for validation ideas

---

## Overview

Choose **2 of the following 5** capstone projects. Each project should produce a clean GitHub repository, technical blog post, quantitative results, and a short demo.

---

## Project A: Starlink-Inspired LEO Topology and Routing Simulator

**Modules Used:** 03, 08, 09, 10
**Language:** C++ routing engine + Python visualization

### Deliverable

A simulator that:

- Ingests public TLE/ephemeris data or generates Starlink-inspired shell models.
- Computes satellite, gateway, POP, and destination visibility/connectivity.
- Assigns limited optical inter-satellite links.
- Routes traffic between global endpoints.
- Compares latency against terrestrial great-circle/fiber estimates.
- Simulates satellite, laser-link, gateway, and POP failures.

### Key Algorithms

- Snapshot Dijkstra/A*
- k-shortest paths
- constrained shortest path
- route-churn minimization
- failure-aware rerouting

### Why It Matters

This is the most direct portfolio signal for a Starlink Network and Topology role: moving graph, routing, gateways, laser links, and latency analysis.

---

## Project B: Gateway, POP, and Peering Optimizer

**Modules Used:** 03, 05, 10, 11
**Language:** C++ service + Python optimization

### Deliverable

A planner that:

- Selects gateway and POP egress based on visibility, link margin, weather, circuit capacity, latency, and BGP policy.
- Models gateway diversity and rain-fade outages.
- Applies peering/transit policy constraints.
- Produces route recommendations with reason codes.
- Shows service impact when a gateway or POP fails.

### Key Algorithms

- min-cost flow
- max-link-utilization minimization
- gateway diversity optimization
- policy-constrained routing
- failure-impact analysis

### Why It Matters

This project connects orbital visibility to the ISP network. It demonstrates the exact bridge between Starlink satellites, gateways, POPs, and internet routing.

---

## Project C: Direct-to-Cell LTE Backhaul Simulator

**Modules Used:** 04, 07, 10, 11
**Language:** C++ simulator + Python analysis

### Deliverable

A roaming-style LTE simulator where:

- Phones attach to a satellite eNodeB.
- Control-plane events model authentication and bearer setup.
- User traffic crosses variable satellite/laser backhaul.
- Traffic lands in a partner mobile-core network model.
- Failures and latency spikes show user-visible impact.

### Key Protocol Concepts

- LTE attach and bearer setup model
- GTP-U user-plane tunneling
- S1AP concepts
- Diameter/AAA concepts
- IPsec tunnel awareness

### Why It Matters

Direct to Cell is one of the most visible Starlink network expansions. This project shows that you can connect mobile-core knowledge to satellite topology and backhaul constraints.

---

## Project D: Optical Mesh Link Scheduler

**Modules Used:** 08, 09, 12
**Language:** C++ core + Python visualization

### Deliverable

An OISL scheduler that:

- Assigns a limited number of laser links per satellite.
- Optimizes latency, capacity, link stability, and failure resilience.
- Compares fixed-grid, shortcut, and adaptive assignments.
- Penalizes excessive link churn.
- Exports topology snapshots to the routing simulator.

### Key Algorithms

- graph matching
- local search
- simulated annealing
- link-churn penalty optimization
- topology diameter minimization

### Why It Matters

Laser-link topology is central to global LEO broadband. This project isolates the hardest graph-assignment piece and makes it measurable.

---

## Project E: Starlink Network Operations Digital Twin

**Modules Used:** 03, 08, 10, 11
**Language:** C++ or Python backend + browser/Python dashboard

### Deliverable

A digital twin that models:

- Satellites, gateways, POPs, peering edges, laser links, and user regions.
- Telemetry streams: latency, loss, utilization, route churn, link margin, alarms.
- Route changes, config rollouts, rollback, and blast radius.
- Incidents: gateway outage, route leak, laser-link degradation, jamming, traffic surge.
- Operator workflows for detection, diagnosis, and remediation.

### Key Systems Skills

- gRPC/Protobuf or REST API
- time-series telemetry
- route-policy validation
- incident simulation
- config rollout and rollback model

### Why It Matters

This project demonstrates production judgment: not just algorithms, but how a large network is monitored, changed, and recovered safely.

---

## Presentation and Portfolio Requirements

For each completed capstone:

1. **Repository:** Clean C++/Python code, README, build instructions, architecture diagram, and test plan.
2. **Technical write-up:** 1500-3000 words explaining the problem, assumptions, algorithms, and results.
3. **Demo:** 3-5 minute screen recording or reproducible notebook walkthrough.
4. **Quantitative results:** Charts for latency, throughput, route churn, utilization, availability, or recovery time.
5. **Source discipline:** Clearly mark public data, inferred assumptions, and intentionally simplified models.

These artifacts become the center of the SpaceX/Starlink application portfolio.
