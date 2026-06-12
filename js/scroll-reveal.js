/**
 * scroll-reveal.js
 * Triggers the `.reveal` → `.reveal.visible` transition
 * as elements enter the viewport.
 */

(function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
