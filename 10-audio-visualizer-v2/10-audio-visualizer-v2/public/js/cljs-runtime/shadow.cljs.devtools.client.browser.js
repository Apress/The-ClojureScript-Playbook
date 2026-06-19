goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21737 = arguments.length;
var i__5877__auto___21738 = (0);
while(true){
if((i__5877__auto___21738 < len__5876__auto___21737)){
args__5882__auto__.push((arguments[i__5877__auto___21738]));

var G__21739 = (i__5877__auto___21738 + (1));
i__5877__auto___21738 = G__21739;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21276){
var G__21277 = cljs.core.first(seq21276);
var seq21276__$1 = cljs.core.next(seq21276);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21277,seq21276__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21283 = cljs.core.seq(sources);
var chunk__21284 = null;
var count__21285 = (0);
var i__21286 = (0);
while(true){
if((i__21286 < count__21285)){
var map__21294 = chunk__21284.cljs$core$IIndexed$_nth$arity$2(null,i__21286);
var map__21294__$1 = cljs.core.__destructure_map(map__21294);
var src = map__21294__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21295){var e_21740 = e21295;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21740);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21740.message))));
}

var G__21741 = seq__21283;
var G__21742 = chunk__21284;
var G__21743 = count__21285;
var G__21744 = (i__21286 + (1));
seq__21283 = G__21741;
chunk__21284 = G__21742;
count__21285 = G__21743;
i__21286 = G__21744;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21283);
if(temp__5825__auto__){
var seq__21283__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21283__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21283__$1);
var G__21745 = cljs.core.chunk_rest(seq__21283__$1);
var G__21746 = c__5673__auto__;
var G__21747 = cljs.core.count(c__5673__auto__);
var G__21748 = (0);
seq__21283 = G__21745;
chunk__21284 = G__21746;
count__21285 = G__21747;
i__21286 = G__21748;
continue;
} else {
var map__21302 = cljs.core.first(seq__21283__$1);
var map__21302__$1 = cljs.core.__destructure_map(map__21302);
var src = map__21302__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21303){var e_21749 = e21303;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21749);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21749.message))));
}

var G__21750 = cljs.core.next(seq__21283__$1);
var G__21751 = null;
var G__21752 = (0);
var G__21753 = (0);
seq__21283 = G__21750;
chunk__21284 = G__21751;
count__21285 = G__21752;
i__21286 = G__21753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21312 = cljs.core.seq(js_requires);
var chunk__21313 = null;
var count__21314 = (0);
var i__21315 = (0);
while(true){
if((i__21315 < count__21314)){
var js_ns = chunk__21313.cljs$core$IIndexed$_nth$arity$2(null,i__21315);
var require_str_21754 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21754);


var G__21755 = seq__21312;
var G__21756 = chunk__21313;
var G__21757 = count__21314;
var G__21758 = (i__21315 + (1));
seq__21312 = G__21755;
chunk__21313 = G__21756;
count__21314 = G__21757;
i__21315 = G__21758;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21312);
if(temp__5825__auto__){
var seq__21312__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21312__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21312__$1);
var G__21759 = cljs.core.chunk_rest(seq__21312__$1);
var G__21760 = c__5673__auto__;
var G__21761 = cljs.core.count(c__5673__auto__);
var G__21762 = (0);
seq__21312 = G__21759;
chunk__21313 = G__21760;
count__21314 = G__21761;
i__21315 = G__21762;
continue;
} else {
var js_ns = cljs.core.first(seq__21312__$1);
var require_str_21763 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21763);


