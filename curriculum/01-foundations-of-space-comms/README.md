# Module 01: Foundations of Space Communications

**Duration:** 6 weeks
**Prerequisites:** Module 00 (Math Foundations)

---

## What You'll Learn

How communication works between Earth and space — the physical constraints, the orbital geometry, and why terrestrial networking assumptions break down.

## Topics

### Week 1–2: The Space Environment
- Speed of light delay: LEO (~4–40ms), MEO (~120ms), GEO (~600ms round-trip)
- Signal attenuation: free-space path loss, atmospheric absorption, rain fade
- Doppler shift and its effect on frequency tracking
- The space radiation environment and its effect on electronics (SEU, TID)

### Week 3–4: Orbits & Coverage
- Keplerian orbital mechanics: the six orbital elements
- LEO vs. MEO vs. GEO vs. HEO trade-offs
- Ground track patterns and revisit time
- Coverage geometry: elevation angle, slant range, contact duration
- Walker constellations and coverage optimization

### Week 5–6: Communication Link Basics
- The communication chain: transmitter → channel → receiver
- Frequency bands used in space: UHF, S, X, Ku, Ka, V, optical
- Modulation basics: BPSK, QPSK, 8PSK, QAM
- Error correction: convolutional codes, turbo codes, LDPC
- Multiplexing: FDMA, TDMA, CDMA

## Math Used
- **Calculus:** derivatives for Doppler, integrals for signal energy
- **Vectors (Calc III):** satellite position and velocity in 3D
- **Logarithms:** dB-scale link calculations
- **Coordinate transforms (Linear Algebra):** ECI ↔ ECEF ↔ topocentric frames

## Protocols & Standards Introduced

| Protocol/Standard | Type | Problem It Solves | New/Legacy |
|---|---|---|---|
| ITU Radio Regulations | Regulatory | Frequency coordination & interference management | `[BOTH]` |
| CCSDS 401.0 (RF & Modulation) | Physical layer | Standardized space link physical parameters | `[LEGACY]` evolving |
| DVB-S2 (overview) | Physical layer | Efficient satellite broadcast modulation & coding | `[BOTH]` |

## Where This Tech Is Used

| Application | Companies | Description |
|---|---|---|
| Direct-to-Earth observation downlink | Planet Labs, Capella Space, BlackSky | Satellites photograph Earth, downlink imagery to ground stations |
| GEO broadcast and broadband | SES, Intelsat, Eutelsat | Traditional TV broadcast and enterprise VSAT |
| LEO broadband | SpaceX (Starlink), Amazon (Kuiper), OneWeb | Consumer/enterprise internet via satellite constellation |

## Books & Resources

| Resource | Chapters/Sections |
|---|---|
| *Satellite Communications* (Pratt et al.) | Ch. 1–4 (Orbital mechanics, propagation, link budgets) |
| *Orbital Mechanics for Engineering Students* (Curtis) | Ch. 1–4 (Two-body problem, orbital elements) |
| *Satellite Comms & Networking with Python* (Flux) | Ch. 1–3 (Orbit modeling, signal basics) |

## Hands-On Exercises

1. **Orbit Propagator (Python):** Use Skyfield or SGP4 (via `sgp4` package) to propagate a LEO satellite from a TLE and compute ground station contact windows. Plot the ground track with Matplotlib
2. **Free-Space Path Loss Calculator (C++):** Build a CLI tool that computes FSPL for different frequency bands (S, X, Ka) and orbital altitudes (LEO, MEO, GEO). Use Eigen for vector math
3. **Doppler Shift Estimator (Python):** Calculate Doppler for a LEO pass at various elevation angles. Plot Doppler curve vs. time for a full overhead pass
