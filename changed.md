# Proposed Starlink-Focused Curriculum Changes

This proposal keeps the current 12-module structure intact: each module still teaches the required math, then applies it to networking topics, then ends with C++ and Python projects. The main change is the target: the path should prepare for SpaceX Starlink network, topology, ground-network, and constellation-routing work rather than a broad satellite-systems role.

The current curriculum is technically solid, but it over-indexes on CCSDS, DTN, DVB, and generic space-agency architectures. Those are useful background, but they are not the center of gravity for a SpaceX Network and Topology role. The revised path should instead emphasize:

- Starlink's public architecture: LEO shells, Ku/Ka/E-band links, phased arrays, optical inter-satellite links, gateways, POPs, and low-latency internet service.
- Service-provider networking: BGP, IS-IS, MPLS, Segment Routing, IPv4/IPv6, DNS, DHCP, NTP, RADIUS/AAA, QoS, telemetry, automation, and Linux operations.
- Dynamic topology algorithms: time-varying graphs, snapshot routing, constrained shortest path, segment routing policy generation, gateway selection, capacity-aware routing, failure recovery, and traffic engineering.
- Starlink-relevant access technologies: phased-array beam steering, adaptive modulation/coding, multi-beam scheduling, gateway feeder links, Direct to Cell LTE/eNodeB integration, roaming, and laser backhaul.
- Publicly grounded engineering: use Starlink and FCC public data where available; treat proprietary Starlink PHY, MAC, routing, and internal control-plane details as unknown and model them from public constraints.

## What Should Change

| Current Focus | Proposed Starlink-Focused Shift |
|---|---|
| CCSDS protocol stack as the entry point | Public Starlink system model, ephemeris formats, FCC filings, RF/link basics, and service-provider mental model |
| DTN/BPv7/LTP as core early networking | Variable-latency transport, handover resilience, QUIC/TCP behavior, disruption as an edge case |
| DVB-S2/RCS2 broadband standards | Starlink-like proprietary broadband concepts: phased arrays, MCS/ACM, beam scheduling, OFDM/OFDMA/TDMA trade-offs |
| 5G NTN broadly | Starlink Direct to Cell specifically: LTE phones, onboard eNodeB, roaming-style integration, laser backhaul |
| Generic ground stations and GSaaS | Starlink gateways, POPs, colocation, WDM/DWDM, BGP peering, IS-IS/MPLS/SR, provisioning and automation |
| Generic OISL discussion | Starlink laser mesh topology, public 3-laser satellite model, 200 Gbps-class ISLs, link scheduling, failure handling |
| Security via CCSDS SDLS/BPSec | ISP-scale security, BGP/RPKI, anti-DDoS, AAA, gateway hardening, RF jamming/spoofing, space-safety telemetry |

## Revised Module Plan

### Module 01: Starlink System Model, Public Data, and RF Units

**Math You'll Learn**

Keep Algebra 2: logarithms, exponentials, and dB arithmetic. This still belongs first because every RF, link-budget, antenna-gain, and path-loss topic depends on it.

Add these Starlink-specific applications:

- Convert Starlink public service-link and feeder-link powers between W, dBW, dBm, EIRP, and G/T.
- Compare LEO propagation delay at about 550 km with GEO latency using logarithmic and ratio reasoning.
- Read public FCC frequency tables and convert bandwidth/frequency ranges into engineering units.

**Topics to Study**

Replace "CCSDS Protocol Stack" as the primary topic with "Starlink public architecture and data model."

Study:

- Starlink as a vertically integrated ISP: satellites, user terminals, gateways, POPs, backbone, software, operations.
- Public frequency allocations: Ku user links, Ka gateway links, E-band/V-band expansion, TT&C as context.
- Public orbital data: TLEs, ephemerides, state vectors, covariance, and Starlink's space-safety data-sharing model.
- Why CCSDS still matters: OEM ephemeris format and general space interoperability, but not as the main Starlink network stack.
- Public vs proprietary boundaries: do not assume Starlink's internal packet formats, MAC, or routing protocols unless SpaceX documents them.

**Projects**

- **C++ Project: Starlink Public Data Parser**
  Build a parser for TLE/OEM/Modified-ITC-style ephemeris records, extracting satellite ID, timestamp, position, velocity, and optional covariance fields. Keep this as the first `PacketParser`-style toolkit component, but make it Starlink-data-oriented rather than CCSDS-packet-oriented.
