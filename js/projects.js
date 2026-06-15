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
    thumb: '<video src="assets/SquishyVid.mp4" autoplay loop muted playsinline></video>',
    title: 'Soft Body Simulation for a Game',
    date: 'Apr 2026 - Now',
    wip: true,
    type: 'code',
    desc: `Platformer built on Godot around <strong>spring-based soft body simulation</strong>.
           Euler integration, and squishy character deformation, soft-rigid bodies interaction.`,
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
    thumb: '<video src="assets/SmokeSim.mp4" class="thumb-zoom" autoplay loop muted playsinline onloadedmetadata="this.currentTime=5"></video>',
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
    desc: `Ludum Dare 57 entry built in 3 days — ranked <strong>20th out of ~3000 participants</strong>. Play it on <a href="https://slyzdev.itch.io/ld57" target="_blank" class="inline-link">itch.io</a>.`,
    tags: ['Game Jam', 'Ludum Dare', 'Godot'],
  },
  'isometric': {
    url: 'https://github.com/SlyZ1/Isometric-Pixel-Game',
    thumb: '<video src="assets/Isometric.mp4" autoplay loop muted playsinline></video>',
    title: 'Isometric Procedural Environnement',
    date: 'Dec 2023 - Jun 2024',
    wip: false,
    type: 'code',
    desc: `Isometric pixel-art playground with <strong>procedurally generated</strong> environments. RPG-inspired world exploration with dynamic map generation.<br>Everything is <strong>hand-drawn.</strong>`,
    tags: ['Procedural Generation', 'Unity'],
  },
  'foliage': {
    url: 'https://github.com/Protocol-Juice/playground',
    thumb: '<video src="assets/Leaf.mp4" class="thumb-leaf" autoplay loop muted playsinline></video>',
    title: 'Procedural Foliage Generation',
    date: 'Jan 2026 - Feb 2026',
    wip: false,
    type: 'code',
    desc: `Procedural generation of leaves, foliage, vines in Unity.`,
    tags: ['Procedural Generation', 'Unity'],
  },
};

function cardHTML(key) {
  const p = PROJECTS[key];
  return `
  <div class="project-card" onclick="window.open('${p.url}','_blank')" role="link" tabindex="0">
    <div class="project-thumb">${p.thumb}</div>
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
}

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const isActive = btn.classList.contains('active');

      btns.forEach(b => b.classList.remove('active'));
      if (!isActive) btn.classList.add('active');

      renderProjects(isActive ? null : filter);
    });
  });
}

renderProjects();
initFilters();
