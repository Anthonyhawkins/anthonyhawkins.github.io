# Module 01: CCSDS Protocol Stack

**Phase:** 1 — Foundation
**Builds on:** None — this is your starting point

---

## 🔢 Math You'll Learn

### Algebra 2: Logarithms, Exponentials & dB Arithmetic

This is the most immediately useful math for space communications. Every link budget, every power measurement, and every gain calculation uses decibels.

- **Exponentials & logarithms** — signal power decays exponentially with distance; logarithms compress this into manageable numbers
  - *Space application:* dB = 10·log₁₀(P₂/P₁) — every link budget uses this
  - *Space application:* adding dB values = multiplying linear powers — the language of RF engineering
- **Polynomials & rational expressions** — polynomial curve fitting for antenna gain patterns
- **Logarithm properties & equations** — converting between dB, dBW, dBm; combining gains and losses

**🔓 After this:** You can compute link budgets in dB, understand EIRP, path loss, and G/T.

**Resources:**
- Khan Academy — Algebra 2 (free, self-paced)
- Textbook: *Algebra and Trigonometry* — Stewart, Redlin, Watson
- 3Blue1Brown — *Essence of Calculus* (watch early for context, even though you won't use calculus yet)

---

## 🛰️ What You'll Learn

The CCSDS protocol stack is to space what the TCP/IP stack is to the internet. You'll learn its layered architecture — from Space Packets down to physical-layer framing — and understand which missions use which protocols and why.

### Architecture Overview
- CCSDS layered reference model vs. OSI vs. TCP/IP
- The three link types: Space Link (long-range), Proximity Link (short-range), Ground-Ground
- Transfer frames vs. packets: why space uses both
- Read: CCSDS 130.0-G-4 — *Overview of Space Communications Protocols*

### Data Link Layer Protocols
- **TM Space Data Link Protocol (CCSDS 132.0):** Telemetry frames, virtual channels, idle data insertion
- **TC Space Data Link Protocol (CCSDS 232.0):** Telecommand frames, COP-1 (reliable delivery), FARM/FOP state machines
- **AOS Space Data Link Protocol (CCSDS 732.0):** Advanced Orbiting Systems — multiplexing, bitstream services
- **Unified Space Data Link Protocol (USLP, CCSDS 732.1):** The modern replacement unifying TM, TC, and AOS
- **Proximity-1 (CCSDS 211.x):** Short-range orbiter-to-lander/rover links (used on Mars missions)

### Application Layer
- **Space Packet Protocol (CCSDS 133.0):** The primary application data unit — analogous to IP datagrams
- **CCSDS File Delivery Protocol (CFDP, CCSDS 727.0):** Reliable file transfer for space — analogous to FTP but designed for disruption
- **Asynchronous Message Service (AMS):** Publish-subscribe messaging for space

### Sync, Coding & Security
- **TM/TC Synchronization and Channel Coding:** Frame synchronization markers, randomization, Reed-Solomon, turbo, LDPC
- **Space Data Link Security (SDLS, CCSDS 355.0):** Authentication and encryption at the data link layer — your TLS/mTLS experience maps here
- **Space Link Extension (SLE):** How ground stations from different agencies interoperate — cross-support services

---

## 💻 C++ & Python Skills

**C++ focus:** Variables, types, control flow, functions, arrays, pointers, binary I/O, bitwise operations
**Python focus:** Basic scripting, matplotlib for visualization

This is your first C++ module — you'll learn the language fundamentals by building practical tools that parse binary protocol data.

---

## Projects

### Project 1: CCSDS Space Packet Parser (C++)

Build a CLI tool that parses CCSDS Space Packet primary headers from binary data.

**What you'll build:**
- Parse the 6-byte primary header: version, type, secondary header flag, APID, sequence flags, sequence count, data length
- Use `std::span` and bitwise ops for field extraction
- Read binary files from stdin or file argument
- Output parsed fields in a human-readable table

**C++ skills used:** Binary I/O, bitwise operators, `std::span`, command-line arguments, `struct`

**🔧 Toolkit:** This starts the **Space Network Toolkit** — save the parser as a reusable library (`PacketParser`)

### Project 2: dB Conversion Toolkit (Python)

Build a Python tool for RF power calculations.

**What you'll build:**
- Convert between linear power (Watts, milliwatts) and dB scales (dB, dBW, dBm)
- Compute EIRP given transmit power and antenna gain
- Chain gains and losses in a simple link budget
- Visualize the CCSDS protocol stack layers as a diagram with matplotlib

**Python skills used:** Functions, f-strings, matplotlib, basic NumPy

---

## Protocol Reference Table

| Protocol | CCSDS Doc | Layer | Problem It Solves | New/Legacy | Who Uses It |
|---|---|---|---|---|---|
| Space Packet Protocol | 133.0-B | Application | Standard data unit format across agencies | `[BOTH]` | All CCSDS-compliant missions |
| TM Data Link | 132.0-B | Data Link | Multiplexed telemetry downlink | `[LEGACY]` | ISS, most Earth orbiters |
| TC Data Link | 232.0-B | Data Link | Reliable commanding with COP-1 | `[LEGACY]` | Most missions |
| AOS Data Link | 732.0-B | Data Link | High-rate, multi-service downlink | `[LEGACY]` | ISS, high-rate science missions |
| USLP | 732.1-B | Data Link | Unified modern replacement for TM/TC/AOS | `[NEW SPACE]` | Next-gen missions, Lunar Gateway |
| Proximity-1 | 211.x-B | Physical + Data Link | Short-range links (orbiter↔lander) | `[BOTH]` | Mars rovers (Curiosity, Perseverance) |
| CFDP | 727.0-B | Application | Reliable file delivery over disrupted links | `[BOTH]` | Deep space missions, ISS |
| SDLS | 355.0-B | Data Link | Link-layer encryption and authentication | `[NEW SPACE]` | Classified & sensitive missions |
| SLE | 911.x-B | Cross-support | Ground station interoperability | `[LEGACY]` | DSN, ESTRACK, JAXA |

## Where This Tech Is Used

| Application | Companies/Agencies | Notes |
|---|---|---|
| Deep space exploration | NASA/JPL, ESA, JAXA | CCSDS is mandatory for interoperability |
| ISS operations | NASA, ESA, JAXA, CSA | Uses TM, TC, AOS, CFDP |
| Mars surface operations | NASA/JPL | Proximity-1 for MRO↔rover relay |
| Lunar Gateway | NASA, ESA | Will use USLP and CFDP |
| CubeSat/SmallSat missions | Universities, startups | Increasingly adopting CCSDS for interop |
| Commercial ground station networks | KSAT, SSC, AWS Ground Station | SLE for cross-support |

## Books & Resources

| Resource | Chapters/Sections |
|---|---|
| CCSDS 130.0-G-4 (Green Book) | Entire document — the "map" |
| CCSDS Blue Books (individual protocol specs) | Reference as needed per protocol |
| *Satellite Communications Systems* (Maral et al.) | Ch. on data handling & protocols |
