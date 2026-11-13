import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Wpisy bloga: src/content/blog/*.md (nazwa pliku = adres /blog/<nazwa>/)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    datetime: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    readingTime: z.string(),
    tags: z.array(z.string()),
    lead: z.string()
  })
});

// Produkty sklepu: src/content/sklep/*.md (nazwa pliku = adres /sklep/<nazwa>/)
const sklep = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sklep" }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    category: z.string(),
    badge: z.string(),
    price: z.string(),
    priceValue: z.string(),
    currency: z.string(),
    billingNote: z.string(),
    shortDescription: z.string(),
    deliverables: z.array(z.object({ item: z.string(), format: z.string(), scope: z.string() })),
    image: z.string(),
    imageAlt: z.string(),
    sku: z.string(),
    oldPrice: z.string().optional(),
    oldPriceValue: z.number().optional(),
    rating: z.number(),
    reviews: z.number(),
    popularity: z.number(),
    format: z.enum(["Dostęp online", "Plik do pobrania"]),
    inStock: z.boolean()
  })
});

export const collections = { blog, sklep };
