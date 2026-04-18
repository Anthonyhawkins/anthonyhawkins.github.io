---
title: "Module 03: Ground Segment Architecture"
module_number: 03
weight: 03
---


**Phase:** 1 — Foundation
**Builds on:** Modules 01, 02

---

## 🔢 Math You'll Learn

### Trigonometry: Law of Cosines, Elevation Angles & Slant Range

This is where trig becomes immediately practical — you'll compute whether a ground station can see a satellite and how far away it is.

- **Law of sines / cosines** — computing slant range (distance from ground station to satellite)
  - *Space application:* slant range = f(Earth radius, satellite altitude, elevation angle)
- **Inverse trig: arctan, arcsin** — computing elevation angle from geometry
  - *Space application:* minimum elevation angle determines when a satellite is "visible" (typically >5°)
- **Polar coordinates & vectors intro** — antenna radiation patterns are plotted in polar coordinates
- **Angular velocity, arc length, radians** — satellite angular rate as seen from ground

**🔓 After this:** You can compute ground station visibility, slant range, and antenna beam geometry.

**Resources:**
- Khan Academy — Trigonometry (free)
- Textbook: *Algebra and Trigonometry* — Stewart, Redlin, Watson (trig chapters)

---

## 🛰️ What You'll Learn

The ground segment is where satellites meet the internet. You'll learn how ground stations, gateways, network operations centers, and terrestrial POPs work together to complete the end-to-end data path. **Your edge protocol and infrastructure experience maps directly here.**

### Ground Station Architecture
- Antenna systems: parabolic, phased array, ground-based ESAs
- Autotracking mounts for LEO
- RF front-end: LNA, downconverter, digitizer
- Baseband processing: demodulation, frame sync, decoding
- Ground station networks: KSAT, SSC, Atlas Space Operations, AWS Ground Station, Azure Orbital

### Gateway Design for Constellations
- Gateway vs. ground station distinction
- Gateway architecture for LEO broadband (Starlink, Kuiper model)
- Fiber connectivity: gateway ↔ POP ↔ IXP
- Redundancy and diversity: multiple gateways per coverage area
- Gateway handover: managing traffic continuity as satellites move

### Network Operations
- Mission operations center (MOC) / Network operations center (NOC)
- Constellation management: ephemeris updates, contact scheduling
- SLE (Space Link Extension): cross-support between agencies/providers
- Ground-based DTN nodes and convergence layers
- Cloud-based ground stations: AWS Ground Station, Azure Orbital — virtualized baseband processing

### Terrestrial Integration
- POP architecture: where satellite traffic meets BGP peering
- Traffic engineering: routing user traffic to nearest available gateway
- Latency optimization: POP placement strategy
- Content delivery over satellite: CDN integration
- **This is essentially your current job but with satellite uplinks** — peering, traffic engineering, edge optimization

---

## 💻 C++ & Python Skills

**C++ focus:** OOP (classes, inheritance), STL containers (vector, map), iterators, algorithms, lambdas
**Python focus:** Skyfield for satellite propagation, Cartopy/matplotlib for map visualization

---

## Projects

### Project 1: Elevation Angle & Slant Range Calculator (C++)

Build a CLI tool that computes satellite visibility geometry.

**What you'll build:**
- Given satellite altitude and ground station latitude, compute: elevation angle, slant range, and free-space path loss
- Sweep across elevation angles (5°–90°) and output a table of slant range vs. elevation
- Support multiple orbit types (LEO 550km, MEO 8000km, GEO 35786km)
- Use classes for `GroundStation` and `Satellite` with proper encapsulation

**C++ skills used:** Classes, constructors, STL containers, algorithms, formatted output

**🔧 Toolkit:** Add `GroundStation` class to the Space Network Toolkit

### Project 2: Ground Station Contact Scheduler (Python)

Build a contact schedule for a satellite pass over a global ground station network.

**What you'll build:**
- Load TLEs for a LEO satellite using Skyfield
- Define 3–5 ground station locations (lat/lon)
- Compute contact windows (start/end times when elevation > 5°) over a 24-hour period
- Visualize passes on a world map with Cartopy or matplotlib basemap
- Output a schedule table sorted by time

**Python skills used:** Skyfield, datetime, matplotlib/Cartopy, tabular output

---

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
| AWS Ground Station docs | https://docs.aws.amazon.com/ground-station/ |
| CCSDS SLE specifications | Cross-support standards |
