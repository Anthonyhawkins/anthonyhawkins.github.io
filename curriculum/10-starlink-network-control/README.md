# Module 10: Starlink Network Control, Segment Routing, Automation, and Traffic Engineering

**Phase:** 3 - Depth
**Builds on:** Modules 03, 08, and 09

---

## Math You'll Learn

### Applied Linear Algebra + Optimization Introduction

Topology work becomes operational when you optimize under capacity, policy, and failure constraints.

- **Least squares** - fit demand or latency models to noisy telemetry.
  - *Starlink application:* forecast traffic demand and link utilization.
- **Linear programming** - maximize/minimize subject to constraints.
  - *Starlink application:* minimize maximum link utilization across satellite, gateway, POP, and peering links.
- **Multi-commodity flow intuition** - many source/destination demands share the same network.
- **Finite state machines** - controller states, rollout states, and failure remediation.
- **Control-loop basics** - avoid unstable automation that thrashes routes or config.

**After this:** You can design a topology controller that consumes moving-network state and emits defensible routing or Segment Routing policies.

**Resources:**

- Strang, least squares chapters
- CLRS graph algorithms and flows
- Service-provider routing references for BGP, IS-IS, MPLS, and Segment Routing

---

## What You'll Learn

This module replaces generic SDN with the protocols, algorithms, and operational automation that map to Starlink network and topology roles.

### Service-Provider Control Plane

- BGP peering/transit, route policy, communities, filtering, max-prefix, and route leaks.
- IS-IS/OSPF as internal routing protocols.
- MPLS, SR-MPLS, SRv6, ECMP, fast reroute, and traffic-engineering policy.
- Control-plane vs data-plane responsibilities in a hybrid space/ground network.
- How gateways, POPs, backbone links, satellites, and laser links become one topology graph.

### Topology Service Design

- Inputs: ephemeris, link state, gateway state, POP state, demand matrix, policy, failures, maintenance windows.
- Outputs: next-hop decisions, Segment Routing policies, preferred gateway/POP egress, and capacity reservations.
- Snapshot vs predictive control: current topology, near-future topology, and scheduled changes.
- Route churn control and safe rollout.
- API design with gRPC/Protobuf and REST.

### Automation and Operations

- Telemetry: link utilization, latency, loss, route churn, queue depth, and alarms.
- Inventory and desired-state reconciliation.
- Config generation, validation, canary, rollback, and blast-radius control.
- Incident simulation: gateway down, POP isolated, OISL failure, high latency, route leak.
- Linux production operations for network software.

---

## C++ and Python Skills

**C++ focus:** REST/gRPC service, async orchestration, JSON/Protobuf schemas, Boost.Graph integration, system design.

**Python focus:** PuLP/SciPy/OR-Tools, NetworkX, telemetry analysis, optimization visualization.

---

## Projects

### Project 1: Starlink-Inspired Topology Controller (C++)

Build a simplified network controller.

**What you'll build:**

- Ingest topology snapshots from Modules 08 and 09.
- Ingest gateway/POP state and demand matrices.
- Compute paths and generate forwarding decisions or Segment Routing policy objects.
- Expose APIs for route query, link failure, gateway drain, policy update, and recompute.
- Implement failure detection events and automatic rerouting.
- Track route churn and reject unstable updates.

**C++ skills used:** REST/gRPC, Boost.Graph, async I/O, JSON/Protobuf, system design.

**Toolkit:** Add `TopologyController`.

### Project 2: Traffic Engineering Optimizer (Python)

Optimize traffic allocation.

**What you'll build:**

- Build a network graph with satellite links, gateways, POPs, and peering edges.
- Load a traffic demand matrix between regions/cities.
- Formulate TE as minimizing maximum link utilization subject to capacity and policy constraints.
- Compare shortest path, ECMP, and optimized TE.
- Animate failure and re-optimization.

**Python skills used:** NetworkX, PuLP/SciPy/OR-Tools, matplotlib.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| BGP | Peering, transit, internet reachability | POP and provider edge |
| IS-IS/OSPF | Internal routing | Backbone and controlled domains |
| MPLS/SR | Explicit policy and traffic engineering | Path control and fast reroute |
| gRPC/Protobuf | Typed control APIs | Network automation services |
| LP/TE | Capacity-aware routing | Avoid congested satellite/gateway links |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink ground network | POPs, peering, transport, routing |
| Starlink topology systems | Moving graph, route policy, failure response |
| ISP backbone operations | TE, BGP policy, telemetry, safe rollout |
| Capstones | Digital twin and topology simulator integration |

## Books and Resources

| Resource | Notes |
|---|---|
| Public SpaceX network job descriptions | Protocols and operations focus |
| Halabi, *Internet Routing Architectures* | BGP policy |
| MPLS/SR references | Provider traffic engineering |
| CLRS | Shortest paths and optimization basics |
