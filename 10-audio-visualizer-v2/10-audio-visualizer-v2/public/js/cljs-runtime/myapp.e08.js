goog.provide('myapp.e08');
/**
 * Check if running in Tauri environment
 */
myapp.e08.tauri_available_QMARK_ = (function myapp$e08$tauri_available_QMARK_(){
var and__5140__auto__ = window;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = window.__TAURI__;
if(cljs.core.truth_(and__5140__auto____$1)){
return window.__TAURI__.core;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
/**
 * Call Tauri backend command
 */
myapp.e08.invoke_tauri = (function myapp$e08$invoke_tauri(cmd,args){
if(cljs.core.truth_(myapp.e08.tauri_available_QMARK_())){
return window.__TAURI__.core.invoke(cmd,cljs.core.clj__GT_js(args)).catch((function (error){
return console.error("Tauri error:",error);
}));
} else {
console.warn("Tauri API not available. Make sure you're running via 'npm run tauri:dev' not just the browser.");

return Promise.resolve(null);
}
});
/**
 * Open native file dialog and load audio
 */
myapp.e08.open_file_dialog_BANG_ = (function myapp$e08$open_file_dialog_BANG_(){
return myapp.e08.invoke_tauri("open_file_dialog",cljs.core.PersistentArrayMap.EMPTY).then((function (path){
if(cljs.core.truth_(path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-file","current-file",56284307),path);

return (myapp.e08.load_audio_file_BANG_.cljs$core$IFn$_invoke$arity$1 ? myapp.e08.load_audio_file_BANG_.cljs$core$IFn$_invoke$arity$1(path) : myapp.e08.load_audio_file_BANG_.call(null,path));
} else {
return null;
}
}));
});
/**
 * Load audio file via Tauri and create audio buffer
 */
myapp.e08.load_audio_file_BANG_ = (function myapp$e08$load_audio_file_BANG_(path){
return myapp.e08.invoke_tauri("load_audio_file",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)).then((function (audio_data){
var ctx = myapp.state.get_audio_context();
var map__22409 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(audio_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__22409__$1 = cljs.core.__destructure_map(map__22409);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"samples","samples",635504833));
var sample_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var buffer = ctx.createBuffer(channels,cljs.core.count(samples),sample_rate);
var n__5741__auto___22426 = channels;
var channel_22427 = (0);
while(true){
if((channel_22427 < n__5741__auto___22426)){
var channel_data_22428 = buffer.getChannelData(channel_22427);
var seq__22410_22429 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_data_22428.length));
var chunk__22411_22430 = null;
var count__22412_22431 = (0);
var i__22413_22432 = (0);
while(true){
if((i__22413_22432 < count__22412_22431)){
var i_22433 = chunk__22411_22430.cljs$core$IIndexed$_nth$arity$2(null,i__22413_22432);
(channel_data_22428[i_22433] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(samples,i_22433));


var G__22434 = seq__22410_22429;
var G__22435 = chunk__22411_22430;
var G__22436 = count__22412_22431;
var G__22437 = (i__22413_22432 + (1));
seq__22410_22429 = G__22434;
chunk__22411_22430 = G__22435;
count__22412_22431 = G__22436;
i__22413_22432 = G__22437;
continue;
} else {
var temp__5825__auto___22438 = cljs.core.seq(seq__22410_22429);
if(temp__5825__auto___22438){
var seq__22410_22439__$1 = temp__5825__auto___22438;
if(cljs.core.chunked_seq_QMARK_(seq__22410_22439__$1)){
var c__5673__auto___22440 = cljs.core.chunk_first(seq__22410_22439__$1);
var G__22441 = cljs.core.chunk_rest(seq__22410_22439__$1);
var G__22442 = c__5673__auto___22440;
var G__22443 = cljs.core.count(c__5673__auto___22440);
var G__22444 = (0);
seq__22410_22429 = G__22441;
chunk__22411_22430 = G__22442;
count__22412_22431 = G__22443;
i__22413_22432 = G__22444;
continue;
} else {
var i_22445 = cljs.core.first(seq__22410_22439__$1);
(channel_data_22428[i_22445] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(samples,i_22445));


var G__22446 = cljs.core.next(seq__22410_22439__$1);
var G__22447 = null;
var G__22448 = (0);
var G__22449 = (0);
seq__22410_22429 = G__22446;
chunk__22411_22430 = G__22447;
count__22412_22431 = G__22448;
i__22413_22432 = G__22449;
continue;
}
} else {
}
}
break;
}

var G__22450 = (channel_22427 + (1));
channel_22427 = G__22450;
continue;
} else {
}
break;
}

return (myapp.e08.play_audio_buffer_BANG_.cljs$core$IFn$_invoke$arity$1 ? myapp.e08.play_audio_buffer_BANG_.cljs$core$IFn$_invoke$arity$1(buffer) : myapp.e08.play_audio_buffer_BANG_.call(null,buffer));
}));
});
/**
 * Play audio buffer through analyser
 */
