import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                       */const white = "";
const ConnectPlug_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".connect-plug.svelte-hiqkgr{border:none;font-style:normal;font-weight:bold;font-size:16px;line-height:24px;background:linear-gradient(\n            94.95deg,\n            #ffe701 -1.41%,\n            #fa51d3 34.12%,\n            #10d9ed 70.19%,\n            #52ff53 101.95%\n        );border-radius:10px;color:#fff;padding:6px 32px;cursor:pointer;transition:opacity 0.3s ease-in,\n            transform 0.3s ease-in-out;transform:scale(1);width:350px;height:50px}.connect-plug.svelte-hiqkgr:hover{opacity:0.94;transform:scale(1.02)}",
  map: null
};
const ConnectPlug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${`${`<button class="connect-plug svelte-hiqkgr" data-svelte-h="svelte-1ohue0h">Conectar Wallet</button>`}`}`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.svelte-1rm5ubw.svelte-1rm5ubw{display:flex;align-items:center;padding:0}nav.svelte-1rm5ubw.svelte-1rm5ubw{width:100%;display:flex;padding:0 2em 0 2em;justify-content:space-evenly}ul.svelte-1rm5ubw.svelte-1rm5ubw{display:flex;list-style:none}ul.svelte-1rm5ubw li.svelte-1rm5ubw{padding:1.5rem;font-family:"Courier New", Courier, monospace}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-1rm5ubw"><nav class="svelte-1rm5ubw" data-svelte-h="svelte-jhqcjd"> <ul class="svelte-1rm5ubw"><li class="svelte-1rm5ubw">Acerca</li> <li class="svelte-1rm5ubw">Ayuda</li> <li class="svelte-1rm5ubw">Empieza un Proyecto</li></ul></nav> ${validate_component(ConnectPlug, "ConnectPlug").$$render($$result, {}, {}, {})}  </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
