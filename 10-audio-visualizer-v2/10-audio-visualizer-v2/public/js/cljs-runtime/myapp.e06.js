goog.provide('myapp.e06');
myapp.e06.create_particle = (function myapp$e06$create_particle(x,y,vx,vy,color,life){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"vx","vx",-1685168462),vx,new cljs.core.Keyword(null,"vy","vy",-2018509997),vy,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"life","life",939004719),life], null);
});
myapp.e06.update_particle = (function myapp$e06$update_particle(p){
if((new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(p) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._PLUS_,0.2),new cljs.core.Keyword(null,"life","life",939004719),cljs.core._,0.01);
} else {
return null;
}
});
myapp.e06.update_particles_BANG_ = (function myapp$e06$update_particles_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"particles","particles",801881788),(function (particles){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(myapp.e06.update_particle,particles));
}));
});
myapp.e06.draw_particles_BANG_ = (function myapp$e06$draw_particles_BANG_(ctx){
var seq__22258_22308 = cljs.core.seq(new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)));
var chunk__22259_22309 = null;
var count__22260_22310 = (0);
var i__22261_22311 = (0);
while(true){
if((i__22261_22311 < count__22260_22310)){
var p_22314 = chunk__22259_22309.cljs$core$IIndexed$_nth$arity$2(null,i__22261_22311);
(ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p_22314));

(ctx.globalAlpha = new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(p_22314));

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_22314),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_22314),(4),(4));


var G__22315 = seq__22258_22308;
var G__22316 = chunk__22259_22309;
var G__22317 = count__22260_22310;
var G__22318 = (i__22261_22311 + (1));
seq__22258_22308 = G__22315;
chunk__22259_22309 = G__22316;
count__22260_22310 = G__22317;
i__22261_22311 = G__22318;
continue;
} else {
var temp__5825__auto___22321 = cljs.core.seq(seq__22258_22308);
if(temp__5825__auto___22321){
var seq__22258_22322__$1 = temp__5825__auto___22321;
if(cljs.core.chunked_seq_QMARK_(seq__22258_22322__$1)){
var c__5673__auto___22323 = cljs.core.chunk_first(seq__22258_22322__$1);
var G__22324 = cljs.core.chunk_rest(seq__22258_22322__$1);
var G__22325 = c__5673__auto___22323;
var G__22326 = cljs.core.count(c__5673__auto___22323);
var G__22327 = (0);
seq__22258_22308 = G__22324;
chunk__22259_22309 = G__22325;
count__22260_22310 = G__22326;
i__22261_22311 = G__22327;
continue;
} else {
var p_22328 = cljs.core.first(seq__22258_22322__$1);
(ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p_22328));

(ctx.globalAlpha = new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(p_22328));

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_22328),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_22328),(4),(4));


var G__22329 = cljs.core.next(seq__22258_22322__$1);
var G__22330 = null;
var G__22331 = (0);
var G__22332 = (0);
seq__22258_22308 = G__22329;
chunk__22259_22309 = G__22330;
count__22260_22310 = G__22331;
i__22261_22311 = G__22332;
continue;
}
} else {
}
}
break;
}

return (ctx.globalAlpha = 1.0);
});
myapp.e06.spawn_particles_BANG_ = (function myapp$e06$spawn_particles_BANG_(freq_data,canvas_width,canvas_height){

var bass = ((freq_data[(2)]) / 255.0);
var mid = ((freq_data[(128)]) / 255.0);
var high = ((freq_data[(500)]) / 255.0);
var sensitivity = new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var bass_count = ((((30) * bass) * sensitivity) | 0);
var mid_count = ((((15) * mid) * sensitivity) | 0);
var high_count = ((((20) * high) * sensitivity) | 0);
var n__5741__auto___22333 = bass_count;
var __22334 = (0);
while(true){
if((__22334 < n__5741__auto___22333)){
var angle_22335 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((2) * Math.PI));
var speed_22336 = ((3) + ((6) * cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.3,bass)));
var vx_22337 = (speed_22336 * Math.cos(angle_22335));
var vy_22338 = (speed_22336 * Math.sin(angle_22335));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([myapp.e06.create_particle((canvas_width / (2)),(canvas_height / (2)),vx_22337,vy_22338,"rgba(255, 100, 100, 0.8)",1.0)], 0));

var G__22339 = (__22334 + (1));
__22334 = G__22339;
continue;
} else {
}
break;
}

var n__5741__auto___22340 = mid_count;
var __22341 = (0);
while(true){
if((__22341 < n__5741__auto___22340)){
var from_left_22342 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5);
var x_22343 = ((from_left_22342)?(0):canvas_width);
var y_22344 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * canvas_height);
var vx_22345 = ((from_left_22342)?((6) * cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.3,mid)):((-6) * cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.3,mid)));
var vy_22346 = ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5) * (4));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([myapp.e06.create_particle(x_22343,y_22344,vx_22345,vy_22346,"rgba(100, 255, 255, 0.8)",0.8)], 0));

var G__22354 = (__22341 + (1));
__22341 = G__22354;
continue;
} else {
}
break;
}

var n__5741__auto__ = high_count;
var _ = (0);
while(true){
if((_ < n__5741__auto__)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([myapp.e06.create_particle((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * canvas_width),(0),((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5) * (2)),((4) * cljs.core.max.cljs$core$IFn$_invoke$arity$2(0.3,high)),"rgba(255, 255, 100, 0.8)",0.7)], 0));

var G__22361 = (_ + (1));
_ = G__22361;
continue;
} else {
return null;
}
break;
}
});
myapp.e06.draw_loop_BANG_ = (function myapp$e06$draw_loop_BANG_(){
var canvas = myapp.state.get_canvas();
var ctx = myapp.state.get_canvas_context();
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var freq_data = new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var w = canvas.width;
var h = canvas.height;
var draw = (function myapp$e06$draw_loop_BANG__$_draw(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)),new cljs.core.Keyword(null,"particles","particles",801881788))){
analyser.getByteFrequencyData(freq_data);

(ctx.fillStyle = "rgba(0, 0, 0, 0.1)");

ctx.fillRect((0),(0),w,h);

myapp.e06.update_particles_BANG_();

myapp.e06.spawn_particles_BANG_(freq_data,w,h);

myapp.e06.draw_particles_BANG_(ctx);

myapp.state.measure_fps_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"show-stats","show-stats",455927958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
(ctx.fillStyle = "rgba(0, 255, 180, 0.8)");

(ctx.font = "16px monospace");

ctx.fillText((""+"FPS: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))),(20),(30));

ctx.fillText((""+"Particles: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state))))),(20),(50));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e06$draw_loop_BANG__$_draw));
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
 * Start particle visualizer
 */
myapp.e06.start_BANG_ = (function myapp$e06$start_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.PersistentVector.EMPTY);

var temp__5825__auto__ = myapp.state.setup_analyser_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var _analyser = temp__5825__auto__;
return myapp.e06.draw_loop_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=myapp.e06.js.map
