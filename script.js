// ===== Hamburger Menu =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// ===== Slider (autoplay + buttons) =====
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  if (!sliderContainer) return;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  sliderContainer.style.transform = `translateX(${-index * 100}%)`;
}
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
}
// Auto-play
setInterval(() => showSlide(currentIndex + 1), 5000);

// ===== Timeline Animation (scroll reveal) =====
const timelineItems = document.querySelectorAll('.timeline-item');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add('show');
  });
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') { nameError.style.display = 'block'; valid = false; }
    else { nameError.style.display = 'none'; }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) { emailError.style.display = 'block'; valid = false; }
    else { emailError.style.display = 'none'; }

    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') { messageError.style.display = 'block'; valid = false; }
    else { messageError.style.display = 'none'; }

    if (valid) {
      // Response message
      const successBox = document.createElement('div');
      successBox.textContent = "✅ Message sent successfully! I'll get back soon.";
      successBox.style.background = "#d4edda";
      successBox.style.color = "#155724";
      successBox.style.padding = "10px";
      successBox.style.marginTop = "10px";
      successBox.style.borderRadius = "5px";
      contactForm.appendChild(successBox);

      setTimeout(() => successBox.remove(), 4000);
      contactForm.reset();
    }
  });
}
