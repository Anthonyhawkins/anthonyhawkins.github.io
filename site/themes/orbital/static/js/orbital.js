/* ─── orbital.js — starfield + orbit canvas + nav toggle ──────────────── */

// ── Starfield ──────────────────────────────────────────────────────────────
(function () {
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const el     = document.getElementById('starfield');
  if (!el) return;
  el.appendChild(canvas);

  const stars = [];
  const NUM_STARS = 250;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    stars.length = 0;
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        r:  Math.random() * 1.2 + 0.2,
        a:  Math.random(),
        da: (Math.random() - 0.5) * 0.003,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.a += s.da;
      if (s.a < 0 || s.a > 1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(160, 200, 255, ${s.a * 0.8})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  Object.assign(canvas.style, {
    position: 'absolute', inset: '0',
    width: '100%', height: '100%',
  });

  window.addEventListener('resize', () => { resize(); init(); });
  resize();
  init();
  draw();
})();

// ── Orbit canvas (homepage hero) ───────────────────────────────────────────
(function () {
  const canvas = document.getElementById('orbitCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const DPR = window.devicePixelRatio || 1;
  let W, H, cx, cy;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width  * DPR;
    H = rect.height * DPR;
    canvas.width  = W;
    canvas.height = H;
    cx = W / 2;
    cy = H / 2;
  }

  const orbits = [
    { a: 0.38, b: 0.22, speed: 0.0008, phase: 0.0,     r: 4, color: '#00d4ff' },
    { a: 0.55, b: 0.32, speed: 0.0005, phase: 1.2,     r: 3, color: '#7b61ff' },
    { a: 0.72, b: 0.42, speed: 0.0003, phase: 2.5,     r: 5, color: '#00d4ff' },
    { a: 0.40, b: 0.38, speed: 0.0012, phase: 0.7,     r: 2.5, color: '#4ade80' },
  ];

  let t = 0;

  function drawOrbit(o) {
    const aw = o.a * (W / 2);
    const bh = o.b * (H / 2);

    // Draw ellipse path
    ctx.beginPath();
    ctx.ellipse(cx, cy, aw, bh, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth   = 1 * DPR;
    ctx.stroke();

    // Draw satellite dot
    const angle = t * o.speed * 1000 + o.phase;
    const sx = cx + aw * Math.cos(angle);
    const sy = cy + bh * Math.sin(angle);

    // Glow
    const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, o.r * 6 * DPR);
    grad.addColorStop(0, o.color + 'aa');
    grad.addColorStop(1, o.color + '00');
    ctx.beginPath();
    ctx.arc(sx, sy, o.r * 6 * DPR, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Core dot
    ctx.beginPath();
    ctx.arc(sx, sy, o.r * DPR, 0, Math.PI * 2);
    ctx.fillStyle = o.color;
    ctx.fill();
  }

  function drawCenter() {
    // Earth
    const rEarth = 22 * DPR;
    const earthGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rEarth);
    earthGrad.addColorStop(0, '#1a6faa');
    earthGrad.addColorStop(0.6, '#0a3a6a');
    earthGrad.addColorStop(1, '#050f1f');
    ctx.beginPath();
    ctx.arc(cx, cy, rEarth, 0, Math.PI * 2);
    ctx.fillStyle = earthGrad;
    ctx.fill();
    // Glow around Earth
    const glowGrad = ctx.createRadialGradient(cx, cy, rEarth, cx, cy, rEarth * 2.5);
    glowGrad.addColorStop(0, 'rgba(0, 100, 200, 0.25)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.beginPath();
    ctx.arc(cx, cy, rEarth * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();
  }

  function frame(timestamp) {
    t = timestamp;
    ctx.clearRect(0, 0, W, H);
    drawCenter();
    for (const o of orbits) drawOrbit(o);
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(frame);
})();

// ── Mobile nav toggle ──────────────────────────────────────────────────────
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#000';
    links.style.padding = '1.5rem 2rem';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    links.style.zIndex = '99';
  });
})();
