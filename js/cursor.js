/* ==========================================================================
   Custom magnetic cursor + lerp trailing ring
   ========================================================================== */
(function initCursor(){
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate(){
    // Lerp easing
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    dotX += (mouseX - dotX) * 0.55;
    dotY += (mouseY - dotY) * 0.55;

    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover state for interactive elements
  const interactives = document.querySelectorAll('a, button, .bento-card, .process-step, .menu-item, .contact-cta, input, textarea');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('is-hover');
      dot.classList.add('is-hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('is-hover');
      dot.classList.remove('is-hover');
    });
  });

  // Magnetic effect on .magnetic buttons
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(1.2)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();
