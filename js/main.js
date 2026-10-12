/* ==========================================================================
   Main interactions: scroll reveals, counter animations, smooth scroll,
   hero parallax, magnetic tilt on bento cards, deep-section detection
   ========================================================================== */
(function main(){
  /* ---- Smooth in-page anchor scroll accounting for meta bar ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 40;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Reveal on scroll ---- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        revealObserver.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));

  /* ---- Counter animation ---- */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.target, 10);
      if (!target) return;
      const duration = 1600;
      const start = performance.now();
      function step(now){
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString('es-AR');
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.count').forEach(el => counterObserver.observe(el));

  /* ---- Hero parallax (cover image) ---- */
  const heroImg = document.querySelector('.hero-img-wrap img');
  const heroTitle = document.querySelector('.hero-title');
  function onScroll(){
    const y = window.scrollY;
    if (heroImg) {
      const rect = heroImg.parentElement.getBoundingClientRect();
      if (rect.bottom > 0) {
        const offset = (rect.top) * 0.12;
        heroImg.style.transform = `scale(${1 + y * 0.0002}) translateY(${offset}px)`;
      }
    }
    if (heroTitle) {
      const rect = heroTitle.getBoundingClientRect();
      if (rect.top > -200 && rect.bottom < window.innerHeight + 200) {
        heroTitle.style.transform = `translateY(${y * 0.08}px)`;
        heroTitle.style.opacity = 1 - (y / 800);
      }
    }
    // Show cursor ring contrast against deep sections
    const deep = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2);
    if (deep) {
      const section = deep.closest('.story-section, .contact-section, .foot');
      if (section) document.body.classList.add('is-deep');
      else document.body.classList.remove('is-deep');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Bento card 3D tilt ---- */
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 6}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- Process step subtle tilt ---- */
  document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mousemove', e => {
      const rect = step.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      step.style.transform = `perspective(800px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    });
    step.addEventListener('mouseleave', () => {
      step.style.transform = '';
    });
  });

  /* ---- Image glow trails on hover (subtle) ---- */
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
})();