- **Python Project: Starlink RF Unit Toolkit**
  Build a dB/EIRP/FSPL calculator using Starlink-relevant Ku, Ka, and E-band examples. Produce comparison plots for LEO vs GEO delay and path loss.

### Module 02: Starlink RF Foundations and Phased-Array Access Links

**Math You'll Learn**

Keep Algebra 2 completion and trigonometry introduction.

Add:

- Trig for electronically steered user-terminal beams.
- Angle/elevation effects on slant range, path loss, and handover timing.
- Basic vector intuition for beam direction and satellite visibility.

**Topics to Study**

Refocus from generic space communications to Starlink's physical access model:

- Ku-band service links between user terminals and satellites.
- Ka/E-band feeder links between gateways and satellites.
- Phased-array antenna basics: beam steering, beamwidth, sidelobes, gain, scan loss.
- Starlink user-terminal behavior at a systems level: tracking moving satellites, switching beams, preserving IP sessions.
- Modulation/coding concepts only at the level needed now: MCS, LDPC, OFDM/OFDMA/TDMA trade-offs, link adaptation.
- Spectrum coordination and interference constraints from FCC/ITU filings.

**Projects**

- **C++ Project: Starlink Delay and Path-Loss Calculator**
  Compute one-way delay, RTT, slant range, and FSPL for Starlink-like LEO altitudes and Ku/Ka/E-band frequencies.
- **Python Project: Phased-Array Beam Geometry Plotter**
  Plot scan angle, gain loss, visible satellites, and handover intervals for a user terminal at a fixed location.

### Module 03: Starlink Ground Network, Gateways, POPs, and Internet Peering

**Math You'll Learn**

Keep trigonometry: law of cosines, elevation angles, slant range, radians, and angular velocity.

Add:

- Gateway diversity geometry: how many gateways can see a satellite at a given elevation mask.
- Latency decomposition: terminal-to-satellite, satellite-to-gateway, gateway-to-POP, POP-to-destination.

**Topics to Study**

Make this a Starlink ground-network module:

- Gateway earth stations vs user terminals vs POPs.
- Colocation sites, backbone circuits, optical transport, WDM/DWDM, and circuit turn-up.
- BGP peering and transit, IXPs, IPv4/IPv6 addressing, DNS, DHCP, NTP.
- Service-provider internal routing: IS-IS/OSPF, MPLS, Segment Routing, ECMP.
- Subscriber management: CGNAT, IPv6 prefix delegation, DHCP, RADIUS/AAA, QoS.
- Operational tooling: inventory, configuration management, telemetry, alerting, on-call, failure remediation.

**Projects**

- **C++ Project: Gateway Visibility and POP Path Calculator**
  Extend `GroundStation` into a `Gateway` model that computes satellite visibility, expected feeder-link delay, and candidate POP egress points.
- **Python Project: Gateway/POP Route Planner**
  Place several gateways and POPs on a map, compute which gateway/POP pair minimizes end-to-end latency for selected user/destination pairs, and visualize route choices.

### Module 04: Variable Links, Handover Resilience, and Transport Behavior

**Math You'll Learn**

Keep trig completion and pre-calculus introduction.

Add:

- Parametric functions for satellite motion and link quality over time.
- Piecewise functions for link availability, beam handover, and gateway failover.
- Early queueing intuition: backlog accumulation during rate drops or outages.

**Topics to Study**

De-emphasize DTN as the core. Keep DTN as contrast, then focus on Starlink-like internet service over dynamic wireless links:

- Why always-on broadband LEO is different from deep-space DTN.
- User-terminal satellite handover and gateway handover.
- TCP behavior over variable-rate links: slow start, congestion avoidance, BBR/CUBIC behavior, bufferbloat, ACK compression.
- QUIC behavior over path changes and NAT rebinding.
- Link emulation with `tc netem`: delay, jitter, packet loss, variable capacity, short outages.
- Store-and-forward, BPv7, and LTP as optional background for disconnected systems, not the main Starlink target.

**Projects**

- **C++ Project: Link-State and Handover State Machine**
  Build a state machine for terminal link states: searching, connected, degraded, handover pending, handover executing, failed, recovered.
- **Python Project: TCP/QUIC Handover Experiment**
  Use `tc netem` or a simulator to compare TCP/QUIC behavior across variable delay, capacity drops, and short handover outages. Plot throughput, RTT, packet loss, and recovery time.

