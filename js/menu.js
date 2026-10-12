/* ==========================================================================
   Off-canvas slide-out menu + clock + close-on-link
   ========================================================================== */
(function menu(){
  const trigger = document.getElementById('menu-trigger');
  const overlay = document.getElementById('menu-overlay');
  const clock   = document.getElementById('menu-clock');

  function toggle(){
    document.body.classList.toggle('menu-open');
  }
  trigger.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
  document.querySelectorAll('.menu-item').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });

  // Live AR clock
  function updateClock(){
    if (!clock) return;
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Argentina/Cordoba',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
    clock.textContent = 'CÓRDOBA ' + fmt.format(new Date()) + ' ART';
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
