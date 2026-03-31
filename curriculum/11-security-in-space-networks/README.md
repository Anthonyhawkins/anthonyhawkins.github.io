# Module 11: Security in Space Networks

**Duration:** 3 weeks
**Prerequisites:** Modules 02, 03, 08

---

## What You'll Learn

Space network security has unique constraints: limited compute on spacecraft, immutable hardware (can't upgrade a satellite's crypto chip after launch), broadcast RF that anyone can receive, and potential jamming/spoofing from adversaries. Your TLS/mTLS experience provides strong foundations here.

## The Problem

Satellite links face threats that terrestrial networks don't:
- **Eavesdropping:** RF signals cover wide areas — anyone with an antenna can listen
- **Jamming:** Deliberate interference to deny service
- **Spoofing:** Injecting false commands or telemetry
- **Replay attacks:** Recording and re-transmitting valid commands
- **ITAR/export controls:** Many space crypto solutions are ITAR-restricted
- **Limited on-board resources:** Spacecraft processors are radiation-hardened, slow, and can't be upgraded

## Topics

### Week 1: Link-Layer Security
- CCSDS Space Data Link Security (SDLS, CCSDS 355.0) — authentication and encryption at the frame level
- Encryption algorithms used in space: AES-256-GCM, AES-CTR
- Key management for spacecraft: pre-loaded keys, key update procedures
- Anti-replay: sequence numbers and sliding windows
- Comparison to TLS: SDLS is like TLS record layer but at the data link level

### Week 2: Network-Layer & Application-Layer Security
- Bundle Protocol Security (BPSec, RFC 9172) — securing DTN bundles
- Block-level security: confidentiality blocks (BCB) and integrity blocks (BIB)
- Security at the convergence layer: DTLS, TLS for ground-ground segments
- TRANSEC (transmission security) in DVB systems
- COMSEC (communications security) for military/government satellite links

### Week 3: Threats, Resiltic, & Emerging Tech
- Electronic warfare: jamming and anti-jam techniques
  - Spread spectrum, frequency hopping, adaptive nulling
  - Directional antennas and beam steering for jam resistance
- Cyber threats to ground segments: the weakest link
- Supply chain security for spacecraft components
- Quantum Key Distribution (QKD) over satellite
  - Micius/Mozi experiments (China)
  - ESA SAGA mission
  - What QKD actually provides vs. what it doesn't
- Post-quantum cryptography for long-lived spacecraft

## Protocol Reference Table

| Protocol | Spec | Problem It Solves | New/Legacy |
|---|---|---|---|
| SDLS | CCSDS 355.0 | Link-layer auth + encryption for space | `[NEW SPACE]` |
| BPSec | RFC 9172 | End-to-end DTN bundle security | `[NEW SPACE]` |
| DTLS 1.3 | RFC 9147 | Securing convergence layers | `[BOTH]` |
| TRANSEC (DVB) | DVB-RCS2 spec | Over-the-air encryption for VSAT | `[BOTH]` |
| AES-GCM / AES-CTR | NIST | Symmetric encryption for space links | `[BOTH]` |
| Frequency hopping (FHSS) | Various military specs | Anti-jam | `[LEGACY]` evolving |
| QKD (Quantum Key Distribution) | Experimental | Future-proof key exchange | `[NEW SPACE]` |

## Companies

| Company | Role | New/Legacy |
|---|---|---|
| **L3Harris** | Military COMSEC, protected satellite comms (AEHF) | `[LEGACY]` |
| **Northrop Grumman** | Protected tactical satcom, anti-jam | `[BOTH]` |
| **Raytheon / RTX** | Satellite ground crypto, GPS security | `[BOTH]` |
| **SEAKR Engineering** | Radiation-hardened crypto processors for space | `[BOTH]` |
| **Arqit** | Satellite-based QKD service | `[NEW SPACE]` |
| **SpeQtral** | QKD satellite constellation | `[NEW SPACE]` |
| **NASA/JPL** | SDLS and BPSec development | `[BOTH]` |

## Books & Resources

| Resource | Notes |
|---|---|
| CCSDS 355.0-B (SDLS Specification) | The link-layer security standard |
| RFC 9172 (BPSec) | DTN security specification |
| CCSDS 350.x (Security Green Books) | Threat analysis and architecture guides |
| "Satellite Communication Security" (various IEEE papers) | Search IEEE Xplore |

## Hands-On Exercises

1. **SDLS Frame Encryptor (C++):** Implement AES-GCM encryption/decryption for CCSDS transfer frames with sequence-number-based anti-replay. Use OpenSSL or libsodium for crypto primitives
2. **BPSec Implementation (C++):** Add BIB (integrity) and BCB (confidentiality) block support to your Module 03 BP implementation
3. **Jamming Resilience Analysis (Python):** Simulate a simple spread-spectrum vs. narrowband link with NumPy/SciPy. Show how spreading gain provides jamming resistance at the cost of bandwidth. Plot BER curves
4. **Key Management Protocol (C++):** Design and prototype a key rotation scheme for a 100-satellite constellation — consider the constraints of limited uplink bandwidth for key distribution
