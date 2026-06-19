goog.provide('myapp.core');
myapp.core.handle_keydown_BANG_ = (function myapp$core$handle_keydown_BANG_(e){
var key = e.key;
var G__22456 = key;
switch (G__22456) {
case "1":
return myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"waveform","waveform",1355199399));

break;
case "2":
return myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"bars","bars",-586907130));

break;
case "3":
return myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"circular","circular",-1815834918));

break;
case "4":
return myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"particles","particles",801881788));

break;
case "5":
return myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"spectrogram","spectrogram",950500999));

break;
case " ":
e.preventDefault();

var ctx = new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(ctx)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ctx.state,"running")){
return ctx.suspend();
} else {
return ctx.resume();
}
} else {
return null;
}

break;
case "f":
e.preventDefault();

if(cljs.core.truth_(document.fullscreenElement)){
return document.exitFullscreen();
} else {
return document.querySelector("body").requestFullscreen();
}

break;
case "+":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(function (p1__22454_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(3.0,(p1__22454_SHARP_ + 0.1));
}));

break;
case "-":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(function (p1__22455_SHARP_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.1,(p1__22455_SHARP_ - 0.1));
}));

break;
case "s":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"show-stats","show-stats",455927958),cljs.core.not);

break;
case "h":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"show-ui","show-ui",2128570639),cljs.core.not);

break;
default:
return null;

}
});
/**
 * Initialize the application
 */
myapp.core.init = (function myapp$core$init(){
myapp.state.resize_canvas_BANG_();

window.addEventListener("resize",myapp.state.resize_canvas_BANG_);

window.addEventListener("keydown",myapp.core.handle_keydown_BANG_);

myapp.e08.mount_ui_BANG_();

myapp.e08.start_visualizer_BANG_(new cljs.core.Keyword(null,"circular","circular",-1815834918));

return console.log("\uD83C\uDFB5 Audio Visualizer initialized!");
});
goog.exportSymbol('myapp.core.init', myapp.core.init);

//# sourceMappingURL=myapp.core.js.map
