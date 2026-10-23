const signupForm = document.querySelector('#signupForm');
const formStatus = document.querySelector('#formStatus');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get('email');
  formStatus.textContent = `Спасибо! ${email} — адрес записан для демонстрации.`;
  signupForm.reset();
});
