// Alternar tema
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});

const form = document.getElementById('contact-form');
const successPopup = document.getElementById('success-popup');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Mostrar pop-up
  successPopup.style.display = 'flex';
  form.reset();
});

function closePopup() {
  successPopup.style.display = 'none';
}

constform = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('success-message').style.display = 'block';
});

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
