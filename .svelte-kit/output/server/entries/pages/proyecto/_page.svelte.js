import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-14rkn4{color:blue}",
  map: null
};
let name = "World";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><h1 class="svelte-14rkn4">Hello ${escape(name)}!</h1> </main>`;
});
export {
  Page as default
};
