import { c as createAstro, a as createComponent, b as addAttribute, f as renderHead, g as renderSlot, d as renderTemplate } from './chunk2.js';
/* empty css       */

const $$Astro = createAstro("https://20essentials.github.io/project-000-940");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(`${Astro2.site}/assets/favicon.webp`, "href")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="grid-background" data-astro-cid-sckkx6r4></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/amoil/Desktop/paginacion-practice/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
