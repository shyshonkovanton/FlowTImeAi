import { defineConfig } from "astro/config";
import rehypeArticle from "./src/lib/rehype-article.mjs";

const base = "/FlowTImeAi";

// Publikacja na GitHub Pages: https://shyshonkovanton.github.io/FlowTImeAi/
export default defineConfig({
  site: "https://shyshonkovanton.github.io",
  base,
  markdown: {
    rehypePlugins: [[rehypeArticle, { base }]]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  }
});
