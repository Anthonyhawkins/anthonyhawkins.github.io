# Module 01: Starlink System Model, Public Data, and RF Units

**Phase:** 1 - Foundation
**Builds on:** None - this is your starting point

---

## Math You'll Learn

### Algebra 2: Logarithms, Exponentials, Ratios, and dB Arithmetic

Starlink is an RF network and an ISP. You need dB math immediately because link budgets, antenna gain, path loss, EIRP, G/T, and noise density all use logarithmic units.

- **Exponentials and logarithms** - signal power changes across huge ratios, and logarithms make those ratios usable.
  - *Starlink application:* dB = 10 log10(P2/P1), used for every gain/loss term in an access or gateway link.
  - *Starlink application:* adding dB values is multiplying linear powers, which is how link budgets become readable.
- **Unit conversions and ratios** - W, mW, dBW, dBm, Hz, MHz, GHz, bps, Mbps, Gbps.
  - *Starlink application:* convert public frequency bands and bandwidths from FCC filings into engineering units.
- **Scientific notation and estimation** - approximate delay, range, and free-space path-loss ratios.
  - *Starlink application:* compare LEO propagation at roughly 550 km with GEO at 35,786 km.
- **Basic tabular data handling** - read and validate numeric fields from public data files.
  - *Starlink application:* parse TLE/OEM-style orbital data and FCC frequency tables.

**After this:** You can read public Starlink/FCC technical data, convert RF units, estimate delay/path loss, and avoid treating proprietary Starlink internals as known facts.

**Resources:**

- Khan Academy - Algebra 2: logarithms and exponentials
- Starlink Technology - https://www.starlink.com/technology
- Starlink Satellite Operators - https://www.starlink.com/satellite-operators
- FCC Starlink Gen2 Order - https://docs.fcc.gov/public/attachments/FCC-22-91A1.pdf

---

## What You'll Learn

The first module changes the entry point from a generic CCSDS protocol stack to a public Starlink system model. CCSDS still matters as background, especially for ephemeris and space interoperability, but it is not the center of Starlink's broadband network.

### Starlink as a Networked System

- Satellites, user terminals, gateways, POPs, backbone links, and operations systems.
- Starlink as a vertically integrated ISP: access network, space segment, ground segment, backbone, peering, telemetry, and automation.
- What is public vs proprietary: frequency bands, orbital parameters, regulatory constraints, some architecture claims, public ephemeris data, and high-level Direct to Cell claims are public; internal PHY/MAC/routing/control-plane implementation is not.
- How to build defensible simulations from public constraints instead of inventing internal details.

### Public Data Sources

- TLEs and ephemerides: satellite identifier, epoch, position/velocity concepts, covariance and maneuver metadata where available.
- CCSDS OEM as a useful public ephemeris format.
- FCC filings and orders: frequency bands, orbital shells, power constraints, interference constraints, and gateway authorizations.
- CelesTrak and Space-Track as supporting data sources for public orbital data.

### RF and Link Vocabulary

- Frequency, wavelength, bandwidth, noise density, EIRP, G/T, FSPL, link margin.
- Ku service links, Ka/E-band feeder links, and TT&C as separate link categories.
- Why LEO latency is lower than GEO but topology changes constantly.
- Why public data is enough to build useful models for interview preparation and portfolio projects.

---

## C++ and Python Skills

**C++ focus:** variables, types, functions, structs, file I/O, command-line arguments, parsing text/binary records, unit tests for conversion functions.

**Python focus:** basic scripting, CSV/JSON parsing, NumPy arrays, matplotlib plots.

---

## Projects

### Project 1: Starlink Public Data Parser (C++)

Build a CLI/library that ingests public Starlink-relevant records and normalizes them into typed structures.

**What you'll build:**

- Parse TLE records into satellite ID, epoch, inclination, RAAN, eccentricity, mean motion, and related fields.
- Parse a simplified OEM-style ephemeris record into timestamp, position, velocity, and optional covariance fields.
- Parse a small FCC frequency table into service-link, feeder-link, and TT&C bands.
- Validate units and reject malformed records with useful error messages.
- Output normalized JSON for later modules.

**C++ skills used:** file I/O, structs/classes, string parsing, error handling, command-line arguments, unit tests.

**Toolkit:** Start the **Starlink Network Toolkit** with `PublicDataParser`.

### Project 2: Starlink RF Unit Toolkit (Python)

Build a small RF calculator and visualizer.

**What you'll build:**

- Convert W, mW, dBW, dBm, dB, MHz, GHz, and wavelength.
- Compute EIRP and chain simple gain/loss terms.
- Estimate one-way propagation delay for LEO, MEO, and GEO altitudes.
- Plot path-loss ratio comparisons for Ku, Ka, and E-band examples.
- Write a short note identifying which values came from public sources and which are assumptions.

**Python skills used:** functions, dictionaries, CSV/JSON, NumPy, matplotlib.

---

## Technology Reference

| Concept | Problem It Solves | Starlink Relevance |
|---|---|---|
| TLE | Compact public orbital elements | Public satellite tracking and first-pass propagation |
| CCSDS OEM | Precise ephemeris exchange format | Useful for operator data exchange and high-fidelity simulations |
| FCC filings | Public regulatory constraints | Frequencies, shells, power/interference limits |
| dBW/dBm/dB | RF unit system | Link budgets and antenna calculations |
| EIRP and G/T | Transmit and receive figures of merit | Access/gateway link analysis |

## Where This Tech Is Used

| Area | Use |
|---|---|
| Starlink network modeling | Build public, reproducible assumptions for simulations |
| Ground-network planning | Connect orbital visibility to gateway/POP decisions |
| Link engineering | Convert public RF constraints into link-budget inputs |
| Interview prep | Explain what is public, what is inferred, and what is proprietary |

## Books and Resources

| Resource | Notes |
|---|---|
| Starlink Technology | Public architecture and hardware claims |
| Starlink Satellite Operators | Public ephemeris and space-safety workflow |
| FCC Gen2 Starlink Order | Public orbital/frequency constraints |
| Pratt, *Satellite Communications* | Intro RF and link terminology |
| CCSDS OEM documentation | Ephemeris format background |
