

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/proyecto/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.16c01616.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad4d210.js"];
export const stylesheets = ["_app/immutable/assets/3.addea4d9.css"];
export const fonts = [];
