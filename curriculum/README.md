# Space Networking Curriculum

A structured, self-directed study plan for a senior networking engineer transitioning into space communications and satellite networking.

**Languages:** C++ and Python
**Math starting point:** Algebra 1 (through quadratics)
**Approach:** Learn the math → learn the topic → build a project — see the [Learning Path](./learning-path.md) for the high-level roadmap

---

## 🗺️ Start Here

### [Learning Path](./learning-path.md)
**The master roadmap.** Four phases that progress from protocol foundations through constellation engineering to production-quality capstone projects. Each module teaches the math you need, then applies it.

---

## Module Reference

Modules are ordered by learning sequence — start at 01 and work forward. Each module teaches its own math prerequisites.

| Module | Topic | Math Taught | Phase |
|--------|-------|-------------|-------|
| [01](./01-ccsds-protocol-stack/) | CCSDS Protocol Stack | Algebra 2 (logs, dB) | 1 — Foundation |
| [02](./02-foundations-of-space-comms/) | Foundations of Space Communications | Algebra 2 + Trig intro | 1 — Foundation |
| [03](./03-ground-segment-architecture/) | Ground Segment Architecture | Trig (elevation, slant range) | 1 — Foundation |
| [04](./04-delay-tolerant-networking/) | Delay-Tolerant Networking (DTN) | Trig + Pre-Calc intro | 2 — Acceleration |
| [05](./05-satellite-link-engineering/) | Satellite Link Engineering | Pre-Calc + Calc I intro | 2 — Acceleration |
| [06](./06-dvb-standards-and-broadband/) | DVB Standards & Satellite Broadband | Calc I (derivatives, optimization) | 2 — Acceleration |
| [07](./07-5g-ntn-integration/) | 5G Non-Terrestrial Networks (NTN) | Calc I + Calc II intro | 2 — Acceleration |
| [08](./08-leo-constellations-and-routing/) | LEO Constellations & Routing | Calc II + Calc III | 3 — Depth |
| [09](./09-optical-inter-satellite-links/) | Optical Inter-Satellite Links (OISL) | Calc III + Linear Algebra | 3 — Depth |
| [10](./10-sdn-and-network-management/) | SDN & Autonomous Network Management | Linear Algebra + Optimization | 3 — Depth |
| [11](./11-security-in-space-networks/) | Security in Space Networks | Probability & Statistics | 4 — Mastery |
| [12](./12-capstone-projects/) | Capstone Projects | Graph Theory & Optimization | 4 — Mastery |

## Long-Running Project: Space Network Toolkit

A C++ library that grows across modules:

| Module | Addition |
|--------|----------|
| 01 | `PacketParser` — CCSDS Space Packet parsing |
| 03 | `GroundStation` — elevation angle + visibility |
| 04 | `BundleProtocol` — BPv7 bundle creation/serialization |
| 05 | `LinkBudget` — FSPL + atmospheric loss |
| 08 | `ConstellationEngine` — orbit propagation + topology |
| 09 | `ISLTopology` — optical link geometry + mesh |
| 10 | `SDNController` — forwarding tables, REST API |

## Reading List

See [books.md](./books.md) for the complete annotated reading list.
