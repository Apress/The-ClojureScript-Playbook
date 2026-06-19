goog.provide('myapp.state');
if((typeof myapp !== 'undefined') && (typeof myapp.state !== 'undefined') && (typeof myapp.state.app_state !== 'undefined')){
} else {
myapp.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"audio-buffer","audio-buffer",1822789572),new cljs.core.Keyword(null,"media-stream","media-stream",-1237430171),new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),new cljs.core.Keyword(null,"audio-source","audio-source",2004931782),new cljs.core.Keyword(null,"beat-history","beat-history",946692358),new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),new cljs.core.Keyword(null,"analyser","analyser",-110219096),new cljs.core.Keyword(null,"source-type","source-type",-237000407),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"last-beat-time","last-beat-time",401521869),new cljs.core.Keyword(null,"show-ui","show-ui",2128570639),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"started?","started?",-1301062863),new cljs.core.Keyword(null,"current-file","current-file",56284307),new cljs.core.Keyword(null,"data-array-time","data-array-time",-143069900),new cljs.core.Keyword(null,"show-stats","show-stats",455927958),new cljs.core.Keyword(null,"mini-mode","mini-mode",226627990),new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512),new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"spectrogram-buffer","spectrogram-buffer",729323964),new cljs.core.Keyword(null,"particles","particles",801881788)],[null,null,null,null,cljs.core.PersistentVector.EMPTY,1.0,null,new cljs.core.Keyword(null,"microphone","microphone",472061660),new cljs.core.Keyword(null,"rainbow","rainbow",1752920266),new cljs.core.Keyword(null,"circular","circular",-1815834918),(0),true,(60),false,null,null,true,false,null,(0),null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY]));
}
myapp.state.get_audio_context = (function myapp$state$get_audio_context(){
var or__5142__auto__ = new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var ctx = (new AudioContext());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),ctx);

return ctx;
}
});
myapp.state.setup_analyser_BANG_ = (function myapp$state$setup_analyser_BANG_(){

var temp__5823__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5823__auto__)){
var existing = temp__5823__auto__;
return existing;
} else {
var ctx = myapp.state.get_audio_context();
var analyser = ctx.createAnalyser();
(analyser.fftSize = (2048));

(analyser.smoothingTimeConstant = 0.8);

var buffer_length_time_22234 = analyser.fftSize;
var buffer_length_freq_22235 = analyser.frequencyBinCount;
var data_time_22236 = (new Uint8Array(buffer_length_time_22234));
var data_freq_22237 = (new Uint8Array(buffer_length_freq_22235));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"analyser","analyser",-110219096),analyser,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-array-time","data-array-time",-143069900),data_time_22236,new cljs.core.Keyword(null,"data-array-freq","data-array-freq",957003512),data_freq_22237], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
} else {
navigator.mediaDevices.getUserMedia(({"audio": true})).then((function (stream){
var source = ctx.createMediaStreamSource(stream);
source.connect(analyser);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"audio-source","audio-source",2004931782),source,new cljs.core.Keyword(null,"media-stream","media-stream",-1237430171),stream], 0));

return console.log("\u2705 Microphone connected!");
})).catch((function (err){
return console.error("Microphone access denied:",err);
}));
}

return analyser;
}
});
myapp.state.ensure_audio_running_BANG_ = (function myapp$state$ensure_audio_running_BANG_(){

var temp__5825__auto__ = new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var ctx = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ctx.state,"suspended")){
console.warn("\u26A0\uFE0F Audio context suspended, resuming...");

return ctx.resume();
} else {
return null;
}
} else {
return null;
}
});
myapp.state.color_schemes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rainbow","rainbow",1752920266),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (index,total,value){
var hue = cljs.core.mod(((360) * (index / total)),(360));
var lightness = ((30) + ((50) * value));
return (""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue)+", 100%, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness)+"%)");
}),new cljs.core.Keyword(null,"bg","bg",-206688421),"#000"], null),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,value){
var intensity = (((255) * value) | 0);
return (""+"rgb(0, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 * intensity))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(intensity)+")");
}),new cljs.core.Keyword(null,"bg","bg",-206688421),"#001020"], null),new cljs.core.Keyword(null,"fire","fire",-144730624),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,value){
var r = (((255) * cljs.core.min.cljs$core$IFn$_invoke$arity$2((1),(value * 1.5))) | 0);
var g = (((255) * cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((value * (2)) - 0.5))) | 0);
var b = (((40) * value) | 0);
return (""+"rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+")");
}),new cljs.core.Keyword(null,"bg","bg",-206688421),"#100000"], null),new cljs.core.Keyword(null,"monochrome","monochrome",589735911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,value){
var intensity = (((255) * value) | 0);
return (""+"rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(intensity)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(intensity)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(intensity)+")");
}),new cljs.core.Keyword(null,"bg","bg",-206688421),"#000"], null)], null);
myapp.state.get_color = (function myapp$state$get_color(index,total,value){
var scheme_key = new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(myapp.state.color_schemes,scheme_key);
var color_fn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(scheme);
return (color_fn.cljs$core$IFn$_invoke$arity$3 ? color_fn.cljs$core$IFn$_invoke$arity$3(index,total,value) : color_fn.call(null,index,total,value));
});
myapp.state.get_background_color = (function myapp$state$get_background_color(){
var scheme_key = new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(myapp.state.color_schemes,scheme_key);
return new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(scheme);
});
myapp.state.detect_beat = (function myapp$state$detect_beat(freq_data){

var bass_sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22232_SHARP_){
return (freq_data[p1__22232_SHARP_]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))));
var bass_avg = (bass_sum / (10));
var bass_norm = (bass_avg / 255.0);
var history__$1 = new cljs.core.Keyword(null,"beat-history","beat-history",946692358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var avg_history = ((cljs.core.empty_QMARK_(history__$1))?0.5:(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,history__$1) / cljs.core.count(history__$1)));
var threshold = (avg_history * 1.4);
var now = Date.now();
var time_since_last = (now - new cljs.core.Keyword(null,"last-beat-time","last-beat-time",401521869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"beat-history","beat-history",946692358),(function (p1__22233_SHARP_){
return cljs.core.take_last((100),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22233_SHARP_,bass_norm));
}));

if((((bass_norm > threshold)) && ((time_since_last > (150))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-beat-time","last-beat-time",401521869),now);

return true;
} else {
return null;
}
});
myapp.state.measure_fps_BANG_ = (function myapp$state$measure_fps_BANG_(){
var now = Date.now();
var last_time = new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var delta = (now - last_time);
var fps = (((delta === (0)))?(60):((1000) / delta));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),now,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fps","fps",683533296),Math.round(fps)], 0));
});
myapp.state.clear_canvas_BANG_ = (function myapp$state$clear_canvas_BANG_(ctx,width,height){
(ctx.fillStyle = myapp.state.get_background_color());

return ctx.fillRect((0),(0),width,height);
});
myapp.state.get_canvas = (function myapp$state$get_canvas(){
return document.getElementById("waveform");
});
myapp.state.get_canvas_context = (function myapp$state$get_canvas_context(){
var temp__5825__auto__ = myapp.state.get_canvas();
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
return canvas.getContext("2d");
} else {
return null;
}
});
myapp.state.resize_canvas_BANG_ = (function myapp$state$resize_canvas_BANG_(){
var temp__5825__auto__ = myapp.state.get_canvas();
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
(canvas.width = window.innerWidth);

return (canvas.height = window.innerHeight);
} else {
return null;
}
});

//# sourceMappingURL=myapp.state.js.map
