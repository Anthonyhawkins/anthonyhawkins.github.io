# Annotated Reading List

This reading list supports a Starlink Network and Topology learning path. It keeps the best general satellite communications references, but prioritizes public Starlink architecture, FCC filings, service-provider networking, LEO routing research, optical mesh design, and operational automation.

## Tier 1 - Must Read First

### Starlink Technology

- **Source:** https://www.starlink.com/technology
- **Why:** Public baseline for Starlink's architecture: LEO latency model, phased-array antennas, autonomous collision avoidance, optical space lasers, and high-capacity satellite hardware.
- **Covers:** Modules 01, 02, 08, 09
- **Best for:** Anchoring the curriculum in what Starlink publicly claims.

### Starlink Satellite Operators

- **Source:** https://www.starlink.com/satellite-operators
- **Why:** Public description of Starlink space-safety data sharing, ephemerides, maneuver status, conjunction coordination, and operator workflows.
- **Covers:** Modules 01, 08, 11
- **Best for:** Understanding public ephemeris and operational safety data.

### Starlink Direct to Cell

- **Source:** https://www.starlink.com/business/direct-to-cell
- **Why:** Public description of Starlink Direct to Cell: existing LTE phones, no special hardware, onboard eNodeB, roaming-style integration, and laser backhaul.
- **Covers:** Module 07
- **Best for:** Grounding Direct to Cell study in the specific architecture SpaceX describes publicly.

### FCC Starlink Gen2 Order and Authorizations

- **Source:** https://docs.fcc.gov/public/attachments/FCC-22-91A1.pdf
- **Source:** https://docs.fcc.gov/public/attachments/DA-24-222A1.pdf
- **Why:** Primary public regulatory documents for orbital shells, operating constraints, Ku/Ka/E-band authorizations, interference analysis, and deployment conditions.
- **Covers:** Modules 01, 02, 05, 08, 09, 11
- **Best for:** Publicly defensible system parameters.

### Public SpaceX/Starlink Network Job Descriptions

- **Examples:** Starlink ground network and network engineer role mirrors, SpaceX careers pages when available.
- **Why:** They repeatedly surface service-provider technologies: BGP, IS-IS, OSPF, MPLS, Segment Routing, C/C++/Python, Linux, telemetry, automation, POPs, gateways, and optical transport.
- **Covers:** Modules 03, 10, 11, 12
- **Best for:** Aligning study priorities with the role.

## Tier 2 - LEO Routing and Topology

### "Delay is Not an Option: Low Latency Routing in Space" - Mark Handley

- **Source:** https://discovery.ucl.ac.uk/10062262/
- **Why:** Foundational public analysis of Starlink-like low-latency routing and when LEO paths can beat terrestrial fiber.
- **Covers:** Modules 08, 09, 10, 12
- **Best for:** Building intuition for routing, latency, and topology constraints.

### "Network Topology Design at 27,000 km/hour"

- **Authors:** Debopam Bhattacherjee, Ankit Singla
- **Why:** Key paper on topology design for moving LEO networks, including structure-aware routing approaches.
- **Covers:** Modules 08, 09, 12
- **Best for:** Understanding graph structure and route churn in satellite constellations.

### Hypatia LEO Satellite Network Simulator

- **Source:** https://github.com/snkas/hypatia
- **Why:** Open-source simulator for LEO network research with examples useful for Starlink-like latency and routing analysis.
- **Covers:** Modules 08, 10, 12
- **Best for:** Reference implementation patterns and validation ideas.

## Tier 3 - Service-Provider Networking

### Internet Routing Architectures - Halabi

- **Why:** Deep BGP mental model: route policy, transit, peering, filtering, traffic engineering.
- **Covers:** Modules 03, 10, 11
- **Best for:** POP, gateway egress, and peering design.

### MPLS in the SDN Era - Davie, Farrel

- **Why:** MPLS and Segment Routing concepts that map to provider-scale traffic engineering.
- **Covers:** Module 10
- **Best for:** Understanding SR policy, TE tunnels, and control-plane/data-plane separation.

### TCP/IP Illustrated, Vol. 1 - Stevens

- **Why:** Revisit transport, congestion control, ICMP, routing, DNS, and operational behavior through the lens of variable satellite links.
- **Covers:** Modules 03, 04, 10
- **Best for:** Bringing existing network experience into the Starlink context.

