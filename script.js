const signupForm = document.querySelector('#signupForm');
const formStatus = document.querySelector('#formStatus');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get('email');
  formStatus.textContent = `Dziękujemy! Adres ${email} został zapisany w wersji demonstracyjnej.`;
  signupForm.reset();
});
