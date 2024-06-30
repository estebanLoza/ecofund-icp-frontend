import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const ConnectPlug_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".connect-plug.svelte-1mt2zz9{border:none;font-style:normal;font-weight:bold;font-size:16px;line-height:24px;background:linear-gradient(\n            94.95deg,\n            #ffe701 -1.41%,\n            #fa51d3 34.12%,\n            #10d9ed 70.19%,\n            #52ff53 101.95%\n        );border-radius:10px;color:#fff;padding:6px 32px;cursor:pointer;transition:opacity 0.3s ease-in,\n            transform 0.3s ease-in-out;transform:scale(1)}.connect-plug.svelte-1mt2zz9:hover{opacity:0.94;transform:scale(1.02)}",
  map: null
};
const ConnectPlug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="connect-plug svelte-1mt2zz9" data-svelte-h="svelte-5goyoj">Conectar Wallet</button>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.svelte-3sbh3m.svelte-3sbh3m{display:flex;padding:0}nav.svelte-3sbh3m.svelte-3sbh3m{width:100%;display:flex;padding:0 2em 0 2em;justify-content:space-evenly}ul.svelte-3sbh3m.svelte-3sbh3m{display:flex;list-style:none}ul.svelte-3sbh3m li.svelte-3sbh3m{padding:1.5rem;font-family:"Courier New", Courier, monospace}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-3sbh3m"><nav class="svelte-3sbh3m" data-svelte-h="svelte-jhqcjd"> <ul class="svelte-3sbh3m"><li class="svelte-3sbh3m">Acerca</li> <li class="svelte-3sbh3m">Ayuda</li> <li class="svelte-3sbh3m">Empieza un Proyecto</li></ul></nav> ${validate_component(ConnectPlug, "ConnectPlug").$$render($$result, {}, {}, {})}  </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
