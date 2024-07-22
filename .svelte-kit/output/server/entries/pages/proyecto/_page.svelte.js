import { c as create_ssr_component, i as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { S as Sinba } from "../../../chunks/Sinba.js";
/* empty css                                                          */const css$2 = {
  code: "button.svelte-dtppr4{width:125px;height:25px;font-size:14px;color:white;font-weight:bold;background-color:rgb(69, 233, 69);border-radius:6px;border:2px rgb(161, 159, 159) solid}",
  map: null
};
const TransferPlug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { amount } = $$props;
  let { principalId } = $$props;
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.principalId === void 0 && $$bindings.principalId && principalId !== void 0)
    $$bindings.principalId(principalId);
  $$result.css.add(css$2);
  return `${`<button class="svelte-dtppr4" data-svelte-h="svelte-1q04ir9">Transferir ICP</button>`}`;
});
const PorcentBarr_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@property --progress-value{syntax:'<integer>';inherits:true;initial-value:0}:root{--progress-bar-color:#cfd8dc;--progress-value-color:#2196f3;--progress-empty-color-h:4.1;--progress-empty-color-s:89.6;--progress-empty-color-l:58.4;--progress-filled-color-h:122.4;--progress-filled-color-s:39.4;--progress-filled-color-l:49.2}progress[value].svelte-11mp4gb{display:block;position:relative;appearance:none;width:600px;height:10px;border:0;--border-radius:5px;border-radius:var(--border-radius);counter-reset:progress var(--progress-value);--progress-value-string:counter(progress) '%';--progress-max-decimal:calc(var(--value, 0) / var(--max, 0));--progress-value-decimal:calc(var(--progress-value, 0) / var(--max, 0));@supports selector(::-moz-progress-bar) {\n                --progress-value-decimal: calc(var(--value, 0) / var(--max, 0));\n            };--progress-value-percent:calc(var(--progress-value-decimal) * 100%);--progress-value-color:hsl(\n                calc((var(--progress-empty-color-h) + (var(--progress-filled-color-h) - var(--progress-empty-color-h)) * var(--progress-value-decimal)) * 1deg)\n                calc((var(--progress-empty-color-s) + (var(--progress-filled-color-s) - var(--progress-empty-color-s)) * var(--progress-value-decimal)) * 1%)\n                calc((var(--progress-empty-color-l) + (var(--progress-filled-color-l) - var(--progress-empty-color-l)) * var(--progress-value-decimal)) * 1%)\n            );animation:calc(3s * var(--progress-max-decimal)) linear 0.5s 1 normal both svelte-11mp4gb-progress}progress[value].svelte-11mp4gb::-webkit-progress-bar{background-color:var(--progress-bar-color);border-radius:var(--border-radius);overflow:hidden}progress[value].svelte-11mp4gb::-webkit-progress-value{width:var(--progress-value-percent) !important;background-color:var(--progress-value-color);border-radius:var(--border-radius)}progress[value].svelte-11mp4gb::-moz-progress-bar{width:var(--progress-value-percent) !important;background-color:var(--progress-value-color);border-radius:var(--border-radius)}progress[value].svelte-11mp4gb::after{display:flex;align-items:center;justify-content:center;--size:32px;width:var(--size);height:var(--size);position:absolute;left:var(--progress-value-percent);top:50%;transform:translate(-50%, -50%);background-color:var(--progress-value-color);border-radius:50%;content:attr(value);content:var(--progress-value-string, var(--value));font-size:12px;font-weight:700;color:#fff}@keyframes svelte-11mp4gb-progress{from{--progress-value:0}to{--progress-value:var(--value)}}",
  map: null
};
const PorcentBarr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<progress value="75" max="100" style="--value: 75; --max: 100;" class="svelte-11mp4gb"></progress>`;
});
const Perfil = "/_app/immutable/assets/Perfil.b18f0169.png";
const UbicacionImg = "/_app/immutable/assets/UbicacionImg.9951ec29.png";
const apoyo1 = "/_app/immutable/assets/apoyo1.3f34dd26.png";
const apoyo2 = "/_app/immutable/assets/apoyo2.4855d6e9.png";
const apoyo3 = "/_app/immutable/assets/apoyo3.2cace931.png";
const apoyo4 = "/_app/immutable/assets/apoyo4.0642c64e.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '#cajaPrincipalInfo.svelte-3ce4jq.svelte-3ce4jq{width:65%;height:96em;border:2px solid black;border-radius:16px;padding-top:16px}#ContendorImg.svelte-3ce4jq.svelte-3ce4jq{display:flex}#textosDeBarra.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:space-between;align-items:flex-end;padding:0;margin:0}#textosDeBarra.svelte-3ce4jq p.svelte-3ce4jq{margin:4px;font-family:Verdana, Geneva, Tahoma, sans-serif;padding-top:1.3rem}#porcentajeAvaladoBarra.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:flex-end;padding:0;margin:0}#porcentajeAvaladoBarra.svelte-3ce4jq p.svelte-3ce4jq{margin:0;font-family:Verdana, Geneva, Tahoma, sans-serif}#NombreYBarra.svelte-3ce4jq p.svelte-3ce4jq{font-family:Verdana, Geneva, Tahoma, sans-serif}#TextoSobreProyecto.svelte-3ce4jq.svelte-3ce4jq{padding:0 50px;width:26em;margin:50px auto}#TextoSobreProyecto.svelte-3ce4jq p.svelte-3ce4jq{font-size:30px;font-family:Verdana, Geneva, Tahoma, sans-serif;padding:0;margin:0}#TextoSobreProyecto.svelte-3ce4jq #CajaImgUbicacion img.svelte-3ce4jq{width:60px;justify-content:flex-start}#CajaImgUbicacion.svelte-3ce4jq.svelte-3ce4jq{width:350px;display:flex;align-items:center;margin:50px 2px}#CajaImgUbicacion.svelte-3ce4jq figcaption.svelte-3ce4jq{padding:0 15px;font-size:25px;font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",\n            sans-serif}#CajaSinbaImg.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:center}#CajaSinbaImg.svelte-3ce4jq img.svelte-3ce4jq{width:450px;object-fit:cover;border-radius:1.3em}.cajaInfoSinba.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:center;margin:20px 0px 0px 0px}.cajaInfoSinba.svelte-3ce4jq p.svelte-3ce4jq{margin:0px;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:1.1em;padding:8px 10vh;text-align:justify}#tituloApoyoAval.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:center;margin-top:3em}#tituloApoyoAval.svelte-3ce4jq h4.svelte-3ce4jq{font-size:45px;font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",\n            sans-serif;margin:0;padding:0}#ImganesApoyoAval.svelte-3ce4jq.svelte-3ce4jq{width:750px;display:flex;justify-content:space-between;margin-top:3em;padding:0 66px}#ImganesApoyoAval.svelte-3ce4jq img.svelte-3ce4jq{width:8em}#ImganesApoyoAval.svelte-3ce4jq p.svelte-3ce4jq{display:flex;justify-content:center;font-family:Verdana, Geneva, Tahoma, sans-serif}#TituloAvalamiento.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:center;margin-top:2em}#TituloAvalamiento.svelte-3ce4jq h4.svelte-3ce4jq{font-size:2em;font-family:Verdana, Geneva, Tahoma, sans-serif;margin:0}#ContDetallesAvalamiento.svelte-3ce4jq.svelte-3ce4jq{display:flex;justify-content:space-around;padding-top:10px}#ContDetallesAvalamiento.svelte-3ce4jq ul li.svelte-3ce4jq{font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:18px;font-weight:500}#ContDetallesAvalamiento.svelte-3ce4jq ul.svelte-3ce4jq{list-style:none}#CajaConvierteAval.svelte-3ce4jq.svelte-3ce4jq{display:flex;align-items:center;justify-content:space-around;margin-top:10em;width:250px;height:100px;border:2px solid gray;border-radius:8px}#CajaConvierteAval.svelte-3ce4jq select.svelte-3ce4jq{background-color:rgb(253, 253, 253);width:86px;border-radius:4px;height:25px}#CajaConvierteAval.svelte-3ce4jq select option.svelte-3ce4jq{text-align:center}main.svelte-3ce4jq.svelte-3ce4jq{display:flex;gap:4em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let project = {
    name: "Sinba",
    description: "Un aval de 500 ICP puede ayudar a Siba a poner su negocio de reciclaje de comida para las areas de perú",
    location: "Lima, Perú",
    daysLeft: 49,
    icpLeft: 500,
    percentage: 75,
    principalId: "aaa-aaa-aa"
  };
  $$result.css.add(css);
  return `<main class="svelte-3ce4jq"><div></div> <div id="cajaPrincipalInfo" class="svelte-3ce4jq"><div id="ImgYFondo"><div id="ContendorImg" class="svelte-3ce4jq"><figure data-svelte-h="svelte-1cmk6z9"><img${add_attribute("src", Perfil, 0)} alt="Fotos de Perfil"></figure> <div id="NombreYBarra" class="svelte-3ce4jq"><p class="svelte-3ce4jq" data-svelte-h="svelte-1ezix1p">Sinba.ICP</p>  ${validate_component(PorcentBarr, "PorcentBarr").$$render($$result, {}, {}, {})} <div id="textosDeBarra" class="svelte-3ce4jq" data-svelte-h="svelte-2drhwl"><p class="svelte-3ce4jq">Faltan 49 dias</p> <p class="svelte-3ce4jq">Faltan 500 ICP</p></div> <div id="porcentajeAvaladoBarra" class="svelte-3ce4jq" data-svelte-h="svelte-19mfzsv"><p class="svelte-3ce4jq">75% AVALADO</p></div></div></div></div> <div id="TextoSobreProyecto" class="svelte-3ce4jq" data-svelte-h="svelte-12www5n"><p class="svelte-3ce4jq">Un aval de 500 ICP puede ayudar a Siba a poner su negocio de
                reciclaje de comida para las areas de perú</p> <figure id="CajaImgUbicacion" class="svelte-3ce4jq"><img${add_attribute("src", UbicacionImg, 0)} alt="Icono de ubicacion" class="svelte-3ce4jq"> <figcaption class="svelte-3ce4jq">Lima, Perú</figcaption></figure></div> <div id="CajaSinbaImg" class="svelte-3ce4jq" data-svelte-h="svelte-va7zpt"><img${add_attribute("src", Sinba, 0)} alt="" class="svelte-3ce4jq"></div>  <div id="ApoyoAvalesPerson" data-svelte-h="svelte-1x6h7zn"><div class="cajaInfoSinba svelte-3ce4jq"><p class="svelte-3ce4jq">La misión de sinba es darle un nuevo sentido a los residuos,
                    lograr que lo que una vez fue basura hoy se convierta en un
                    vehículo de transformación social y ambiental. Sinba está
                    innovando en la gestión de residuos en Perú, convirtiendo
                    los desechos orgánicos en alimento para cerdos y maximizando
                    el valor de los reciclables inorgánicos en alianza con
                    recicladores formales. Hoy colaboramos con más de 20
                    empresas y rescatamos alrededor de 840 toneladas de residuos
                    orgánicos por año, lo que genera un impacto positivo
                    equivalente a sembrar 36 mil árboles. Pero esto recién
                    empieza! Queremos multiplicar nuestro impacto positivo por
                    10!</p></div> <div id="tituloApoyoAval" class="svelte-3ce4jq"><h4 class="svelte-3ce4jq">Otros avales que apoyaron este proyecto</h4></div> <div id="ImganesApoyoAval" class="svelte-3ce4jq"><div><img${add_attribute("src", apoyo1, 0)} alt="" class="svelte-3ce4jq"> <p class="svelte-3ce4jq">Rally.icp</p></div> <div><img${add_attribute("src", apoyo2, 0)} alt="" class="svelte-3ce4jq"> <p class="svelte-3ce4jq">Renzorosi.icp</p></div> <div><img${add_attribute("src", apoyo3, 0)} alt="" class="svelte-3ce4jq"> <p class="svelte-3ce4jq">Rodrigo.icp</p></div> <div><img${add_attribute("src", apoyo4, 0)} alt="" class="svelte-3ce4jq"> <p class="svelte-3ce4jq">Sebasrojas.icp</p></div></div></div>  <div id="ContenedorDetallesAvalamiento" data-svelte-h="svelte-1n4wlh7"> <div id="TituloAvalamiento" class="svelte-3ce4jq"><h4 class="svelte-3ce4jq">Detalles del Avalamiento</h4></div> <div id="ContDetallesAvalamiento" class="svelte-3ce4jq"> <ul class="svelte-3ce4jq"><li class="svelte-3ce4jq">Tiempo de Avalamiento:</li> <li class="svelte-3ce4jq">Calendario de Reembolso:</li> <li class="svelte-3ce4jq">Fecha de desembolso:</li> <li class="svelte-3ce4jq">Modelo de Financiamiento:</li></ul> <ul class="svelte-3ce4jq"><li class="svelte-3ce4jq">24 meses</li> <li class="svelte-3ce4jq">al final del periódo</li> <li class="svelte-3ce4jq">--</li> <li class="svelte-3ce4jq">flexible</li></ul></div></div></div>  <div id="CajaConvierteAval" class="svelte-3ce4jq"><div class="box"><select name="" id="" class="svelte-3ce4jq"><option value="" class="svelte-3ce4jq" data-svelte-h="svelte-7xrb4r">1 ICP</option><option value="" class="svelte-3ce4jq" data-svelte-h="svelte-jfzj3u">2 ICP</option><option value="" class="svelte-3ce4jq" data-svelte-h="svelte-1idlzch">3 ICP</option><option value="" class="svelte-3ce4jq" data-svelte-h="svelte-1m46i7c">4 ICP</option><option value="" class="svelte-3ce4jq" data-svelte-h="svelte-1j20hun">5 ICP</option></select></div> ${validate_component(TransferPlug, "TransferPlug").$$render(
    $$result,
    {
      amount: 1,
      principalId: project.principalId
    },
    {},
    {}
  )}</div> </main>`;
});
export {
  Page as default
};