### QUIC RFC 9000 and BBR/CUBIC References

- **Why:** Starlink users run normal internet applications over changing wireless and satellite paths. QUIC migration, NAT rebinding, congestion control, and bufferbloat matter.
- **Covers:** Module 04
- **Best for:** Transport behavior over dynamic LEO service.

## Tier 4 - Satellite Communications Fundamentals

### Satellite Communications - Pratt, Bostian, Allnutt

- **Why:** Accessible RF and satcom foundation: propagation, link budgets, frequency bands, modulation, and satellite-internet context.
- **Covers:** Modules 01, 02, 05, 06
- **Best for:** First full satcom textbook.

### Satellite Communications Systems - Maral, Bousquet, Sun

- **Why:** Dense systems-level reference for link design, multiple access, payloads, and networks.
- **Covers:** Modules 02, 05, 06, 08
- **Best for:** Reference desk copy.

### Satellite Communications Systems Engineering - Ippolito

- **Why:** Strong link engineering and propagation treatment, especially atmospheric effects.
- **Covers:** Module 05
- **Best for:** Rain fade, Ka/E-band analysis, and link availability.

### Orbital Mechanics for Engineering Students - Curtis

- **Why:** Practical orbital mechanics for state vectors, orbits, and geometry.
- **Covers:** Modules 08, 09
- **Best for:** Moving from TLE use to understanding the math behind constellation geometry.

## Tier 5 - Broadband PHY/MAC and Direct to Cell

### Digital Communications - Proakis or Sklar

- **Why:** Modulation, coding, spectral efficiency, noise, and BER fundamentals.
- **Covers:** Modules 05, 06, 11
- **Best for:** Understanding MCS/ACM and link adaptation at a principled level.

### 3GPP LTE/EPC References

- **Start with:** LTE architecture overviews, S1AP, GTP-U, Diameter/S6a, roaming interfaces, and eNodeB/EPC architecture.
- **Why:** Starlink Direct to Cell publicly describes LTE phones and onboard eNodeB behavior.
- **Covers:** Module 07
- **Best for:** Modeling Direct to Cell without drifting into generic 5G NTN.

### DVB-S2X / DVB-RCS2 Standards

- **Source:** ETSI EN 302 307-1/2 and EN 301 545-2
- **Why:** Not presumed to be Starlink's implementation, but useful comparison for MCS/MODCOD, LDPC, ACM, and return-link scheduling.
- **Covers:** Module 06
- **Best for:** Learning broadband satellite PHY/MAC concepts through public standards.

## Tier 6 - Math and Programming Foundations

### Calculus: Early Transcendentals - James Stewart

- **Why:** Single and multivariable calculus for link sensitivity, Doppler, spectral intuition, and orbital geometry.
- **Covers:** Modules 05-09

### Introduction to Linear Algebra - Gilbert Strang

- **Why:** Rotation matrices, coordinate transforms, least squares, and optimization foundations.
- **Covers:** Modules 09-10

### Introduction to Algorithms - CLRS

- **Why:** Graph algorithms, shortest paths, flows, and optimization are core to topology work.
- **Covers:** Modules 08, 10, 12

### A Tour of C++ - Bjarne Stroustrup

- **Why:** Fast modern C++ onboarding for systems and simulation work.
- **Covers:** All modules

### Effective Modern C++ - Scott Meyers

- **Why:** Practical C++ correctness, ownership, and performance patterns.
- **Covers:** All C++ projects

## Tier 7 - Standards and Operational References

### IETF RFCs

- **Focus:** BGP, RPKI, Segment Routing, IPv6, QUIC, DNS, DHCP, NTP, NETCONF/gNMI where relevant.
- **Covers:** Modules 03, 04, 10, 11

### ITU-R Recommendations

- **Focus:** P.618 rain attenuation, NGSO/GSO sharing, EPFD, atmospheric models.
- **Covers:** Modules 02, 05, 11

### CCSDS References

- **Keep as background:** OEM ephemeris format, space data-link standards, and space interoperability concepts.
- **Covers:** Modules 01 and optional non-Starlink context

### Best Readings in Satellite Mega-Constellations

- **Source:** https://www.comsoc.org/publications/best-readings/satellite-mega-constellations
- **Why:** Broad research survey for LEO constellation networking.
- **Covers:** Modules 08-12
