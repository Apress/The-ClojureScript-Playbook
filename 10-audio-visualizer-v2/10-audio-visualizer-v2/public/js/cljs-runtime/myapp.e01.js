goog.provide('myapp.e01');
myapp.e01.draw_loop_BANG_ = (function myapp$e01$draw_loop_BANG_(){
var canvas = myapp.state.get_canvas();
var ctx = myapp.state.get_canvas_context();
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var data_array = new cljs.core.Keyword(null,"data-array-time","data-array-time",-143069900).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var w = canvas.width;
var h = canvas.height;
var draw = (function myapp$e01$draw_loop_BANG__$_draw(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)),new cljs.core.Keyword(null,"waveform","waveform",1355199399))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e01$draw_loop_BANG__$_draw));

analyser.getByteTimeDomainData(data_array);

myapp.state.clear_canvas_BANG_(ctx,w,h);

(ctx.lineWidth = (2));

(ctx.strokeStyle = "#00FFAA");

ctx.beginPath();

var slice_22347 = (w / data_array.length);
var i_22348 = (0);
var x_22349 = (0);
while(true){
if((i_22348 < data_array.length)){
var v_22350 = ((data_array[i_22348]) / 128.0);
var deviation_raw_22351 = (((v_22350 - (1)) * h) * (2));
var deviation_22352 = ((Math.tanh((deviation_raw_22351 / h)) * h) * 0.8);
var y_22353 = ((h / (2)) + deviation_22352);
if((i_22348 === (0))){
ctx.moveTo(x_22349,y_22353);
} else {
ctx.lineTo(x_22349,y_22353);
}

var G__22355 = (i_22348 + (1));
var G__22356 = (x_22349 + slice_22347);
i_22348 = G__22355;
x_22349 = G__22356;
continue;
} else {
}
break;
}

ctx.lineTo(w,(h / (2)));

ctx.stroke();

myapp.state.measure_fps_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"show-stats","show-stats",455927958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
(ctx.fillStyle = "rgba(0, 255, 180, 0.8)");

(ctx.font = "16px monospace");

return ctx.fillText((""+"FPS: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))),(20),(30));
} else {
return null;
}
} else {
return null;
}
});
return draw();
} else {
return null;
}
});
/**
 * Start waveform visualizer
 */
myapp.e01.start_BANG_ = (function myapp$e01$start_BANG_(){
var temp__5825__auto__ = myapp.state.setup_analyser_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
return myapp.e01.draw_loop_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=myapp.e01.js.map
