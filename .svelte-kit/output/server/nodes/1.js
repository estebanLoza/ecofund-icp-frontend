

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c2bd2e64.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js","_app/immutable/chunks/singletons.03f0ca5a.js","_app/immutable/chunks/index.8fdba56f.js"];
export const stylesheets = [];
export const fonts = [];
