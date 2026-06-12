/**
 * raytracer.js
 * Mini CPU ray tracer rendered in real-time on a <canvas>.
 * Used as an animated thumbnail for the featured project card.
 */

(function () {
  const canvas = document.getElementById('raytracer-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  /* ── Sphere intersection ── */
  function intersectSphere(cx, cy, cz, radius, ray) {
    const ox = ray.ox - cx;
    const oy = ray.oy - cy;
    const oz = ray.oz - cz;
    const b    = 2 * (ray.dx * ox + ray.dy * oy + ray.dz * oz);
    const c    = ox * ox + oy * oy + oz * oz - radius * radius;
    const disc = b * b - 4 * c;
    if (disc < 0) return -1;
    return (-b - Math.sqrt(disc)) / 2;
  }

  /* ── Scene definition ── */
  function getScene(time) {
    return [
      { cx:  0.0, cy: -0.4, cz: -6 + Math.sin(time) * 0.3, r: 0.90, cr:  80, cg:  60, cb: 230 },
      { cx:  1.6, cy: -0.6, cz: -5.5,                       r: 0.65, cr:   0, cg: 200, cb: 255 },
      { cx: -1.5, cy: -0.7, cz: -5.0,                       r: 0.55, cr: 160, cg:  60, cb: 220 },
    ];
  }

  /* ── Render one frame ── */
  function render() {
    /* Sync canvas resolution with display size */
    const dw = canvas.offsetWidth  || 640;
    const dh = canvas.offsetHeight || 360;
    if (canvas.width !== dw || canvas.height !== dh) {
      canvas.width  = dw;
      canvas.height = dh;
    }
    W = canvas.width;
    H = canvas.height;

    const img   = ctx.createImageData(W, H);
    const data  = img.data;
    const light = {
      x: Math.sin(t) * 4 + 2,
      y: -3,
      z: Math.cos(t) * 4 - 8,
    };
    const scene = getScene(t);

    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        const u = (px / W) * 2 - 1;
        const v = -((py / H) * 2 - 1) * (H / W);

        /* Ray direction (perspective, focal length = 1) */
        const len = Math.sqrt(u * u + v * v + 1);
        const ray = {
          ox: 0, oy: 0, oz: 0,
          dx: u / len, dy: v / len, dz: -1 / len,
        };

        /* Background: dark checkerboard floor */
        let r = 8, g = 8, b = 16;
        if (ray.dy < -0.1) {
          const ft      = -0.8 / ray.dy;
          const fx      = ray.dx * ft;
          const fz      = ray.dz * ft;
          const checker = (Math.floor(fx * 0.5) + Math.floor(fz * 0.5)) & 1;
          r = checker ? 20 : 12;
          g = checker ? 20 : 10;
          b = checker ? 35 : 22;
        }

        /* Sphere shading */
        for (const s of scene) {
          const hit = intersectSphere(s.cx, s.cy, s.cz, s.r, ray);
          if (hit <= 0) continue;

          /* Surface normal */
          const hx = ray.dx * hit - s.cx;
          const hy = ray.dy * hit - s.cy;
          const hz = ray.dz * hit - s.cz;
          const hn = Math.sqrt(hx * hx + hy * hy + hz * hz);
          const nx = hx / hn, ny = hy / hn, nz = hz / hn;

          /* Light vector */
          const lx = light.x - ray.dx * hit;
          const ly = light.y - ray.dy * hit;
          const lz = light.z - ray.dz * hit;
          const ll = Math.sqrt(lx * lx + ly * ly + lz * lz);

          const diff = Math.max(0, nx * (lx / ll) + ny * (ly / ll) + nz * (lz / ll));
          const spec = Math.pow(Math.max(0, -nz), 18) * 0.4;
          const lit  = 0.08 + diff * 0.8 + spec;

          r = Math.min(255, s.cr * lit + 255 * spec * 0.5);
          g = Math.min(255, s.cg * lit + 255 * spec * 0.5);
          b = Math.min(255, s.cb * lit + 255 * spec * 0.5);
          break;
        }

        const i = (py * W + px) * 4;
        data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);

    /* Caption overlay */
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, H - 28, W, 28);
    ctx.fillStyle = '#8A8AAA';
    ctx.font      = '11px Inter, sans-serif';
    ctx.fillText('Ray tracer — rendu CPU en temps réel (JS)', 12, H - 10);

    t += 0.018;
    requestAnimationFrame(render);
  }

  render();
})();
