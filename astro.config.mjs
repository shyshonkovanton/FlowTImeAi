import { defineConfig } from "astro/config";

// Publikacja na GitHub Pages: https://shyshonkovanton.github.io/FlowTImeAi/
export default defineConfig({
  site: "https://shyshonkovanton.github.io",
  base: "/FlowTImeAi",
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
