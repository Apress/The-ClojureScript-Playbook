goog.provide('myapp.e07');
myapp.e07.spectrogram_width = (128);
myapp.e07.init_spectrogram_buffer_BANG_ = (function myapp$e07$init_spectrogram_buffer_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"spectrogram-buffer","spectrogram-buffer",729323964),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(myapp.e07.spectrogram_width,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((128),(0))))));
});
/**
 * Update spectrogram buffer with new frequency data (downsampled to 128 bins)
 */
myapp.e07.update_spectrogram_BANG_ = (function myapp$e07$update_spectrogram_BANG_(freq_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"spectrogram-buffer","spectrogram-buffer",729323964),(function (buffer){
var downsampled = cljs.core.vec((function (){var iter__5628__auto__ = (function myapp$e07$update_spectrogram_BANG__$_iter__22239(s__22240){
return (new cljs.core.LazySeq(null,(function (){
var s__22240__$1 = s__22240;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22240__$1);
if(temp__5825__auto__){
var s__22240__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22240__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__22240__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__22242 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__22241 = (0);
while(true){
if((i__22241 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__22241);
cljs.core.chunk_append(b__22242,(function (){var start = (i * (8));
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__22241,start,i,c__5626__auto__,size__5627__auto__,b__22242,s__22240__$2,temp__5825__auto__){
return (function (p1__22238_SHARP_){
return (freq_data[(start + p1__22238_SHARP_)]);
});})(i__22241,start,i,c__5626__auto__,size__5627__auto__,b__22242,s__22240__$2,temp__5825__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
var avg = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,group) / (8));
return (avg | 0);
})());

var G__22362 = (i__22241 + (1));
i__22241 = G__22362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22242),myapp$e07$update_spectrogram_BANG__$_iter__22239(cljs.core.chunk_rest(s__22240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22242),null);
}
} else {
var i = cljs.core.first(s__22240__$2);
return cljs.core.cons((function (){var start = (i * (8));
var group = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start,i,s__22240__$2,temp__5825__auto__){
return (function (p1__22238_SHARP_){
return (freq_data[(start + p1__22238_SHARP_)]);
});})(start,i,s__22240__$2,temp__5825__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
var avg = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,group) / (8));
return (avg | 0);
})(),myapp$e07$update_spectrogram_BANG__$_iter__22239(cljs.core.rest(s__22240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((128)));
})());
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(buffer,(1)),downsampled);
}));
});
myapp.e07.value__GT_color = (function myapp$e07$value__GT_color(value,sensitivity){
var v = ((value * sensitivity) * ((1) / 255.0));
var v__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(1.0,v);
if((v__$1 < 0.2)){
return (""+"rgb(0, 0, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v__$1 * (5)) * (100)) | 0))+")");
} else {
if((v__$1 < 0.4)){
return (""+"rgb(0, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((v__$1 - 0.2) * (5)) * (255)) | 0))+", 150)");
} else {
if((v__$1 < 0.6)){
return (""+"rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((v__$1 - 0.4) * (5)) * (255)) | 0))+", 200, 150)");
} else {
if((v__$1 < 0.8)){
return (""+"rgb(255, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0.8 - v__$1) * (5)) * (255)) | 0))+", 0)");
} else {
return (""+"rgb(255, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1.0 - v__$1) * (5)) * (120)) | 0))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1.0 - v__$1) * (5)) * (120)) | 0))+")");

}
}
}
}
});
if((typeof myapp !== 'undefined') && (typeof myapp.e07 !== 'undefined') && (typeof myapp.e07.offscreen_canvas !== 'undefined')){
} else {
myapp.e07.offscreen_canvas = (function (){var c = document.createElement("canvas");
(c.width = myapp.e07.spectrogram_width);

(c.height = (128));

return c;
})();
}
myapp.e07.draw_newest_slice_BANG_ = (function myapp$e07$draw_newest_slice_BANG_(freq_slice,sensitivity){
var ctx = myapp.e07.offscreen_canvas.getContext("2d",({"alpha": false}));
var w = myapp.e07.offscreen_canvas.width;
var h = myapp.e07.offscreen_canvas.height;
ctx.drawImage(myapp.e07.offscreen_canvas,(-1),(0));

var x = (w - (1));
var seq__22269 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((128)));
var chunk__22270 = null;
var count__22271 = (0);
var i__22272 = (0);
while(true){
if((i__22272 < count__22271)){
var f = chunk__22270.cljs$core$IIndexed$_nth$arity$2(null,i__22272);
var value_22363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(freq_slice,f,(0));
var color_22364 = myapp.e07.value__GT_color(value_22363,sensitivity);
var y_22365 = (h - (f + (1)));
(ctx.fillStyle = color_22364);

ctx.fillRect(x,y_22365,(1),(1));


var G__22366 = seq__22269;
var G__22367 = chunk__22270;
var G__22368 = count__22271;
var G__22369 = (i__22272 + (1));
seq__22269 = G__22366;
chunk__22270 = G__22367;
count__22271 = G__22368;
i__22272 = G__22369;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22269);
if(temp__5825__auto__){
var seq__22269__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22269__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__22269__$1);
var G__22370 = cljs.core.chunk_rest(seq__22269__$1);
var G__22371 = c__5673__auto__;
var G__22372 = cljs.core.count(c__5673__auto__);
var G__22373 = (0);
seq__22269 = G__22370;
chunk__22270 = G__22371;
count__22271 = G__22372;
i__22272 = G__22373;
continue;
} else {
var f = cljs.core.first(seq__22269__$1);
var value_22374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(freq_slice,f,(0));
var color_22375 = myapp.e07.value__GT_color(value_22374,sensitivity);
var y_22376 = (h - (f + (1)));
(ctx.fillStyle = color_22375);

ctx.fillRect(x,y_22376,(1),(1));


var G__22377 = cljs.core.next(seq__22269__$1);
var G__22378 = null;
var G__22379 = (0);
var G__22380 = (0);
seq__22269 = G__22377;
chunk__22270 = G__22378;
count__22271 = G__22379;
i__22272 = G__22380;
continue;
}
} else {
return null;
}
}
break;
}
});
myapp.e07.draw_spectrogram_BANG_ = (function myapp$e07$draw_spectrogram_BANG_(ctx,width,height){
(ctx.imageSmoothingEnabled = false);

return ctx.drawImage(myapp.e07.offscreen_canvas,(0),(0),myapp.e07.spectrogram_width,(128),(0),(0),width,height);
});
myapp.e07.draw_frequency_overlay_BANG_ = (function myapp$e07$draw_frequency_overlay_BANG_(ctx,width,height,freq_data){
(ctx.strokeStyle = "rgba(255, 255, 255, 0.8)");

(ctx.lineWidth = (2));

ctx.beginPath();

var num_bars_22381 = freq_data.length;
var bar_width_22382 = (width / num_bars_22381);
var i_22383 = (0);
while(true){
if((i_22383 < num_bars_22381)){
var v_22384 = (freq_data[i_22383]);
var x_22385 = (i_22383 * bar_width_22382);
var y_22386 = (height - ((v_22384 / 255.0) * (height / (2))));
if((i_22383 === (0))){
ctx.moveTo(x_22385,y_22386);
} else {
ctx.lineTo(x_22385,y_22386);
}

var G__22387 = (i_22383 + (1));
i_22383 = G__22387;
continue;
} else {
}
break;
}

return ctx.stroke();
});
myapp.e07.draw_loop_BANG_ = (function myapp$e07$draw_loop_BANG_(){
var canvas = myapp.state.get_canvas();
var ctx = myapp.state.get_canvas_context();
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var freq_data = new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var w = canvas.width;
var h = canvas.height;
var draw = (function myapp$e07$draw_loop_BANG__$_draw(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)),new cljs.core.Keyword(null,"spectrogram","spectrogram",950500999))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e07$draw_loop_BANG__$_draw));

