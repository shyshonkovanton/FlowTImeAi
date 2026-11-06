export type PostTable = { caption: string; head: [string, string, string]; rows: [string, string, string][] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  datetime: string;
  description: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  tags: string[];
  lead: string;
  intro: { heading: string; text: string };
  quote: string;
  list: { heading: string; items: { label: string; text: string }[] };
  figure: { image: string; alt: string; caption: string };
  detail: { heading: string; text: string };
  table: PostTable;
};

export const AUTHOR = {
  name: "Maja Wrona",
  initials: "MW",
  bio: "Projektantka prostych systemów pracy i autorka tekstów FlowTImeAi. Pisze o tym, jak planować ambitnie, ale bez rezygnowania z odpoczynku."
};

export const posts: BlogPost[] = [
  {
    slug: "jak-planowac-tydzien",
    title: "Jak planować tydzień bez poczucia presji",
    category: "Planowanie",
    date: "12 marca 2026",
    datetime: "2026-03-12",
    description: "Plan tygodnia nie musi wypełniać każdej luki. Poznaj prosty sposób na wybieranie priorytetów i zostawianie miejsca na nieprzewidziane sprawy.",
    image: "/assets/blog-week.svg",
    imageAlt: "Ilustracja tygodniowego kalendarza z blokami czasu",
    readingTime: "6 min czytania",
    tags: ["planowanie tygodnia", "kalendarz", "produktywność"],
    lead: "Dobrze zaplanowany tydzień nie jest napiętym harmonogramem, lecz prostą odpowiedzią na pytanie: na czym chcę się skupić? Kilka świadomych bloków czasu pozwala zrobić więcej bez wrażenia, że kalendarz zarządza Tobą.",
    intro: { heading: "Zacznij od kierunku, nie od godzin", text: "Zanim wpiszesz pierwsze spotkanie, wybierz dwa lub trzy rezultaty, które mają znaczenie pod koniec tygodnia. Mogą dotyczyć pracy, nauki albo odpoczynku. Dzięki temu kalendarz staje się narzędziem decyzji, a nie tylko rejestrem zajętości." },
    quote: "Najlepszy plan tygodnia nie próbuje przewidzieć wszystkiego. Pomaga łatwiej wybrać, co odpuścić.",
    list: { heading: "Trzy bloki, które warto wpisać jako pierwsze", items: [
      { label: "Czas skupienia", text: "jedna konkretna rzecz bez powiadomień i bez wielozadaniowości." },
      { label: "Spotkania", text: "łącz je w grupy, aby uniknąć ciągłego przełączania uwagi." },
      { label: "Margines", text: "zostaw wolne okno na zmiany, drogę i krótką regenerację." }
    ] },
    figure: { image: "/assets/blog-ai.svg", alt: "Asystent AI proponujący wolny blok czasu w kalendarzu", caption: "AI może zaproponować wolne okno, ale to Ty określasz, co jest warte Twojej energii." },
    detail: { heading: "Krótki przegląd na piątek", text: "Pod koniec tygodnia sprawdź, co zadziałało. Nie oceniaj dnia po liczbie odhaczonych punktów: zauważ również, czy zostawiłeś sobie czas na odpoczynek i czy plan był możliwy do wykonania." },
    table: { caption: "Prosty rytuał planowania tygodnia", head: ["Kiedy", "Pytanie", "Efekt"], rows: [["Poniedziałek", "Co jest najważniejsze?", "2–3 priorytety"], ["Środa", "Co wymaga zmiany?", "Realistyczny plan"], ["Piątek", "Co chcę powtórzyć?", "Lepszy następny tydzień"]] }
  },
  {
    slug: "ai-w-kalendarzu",
    title: "AI w kalendarzu: pomocnik, który nie przejmuje kontroli",
    category: "AI i produktywność",
    date: "5 marca 2026",
    datetime: "2026-03-05",
    description: "Dobre podpowiedzi pomagają zacząć, ale decyzje nadal należą do Ciebie. Zobacz, gdzie automatyzacja skraca rutynę, a gdzie warto zachować własny osąd.",
    image: "/assets/blog-ai.svg",
    imageAlt: "Ilustracja asystenta AI układającego bloki w kalendarzu",
    readingTime: "5 min czytania",
    tags: ["AI", "automatyzacja", "kalendarz"],
    lead: "Asystent AI w kalendarzu jest najlepszy wtedy, gdy proponuje, a nie decyduje. Pokazuje wolne okna, wyłapuje konflikty i oszczędza kilka kliknięć dziennie, ale ostateczny plan nadal układasz Ty.",
    intro: { heading: "Gdzie automatyzacja naprawdę pomaga", text: "AI dobrze radzi sobie z powtarzalnymi zadaniami: znajdowaniem wspólnego terminu, rozpoznawaniem danych w wiadomości czy przypominaniem o marginesie przed spotkaniem. To czynności, w których liczy się szybkość, a nie osąd." },
    quote: "Dobra automatyzacja robi miejsce na myślenie, zamiast je zastępować.",
    list: { heading: "Trzy zasady współpracy z asystentem", items: [
      { label: "Sprawdzaj propozycje", text: "każde wydarzenie powinno przejść przez Twoją akceptację." },
      { label: "Ustal granice", text: "zdecyduj, których bloków, na przykład odpoczynku, AI nie może ruszać." },
      { label: "Poprawiaj błędy", text: "korekty uczą narzędzie, jak wygląda Twój rytm dnia." }
    ] },
    figure: { image: "/assets/blog-week.svg", alt: "Podgląd propozycji wydarzenia przed dodaniem do kalendarza", caption: "Podgląd przed dodaniem wydarzenia daje kontrolę nad tym, co trafia do kalendarza." },
    detail: { heading: "Kiedy zachować własny osąd", text: "Decyzje o priorytetach, relacjach i odpoczynku zostaw sobie. AI nie wie, które spotkanie jest dla Ciebie ważne ani ile energii zostało Ci w czwartek po południu." },
    table: { caption: "Co oddać asystentowi, a co zachować", head: ["Zadanie", "Kto decyduje", "Dlaczego"], rows: [["Szukanie wolnego terminu", "AI", "Powtarzalne i szybkie"], ["Odczytanie daty z wiadomości", "AI, Ty zatwierdzasz", "Wymaga weryfikacji"], ["Wybór priorytetów", "Ty", "Zależy od Twoich celów"]] }
  },
  {
    slug: "przerwa-w-kalendarzu",
    title: "Dlaczego przerwa powinna trafić do kalendarza",
    category: "Równowaga",
    date: "26 lutego 2026",
    datetime: "2026-02-26",
    description: "Odpoczynek nie jest nagrodą po wykonaniu wszystkich zadań. Zaplanowany świadomie pomaga chronić energię i kończyć dzień z większym spokojem.",
    image: "/assets/blog-break.svg",
    imageAlt: "Ilustracja przerwy na kawę zaplanowanej w kalendarzu",
    readingTime: "4 min czytania",
    tags: ["odpoczynek", "energia", "równowaga"],
    lead: "Przerwa, której nie ma w kalendarzu, zwykle znika jako pierwsza. Wpisana jako pełnoprawny blok czasu przestaje być luksusem i zaczyna chronić jakość całego dnia.",
    intro: { heading: "Odpoczynek jako część planu", text: "Traktuj przerwę jak spotkanie z samym sobą. Gdy ma godzinę i nazwę, łatwiej ją obronić przed kolejnym zaproszeniem czy pilnym zadaniem." },
    quote: "Przerwa nie jest przeciwieństwem pracy. To warunek, by praca była dobra.",
    list: { heading: "Jak zaplanować przerwy", items: [
      { label: "Krótkie okna", text: "10–15 minut po bloku intensywnej pracy." },
      { label: "Przerwa na posiłek", text: "pełne 30–45 minut, bez ekranu, o stałej porze." },
      { label: "Koniec dnia", text: "wyraźna granica, po której nie planujesz zadań." }
    ] },
    figure: { image: "/assets/blog-break.svg", alt: "Blok przerwy na kawę wpisany do kalendarza", caption: "Zaplanowana przerwa wygląda w kalendarzu tak samo poważnie jak spotkanie." },
    detail: { heading: "Co zrobić, gdy przerwa się przesuwa", text: "Przesuń ją, ale nie usuwaj. Wpisz nowy termin w tym samym dniu, aby odpoczynek nie rozpłynął się w natłoku zadań." },
    table: { caption: "Przykładowy rytm dnia z przerwami", head: ["Pora", "Blok", "Czas"], rows: [["09:00", "Praca skupiona", "90 min"], ["10:30", "Przerwa", "15 min"], ["13:00", "Obiad bez ekranu", "45 min"]] }
  },
  {
    slug: "trzy-pytania-o-spotkania",
    title: "Trzy pytania przed dodaniem kolejnego spotkania",
    category: "Planowanie",
    date: "18 lutego 2026",
    datetime: "2026-02-18",
    description: "Nie każde spotkanie wymaga godziny w kalendarzu. Te trzy pytania pomagają zdecydować, czy rozmowa jest potrzebna i jak nadać jej właściwy czas.",
    image: "/assets/blog-week.svg",
    imageAlt: "Ilustracja spotkań zaznaczonych w kalendarzu",
    readingTime: "5 min czytania",
    tags: ["spotkania", "planowanie", "skupienie"],
    lead: "Spotkanie kosztuje czas wszystkich uczestników. Zanim klikniesz „Zaproś”, zadaj sobie trzy proste pytania, które pozwolą uniknąć zbędnych rozmów i skrócić te potrzebne.",
    intro: { heading: "Po co, kto i ile", text: "Najpierw ustal cel: co ma być rezultatem. Potem sprawdź, kto jest naprawdę potrzebny. Na końcu wybierz długość, która pasuje do celu, a nie do domyślnej godziny w kalendarzu." },
    quote: "Spotkanie bez celu to godzina, którą wszyscy tracą po cichu.",
    list: { heading: "Trzy pytania kontrolne", items: [
      { label: "Czy wystarczy wiadomość?", text: "jeśli odpowiedź mieści się w kilku zdaniach, spotkanie nie jest potrzebne." },
      { label: "Kto musi być obecny?", text: "zaproś tylko osoby, bez których nie podejmiecie decyzji." },
      { label: "Ile minut naprawdę trzeba?", text: "15, 25 lub 45 minut często wystarcza zamiast pełnej godziny." }
    ] },
    figure: { image: "/assets/blog-ai.svg", alt: "Krótkie spotkania pogrupowane w jednym bloku kalendarza", caption: "Spotkania pogrupowane razem chronią resztę dnia na pracę skupioną." },
    detail: { heading: "Grupuj spotkania", text: "Zbierz rozmowy w jednym bloku, na przykład we wtorek po południu. Zyskasz długie okna na pracę głęboką w pozostałe dni." },
    table: { caption: "Dobór długości spotkania", head: ["Cel", "Czas", "Format"], rows: [["Szybka synchronizacja", "15 min", "Stojąco lub online"], ["Decyzja", "25 min", "Agenda z celem"], ["Warsztat", "45 min", "Z przygotowaniem"]] }
  },
  {
    slug: "wieczorny-przeglad-dnia",
    title: "Wieczorny przegląd dnia w pięć spokojnych minut",
    category: "Równowaga",
    date: "9 lutego 2026",
    datetime: "2026-02-09",
    description: "Krótki rytuał na koniec dnia porządkuje otwarte sprawy. Dzięki niemu następny poranek zaczynasz od jasnej decyzji, a nie od listy zaległości.",
    image: "/assets/blog-break.svg",
    imageAlt: "Ilustracja wieczornego przeglądu planu dnia",
    readingTime: "3 min czytania",
    tags: ["nawyki", "przegląd dnia", "spokój"],
    lead: "Pięć minut wieczorem potrafi zmienić cały następny poranek. Krótki przegląd domyka dzień i pozwala zacząć kolejny z jasnym planem zamiast poczucia zaległości.",
    intro: { heading: "Rytuał w trzech krokach", text: "Przejrzyj kalendarz na jutro, przenieś niedokończone sprawy i wybierz jedną najważniejszą rzecz. Gotowe: nie musisz już o tym myśleć do rana." },
    quote: "Spokojny wieczór zaczyna się od jednej decyzji o jutrze.",
    list: { heading: "Co sprawdzić wieczorem", items: [
      { label: "Jutrzejsze wydarzenia", text: "czy nie nakładają się i czy zostawiają margines." },
      { label: "Niedokończone zadania", text: "przenieś je świadomie albo z nich zrezygnuj." },
      { label: "Jedna rzecz na rano", text: "zapisz pierwsze zadanie, od którego zaczniesz." }
    ] },
    figure: { image: "/assets/blog-week.svg", alt: "Widok jutrzejszego dnia w kalendarzu przed zamknięciem pracy", caption: "Krótki rzut oka na jutro pozwala spokojnie zamknąć dzisiejszy dzień." },
    detail: { heading: "Utrzymaj nawyk", text: "Ustaw stałą porę i przypomnienie. Po kilku dniach przegląd wejdzie w nawyk i zajmie dokładnie tyle czasu, ile trzeba." },
    table: { caption: "Pięć minut przeglądu", head: ["Minuta", "Krok", "Efekt"], rows: [["1–2", "Przegląd jutra", "Wiesz, co Cię czeka"], ["3–4", "Przeniesienie zadań", "Czysta lista"], ["5", "Wybór priorytetu", "Jasny początek dnia"]] }
  },
  {
    slug: "bloki-skupienia",
    title: "Realistyczne bloki skupienia: mniej zadań, więcej efektu",
    category: "Planowanie",
    date: "31 stycznia 2026",
    datetime: "2026-01-31",
    description: "Blok skupienia działa najlepiej, gdy ma konkretny cel i granice. Dowiedz się, jak dobrać długość sesji do rodzaju pracy i własnej energii.",
    image: "/assets/blog-ai.svg",
    imageAlt: "Ilustracja bloku skupienia w cyfrowym kalendarzu",
    readingTime: "7 min czytania",
    tags: ["skupienie", "praca głęboka", "planowanie"],
    lead: "Blok skupienia nie musi trwać pół dnia. Działa wtedy, gdy ma jeden cel, wyraźny początek i koniec oraz realistyczną długość dopasowaną do Twojej energii.",
    intro: { heading: "Jeden blok, jeden cel", text: "Zamiast wpisywać „praca nad projektem”, nazwij konkretny rezultat, na przykład „szkic wstępu”. Wtedy wiesz, kiedy blok się kończy i czy zakończył się sukcesem." },
    quote: "Skupienie nie polega na dłuższej pracy, tylko na mniejszej liczbie rzeczy naraz.",
    list: { heading: "Jak dobrać długość bloku", items: [
      { label: "25–30 minut", text: "dla zadań wymagających startu lub gdy masz mało energii." },
      { label: "50–60 minut", text: "dla pracy twórczej i analitycznej, z przerwą po bloku." },
      { label: "90 minut", text: "dla głębokiej pracy, maksymalnie raz lub dwa razy dziennie." }
    ] },
    figure: { image: "/assets/blog-break.svg", alt: "Blok skupienia i przerwa po nim w kalendarzu", caption: "Po każdym bloku skupienia zaplanuj krótką przerwę." },
    detail: { heading: "Chroń blok przed zakłóceniami", text: "Wycisz powiadomienia i oznacz czas jako zajęty. Jeśli coś pilnego się pojawi, przesuń blok na ten sam dzień zamiast go usuwać." },
    table: { caption: "Dobór bloku do rodzaju pracy", head: ["Rodzaj pracy", "Długość", "Po bloku"], rows: [["Szybkie zadania", "25 min", "Przerwa 5 min"], ["Praca twórcza", "50 min", "Przerwa 10 min"], ["Praca głęboka", "90 min", "Przerwa 20 min"]] }
  }
];

export const categories = [...new Set(posts.map((p) => p.category))].map((name) => ({
  name,
  count: posts.filter((p) => p.category === name).length
}));
