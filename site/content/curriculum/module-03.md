---
title: "Module 03: Starlink Ground Network, Gateways, POPs, and Internet Peering"
module_number: 3
weight: 3
---


**Phase:** 1 - Foundation
**Builds on:** Modules 01 and 02

---

## Math You'll Learn

### Trigonometry: Law of Cosines, Elevation Angles, Slant Range, and Latency Geometry

This is where trig becomes operational: which gateways can see which satellites, what delay a path adds, and when a gateway/POP choice is better or worse.

- **Law of sines and cosines** - compute slant range from Earth radius, satellite altitude, and elevation angle.
  - *Starlink application:* determine whether a satellite can use a candidate gateway at a given time.
- **Inverse trig** - compute elevation and azimuth from geometry.
  - *Starlink application:* gateway visibility and antenna pointing.
- **Radians, angular velocity, and arc length** - understand how fast geometry changes.
  - *Starlink application:* estimate pass duration and gateway handover timing.
- **Latency decomposition** - add terminal-to-satellite, satellite-to-gateway, gateway-to-POP, and POP-to-destination components.

**After this:** You can model gateway visibility, POP egress latency, and the terrestrial networking side of Starlink service.

**Resources:**

- Khan Academy - Trigonometry
- Public Starlink gateway/POP research and FCC gateway filings
- Internet routing references for BGP, peering, and transit

---

## What You'll Learn

The ground segment is where Starlink becomes the internet. This module focuses on gateways, POPs, optical transport, subscriber services, and routing protocols rather than generic ground-station-as-a-service models.

### Gateway and POP Architecture

- Gateway earth stations vs user terminals vs POPs.
- Satellite feeder links, gateway antennas, RF/baseband, and terrestrial handoff.
- Colocation facilities, long-haul fiber, WDM/DWDM, circuit turn-up, and capacity planning.
- POP egress, IXPs, private peering, transit, and regional latency.
- Gateway diversity for weather, capacity, and failure resilience.

### Service-Provider Networking

- BGP peering and transit policy.
- Internal routing: IS-IS/OSPF, MPLS, Segment Routing, ECMP.
- IPv4/IPv6 addressing, CGNAT, IPv6 prefix delegation.
- DNS, DHCP, NTP, RADIUS/AAA, QoS, and subscriber management.
- Route selection when satellite, gateway, POP, and terrestrial paths all matter.

### Operations

- Inventory and configuration management.
- Telemetry, alerting, link utilization, latency, packet loss, and route churn.
- Maintenance windows, safe rollout, rollback, and incident response.
- Where software engineering and gRPC/API design fit into network operations.

---

## C++ and Python Skills

**C++ focus:** OOP, STL containers (`vector`, `map`, `unordered_map`), algorithms, lambdas, clean data modeling.

**Python focus:** Skyfield for satellite propagation, NetworkX for path models, matplotlib/Plotly for maps.

---

## Projects

### Project 1: Gateway Visibility and POP Path Calculator (C++)

Build a gateway/POP path model for Starlink-like service.

**What you'll build:**

- Define `Gateway`, `Pop`, `Satellite`, and `UserTerminal` classes.
- Compute whether a gateway can see a satellite above an elevation mask.
- Estimate terminal-satellite-gateway delay and gateway-POP terrestrial delay.
- Rank candidate gateway/POP egress choices by latency and availability.
- Output route candidates as JSON for later visualization.

**C++ skills used:** classes, STL containers, algorithms, JSON serialization.

**Toolkit:** Add `GatewayPopModel`.

### Project 2: Gateway/POP Route Planner (Python)

Visualize ground-network choices.

**What you'll build:**

- Place a set of gateways, POPs, and user locations on a map.
- Load TLEs or simplified shell positions.
- Compute gateway visibility windows over 24 hours.
- Select the lowest-latency egress for several user/destination pairs.
- Plot route choices and show how weather or gateway failure changes egress.

**Python skills used:** Skyfield, NetworkX, matplotlib/Plotly, tabular output.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| Gateway | Satellite-to-ground feeder link | Connects space segment to terrestrial network |
| POP | Internet egress and peering | Determines terrestrial path and latency |
| BGP | Interdomain routing and peering | Public internet connectivity |
| IS-IS/OSPF | Internal routing | Provider backbone control plane |
| MPLS/SR | Traffic engineering and fast reroute | Network-control foundation |
| RADIUS/AAA | Subscriber authentication/accounting | ISP operations |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink ground network | Gateways, POPs, transport, and peering |
| ISP network engineering | BGP, MPLS/SR, routing policy, telemetry |
| Topology service design | Gateway and POP state become path inputs |
| Operational automation | Inventory, config, safe deployment, rollback |

## Books and Resources

| Resource | Notes |
|---|---|
| Public Starlink job descriptions | Protocols and operational skills SpaceX asks for |
| Halabi, *Internet Routing Architectures* | BGP policy and peering |
| Davie/Farrel, *MPLS in the SDN Era* | MPLS/SR and TE concepts |
| Stevens, *TCP/IP Illustrated* | Network protocol refresh |