### Module 05: Starlink Link Engineering: Ku, Ka, E-Band, Rain Fade, and Interference

**Math You'll Learn**

Keep pre-calculus completion and Calculus I introduction.

Add:

- Doppler as rate of change of range.
- Sensitivity analysis: how link margin changes with elevation, frequency, rain rate, and antenna gain.

**Topics to Study**

Keep link engineering, but make every example Starlink-relevant:

- Ku service link budgets for user terminals.
- Ka/E-band feeder link budgets for gateways.
- ITU-R P.618 rain attenuation and why gateway diversity matters.
- EPFD and protecting GEO systems from NGSO interference.
- Beamforming gain, scan loss, sidelobes, frequency reuse, spot beams.
- Adaptive link margins for moving satellites and changing weather.
- Doppler on Ku/Ka/E-band links and what compensation must achieve.

**Projects**

- **C++ Project: Starlink-Style Link Budget Calculator**
  Extend `LinkBudget` with Ku user links, Ka feeder links, E-band feeder links, elevation masks, scan loss, and rain attenuation presets.
- **Python Project: Gateway Diversity and Rain Fade Simulator**
  Model multiple gateway sites, rain fade correlation, and route traffic to the gateway with best available margin.

### Module 06: Broadband PHY/MAC Scheduling for a Starlink-Like System

**Math You'll Learn**

Keep Calculus I derivatives, chain rule, optimization, and related rates.

Add:

- Throughput optimization under power, bandwidth, beam, and link-margin constraints.
- Marginal utility: which terminal or beam gets the next unit of capacity.
- MCS threshold curves as piecewise functions.

**Topics to Study**

Replace DVB as the main topic with proprietary-broadband principles that map better to Starlink. DVB-S2X/RCS2 can remain a comparison point, not the center.

Study:

- OFDM/OFDMA, TDMA, SC-FDMA, and scheduler trade-offs.
- Adaptive modulation and coding: MCS/MODCOD thresholds, spectral efficiency, outage.
- LDPC/FEC concepts and HARQ/ARQ trade-offs under LEO latency.
- Multi-beam scheduling, cell/beam assignment, frequency reuse, fairness vs throughput.
- Return-link scheduling and demand-based allocation for many terminals.
- Beam hopping and load balancing across satellites.
- QoS for voice/video/bulk traffic over variable wireless capacity.

**Projects**

- **C++ Project: Starlink-Like Beam and Capacity Scheduler**
  Simulate terminals attached to beams, each with SNR, demand, and QoS class. Allocate time/frequency resources using proportional fairness, strict priority, and max-throughput strategies.
- **Python Project: MCS/ACM Simulator**
  Select MCS values from SNR curves, simulate a rain fade or low-elevation pass, and compare fixed coding, adaptive coding, and scheduler-aware adaptation.

### Module 07: Starlink Direct to Cell, LTE Roaming, and Mobile Backhaul

**Math You'll Learn**

Keep Calculus I completion and Calculus II introduction.

Add:

- Integrals for total data transferred during a satellite visibility window.
- Average value for variable cell capacity across a pass.
- Doppler and timing budget analysis for cellular bands.

**Topics to Study**

Shift from broad 5G NTN to Starlink Direct to Cell:

- Starlink Direct to Cell public model: existing LTE phones, no special hardware, onboard eNodeB, roaming-like integration, laser backhaul.
- LTE architecture refresh: UE, eNodeB, EPC, MME, SGW, PGW, HSS, PCRF.
- Protocols: S1AP, GTP-U, Diameter/S6a, roaming interfaces, DNS, IPsec tunnels.
- LTE random access, timing advance, Doppler pre-compensation, paging, attach, and handover constraints.
- IoT device classes: CAT-1, CAT-1 Bis, CAT-4, and low-data-rate service design.
- How Direct to Cell traffic should enter the Starlink backbone and partner mobile-core networks.
- Keep 3GPP NTN Release 17/18 as background, but make LTE/eNodeB Direct to Cell the practical focus.

**Projects**

- **C++ Project: Satellite eNodeB Roaming State Simulator**
  Model UE attach, authentication, bearer setup, data transfer, and handover through a satellite eNodeB connected over a variable-latency backhaul.
