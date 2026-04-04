# Module 02: CCSDS Protocol Stack

**Duration:** 6 weeks
**Prerequisites:** Module 01

---

## What You'll Learn

The CCSDS protocol stack is to space what the TCP/IP stack is to the internet. You'll learn its layered architecture — from Space Packets down to physical-layer framing — and understand which missions use which protocols and why.

## Topics

### Weeks 1–4: Architecture Overview
- CCSDS layered reference model vs. OSI vs. TCP/IP
- The three link types: Space Link (long-range), Proximity Link (short-range), Ground-Ground
- Transfer frames vs. packets: why space uses both
- Read: CCSDS 130.0-G-4 — *Overview of Space Communications Protocols*

### Weeks 5–8: Data Link Layer Protocols
- **TM Space Data Link Protocol (CCSDS 132.0):** Telemetry frames, virtual channels, idle data insertion
- **TC Space Data Link Protocol (CCSDS 232.0):** Telecommand frames, COP-1 (reliable delivery), FARM/FOP state machines
- **AOS Space Data Link Protocol (CCSDS 732.0):** Advanced Orbiting Systems — multiplexing, bitstream services
- **Unified Space Data Link Protocol (USLP, CCSDS 732.1):** The modern replacement unifying TM, TC, and AOS
- **Proximity-1 (CCSDS 211.x):** Short-range orbiter-to-lander/rover links (used on Mars missions)

### Week 5: Application Layer
- **Space Packet Protocol (CCSDS 133.0):** The primary application data unit — analogous to IP datagrams
- **CCSDS File Delivery Protocol (CFDP, CCSDS 727.0):** Reliable file transfer for space — analogous to FTP but designed for disruption
- **Asynchronous Message Service (AMS):** Publish-subscribe messaging for space

### Week 6: Sync, Coding & Security
- **TM/TC Synchronization and Channel Coding:** Frame synchronization markers, randomization, Reed-Solomon, turbo, LDPC
- **Space Data Link Security (SDLS, CCSDS 355.0):** Authentication and encryption at the data link layer — your TLS/mTLS experience maps here
- **Space Link Extension (SLE):** How ground stations from different agencies interoperate — cross-support services

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

## Math Used
- **Finite state machines (Discrete Math):** COP-1 FARM/FOP state machines
- **Binary arithmetic:** Frame header parsing, bit-level protocol fields

## Hands-On Exercises

1. **Packet Parser (C++):** Write a CCSDS Space Packet parser — parse the 6-byte primary header (version, type, APID, sequence, length). Use `std::span` and bitwise ops for field extraction
2. **TM Frame Decoder (C++):** Decode a raw TM transfer frame — extract virtual channel ID, frame count, embedded packets. Build with CMake and gtest unit tests
3. **COP-1 State Machine (C++):** Implement the FOP (Flight Ops Procedure) and FARM (Frame Acceptance and Reporting) state machines for TC acknowledgment — this maps directly to your TCP state machine knowledge
4. **CFDP Sender/Receiver (Python):** Build a minimal CFDP Class 1 (unreliable) file delivery tool over a simulated lossy UDP link