myapp.e08.play_audio_buffer_BANG_ = (function myapp$e08$play_audio_buffer_BANG_(buffer){
var ctx = myapp.state.get_audio_context();
var source = ctx.createBufferSource();
var analyser = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return myapp.state.setup_analyser_BANG_();
}
})();
(source.buffer = buffer);

(source.loop = true);

source.connect(analyser);

analyser.connect(ctx.destination);

source.start();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"audio-source","audio-source",2004931782),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"audio-buffer","audio-buffer",1822789572),buffer,new cljs.core.Keyword(null,"source-type","source-type",-237000407),new cljs.core.Keyword(null,"file","file",-1269645878)], 0));
});
/**
 * Toggle mini mode via Tauri
 */
myapp.e08.toggle_mini_mode_BANG_ = (function myapp$e08$toggle_mini_mode_BANG_(){
var mini = cljs.core.not(new cljs.core.Keyword(null,"mini-mode","mini-mode",226627990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mini-mode","mini-mode",226627990),mini);

return myapp.e08.invoke_tauri("toggle_mini_mode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mini","mini",1024876972),mini], null));
});
/**
 * Stop current animation loop
 */
myapp.e08.stop_current_visualizer_BANG_ = (function myapp$e08$stop_current_visualizer_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var frame_id = temp__5825__auto__;
cancelAnimationFrame(frame_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-frame","animation-frame",77709189),null);
} else {
return null;
}
});
/**
 * Start visualizer for given mode
 */
