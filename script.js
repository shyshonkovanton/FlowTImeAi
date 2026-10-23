const signupForm = document.querySelector('#signupForm');
const formStatus = document.querySelector('#formStatus');

if (signupForm && formStatus) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(signupForm).get('email');
    formStatus.textContent = `Dziękujemy! Adres ${email} został zapisany w wersji demonstracyjnej.`;
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

const blogSearchForm = document.querySelector('.blog-search');
const blogSearchInput = document.querySelector('#blog-search');

if (blogSearchForm && blogSearchInput) {
  const filterPosts = (query) => {
    const normalized = query.trim().toLowerCase();
    const cols = document.querySelectorAll('.blog-archive .col-md-6');
    cols.forEach((col) => {
      const text = col.textContent.toLowerCase();
      col.hidden = normalized.length > 0 && !text.includes(normalized);
    });
  };

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q');
  if (initialQuery) {
    blogSearchInput.value = initialQuery;
    filterPosts(initialQuery);
  }

  blogSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    filterPosts(blogSearchInput.value);
  });
}


