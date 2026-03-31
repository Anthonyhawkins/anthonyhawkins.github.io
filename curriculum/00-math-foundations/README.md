# Module 00: Mathematics Foundations for Space Networking

**Starting point:** Algebra 1 (through quadratics)
**This module runs as a parallel track** — see [learning-path.md](../learning-path.md) for how it interleaves with C++ and Space Networking.

---

## Why This Module Exists

Space networking is built on physics and signal theory. You need specific math to understand link budgets, orbital mechanics, signal processing, and routing optimization. This module covers exactly what you need — nothing more. Each topic immediately unlocks space networking content you can apply.

## Skill Tree — What Unlocks What

```
YOU ARE HERE → Algebra 1 (quadratics)
                    │
    ┌───────────────┴───────────────┐
    ▼                               ▼
Algebra 2                     Trigonometry
(logs, exponentials,          (sin/cos/tan, unit circle,
 polynomials, series)          law of cosines, vectors)
    │                               │
    ├─► 🔓 dB/dBW/dBm arithmetic   ├─► 🔓 Elevation angles
    ├─► 🔓 Basic link math          ├─► 🔓 Slant range geometry
    │                               ├─► 🔓 Antenna beamwidth
    └──────────┬────────────────────┘
               ▼
         Pre-Calculus
         (functions, parametric eqs,
          conic sections = ellipses!)
               │
               ├─► 🔓 Kepler orbits (ellipses!)
               │
               ▼
          Calculus I
          (derivatives, integrals)
               │
               ├─► 🔓 Doppler shift (derivative of range)
               ├─► 🔓 Orbital velocity
               ├─► 🔓 Signal energy over a pass
               │
          ┌────┴────┐
          ▼         ▼
     Calc II    Calc III
     (series,   (3D vectors,
      Fourier)   partial derivs)
          │         │
          │         ├─► 🔓 Satellite position vectors
          │         ├─► 🔓 Constellation geometry
          │         │
          ├─► 🔓 Spectral efficiency    ▼
          ├─► 🔓 Modulation theory   Linear Algebra
          │                          (matrices, rotations)
          │                             │
          │                             ├─► 🔓 ECI↔ECEF↔lat/lon transforms
          │                             ├─► 🔓 Antenna pattern math
          │                             │
          │                             ▼
          │                    Probability & Stats
          │                    (distributions, noise)
          │                             │
          │                             ├─► 🔓 BER curves, Eb/N₀
          │                             ├─► 🔓 Rain fade availability
          │                             ├─► 🔓 Channel modeling
          │                             │
          │                             ▼
          │                       Graph Theory
          │                       (shortest path, LP)
          │                             │
          │                             ├─► 🔓 Contact Graph Routing (CGR)
          │                             ├─► 🔓 Traffic engineering
          └─────────────────────────────┘
```

## Topics

### Phase 1, Weeks 1–4: Algebra 2
- **Polynomials & rational expressions**
  - *Space application:* polynomial curve fitting for antenna gain patterns
- **Exponentials & logarithms** ← most important for Day 1 space work
  - *Space application:* dB = 10·log₁₀(P₂/P₁) — every link budget uses this
  - *Space application:* signal power decays exponentially with distance
- **Logarithm properties & equations**
  - *Space application:* adding dB values = multiplying linear — the language of RF engineering
- **Sequences & summation notation**
  - *Space application:* time-series data, telemetry streams

**🔓 After this:** You can compute link budgets in dB, understand EIRP, path loss, and G/T.

**Resources:**
- Khan Academy — Algebra 2 (free, self-paced)
- Textbook: *Algebra and Trigonometry* — Stewart, Redlin, Watson

### Phase 1, Weeks 5–9: Trigonometry
- **Unit circle, sin/cos/tan, inverse trig**
  - *Space application:* elevation angle = arctan(height/distance) — when can a ground station see a satellite?
- **Law of sines / cosines**
  - *Space application:* slant range calculation — distance from ground station to satellite
- **Polar coordinates & vectors intro**
  - *Space application:* antenna radiation patterns are plotted in polar coordinates
- **Angular velocity, arc length, radians**
  - *Space application:* satellite angular rate as seen from ground

**🔓 After this:** You can compute ground station visibility, slant range, antenna beam geometry.

**Resources:**
- Khan Academy — Trigonometry (free)
- Textbook: same as Algebra 2 (Stewart, Redlin, Watson covers both)

### Phase 1, Week 10: Review + Assessment
- Work through a combined problem set applying logs + trig to a basic link budget
- Compute ground station coverage for a satellite at 550km altitude

### Phase 2, Weeks 11–14: Pre-Calculus
- **Functions, composition, inverses**
- **Exponential & logarithmic functions** (deeper treatment)
- **Parametric equations**
  - *Space application:* satellite ground tracks are parametric curves
- **Conic sections — focus on ellipses**
  - *Space application:* **Kepler's orbits are ellipses** — this is where orbital mechanics starts making sense geometrically

**🔓 After this:** You understand orbit shapes, eccentricity, and can reason about orbit geometry visually.

**Resources:**
- Khan Academy — Pre-Calculus (free)
- *Precalculus: Mathematics for Calculus* — Stewart

