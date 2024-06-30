import { c as create_ssr_component } from "../../chunks/ssr.js";
import { HttpAgent, Actor } from "@dfinity/agent";
import { b as building } from "../../chunks/environment.js";
const index = "";
const idlFactory = ({ IDL }) => {
  return IDL.Service({ "greet": IDL.Func([IDL.Text], [IDL.Text], ["query"]) });
};
const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const createActor = (canisterId2, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });
  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }
  {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: canisterId2,
    ...options.actorOptions
  });
};
function dummyActor() {
  return new Proxy({}, { get() {
    throw new Error("Canister invoked while building");
  } });
}
const buildingOrTesting = building || process.env.NODE_ENV === "test";
buildingOrTesting ? dummyActor() : createActor(canisterId);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-5esety.svelte-5esety{padding:0;margin:0}img.svelte-5esety.svelte-5esety{width:100px;height:50px}#Seccion1.svelte-5esety.svelte-5esety{width:100%;height:28em;border:2px solid green}#primerSeccion.svelte-5esety.svelte-5esety{display:block;padding:5em 8em 0 8em;width:30%}#primerSeccion.svelte-5esety h1.svelte-5esety{font-size:3.2em;font-family:"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif}.parraSecc1.svelte-5esety.svelte-5esety{width:350px;display:flex;justify-content:center}.parraSecc1.svelte-5esety p.svelte-5esety{font-size:15px;font-family:Verdana, Geneva, Tahoma, sans-serif}#Seccion1.svelte-5esety button.svelte-5esety{margin-top:24px;background-color:rgb(69, 233, 69);color:#ffffff;border-radius:18px;border:0;font-size:18px;font-weight:bold;width:250px;height:40px}#Seccion2.svelte-5esety.svelte-5esety{width:100%}#tituloComoFunciona.svelte-5esety.svelte-5esety{margin:30px 0 20px 0;width:100%;height:6em;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}#tituloSec2.svelte-5esety h2.svelte-5esety{font-size:42px;font-family:Verdana, Geneva, Tahoma, sans-serif;font-weight:bold;color:rgba(11, 11, 129, 0.705)}#parrafoSec2.svelte-5esety p.svelte-5esety{width:450px;text-align:center;font-family:Verdana, Geneva, Tahoma, sans-serif;padding:8px}#ComoFunciona.svelte-5esety.svelte-5esety{width:100%;height:44em;border:2px solid black;display:flex;align-items:center;justify-content:space-around;gap:200px;flex-wrap:wrap}.cajasFuncionamiento.svelte-5esety.svelte-5esety{width:23em;height:13em;border:2px solid black}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-5esety" data-svelte-h="svelte-mdax5o"><section id="Seccion1" class="svelte-5esety"> <div id="primerSeccion" class="svelte-5esety"><div id="cajaTextoH1" class="svelte-5esety"><h1 class="svelte-5esety">Aval colectivo a beneficio de la tribu</h1></div> <div class="parraSecc1 svelte-5esety"><p class="svelte-5esety">Puedes usar tus ICP para avalar un proyecto, los ICP que uses para
          avalar te serán 100% devueltos, después de que la persona a quien
          avales devuelva el dinero, mañana puedes tú también ser avalado.</p></div> <button class="svelte-5esety">encuentra un proyecto</button></div></section> <section id="Seccion2" class="svelte-5esety"><div id="tituloComoFunciona" class="svelte-5esety"><div id="tituloSec2" class="svelte-5esety"><h2 class="svelte-5esety">Cómo funciona</h2></div> <div id="parrafoSec2" class="svelte-5esety"><p class="svelte-5esety">Descubre cómo la tecnologia blockchain puede cambiarle la vida a
          alguien, al avalar un proyecto puedes apoyar las causas que te
          interesan y generar un impacto.</p></div></div> <div id="ComoFunciona" class="svelte-5esety"><div class="cajasFuncionamiento svelte-5esety"><h3 class="svelte-5esety">Escoge un proyecto</h3> <p class="svelte-5esety">Loggeate con tu billatera ICP y busca por categoria y encuentra un
          emprendedor a quien apoyar</p></div> <div class="cajasFuncionamiento svelte-5esety"><h3 class="svelte-5esety">Realiza un movimiento</h3> <p class="svelte-5esety">Puedes apoyar poniendo en prenda tus near</p></div> <div class="cajasFuncionamiento svelte-5esety"><h3 class="svelte-5esety">Recibe el reembolso</h3> <p class="svelte-5esety">Cuando los prestatarios paguen su financiamiento después del periodo
          de tiempo pactado, automáticamente se hará el reemboloso de tus ICP</p></div> <div class="cajasFuncionamiento svelte-5esety"><h3 class="svelte-5esety">Repetir</h3> <p class="svelte-5esety">Puedes liberar tus fondos a tu billatera ICP ao volver a avalar a otro
          emprendedor, una vez que avalas a alguien ya puedes ser avalado en el
          futuro en esa nuestra tribu.</p></div></div></section> <section id="Seccion3" class="svelte-5esety"> <h2 class="svelte-5esety">Avala los proyectos que te importan</h2> <div class="svelte-5esety"> <figure class="svelte-5esety"><img src="" alt="" class="svelte-5esety"></figure></div> <div class="svelte-5esety"> <figure class="svelte-5esety"><img src="" alt="" class="svelte-5esety"></figure></div> <div class="svelte-5esety"> <figure class="svelte-5esety"><img src="" alt="" class="svelte-5esety"></figure></div></section> <footer class="svelte-5esety"><div class="svelte-5esety"></div></footer> </main>`;
});
export {
  Page as default
};
