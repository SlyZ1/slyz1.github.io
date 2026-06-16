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
  'design': {
    url: '',
    noLink: true,
    col: 2,
    carousel: ['assets/pull.png', 'assets/Logos.svg'],
    darkCarousel: true,
    thumbClass: '',
    maxThumbHeight: [160, null],
    title: 'Design works',
    date: 'Jun 2026',
    wip: false,
    type: 'art',
    desc: `Sweater design for Télécom Paris's live music association <a href="https://lascene.rezel.net/" target="_blank" class="inline-link">La Scène</a>, and other works as Lead Graphic Designer.`,
    tags: ['Illustrator', 'Merch'],
  },
  'music': {
    url: '',
    noLink: true,
    col: 2,
    audioTracks: [
      { title: 'Neo Soul Track & Improvisation', src: 'assets/audios/neo soul groove holy.mp3' },
      { title: 'House Track', src: 'assets/audios/damnnn_house.mp3' },
      { title: 'Short Film Dramatic Music', src: 'assets/audios/live scene 4.mp3' },
      { title: 'Mario Kart House Track', src: 'assets/audios/mario kart.mp3' },
      { title: 'Neo Soul Track 2', src: 'assets/audios/tight beat.mp3' },
    ],
    thumbClass: '',
    title: 'Musical Compositions',
    date: '2025 - Now ',
    wip: false,
    type: 'art',
    desc: `Some of my compositions made on the computer.`,
    tags: [],
  },
  'pourquoi': {
    url: 'https://youtu.be/ZED1MGL5TY8',
    noLink: true,
    col: 2,
    thumb: '<video src="assets/pourquoi.mp4" class="thumb-contain" autoplay loop muted playsinline preload="none"></video>',
    title: 'Pourquoi',
    date: 'Jun 2022',
    wip: false,
    type: 'art',
    desc: `Short animation made for my music class in highschool.`,
    tags: ['Animation', 'After Effects', 'Illustrator', 'Motion Design'],
  },
  'affiches': {
    url: 'https://www.behance.net/slyz',
    carousel: [
      'assets/affiches/3.jpg',
      'assets/affiches/2.jpg',
      'assets/affiches/1.jpg',
      'assets/affiches/0.jpg',
    ],
    title: 'Live Music Event Posters',
    date: 'Dec 2025 - Apr 2026',
    wip: false,
    type: 'art',
    desc: `Posters designed as Lead Graphic Designer at Télécom Paris's live music association <a href="https://lascene.rezel.net/" target="_blank" class="inline-link">La Scène</a>. Everything besides the 3D models is made by hand.`,
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

function audioCarouselHTML(p) {
  const tracks = p.audioTracks;
  return `
  <div class="audio-player" data-titles="${tracks.map(t => t.title).join('|||')}" onclick="event.stopPropagation()">
    ${tracks.map(t => `<audio class="audio-src" src="${t.src}" preload="none"></audio>`).join('')}
    <div class="audio-header">
      <span class="audio-title">${tracks[0].title}</span>
      <span class="audio-count">1 / ${tracks.length}</span>
    </div>
    <div class="audio-controls">
      <button class="audio-prev-btn">&#8249;</button>
      <button class="audio-play-btn">
        <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
        <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>
      </button>
      <button class="audio-next-btn">&#8250;</button>
    </div>
    <div class="audio-progress-wrap">
      <div class="audio-bar"><div class="audio-fill"></div></div>
      <div class="audio-times">
        <span class="audio-current">0:00</span>
        <span class="audio-total">--:--</span>
      </div>
    </div>
    ${tracks.length > 1 ? `<div class="audio-dots">${tracks.map((_, i) => `<span class="dot${i === 0 ? ' active' : ''}"></span>`).join('')}</div>` : ''}
  </div>`;
}

function carouselHTML(p) {
  const slide = (src, i) => p.darkCarousel
    ? `<div class="thumb-dark"><img src="${src}" alt="${p.title}" class="thumb-contain" loading="${i === 0 ? 'eager' : 'lazy'}" /></div>`
    : `<img src="${src}" alt="${p.title}" loading="${i === 0 ? 'eager' : 'lazy'}"${i === 0 ? ' fetchpriority="high"' : ''} />`;
  return `
  <div class="carousel-wrap${p.darkCarousel ? ' carousel-dark' : ''}"${p.maxThumbHeight ? ` data-max-heights="${p.maxThumbHeight.map(v => v ?? '').join(',')}"` : ''}>
    <div class="carousel-track">
      ${p.carousel.map(slide).join('')}
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
  const isAudio = !!p.audioTracks;
  const thumbContent = isAudio ? audioCarouselHTML(p) : isCarousel ? carouselHTML(p) : p.thumb;
  return `
  <div class="project-card${p.noLink ? ' no-link' : ''}" ${p.noLink ? '' : `onclick="window.open('${p.url}','_blank')" role="link" tabindex="0"`}>
    <div class="project-thumb${p.thumbClass !== undefined ? p.thumbClass : (isCarousel ? ' thumb-a4' : '')}">${thumbContent}</div>
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

  if (activeFilter === 'art') {
    const hasColProp = keys.some(k => PROJECTS[k].col !== undefined);
    let col1, col2;
    if (hasColProp) {
      col1 = keys.filter(k => PROJECTS[k].col !== 2);
      col2 = keys.filter(k => PROJECTS[k].col === 2);
    } else {
      const split = Math.floor(keys.length / 2);
      col1 = keys.slice(0, split || 1);
      col2 = keys.slice(split || 1);
    }
    grid.classList.add('projects-cols');
    grid.innerHTML = `
      <div class="projects-col">${col1.map(cardHTML).join('')}</div>
      <div class="projects-col">${col2.map(cardHTML).join('')}</div>`;
  } else {
    grid.classList.remove('projects-cols');
    grid.innerHTML = keys.map(cardHTML).join('');
  }

  grid.querySelectorAll('.project-card a').forEach(a => {
    a.addEventListener('click', e => e.stopPropagation());
  });

  initCarousels();
  initAudioPlayers();
}

function initCarousels() {
  document.querySelectorAll('.carousel-wrap').forEach(wrap => {
    const track = wrap.querySelector('.carousel-track');
    const dots = wrap.querySelectorAll('.dot');
    const total = track.children.length;
    const thumb = wrap.closest('.project-thumb');
    const isDark = wrap.classList.contains('carousel-dark');
    const ratios = new Array(total).fill(0);
    const maxHeights = wrap.dataset.maxHeights
      ? wrap.dataset.maxHeights.split(',').map(v => v === '' ? Infinity : parseInt(v))
      : null;
    let current = 0;

    function resizeThumb(index) {
      if (!isDark || !thumb || !ratios[index]) return;
      const cap = maxHeights ? (maxHeights[index] ?? Infinity) : Infinity;
      thumb.style.height = Math.min(Math.round(thumb.offsetWidth * ratios[index]), cap) + 'px';
    }

    if (isDark) {
      wrap.querySelectorAll('.thumb-dark img').forEach((img, i) => {
        const measure = () => {
          if (img.naturalWidth) {
            ratios[i] = img.naturalHeight / img.naturalWidth;
            if (i === current) resizeThumb(current);
          }
        };
        if (img.complete && img.naturalWidth) measure();
        else img.addEventListener('load', measure);
      });
    }

    function goTo(n) {
      current = (n + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      resizeThumb(current);
    }

    wrap.querySelector('.carousel-prev').addEventListener('click', () => goTo(current - 1));
    wrap.querySelector('.carousel-next').addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));
  });
}

