import { products, type ProductItem } from "../data/products";

export const formatPLN = (value: number): string =>
  `${value.toFixed(2).replace(".", ",")} zł`;

export const priceOf = (product: ProductItem): number => Number(product.priceValue);

export const discountPercent = (product: ProductItem): number | null =>
  product.oldPriceValue
    ? Math.round((1 - priceOf(product) / product.oldPriceValue) * 100)
    : null;

export const getProduct = (slug: string): ProductItem => {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return product;
};

export const SHIPPING = { kurier: 14.99, paczkomat: 9.99, odbior: 0 } as const;

// Zawartość demonstracyjnego koszyka (spójna na stronie koszyka i kasy).
export const cartLines = [
  { slug: "plan-osobisty-ai", qty: 1 },
  { slug: "pakiet-szablonow-rytmu", qty: 2 }
];

export const reviews = [
  { author: "Anna K.", rating: 5, date: "12 września 2026", text: "Szablony od razu uporządkowały mój tydzień. Import do kalendarza zajął kilka minut." },
  { author: "Michał W.", rating: 4, date: "28 sierpnia 2026", text: "Czytelne i spokojne w użyciu. Chętnie zobaczyłbym więcej wariantów kolorystycznych." },
  { author: "Iga P.", rating: 5, date: "3 sierpnia 2026", text: "Dobry punkt wyjścia dla osoby, która dopiero zaczyna planować czas bez presji." }
];
