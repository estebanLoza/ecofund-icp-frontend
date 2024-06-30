

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9ff80bf8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad4d210.js","_app/immutable/chunks/singletons.bdb9597e.js"];
export const stylesheets = [];
export const fonts = [];