- **Python Project: Direct-to-Cell Doppler and Capacity Analyzer**
  Compute Doppler, timing advance, visibility window, and total transferable data for LTE-band direct-to-cell service.

### Module 08: Starlink LEO Constellations, Shells, Routing, and Latency

**Math You'll Learn**

Keep Calculus II completion and Calculus III 3D vectors.

Add:

- State vectors for Starlink ephemeris data.
- Link-quality gradients across range, elevation, congestion, and gateway availability.

**Topics to Study**

Keep this as a major depth module, but make it explicitly Starlink/topology-oriented:

- Starlink shell architecture: altitude, inclination, planes, satellites per plane, phasing.
- Walker patterns as a simplification, then compare to public Starlink shell data.
- Time-varying topology snapshots and deterministic motion.
- Routing algorithms: Dijkstra/A*, k-shortest paths, constrained shortest path, ECMP, failure-aware rerouting.
- +Grid, motif-based, long-short-link, and optimized ISL topology designs from public research.
- Gateway selection and POP egress selection as part of routing.
- Latency vs terrestrial fiber: when space can win, when it cannot.
- Partial deployment, satellite churn, deorbit/replacement, and operational topology changes.

**Projects**

- **C++ Project: Starlink-Inspired Constellation Topology Engine**
  Generate shell-based LEO topologies, ingest TLE/ephemeris data where available, compute line-of-sight, construct topology snapshots, and route between ground endpoints.
- **Python Project: Latency and Path Comparator**
  Compare satellite paths vs great-circle fiber estimates for global city pairs. Plot latency, hop count, path churn, gateway egress, and sensitivity to failed satellites/links.

### Module 09: Starlink Optical Inter-Satellite Links and Laser Mesh Topology

**Math You'll Learn**

Keep Calculus III completion and linear algebra.

Add:

- Rotation matrices for satellite body frames and laser terminal pointing.
- Point-ahead angle and relative motion vector geometry.
- Link-assignment constraints as matrix/graph constraints.

**Topics to Study**

Make this a Starlink laser-mesh module:

- Starlink public OISL model: multiple optical space lasers per satellite, global mesh, high-capacity inter-satellite backhaul.
- Laser link budgets: divergence, aperture, received power, pointing loss.
- Acquisition, tracking, and pointing.
- 3-laser/limited-terminal topology constraints instead of assuming an unlimited or fixed 4-link mesh.
- Link scheduling: which neighbor links should be active, when to drop/reacquire, how to avoid excessive churn.
- Intra-plane vs inter-plane links, polar routing, seam handling, shortcut links.
- Failure modes: laser terminal failure, blocked geometry, capacity degradation.
- Starlink mini-laser interoperability as an advanced topic for connecting third-party spacecraft.

**Projects**

- **C++ Project: OISL Link Assignment and Scheduler**
  Extend the constellation engine to assign a limited number of laser links per satellite subject to line-of-sight, max range, link stability, and hop-count/latency objectives.
- **Python Project: Laser Mesh Visualization and Failure Study**
  Animate OISL links over time, show route changes under link failures, and compare +Grid, 3-link constrained, and shortcut-link topologies.

### Module 10: Starlink Network Control, Segment Routing, Automation, and Traffic Engineering

**Math You'll Learn**

Keep applied linear algebra and optimization introduction.

Add:

- Linear programming for multi-commodity flow and max-link-utilization minimization.
- Least squares for demand forecasting from telemetry.
- Control-loop stability for automation systems.

**Topics to Study**

Replace generic SDN with the protocols and automation SpaceX job descriptions repeatedly surface:

- BGP, IS-IS, OSPF, MPLS, Segment Routing, SR-MPLS/SRv6, ECMP.
- Traffic engineering: constrained shortest path, SR policy generation, capacity reservations, failure protection.
- Control plane vs data plane in a moving satellite/ground hybrid network.
- Topology service design: ingest ephemeris, link state, gateway state, demand, policy, and failures.
- Telemetry: streaming metrics, link utilization, latency, loss, route churn, alarms.
- Automation: config generation, safe rollout, rollback, canarying, inventory, device state reconciliation.
- APIs: gRPC/Protobuf, REST, schema design, idempotent operations.
- Linux production operations for network software.

**Projects**

- **C++ Project: Starlink-Inspired Topology Controller**
  Build a controller that consumes topology snapshots, generates forwarding decisions or SR policies, exposes gRPC/REST APIs, and recomputes paths after gateway, POP, satellite, or laser-link failures.
