// Wspólne narzędzia modułów katalogu i bloga.

/** Polska odmiana rzeczownika przy liczebniku (1 produkt, 2 produkty, 5 produktów). */
export const pluralPL = (n, one, few, many) => {
  if (n === 1) return one;
  const lastTwo = n % 100;
  const last = n % 10;
  return last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14) ? few : many;
};

/** Buduje paginację Bootstrap w `nav > ul`; `onSelect(page)` wywoływane po kliknięciu. */
export const renderPagination = (nav, page, pages, onSelect) => {
  const list = nav.querySelector("ul");
  list.replaceChildren();
  nav.hidden = pages <= 1;
  if (pages <= 1) return;

  const add = (label, target, { active = false, disabled = false, aria } = {}) => {
    const li = document.createElement("li");
    li.className = `page-item${active ? " active" : ""}${disabled ? " disabled" : ""}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "page-link";
    btn.textContent = label;
    btn.disabled = disabled;
    if (aria) btn.setAttribute("aria-label", aria);
    if (active) btn.setAttribute("aria-current", "page");
    btn.addEventListener("click", () => onSelect(target));
    li.append(btn);
    list.append(li);
  };

  add("‹", page - 1, { disabled: page === 1, aria: "Poprzednia strona" });
  for (let n = 1; n <= pages; n += 1) add(String(n), n, { active: n === page, aria: `Strona ${n}` });
  add("›", page + 1, { disabled: page === pages, aria: "Następna strona" });
};
