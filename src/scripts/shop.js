// Moduł e-commerce: katalog, galeria, koszyk, kasa, konto.
// Każdy blok uruchamia się tylko na stronie, na której występują jego elementy.

const formatPLN = (value) => `${value.toFixed(2).replace(".", ",")} zł`;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const pluralProducts = (n) => {
  if (n === 1) return "produkt";
  const lastTwo = n % 100;
  const last = n % 10;
  return last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14) ? "produkty" : "produktów";
};

// --- Katalog: filtry, sortowanie, paginacja -------------------------------
const filtersForm = $("#shopFilters");
const shopGrid = $("#shopGrid");

if (filtersForm && shopGrid) {
  const PAGE_SIZE = 6;
  const items = $$(".shop-item-col", shopGrid);
  const sortSelect = $("#shopSort");
  const priceRange = $("#priceRange");
  const priceOutput = $("#priceRangeValue");
  const countEl = $("#shopCount");
  const emptyEl = $("#shopEmpty");
  const pagination = $("#shopPagination");
  const pageList = $("ul", pagination);
  let page = 1;

  const checked = (name) => $$(`input[name="${name}"]:checked`, filtersForm).map((el) => el.value);

  const sorters = {
    popularity: (a, b) => Number(b.dataset.popularity) - Number(a.dataset.popularity),
    "price-asc": (a, b) => Number(a.dataset.price) - Number(b.dataset.price),
    "price-desc": (a, b) => Number(b.dataset.price) - Number(a.dataset.price),
    name: (a, b) => a.dataset.name.localeCompare(b.dataset.name, "pl")
  };

  const renderPagination = (pages) => {
    pageList.replaceChildren();
    pagination.hidden = pages <= 1;
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
      btn.addEventListener("click", () => { page = target; apply(false); shopGrid.scrollIntoView({ behavior: "smooth", block: "start" }); });
      li.append(btn);
      pageList.append(li);
    };
    add("‹", page - 1, { disabled: page === 1, aria: "Poprzednia strona" });
    for (let n = 1; n <= pages; n += 1) add(String(n), n, { active: n === page, aria: `Strona ${n}` });
    add("›", page + 1, { disabled: page === pages, aria: "Następna strona" });
  };

  function apply(resetPage = true) {
    if (resetPage) page = 1;
    const categories = checked("category");
    const formats = checked("format");
    const maxPrice = Number(priceRange.value);
    const onlyStock = $("#stock-only").checked;
    const onlyPromo = $("#promo-only").checked;
    priceOutput.textContent = `do ${maxPrice} zł`;

    const matches = items.filter((el) => {
      const d = el.dataset;
      return (categories.length === 0 || categories.includes(d.category))
        && (formats.length === 0 || formats.includes(d.format))
        && Number(d.price) <= maxPrice
        && (!onlyStock || d.stock === "1")
        && (!onlyPromo || d.promo === "1");
    }).sort(sorters[sortSelect.value]);

    const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
    page = Math.min(page, pages);
    const visible = new Set(matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));

    items.forEach((el) => { el.hidden = !visible.has(el); });
    matches.forEach((el, i) => { el.style.order = String(i); });

    countEl.textContent = `Znaleziono: ${matches.length} ${pluralProducts(matches.length)}`;
    emptyEl.hidden = matches.length > 0;
    renderPagination(pages);
  }

  filtersForm.addEventListener("change", () => apply());
  filtersForm.addEventListener("input", (e) => { if (e.target === priceRange) apply(); });
  filtersForm.addEventListener("reset", () => requestAnimationFrame(() => apply()));
  sortSelect.addEventListener("change", () => apply());
  filtersForm.addEventListener("submit", (e) => e.preventDefault());
  apply();
}

// --- Karta produktu: galeria ------------------------------------------------
const galleryMain = $("#galleryMain");
if (galleryMain) {
  const thumbs = $$(".product-thumb");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      galleryMain.src = thumb.dataset.gallerySrc;
      galleryMain.alt = thumb.dataset.galleryAlt;
      thumbs.forEach((t) => {
        const on = t === thumb;
        t.classList.toggle("active", on);
        t.setAttribute("aria-pressed", String(on));
      });
    });
  });
}

