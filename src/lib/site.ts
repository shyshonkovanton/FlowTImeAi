/** Adres publikacji (GitHub Pages) używany w canonical, og:url i danych strukturalnych. */
export const SITE_URL = "https://shyshonkovanton.github.io/FlowTImeAi";

export const COMPANY = {
  name: "FlowTImeAi Studio",
  form: "projekt edukacyjny RWD",
  nip: "000-000-00-00",
  regon: "000000000",
  street: "ul. Akademicka 14",
  city: "00-950 Warszawa",
  email: "kontakt@flowtimeai.edu.pl",
  phone: "+48 22 100 20 30",
  phoneHref: "tel:+48221002030",
  hours: "poniedziałek–piątek, 09:00–16:00"
} as const;

/** Profile społecznościowe w stopce (adresy do podmiany po założeniu kont projektu). */
export const SOCIAL = [
  { label: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", icon: "bi-linkedin", href: "https://www.linkedin.com/" },
  { label: "YouTube", icon: "bi-youtube", href: "https://www.youtube.com/" }
] as const;
