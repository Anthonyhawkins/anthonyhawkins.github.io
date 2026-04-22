---
title: "Module 04: Variable Links, Handover Resilience, and Transport Behavior"
module_number: 4
weight: 4
---


**Phase:** 2 - Acceleration
**Builds on:** Modules 01, 02, and 03

---

## Math You'll Learn

### Trigonometry Completion + Pre-Calculus Introduction

This module bridges static geometry and time-varying behavior. Starlink links change continuously as satellites move, beams switch, gateways change, and capacity varies.

- **Trig review and polar coordinates** - antenna patterns and scan angle.
- **Angular velocity, arc length, radians** - pass duration and handover cadence.
- **Functions, composition, and inverses** - chain geometry, link quality, and transport behavior.
  - *Starlink application:* link quality as a function of elevation, weather, beam load, and gateway state.
- **Parametric equations** - model satellite position and link quality over time.
  - *Starlink application:* range(t), elevation(t), capacity(t), RTT(t).
- **Piecewise functions** - model connected, degraded, handover, failed, and recovered states.
- **Queueing intuition** - backlog accumulation during capacity drops or outages.

**After this:** You can model variable LEO links and reason about how normal internet transports behave during handover and capacity changes.

**Resources:**

- Khan Academy - Trigonometry completion and Pre-Calculus
- TCP/IP Illustrated - transport behavior review
- QUIC RFC 9000 and congestion-control references

---

## What You'll Learn

Deep-space DTN is important background, but it is not the primary Starlink service model. Starlink is an always-on broadband ISP with variable wireless links, rapid handover, gateways, POPs, and normal internet traffic. This module studies how TCP/QUIC behave under those conditions.

### Variable LEO Links

- User-terminal satellite handover.
- Gateway handover and POP egress changes.
- Short outages, capacity drops, link degradation, jitter, and packet loss.
- Beam load and congestion as network effects, not only RF effects.
- Difference between disconnected DTN systems and low-latency broadband LEO service.

### Transport Behavior

- TCP slow start, congestion avoidance, loss recovery, CUBIC/BBR behavior.
- QUIC path validation, connection IDs, NAT rebinding, and migration concepts.
- Bufferbloat, ACK compression, jitter, and queue management.
- Why high average throughput can still produce bad user experience if latency spikes.
- What to measure: RTT, throughput, packet loss, retransmits, goodput, recovery time.

### Test and Emulation

- `tc netem` for delay, jitter, loss, reorder, and rate limits.
- Synthetic handover events and capacity-change traces.
- Reproducible experiment design: fixed seeds, recorded traces, and clear assumptions.
- DTN/BPv7/LTP as optional contrast for disconnected or store-and-forward systems.

---

## C++ and Python Skills

**C++ focus:** state machines, POSIX sockets or Boost.Asio basics, serialization, event loops.

**Python focus:** experiment harnesses, subprocess control, plotting, statistical summaries.

---

## Projects

### Project 1: Link-State and Handover State Machine (C++)

Build a reusable state machine for terminal and gateway link state.

**What you'll build:**

- Model states: searching, connected, degraded, handover pending, handover executing, failed, recovered.
- Define events: elevation below threshold, better satellite available, packet loss spike, gateway unavailable, timeout, recovery.
- Record transition history with timestamps and reason codes.
- Feed synthetic link-quality traces into the state machine.
- Export event logs as JSON for analysis.

**C++ skills used:** enums, state machine design, classes, callbacks, unit tests.

**Toolkit:** Add `HandoverStateMachine`.

### Project 2: TCP/QUIC Handover Experiment (Python)

Compare transport behavior across Starlink-like link events.

**What you'll build:**

- Use `tc netem` or a pure simulator to model delay, loss, jitter, variable capacity, and short outages.
- Transfer data over TCP and, if practical, QUIC tooling.
- Inject handover-like events and capacity drops.
- Plot throughput, RTT, packet loss, retransmits, and recovery time.
- Write a results note explaining when the transport recovered well and when it did not.

**Python skills used:** socket tooling, subprocess, timing, pandas optional, matplotlib.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| TCP CUBIC/BBR | Internet congestion control | User traffic over variable LEO links |
| QUIC | User-space transport over UDP | Connection continuity and path changes |
| `tc netem` | Reproducible network impairment | Handover and variable capacity tests |
| State machine | Formal link behavior | Terminal/gateway handover logic |
| DTN/BPv7/LTP | Store-and-forward for disconnected links | Useful contrast, not the primary Starlink path |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink user experience | Latency and throughput during handover |
| Network operations | Diagnosing spikes, drops, and recovery behavior |
| Transport design | Satellite-friendly tuning and measurement |
| Later modules | Scheduler, Direct to Cell, and topology controller simulations |

## Books and Resources

| Resource | Notes |
|---|---|
| Stevens, *TCP/IP Illustrated* | Transport refresh |
| RFC 9000 QUIC | QUIC behavior and path handling |
| Linux `tc netem` docs | Link impairment simulation |
| Fraire/Burleigh DTN book | Optional contrast for disconnected space links |