var G__21764 = cljs.core.next(seq__21312__$1);
var G__21765 = null;
var G__21766 = (0);
var G__21767 = (0);
seq__21312 = G__21764;
chunk__21313 = G__21765;
count__21314 = G__21766;
i__21315 = G__21767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21321){
var map__21322 = p__21321;
var map__21322__$1 = cljs.core.__destructure_map(map__21322);
var msg = map__21322__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21322__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21322__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21323(s__21324){
return (new cljs.core.LazySeq(null,(function (){
var s__21324__$1 = s__21324;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21324__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21329 = cljs.core.first(xs__6385__auto__);
var map__21329__$1 = cljs.core.__destructure_map(map__21329);
var src = map__21329__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21324__$1,map__21329,map__21329__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21322,map__21322__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21323_$_iter__21325(s__21326){
return (new cljs.core.LazySeq(null,((function (s__21324__$1,map__21329,map__21329__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21322,map__21322__$1,msg,info,reload_info){
return (function (){
var s__21326__$1 = s__21326;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21326__$1);
if(temp__5825__auto____$1){
var s__21326__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21326__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21326__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21328 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21327 = (0);
while(true){
if((i__21327 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21327);
cljs.core.chunk_append(b__21328,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21773 = (i__21327 + (1));
i__21327 = G__21773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21328),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21323_$_iter__21325(cljs.core.chunk_rest(s__21326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21328),null);
}
} else {
var warning = cljs.core.first(s__21326__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21323_$_iter__21325(cljs.core.rest(s__21326__$2)));
}
} else {
return null;
}
break;
}
});})(s__21324__$1,map__21329,map__21329__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21322,map__21322__$1,msg,info,reload_info))
,null,null));
});})(s__21324__$1,map__21329,map__21329__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21322,map__21322__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21323(cljs.core.rest(s__21324__$1)));
} else {
var G__21774 = cljs.core.rest(s__21324__$1);
s__21324__$1 = G__21774;
continue;
}
} else {
var G__21775 = cljs.core.rest(s__21324__$1);
s__21324__$1 = G__21775;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21337_21776 = cljs.core.seq(warnings);
var chunk__21338_21777 = null;
var count__21339_21778 = (0);
var i__21340_21779 = (0);
while(true){
if((i__21340_21779 < count__21339_21778)){
var map__21343_21780 = chunk__21338_21777.cljs$core$IIndexed$_nth$arity$2(null,i__21340_21779);
var map__21343_21781__$1 = cljs.core.__destructure_map(map__21343_21780);
var w_21782 = map__21343_21781__$1;
var msg_21783__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21781__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21786)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21784)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21785)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21783__$1)));


var G__21787 = seq__21337_21776;
var G__21788 = chunk__21338_21777;
var G__21789 = count__21339_21778;
var G__21790 = (i__21340_21779 + (1));
seq__21337_21776 = G__21787;
chunk__21338_21777 = G__21788;
count__21339_21778 = G__21789;
i__21340_21779 = G__21790;
continue;
} else {
var temp__5825__auto___21791 = cljs.core.seq(seq__21337_21776);
if(temp__5825__auto___21791){
var seq__21337_21792__$1 = temp__5825__auto___21791;
if(cljs.core.chunked_seq_QMARK_(seq__21337_21792__$1)){
var c__5673__auto___21793 = cljs.core.chunk_first(seq__21337_21792__$1);
var G__21794 = cljs.core.chunk_rest(seq__21337_21792__$1);
var G__21795 = c__5673__auto___21793;
var G__21796 = cljs.core.count(c__5673__auto___21793);
var G__21797 = (0);
seq__21337_21776 = G__21794;
chunk__21338_21777 = G__21795;
count__21339_21778 = G__21796;
i__21340_21779 = G__21797;
continue;
} else {
var map__21345_21798 = cljs.core.first(seq__21337_21792__$1);
var map__21345_21799__$1 = cljs.core.__destructure_map(map__21345_21798);
var w_21800 = map__21345_21799__$1;
var msg_21801__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345_21799__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345_21799__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345_21799__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345_21799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21804)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21802)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21803)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21801__$1)));


var G__21805 = cljs.core.next(seq__21337_21792__$1);
var G__21806 = null;
var G__21807 = (0);
var G__21808 = (0);
seq__21337_21776 = G__21805;
chunk__21338_21777 = G__21806;
count__21339_21778 = G__21807;
i__21340_21779 = G__21808;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21320_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21320_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21348 = node_uri;
G__21348.setQuery(null);

G__21348.setPath(new$);

