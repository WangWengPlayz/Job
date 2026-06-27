// ── Theme ──
const root = document.body;
const icon = document.getElementById('theme-icon');
if (localStorage.getItem('theme') === 'light') {
  root.classList.add('light');
  icon.className = 'fas fa-sun';
}
function toggleTheme() {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// ── Privacy Modal ──
function closeModal() {
  document.getElementById('privacy-modal').classList.add('hidden');
  localStorage.setItem('privacy-agreed', 'true');
}
if (localStorage.getItem('privacy-agreed') === 'true') closeModal();

// ── Mobile Nav ──
function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}
function closeNav() {
  document.getElementById('nav-links').classList.remove('open');
}

// ── Typed Text Effect ──
const phrases = [
  'ICT Graduate',
  'Python Developer',
  'Virtual Assistant',
  'Data Entry Specialist',
  'Remote Worker',
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const phrase = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++charIndex);
    if (charIndex === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = phrase.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

// ── Skill Bars on Scroll ──
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const rect = el.closest('.skill-card').getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.width = el.dataset.width + '%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
animateSkills();

// ── Scroll to Top ──
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ── Active Nav Link ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ── Contact Form ──
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const status = document.getElementById('form-status');

  const mailto = `mailto:martlabaco@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
  window.location.href = mailto;
  status.textContent = 'Opening your email client...';
  e.target.reset();
  setTimeout(() => status.textContent = '', 4000);
}
