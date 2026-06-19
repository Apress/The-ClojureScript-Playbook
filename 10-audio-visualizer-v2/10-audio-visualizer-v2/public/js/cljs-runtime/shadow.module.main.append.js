
shadow.cljs.devtools.client.env.module_loaded('main');

try { myapp.core.init(); } catch (e) { console.error("An error occurred when calling (myapp.core/init)"); console.error(e); }