- **Python Project: Traffic Engineering Optimizer**
  Solve a multi-commodity traffic allocation problem over the constellation plus ground network. Compare shortest path, ECMP, and TE-optimized routing.

### Module 11: Starlink Security, Resilience, and Operational Reliability

**Math You'll Learn**

Keep probability and statistics.

Add:

- Availability modeling for gateway diversity and laser mesh redundancy.
- False positive/false negative rates for alarms and anomaly detection.
- Markov models for link state, failure state, and recovery.

**Topics to Study**

Shift from CCSDS SDLS/BPSec toward ISP and Starlink operational security:

- BGP security: RPKI/ROA validation, route leaks, prefix hijacks, max-prefix limits.
- DDoS mitigation, scrubbing, ACLs, RTBH/flowspec concepts.
- Subscriber security: AAA/RADIUS, CGNAT logging, abuse workflows, device identity.
- Gateway and POP hardening: management-plane isolation, secrets, config integrity.
- RF threats: jamming, spoofing, interference detection, spectrum monitoring.
- Direct-to-cell security: roaming trust boundaries, mobile-core authentication, lawful intercept constraints as awareness.
- Space-safety data as operational security: ephemeris sharing, maneuver status, conjunction workflows.
- Keep SDLS/BPSec as optional background for non-Starlink space systems.

**Projects**

- **C++ Project: Routing Security and Policy Guard**
  Build a policy checker that validates proposed BGP/SR route changes, max-prefix thresholds, RPKI status, and blast radius before deployment.
- **Python Project: Jamming, Availability, and Anomaly Analysis**
  Simulate link degradation from interference, detect anomalies from telemetry, and estimate service availability under gateway/laser-link failures.

### Module 12: Starlink-Focused Capstone Projects

**Math You'll Learn**

Keep graph theory and optimization.

Add:

- Time-expanded graphs for moving topology.
- Multi-commodity flow and integer constraints for gateway/laser assignment.
- Online algorithms for topology updates under changing demand and failures.

**Capstone Options**

Replace the current generic capstones with Starlink-facing portfolio projects. Choose 2.

#### Project A: Starlink-Inspired LEO Topology and Routing Simulator

**Modules Used:** 03, 08, 09, 10

Build a simulator that ingests public TLE/ephemeris data, computes satellite/gateway visibility, assigns limited OISLs, routes traffic between global endpoints, and compares latency against terrestrial paths.

Key algorithms:

- Snapshot Dijkstra/A*
- k-shortest paths
- constrained shortest path
- route churn minimization
- failure-aware rerouting

#### Project B: Gateway, POP, and Peering Optimizer

**Modules Used:** 03, 05, 10, 11

Build a planner that selects gateway/POP egress for traffic based on visibility, link margin, weather, circuit capacity, latency, and BGP/peering policy.

Key algorithms:

- min-cost flow
- max-link-utilization minimization
- gateway diversity
- policy-constrained routing

#### Project C: Direct-to-Cell LTE Backhaul Simulator

**Modules Used:** 04, 07, 10, 11

Build a roaming-style LTE service simulator where phones attach to a satellite eNodeB, traffic crosses laser backhaul, and sessions land in a partner mobile-core network.

Key protocols:

- LTE attach and bearer setup model
- GTP-U
- S1AP concepts
- Diameter/AAA concepts
- IPsec tunnel awareness

#### Project D: Optical Mesh Link Scheduler

**Modules Used:** 08, 09, 12

Build an OISL scheduler that assigns a limited number of laser links per satellite while optimizing latency, capacity, link stability, and failure resilience.

Key algorithms:

- graph matching
- local search
- simulated annealing
- link-churn penalty optimization
- topology diameter minimization

#### Project E: Starlink Network Operations Digital Twin

**Modules Used:** 03, 08, 10, 11

Build a dashboard and backend that models satellites, gateways, POPs, links, alerts, route changes, service impact, and remediation workflows.

Key systems skills:

- C++ or Python backend
- gRPC/Protobuf API
- time-series telemetry
- incident simulation
- config rollout and rollback model

## Updated Long-Running Project

Rename the long-running project from **Space Network Toolkit** to **Starlink Network Toolkit**.

