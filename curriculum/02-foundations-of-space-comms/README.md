# Module 02: Foundations of Space Communications

**Phase:** 1 — Foundation
**Builds on:** Module 01

---

## 🔢 Math You'll Learn

### Algebra 2 Completion + Trigonometry Introduction

You'll finish Algebra 2 and begin trigonometry — the math that unlocks satellite geometry.

- **Sequences & summation notation** — time-series data, telemetry streams, serial data patterns
- **Unit circle, sin/cos/tan** — the foundation for all satellite geometry
  - *Space application:* elevation angle = arctan(height/distance) — when can a ground station see a satellite?
- **Inverse trig functions** — computing angles from known distances
  - *Space application:* determining look angles for antenna pointing

**🔓 After this:** You understand the basic geometry of space communication — why signals weaken, how orbits affect links, and what frequency bands are used for what.

**Resources:**
- Khan Academy — Algebra 2 (sequences) + Trigonometry intro (free)
- Textbook: *Algebra and Trigonometry* — Stewart, Redlin, Watson

---

## 🛰️ What You'll Learn

How communication works between Earth and space — the physical constraints, the space environment, and why terrestrial networking assumptions break down. This is the conceptual foundation for everything that follows.

### The Space Environment
- Speed of light delay: LEO (~4–40ms), MEO (~120ms), GEO (~600ms round-trip)
- Signal attenuation: free-space path loss, atmospheric absorption, rain fade
- The space radiation environment and its effect on electronics (SEU, TID)
- Why terrestrial networking assumptions break in space

### Frequency Bands & Spectrum
- Frequency bands used in space: UHF, S, X, Ku, Ka, V, optical
- Atmospheric absorption windows — why certain frequencies work and others don't
- ITU Radio Regulations and frequency coordination
- Trade-offs: bandwidth vs. rain fade vs. antenna size

### Communication Link Concepts
- The communication chain: transmitter → channel → receiver
- Modulation basics: BPSK, QPSK, 8PSK, QAM (conceptual — you'll revisit with Calc II math in Module 06)
- Error correction concepts: why we need FEC, convolutional codes, turbo codes, LDPC
- Multiplexing: FDMA, TDMA, CDMA (high-level trade-offs)

### Orbits Overview (Conceptual)
- LEO vs. MEO vs. GEO vs. HEO — trade-offs for communications
- Why orbit altitude determines delay, coverage, and link budget
- The concept of ground track patterns and revisit time
- *Note: Full orbital mechanics math comes in Module 08 after you learn Calc III*

---

## 💻 C++ & Python Skills

**C++ focus:** Control flow, functions, basic classes, constructors, enums
**Python focus:** NumPy arrays, matplotlib plotting, formatted output

---

## Projects

### Project 1: Signal Propagation Delay Calculator (C++)

Build a CLI tool that computes signal propagation characteristics for different orbit types.

**What you'll build:**
- Compute one-way and round-trip delay for any orbit altitude (speed of light)
- Compute free-space path loss (FSPL) for different frequency bands (S, X, Ka) at different altitudes — uses your dB math from Module 01
- Output a formatted comparison table: LEO vs. MEO vs. GEO at each band

**C++ skills used:** Functions, classes, enums for orbit/band types, formatted output with `<iomanip>`

### Project 2: Frequency Band & Atmospheric Window Plotter (Python)

Build a visualization of space communication frequency bands.

**What you'll build:**
- Plot the electromagnetic spectrum from UHF to optical with labeled space bands
- Overlay atmospheric absorption curves (approximate) showing why Ka-band has rain issues
- Annotate which bands each major constellation uses (Starlink: Ka/Ku, Iridium: L, etc.)

**Python skills used:** matplotlib subplots, annotations, NumPy for curves

---

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
| *Satellite Communications* (Pratt et al.) | Ch. 1–2 (Propagation, frequency bands) |
| *Satellite Comms & Networking with Python* (Flux) | Ch. 1–2 (Signal basics) |
| CCSDS 401.0-B (RF & Modulation) | Overview sections |
