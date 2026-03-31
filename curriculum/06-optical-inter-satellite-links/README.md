# Module 06: Optical Inter-Satellite Links (OISL)

**Duration:** 4 weeks
**Prerequisites:** Modules 04, 05

---

## What You'll Learn

Optical (laser) inter-satellite links are the backbone of modern constellations — they're what turn thousands of individual satellites into a coherent global network. You'll learn how they work physically, the networking challenges they introduce, and why they represent the biggest growth area in space networking.

## The Problem OISL Solves

RF inter-satellite links are bandwidth-limited and require large antennas. Optical/laser links provide:
- **10–100+ Gbps** data rates (vs. RF ISL ~Mbps–low Gbps)
- **No spectrum licensing** needed (laser frequencies are unregulated in space)
- **Narrow beamwidth** = low probability of intercept/interference
- **Lower SWaP** (size, weight, power) per Gbps

The trade-off: pointing accuracy must be **sub-microradian** — you're aiming a laser at a target moving at 7.5 km/s, hundreds or thousands of km away.

## Topics

### Week 1: Physics & Hardware
- Free-space optical communication principles
- Laser types: DPSSL, fiber lasers, semiconductor
- Modulation formats: OOK, BPSK, DPSK, coherent detection
- Laser communication terminals (LCTs): gimbal-based vs. MEMS vs. liquid crystal
- Acquisition, tracking, and pointing (ATP) subsystem
- Point-ahead angle: accounting for light travel time

### Week 2: Link Design
- Optical link budget: transmit power, divergence, aperture, detector sensitivity
- Background noise: sun, Earth albedo, other satellites
- Atmospheric effects on optical ground links (scintillation, clouds)  
- Optical ground stations and site diversity

### Week 3: Networking Over OISL
- Mesh topology formation: which satellites link to which?
- 4-link topology: intra-plane (±1) + cross-plane (±1) — the standard approach
- Link scheduling: when to acquire/release optical links
- Integration of L2/L3 routing into optical terminals
- Wavelength-division multiplexing (WDM) for capacity scaling
- **This is where the industry is heading:** satellites as network routers

### Week 4: Industry & Future Directions
- Starlink laser ISL deployment and capabilities
- SDA Transport Layer laser mesh requirements
- Cislunar optical links (LCRD, ILLUMA-T demonstrations)
- Deep space optical: DSOC (NASA's Deep Space Optical Communications)
- Quantum key distribution (QKD) over satellite optical links

## Protocol/Technology Reference

| Technology | Problem It Solves | New/Legacy | Who Uses It |
|---|---|---|---|
| Coherent optical detection | Higher data rates + sensitivity | `[NEW SPACE]` | Mynaric, CACI, Tesat-Spacecom |
| ATP (Acq/Track/Point) | Establishing/maintaining laser lock | `[BOTH]` | All OISL vendors |
| WDM in free-space optical | Multiplying capacity per link | `[NEW SPACE]` | Research, emerging products |
| CCSDS Optical Comms standards | Interoperability for optical links | `[NEW SPACE]` | CCSDS member agencies |
| DSOC tech stack | Deep-space laser downlink | `[NEW SPACE]` | NASA/JPL |

## Companies in This Space

| Company | Product/Focus | New/Legacy |
|---|---|---|
| **Mynaric** (Germany/US) | CONDOR laser terminals, high-volume manufacturing | `[NEW SPACE]` |
| **Tesat-Spacecom** (Germany) | LCT heritage (EDRS), new SmartLCT products | `[BOTH]` |
| **CACI** (ex-SA Photonics) | Laser comms terminals for DoD/SDA | `[NEW SPACE]` |
| **SpaceX** | Custom-built laser ISLs for Starlink (in-house) | `[NEW SPACE]` |
| **Transcelestial** | Air-to-ground and space laser comms | `[NEW SPACE]` |
| **Honeywell** | Optical terminals for SDA satellites | `[BOTH]` |
| **Skyloom** | Optical relay constellation concept | `[NEW SPACE]` |
| **NASA/JPL** | DSOC, LCRD, ILLUMA-T demos | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| *Free-Space Laser Communications* (Hemmati, ed.) | Comprehensive reference on optical link physics |
| CCSDS Optical Communications Working Group docs | Standards in development |
| NASA DSOC results papers | https://www.nasa.gov/mission/dsoc/ |
| Mynaric technical papers | Public whitepapers on CONDOR terminal design |

## Math Used
- **Calculus:** Beam divergence, received power calculations (integrals over aperture)
- **Linear algebra:** Pointing vectors, rotation matrices for ATP
- **Probability:** Bit error rate, acquisition probability
- **Trigonometry:** Point-ahead angle, angular tracking

## Hands-On Exercises

1. **Optical Link Budget Calculator (Python):** Build a tool computing received power for a LEO-LEO laser link given: transmit power, beam divergence, aperture diameter, range, pointing loss. Use NumPy and plot sensitivity curves
2. **ATP Acquisition Simulator (Python):** Model the spatial uncertainty cone and scan pattern for initial laser acquisition between two satellites using Matplotlib animations
3. **OISL Mesh Topology Generator (C++):** Given Walker constellation parameters, compute the 4-link OISL topology at each timestep. Output topology snapshots as JSON for visualization
4. **Latency Map (Python):** Using your Module 05 router + OISL topology, compute a global latency heatmap for satellite-routed traffic. Visualize with Plotly or Cartopy
