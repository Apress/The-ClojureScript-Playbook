goog.provide('myapp.e02');
myapp.e02.draw_frequency_loop_BANG_ = (function myapp$e02$draw_frequency_loop_BANG_(){
var canvas = myapp.state.get_canvas();
var ctx = myapp.state.get_canvas_context();
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var data_array = new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var w = canvas.width;
var h = canvas.height;
var draw = (function myapp$e02$draw_frequency_loop_BANG__$_draw(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)),new cljs.core.Keyword(null,"bars","bars",-586907130))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e02$draw_frequency_loop_BANG__$_draw));

analyser.getByteFrequencyData(data_array);

myapp.state.clear_canvas_BANG_(ctx,w,h);

var num_bars_22301 = data_array.length;
var bar_width_22302 = (w / num_bars_22301);
var bar_gap_22303 = (1);
var i_22304 = (0);
var x_22305 = (0);
while(true){
if((i_22304 < num_bars_22301)){
var v_22306 = (data_array[i_22304]);
var bar_height_22307 = (v_22306 * (h / (256)));
var hue_22312 = ((360) * (i_22304 / num_bars_22301));
var brightness_22313 = ((50) + ((20) * (v_22306 / (255))));
(ctx.fillStyle = (""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue_22312)+", 100%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(brightness_22313)+"%)"));

(ctx.shadowBlur = (15));

(ctx.shadowColor = (""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((360) * (i_22304 / num_bars_22301)))+", 100%, 60%)"));

ctx.fillRect(x_22305,(h - bar_height_22307),(bar_width_22302 - bar_gap_22303),bar_height_22307);

var G__22319 = (i_22304 + (1));
var G__22320 = (x_22305 + bar_width_22302);
i_22304 = G__22319;
x_22305 = G__22320;
continue;
} else {
}
break;
}

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
 * Start frequency bars visualizer
 */
myapp.e02.start_BANG_ = (function myapp$e02$start_BANG_(){
var temp__5825__auto__ = myapp.state.setup_analyser_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
return myapp.e02.draw_frequency_loop_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=myapp.e02.js.map
