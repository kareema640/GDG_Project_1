const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

function formatNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return n.toString();
}

function animateCounter(el, target, duration = 1800) {
  let start = null;
  const numEl = el.querySelector('.num');
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    numEl.textContent = formatNum(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(step);
    else numEl.textContent = formatNum(target);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.querySelector('.label').dataset.target, 10);
      animateCounter(entry.target, target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-card').forEach(el => {
    if(el.querySelector('.label').dataset.target) statsObserver.observe(el);
});

document.querySelectorAll('.stat-card:not(.featured)').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('featured'));
  card.addEventListener('mouseleave', () => card.classList.remove('featured'));
});

document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', function () {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    this.classList.add('active');
  });
});