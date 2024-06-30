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
		client: {"start":"_app/immutable/entry/start.f6f7a93b.js","app":"_app/immutable/entry/app.8ce66d78.js","imports":["_app/immutable/entry/start.f6f7a93b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.bdb9597e.js","_app/immutable/entry/app.8ce66d78.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.cad4d210.js"],"stylesheets":[],"fonts":[]},
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
