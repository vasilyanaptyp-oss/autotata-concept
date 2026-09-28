// Language switcher (visual only in the concept)
document.querySelectorAll('.lang button').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.lang button').forEach(function (x) {
      x.classList.remove('is-on'); x.removeAttribute('aria-pressed');
    });
    b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true');
  });
});

// Sticky mobile call bar: show once the hero buttons scroll out of view
(function () {
  var bar = document.querySelector('.mbar');
  var cta = document.querySelector('.hero .cta');
  if (!bar || !cta || !('IntersectionObserver' in window)) { if (bar) bar.classList.add('is-on'); return; }
  new IntersectionObserver(function (e) {
    bar.classList.toggle('is-on', !e[0].isIntersecting && e[0].boundingClientRect.top < 0);
  }).observe(cta);
})();
