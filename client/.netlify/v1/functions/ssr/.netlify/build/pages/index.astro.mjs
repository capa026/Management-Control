import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BVR7uCjW.mjs';
import { $ as $$Layout, a as $$PageHeader } from '../chunks/Layout_n1L-rNPc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Dashboard", "iconName": "home" })} ${maybeRenderHead()}<div class="p-6"> <h1>Main</h1> </div> ` })}`;
}, "D:/Projects/managementApp/client/src/pages/index.astro", void 0);

const $$file = "D:/Projects/managementApp/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
