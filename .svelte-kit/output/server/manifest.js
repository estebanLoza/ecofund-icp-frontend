export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ic-assets.json5","favicon.ico","logo2.svg","logoBurbujas.png"]),
	mimeTypes: {".json5":"application/json5",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.668c1304.js","app":"_app/immutable/entry/app.6efcf26c.js","imports":["_app/immutable/entry/start.668c1304.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/singletons.03f0ca5a.js","_app/immutable/chunks/index.8fdba56f.js","_app/immutable/entry/app.6efcf26c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9015254f.js","_app/immutable/chunks/index.2e7ab4fa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
