---
title: "Learning Path"
module_number: 00
weight: 00
---

# Learning Path - Starlink Network and Topology Roadmap

Your starting point: **Algebra 1 through quadratics**, senior-level networking expertise, and new-to-intermediate C++.

Each module teaches the math first, then applies it to a Starlink-relevant networking topic with C++ and Python projects. The sequence intentionally moves from simpler RF/link geometry to dynamic graphs, optical mesh scheduling, traffic engineering, and production operations.

---

## Skill Tree

```text
YOUR STARTING SKILLS                    WHAT THEY UNLOCK
---------------------                   ----------------
Algebra 1                -------------> dB math, path loss, link ratios
TCP/IP / gRPC expertise  -------------> Starlink ground network, BGP/IS-IS,
                                         Segment Routing, topology services
Software engineering     -------------> C++ toolkit, Python analysis,
                                         automation and digital twin projects


MATH UNLOCKS                            STARLINK NETWORKING UNLOCKS
------------                            ---------------------------
Algebra 2 + Trig        -------------> Ku/Ka/E-band links, phased-array
(Modules 01-03)                         beams, gateway visibility, POP paths

Pre-Calculus            -------------> Time-varying link quality, handover
(Modules 04-05)                         state, Doppler intuition, rain fade

Calculus I              -------------> Link-margin sensitivity, scheduler
(Modules 05-07)                         optimization, MCS and capacity curves

Calculus II             -------------> Total data over passes, spectral
(Modules 07-08)                         efficiency, shell/routing analysis

Calculus III            -------------> State vectors, line-of-sight geometry,
(Modules 08-09)                         constellation topology snapshots

Linear Algebra          -------------> ECI/ECEF/body-frame transforms,
(Modules 09-10)                         laser pointing, topology control

Probability & Stats     -------------> Availability, jamming/interference,
(Module 11)                             telemetry anomaly detection

Graph Theory            -------------> Time-expanded graphs, k-shortest path,
(Module 12)                             min-cost flow, laser/gateway scheduling
```

---

## Phase 1: Foundation (Modules 01-03)

> **Math:** Algebra 2 to Trigonometry
> **C++:** Language fundamentals to OOP
> **Space/Network:** Starlink public system model, RF access links, gateways, POPs, and ISP routing

| Module | Math | C++ | Starlink Topic |
|---|---|---|---|
| 01 - Starlink System Model | Algebra 2: logs, exponentials, dB | Variables, types, binary/text parsing | Public Starlink architecture, ephemeris, FCC data, RF units |
| 02 - RF Foundations and Phased Arrays | Algebra 2 + Trig intro | Control flow, classes, enums | Ku/Ka/E links, phased-array beam geometry, delay/path loss |
| 03 - Ground Network and Peering | Trig: law of cosines, elevation, slant range | OOP, containers, algorithms | Gateways, POPs, BGP, IS-IS/MPLS/SR, subscriber services |

### Phase 1 Integrated Project: **Starlink Access and Ground Model**

- Parse public orbital/frequency data into reusable C++ structures.
- Compute delay, slant range, FSPL, and phased-array scan loss.
- Select gateway/POP egress based on visibility and latency.

---

## Phase 2: Acceleration (Modules 04-07)

> **Math:** Pre-Calculus to Calculus II intro
> **C++:** Networking, state machines, scheduling, first concurrency
> **Space/Network:** Variable links, link budgets, broadband access scheduling, Direct to Cell

| Module | Math | C++ | Starlink Topic |
|---|---|---|---|
| 04 - Variable Links and Handover | Trig completion + Pre-Calc intro | State machines, sockets, link emulation | TCP/QUIC over dynamic LEO links, handover resilience |
| 05 - Starlink Link Engineering | Pre-Calc + Calc I intro | JSON config, CMake, gtest | Ku/Ka/E link budgets, rain fade, scan loss, interference |
| 06 - Broadband PHY/MAC Scheduling | Calc I: derivatives, optimization | Templates, strategy pattern, schedulers | MCS/ACM, beam scheduling, resource allocation, QoS |
| 07 - Direct to Cell and LTE Backhaul | Calc I completion + Calc II intro | `std::thread`, mutex, concurrency | LTE phones, onboard eNodeB, roaming, laser backhaul |

