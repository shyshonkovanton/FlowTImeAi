import { getCollection, type CollectionEntry } from "astro:content";

// Treść wpisów znajduje się w plikach Markdown: src/content/blog/*.md
export type BlogPost = CollectionEntry<"blog">["data"] & { slug: string; entry: CollectionEntry<"blog"> };

export const AUTHOR = {
  name: "Maja Wrona",
  initials: "MW",
  bio: "Projektantka prostych systemów pracy i autorka tekstów FlowTImeAi. Pisze o tym, jak planować ambitnie, ale bez rezygnowania z odpoczynku."
};

export const posts: BlogPost[] = (await getCollection("blog"))
  .map((entry) => ({ ...entry.data, slug: entry.id, entry }))
  .sort((a, b) => b.datetime.localeCompare(a.datetime));

export const categories = [...new Set(posts.map((p) => p.category))].map((name) => ({
  name,
  count: posts.filter((p) => p.category === name).length
}));