function initAudioPlayers() {
  document.querySelectorAll('.audio-player').forEach(player => {
    const audios = [...player.querySelectorAll('.audio-src')];
    const titleEl = player.querySelector('.audio-title');
    const countEl = player.querySelector('.audio-count');
    const playBtn = player.querySelector('.audio-play-btn');
    const iconPlay = playBtn.querySelector('.icon-play');
    const iconPause = playBtn.querySelector('.icon-pause');
    const fill = player.querySelector('.audio-fill');
    const currentEl = player.querySelector('.audio-current');
    const totalEl = player.querySelector('.audio-total');
    const dots = [...(player.querySelectorAll('.audio-dots .dot') || [])];
    const trackTitles = player.dataset.titles.split('|||');
    const total = audios.length;
    let current = 0;
    let playing = false;

    iconPause.style.display = 'none';

    function fmt(s) {
      const m = Math.floor(s / 60);
      return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
    }

    function setTrack(i) {
      audios[current].pause();
      audios[current].currentTime = 0;
      current = (i + total) % total;
      playing = false;
      iconPlay.style.display = '';
      iconPause.style.display = 'none';
      fill.style.width = '0%';
      currentEl.textContent = '0:00';
      totalEl.textContent = '--:--';
      titleEl.textContent = trackTitles[current];
      countEl.textContent = `${current + 1} / ${total}`;
      dots.forEach((d, j) => d.classList.toggle('active', j === current));
    }

    function togglePlay() {
      const audio = audios[current];
      if (playing) {
        audio.pause();
        playing = false;
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
      } else {
        audio.play();
        playing = true;
        iconPlay.style.display = 'none';
        iconPause.style.display = '';
      }
    }

    audios.forEach((audio, i) => {
      audio.addEventListener('loadedmetadata', () => {
        if (i === current) totalEl.textContent = fmt(audio.duration);
      });
      audio.addEventListener('timeupdate', () => {
        if (i !== current) return;
        currentEl.textContent = fmt(audio.currentTime);
        if (audio.duration) fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
      });
      audio.addEventListener('ended', () => {
        if (i !== current) return;
        playing = false;
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
        fill.style.width = '0%';
        currentEl.textContent = '0:00';
      });
    });

    playBtn.addEventListener('click', togglePlay);
    player.querySelector('.audio-prev-btn')?.addEventListener('click', () => setTrack(current - 1));
    player.querySelector('.audio-next-btn')?.addEventListener('click', () => setTrack(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => setTrack(i)));
    player.querySelector('.audio-bar').addEventListener('click', e => {
      const audio = audios[current];
      if (!audio.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    });
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
