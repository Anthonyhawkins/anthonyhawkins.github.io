# Starlink Network and Topology Curriculum

A structured, self-directed study plan for a senior networking engineer preparing for SpaceX Starlink network, topology, ground-network, and constellation-routing roles.

**Languages:** C++ and Python
**Math starting point:** Algebra 1 through quadratics
**Approach:** Learn the math, study the Starlink-relevant systems, then build a project that becomes part of a growing network toolkit. See the [Learning Path](./learning-path.md) for the full roadmap.

This curriculum is based on public information. Starlink's internal PHY, MAC, routing stack, beam scheduler, and operational control plane are proprietary, so the projects model them from public constraints, FCC filings, SpaceX/Starlink public pages, public job descriptions, and peer-reviewed/open-source LEO networking research.

---

## Start Here

### [Learning Path](./learning-path.md)

The master roadmap. Four phases progress from RF and ground-network foundations through broadband access, constellation routing, optical mesh scheduling, traffic engineering, security, and capstone projects.

---

## Module Reference

Modules are ordered by learning sequence. Each module teaches the math it needs before applying it to Starlink-relevant technologies and algorithms.

| Module | Topic | Math Taught | Phase |
|---|---|---|---|
| [01](./01-starlink-system-model/) | Starlink System Model, Public Data, and RF Units | Algebra 2: logs, dB, unit conversion | 1 - Foundation |
| [02](./02-starlink-rf-foundations/) | Starlink RF Foundations and Phased-Array Access Links | Algebra 2 + Trig intro | 1 - Foundation |
| [03](./03-starlink-ground-network/) | Starlink Ground Network, Gateways, POPs, and Internet Peering | Trig: elevation, slant range, latency geometry | 1 - Foundation |
| [04](./04-variable-links-handover-transport/) | Variable Links, Handover Resilience, and Transport Behavior | Trig completion + Pre-Calc intro | 2 - Acceleration |
| [05](./05-starlink-link-engineering/) | Starlink Link Engineering: Ku, Ka, E-Band, Rain Fade, and Interference | Pre-Calc + Calc I intro | 2 - Acceleration |
| [06](./06-starlink-broadband-phy-mac/) | Broadband PHY/MAC Scheduling for a Starlink-Like System | Calc I: derivatives, optimization | 2 - Acceleration |
| [07](./07-starlink-direct-to-cell/) | Starlink Direct to Cell, LTE Roaming, and Mobile Backhaul | Calc I + Calc II intro | 2 - Acceleration |
| [08](./08-starlink-constellations-routing/) | Starlink LEO Constellations, Shells, Routing, and Latency | Calc II + Calc III | 3 - Depth |
| [09](./09-starlink-optical-inter-satellite-links/) | Starlink Optical Inter-Satellite Links and Laser Mesh Topology | Calc III + Linear Algebra | 3 - Depth |
| [10](./10-starlink-network-control/) | Starlink Network Control, Segment Routing, Automation, and Traffic Engineering | Linear Algebra + Optimization | 3 - Depth |
| [11](./11-starlink-security-resilience/) | Starlink Security, Resilience, and Operational Reliability | Probability & Statistics | 4 - Mastery |
| [12](./12-starlink-capstone-projects/) | Starlink-Focused Capstone Projects | Graph Theory & Optimization | 4 - Mastery |

## Long-Running Project: Starlink Network Toolkit

A C++ library and Python analysis suite that grows across modules:

| Module | Addition |
|---|---|
| 01 | `PublicDataParser` - TLE/OEM/ephemeris and FCC frequency-table parsing |
| 02 | `AccessLinkModel` - Ku/Ka/E-band delay, FSPL, and phased-array beam geometry |
| 03 | `GatewayPopModel` - gateway visibility, POP egress, and path-latency model |
| 04 | `HandoverStateMachine` - variable link and handover behavior |
| 05 | `StarlinkLinkBudget` - Ku/Ka/E link budget, rain fade, scan loss, interference margin |
| 06 | `BeamScheduler` - MCS selection and beam/resource allocation |
| 07 | `DirectToCellModel` - LTE attach, bearer, and satellite-backhaul simulation |
| 08 | `ConstellationEngine` - shell topology, public ephemeris ingestion, routing snapshots |
| 09 | `LaserMeshScheduler` - OISL link assignment and failure-aware topology |
| 10 | `TopologyController` - Segment Routing/TE policy generation and route API |
| 11 | `ReliabilitySecurityAnalyzer` - BGP/RPKI checks, DDoS/jamming/failure analysis |
| 12 | `DigitalTwin` - integrated simulation, telemetry, route control, and portfolio demos |

## Reading List

See [books.md](./books.md) for the complete annotated reading list, including Starlink public pages, FCC authorizations, SpaceX job descriptions, LEO routing papers, and core networking references.