// --- Koszyk ----------------------------------------------------------------
const cartRoot = $("#cartRoot");
if (cartRoot) {
  const shippingBase = Number(cartRoot.dataset.shipping);
  const promoForm = $("#promoForm");
  const promoInput = $("#promoCode");
  const promoStatus = $("#promoStatus");
  let discountRate = 0;

  const recalc = () => {
    const rows = $$("[data-cart-row]");
    let subtotal = 0;
    rows.forEach((row) => {
      const qty = Number($("[data-cart-qty]", row).value);
      const line = Number(row.dataset.price) * qty;
      $("[data-line-total]", row).textContent = formatPLN(line);
      subtotal += line;
    });
    const discount = subtotal * discountRate;
    const shipping = rows.length ? shippingBase : 0;
    $("#sumSubtotal").textContent = formatPLN(subtotal);
    $("#sumDiscountRow").hidden = discount === 0;
    $("#sumDiscount").textContent = `−${formatPLN(discount)}`;
    $("#sumShipping").textContent = formatPLN(shipping);
    $("#sumTotal").textContent = formatPLN(subtotal - discount + shipping);
    $$("[data-cart-count]").forEach((el) => { el.textContent = String(rows.length); });
    const empty = rows.length === 0;
    $("#cartContent").hidden = empty;
    $("#cartEmpty").hidden = !empty;
    const checkout = $("#checkoutLink");
    checkout.classList.toggle("disabled", empty);
    checkout.setAttribute("aria-disabled", String(empty));
    checkout.tabIndex = empty ? -1 : 0;
  };

  cartRoot.addEventListener("input", (e) => {
    if (e.target.matches("[data-cart-qty]")) {
      const value = Math.min(10, Math.max(1, Math.floor(Number(e.target.value)) || 1));
      if (e.target.value !== "") e.target.value = String(value);
      recalc();
    }
  });
  cartRoot.addEventListener("change", (e) => {
    if (e.target.matches("[data-cart-qty]") && e.target.value === "") { e.target.value = "1"; recalc(); }
  });
  cartRoot.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cart-remove]");
    if (btn) { btn.closest("[data-cart-row]").remove(); recalc(); }
  });
  promoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (promoInput.value.trim().toUpperCase() === "FLOW10") {
      discountRate = 0.1;
      promoStatus.textContent = "Kod FLOW10 aktywny: rabat 10%.";
    } else {
      discountRate = 0;
      promoStatus.textContent = "Nieprawidłowy kod rabatowy.";
    }
    recalc();
  });
  recalc();
}

// --- Kasa -------------------------------------------------------------------
const checkoutForm = $("#checkoutForm");
if (checkoutForm) {
  const subtotal = Number($("[data-subtotal]", checkoutForm).dataset.subtotal);
  const updateTotals = () => {
    const selected = $('input[name="delivery"]:checked', checkoutForm);
    const shipping = selected ? Number(selected.dataset.price) : 0;
    $("#coShipping").textContent = formatPLN(shipping);
    $("#coTotal").textContent = formatPLN(subtotal + shipping);
  };
  $$('input[name="delivery"]', checkoutForm).forEach((r) => r.addEventListener("change", updateTotals));

  const invoiceToggle = $("#invoiceToggle");
  const invoiceFields = $("#invoiceFields");
  invoiceToggle.addEventListener("change", () => {
    const on = invoiceToggle.checked;
    invoiceFields.hidden = !on;
    invoiceToggle.setAttribute("aria-expanded", String(on));
    $$("input", invoiceFields).forEach((input) => { input.required = on; });
  });

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.assign(`${import.meta.env.BASE_URL.replace(/\/+$/, "")}/konto/?zamowienie=sukces`);
  });
  updateTotals();
}

// --- Konto ------------------------------------------------------------------
const accountTabs = $("#accountTabs");
if (accountTabs) {
  if (new URLSearchParams(window.location.search).get("zamowienie") === "sukces") {
    $("#orderSuccess").hidden = false;
  }

  const addressView = $("#addressView");
  const addressForm = $("#addressForm");
  const showAddressForm = (on) => { addressForm.hidden = !on; addressView.hidden = on; };
  $("#addressEdit").addEventListener("click", () => showAddressForm(true));
  $("#addressCancel").addEventListener("click", () => showAddressForm(false));
  addressForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(addressForm);
    const target = $("#addressText");
    target.replaceChildren(
      f.get("name"), document.createElement("br"),
      f.get("street"), document.createElement("br"),
      `${f.get("zip")} ${f.get("city")}`
    );
    showAddressForm(false);
  });

  $("#settingsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#settingsStatus").textContent = "Ustawienia zapisane (wersja demonstracyjna).";
  });
}
