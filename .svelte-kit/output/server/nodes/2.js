

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9204e273.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad4d210.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.f6a2f505.css"];
export const fonts = [];