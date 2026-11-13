import { posts } from "../data/posts";
import { products } from "../data/products";
import { url } from "./url";

export type SearchEntry = { title: string; url: string; kind: string; text: string };

/** Indeks wyszukiwarki serwisu (strona 404): wszystkie podstrony z krótkim opisem. */
export const searchIndex: SearchEntry[] = [
  { title: "Strona główna", url: url("/"), kind: "Strona", text: "kalendarz AI planowanie dnia o nas oferta faq" },
  { title: "Blog", url: url("/blog/"), kind: "Blog", text: "artykuły planowanie produktywność AI" },
  ...posts.map((p) => ({ title: p.title, url: url(`/blog/${p.slug}/`), kind: "Artykuł", text: `${p.description} ${p.category} ${p.tags.join(" ")}` })),
  { title: "Sklep", url: url("/sklep/"), kind: "Sklep", text: "katalog produktów szablony kursy subskrypcje" },
  ...products.map((p) => ({ title: p.name, url: url(`/sklep/${p.slug}/`), kind: "Produkt", text: `${p.shortDescription} ${p.category}` })),
  { title: "Koszyk", url: url("/koszyk/"), kind: "Sklep", text: "zamówienie zakupy kod rabatowy" },
  { title: "Zamówienie", url: url("/zamowienie/"), kind: "Sklep", text: "kasa płatność dostawa faktura" },
  { title: "Moje konto", url: url("/konto/"), kind: "Konto", text: "panel klienta zamówienia adres ustawienia" },
  { title: "Kontakt", url: url("/kontakt/"), kind: "Strona", text: "formularz adres telefon e-mail mapa dojazd" },
  { title: "Polityka prywatności", url: url("/polityka-prywatnosci/"), kind: "Strona", text: "RODO dane osobowe cookies prywatność" }
];