analyser.getByteFrequencyData(freq_data);

myapp.e07.update_spectrogram_BANG_(freq_data);

myapp.e07.draw_newest_slice_BANG_(cljs.core.peek(new cljs.core.Keyword(null,"spectrogram-buffer","spectrogram-buffer",729323964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state))),new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)));

myapp.e07.draw_spectrogram_BANG_(ctx,w,h);

myapp.e07.draw_frequency_overlay_BANG_(ctx,w,h,freq_data);

(ctx.strokeStyle = "rgba(255, 255, 255, 0.1)");

(ctx.lineWidth = (1));

var seq__22357_22388 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),h,(50)));
var chunk__22358_22389 = null;
var count__22359_22390 = (0);
var i__22360_22391 = (0);
while(true){
if((i__22360_22391 < count__22359_22390)){
var i_22392 = chunk__22358_22389.cljs$core$IIndexed$_nth$arity$2(null,i__22360_22391);
ctx.beginPath();

ctx.moveTo((0),i_22392);

ctx.lineTo(w,i_22392);

ctx.stroke();


var G__22393 = seq__22357_22388;
var G__22394 = chunk__22358_22389;
var G__22395 = count__22359_22390;
var G__22396 = (i__22360_22391 + (1));
seq__22357_22388 = G__22393;
chunk__22358_22389 = G__22394;
count__22359_22390 = G__22395;
i__22360_22391 = G__22396;
continue;
} else {
var temp__5825__auto___22397__$1 = cljs.core.seq(seq__22357_22388);
if(temp__5825__auto___22397__$1){
var seq__22357_22398__$1 = temp__5825__auto___22397__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22357_22398__$1)){
var c__5673__auto___22399 = cljs.core.chunk_first(seq__22357_22398__$1);
var G__22400 = cljs.core.chunk_rest(seq__22357_22398__$1);
var G__22401 = c__5673__auto___22399;
var G__22402 = cljs.core.count(c__5673__auto___22399);
var G__22403 = (0);
seq__22357_22388 = G__22400;
chunk__22358_22389 = G__22401;
count__22359_22390 = G__22402;
i__22360_22391 = G__22403;
continue;
} else {
var i_22404 = cljs.core.first(seq__22357_22398__$1);
ctx.beginPath();

ctx.moveTo((0),i_22404);

ctx.lineTo(w,i_22404);

ctx.stroke();


var G__22405 = cljs.core.next(seq__22357_22398__$1);
var G__22406 = null;
var G__22407 = (0);
var G__22408 = (0);
seq__22357_22388 = G__22405;
chunk__22358_22389 = G__22406;
count__22359_22390 = G__22407;
i__22360_22391 = G__22408;
continue;
}
} else {
}
}
break;
}

myapp.state.measure_fps_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"show-stats","show-stats",455927958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
(ctx.fillStyle = "rgba(0, 0, 0, 0.7)");

ctx.fillRect((10),(10),(200),(80));

(ctx.fillStyle = "rgba(0, 255, 180, 1)");

(ctx.font = "14px monospace");

ctx.fillText("SPECTROGRAM MODE",(20),(30));

ctx.fillText((""+"FPS: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))),(20),(50));

return ctx.fillText((""+"Sensitivity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)).toFixed((2)))),(20),(70));
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
myapp.e07.start_BANG_ = (function myapp$e07$start_BANG_(){
myapp.e07.init_spectrogram_buffer_BANG_();

var temp__5825__auto__ = myapp.state.setup_analyser_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var _analyser = temp__5825__auto__;
return myapp.e07.draw_loop_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=myapp.e07.js.map
