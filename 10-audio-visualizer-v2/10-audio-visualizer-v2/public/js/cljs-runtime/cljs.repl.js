goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19010){
var map__19011 = p__19010;
var map__19011__$1 = cljs.core.__destructure_map(map__19011);
var m = map__19011__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19011__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19028_19328 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19029_19329 = null;
var count__19030_19330 = (0);
var i__19031_19331 = (0);
while(true){
if((i__19031_19331 < count__19030_19330)){
var f_19333 = chunk__19029_19329.cljs$core$IIndexed$_nth$arity$2(null,i__19031_19331);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19333], 0));


var G__19334 = seq__19028_19328;
var G__19335 = chunk__19029_19329;
var G__19336 = count__19030_19330;
var G__19337 = (i__19031_19331 + (1));
seq__19028_19328 = G__19334;
chunk__19029_19329 = G__19335;
count__19030_19330 = G__19336;
i__19031_19331 = G__19337;
continue;
} else {
var temp__5825__auto___19339 = cljs.core.seq(seq__19028_19328);
if(temp__5825__auto___19339){
var seq__19028_19341__$1 = temp__5825__auto___19339;
if(cljs.core.chunked_seq_QMARK_(seq__19028_19341__$1)){
var c__5673__auto___19342 = cljs.core.chunk_first(seq__19028_19341__$1);
var G__19344 = cljs.core.chunk_rest(seq__19028_19341__$1);
var G__19345 = c__5673__auto___19342;
var G__19346 = cljs.core.count(c__5673__auto___19342);
var G__19347 = (0);
seq__19028_19328 = G__19344;
chunk__19029_19329 = G__19345;
count__19030_19330 = G__19346;
i__19031_19331 = G__19347;
continue;
} else {
var f_19352 = cljs.core.first(seq__19028_19341__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19352], 0));


var G__19354 = cljs.core.next(seq__19028_19341__$1);
var G__19355 = null;
var G__19356 = (0);
var G__19357 = (0);
seq__19028_19328 = G__19354;
chunk__19029_19329 = G__19355;
count__19030_19330 = G__19356;
i__19031_19331 = G__19357;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19363 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19363], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19363)))?cljs.core.second(arglists_19363):arglists_19363)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19047_19383 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19048_19384 = null;
var count__19049_19385 = (0);
var i__19050_19386 = (0);
while(true){
if((i__19050_19386 < count__19049_19385)){
var vec__19069_19387 = chunk__19048_19384.cljs$core$IIndexed$_nth$arity$2(null,i__19050_19386);
var name_19388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069_19387,(0),null);
var map__19072_19389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069_19387,(1),null);
var map__19072_19390__$1 = cljs.core.__destructure_map(map__19072_19389);
var doc_19391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19072_19390__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19072_19390__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19388], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19392], 0));

if(cljs.core.truth_(doc_19391)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19391], 0));
} else {
}


var G__19394 = seq__19047_19383;
var G__19395 = chunk__19048_19384;
var G__19396 = count__19049_19385;
var G__19397 = (i__19050_19386 + (1));
seq__19047_19383 = G__19394;
chunk__19048_19384 = G__19395;
count__19049_19385 = G__19396;
i__19050_19386 = G__19397;
continue;
} else {
var temp__5825__auto___19398 = cljs.core.seq(seq__19047_19383);
if(temp__5825__auto___19398){
var seq__19047_19400__$1 = temp__5825__auto___19398;
if(cljs.core.chunked_seq_QMARK_(seq__19047_19400__$1)){
var c__5673__auto___19402 = cljs.core.chunk_first(seq__19047_19400__$1);
var G__19403 = cljs.core.chunk_rest(seq__19047_19400__$1);
var G__19404 = c__5673__auto___19402;
var G__19405 = cljs.core.count(c__5673__auto___19402);
var G__19406 = (0);
seq__19047_19383 = G__19403;
chunk__19048_19384 = G__19404;
count__19049_19385 = G__19405;
i__19050_19386 = G__19406;
continue;
} else {
var vec__19080_19407 = cljs.core.first(seq__19047_19400__$1);
var name_19408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080_19407,(0),null);
var map__19083_19409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080_19407,(1),null);
var map__19083_19410__$1 = cljs.core.__destructure_map(map__19083_19409);
var doc_19411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083_19410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083_19410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19408], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19412], 0));

if(cljs.core.truth_(doc_19411)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19411], 0));
} else {
}


var G__19419 = cljs.core.next(seq__19047_19400__$1);
var G__19420 = null;
var G__19421 = (0);
var G__19422 = (0);
seq__19047_19383 = G__19419;
chunk__19048_19384 = G__19420;
count__19049_19385 = G__19421;
i__19050_19386 = G__19422;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19089 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19090 = null;
var count__19091 = (0);
var i__19092 = (0);
while(true){
if((i__19092 < count__19091)){
var role = chunk__19090.cljs$core$IIndexed$_nth$arity$2(null,i__19092);
var temp__5825__auto___19427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19427__$1)){
var spec_19433 = temp__5825__auto___19427__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19433)], 0));
} else {
}


