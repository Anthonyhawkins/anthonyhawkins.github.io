# Module 10: SDN & Autonomous Network Management

**Duration:** 4 weeks
**Prerequisites:** Modules 05, 07

---

## What You'll Learn

Software-Defined Networking (SDN) and Network Function Virtualization (NFV) are transforming satellite networks from manually configured, static systems into programmable, self-healing networks. This is where your software engineering skills dominate.

## The Problem

Traditional satellite networks are:
- **Statically configured:** Link parameters set at launch, hard to change
- **Manually managed:** Operators monitor and intervene by hand
- **Vendor-locked:** Proprietary ground systems tied to specific satellite platforms
- **Inflexible:** Can't dynamically reroute traffic or adapt to changing demand

Modern constellations with 1000+ satellites can't be managed this way. SDN/NFV brings the same revolution to space that it brought to data center networking.

## Topics

### Week 1: SDN Fundamentals for Space
- SDN architecture review: control plane / data plane separation
- OpenFlow, P4, and programmable forwarding in satellite context
- Centralized vs. distributed controllers for constellations
- Challenge: controller-to-satellite communication latency
- Ground-based vs. on-board controllers

### Week 2: Network Function Virtualization
- NFV in satellite ground segments: virtualized modems, gateways
- On-board processing (OBP): moving compute to orbit
- Edge computing in space: processing data before downlink
- Container orchestration for ground segment (Kubernetes in ground stations)
- Virtualized network functions: firewalls, load balancers, PEPs in the cloud

### Week 3: Autonomous Network Operations
- Intent-based networking for constellations
- AI/ML for traffic prediction and resource allocation
- Self-healing networks: automatic rerouting around failed satellites or links
- Cognitive radio: dynamic spectrum access and interference mitigation
- Digital twin: simulation-based network planning and optimization

### Week 4: Aalyria Spacetime & Industry
- Aalyria's "Spacetime" platform: the most ambitious space SDN effort (ex-Google Loon)
- Temporospatial SDN (TS-SDN): controlling networks whose topology changes in time
- Network orchestration across heterogeneous assets (LEO, MEO, GEO, HAPs, ground)
- Multi-orbit, multi-operator networking

## Technology Reference

| Technology | Problem It Solves | New/Legacy |
|---|---|---|
| SDN / OpenFlow | Programmable forwarding, centralized control | `[NEW SPACE]` |
| P4 (Protocol-Indep. Switch Architecture) | Custom packet processing on satellite routers | `[NEW SPACE]` |
| ONOS / OpenDaylight | SDN controllers (adapted for space) | `[NEW SPACE]` |
| Kubernetes (ground segment) | Orchestrating virtualized ground functions | `[NEW SPACE]` |
| Digital Twin (network simulation) | Testing changes before deployment | `[NEW SPACE]` |
| TS-SDN (Temporospatial SDN) | Controlling topology that changes over time | `[NEW SPACE]` |

## Companies

| Company | Product/Focus | New/Legacy |
|---|---|---|
| **Aalyria** (ex-Google Loon team) | Spacetime platform — network orchestration for space/ground/air | `[NEW SPACE]` |
| **Rivada Space Networks** | SDN-managed optical LEO mesh | `[NEW SPACE]` |
| **Lockheed Martin** | SmartSat — software-defined satellite platform | `[NEW SPACE]` |
| **Northrop Grumman** | Payload-agnostic, software-reconfigurable satellites | `[NEW SPACE]` |
| **SES** | O3b mPOWER — software-defined MEO constellation | `[BOTH]` |
| **Astranis** | Software-defined GEO microsats | `[NEW SPACE]` |
| **Isotropic Systems** | Software-defined multi-beam terminals | `[NEW SPACE]` |

## Books & Resources

| Resource | Notes |
|---|---|
| Aalyria Spacetime docs/papers | https://aalyria.com/ — read their technical blog |
| "Software-Defined Networking for Satellites" (IEEE papers) | Search IEEE Xplore for "SDN satellite" |
| ONF (Open Networking Foundation) SDN specs | https://opennetworking.org/ |
| Lockheed Martin SmartSat documentation | Public whitepapers |

## Hands-On Exercises

1. **SDN Controller for Satellite Mesh (C++):** Build a simplified SDN controller that computes forwarding tables for a 6-satellite ring topology. Expose a REST API (use cpp-httplib or Crow) for pushing routes
2. **Dynamic Rerouting Demo (Python):** Simulate a link failure in a constellation using NetworkX. Show the controller detecting the failure and computing alternate paths in real-time. Animate with Matplotlib
3. **Traffic Engineering Optimizer (Python):** Given a constellation topology and a traffic demand matrix, compute optimal link utilization using LP solvers (PuLP or SciPy linprog)
4. **Temporal Topology Manager (C++):** Build a system that loads a contact plan and pre-computes SDN flow rules for each time window. Simulate rule installation as the topology evolves
