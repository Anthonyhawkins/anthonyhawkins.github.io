---
title: "Module 07: Ground Segment Architecture"
module_number: 07
weight: 07
---


**Duration:** 4 weeks
**Prerequisites:** Modules 01, 04

---

## What You'll Learn

The ground segment is where satellites meet the internet. You'll learn how ground stations, gateways, network operations centers, and terrestrial POPs work together to complete the end-to-end data path. **Your edge protocol and infrastructure experience maps directly here.**

## The Problem

A satellite constellation is useless without ground infrastructure to:
- Uplink commands and receive telemetry
- Serve as on/off ramps between the satellite network and the terrestrial internet
- Manage the constellation's network state
- Provide weather-diverse, geographically distributed connectivity

## Topics

### Week 1: Ground Station Architecture
- Antenna systems: parabolic, phased array, ground-based ESAs
- Autotracking mounts for LEO
- RF front-end: LNA, downconverter, digitizer
- Baseband processing: demodulation, frame sync, decoding
- Ground station networks: KSAT, SSC, Atlas Space Operations, AWS Ground Station, Azure Orbital

### Week 2: Gateway Design for Constellations
- Gateway vs. ground station distinction
- Gateway architecture for LEO broadband (Starlink, Kuiper model)
- Fiber connectivity: gateway ↔ POP ↔ IXP
- Redundancy and diversity: multiple gateways per coverage area
- Gateway handover: managing traffic continuity as satellites move

### Week 3: Network Operations
- Mission operations center (MOC) / Network operations center (NOC)
- Constellation management: ephemeris updates, contact scheduling
- SLE (Space Link Extension): cross-support between agencies/providers
- Ground-based DTN nodes and convergence layers
- Cloud-based ground stations: AWS Ground Station, Azure Orbital — virtualized baseband processing

### Week 4: Terrestrial Integration
- POP architecture: where satellite traffic meets BGP peering
- Traffic engineering: routing user traffic to nearest available gateway
- Latency optimization: POP placement strategy
- Content delivery over satellite: CDN integration
- **This is essentially your current job but with satellite uplinks** — peering, traffic engineering, edge optimization

## Technology Reference

| Technology | Problem It Solves | New/Legacy |
|---|---|---|
| SLE (Space Link Extension) | Cross-support between agencies | `[LEGACY]` evolving |
| CCSDS Cross Support | Standardized ground station services | `[BOTH]` |
| AWS Ground Station | Cloud-managed satellite contacts | `[NEW SPACE]` |
| Azure Orbital | Cloud-managed satellite contacts | `[NEW SPACE]` |
| GSaaS (Ground Station as a Service) | Eliminates need to build own ground stations | `[NEW SPACE]` |

## Companies

| Company | Role | New/Legacy |
|---|---|---|
| **KSAT** (Kongsberg) | Global ground station network (25+ sites) | `[BOTH]` |
| **SSC** (Swedish Space Corp) | Ground station network, Esrange | `[BOTH]` |
| **Atlas Space Operations** | Cloud ground station platform | `[NEW SPACE]` |
| **AWS Ground Station** | On-demand satellite contact scheduling | `[NEW SPACE]` |
| **Microsoft Azure Orbital** | Cloud ground segment | `[NEW SPACE]` |
| **Leaf Space** | GSaaS for LEO satellites | `[NEW SPACE]` |
| **RBC Signals** | Distributed ground station sharing | `[NEW SPACE]` |
| **Viasat / Hughes** | Gateway operations for GEO broadband | `[LEGACY]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Satellite Communications Systems* (Maral et al.) | Ground segment chapters |
| *Satellite Ground Station Antennas* (Schwerdtfeger) | Deep dive on antenna engineering |
| AWS Ground Station docs | https://docs.aws.amazon.com/ground-station/ |
| CCSDS SLE specifications | Cross-support standards |

## Hands-On Exercises

1. **Ground Station Scheduler (Python):** Given a TLE set for N satellites and M ground stations, compute contact schedules for a 24-hour period using Skyfield. Optimize for maximum data downlink. Visualize on a map with Cartopy
2. **Gateway Load Balancer (C++):** Simulate user terminal traffic across multiple gateways. Implement handover logic when a satellite moves out of a gateway's coverage. Use Boost.Asio for async simulation
3. **AWS Ground Station Lab:** If you have AWS access, schedule a real contact with a public satellite (NOAA, etc.) — process the received data with Python
4. **POP Placement Optimizer (Python):** Given gateway locations and internet exchange points, determine optimal POP placement to minimize user latency using SciPy optimization
