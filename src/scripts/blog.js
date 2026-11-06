// Archiwum bloga: wyszukiwanie, filtr kategorii i paginacja po stronie klienta.
import { pluralPL, renderPagination } from "./utils.js";

const grid = document.querySelector("#blogGrid");

if (grid) {
  const PAGE_SIZE = 3;
  const items = [...grid.querySelectorAll(".blog-item-col")];
  const form = document.querySelector(".blog-search");
  const input = document.querySelector("#blog-search");
  const buttons = [...document.querySelectorAll(".blog-category-btn")];
  const countEl = document.querySelector("#blogCount");
  const emptyEl = document.querySelector("#blogEmpty");
  const nav = document.querySelector("#blogPagination");

  const params = new URLSearchParams(window.location.search);
  const state = { category: params.get("kategoria") || "", query: params.get("q") || "", page: 1 };
  input.value = state.query;

  function render() {
    const query = state.query.trim().toLowerCase();
    const matches = items.filter((el) =>
      (!state.category || el.dataset.category === state.category) &&
      (!query || el.dataset.search.includes(query))
    );
    const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
    state.page = Math.min(state.page, pages);
    const visible = new Set(matches.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE));

    items.forEach((el) => { el.hidden = !visible.has(el); });
    buttons.forEach((btn) => {
      const on = btn.dataset.category === state.category;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
    countEl.textContent = `Znaleziono: ${matches.length} ${pluralPL(matches.length, "artykuł", "artykuły", "artykułów")}`;
    emptyEl.hidden = matches.length > 0;
    renderPagination(nav, state.page, pages, (page) => {
      state.page = page;
      render();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); state.query = input.value; state.page = 1; render(); });
  input.addEventListener("input", () => { state.query = input.value; state.page = 1; render(); });
  buttons.forEach((btn) => btn.addEventListener("click", () => { state.category = btn.dataset.category; state.page = 1; render(); }));
  render();
}
