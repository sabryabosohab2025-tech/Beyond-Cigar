// script.js

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn && menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form simple handler
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');

form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = 'Message sent successfully.';
  setTimeout(() => formMsg.textContent = '', 3500);
  form.reset();
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: subtle entrance animation for gallery images
document.querySelectorAll('.gallery-grid img').forEach((img, i) => {
  img.style.animation = `fadeIn .6s ease ${0.08*i}s both`;
});