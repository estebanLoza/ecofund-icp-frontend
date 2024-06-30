import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.af380631.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad4d210.js"];
export const stylesheets = ["_app/immutable/assets/0.d42ee3f5.css"];
export const fonts = [];
