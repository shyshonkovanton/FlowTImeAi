const signupForm = document.querySelector('#signupForm');
const formStatus = document.querySelector('#formStatus');

if (signupForm && formStatus) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    if (fullName) {
      formStatus.textContent = `Dziękujemy, ${fullName}! Zapytanie (${email}) zostało zapisane w wersji demonstracyjnej.`;
    } else {
      formStatus.textContent = `Dziękujemy! Adres ${email} został zapisany w wersji demonstracyjnej.`;
    }
    signupForm.reset();
  });
}

const commentForm = document.querySelector('.comment-form');
const commentStatus = document.querySelector('#commentStatus');

if (commentForm && commentStatus) {
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = new FormData(commentForm).get('name');
    commentStatus.textContent = `Dziękujemy, ${name}! Twój komentarz został zapisany w wersji demonstracyjnej.`;
    commentForm.reset();
  });
}