myapp.e08.start_visualizer_BANG_ = (function myapp$e08$start_visualizer_BANG_(mode){
myapp.e08.stop_current_visualizer_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode);

var G__22414 = mode;
var G__22414__$1 = (((G__22414 instanceof cljs.core.Keyword))?G__22414.fqn:null);
switch (G__22414__$1) {
case "waveform":
return myapp.e01.start_BANG_();

break;
case "bars":
return myapp.e02.start_BANG_();

break;
case "circular":
return myapp.e05.start_BANG_();

break;
case "particles":
return myapp.e06.start_BANG_();

break;
case "spectrogram":
return myapp.e07.start_BANG_();

break;
default:
return null;

}
});
myapp.e08.mode_selector = (function myapp$e08$mode_selector(){
var current_mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var modes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"waveform","waveform",1355199399),new cljs.core.Keyword(null,"label","label",1718410804),"Waveform",new cljs.core.Keyword(null,"icon","icon",1679606541),"~"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.Keyword(null,"label","label",1718410804),"Bars",new cljs.core.Keyword(null,"icon","icon",1679606541),"||"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"circular","circular",-1815834918),new cljs.core.Keyword(null,"label","label",1718410804),"Circular",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u25C9"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"particles","particles",801881788),new cljs.core.Keyword(null,"label","label",1718410804),"Particles",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2726"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"spectrogram","spectrogram",950500999),new cljs.core.Keyword(null,"label","label",1718410804),"Spectrogram",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u25A4"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mode-selector","div.mode-selector",-1349974226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Visualizer Mode:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mode-buttons","div.mode-buttons",-2122444639),(function (){var iter__5628__auto__ = (function myapp$e08$mode_selector_$_iter__22415(s__22416){
return (new cljs.core.LazySeq(null,(function (){
var s__22416__$1 = s__22416;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22416__$1);
if(temp__5825__auto__){
var s__22416__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22416__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__22416__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__22418 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__22417 = (0);
while(true){
if((i__22417 < size__5627__auto__)){
var map__22419 = cljs.core._nth(c__5626__auto__,i__22417);
var map__22419__$1 = cljs.core.__destructure_map(map__22419);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22419__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22419__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22419__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__22418,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mode-btn","button.mode-btn",-928508831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,key))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22417,map__22419,map__22419__$1,key,label,icon,c__5626__auto__,size__5627__auto__,b__22418,s__22416__$2,temp__5825__auto__,current_mode,modes){
return (function (){
return myapp.e08.start_visualizer_BANG_(key);
});})(i__22417,map__22419,map__22419__$1,key,label,icon,c__5626__auto__,size__5627__auto__,b__22418,s__22416__$2,temp__5825__auto__,current_mode,modes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__22452 = (i__22417 + (1));
i__22417 = G__22452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22418),myapp$e08$mode_selector_$_iter__22415(cljs.core.chunk_rest(s__22416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22418),null);
}
} else {
var map__22420 = cljs.core.first(s__22416__$2);
var map__22420__$1 = cljs.core.__destructure_map(map__22420);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mode-btn","button.mode-btn",-928508831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,key))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22420,map__22420__$1,key,label,icon,s__22416__$2,temp__5825__auto__,current_mode,modes){
return (function (){
return myapp.e08.start_visualizer_BANG_(key);
});})(map__22420,map__22420__$1,key,label,icon,s__22416__$2,temp__5825__auto__,current_mode,modes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),myapp$e08$mode_selector_$_iter__22415(cljs.core.rest(s__22416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(modes);
})()], null)], null);
});
myapp.e08.sensitivity_slider = (function myapp$e08$sensitivity_slider(){
var sensitivity = new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-row","div.control-row",-1871869946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Sensitivity:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),0.1,new cljs.core.Keyword(null,"max","max",61366548),3.0,new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"value","value",305978217),sensitivity,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22421_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),parseFloat(p1__22421_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),sensitivity.toFixed((1)),"x"], null)], null);
});
myapp.e08.color_scheme_selector = (function myapp$e08$color_scheme_selector(){
var scheme = new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var schemes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rainbow","rainbow",1752920266),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"fire","fire",-144730624),new cljs.core.Keyword(null,"monochrome","monochrome",589735911)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-row","div.control-row",-1871869946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Colors:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-buttons","div.color-buttons",-2055093438),(function (){var iter__5628__auto__ = (function myapp$e08$color_scheme_selector_$_iter__22422(s__22423){
return (new cljs.core.LazySeq(null,(function (){
var s__22423__$1 = s__22423;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22423__$1);
if(temp__5825__auto__){
var s__22423__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22423__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__22423__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__22425 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__22424 = (0);
while(true){
if((i__22424 < size__5627__auto__)){
var s = cljs.core._nth(c__5626__auto__,i__22424);
cljs.core.chunk_append(b__22425,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.color-btn","button.color-btn",-1641210474),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scheme,s))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22424,s,c__5626__auto__,size__5627__auto__,b__22425,s__22423__$2,temp__5825__auto__,scheme,schemes){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),s);
});})(i__22424,s,c__5626__auto__,size__5627__auto__,b__22425,s__22423__$2,temp__5825__auto__,scheme,schemes))
], null),cljs.core.name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__22453 = (i__22424 + (1));
i__22424 = G__22453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22425),myapp$e08$color_scheme_selector_$_iter__22422(cljs.core.chunk_rest(s__22423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22425),null);
}
} else {
var s = cljs.core.first(s__22423__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.color-btn","button.color-btn",-1641210474),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scheme,s))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__22423__$2,temp__5825__auto__,scheme,schemes){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),s);
});})(s,s__22423__$2,temp__5825__auto__,scheme,schemes))
], null),cljs.core.name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),myapp$e08$color_scheme_selector_$_iter__22422(cljs.core.rest(s__22423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schemes);
})()], null)], null);
});
myapp.e08.audio_source_controls = (function myapp$e08$audio_source_controls(){
var source_type = new cljs.core.Keyword(null,"source-type","source-type",-237000407).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
var current_file = new cljs.core.Keyword(null,"current-file","current-file",56284307).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.audio-controls","div.audio-controls",322000011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Audio Source"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-buttons","div.source-buttons",-900195018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_type,new cljs.core.Keyword(null,"microphone","microphone",472061660)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"source-type","source-type",-237000407),new cljs.core.Keyword(null,"microphone","microphone",472061660));

return navigator.mediaDevices.getUserMedia(({"audio": true})).then((function (stream){
var ctx = myapp.state.get_audio_context();
var source = ctx.createMediaStreamSource(stream);
var analyser = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"analyser","analyser",-110219096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return myapp.state.setup_analyser_BANG_();
}
})();
source.connect(analyser);

analyser.connect(ctx.destination);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
}));
})], null),"\uD83C\uDFA4 Microphone"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),myapp.e08.open_file_dialog_BANG_], null),"\uD83D\uDCC1 Load File"], null)], null),(cljs.core.truth_(current_file)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-file","div.current-file",1929507578),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"Playing: ",cljs.core.last(current_file.split("/"))], null)], null):null)], null);
});
myapp.e08.stats_toggle = (function myapp$e08$stats_toggle(){
var show = new cljs.core.Keyword(null,"show-stats","show-stats",455927958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-row","div.control-row",-1871869946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Show Stats:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),show,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(myapp.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"show-stats","show-stats",455927958),cljs.core.not);
})], null)], null)], null);
});
myapp.e08.mini_mode_toggle = (function myapp$e08$mini_mode_toggle(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-row","div.control-row",-1871869946),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.special-btn","button.special-btn",1083614908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),myapp.e08.toggle_mini_mode_BANG_], null),(cljs.core.truth_(new cljs.core.Keyword(null,"mini-mode","mini-mode",226627990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))?"\uD83D\uDD32 Normal Mode":"\uD83D\uDDD7 Mini Mode")], null)], null);
});
myapp.e08.control_panel = (function myapp$e08$control_panel(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-ui","show-ui",2128570639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(myapp.state.app_state)))){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-panel","div.control-panel",-1920239249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["300px","0 8px 32px rgba(0, 0, 0, 0.5)","#fff",(20),"rgba(20, 20, 35, 0.95)","blur(10px)",(1000),"20px",(20),"absolute","1px solid rgba(0, 255, 180, 0.3)","12px","sans-serif"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 20px 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"color","color",1011675173),"#00FFAA"], null)], null),"\uD83C\uDFB5 Audio Visualizer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.audio_source_controls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid rgba(255, 255, 255, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.mode_selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid rgba(255, 255, 255, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.sensitivity_slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.color_scheme_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.stats_toggle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid rgba(255, 255, 255, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.mini_mode_toggle], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-hints","div.keyboard-hints",779441325),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0, 0, 0, 0.3)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Keyboard Shortcuts:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"1-5"], null)," = Switch modes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Space"], null)," = Pause/Play"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"F"], null)," = Fullscreen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"H"], null)," = Hide/Show UI"], null)], null)], null);
} else {
return null;
}
});
if((typeof myapp !== 'undefined') && (typeof myapp.e08 !== 'undefined') && (typeof myapp.e08.root !== 'undefined')){
} else {
myapp.e08.root = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("controls"));
}
/**
 * Mount control panel to DOM
 */
myapp.e08.mount_ui_BANG_ = (function myapp$e08$mount_ui_BANG_(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(myapp.e08.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.e08.control_panel], null));
});

//# sourceMappingURL=myapp.e08.js.map
