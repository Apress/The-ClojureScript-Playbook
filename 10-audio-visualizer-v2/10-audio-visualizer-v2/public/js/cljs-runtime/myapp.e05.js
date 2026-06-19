goog.provide('myapp.e05');
myapp.e05.draw_frequency_loop_BANG_ = (function myapp$e05$draw_frequency_loop_BANG_(){
var canvas = myapp.state.get_canvas();
var ctx = myapp.state.get_canvas_context();
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var data_array = new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var draw = (function myapp$e05$draw_frequency_loop_BANG__$_draw(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)),new cljs.core.Keyword(null,"circular","circular",-1815834918))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e05$draw_frequency_loop_BANG__$_draw));

analyser.getByteFrequencyData(data_array);

var w = canvas.width;
var h = canvas.height;
var center_x = (w / (2));
var center_y = (h / (2));
var max_radius = cljs.core.min.cljs$core$IFn$_invoke$arity$2((w / (2)),(h / (2)));
(ctx.fillStyle = "#000");

ctx.fillRect((0),(0),w,h);

var num_bars = data_array.length;
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22282_SHARP_){
return (data_array[p1__22282_SHARP_]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_bars)));
var avg = (sum / num_bars);
var norm = (avg / 255.0);
var base_inner_radius = ((20) + (norm * (80)));
(ctx.shadowBlur = (0));

(ctx.shadowColor = "transparent");

(ctx.lineWidth = (2));

var angle_step_22288 = (((2) * Math.PI) / num_bars);
var i_22289 = (0);
while(true){
if((i_22289 < num_bars)){
var v_22290 = (data_array[i_22289]);
var bin_norm_22291 = (v_22290 / 255.0);
var bar_length_22292 = (0.85 * ((50) + (bin_norm_22291 * max_radius)));
var angle_22293 = (i_22289 * angle_step_22288);
var x_start_22294 = (center_x + (base_inner_radius * Math.cos(angle_22293)));
var y_start_22295 = (center_y + (base_inner_radius * Math.sin(angle_22293)));
var x_end_22296 = (center_x + (bar_length_22292 * Math.cos(angle_22293)));
var y_end_22297 = (center_y + (bar_length_22292 * Math.sin(angle_22293)));
var hue_22298 = cljs.core.mod(((360) * (i_22289 / num_bars)),(360));
var lightness_22299 = ((30) + ((50) * bin_norm_22291));
(ctx.strokeStyle = (""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue_22298)+", 100%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness_22299)+"%)"));

ctx.beginPath();

ctx.moveTo(x_start_22294,y_start_22295);

ctx.lineTo(x_end_22296,y_end_22297);

ctx.stroke();

var G__22300 = (i_22289 + (1));
i_22289 = G__22300;
continue;
} else {
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"show-stats","show-stats",455927958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
(ctx.strokeStyle = "rgba(0, 255, 180, 0.2)");

(ctx.lineWidth = (1));

ctx.beginPath();

ctx.moveTo(center_x,(0));

ctx.lineTo(center_x,h);

ctx.moveTo((0),center_y);

ctx.lineTo(w,center_y);

ctx.stroke();

(ctx.fillStyle = "rgba(0, 255, 180, 0.9)");

(ctx.font = "bold 48px monospace");

(ctx.textAlign = "center");

ctx.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((avg | 0))),center_x,center_y);

(ctx.font = "14px monospace");

(ctx.textAlign = "left");

ctx.fillText((""+"FPS: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))),(20),(30));

ctx.fillText((""+"Avg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((avg | 0))),(20),(50));

return ctx.fillText((""+"Peak: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22283_SHARP_){
return (data_array[p1__22283_SHARP_]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_bars))))),(20),(70));
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
 * Start circular spectrum visualizer
 */
myapp.e05.start_BANG_ = (function myapp$e05$start_BANG_(){
var temp__5825__auto__ = myapp.state.setup_analyser_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
return myapp.e05.draw_frequency_loop_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=myapp.e05.js.map