### Phase 2, Weeks 15–22: Calculus I
- **Limits & continuity**
- **Derivatives — definition, power rule, chain rule, product/quotient rules**
  - *Space application:* Doppler shift = d(range)/dt — the rate of change of distance
  - *Space application:* orbital velocity = d(position)/dt
- **Implicit differentiation**
  - *Space application:* related rates in orbital rendezvous
- **Applications — optimization, related rates**
  - *Space application:* optimizing antenna pointing angle, maximum data throughput
- **Integrals — fundamental theorem of calculus**
  - *Space application:* total signal energy = ∫ power(t) dt over a satellite pass
- **Integration techniques — substitution, parts**
- **Applications of integrals — area, average value**
  - *Space application:* average data rate over a variable-capacity link

**🔓 After this:** You can compute Doppler curves, orbital velocities, contact window energy budgets.

**Resources:**
- *Calculus: Early Transcendentals* — James Stewart (Chapters 1–6)
- 3Blue1Brown — *Essence of Calculus* (watch early, even before starting Calc I)
- Khan Academy — Calculus 1 (free)

### Phase 3, Weeks 23–28: Calculus II
- **Advanced integration techniques**
- **Sequences & series, convergence tests**
- **Taylor/Maclaurin series**
- **Fourier series intro**
  - *Space application:* decomposing signals into frequency components, understanding bandwidth and spectral efficiency

**🔓 After this:** You understand modulation theory, spectral efficiency, and coding gain.

**Resources:**
- Stewart, Chapters 7–11
- 3Blue1Brown — *But what is a Fourier series?*

### Phase 3, Weeks 29–34: Calculus III
- **Vectors in 3D — position, velocity, acceleration**
  - *Space application:* satellite state vector = [x, y, z, vx, vy, vz]
- **Dot product & cross product**
  - *Space application:* angular momentum = r × v, orbital plane normal
- **Coordinate systems — Cartesian, spherical, cylindrical**
  - *Space application:* lat/lon/alt ↔ ECEF ↔ ECI — the core coordinate frames
- **Partial derivatives & gradients**
  - *Space application:* how link quality gradient changes with elevation, range, weather

**🔓 After this:** You can propagate orbits, compute satellite positions, work with constellation geometry.

**Resources:**
- Stewart, Chapters 12–16
- *Orbital Mechanics for Engineering Students* (Curtis) — applies these directly

### Phase 3, Weeks 35–38: Linear Algebra
- **Matrices — operations, inverse, transpose, determinant**
- **Rotation matrices & coordinate transforms**
  - *Space application:* ECI ↔ ECEF ↔ topocentric ↔ body frame — every space system uses these
- **Eigenvalues & eigenvectors** (basics)
  - *Space application:* stability analysis, principal axes
- **Least squares**
  - *Space application:* orbit determination from noisy tracking data

**🔓 After this:** You can transform between any coordinate frame, implement reference frame conversions.

**Resources:**
- *Introduction to Linear Algebra* — Gilbert Strang
- 3Blue1Brown — *Essence of Linear Algebra*
- MIT OCW 18.06 (full course, free)

### Phase 4, Weeks 39–44: Probability & Statistics
- **Random variables, PDF, CDF, expectation, variance**
- **Gaussian (Normal) distribution & Central Limit Theorem**
  - *Space application:* thermal noise is Gaussian → this is why Eb/N₀ and BER curves work
- **Rayleigh & Rician fading**
  - *Space application:* multipath models for satellite-ground links
- **Markov chains** (basics)
  - *Space application:* channel state modeling, protocol state machines

**🔓 After this:** You can compute full link budgets with noise, BER, rain fade availability.

**Resources:**
- *Probability and Statistics for Engineering and the Sciences* — Jay Devore
- Khan Academy — Probability & Statistics (free)

### Phase 4, Weeks 45–48: Graph Theory & Optimization
- **Graph fundamentals — nodes, edges, weighted, directed**
- **Shortest path — Dijkstra, Bellman-Ford**
  - *Space application:* satellite routing, inter-satellite link path selection
- **Time-expanded graphs**
  - *Space application:* Contact Graph Routing (CGR) — the core DTN routing algorithm
- **Linear programming (LP) basics**
  - *Space application:* traffic engineering, ground station contact scheduling
- **Finite state machines**
  - *Space application:* protocol state machines (COP-1, FARM/FOP) — your TCP knowledge helps here

**🔓 After this:** You can implement CGR, optimize traffic engineering, design protocol state machines.

**Resources:**
- *Introduction to Algorithms* (CLRS) — Chapters 22–26
- *Discrete Mathematics and Its Applications* — Rosen

---

## C++ & Python Setup (Do This in Week 1)

### C++ Toolchain
- Compiler: `clang++` or `g++` with C++20
- Build system: CMake
- Libraries: Eigen (linear algebra), Boost (networking, math), nlohmann/json
- Testing: Google Test (gtest)
- IDE: VS Code with clangd

### Python Toolchain
- Python 3.11+
- Libraries: NumPy, SciPy, Matplotlib, Astropy, Skyfield, NetworkX
- Jupyter notebooks for exploration
- pytest for testing

### Setup Exercise
1. Build a C++ project with CMake — verify by printing "Hello, Space Networking"
2. Build a Python environment that imports NumPy and Matplotlib — verify by plotting sin(x)
