# Annotated Reading List

## Tier 1 — Must Read (Start Here)

### Satellite Communications — Pratt, Bostian, Allnutt (3rd Ed.)
- **Why:** The most accessible entry point. Covers RF fundamentals, link budgets, orbital mechanics, and modulation. Updated with NGSO constellations and satellite internet.
- **Covers:** Modules 01, 04, 07
- **Best for:** Building intuition before going deep

### Satellite Communications Systems — Maral, Bousquet, Sun (6th Ed.)
- **Why:** The engineering bible. Exhaustive systems-level treatment — link design, multiple access, networking, orbit design. Dense but comprehensive.
- **Covers:** Modules 01, 04, 05, 07, 08
- **Best for:** Reference desk copy for the entire curriculum

### Delay-Tolerant Satellite Networks — Fraire, Finochietto, Burleigh
- **Why:** The only book dedicated to DTN in the satellite context. Fraire is a leading Contact Graph Routing researcher and Burleigh is the creator of ION-DTN at NASA/JPL. Covers Bundle Protocol, LTP, CGR, and real mission architectures. This is the single most aligned book for this curriculum.
- **Covers:** Modules 03, 05
- **Best for:** Deep DTN study — theory, implementation, and mission experience from the people who built it

### Delay-Tolerant Networking (RFC 9171 / BPv7 + RFC 4838)
- **Authors:** IETF DTN Working Group
- **Why:** Primary source. Free. You must read the actual specs, not just summaries.
- **Covers:** Module 03
- **Link:** https://datatracker.ietf.org/doc/rfc9171/

---

## Tier 2 — Deep Dives

### Satellite Communications and Networking (2025)
- **Author:** Marko Höyhtyä
- **Why:** Modern coverage of 5G NTN, cybersecurity, integrated satellite-terrestrial networks. Fills the gap between classic satcom books and current industry trends.
- **Covers:** Modules 08, 09, 11

### Satellite Communications and Networking: Engineering Solutions With Python (2025)
- **Author:** Jamie Flux
- **Why:** Hands-on. Orbit modeling, signal modulation, protocol design in Python. Aligns with your code-first learning style.
- **Covers:** Modules 01, 04, 05

### Satellite Communications Systems Engineering
- **Author:** Louis J. Ippolito Jr.
- **Why:** Specializes in link design and atmospheric physics — essential for understanding why links fail and how to engineer around it.
- **Covers:** Module 04

### Space Mission Analysis and Design (SMAD)
- **Authors:** Wiley Larson, James Wertz
- **Why:** The systems engineering bible. Broader than comms — covers entire spacecraft and mission design. Essential context for understanding constraints.
- **Covers:** Modules 01, 05

### Orbital Mechanics for Engineering Students
- **Author:** Howard Curtis
- **Why:** Standard text for orbit math. Necessary for constellation design and contact geometry.
- **Covers:** Modules 00, 01, 05

---

## Tier 2.5 — Math & Programming Foundations

### Calculus: Early Transcendentals — James Stewart
- **Why:** The standard calculus textbook. Covers single and multivariable calculus needed for orbital mechanics, signal theory, and link budget analysis.
- **Covers:** Module 00 (Weeks 1–8)

### Introduction to Linear Algebra — Gilbert Strang
- **Why:** The definitive linear algebra text. Rotation matrices, coordinate transforms, and least squares are used throughout.
- **Covers:** Module 00 (Week 5)
- **Supplement:** MIT OCW 18.06 lectures (free, by Strang himself)

### Introduction to Algorithms (CLRS) — Cormen, Leiserson, Rivest, Stein
- **Why:** Graph algorithms (Dijkstra, Bellman-Ford) are the foundation of satellite routing and CGR. Chapters 22–26.
- **Covers:** Module 00 (Week 7), Module 05

### A Tour of C++ (3rd Ed.) — Bjarne Stroustrup
- **Why:** Fast C++ onboarding by the language creator. Covers modern C++20 features you'll use for protocol and systems programming.
- **Covers:** All C++ exercises

### Effective Modern C++ — Scott Meyers
- **Why:** Best practices for C++11/14/17. Essential for writing correct, performant protocol implementations.
- **Covers:** All C++ exercises (reference as you go)

---

## Tier 3 — Standards & Specifications (Free)

### CCSDS Blue Books (Recommended Standards)
- **Source:** https://public.ccsds.org/publications/
- **Start with:** CCSDS 130.0-G-4 — *Overview of Space Communications Protocols* (the "map" of the entire protocol stack)
- **Covers:** Module 02

### CCSDS Green Books (Informational Reports)
- **Source:** Same as above
- **Start with:** DTN Green Book, Contact Graph Routing Green Book
- **Covers:** Modules 02, 03, 05

### DVB-S2 / DVB-S2X / DVB-RCS2 Standards
- **Source:** ETSI (https://www.etsi.org)
- **Key docs:** EN 302 307-1 (DVB-S2), EN 302 307-2 (S2X), EN 301 545-2 (RCS2)
- **Covers:** Module 08

### 3GPP NTN Specifications
- **Source:** https://www.3gpp.org
- **Key specs:** TR 38.811 (NTN study), TS 38.101 (NR spectrum), TR 23.737 (architecture)
- **Covers:** Module 09

---

## Tier 4 — Supplementary

### TCP/IP Illustrated, Vol 1 (Stevens)
- **Why:** You likely already own this. Re-read chapters on congestion control and flow control with space link constraints in mind.

### Computer Networking: A Top-Down Approach (Kurose & Ross)
- **Why:** For brushing up on networking fundamentals through the lens of delay and disruption.

### The New Space Age (various industry reports)
- **Sources:** McKinsey Space Economy report, Morgan Stanley Space Economy forecast, Euroconsult satellite industry surveys
- **Why:** Market context — understand where investment is flowing and which segments are growing.

### Free Video Resources
- **3Blue1Brown** — *Essence of Calculus* and *Essence of Linear Algebra* (YouTube) — visual intuition
- **MIT OCW 18.06** — Gilbert Strang's Linear Algebra course (full lectures, free)
- **Khan Academy** — Calculus, Probability & Statistics (free, self-paced)

## Tier 4 - Best Readings in Satellite Mega Constellations
a comprehensive list of references that can aid a wide spectrum of researchers, from novices to experts in the field, with a focus on mega constellation satellite communications and networking.
- The List: https://www.comsoc.org/publications/best-readings/satellite-mega-constellations