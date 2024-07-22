

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/carbon/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.29430949.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/index.8fdba56f.js"];
export const stylesheets = [];
export const fonts = [];
