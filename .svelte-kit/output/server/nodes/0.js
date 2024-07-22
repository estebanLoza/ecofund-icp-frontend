import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.709d7c9c.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js","_app/immutable/chunks/TransferPlug.svelte_svelte_type_style_lang.ff2a0661.js"];
export const stylesheets = ["_app/immutable/assets/0.8c0c8403.css","_app/immutable/assets/TransferPlug.5e19a6f5.css"];
export const fonts = [];
