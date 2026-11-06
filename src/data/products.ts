export type ProductItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  price: string;
  priceValue: string;
  currency: string;
  billingNote: string;
  shortDescription: string;
  lead: string;
  features: string[];
  deliverables: { item: string; format: string; scope: string }[];
  image: string;
  imageAlt: string;
  sku: string;
  oldPrice?: string;
  oldPriceValue?: number;
  rating: number;
  reviews: number;
  popularity: number;
  format: ProductFormat;
  inStock: boolean;
};

export type ProductFormat = "Dostęp online" | "Plik do pobrania";

export const products: ProductItem[] = [
  {
    id: "plan-osobisty-ai",
    slug: "plan-osobisty-ai",
    name: "FlowTImeAi Personal — Subskrypcja Roczna",
    category: "Subskrypcja aplikacji",
    badge: "Najczęściej wybierany",
    price: "149 zł",
    priceValue: "149.00",
    currency: "PLN",
    billingNote: "opłata roczna (wersja demonstracyjna projektu)",
    shortDescription:
      "Inteligentny kalendarz dla jednej osoby z podpowiedziami AI, blokami skupienia i automatyczną ochroną przerw. Pomaga uporządkować tydzień bez przeciążenia.",
    lead:
      "Pełny dostęp do aplikacji webowej FlowTImeAi w wariancie indywidualnym. Łączy kalendarz spotkań, listę priorytetów i spokojny asystent AI, który podpowiada realistyczne okna na pracę głęboką oraz odpoczynek.",
    features: [
      "Asystent AI proponujący wolne bloki skupienia i przerw",
      "Integracja widoku spotkań, zadań i czasu dla siebie w jednym tygodniu",
      "Piątkowy przegląd tygodnia i statystyki równowagi praca–odpoczynek",
      "Eksport i synchronizacja z popularnymi kalendarzami (iCal / CalDAV)"
    ],
    deliverables: [
      { item: "Dostęp do aplikacji FlowTImeAi Web", format: "Konto online (12 miesięcy)", scope: "1 użytkownik" },
      { item: "Asystent planowania AI", format: "Moduł w kalendarzu", scope: "Nielimitowane podpowiedzi" },
      { item: "Szablony tygodniowego rytmu", format: "Zestaw 6 konfiguracji", scope: "Praca, nauka, odpoczynek" }
    ],
    image: "/assets/shop-pack.svg",
    imageAlt: "Ilustracja pakietu FlowTImeAi Personal z widokiem kalendarza i asystenta AI",
    sku: "FTA-PERS-2026",
    rating: 4.8,
    reviews: 126,
    popularity: 100,
    format: "Dostęp online",
    inStock: true
  },
  {
    id: "pakiet-szablonow-rytmu",
    slug: "pakiet-szablonow-rytmu",
    name: "Zestaw Szablonów „Spokojny Tydzień”",
    category: "Cyfrowe szablony",
    badge: "Produkt cyfrowy",
    price: "59 zł",
    priceValue: "59.00",
    currency: "PLN",
    billingNote: "płatność jednorazowa (oferta poglądowa)",
    shortDescription:
      "Gotowe szablony bloków czasowych, przeglądów tygodnia i rytuałów skupienia. Stworzone dla studentów, freelancerów i osób pracujących hybrydowo.",
    lead:
      "Praktyczny pakiet cyfrowych układów tygodnia oraz list kontrolnych, które można od razu zaimportować do kalendarza lub wykorzystać podczas poniedziałkowego planowania.",
    features: [
      "12 gotowych siatek tygodniowych dopasowanych do różnego poziomu energii",
      "Arkusz wieczornego przeglądu dnia w 5 minut",
      "Szablon kwalifikacji spotkań i ochrony bloków pracy głębokiej",
      "Przewodnik PDF po metodyce spokojnego planowania"
    ],
    deliverables: [
      { item: "Szablony kalendarza (.ics / konfiguracja)", format: "Pliki cyfrowe", scope: "12 układów tygodnia" },
      { item: "Przewodnik „Planowanie bez presji”", format: "E-book PDF (48 stron)", scope: "Licencja indywidualna" },
      { item: "Karty przeglądów tygodniowych", format: "Szablony do druku i online", scope: "Poniedziałek / Środa / Piątek" }
    ],
    image: "/assets/blog-week.svg",
    imageAlt: "Ilustracja zestawu szablonów tygodniowego kalendarza z kolorowymi blokami",
    sku: "FTA-TMPL-2026",
    oldPrice: "79 zł",
    oldPriceValue: 79,
    rating: 4.7,
    reviews: 84,
    popularity: 80,
    format: "Plik do pobrania",
    inStock: true
  },
  {
    id: "warsztat-planowania-ai",
    slug: "warsztat-planowania-ai",
    name: "Kurs Wideo: Planowanie Czasu z AI bez Presji",
    category: "Kurs online",
    badge: "Edukacja",
    price: "119 zł",
    priceValue: "119.00",
    currency: "PLN",
    billingNote: "dostęp bezterminowy (oferta poglądowa)",
    shortDescription:
      "Praktyczny kurs pokazujący, jak połączyć własne priorytety z podpowiedziami sztucznej inteligencji. Cztery moduły wideo oraz ćwiczenia wdrożeniowe.",
    lead:
      "Kompaktowy program szkoleniowy przygotowany przez zespół FlowTImeAi. Pokazuje krok po kroku, jak przejść od przeładowanej listy zadań do przejrzystego tygodnia z buforem na życie.",
    features: [
      "4 moduły wideo (łącznie 120 minut konkretnych przykładów)",
      "Gotowe prompty i scenariusze pracy z asystentem kalendarza",
      "Studia przypadków: praca projektowa, studia i praca zespołowa",
      "Materiały dodatkowe i lista kontrolna wdrożenia nawyków"
    ],
    deliverables: [
      { item: "Lekcje wideo HD z napisami PL", format: "Dostęp na platformie", scope: "4 moduły (16 lekcji)" },
      { item: "Zeszyt ćwiczeń i promptów AI", format: "PDF + arkusze", scope: "24 scenariusze" },
      { item: "Aktualizacje materiałów", format: "Dostęp online", scope: "Wydanie 2026" }
    ],
    image: "/assets/blog-ai.svg",
    imageAlt: "Ilustracja kursu online o planowaniu czasu z pomocą asystenta AI",
    sku: "FTA-COURS-2026",
    rating: 4.9,
    reviews: 57,
    popularity: 70,
    format: "Dostęp online",
    inStock: true
  },
  {
    id: "plan-zespolowy-flow",
    slug: "plan-zespolowy-flow",
    name: "FlowTImeAi Team — Pakiet dla Małych Zespołów",
    category: "Dla zespołów",
    badge: "Do 10 osób",
    price: "399 zł",
    priceValue: "399.00",
    currency: "PLN",
    billingNote: "opłata roczna za zespół (oferta poglądowa)",
    shortDescription:
      "Wspólne okna skupienia, mniej zbędnych spotkań i przejrzysty rytm pracy zespołowej. Rozwiązanie dla grup projektowych, studiów i zespołów zdalnych.",
    lead:
      "Wariant zespołowy FlowTImeAi pomaga chronić czas na pracę głęboką całej grupy, grupować spotkania w spójne bloki i szanować godziny odpoczynku współpracowników.",
    features: [
      "Wspólne godziny ciszy i automatyczna ochrona bloków skupienia zespołu",
      "Inteligentne proponowanie terminów spotkań bez rozbijania dnia",
      "Szablony krótkich spotkań (15 / 25 / 45 minut) z obowiązkowym celem",
      "Panel podsumowania obciążenia spotkaniami w skali tygodnia"
    ],
    deliverables: [
      { item: "Przestrzeń zespołowa FlowTImeAi", format: "Konto online (12 miesięcy)", scope: "Do 10 użytkowników" },
      { item: "Koordynator terminów AI", format: "Moduł zespołowy", scope: "Wspólne kalendarze" },
      { item: "Kodeks spokojnych spotkań", format: "Pakiet wdrożeniowy PDF", scope: "Dla całego zespołu" }
    ],
    image: "/assets/blog-break.svg",
    imageAlt: "Ilustracja harmonijnego planu pracy zespołowej i przerw w kalendarzu",
    sku: "FTA-TEAM-2026",
    rating: 4.6,
    reviews: 31,
    popularity: 60,
    format: "Dostęp online",
    inStock: true
  },
  {
    id: "kalendarz-studenta",
    slug: "kalendarz-studenta",
    name: "Szablon „Kalendarz Studenta”",
    category: "Cyfrowe szablony",
    badge: "Dla studentów",
    price: "39 zł",
    priceValue: "39.00",
    currency: "PLN",
    billingNote: "płatność jednorazowa (oferta poglądowa)",
    shortDescription:
      "Semestralny układ zajęć, kolokwiów i terminów oddania prac z blokami na naukę i regenerację. Gotowy do importu do kalendarza.",
    lead:
      "Szablon przygotowany z myślą o rytmie semestru: pokazuje zajęcia, deadline’y i czas na naukę w jednym przejrzystym widoku, bez przeładowania.",
    features: [
      "Siatka semestru z kolorami dla przedmiotów",
      "Bloki nauki przed kolokwiami i egzaminami",
      "Lista kontrolna sesji egzaminacyjnej",
      "Instrukcja importu do popularnych kalendarzy"
    ],
    deliverables: [
      { item: "Szablon semestru (.ics)", format: "Plik cyfrowy", scope: "1 semestr" },
      { item: "Arkusz planowania sesji", format: "PDF", scope: "Licencja indywidualna" },
      { item: "Instrukcja importu", format: "PDF (6 stron)", scope: "Krok po kroku" }
    ],
    image: "/assets/blog-week.svg",
    imageAlt: "Ilustracja szablonu semestralnego kalendarza studenta",
    sku: "FTA-STUD-2026",
    oldPrice: "49 zł",
    oldPriceValue: 49,
    rating: 4.5,
    reviews: 42,
    popularity: 90,
    format: "Plik do pobrania",
    inStock: true
  },
  {
    id: "karty-przegladu-tygodnia",
    slug: "karty-przegladu-tygodnia",
    name: "Karty Przeglądu Tygodnia (PDF)",
    category: "Cyfrowe szablony",
    badge: "Do druku",
    price: "29 zł",
    priceValue: "29.00",
    currency: "PLN",
    billingNote: "płatność jednorazowa (oferta poglądowa)",
    shortDescription:
      "Zestaw kart do cotygodniowego podsumowania: co się udało, co przenieść i na czym skupić się dalej. Do druku lub wypełniania na ekranie.",
    lead:
      "Krótki rytuał piątkowego przeglądu w formie gotowych kart. Pomaga zamknąć tydzień i zacząć następny z jasnym kierunkiem.",
    features: [
      "10 kart przeglądu w układzie A4 i A5",
      "Pytania pomocnicze do oceny energii i priorytetów",
      "Wersja do wypełniania w czytniku PDF",
      "Karta planowania następnego tygodnia"
    ],
    deliverables: [
      { item: "Karty przeglądu tygodnia", format: "PDF (A4 / A5)", scope: "10 kart" },
      { item: "Karta planowania tygodnia", format: "PDF", scope: "Wersja drukowana i ekranowa" }
    ],
    image: "/assets/blog-break.svg",
    imageAlt: "Ilustracja kart cotygodniowego przeglądu planu",
    sku: "FTA-CARD-2026",
    rating: 4.4,
    reviews: 19,
    popularity: 40,
    format: "Plik do pobrania",
    inStock: true
  },
  {
    id: "mini-kurs-skupienie",
    slug: "mini-kurs-skupienie",
    name: "Mini-kurs: Skupienie w 5 dni",
    category: "Kurs online",
    badge: "Edukacja",
    price: "49 zł",
    priceValue: "49.00",
    currency: "PLN",
    billingNote: "dostęp bezterminowy (oferta poglądowa)",
    shortDescription:
      "Pięć krótkich lekcji o ochronie uwagi, blokach pracy głębokiej i spokojnych przerwach. Jedno ćwiczenie dziennie.",
    lead:
      "Kompaktowy kurs na start: w pięć dni wprowadzasz do kalendarza bloki skupienia i sprawdzasz, które z nich działają w Twoim rytmie.",
    features: [
      "5 lekcji wideo po około 10 minut",
      "Codzienne ćwiczenie wdrożeniowe",
      "Karta oceny skupienia po tygodniu",
      "Napisy w języku polskim"
    ],
    deliverables: [
      { item: "Lekcje wideo z napisami PL", format: "Dostęp na platformie", scope: "5 lekcji" },
      { item: "Karty ćwiczeń", format: "PDF", scope: "5 kart" }
    ],
    image: "/assets/blog-ai.svg",
    imageAlt: "Ilustracja mini-kursu o skupieniu i planowaniu dnia",
    sku: "FTA-MINI-2026",
    oldPrice: "69 zł",
    oldPriceValue: 69,
    rating: 4.7,
    reviews: 38,
    popularity: 65,
    format: "Dostęp online",
    inStock: true
  },
  {
    id: "edu-licencja-grupowa",
    slug: "edu-licencja-grupowa",
    name: "FlowTImeAi Edu — Licencja dla Grupy",
    category: "Subskrypcja aplikacji",
    badge: "Wkrótce",
    price: "99 zł",
    priceValue: "99.00",
    currency: "PLN",
    billingNote: "opłata semestralna za grupę (oferta poglądowa)",
    shortDescription:
      "Wspólny kalendarz terminów dla grupy studenckiej: zajęcia, projekty i deadline’y w jednym miejscu. Produkt w przygotowaniu.",
    lead:
      "Wariant dla grup studenckich i kół naukowych. Produkt jest w przygotowaniu — sprzedaż ruszy po zakończeniu wersji testowej.",
    features: [
      "Wspólny kalendarz terminów grupy",
      "Przypomnienia o kolokwiach i oddawaniu prac",
      "Podział zadań projektowych w tygodniu",
      "Do 25 osób w grupie"
    ],
    deliverables: [
      { item: "Przestrzeń grupowa FlowTImeAi", format: "Konto online (semestr)", scope: "Do 25 użytkowników" },
      { item: "Kalendarz terminów grupy", format: "Moduł w aplikacji", scope: "Wspólny widok" }
    ],
    image: "/assets/shop-pack.svg",
    imageAlt: "Ilustracja licencji grupowej FlowTImeAi Edu",
    sku: "FTA-EDU-2026",
    rating: 0,
    reviews: 0,
    popularity: 20,
    format: "Dostęp online",
    inStock: false
  }
];
