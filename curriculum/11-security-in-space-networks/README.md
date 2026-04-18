# Module 11: Security in Space Networks

**Phase:** 4 — Mastery
**Builds on:** Modules 01, 04, 06

---

## 🔢 Math You'll Learn

### Probability & Statistics

The math behind noise analysis, error rates, and system reliability.

- **Random variables, PDF, CDF, expectation, variance** — statistical foundations
- **Gaussian (Normal) distribution & Central Limit Theorem** — the basis for noise modeling
  - *Space application:* thermal noise is Gaussian → this is why Eb/N₀ and BER curves work
  - *Space application:* understanding false alarm rates in intrusion detection
- **Rayleigh & Rician fading** — multipath models for satellite-ground links
  - *Space application:* channel modeling, link availability statistics
- **Markov chains (basics)** — state-based probabilistic models
  - *Space application:* channel state modeling, protocol state machines, attack modeling

**🔓 After this:** You can compute full link budgets with noise, BER, rain fade availability, and model security detection rates.

**Resources:**
- *Probability and Statistics for Engineering and the Sciences* — Jay Devore
- Khan Academy — Probability & Statistics (free)

---

## 🛰️ What You'll Learn

Space network security has unique constraints: limited compute on spacecraft, immutable hardware (can't upgrade a satellite's crypto chip after launch), broadcast RF that anyone can receive, and potential jamming/spoofing from adversaries. Your TLS/mTLS experience provides strong foundations here.

### The Problem
Satellite links face threats that terrestrial networks don't:
- **Eavesdropping:** RF signals cover wide areas — anyone with an antenna can listen
- **Jamming:** Deliberate interference to deny service
- **Spoofing:** Injecting false commands or telemetry
- **Replay attacks:** Recording and re-transmitting valid commands
- **Limited on-board resources:** Spacecraft processors are radiation-hardened, slow, and can't be upgraded

### Link-Layer Security
- CCSDS Space Data Link Security (SDLS, CCSDS 355.0) — authentication and encryption at the frame level
- Encryption algorithms: AES-256-GCM, AES-CTR
- Key management for spacecraft: pre-loaded keys, key update procedures
- Anti-replay: sequence numbers and sliding windows
- Comparison to TLS: SDLS is like TLS record layer but at the data link level

### Network & Application Layer Security
- Bundle Protocol Security (BPSec, RFC 9172) — securing DTN bundles
- Block-level security: confidentiality blocks (BCB) and integrity blocks (BIB)
- DTLS, TLS for ground-ground segments
- TRANSEC in DVB systems
- COMSEC for military/government links

### Threats, Resilience & Emerging Tech
- Electronic warfare: jamming and anti-jam techniques (spread spectrum, frequency hopping)
- Cyber threats to ground segments
- Quantum Key Distribution (QKD) over satellite
- Post-quantum cryptography for long-lived spacecraft

---

## 💻 C++ & Python Skills

**C++ focus:** OpenSSL or libsodium for crypto, concurrent encrypt/decrypt pipelines, memory-safe patterns
**Python focus:** SciPy for BER curves, NumPy for signal simulation, matplotlib

---

## Projects

### Project 1: SDLS Frame Encryptor with BPSec (C++)

Build a security layer for space data link frames and DTN bundles.

**What you'll build:**
- Implement AES-GCM encryption/decryption for CCSDS transfer frames (using OpenSSL or libsodium)
- Add sequence-number-based anti-replay protection (sliding window)
- Integrate BPSec: add BIB (integrity) and BCB (confidentiality) blocks to your Module 04 bundle library
- Use concurrent pipeline: one thread encrypts while another frames — producer/consumer pattern
- Benchmark encryption throughput for different frame sizes

**C++ skills used:** OpenSSL/libsodium, `std::thread`, concurrent producer/consumer, integration with toolkit modules

### Project 2: Jamming Resilience & BER Analysis (Python)

Analyze how spread spectrum provides jamming resistance.

**What you'll build:**
- Simulate a narrowband signal being jammed at various jammer-to-signal ratios
- Implement direct-sequence spread spectrum (DSSS) with configurable spreading gain
- Show how DSSS provides jamming resistance at the cost of bandwidth
- Plot BER curves for BPSK under Gaussian noise: theoretical vs. simulated
- Compute and plot link availability given noise statistics and required Eb/N₀

**Python skills used:** NumPy, SciPy (erfc for BER), matplotlib, Monte Carlo simulation

---

## Protocol Reference Table

| Protocol | Spec | Problem It Solves | New/Legacy |
|---|---|---|---|
| SDLS | CCSDS 355.0 | Link-layer auth + encryption for space | `[NEW SPACE]` |
| BPSec | RFC 9172 | End-to-end DTN bundle security | `[NEW SPACE]` |
| DTLS 1.3 | RFC 9147 | Securing convergence layers | `[BOTH]` |
| TRANSEC (DVB) | DVB-RCS2 spec | Over-the-air encryption for VSAT | `[BOTH]` |
| AES-GCM / AES-CTR | NIST | Symmetric encryption for space links | `[BOTH]` |
| QKD | Experimental | Future-proof key exchange | `[NEW SPACE]` |

## Companies

| Company | Role | New/Legacy |
|---|---|---|
| **L3Harris** | Military COMSEC, protected satellite comms (AEHF) | `[LEGACY]` |
| **Northrop Grumman** | Protected tactical satcom, anti-jam | `[BOTH]` |
| **SEAKR Engineering** | Radiation-hardened crypto processors for space | `[BOTH]` |
| **Arqit** | Satellite-based QKD service | `[NEW SPACE]` |
| **NASA/JPL** | SDLS and BPSec development | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| CCSDS 355.0-B (SDLS Specification) | The link-layer security standard |
| RFC 9172 (BPSec) | DTN security specification |
| CCSDS 350.x (Security Green Books) | Threat analysis and architecture guides |
