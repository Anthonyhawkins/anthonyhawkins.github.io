# Module 07: Starlink Direct to Cell, LTE Roaming, and Mobile Backhaul

**Phase:** 2 - Acceleration
**Builds on:** Modules 04, 05, and 06

---

## Math You'll Learn

### Calculus I Completion + Calculus II Introduction

You will finish single-variable calculus and start the math needed for accumulated capacity and signal analysis.

- **Integrals and the Fundamental Theorem of Calculus** - accumulated quantities over time.
  - *Starlink application:* total data transferred during a satellite visibility window equals the integral of rate over time.
- **Average value of a function** - average cell capacity during a pass.
- **Integration techniques** - approximate area under variable-rate curves.
- **Sequences and series intro** - coding and signal-analysis preparation.
- **Doppler/timing budget analysis** - rate and accumulated error over time.

**After this:** You can estimate Direct to Cell contact windows, total data delivered, timing constraints, and backhaul requirements.

**Resources:**

- Stewart, *Calculus: Early Transcendentals*, Chapters 5-7
- Starlink Direct to Cell - https://www.starlink.com/business/direct-to-cell
- LTE/EPC architecture references

---

## What You'll Learn

This module narrows broad 5G NTN study into Starlink Direct to Cell as publicly described: standard LTE phones, onboard satellite eNodeB, roaming-style integration with mobile operators, and laser backhaul.

### Direct to Cell Public Architecture

- Existing LTE phones with no special hardware.
- Satellite payload functioning as an eNodeB from the phone's perspective.
- Roaming-like integration with partner mobile operators.
- Laser backhaul from satellite to the Starlink network.
- Service evolution: text, IoT, voice, data as public roadmap categories.

### LTE/EPC Concepts

- UE, eNodeB, EPC, MME, SGW, PGW, HSS, PCRF.
- Attach, authentication, bearer setup, paging, and data transfer.
- S1AP concepts, GTP-U tunneling, Diameter/S6a, DNS, and IPsec tunnels.
- Roaming interfaces and trust boundaries.
- IoT device classes and low-data-rate service design.

### Satellite Constraints

- Doppler and timing advance for cellular bands.
- Link budget and antenna constraints for phones.
- Beam footprint, paging area, and mobility/handover.
- Backhaul path from phone to satellite to laser mesh/gateway to partner mobile core.
- Security and lawful-intercept awareness as operational constraints.

---

## C++ and Python Skills

**C++ focus:** `std::thread`, `std::mutex`, condition variables, concurrent state machines.

**Python focus:** Skyfield, NumPy, timing/capacity analysis, tabular output.

---

## Projects

### Project 1: Satellite eNodeB Roaming State Simulator (C++)

Build a simplified Direct to Cell control-flow simulator.

**What you'll build:**

- Model UE, satellite eNodeB, backhaul link, and partner core as interacting components.
- Simulate attach, authentication, bearer setup, data transfer, and detach.
- Add variable satellite backhaul latency and short degraded periods.
- Log control-plane events, bearer state, and data-plane availability.
- Use threads or an event-loop style to model concurrent actors.

**C++ skills used:** threads, mutexes, condition variables, state machines, structured logs.

**Toolkit:** Add `DirectToCellModel`.

### Project 2: Direct-to-Cell Doppler and Capacity Analyzer (Python)

Analyze feasibility constraints.

**What you'll build:**

- Compute visibility windows for a satellite over a user location.
- Estimate Doppler and timing-advance ranges for LTE-band service.
- Integrate rate over a pass to estimate total bytes transferred.
- Compare IoT, text, voice, and low-rate data demand profiles.
- Plot contact duration, Doppler, rate, and accumulated data.

**Python skills used:** Skyfield, NumPy, matplotlib, numerical integration.

---

## Technology Reference

| Technology | Problem It Solves | Starlink Relevance |
|---|---|---|
| LTE eNodeB | Radio access node for LTE phones | Public Starlink Direct to Cell model |
| EPC | Mobile core network | Partner operator integration |
| GTP-U | User-plane tunneling | Mobile data transport |
| S1AP/Diameter | Control-plane/authentication concepts | Attach and roaming model |
| Laser backhaul | Satellite network transport | Direct to Cell traffic path |

## Where This Tech Is Used

| Application | Notes |
|---|---|
| Starlink Direct to Cell | Public LTE-phone satellite service |
| Mobile operator roaming | Partner integration model |
| IoT and emergency messaging | Low-rate service examples |
| Topology control | Backhaul path selection and capacity planning |

## Books and Resources

| Resource | Notes |
|---|---|
| Starlink Direct to Cell | Public architecture |
| LTE/EPC architecture references | UE/eNodeB/core mental model |
| 3GPP NTN references | Background only; keep Starlink LTE focus |
| Digital communications texts | Doppler and link constraints |