### Phase 2 Integrated Project: **Variable-Capacity Access Network Simulator**

- Model terminal handover and degraded link states.
- Run Starlink-style link budgets for user and gateway links.
- Allocate beam resources across terminals with different demand and QoS.
- Simulate Direct to Cell attach and data flow over variable satellite backhaul.

---

## Phase 3: Depth (Modules 08-10)

> **Math:** Calculus II to Linear Algebra and Optimization
> **C++:** Eigen, Boost.Graph, async, APIs, system design
> **Space/Network:** Constellation routing, optical laser mesh, topology control, traffic engineering

| Module | Math | C++ | Starlink Topic |
|---|---|---|---|
| 08 - Constellations and Routing | Calc II + Calc III vectors | Eigen, Boost.Graph, `std::async` | Shells, topology snapshots, shortest path, route churn |
| 09 - Optical ISLs and Laser Mesh | Calc III + Linear Algebra | pybind11, Eigen transforms, performance | OISL assignment, laser pointing, link scheduling, failure behavior |
| 10 - Network Control and TE | Linear Algebra + Optimization | REST/gRPC APIs, async orchestration | Segment Routing, BGP/IS-IS/MPLS, TE, topology controller |

### Phase 3 Integrated Project: **Starlink Topology Controller**

- Propagate satellites and compute topology snapshots.
- Assign constrained optical links and model failures.
- Generate paths or Segment Routing policies between ground endpoints.
- Optimize traffic allocation across satellite, gateway, POP, and peering links.

---

## Phase 4: Mastery (Modules 11-12)

> **Math:** Probability & Statistics to Graph Theory and Optimization
> **C++:** Production-quality services, policy checks, simulation integration
> **Space/Network:** Security, resilience, reliability, full portfolio capstones

| Module | Math | C++ | Starlink Topic |
|---|---|---|---|
| 11 - Security and Resilience | Probability & Statistics | Policy engine, concurrent analysis | RPKI/BGP safety, DDoS, jamming, anomaly detection, availability |
| 12 - Capstone Projects | Graph Theory & Optimization | Full production stack | Choose 2 Starlink-facing portfolio projects |

### Phase 4 Integrated Project: **Starlink Network Digital Twin**

- Model satellites, laser links, gateways, POPs, peering, failures, and telemetry.
- Validate route and policy changes before deployment.
- Demonstrate service impact, recovery, and traffic-engineering decisions.

---

## Long-Running Project: Starlink Network Toolkit

```text
Module  Addition                         Builds On
------  -------------------------------  ------------------------------
01      PublicDataParser                 -
02      AccessLinkModel                  PublicDataParser
03      GatewayPopModel                  AccessLinkModel
04      HandoverStateMachine             AccessLinkModel
05      StarlinkLinkBudget               AccessLinkModel + GatewayPopModel
06      BeamScheduler                    StarlinkLinkBudget
07      DirectToCellModel                HandoverStateMachine
08      ConstellationEngine              GatewayPopModel
09      LaserMeshScheduler               ConstellationEngine
10      TopologyController               ConstellationEngine + LaserMeshScheduler
11      ReliabilitySecurityAnalyzer      TopologyController
12      DigitalTwin                      All prior modules
```

---

## Daily Schedule Template

| Block | Duration | Focus |
|---|---:|---|
| Morning | ~45 min | Math lessons and problem sets |
| Midday | ~30 min | C++ implementation and small tests |
| Evening | ~45 min | Starlink/network reading and project work |

Weekends: integrate project modules, write short technical notes, and compare results against public Starlink/FCC/research data.
