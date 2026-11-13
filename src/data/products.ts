import { getCollection, type CollectionEntry } from "astro:content";

// Produkty sklepu są plikami Markdown: src/content/sklep/*.md
// (metadane we frontmatterze, pełny opis w treści pliku).
export type ProductItem = CollectionEntry<"sklep">["data"] & { id: string; slug: string; entry: CollectionEntry<"sklep"> };
export type ProductFormat = ProductItem["format"];

export const products: ProductItem[] = (await getCollection("sklep"))
  .map((entry) => ({ ...entry.data, id: entry.id, slug: entry.id, entry }))
  .sort((a, b) => a.order - b.order);