return G__21348;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21349){
var map__21350 = p__21349;
var map__21350__$1 = cljs.core.__destructure_map(map__21350);
var msg = map__21350__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21350__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21350__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21351 = cljs.core.seq(updates);
var chunk__21353 = null;
var count__21354 = (0);
var i__21355 = (0);
while(true){
if((i__21355 < count__21354)){
var path = chunk__21353.cljs$core$IIndexed$_nth$arity$2(null,i__21355);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21495_21809 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21499_21810 = null;
var count__21500_21811 = (0);
var i__21501_21812 = (0);
while(true){
if((i__21501_21812 < count__21500_21811)){
var node_21813 = chunk__21499_21810.cljs$core$IIndexed$_nth$arity$2(null,i__21501_21812);
if(cljs.core.not(node_21813.shadow$old)){
var path_match_21814 = shadow.cljs.devtools.client.browser.match_paths(node_21813.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21814)){
var new_link_21815 = (function (){var G__21531 = node_21813.cloneNode(true);
G__21531.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21814)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21531;
})();
(node_21813.shadow$old = true);

(new_link_21815.onload = ((function (seq__21495_21809,chunk__21499_21810,count__21500_21811,i__21501_21812,seq__21351,chunk__21353,count__21354,i__21355,new_link_21815,path_match_21814,node_21813,path,map__21350,map__21350__$1,msg,updates,reload_info){
return (function (e){
var seq__21532_21816 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21534_21817 = null;
var count__21535_21818 = (0);
var i__21536_21819 = (0);
while(true){
if((i__21536_21819 < count__21535_21818)){
var map__21540_21820 = chunk__21534_21817.cljs$core$IIndexed$_nth$arity$2(null,i__21536_21819);
var map__21540_21821__$1 = cljs.core.__destructure_map(map__21540_21820);
var task_21822 = map__21540_21821__$1;
var fn_str_21823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21540_21821__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21540_21821__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21825 = goog.getObjectByName(fn_str_21823,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21824)));

(fn_obj_21825.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21825.cljs$core$IFn$_invoke$arity$2(path,new_link_21815) : fn_obj_21825.call(null,path,new_link_21815));


var G__21826 = seq__21532_21816;
var G__21827 = chunk__21534_21817;
var G__21828 = count__21535_21818;
var G__21829 = (i__21536_21819 + (1));
seq__21532_21816 = G__21826;
chunk__21534_21817 = G__21827;
count__21535_21818 = G__21828;
i__21536_21819 = G__21829;
continue;
} else {
var temp__5825__auto___21830 = cljs.core.seq(seq__21532_21816);
if(temp__5825__auto___21830){
var seq__21532_21831__$1 = temp__5825__auto___21830;
if(cljs.core.chunked_seq_QMARK_(seq__21532_21831__$1)){
var c__5673__auto___21832 = cljs.core.chunk_first(seq__21532_21831__$1);
var G__21833 = cljs.core.chunk_rest(seq__21532_21831__$1);
var G__21834 = c__5673__auto___21832;
var G__21835 = cljs.core.count(c__5673__auto___21832);
var G__21836 = (0);
seq__21532_21816 = G__21833;
chunk__21534_21817 = G__21834;
count__21535_21818 = G__21835;
i__21536_21819 = G__21836;
continue;
} else {
var map__21541_21837 = cljs.core.first(seq__21532_21831__$1);
var map__21541_21838__$1 = cljs.core.__destructure_map(map__21541_21837);
var task_21839 = map__21541_21838__$1;
var fn_str_21840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541_21838__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541_21838__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21842 = goog.getObjectByName(fn_str_21840,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21841)));

(fn_obj_21842.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21842.cljs$core$IFn$_invoke$arity$2(path,new_link_21815) : fn_obj_21842.call(null,path,new_link_21815));


var G__21843 = cljs.core.next(seq__21532_21831__$1);
var G__21844 = null;
var G__21845 = (0);
var G__21846 = (0);
seq__21532_21816 = G__21843;
chunk__21534_21817 = G__21844;
count__21535_21818 = G__21845;
i__21536_21819 = G__21846;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21813);
});})(seq__21495_21809,chunk__21499_21810,count__21500_21811,i__21501_21812,seq__21351,chunk__21353,count__21354,i__21355,new_link_21815,path_match_21814,node_21813,path,map__21350,map__21350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21814], 0));

goog.dom.insertSiblingAfter(new_link_21815,node_21813);


var G__21849 = seq__21495_21809;
var G__21850 = chunk__21499_21810;
var G__21851 = count__21500_21811;
var G__21852 = (i__21501_21812 + (1));
seq__21495_21809 = G__21849;
chunk__21499_21810 = G__21850;
count__21500_21811 = G__21851;
i__21501_21812 = G__21852;
continue;
} else {
var G__21853 = seq__21495_21809;
var G__21854 = chunk__21499_21810;
var G__21855 = count__21500_21811;
var G__21856 = (i__21501_21812 + (1));
seq__21495_21809 = G__21853;
chunk__21499_21810 = G__21854;
count__21500_21811 = G__21855;
i__21501_21812 = G__21856;
continue;
}
} else {
var G__21857 = seq__21495_21809;
var G__21858 = chunk__21499_21810;
var G__21859 = count__21500_21811;
var G__21860 = (i__21501_21812 + (1));
seq__21495_21809 = G__21857;
chunk__21499_21810 = G__21858;
count__21500_21811 = G__21859;
i__21501_21812 = G__21860;
continue;
}
} else {
var temp__5825__auto___21861 = cljs.core.seq(seq__21495_21809);
if(temp__5825__auto___21861){
var seq__21495_21862__$1 = temp__5825__auto___21861;
if(cljs.core.chunked_seq_QMARK_(seq__21495_21862__$1)){
var c__5673__auto___21863 = cljs.core.chunk_first(seq__21495_21862__$1);
var G__21864 = cljs.core.chunk_rest(seq__21495_21862__$1);
var G__21865 = c__5673__auto___21863;
var G__21866 = cljs.core.count(c__5673__auto___21863);
var G__21867 = (0);
seq__21495_21809 = G__21864;
chunk__21499_21810 = G__21865;
count__21500_21811 = G__21866;
i__21501_21812 = G__21867;
continue;
} else {
var node_21868 = cljs.core.first(seq__21495_21862__$1);
if(cljs.core.not(node_21868.shadow$old)){
var path_match_21869 = shadow.cljs.devtools.client.browser.match_paths(node_21868.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21869)){
var new_link_21872 = (function (){var G__21546 = node_21868.cloneNode(true);
G__21546.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21869)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21546;
})();
(node_21868.shadow$old = true);

(new_link_21872.onload = ((function (seq__21495_21809,chunk__21499_21810,count__21500_21811,i__21501_21812,seq__21351,chunk__21353,count__21354,i__21355,new_link_21872,path_match_21869,node_21868,seq__21495_21862__$1,temp__5825__auto___21861,path,map__21350,map__21350__$1,msg,updates,reload_info){
return (function (e){
var seq__21547_21873 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21549_21874 = null;
var count__21550_21875 = (0);
var i__21551_21876 = (0);
while(true){
if((i__21551_21876 < count__21550_21875)){
var map__21557_21877 = chunk__21549_21874.cljs$core$IIndexed$_nth$arity$2(null,i__21551_21876);
var map__21557_21878__$1 = cljs.core.__destructure_map(map__21557_21877);
var task_21879 = map__21557_21878__$1;
var fn_str_21880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557_21878__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557_21878__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21882 = goog.getObjectByName(fn_str_21880,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21881)));

(fn_obj_21882.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21882.cljs$core$IFn$_invoke$arity$2(path,new_link_21872) : fn_obj_21882.call(null,path,new_link_21872));


var G__21883 = seq__21547_21873;
var G__21884 = chunk__21549_21874;
var G__21885 = count__21550_21875;
var G__21886 = (i__21551_21876 + (1));
seq__21547_21873 = G__21883;
chunk__21549_21874 = G__21884;
count__21550_21875 = G__21885;
i__21551_21876 = G__21886;
continue;
} else {
var temp__5825__auto___21887__$1 = cljs.core.seq(seq__21547_21873);
if(temp__5825__auto___21887__$1){
var seq__21547_21888__$1 = temp__5825__auto___21887__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21547_21888__$1)){
var c__5673__auto___21889 = cljs.core.chunk_first(seq__21547_21888__$1);
var G__21890 = cljs.core.chunk_rest(seq__21547_21888__$1);
var G__21891 = c__5673__auto___21889;
var G__21892 = cljs.core.count(c__5673__auto___21889);
var G__21893 = (0);
seq__21547_21873 = G__21890;
chunk__21549_21874 = G__21891;
count__21550_21875 = G__21892;
i__21551_21876 = G__21893;
continue;
} else {
var map__21558_21895 = cljs.core.first(seq__21547_21888__$1);
var map__21558_21896__$1 = cljs.core.__destructure_map(map__21558_21895);
var task_21897 = map__21558_21896__$1;
var fn_str_21898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558_21896__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558_21896__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21900 = goog.getObjectByName(fn_str_21898,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21899)));

(fn_obj_21900.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21900.cljs$core$IFn$_invoke$arity$2(path,new_link_21872) : fn_obj_21900.call(null,path,new_link_21872));


var G__21901 = cljs.core.next(seq__21547_21888__$1);
var G__21902 = null;
var G__21903 = (0);
var G__21904 = (0);
seq__21547_21873 = G__21901;
chunk__21549_21874 = G__21902;
count__21550_21875 = G__21903;
i__21551_21876 = G__21904;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21868);
});})(seq__21495_21809,chunk__21499_21810,count__21500_21811,i__21501_21812,seq__21351,chunk__21353,count__21354,i__21355,new_link_21872,path_match_21869,node_21868,seq__21495_21862__$1,temp__5825__auto___21861,path,map__21350,map__21350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21869], 0));

goog.dom.insertSiblingAfter(new_link_21872,node_21868);


var G__21905 = cljs.core.next(seq__21495_21862__$1);
var G__21906 = null;
var G__21907 = (0);
var G__21908 = (0);
seq__21495_21809 = G__21905;
chunk__21499_21810 = G__21906;
count__21500_21811 = G__21907;
i__21501_21812 = G__21908;
continue;
} else {
var G__21909 = cljs.core.next(seq__21495_21862__$1);
var G__21910 = null;
var G__21911 = (0);
var G__21912 = (0);
seq__21495_21809 = G__21909;
chunk__21499_21810 = G__21910;
count__21500_21811 = G__21911;
i__21501_21812 = G__21912;
continue;
}
} else {
var G__21913 = cljs.core.next(seq__21495_21862__$1);
var G__21914 = null;
var G__21915 = (0);
var G__21916 = (0);
seq__21495_21809 = G__21913;
chunk__21499_21810 = G__21914;
count__21500_21811 = G__21915;
i__21501_21812 = G__21916;
continue;
}
}
} else {
}
}
break;
}