var G__19434 = seq__19089;
var G__19435 = chunk__19090;
var G__19436 = count__19091;
var G__19437 = (i__19092 + (1));
seq__19089 = G__19434;
chunk__19090 = G__19435;
count__19091 = G__19436;
i__19092 = G__19437;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19089);
if(temp__5825__auto____$1){
var seq__19089__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19089__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19089__$1);
var G__19442 = cljs.core.chunk_rest(seq__19089__$1);
var G__19443 = c__5673__auto__;
var G__19444 = cljs.core.count(c__5673__auto__);
var G__19445 = (0);
seq__19089 = G__19442;
chunk__19090 = G__19443;
count__19091 = G__19444;
i__19092 = G__19445;
continue;
} else {
var role = cljs.core.first(seq__19089__$1);
var temp__5825__auto___19446__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19446__$2)){
var spec_19449 = temp__5825__auto___19446__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19449)], 0));
} else {
}


var G__19455 = cljs.core.next(seq__19089__$1);
var G__19456 = null;
var G__19457 = (0);
var G__19458 = (0);
seq__19089 = G__19455;
chunk__19090 = G__19456;
count__19091 = G__19457;
i__19092 = G__19458;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19121 = datafied_throwable;
var map__19121__$1 = cljs.core.__destructure_map(map__19121);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19121__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19121__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19121__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19122 = cljs.core.last(via);
var map__19122__$1 = cljs.core.__destructure_map(map__19122);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19124 = data;
var map__19124__$1 = cljs.core.__destructure_map(map__19124);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19125 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19125__$1 = cljs.core.__destructure_map(map__19125);
var top_data = map__19125__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19129 = phase;
var G__19129__$1 = (((G__19129 instanceof cljs.core.Keyword))?G__19129.fqn:null);
switch (G__19129__$1) {
case "read-source":
var map__19130 = data;
var map__19130__$1 = cljs.core.__destructure_map(map__19130);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19130__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19130__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19131__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19131,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19131);
var G__19131__$2 = (cljs.core.truth_((function (){var fexpr__19132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19132.cljs$core$IFn$_invoke$arity$1 ? fexpr__19132.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19132.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19131__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19131__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19131__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19134 = top_data;
var G__19134__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19134,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19134);
var G__19134__$2 = (cljs.core.truth_((function (){var fexpr__19135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19135.cljs$core$IFn$_invoke$arity$1 ? fexpr__19135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19135.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19134__$1);
var G__19134__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19134__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19134__$2);
var G__19134__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19134__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19134__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19134__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19134__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19139 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19139,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19139,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19139,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19139,(3),null);
var G__19145 = top_data;
var G__19145__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19145,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19145);
var G__19145__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19145__$1);
var G__19145__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19145__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19145__$2);
var G__19145__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19145__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19145__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19145__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19145__$4;
}

break;
case "execution":
var vec__19155 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19120_SHARP_){
var or__5142__auto__ = (p1__19120_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19160 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19160.cljs$core$IFn$_invoke$arity$1 ? fexpr__19160.cljs$core$IFn$_invoke$arity$1(p1__19120_SHARP_) : fexpr__19160.call(null,p1__19120_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19166 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19166__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19166);
var G__19166__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19166__$1);
var G__19166__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19166__$2);
var G__19166__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19166__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19166__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19166__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19129__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19203){
var map__19205 = p__19203;
var map__19205__$1 = cljs.core.__destructure_map(map__19205);
var triage_data = map__19205__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19234 = phase;
var G__19234__$1 = (((G__19234 instanceof cljs.core.Keyword))?G__19234.fqn:null);
switch (G__19234__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19237 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19238 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19239 = loc;
var G__19240 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19243_19582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19244_19583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19245_19584 = true;
var _STAR_print_fn_STAR__temp_val__19246_19585 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19245_19584);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19246_19585);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19194_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19194_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19244_19583);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19243_19582);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19237,G__19238,G__19239,G__19240) : format.call(null,G__19237,G__19238,G__19239,G__19240));

break;
case "macroexpansion":
var G__19253 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19254 = cause_type;
var G__19255 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19256 = loc;
var G__19257 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19253,G__19254,G__19255,G__19256,G__19257) : format.call(null,G__19253,G__19254,G__19255,G__19256,G__19257));

break;
case "compile-syntax-check":
var G__19261 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19262 = cause_type;
var G__19263 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19264 = loc;
var G__19265 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19261,G__19262,G__19263,G__19264,G__19265) : format.call(null,G__19261,G__19262,G__19263,G__19264,G__19265));

break;
case "compilation":
var G__19267 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19268 = cause_type;
var G__19269 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19270 = loc;
var G__19271 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19267,G__19268,G__19269,G__19270,G__19271) : format.call(null,G__19267,G__19268,G__19269,G__19270,G__19271));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19276 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19277 = symbol;
var G__19278 = loc;
var G__19279 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19282_19607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19283_19608 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19284_19609 = true;
var _STAR_print_fn_STAR__temp_val__19285_19610 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19284_19609);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19285_19610);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19202_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19202_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19283_19608);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19282_19607);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19276,G__19277,G__19278,G__19279) : format.call(null,G__19276,G__19277,G__19278,G__19279));
} else {
var G__19294 = "Execution error%s at %s(%s).\n%s\n";
var G__19295 = cause_type;
var G__19296 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19297 = loc;
var G__19298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19294,G__19295,G__19296,G__19297,G__19298) : format.call(null,G__19294,G__19295,G__19296,G__19297,G__19298));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19234__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
