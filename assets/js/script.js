// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if(mainNav.style.display === 'block'){
      mainNav.style.display = '';
    } else {
      mainNav.style.display = 'block';
    }
  });
}

// Set current year in footer
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Simple subscription handler
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

function validateEmail(email){
  return /\S+@\S+\.\S+/.test(email);
}

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();
    if(!value){
      message.textContent = 'Por favor, informe um email.';
      return;
    }
    if(!validateEmail(value)){
      message.textContent = 'Email inválido.';
      return;
    }
    // simulate success
    message.textContent = 'Obrigado! Você foi inscrito.';
    emailInput.value = '';
    setTimeout(() => { message.textContent = ''; }, 4000);
  });
}