var G__21917 = seq__21351;
var G__21918 = chunk__21353;
var G__21919 = count__21354;
var G__21920 = (i__21355 + (1));
seq__21351 = G__21917;
chunk__21353 = G__21918;
count__21354 = G__21919;
i__21355 = G__21920;
continue;
} else {
var G__21921 = seq__21351;
var G__21922 = chunk__21353;
var G__21923 = count__21354;
var G__21924 = (i__21355 + (1));
seq__21351 = G__21921;
chunk__21353 = G__21922;
count__21354 = G__21923;
i__21355 = G__21924;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21351);
if(temp__5825__auto__){
var seq__21351__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21351__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21351__$1);
var G__21925 = cljs.core.chunk_rest(seq__21351__$1);
var G__21926 = c__5673__auto__;
var G__21927 = cljs.core.count(c__5673__auto__);
var G__21928 = (0);
seq__21351 = G__21925;
chunk__21353 = G__21926;
count__21354 = G__21927;
i__21355 = G__21928;
continue;
} else {
var path = cljs.core.first(seq__21351__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21565_21929 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21569_21930 = null;
var count__21570_21931 = (0);
var i__21571_21932 = (0);
while(true){
if((i__21571_21932 < count__21570_21931)){
var node_21934 = chunk__21569_21930.cljs$core$IIndexed$_nth$arity$2(null,i__21571_21932);
if(cljs.core.not(node_21934.shadow$old)){
var path_match_21935 = shadow.cljs.devtools.client.browser.match_paths(node_21934.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21935)){
var new_link_21936 = (function (){var G__21669 = node_21934.cloneNode(true);
G__21669.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21935)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21669;
})();
(node_21934.shadow$old = true);

(new_link_21936.onload = ((function (seq__21565_21929,chunk__21569_21930,count__21570_21931,i__21571_21932,seq__21351,chunk__21353,count__21354,i__21355,new_link_21936,path_match_21935,node_21934,path,seq__21351__$1,temp__5825__auto__,map__21350,map__21350__$1,msg,updates,reload_info){
return (function (e){
var seq__21671_21937 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21673_21938 = null;
var count__21674_21939 = (0);
var i__21675_21940 = (0);
while(true){
if((i__21675_21940 < count__21674_21939)){
var map__21684_21942 = chunk__21673_21938.cljs$core$IIndexed$_nth$arity$2(null,i__21675_21940);
var map__21684_21943__$1 = cljs.core.__destructure_map(map__21684_21942);
var task_21944 = map__21684_21943__$1;
var fn_str_21945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684_21943__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684_21943__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21947 = goog.getObjectByName(fn_str_21945,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21946)));

(fn_obj_21947.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21947.cljs$core$IFn$_invoke$arity$2(path,new_link_21936) : fn_obj_21947.call(null,path,new_link_21936));


var G__21948 = seq__21671_21937;
var G__21949 = chunk__21673_21938;
var G__21950 = count__21674_21939;
var G__21951 = (i__21675_21940 + (1));
seq__21671_21937 = G__21948;
chunk__21673_21938 = G__21949;
count__21674_21939 = G__21950;
i__21675_21940 = G__21951;
continue;
} else {
var temp__5825__auto___21952__$1 = cljs.core.seq(seq__21671_21937);
if(temp__5825__auto___21952__$1){
var seq__21671_21953__$1 = temp__5825__auto___21952__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21671_21953__$1)){
var c__5673__auto___21954 = cljs.core.chunk_first(seq__21671_21953__$1);
var G__21955 = cljs.core.chunk_rest(seq__21671_21953__$1);
var G__21956 = c__5673__auto___21954;
var G__21957 = cljs.core.count(c__5673__auto___21954);
var G__21958 = (0);
seq__21671_21937 = G__21955;
chunk__21673_21938 = G__21956;
count__21674_21939 = G__21957;
i__21675_21940 = G__21958;
continue;
} else {
var map__21686_21959 = cljs.core.first(seq__21671_21953__$1);
var map__21686_21960__$1 = cljs.core.__destructure_map(map__21686_21959);
var task_21961 = map__21686_21960__$1;
var fn_str_21962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21686_21960__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21686_21960__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21964 = goog.getObjectByName(fn_str_21962,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21963)));

(fn_obj_21964.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21964.cljs$core$IFn$_invoke$arity$2(path,new_link_21936) : fn_obj_21964.call(null,path,new_link_21936));


var G__21966 = cljs.core.next(seq__21671_21953__$1);
var G__21967 = null;
var G__21968 = (0);
var G__21969 = (0);
seq__21671_21937 = G__21966;
chunk__21673_21938 = G__21967;
count__21674_21939 = G__21968;
i__21675_21940 = G__21969;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21934);
});})(seq__21565_21929,chunk__21569_21930,count__21570_21931,i__21571_21932,seq__21351,chunk__21353,count__21354,i__21355,new_link_21936,path_match_21935,node_21934,path,seq__21351__$1,temp__5825__auto__,map__21350,map__21350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21935], 0));

goog.dom.insertSiblingAfter(new_link_21936,node_21934);


var G__21970 = seq__21565_21929;
var G__21971 = chunk__21569_21930;
var G__21972 = count__21570_21931;
var G__21973 = (i__21571_21932 + (1));
seq__21565_21929 = G__21970;
chunk__21569_21930 = G__21971;
count__21570_21931 = G__21972;
i__21571_21932 = G__21973;
continue;
} else {
var G__21974 = seq__21565_21929;
var G__21975 = chunk__21569_21930;
var G__21976 = count__21570_21931;
var G__21977 = (i__21571_21932 + (1));
seq__21565_21929 = G__21974;
chunk__21569_21930 = G__21975;
count__21570_21931 = G__21976;
i__21571_21932 = G__21977;
continue;
}
} else {
var G__21978 = seq__21565_21929;
var G__21979 = chunk__21569_21930;
var G__21980 = count__21570_21931;
var G__21981 = (i__21571_21932 + (1));
seq__21565_21929 = G__21978;
chunk__21569_21930 = G__21979;
count__21570_21931 = G__21980;
i__21571_21932 = G__21981;
continue;
}
} else {
var temp__5825__auto___21982__$1 = cljs.core.seq(seq__21565_21929);
if(temp__5825__auto___21982__$1){
var seq__21565_21983__$1 = temp__5825__auto___21982__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21565_21983__$1)){
var c__5673__auto___21984 = cljs.core.chunk_first(seq__21565_21983__$1);
var G__21985 = cljs.core.chunk_rest(seq__21565_21983__$1);
var G__21986 = c__5673__auto___21984;
var G__21987 = cljs.core.count(c__5673__auto___21984);
var G__21988 = (0);
seq__21565_21929 = G__21985;
chunk__21569_21930 = G__21986;
count__21570_21931 = G__21987;
i__21571_21932 = G__21988;
continue;
} else {
var node_21989 = cljs.core.first(seq__21565_21983__$1);
if(cljs.core.not(node_21989.shadow$old)){
var path_match_21990 = shadow.cljs.devtools.client.browser.match_paths(node_21989.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21990)){
var new_link_21991 = (function (){var G__21688 = node_21989.cloneNode(true);
G__21688.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21990)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21688;
})();
(node_21989.shadow$old = true);

(new_link_21991.onload = ((function (seq__21565_21929,chunk__21569_21930,count__21570_21931,i__21571_21932,seq__21351,chunk__21353,count__21354,i__21355,new_link_21991,path_match_21990,node_21989,seq__21565_21983__$1,temp__5825__auto___21982__$1,path,seq__21351__$1,temp__5825__auto__,map__21350,map__21350__$1,msg,updates,reload_info){
return (function (e){
var seq__21689_21992 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21691_21993 = null;
var count__21692_21994 = (0);
var i__21693_21995 = (0);
while(true){
if((i__21693_21995 < count__21692_21994)){
var map__21697_21996 = chunk__21691_21993.cljs$core$IIndexed$_nth$arity$2(null,i__21693_21995);
var map__21697_21997__$1 = cljs.core.__destructure_map(map__21697_21996);
var task_21998 = map__21697_21997__$1;
var fn_str_21999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21697_21997__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21697_21997__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22001 = goog.getObjectByName(fn_str_21999,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22000)));

(fn_obj_22001.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22001.cljs$core$IFn$_invoke$arity$2(path,new_link_21991) : fn_obj_22001.call(null,path,new_link_21991));


var G__22002 = seq__21689_21992;
var G__22003 = chunk__21691_21993;
var G__22004 = count__21692_21994;
var G__22005 = (i__21693_21995 + (1));
seq__21689_21992 = G__22002;
chunk__21691_21993 = G__22003;
count__21692_21994 = G__22004;
i__21693_21995 = G__22005;
continue;
} else {
var temp__5825__auto___22006__$2 = cljs.core.seq(seq__21689_21992);
if(temp__5825__auto___22006__$2){
var seq__21689_22007__$1 = temp__5825__auto___22006__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21689_22007__$1)){
var c__5673__auto___22008 = cljs.core.chunk_first(seq__21689_22007__$1);
var G__22009 = cljs.core.chunk_rest(seq__21689_22007__$1);
var G__22010 = c__5673__auto___22008;
var G__22011 = cljs.core.count(c__5673__auto___22008);
var G__22012 = (0);
seq__21689_21992 = G__22009;
chunk__21691_21993 = G__22010;
count__21692_21994 = G__22011;
i__21693_21995 = G__22012;
continue;
} else {
var map__21699_22013 = cljs.core.first(seq__21689_22007__$1);
var map__21699_22014__$1 = cljs.core.__destructure_map(map__21699_22013);
var task_22015 = map__21699_22014__$1;
var fn_str_22016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699_22014__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699_22014__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22018 = goog.getObjectByName(fn_str_22016,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22017)));

(fn_obj_22018.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22018.cljs$core$IFn$_invoke$arity$2(path,new_link_21991) : fn_obj_22018.call(null,path,new_link_21991));


var G__22019 = cljs.core.next(seq__21689_22007__$1);
var G__22020 = null;
var G__22021 = (0);
var G__22022 = (0);
seq__21689_21992 = G__22019;
chunk__21691_21993 = G__22020;
count__21692_21994 = G__22021;
i__21693_21995 = G__22022;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21989);
});})(seq__21565_21929,chunk__21569_21930,count__21570_21931,i__21571_21932,seq__21351,chunk__21353,count__21354,i__21355,new_link_21991,path_match_21990,node_21989,seq__21565_21983__$1,temp__5825__auto___21982__$1,path,seq__21351__$1,temp__5825__auto__,map__21350,map__21350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21990], 0));

