

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/proyecto/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.fb5a3aec.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js","_app/immutable/chunks/Sinba.db790dc8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/TransferPlug.svelte_svelte_type_style_lang.ff2a0661.js"];
export const stylesheets = ["_app/immutable/assets/5.9eb2fa2c.css","_app/immutable/assets/TransferPlug.5e19a6f5.css"];
export const fonts = [];
