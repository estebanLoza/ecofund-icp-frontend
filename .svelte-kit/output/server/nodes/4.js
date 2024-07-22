

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/carbon/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.f82523e8.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