goog.dom.insertSiblingAfter(new_link_21991,node_21989);


var G__22023 = cljs.core.next(seq__21565_21983__$1);
var G__22024 = null;
var G__22025 = (0);
var G__22026 = (0);
seq__21565_21929 = G__22023;
chunk__21569_21930 = G__22024;
count__21570_21931 = G__22025;
i__21571_21932 = G__22026;
continue;
} else {
var G__22027 = cljs.core.next(seq__21565_21983__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__21565_21929 = G__22027;
chunk__21569_21930 = G__22028;
count__21570_21931 = G__22029;
i__21571_21932 = G__22030;
continue;
}
} else {
var G__22031 = cljs.core.next(seq__21565_21983__$1);
var G__22032 = null;
var G__22033 = (0);
var G__22034 = (0);
seq__21565_21929 = G__22031;
chunk__21569_21930 = G__22032;
count__21570_21931 = G__22033;
i__21571_21932 = G__22034;
continue;
}
}
} else {
}
}
break;
}


var G__22035 = cljs.core.next(seq__21351__$1);
var G__22036 = null;
var G__22037 = (0);
var G__22038 = (0);
seq__21351 = G__22035;
chunk__21353 = G__22036;
count__21354 = G__22037;
i__21355 = G__22038;
continue;
} else {
var G__22039 = cljs.core.next(seq__21351__$1);
var G__22040 = null;
var G__22041 = (0);
var G__22042 = (0);
seq__21351 = G__22039;
chunk__21353 = G__22040;
count__21354 = G__22041;
i__21355 = G__22042;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21707 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21707) : success.call(null,G__21707));
}catch (e21706){var e = e21706;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21708,success,fail){
var map__21709 = p__21708;
var map__21709__$1 = cljs.core.__destructure_map(map__21709);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21711 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21711) : success.call(null,G__21711));
}catch (e21710){var e = e21710;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21712,done,error){
var map__21713 = p__21712;
var map__21713__$1 = cljs.core.__destructure_map(map__21713);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21714,done,error){
var map__21715 = p__21714;
var map__21715__$1 = cljs.core.__destructure_map(map__21715);
var msg = map__21715__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21716){
var map__21717 = p__21716;
var map__21717__$1 = cljs.core.__destructure_map(map__21717);
var src = map__21717__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21717__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21718 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21718) : done.call(null,G__21718));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21719){
var map__21720 = p__21719;
var map__21720__$1 = cljs.core.__destructure_map(map__21720);
var msg__$1 = map__21720__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21720__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21721){var ex = e21721;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21723){
var map__21724 = p__21723;
var map__21724__$1 = cljs.core.__destructure_map(map__21724);
var env = map__21724__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21724__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21731){
var map__21732 = p__21731;
var map__21732__$1 = cljs.core.__destructure_map(map__21732);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21733){
var map__21734 = p__21733;
var map__21734__$1 = cljs.core.__destructure_map(map__21734);
var svc = map__21734__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
