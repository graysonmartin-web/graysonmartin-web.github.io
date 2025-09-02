/* -------------------------------
   Basic interactivity for portfolio
--------------------------------- */

// Add header shadow on scroll
const header = document.querySelector('header');
function onScroll() {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
if (header) {
  onScroll();
  window.addEventListener('scroll', onScroll);
}

// Highlight current nav link
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  const target = a.getAttribute('href');
  if (target === here) a.classList.add('is-active');
});

// Update copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enable project filtering (only runs if #filters exists)
const filterBar = document.getElementById('filters');
const cards = document.querySelectorAll('.project-card');

if (filterBar) {
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active button state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
      const show = (filter === '*') || tags.includes(filter);
      card.classList.toggle('hide', !show);
    });
  });
}
