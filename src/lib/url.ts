/** Dodaje prefiks `base` z konfiguracji Astro (np. /FlowTImeAi) do ścieżki absolutnej serwisu. */
export const url = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/+$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
