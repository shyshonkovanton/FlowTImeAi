// Wtyczka rehype: dopasowuje HTML wygenerowany z plików Markdown do stylów serwisu.
// - obrazki z adresem "/..." dostają prefiks bazowy (GitHub Pages: /FlowTImeAi),
// - obrazek z tytułem w osobnym akapicie staje się <figure> z <figcaption>,
// - cytat, lista i tabela dostają klasy Bootstrapa / serwisu,
// - akapit "*Tabela: …*" przed tabelą staje się jej podpisem <caption>.
const el = (tagName, properties, children) => ({ type: "element", tagName, properties, children });
const text = (n) => (n.type === "text" ? n.value : (n.children || []).map(text).join(""));
const elements = (nodes) => nodes.filter((n) => !(n.type === "text" && !n.value.trim()));

export default function rehypeArticle({ base = "" } = {}) {
  const prefix = base.replace(/\/+$/, "");
  const fixImg = (img) => {
    const src = String(img.properties.src || "");
    if (src.startsWith("/") && !src.startsWith(prefix + "/")) img.properties.src = prefix + src;
    img.properties.loading = "lazy";
    img.properties.decoding = "async";
    img.properties.width = 720;
    img.properties.height = 430;
  };
  const walk = (node) => {
    if (!node.children) return;
    const out = [];
    for (const child of node.children) {
      if (child.type !== "element") { out.push(child); continue; }
      const kids = elements(child.children || []);
      if (child.tagName === "p" && kids.length === 1 && kids[0].tagName === "img" && kids[0].properties.title) {
        const img = kids[0];
        const caption = img.properties.title;
        delete img.properties.title;
        fixImg(img);
        out.push(el("figure", { className: ["article-figure"] }, [img, el("figcaption", {}, [{ type: "text", value: caption }])]));
        continue;
      }
      if (child.tagName === "table") {
        let caption = null;
        for (let i = out.length - 1; i >= 0; i--) {
          const prev = out[i];
          if (prev.type === "text" && !prev.value.trim()) continue;
          const pk = prev.type === "element" && prev.tagName === "p" ? elements(prev.children) : [];
          if (pk.length === 1 && pk[0].tagName === "em" && /^Tabela:\s*/.test(text(pk[0]))) {
            caption = text(pk[0]).replace(/^Tabela:\s*/, "");
            out.splice(i, 1);
          }
          break;
        }
        child.properties.className = ["table", "article-table"];
        if (caption) child.children.unshift(el("caption", {}, [{ type: "text", value: caption }]));
        child.children.forEach((sec) => sec.type === "element" && sec.tagName === "thead" &&
          sec.children.forEach((tr) => tr.type === "element" && tr.children.forEach((th) => th.type === "element" && (th.properties.scope = "col"))));
        out.push(el("div", { className: ["table-responsive"] }, [child]));
        continue;
      }
      if (child.tagName === "blockquote") child.properties.className = ["blockquote", "article-quote"];
      if (child.tagName === "ul") child.properties.className = ["article-list"];
      if (child.tagName === "img") fixImg(child);
      walk(child);
      out.push(child);
    }
    node.children = out;
  };
  return (tree) => walk(tree);
}
