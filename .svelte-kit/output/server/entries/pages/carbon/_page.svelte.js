import { c as create_ssr_component, b as compute_rest_props, d as spread, h as escape_object, j as add_classes, f as escape_attribute_value, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const AspectRatio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ratio"]);
  let { ratio = "2x1" } = $$props;
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--aspect-ratio " + (ratio === "2x1" ? "bx--aspect-ratio--2x1" : "") + " " + (ratio === "2x3" ? "bx--aspect-ratio--2x3" : "") + " " + (ratio === "16x9" ? "bx--aspect-ratio--16x9" : "") + " " + (ratio === "4x3" ? "bx--aspect-ratio--4x3" : "") + " " + (ratio === "1x1" ? "bx--aspect-ratio--1x1" : "") + " " + (ratio === "3x4" ? "bx--aspect-ratio--3x4" : "") + " " + (ratio === "3x2" ? "bx--aspect-ratio--3x2" : "") + " " + (ratio === "9x16" ? "bx--aspect-ratio--9x16" : "") + " " + (ratio === "1x2" ? "bx--aspect-ratio--1x2" : "")
  })}><div${add_classes("bx--aspect-ratio--object".trim())}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const AspectRatio$1 = AspectRatio;
const Airplane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M22,31.36c-0.038,0-0.076-0.007-0.114-0.019L16,29.38l-5.886,1.962c-0.11,0.035-0.231,0.018-0.324-0.05	C9.696,31.225,9.64,31.115,9.64,31v-2c0-0.104,0.044-0.202,0.123-0.271l3.877-3.393V5.169c0-1.419,0.594-4.529,2.36-4.529	s2.36,3.11,2.36,4.529v5.166l2.279,1.759V10h0.721v2.65l2.279,1.759V12h0.721v2.965l4.859,3.75c0.089,0.068,0.141,0.174,0.141,0.285	v4.5c0,0.128-0.068,0.246-0.179,0.311c-0.112,0.066-0.247,0.065-0.359,0.003l-10.458-5.916l-0.004,7.439l3.877,3.393	c0.078,0.068,0.123,0.167,0.123,0.271v2c0,0.115-0.056,0.225-0.149,0.292C22.148,31.337,22.074,31.36,22,31.36z M16,28.64	c0.039,0,0.077,0.007,0.114,0.019l5.526,1.843v-1.338l-3.877-3.393c-0.078-0.068-0.123-0.167-0.123-0.271l0.005-8.22	c0-0.128,0.068-0.246,0.179-0.311c0.112-0.064,0.247-0.065,0.359-0.002l10.457,5.916v-3.706l-10.859-8.38	c-0.089-0.068-0.141-0.174-0.141-0.285V5.169c0-1.33-0.562-3.81-1.64-3.81c-1.077,0-1.64,2.48-1.64,3.81V25.5	c0,0.104-0.044,0.202-0.123,0.271l-3.877,3.393v1.338l5.526-1.843C15.923,28.646,15.961,28.64,16,28.64z M3,23.86	c-0.062,0-0.125-0.017-0.18-0.049c-0.111-0.064-0.18-0.183-0.18-0.312V19c0-0.112,0.052-0.218,0.141-0.286l4.859-3.721V12h0.72	v2.441l2.28-1.746V10h0.72v2.873c0,0.112-0.052,0.218-0.141,0.286L3.36,19.178v3.699l8.46-4.884l0.36,0.623l-9,5.195	C3.125,23.844,3.062,23.86,3,23.86z"></path></svg>`;
});
const AiGovernanceModel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M16,31.36c-1.301,0-2.36-1.059-2.36-2.36	s1.059-2.36,2.36-2.36c1.105,0,2.036,0.765,2.291,1.793c4.52-0.83,8.32-4.15,9.739-8.543l0.686,0.221	c-1.508,4.665-5.555,8.185-10.36,9.042C18.276,30.383,17.25,31.36,16,31.36z M16,27.36c-0.904,0-1.64,0.735-1.64,1.64	s0.736,1.64,1.64,1.64c0.904,0,1.64-0.735,1.64-1.64S16.904,27.36,16,27.36z M11.889,28.716c-4.664-1.508-8.184-5.555-9.042-10.36	C1.617,18.276,0.64,17.25,0.64,16c0-1.301,1.059-2.36,2.36-2.36S5.36,14.699,5.36,16c0,1.105-0.765,2.036-1.793,2.291	c0.831,4.52,4.151,8.32,8.544,9.739L11.889,28.716z M3,14.36c-0.904,0-1.64,0.736-1.64,1.64c0,0.904,0.736,1.64,1.64,1.64	S4.64,16.904,4.64,16S3.904,14.36,3,14.36z M16,23.36h-0.001l0,0h-0.001l0,0c-0.001,0-0.001,0-0.002,0l0,0c-0.001,0-0.002,0-0.002,0	h-0.001l0,0c-0.058-0.002-0.114-0.018-0.163-0.045l0,0l0,0l-0.001-0.001l0,0c-0.022-0.013-0.043-0.027-0.063-0.044	c0-0.001,0-0.001,0-0.001s0,0-0.001-0.001l0,0c0,0,0.005,0-0.002-0.001l0,0c-0.011-0.011-0.022-0.021-0.032-0.033l-6.998-7.998	c-0.119-0.135-0.119-0.338,0-0.474l3.5-4c0.068-0.079,0.167-0.123,0.271-0.123h7c0.104,0,0.202,0.044,0.271,0.123l3.5,4	c0.119,0.135,0.119,0.338,0,0.474l-6.998,7.998c-0.01,0.012-0.021,0.022-0.032,0.033l0,0c-0.001,0-0.001,0.001-0.002,0.001l0,0	c0,0.001-0.001,0.001-0.001,0.001s0,0,0,0.001c-0.02,0.017-0.041,0.031-0.063,0.044l0,0c0,0,0,0.001-0.001,0.001l0,0l0,0	c-0.049,0.027-0.105,0.043-0.163,0.045l0,0c0,0,0,0-0.001,0c0,0-0.001,0-0.002,0l0,0c-0.001,0-0.001,0-0.002,0l0,0h-0.001l0,0	C16.001,23.36,16,23.36,16,23.36z M13.52,15.36L16,21.975l2.48-6.615C18.48,15.36,13.52,15.36,13.52,15.36z M19.249,15.36	l-2.218,5.915l5.176-5.915H19.249z M9.793,15.36l5.175,5.915L12.75,15.36H9.793z M19.18,14.64h3.027l-2.87-3.28H16.72L19.18,14.64z M13.72,14.64h4.56L16,11.6L13.72,14.64z M9.793,14.64h3.026l2.46-3.28h-2.616L9.793,14.64z M29,18.36	c-1.302,0-2.36-1.059-2.36-2.36c0-1.105,0.765-2.036,1.793-2.291c-0.83-4.52-4.15-8.32-8.543-9.739l0.221-0.686	c4.665,1.507,8.185,5.554,9.042,10.361c1.23,0.079,2.208,1.105,2.208,2.355C31.36,17.302,30.302,18.36,29,18.36z M29,14.36	c-0.904,0-1.64,0.736-1.64,1.64c0,0.904,0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S29.904,14.36,29,14.36z M3.97,12.111	l-0.686-0.222c1.507-4.664,5.554-8.184,10.361-9.042C13.724,1.617,14.75,0.64,16,0.64c1.302,0,2.36,1.059,2.36,2.36	S17.302,5.36,16,5.36c-1.106,0-2.037-0.765-2.291-1.793C9.188,4.398,5.389,7.718,3.97,12.111z M16,1.36	c-0.904,0-1.64,0.736-1.64,1.64S15.096,4.64,16,4.64c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z"></path></svg>`;
});
const Ai = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path stroke-width="0" d="M17 11L20 11 20 21 17 21 17 23 25 23 25 21 22 21 22 11 25 11 25 9 17 9 17 11zM13 9h-4c-1.103 0-2 .897-2 2v12h2v-5h4v5h2v-12c0-1.103-.897-2-2-2zm-4 7v-5h4v5h-4z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(AspectRatio$1, "AspectRatio").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Airplane, "Airplane").$$render($$result, {}, {}, {})} <br> ${validate_component(AiGovernanceModel, "AiGovernanceModel").$$render($$result, {}, {}, {})} ${validate_component(Ai, "Ai").$$render($$result, {}, {}, {})}`;
    }
  })} `;
});
export {
  Page as default
};
