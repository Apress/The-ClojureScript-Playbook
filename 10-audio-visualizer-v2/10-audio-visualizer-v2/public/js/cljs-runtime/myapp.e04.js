goog.provide('myapp.e04');
if((typeof myapp !== 'undefined') && (typeof myapp.e04 !== 'undefined') && (typeof myapp.e04.state !== 'undefined')){
} else {
myapp.e04.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),null,new cljs.core.Keyword(null,"analyser","analyser",-110219096),null,new cljs.core.Keyword(null,"data-array","data-array",371846239),null,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),null], null));
}
myapp.e04.get_audio_context = (function myapp$e04$get_audio_context(){
var or__5142__auto__ = new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var ctx = (new AudioContext());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.e04.state,cljs.core.assoc,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),ctx);

return ctx;
}
});
myapp.e04.draw_frequency_loop_BANG_ = (function myapp$e04$draw_frequency_loop_BANG_(){
var canvas = document.getElementById("waveform");
var ctx = canvas.getContext("2d");
var temp__5825__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state));
if(cljs.core.truth_(temp__5825__auto__)){
var analyser = temp__5825__auto__;
var data_array = new cljs.core.Keyword(null,"data-array","data-array",371846239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state));
var draw = (function myapp$e04$draw_frequency_loop_BANG__$_draw(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.e04.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e04$draw_frequency_loop_BANG__$_draw));

analyser.getByteFrequencyData(data_array);

var w = canvas.width;
var h = canvas.height;
var center_x = (w / (2));
var center_y = (h / (2));
var max_radius = cljs.core.min.cljs$core$IFn$_invoke$arity$2((w / (2)),(h / (2)));
(ctx.fillStyle = "#000");

ctx.fillRect((0),(0),w,h);

(ctx.lineWidth = (2));

var num_bars = data_array.length;
var angle_step = (((2) * Math.PI) / num_bars);
ctx.beginPath();

var i = (0);
while(true){
if((i < num_bars)){
var v_22243 = (data_array[i]);
var norm_22244 = (v_22243 / 255.0);
var bar_length_22245 = ((2) * ((50) + (norm_22244 * max_radius)));
var angle_22246 = (i * angle_step);
var x_end_22247 = (center_x + (bar_length_22245 * Math.cos(angle_22246)));
var y_end_22248 = (center_y + (bar_length_22245 * Math.sin(angle_22246)));
var hue_22249 = cljs.core.mod((((360) * (i / num_bars)) + (120)),(360));
var lightness_22250 = ((20) + ((50) * norm_22244));
(ctx.strokeStyle = (""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue_22249)+", 100%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness_22250)+"%)"));

ctx.beginPath();

ctx.moveTo(center_x,center_y);

ctx.lineTo(x_end_22247,y_end_22248);

ctx.stroke();

var G__22257 = (i + (1));
i = G__22257;
continue;
} else {
return null;
}
break;
}
});
return draw();
} else {
return null;
}
});
myapp.e04.draw_loop_BANG_ = (function myapp$e04$draw_loop_BANG_(){
var canvas = document.getElementById("waveform");
var ctx = canvas.getContext("2d");
var analyser = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state));
var data_array = new cljs.core.Keyword(null,"data-array","data-array",371846239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state));
var w = canvas.width;
var h = canvas.height;
if(cljs.core.truth_(analyser)){
var draw = (function myapp$e04$draw_loop_BANG__$_draw(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.e04.state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),requestAnimationFrame(myapp$e04$draw_loop_BANG__$_draw));

analyser.getByteTimeDomainData(data_array);

(ctx.fillStyle = "#111");

ctx.fillRect((0),(0),w,h);

(ctx.lineWidth = (2));

(ctx.strokeStyle = "#00FFAA");

ctx.beginPath();

var slice_22262 = (w / data_array.length);
var i_22263 = (0);
var x_22264 = (0);
while(true){
if((i_22263 < data_array.length)){
var v_22265 = ((data_array[i_22263]) / 128.0);
var y_22266 = (v_22265 * (h / (2)));
if((i_22263 === (0))){
ctx.moveTo(x_22264,y_22266);
} else {
ctx.lineTo(x_22264,y_22266);
}

var G__22267 = (i_22263 + (1));
var G__22268 = (x_22264 + slice_22262);
i_22263 = G__22267;
x_22264 = G__22268;
continue;
} else {
}
break;
}

ctx.lineTo(w,(h / (2)));

return ctx.stroke();
});
return draw();
} else {
return null;
}
});
myapp.e04.start_recording_BANG_ = (function myapp$e04$start_recording_BANG_(){
if(cljs.core.not(new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.e04.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.e04.state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);

return navigator.mediaDevices.getUserMedia(({"audio": true})).then((function (stream){
var ctx = myapp.e04.get_audio_context();
var source = ctx.createMediaStreamSource(stream);
var analyser = ctx.createAnalyser();
(analyser.fftSize = (2048));

source.connect(analyser,ctx.destination);

var data_array = (new Uint8Array(analyser.frequencyBinCount));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.e04.state,cljs.core.assoc,new cljs.core.Keyword(null,"analyser","analyser",-110219096),analyser,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-array","data-array",371846239),data_array], 0));

return myapp.e04.draw_frequency_loop_BANG_();
}));
} else {
return null;
}
});
myapp.e04.resize_canvas_BANG_ = (function myapp$e04$resize_canvas_BANG_(){
var canvas = document.getElementById("waveform");
(canvas.width = window.innerWidth);

return (canvas.height = window.innerHeight);
});
myapp.e04.init = (function myapp$e04$init(){
myapp.e04.resize_canvas_BANG_();

window.addEventListener("resize",myapp.e04.resize_canvas_BANG_);

return document.addEventListener("click",(function (_){
return myapp.e04.start_recording_BANG_();
}));
});
goog.exportSymbol('myapp.e04.init', myapp.e04.init);

//# sourceMappingURL=myapp.e04.js.map
