---
title: "Module 06: Broadband PHY/MAC Scheduling for a Starlink-Like System"
module_number: 6
weight: 6
---


**Phase:** 2 - Acceleration
**Builds on:** Modules 02, 04, and 05

---

## Math You'll Learn

### Calculus I: Derivatives, Chain Rule, Optimization, and Applications

Scheduling is optimization under changing constraints. You will use derivatives and piecewise functions to reason about marginal capacity, MCS thresholds, and beam-resource allocation.

- **Chain rule, product rule, quotient rule** - composed capacity and link-quality functions.
  - *Starlink application:* throughput depends on SNR, beam load, bandwidth, and scheduler policy.
- **Related rates** - changing elevation changes range, FSPL, margin, and capacity.
- **Optimization** - choose the best allocation under power, bandwidth, beam, and fairness constraints.
  - *Starlink application:* decide which terminal or beam gets the next unit of resource.
- **Piecewise functions** - MCS thresholds and outage behavior.

**After this:** You can simulate a Starlink-like broadband scheduler and explain fairness/throughput trade-offs without assuming Starlink's proprietary MAC.

**Resources:**

- Stewart, *Calculus: Early Transcendentals*, Chapters 3-4
- Digital communications texts for MCS, FEC, and spectral efficiency
- DVB-S2X/RCS2 standards as public comparison material, not assumed Starlink implementation

---

## What You'll Learn

This module replaces DVB as the central topic with broadband PHY/MAC principles that map better to a proprietary LEO broadband system. DVB remains useful as a public comparison for MODCOD/ACM, but the goal is to reason about Starlink-like scheduling and capacity.

### Broadband PHY Concepts

- OFDM/OFDMA, TDMA, SC-FDMA, and why multiple-access choice affects scheduling.
- Adaptive modulation and coding: MCS/MODCOD thresholds, spectral efficiency, outage.
- LDPC/FEC basics and coding gain.
- HARQ/ARQ trade-offs under LEO delay.
- SNR, SINR, interference, beam isolation, and frequency reuse.

### MAC and Beam Scheduling

- Multi-beam scheduling and terminal-to-beam assignment.
- Proportional fairness, max-throughput, strict priority, and weighted fair scheduling.
- Return-link scheduling and demand-based allocation.
- QoS for voice/video/gaming/bulk traffic under variable capacity.
- Beam hopping and load balancing across satellites.
- How link budget outputs become scheduler inputs.

### Public vs Proprietary Boundary

- Do not claim Starlink uses DVB, LTE MAC, or any specific waveform internally unless public documentation says so.
- Use public standards and algorithms to build defensible models.
- Document what is a generic broadband satellite concept vs what is Starlink-public.

---

## C++ and Python Skills

**C++ focus:** templates, enum classes, state/strategy patterns, STL algorithms, deterministic simulation loops.

**Python focus:** animated plots, lookup tables, event simulation, comparing scheduler policies.

---

## Projects

### Project 1: Starlink-Like Beam and Capacity Scheduler (C++)

Build a simplified beam scheduler.

**What you'll build:**

- Model terminals with demand, QoS class, SNR, current MCS, and queue backlog.
- Model beams with bandwidth, capacity, and frequency-reuse constraints.
- Implement max-throughput, strict-priority, and proportional-fair scheduling strategies.
- Track utilization, dropped demand, queue delay, and fairness metrics.
- Allow link-margin inputs from Module 05.

**C++ skills used:** templates, strategy pattern, enum classes, STL algorithms, tests.

**Toolkit:** Add `BeamScheduler`.

### Project 2: MCS/ACM Simulator (Python)

Visualize adaptive link behavior.

**What you'll build:**

- Create a public MCS-style threshold table with SNR to spectral-efficiency mappings.
- Simulate SNR variation from elevation and rain fade.
- Compare fixed coding, adaptive coding, and scheduler-aware adaptation.
- Plot throughput, outage, selected MCS, and queue backlog over time.
- Explain why a scheduler must optimize user experience, not just instantaneous throughput.

**Python skills used:** NumPy, matplotlib animation, lookup tables, event simulation.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| MCS/ACM | Adapts rate to channel quality | Broadband access capacity |
| LDPC/FEC | Corrects errors without retransmission | High-throughput satellite links |
| Beam scheduling | Allocates shared wireless resources | User experience and congestion |
| Proportional fairness | Balances throughput and fairness | Practical scheduler baseline |
| DVB-S2X/RCS2 | Public comparison standards | Learning material, not assumed Starlink stack |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink-like broadband access | Beam/resource scheduling model |
| Network operations | Congestion, QoS, fairness, and capacity planning |
| Direct to Cell | Mobile traffic competes for satellite backhaul |
| Traffic engineering | Access capacity constrains topology routing |

## Books and Resources

| Resource | Notes |
|---|---|
| Proakis or Sklar, digital communications | MCS/FEC/noise fundamentals |
| ETSI DVB-S2X/RCS2 | Public reference for MODCOD/ACM ideas |
| Scheduler literature | Proportional fairness and QoS algorithms |
| Starlink public materials | Architectural context only |
