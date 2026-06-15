const PROJECTS = {
  'path-tracer': {
    url: 'https://github.com/SlyZ1/Path-Tracer',
    thumb: '<img src="https://raw.githubusercontent.com/SlyZ1/Path-Tracer/main/outputs/triple_dragon.png" alt="Path Tracer" />',
    title: 'Path Tracer',
    date: 'Nov 2025 - Now',
    wip: true,
    type: 'code',
    desc: `Interactive GPU path tracer with OpenGL. Physically-based rendering with MIS-weighted NEE, BVH acceleration.
           It implements materials such as <strong>diffuse EON, rough Cook-Torrance with GGX, dielectrics</strong> and more...`,
    tags: ['OpenGL', 'BVH', 'C++'],
  },
  'soft-body': {
    url: 'https://github.com/SlyZ1/Physics-Based-Bodies',
    thumb: '<video src="assets/SquishyVid.mp4" autoplay loop muted playsinline preload="none"></video>',
    title: 'Soft & Rigid Bodies Simulation',
    date: 'Apr 2026 - Now',
    wip: true,
    type: 'code',
    desc: `Platformer built on Godot around a custom <strong>spring-based soft body simulation</strong> interacting with rigidbodies.`,
    tags: ['Soft Constraints', 'Semi-implicit Euler', 'Spring Physics', 'Rigidbodies', 'Godot'],
  },
  'smoke-rendering': {
    url: 'https://github.com/SlyZ1/Smoke-Rendering',
    thumb: '<div class="thumb-placeholder thumb-shader"></div>',
    title: 'Smoke Rendering using SH Space',
    date: 'Jan 2026 - Now',
    wip: true,
    type: 'code',
    desc: `Algorithm for a precomputed smoke density's interactive rendering.
           <strong>RBF decomposition</strong> and scattering approximation in the <strong>spherical harmonic</strong> space.`,
    tags: ['OpenGL', 'Spherical Harmonics'],
  },
  'smoke-sim': {
    url: 'https://github.com/artishow-smoke/Smoke',
    thumb: '<video src="assets/SmokeSim.mp4" class="thumb-zoom" autoplay loop muted playsinline onloadedmetadata="this.currentTime=5" preload="none"></video>',
    title: 'Real Time Smoke Simulation & Rendering',
    date: 'Jan 2025 - Jun 2025',
    wip: false,
    type: 'code',
    desc: `<strong>LBM-based</strong> smoke simulation with real-time GPU rendering for the Godot game engine.`,
    tags: ['LBM', 'Godot', 'Ray marching'],
  },
  'echo-depths': {
    url: 'https://github.com/Protocol-Juice/echo-depths',
    thumb: '<img src="assets/echo-depths.png" alt="Echo Depths" />',
    title: 'Echo Depths',
    date: 'Apr 2025',
    wip: false,
    type: 'code',
    desc: `Ludum Dare 57 entry built in 3 days. Ranked <strong>20th out of ~3000 participants</strong>. Play it on <a href="https://slyzdev.itch.io/ld57" target="_blank" class="inline-link">itch.io</a>.`,
    tags: ['Game Jam', 'Ludum Dare', 'Platformer', 'Lidar', 'Unity'],
  },
  'isometric': {
    url: 'https://github.com/SlyZ1/Isometric-Pixel-Game',
    thumb: '<video src="assets/Isometric.mp4" autoplay loop muted playsinline preload="none"></video>',
    title: 'Isometric Procedural Environnement',
    date: 'Dec 2023 - Jun 2024',
    wip: false,
    type: 'code',
    desc: `Isometric pixel-art playground with <strong>procedurally generated</strong> environments. RPG-inspired world exploration with dynamic map generation.<br>Everything is <strong>hand-drawn.</strong>`,
    tags: ['Procedural Generation', 'Unity'],
  },
  'affiches': {
    url: 'https://www.behance.net/slyz',
    carousel: [
      'assets/affiches/3.png',
      'assets/affiches/2.png',
      'assets/affiches/1.png',
      'assets/affiches/0.png',
    ],
    title: 'Live Music Event Posters',
    date: 'Dec 2025 - Apr 2026',
    wip: false,
    type: 'art',
    desc: `Posters designed as <strong>graphic design lead</strong> at Télécom Paris's live music association <a href="https://lascene.rezel.net/" target="_blank" class="inline-link">La Scène</a>. Everything besides the 3D models is made by hand.`,
    tags: ['Graphic Design', 'Blender', 'Illustrator', 'Photoshop'],
  },
  'foliage': {
    url: 'https://github.com/Protocol-Juice/playground',
    thumb: '<video src="assets/Leaf.mp4" class="thumb-leaf" autoplay loop muted playsinline preload="none"></video>',
    title: 'Procedural Foliage Generation',
    date: 'Jan 2026 - Feb 2026',
    wip: false,
    type: 'code',
    desc: `Procedural generation of leaves, foliage, vines in Unity.`,
    tags: ['Procedural Generation', 'Unity'],
  },
};

function carouselHTML(p) {
  return `
  <div class="carousel-wrap">
    <div class="carousel-track">
      ${p.carousel.map(src => `<img src="${src}" alt="${p.title}" />`).join('')}
    </div>
    <button class="carousel-prev" onclick="event.stopPropagation()">&#8249;</button>
    <button class="carousel-next" onclick="event.stopPropagation()">&#8250;</button>
    <div class="carousel-dots">
      ${p.carousel.map((_, i) => `<span class="dot${i === 0 ? ' active' : ''}"></span>`).join('')}
    </div>
  </div>`;
}

function cardHTML(key) {
  const p = PROJECTS[key];
  const isCarousel = !!p.carousel;
  return `
  <div class="project-card" onclick="window.open('${p.url}','_blank')" role="link" tabindex="0">
    <div class="project-thumb${isCarousel ? ' thumb-a4' : ''}">${isCarousel ? carouselHTML(p) : p.thumb}</div>
    <div class="project-body">
      <h3 class="project-name">
        <span class="project-title">${p.title}</span>
        <span class="project-date">${p.date}</span>
        ${p.wip ? '<span class="badge-wip">In progress</span>' : ''}
      </h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">
        ${p.tags.map(t => `<span class="stack-tag">${t}</span>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderProjects(activeFilter) {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  const attr = grid.dataset.projects;
  let keys = attr
    ? attr.split(',').map(s => s.trim()).filter(k => PROJECTS[k])
    : Object.keys(PROJECTS);

  if (activeFilter) keys = keys.filter(k => PROJECTS[k].type === activeFilter);

  grid.innerHTML = keys.map(cardHTML).join('');

  grid.querySelectorAll('.project-card a').forEach(a => {
    a.addEventListener('click', e => e.stopPropagation());
  });

  initCarousels();
}

function initCarousels() {
  document.querySelectorAll('.carousel-wrap').forEach(wrap => {
    const track = wrap.querySelector('.carousel-track');
    const dots = wrap.querySelectorAll('.dot');
    const total = track.children.length;
    let current = 0;

    function goTo(n) {
      current = (n + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    wrap.querySelector('.carousel-prev').addEventListener('click', () => goTo(current - 1));
    wrap.querySelector('.carousel-next').addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));
  });
}

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

const urlFilter = new URLSearchParams(window.location.search).get('filter');
const defaultFilter = urlFilter || 'code';

renderProjects(defaultFilter);
initFilters();

document.querySelector(`.filter-btn[data-filter="${defaultFilter}"]`)?.classList.add('active');
