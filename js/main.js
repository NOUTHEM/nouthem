// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll cue del hero
const scrollCue = document.getElementById('scrollCue');
if (scrollCue) {
  scrollCue.addEventListener('click', () => {
    document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
  });
}

// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  '.historia__text, .historia__visual, .mision__cards .label-card--dark, .producto, .contacto'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Newsletter (placeholder - de momento solo confirma en pantalla)
const form = document.getElementById('newsletterForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    formMsg.textContent = `Gracias — avisaremos a ${email} en cuanto lancemos.`;
    form.reset();
  });
}