| Module | Addition |
|---|---|
| 01 | `PublicDataParser` - TLE/OEM/ephemeris and FCC frequency table parsing |
| 02 | `AccessLinkModel` - Ku/Ka/E-band delay, FSPL, and beam geometry |
| 03 | `GatewayPopModel` - gateway visibility, POP egress, and path latency |
| 04 | `HandoverStateMachine` - variable link and handover behavior |
| 05 | `StarlinkLinkBudget` - Ku/Ka/E link budget, rain fade, scan loss |
| 06 | `BeamScheduler` - MCS selection and beam/resource allocation |
| 07 | `DirectToCellModel` - LTE attach, bearer, and satellite backhaul simulation |
| 08 | `ConstellationEngine` - shell topology, public ephemeris ingestion, routing snapshots |
| 09 | `LaserMeshScheduler` - OISL link assignment and failure-aware topology |
| 10 | `TopologyController` - SR/TE policy generation and route API |
| 11 | `ReliabilitySecurityAnalyzer` - BGP/RPKI checks, DDoS/jamming/failure analysis |
| 12 | `DigitalTwin` - integrated simulation, telemetry, route control, and portfolio demos |

## Suggested Reading and Source Changes

Keep the general satcom books, but add a Starlink-specific reading track:

- Starlink Technology page: satellite architecture, lasers, antennas, low-latency LEO model, and public hardware claims.
- Starlink Satellite Operators page: public ephemeris, conjunction coordination, and space-safety data workflow.
- Starlink Direct to Cell page: LTE phones, onboard eNodeB, roaming-style integration, and laser backhaul.
- FCC Gen2 Starlink orders and technical attachments: orbital shells, Ku/Ka/E/V-band authorizations, interference constraints, and deployment conditions.
- Public SpaceX/Starlink job descriptions: BGP, IS-IS, MPLS, Segment Routing, C/C++/Python, Linux, automation, POPs, gateways, and service-provider operations.
- Mark Handley, "Delay is Not an Option: Low Latency Routing in Space."
- Bhattacherjee and Singla, "Network topology design at 27,000 km/hour."
- Hypatia: open LEO satellite-network simulation framework.
- 3GPP LTE/EPC references for Direct to Cell, especially eNodeB/EPC/GTP-U/roaming concepts.
- IETF RFCs for BGP, Segment Routing, IPv6, QUIC, RPKI, DNS, DHCP, and operational telemetry.

## Implementation Order

1. Rewrite `curriculum/README.md` and `curriculum/learning-path.md` first so the path clearly targets Starlink Network and Topology roles.
2. Rewrite Modules 01-03 to establish the Starlink system model, RF/access basics, and ground-network foundation.
3. Rewrite Modules 04-07 to replace generic DTN/DVB/5G emphasis with variable-link transport, Starlink-style PHY/MAC scheduling, link engineering, and Direct to Cell.
4. Rewrite Modules 08-10 as the core topology sequence: constellation routing, laser mesh scheduling, and topology-control/traffic-engineering automation.
5. Rewrite Modules 11-12 for ISP-scale security, reliability, and Starlink-facing capstones.
6. After the source curriculum is updated, run `make sync-curriculum` so Hugo content under `site/content/curriculum/` is regenerated from the source modules.

## Public Source Notes

This proposal is constrained to public information. SpaceX's internal Starlink routing stack, PHY/MAC, beam scheduler, exact onboard router behavior, and operational control-plane implementation are proprietary. The curriculum should therefore teach the public technologies SpaceX names directly, the protocols SpaceX job descriptions request, and algorithms that are defensible from public constellation/topology constraints.

Useful public references:

- Starlink Technology: https://www.starlink.com/technology
- Starlink Satellite Operators: https://www.starlink.com/satellite-operators
- Starlink Direct to Cell: https://www.starlink.com/business/direct-to-cell
- FCC Gen2 Starlink Order and Authorization: https://docs.fcc.gov/public/attachments/FCC-22-91A1.pdf
- FCC E-band Starlink authorization: https://docs.fcc.gov/public/attachments/DA-24-222A1.pdf
- SpaceX Starlink Ground Network job description mirror: https://startup.jobs/software-engineer-starlink-ground-network-spacex-7594496
- SpaceX Starlink Network Engineer job description mirror: https://builtin.com/job/network-engineer-starlink/4681564
- Handley, "Delay is Not an Option": https://discovery.ucl.ac.uk/10062262/
- Hypatia LEO simulator: https://github.com/snkas/hypatia
