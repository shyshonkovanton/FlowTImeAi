// Formularze demonstracyjne (kontakt, newsletter) oraz wyszukiwarka na stronie 404.
document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = form.dataset.success || "Dziękujemy!";
    form.reset();
  });
});

const searchForm = document.getElementById("siteSearch");
if (searchForm) {
  const input = document.getElementById("siteSearchInput");
  const list = document.getElementById("siteSearchResults");
  let index = [];
  try { index = JSON.parse(document.getElementById("siteSearchIndex").textContent); } catch (_) {}
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");
  const run = () => {
    const terms = norm(input.value).split(/\s+/).filter(Boolean);
    list.replaceChildren();
    if (!terms.length) return;
    const hits = index.filter((e) => terms.every((t) => norm(e.title + " " + e.text).includes(t))).slice(0, 6);
    if (!hits.length) {
      const li = document.createElement("li");
      li.className = "search-empty";
      li.textContent = "Brak wyników. Spróbuj innej frazy.";
      list.append(li);
      return;
    }
    hits.forEach((h) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = h.url;
      a.textContent = h.title;
      const small = document.createElement("small");
      small.textContent = h.kind;
      a.append(small);
      li.append(a);
      list.append(li);
    });
  };
  input.addEventListener("input", run);
  searchForm.addEventListener("submit", (e) => { e.preventDefault(); run(); });
}
