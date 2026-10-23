# FlowTImeAi — Projekt Semestralny RWD

Responsywny serwis internetowy zrealizowany w oparciu o **Astro** oraz **Bootstrap 5.3.8** w ramach przedmiotu **Responsive Web Design** (etapy 1–5).

---

## Karta Projektu (Brief Projektowy)

- **Robocza nazwa serwisu / marki:** FlowTImeAi
- **Charakter podmiotu:** Inicjatywa projektowa / produkt cyfrowy (narzędzia produktywności i planowania czasu)
- **Zakres działalności podmiotu:** FlowTImeAi łączy spotkania, zadania i czas dla siebie w jednym inteligentnym kalendarzu. Serwis prezentuje koncepcję aplikacji, bazę wiedzy (blog o spokojnym planowaniu i AI) oraz poglądowy katalog pakietów i szablonów cyfrowych.
- **Profil grupy docelowej:** Studenci, osoby pracujące hybrydowo i małe zespoły projektowe korzystające ze smartfonów (360–390 px), tabletów (768 px) i komputerów (1200+ px).
- **Główny cel konwersji serwisu:** Pozyskanie zapytania ofertowego / zgłoszenia do wczesnego dostępu oraz prezentacja pakietów wdrożeniowych.
- **Wytyczne Identyfikacji Wizualnej (Style Guide):**
  - Kolor wiodący (Primary): `#007aff`
  - Kolor pomocniczy (Secondary / Surface): `#f7f8fa`
  - Kolor akcentu / CTA: `#ff3b30` (oraz akcent równowagi `#28a879`)
  - Tekst podstawowy (Text): `#1d1d1f` (tekst pomocniczy `#6e6e73`)
  - Typografia: `Inter` (Google Fonts) z fallbackiem systemowym `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

---

## Struktura Serwisu (Etapy 1–5)

- **Etap 1 — Strona główna (`/`, `src/pages/index.astro`):**
  - Nawigacja z menu mobilnym (`navbar-toggler`) i kotwicami `#o-nas`, `#oferta`, `#kontakt`, `#faq` oraz linkami do modułów `/blog/` i `/sklep/`.
  - Sekcja wiodąca (`#hero`), dwukolumnowa sekcja O inicjatywie (`#o-nas`) z grafiką, 3 karty kluczowej oferty (`#oferta`), sekcja FAQ, podgląd 3 wpisów blogowych (`#blog`), pełna sekcja kontaktowa (`#kontakt`) z danymi teleadresowymi i 4-polowym formularzem zapytania oraz stopka z danymi identyfikacyjnymi.
- **Etap 2 — Moduł Bloga (`/blog/`, `/blog/single/`):**
  - Archiwum 6 artykułów (`src/pages/blog/index.astro`) w układzie dwukolumnowym (`main` + `aside`) z wyszukiwarką, kategoriami z `badge`, polecanymi wpisami i paginacją Bootstrap.
  - Strona artykułu (`src/pages/blog/single.astro`) z okruszkami (`breadcrumb`), metadanymi, grafiką główną, leadem, nagłówkami `h2`/`h3`, cytatem `blockquote`, listą, drugą ilustracją `<figure>` z `<figcaption>`, tabelą responsywną, tagami, biogramem autora, udostępnianiem, nawigacją sąsiednich artykułów, 2 komentarzami i formularzem komentarza.
- **Etap 3 i 4 — Moduł Sklepu i podstrony produktów (`/sklep/`, `/sklep/[slug]/`):**
  - Katalog 4 produktów cyfrowych (`src/pages/sklep/index.astro`) oraz 4 dedykowane podstrony produktowe (`src/pages/sklep/[slug].astro`) z danymi strukturalnymi `Schema.org Product` (rozwiązanie demonstracyjne — bez prawdziwych płatności backendowych).

---

## Uruchomienie i budowanie

```bash
npm install
npm run dev      # serwer deweloperski Astro
npm run build    # budowanie statycznej wersji produkcyjnej do katalogu dist/
npm run preview  # podgląd zbudowanej wersji
```

