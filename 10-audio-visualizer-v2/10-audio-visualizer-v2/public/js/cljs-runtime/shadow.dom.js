goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12718 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12718(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12722 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12722(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11812 = coll;
var G__11813 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11812,G__11813) : shadow.dom.lazy_native_coll_seq.call(null,G__11812,G__11813));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11835 = arguments.length;
switch (G__11835) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11847 = arguments.length;
switch (G__11847) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11853 = arguments.length;
switch (G__11853) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11880 = arguments.length;
switch (G__11880) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11887 = arguments.length;
switch (G__11887) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11899 = arguments.length;
switch (G__11899) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11902){if((e11902 instanceof Object)){
var e = e11902;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11902;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11906 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11907 = null;
var count__11908 = (0);
var i__11909 = (0);
while(true){
if((i__11909 < count__11908)){
var el = chunk__11907.cljs$core$IIndexed$_nth$arity$2(null,i__11909);
var handler_12775__$1 = ((function (seq__11906,chunk__11907,count__11908,i__11909,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11906,chunk__11907,count__11908,i__11909,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12775__$1);


var G__12776 = seq__11906;
var G__12777 = chunk__11907;
var G__12778 = count__11908;
var G__12779 = (i__11909 + (1));
seq__11906 = G__12776;
chunk__11907 = G__12777;
count__11908 = G__12778;
i__11909 = G__12779;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11906);
if(temp__5825__auto__){
var seq__11906__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11906__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11906__$1);
var G__12780 = cljs.core.chunk_rest(seq__11906__$1);
var G__12781 = c__5673__auto__;
var G__12782 = cljs.core.count(c__5673__auto__);
var G__12783 = (0);
seq__11906 = G__12780;
chunk__11907 = G__12781;
count__11908 = G__12782;
i__11909 = G__12783;
continue;
} else {
var el = cljs.core.first(seq__11906__$1);
var handler_12784__$1 = ((function (seq__11906,chunk__11907,count__11908,i__11909,el,seq__11906__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11906,chunk__11907,count__11908,i__11909,el,seq__11906__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12784__$1);


var G__12785 = cljs.core.next(seq__11906__$1);
var G__12786 = null;
var G__12787 = (0);
var G__12788 = (0);
seq__11906 = G__12785;
chunk__11907 = G__12786;
count__11908 = G__12787;
i__11909 = G__12788;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11913 = arguments.length;
switch (G__11913) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11918 = cljs.core.seq(events);
var chunk__11919 = null;
var count__11920 = (0);
var i__11921 = (0);
while(true){
if((i__11921 < count__11920)){
var vec__11929 = chunk__11919.cljs$core$IIndexed$_nth$arity$2(null,i__11921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11929,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12800 = seq__11918;
var G__12801 = chunk__11919;
var G__12802 = count__11920;
var G__12803 = (i__11921 + (1));
seq__11918 = G__12800;
chunk__11919 = G__12801;
count__11920 = G__12802;
i__11921 = G__12803;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11918);
if(temp__5825__auto__){
var seq__11918__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11918__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11918__$1);
var G__12804 = cljs.core.chunk_rest(seq__11918__$1);
var G__12805 = c__5673__auto__;
var G__12806 = cljs.core.count(c__5673__auto__);
var G__12807 = (0);
seq__11918 = G__12804;
chunk__11919 = G__12805;
count__11920 = G__12806;
i__11921 = G__12807;
continue;
} else {
var vec__11932 = cljs.core.first(seq__11918__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12808 = cljs.core.next(seq__11918__$1);
var G__12809 = null;
var G__12810 = (0);
var G__12811 = (0);
seq__11918 = G__12808;
chunk__11919 = G__12809;
count__11920 = G__12810;
i__11921 = G__12811;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11935 = cljs.core.seq(styles);
var chunk__11936 = null;
var count__11937 = (0);
var i__11938 = (0);
while(true){
if((i__11938 < count__11937)){
var vec__11947 = chunk__11936.cljs$core$IIndexed$_nth$arity$2(null,i__11938);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11947,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12812 = seq__11935;
var G__12813 = chunk__11936;
var G__12814 = count__11937;
var G__12815 = (i__11938 + (1));
seq__11935 = G__12812;
chunk__11936 = G__12813;
count__11937 = G__12814;
i__11938 = G__12815;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11935);
if(temp__5825__auto__){
var seq__11935__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11935__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11935__$1);
var G__12817 = cljs.core.chunk_rest(seq__11935__$1);
var G__12818 = c__5673__auto__;
var G__12819 = cljs.core.count(c__5673__auto__);
var G__12820 = (0);
seq__11935 = G__12817;
chunk__11936 = G__12818;
count__11937 = G__12819;
i__11938 = G__12820;
continue;
} else {
var vec__11950 = cljs.core.first(seq__11935__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12822 = cljs.core.next(seq__11935__$1);
var G__12823 = null;
var G__12824 = (0);
var G__12825 = (0);
seq__11935 = G__12822;
chunk__11936 = G__12823;
count__11937 = G__12824;
i__11938 = G__12825;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11955_12827 = key;
var G__11955_12828__$1 = (((G__11955_12827 instanceof cljs.core.Keyword))?G__11955_12827.fqn:null);
switch (G__11955_12828__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12833 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_12833,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_12833,"aria-");
}
})())){
el.setAttribute(ks_12833,value);
} else {
(el[ks_12833] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11963){
var map__11964 = p__11963;
var map__11964__$1 = cljs.core.__destructure_map(map__11964);
var props = map__11964__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11964__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11965 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11968 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11968,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11968;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11971 = arguments.length;
switch (G__11971) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12032){
var vec__12033 = p__12032;
var seq__12034 = cljs.core.seq(vec__12033);
var first__12035 = cljs.core.first(seq__12034);
var seq__12034__$1 = cljs.core.next(seq__12034);
var nn = first__12035;
var first__12035__$1 = cljs.core.first(seq__12034__$1);
var seq__12034__$2 = cljs.core.next(seq__12034__$1);
var np = first__12035__$1;
var nc = seq__12034__$2;
var node = vec__12033;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12036 = nn;
var G__12037 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12036,G__12037) : create_fn.call(null,G__12036,G__12037));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12038 = nn;
var G__12039 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12038,G__12039) : create_fn.call(null,G__12038,G__12039));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12040 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12040,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12040,(1),null);
var seq__12043_12840 = cljs.core.seq(node_children);
var chunk__12044_12841 = null;
var count__12045_12842 = (0);
var i__12046_12843 = (0);
while(true){
if((i__12046_12843 < count__12045_12842)){
var child_struct_12845 = chunk__12044_12841.cljs$core$IIndexed$_nth$arity$2(null,i__12046_12843);
var children_12847 = shadow.dom.dom_node(child_struct_12845);
if(cljs.core.seq_QMARK_(children_12847)){
var seq__12072_12848 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12847));
var chunk__12074_12849 = null;
var count__12075_12850 = (0);
var i__12076_12851 = (0);
while(true){
if((i__12076_12851 < count__12075_12850)){
var child_12852 = chunk__12074_12849.cljs$core$IIndexed$_nth$arity$2(null,i__12076_12851);
if(cljs.core.truth_(child_12852)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12852);


var G__12853 = seq__12072_12848;
var G__12854 = chunk__12074_12849;
var G__12856 = count__12075_12850;
var G__12857 = (i__12076_12851 + (1));
seq__12072_12848 = G__12853;
chunk__12074_12849 = G__12854;
count__12075_12850 = G__12856;
i__12076_12851 = G__12857;
continue;
} else {
var G__12858 = seq__12072_12848;
var G__12859 = chunk__12074_12849;
var G__12860 = count__12075_12850;
var G__12861 = (i__12076_12851 + (1));
seq__12072_12848 = G__12858;
chunk__12074_12849 = G__12859;
count__12075_12850 = G__12860;
i__12076_12851 = G__12861;
continue;
}
} else {
var temp__5825__auto___12862 = cljs.core.seq(seq__12072_12848);
if(temp__5825__auto___12862){
var seq__12072_12863__$1 = temp__5825__auto___12862;
if(cljs.core.chunked_seq_QMARK_(seq__12072_12863__$1)){
var c__5673__auto___12864 = cljs.core.chunk_first(seq__12072_12863__$1);
var G__12866 = cljs.core.chunk_rest(seq__12072_12863__$1);
var G__12867 = c__5673__auto___12864;
var G__12868 = cljs.core.count(c__5673__auto___12864);
var G__12869 = (0);
seq__12072_12848 = G__12866;
chunk__12074_12849 = G__12867;
count__12075_12850 = G__12868;
i__12076_12851 = G__12869;
continue;
} else {
var child_12870 = cljs.core.first(seq__12072_12863__$1);
if(cljs.core.truth_(child_12870)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12870);


var G__12871 = cljs.core.next(seq__12072_12863__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12072_12848 = G__12871;
chunk__12074_12849 = G__12872;
count__12075_12850 = G__12873;
i__12076_12851 = G__12874;
continue;
} else {
var G__12875 = cljs.core.next(seq__12072_12863__$1);
var G__12876 = null;
var G__12877 = (0);
var G__12878 = (0);
seq__12072_12848 = G__12875;
chunk__12074_12849 = G__12876;
count__12075_12850 = G__12877;
i__12076_12851 = G__12878;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12847);
}


var G__12879 = seq__12043_12840;
var G__12880 = chunk__12044_12841;
var G__12881 = count__12045_12842;
var G__12882 = (i__12046_12843 + (1));
seq__12043_12840 = G__12879;
chunk__12044_12841 = G__12880;
count__12045_12842 = G__12881;
i__12046_12843 = G__12882;
continue;
} else {
var temp__5825__auto___12884 = cljs.core.seq(seq__12043_12840);
if(temp__5825__auto___12884){
var seq__12043_12885__$1 = temp__5825__auto___12884;
if(cljs.core.chunked_seq_QMARK_(seq__12043_12885__$1)){
var c__5673__auto___12887 = cljs.core.chunk_first(seq__12043_12885__$1);
var G__12888 = cljs.core.chunk_rest(seq__12043_12885__$1);
var G__12889 = c__5673__auto___12887;
var G__12890 = cljs.core.count(c__5673__auto___12887);
var G__12891 = (0);
seq__12043_12840 = G__12888;
chunk__12044_12841 = G__12889;
count__12045_12842 = G__12890;
i__12046_12843 = G__12891;
continue;
} else {
var child_struct_12892 = cljs.core.first(seq__12043_12885__$1);
var children_12893 = shadow.dom.dom_node(child_struct_12892);
if(cljs.core.seq_QMARK_(children_12893)){
var seq__12080_12895 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12893));
var chunk__12082_12896 = null;
var count__12083_12897 = (0);
var i__12084_12898 = (0);
while(true){
if((i__12084_12898 < count__12083_12897)){
var child_12900 = chunk__12082_12896.cljs$core$IIndexed$_nth$arity$2(null,i__12084_12898);
if(cljs.core.truth_(child_12900)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12900);


var G__12901 = seq__12080_12895;
var G__12902 = chunk__12082_12896;
var G__12903 = count__12083_12897;
var G__12904 = (i__12084_12898 + (1));
seq__12080_12895 = G__12901;
chunk__12082_12896 = G__12902;
count__12083_12897 = G__12903;
i__12084_12898 = G__12904;
continue;
} else {
var G__12905 = seq__12080_12895;
var G__12906 = chunk__12082_12896;
var G__12907 = count__12083_12897;
var G__12908 = (i__12084_12898 + (1));
seq__12080_12895 = G__12905;
chunk__12082_12896 = G__12906;
count__12083_12897 = G__12907;
i__12084_12898 = G__12908;
continue;
}
} else {
var temp__5825__auto___12910__$1 = cljs.core.seq(seq__12080_12895);
if(temp__5825__auto___12910__$1){
var seq__12080_12911__$1 = temp__5825__auto___12910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12080_12911__$1)){
var c__5673__auto___12912 = cljs.core.chunk_first(seq__12080_12911__$1);
var G__12913 = cljs.core.chunk_rest(seq__12080_12911__$1);
var G__12914 = c__5673__auto___12912;
var G__12915 = cljs.core.count(c__5673__auto___12912);
var G__12916 = (0);
seq__12080_12895 = G__12913;
chunk__12082_12896 = G__12914;
count__12083_12897 = G__12915;
i__12084_12898 = G__12916;
continue;
} else {
var child_12917 = cljs.core.first(seq__12080_12911__$1);
if(cljs.core.truth_(child_12917)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12917);


var G__12918 = cljs.core.next(seq__12080_12911__$1);
var G__12919 = null;
var G__12920 = (0);
var G__12921 = (0);
seq__12080_12895 = G__12918;
chunk__12082_12896 = G__12919;
count__12083_12897 = G__12920;
i__12084_12898 = G__12921;
continue;
} else {
var G__12922 = cljs.core.next(seq__12080_12911__$1);
var G__12923 = null;
var G__12924 = (0);
var G__12925 = (0);
seq__12080_12895 = G__12922;
chunk__12082_12896 = G__12923;
count__12083_12897 = G__12924;
i__12084_12898 = G__12925;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12893);
}


var G__12926 = cljs.core.next(seq__12043_12885__$1);
var G__12927 = null;
var G__12928 = (0);
var G__12929 = (0);
seq__12043_12840 = G__12926;
chunk__12044_12841 = G__12927;
count__12045_12842 = G__12928;
i__12046_12843 = G__12929;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12135 = cljs.core.seq(node);
var chunk__12136 = null;
var count__12137 = (0);
var i__12138 = (0);
while(true){
if((i__12138 < count__12137)){
var n = chunk__12136.cljs$core$IIndexed$_nth$arity$2(null,i__12138);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12936 = seq__12135;
var G__12937 = chunk__12136;
var G__12938 = count__12137;
var G__12939 = (i__12138 + (1));
seq__12135 = G__12936;
chunk__12136 = G__12937;
count__12137 = G__12938;
i__12138 = G__12939;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12135);
if(temp__5825__auto__){
var seq__12135__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12135__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12135__$1);
var G__12945 = cljs.core.chunk_rest(seq__12135__$1);
var G__12946 = c__5673__auto__;
var G__12947 = cljs.core.count(c__5673__auto__);
var G__12948 = (0);
seq__12135 = G__12945;
chunk__12136 = G__12946;
count__12137 = G__12947;
i__12138 = G__12948;
continue;
} else {
var n = cljs.core.first(seq__12135__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12949 = cljs.core.next(seq__12135__$1);
var G__12950 = null;
var G__12951 = (0);
var G__12952 = (0);
seq__12135 = G__12949;
chunk__12136 = G__12950;
count__12137 = G__12951;
i__12138 = G__12952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12144 = arguments.length;
switch (G__12144) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12156 = arguments.length;
switch (G__12156) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12168 = arguments.length;
switch (G__12168) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12961 = arguments.length;
var i__5877__auto___12962 = (0);
while(true){
if((i__5877__auto___12962 < len__5876__auto___12961)){
args__5882__auto__.push((arguments[i__5877__auto___12962]));

var G__12963 = (i__5877__auto___12962 + (1));
i__5877__auto___12962 = G__12963;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12207_12966 = cljs.core.seq(nodes);
var chunk__12208_12967 = null;
var count__12209_12968 = (0);
var i__12210_12969 = (0);
while(true){
if((i__12210_12969 < count__12209_12968)){
var node_12970 = chunk__12208_12967.cljs$core$IIndexed$_nth$arity$2(null,i__12210_12969);
fragment.appendChild(shadow.dom._to_dom(node_12970));


var G__12971 = seq__12207_12966;
var G__12972 = chunk__12208_12967;
var G__12973 = count__12209_12968;
var G__12974 = (i__12210_12969 + (1));
seq__12207_12966 = G__12971;
chunk__12208_12967 = G__12972;
count__12209_12968 = G__12973;
i__12210_12969 = G__12974;
continue;
} else {
var temp__5825__auto___12975 = cljs.core.seq(seq__12207_12966);
if(temp__5825__auto___12975){
var seq__12207_12976__$1 = temp__5825__auto___12975;
if(cljs.core.chunked_seq_QMARK_(seq__12207_12976__$1)){
var c__5673__auto___12977 = cljs.core.chunk_first(seq__12207_12976__$1);
var G__12978 = cljs.core.chunk_rest(seq__12207_12976__$1);
var G__12979 = c__5673__auto___12977;
var G__12980 = cljs.core.count(c__5673__auto___12977);
var G__12981 = (0);
seq__12207_12966 = G__12978;
chunk__12208_12967 = G__12979;
count__12209_12968 = G__12980;
i__12210_12969 = G__12981;
continue;
} else {
var node_12982 = cljs.core.first(seq__12207_12976__$1);
fragment.appendChild(shadow.dom._to_dom(node_12982));


var G__12983 = cljs.core.next(seq__12207_12976__$1);
var G__12984 = null;
var G__12985 = (0);
var G__12986 = (0);
seq__12207_12966 = G__12983;
chunk__12208_12967 = G__12984;
count__12209_12968 = G__12985;
i__12210_12969 = G__12986;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12202){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12202));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12222_12989 = cljs.core.seq(scripts);
var chunk__12223_12990 = null;
var count__12224_12991 = (0);
var i__12225_12992 = (0);
while(true){
if((i__12225_12992 < count__12224_12991)){
var vec__12234_12993 = chunk__12223_12990.cljs$core$IIndexed$_nth$arity$2(null,i__12225_12992);
var script_tag_12994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12234_12993,(0),null);
var script_body_12995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12234_12993,(1),null);
eval(script_body_12995);


var G__12996 = seq__12222_12989;
var G__12997 = chunk__12223_12990;
var G__12998 = count__12224_12991;
var G__12999 = (i__12225_12992 + (1));
seq__12222_12989 = G__12996;
chunk__12223_12990 = G__12997;
count__12224_12991 = G__12998;
i__12225_12992 = G__12999;
continue;
} else {
var temp__5825__auto___13000 = cljs.core.seq(seq__12222_12989);
if(temp__5825__auto___13000){
var seq__12222_13001__$1 = temp__5825__auto___13000;
if(cljs.core.chunked_seq_QMARK_(seq__12222_13001__$1)){
var c__5673__auto___13002 = cljs.core.chunk_first(seq__12222_13001__$1);
var G__13003 = cljs.core.chunk_rest(seq__12222_13001__$1);
var G__13004 = c__5673__auto___13002;
var G__13005 = cljs.core.count(c__5673__auto___13002);
var G__13006 = (0);
seq__12222_12989 = G__13003;
chunk__12223_12990 = G__13004;
count__12224_12991 = G__13005;
i__12225_12992 = G__13006;
continue;
} else {
var vec__12240_13007 = cljs.core.first(seq__12222_13001__$1);
var script_tag_13008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12240_13007,(0),null);
var script_body_13009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12240_13007,(1),null);
eval(script_body_13009);


var G__13011 = cljs.core.next(seq__12222_13001__$1);
var G__13012 = null;
var G__13013 = (0);
var G__13014 = (0);
seq__12222_12989 = G__13011;
chunk__12223_12990 = G__13012;
count__12224_12991 = G__13013;
i__12225_12992 = G__13014;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12248){
var vec__12252 = p__12248;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12252,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12252,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12268 = arguments.length;
switch (G__12268) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12275 = cljs.core.seq(style_keys);
var chunk__12276 = null;
var count__12277 = (0);
var i__12278 = (0);
while(true){
if((i__12278 < count__12277)){
var it = chunk__12276.cljs$core$IIndexed$_nth$arity$2(null,i__12278);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13030 = seq__12275;
var G__13031 = chunk__12276;
var G__13032 = count__12277;
var G__13033 = (i__12278 + (1));
seq__12275 = G__13030;
chunk__12276 = G__13031;
count__12277 = G__13032;
i__12278 = G__13033;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12275);
if(temp__5825__auto__){
var seq__12275__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12275__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12275__$1);
var G__13034 = cljs.core.chunk_rest(seq__12275__$1);
var G__13035 = c__5673__auto__;
var G__13036 = cljs.core.count(c__5673__auto__);
var G__13037 = (0);
seq__12275 = G__13034;
chunk__12276 = G__13035;
count__12277 = G__13036;
i__12278 = G__13037;
continue;
} else {
var it = cljs.core.first(seq__12275__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13038 = cljs.core.next(seq__12275__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__12275 = G__13038;
chunk__12276 = G__13039;
count__12277 = G__13040;
i__12278 = G__13041;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12286,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12336 = k12286;
var G__12336__$1 = (((G__12336 instanceof cljs.core.Keyword))?G__12336.fqn:null);
switch (G__12336__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12286,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12348){
var vec__12351 = p__12348;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12351,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12351,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12285){
var self__ = this;
var G__12285__$1 = this;
return (new cljs.core.RecordIter((0),G__12285__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12288,other12289){
var self__ = this;
var this12288__$1 = this;
return (((!((other12289 == null)))) && ((((this12288__$1.constructor === other12289.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12288__$1.x,other12289.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12288__$1.y,other12289.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12288__$1.__extmap,other12289.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12286){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12372 = k12286;
var G__12372__$1 = (((G__12372 instanceof cljs.core.Keyword))?G__12372.fqn:null);
switch (G__12372__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12286);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12285){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12375 = cljs.core.keyword_identical_QMARK_;
var expr__12376 = k__5457__auto__;
if(cljs.core.truth_((pred__12375.cljs$core$IFn$_invoke$arity$2 ? pred__12375.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12376) : pred__12375.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12376)))){
return (new shadow.dom.Coordinate(G__12285,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12375.cljs$core$IFn$_invoke$arity$2 ? pred__12375.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12376) : pred__12375.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12376)))){
return (new shadow.dom.Coordinate(self__.x,G__12285,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12285),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12285){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12285,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12320){
var extmap__5490__auto__ = (function (){var G__12392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12320,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12320)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12392);
} else {
return G__12392;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12320),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12320),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12405,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12410 = k12405;
var G__12410__$1 = (((G__12410 instanceof cljs.core.Keyword))?G__12410.fqn:null);
switch (G__12410__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12405,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12411){
var vec__12413 = p__12411;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12413,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12404){
var self__ = this;
var G__12404__$1 = this;
return (new cljs.core.RecordIter((0),G__12404__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12406,other12407){
var self__ = this;
var this12406__$1 = this;
return (((!((other12407 == null)))) && ((((this12406__$1.constructor === other12407.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12406__$1.w,other12407.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12406__$1.h,other12407.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12406__$1.__extmap,other12407.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12405){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12469 = k12405;
var G__12469__$1 = (((G__12469 instanceof cljs.core.Keyword))?G__12469.fqn:null);
switch (G__12469__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12405);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12404){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12475 = cljs.core.keyword_identical_QMARK_;
var expr__12476 = k__5457__auto__;
if(cljs.core.truth_((pred__12475.cljs$core$IFn$_invoke$arity$2 ? pred__12475.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12476) : pred__12475.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12476)))){
return (new shadow.dom.Size(G__12404,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12475.cljs$core$IFn$_invoke$arity$2 ? pred__12475.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12476) : pred__12475.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12476)))){
return (new shadow.dom.Size(self__.w,G__12404,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12404),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12404){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12404,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12408){
var extmap__5490__auto__ = (function (){var G__12485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12408,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12485);
} else {
return G__12485;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12408),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12408),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__13165 = (i + (1));
var G__13166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13165;
ret = G__13166;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12513){
var vec__12514 = p__12513;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12518 = arguments.length;
switch (G__12518) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13188 = ps;
var G__13189 = (i + (1));
el__$1 = G__13188;
i = G__13189;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12557 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12560_13205 = cljs.core.seq(props);
var chunk__12561_13206 = null;
var count__12562_13207 = (0);
var i__12563_13208 = (0);
while(true){
if((i__12563_13208 < count__12562_13207)){
var vec__12579_13209 = chunk__12561_13206.cljs$core$IIndexed$_nth$arity$2(null,i__12563_13208);
var k_13210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579_13209,(0),null);
var v_13211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579_13209,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_13210);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13210),v_13211);


var G__13214 = seq__12560_13205;
var G__13215 = chunk__12561_13206;
var G__13216 = count__12562_13207;
var G__13217 = (i__12563_13208 + (1));
seq__12560_13205 = G__13214;
chunk__12561_13206 = G__13215;
count__12562_13207 = G__13216;
i__12563_13208 = G__13217;
continue;
} else {
var temp__5825__auto___13218 = cljs.core.seq(seq__12560_13205);
if(temp__5825__auto___13218){
var seq__12560_13219__$1 = temp__5825__auto___13218;
if(cljs.core.chunked_seq_QMARK_(seq__12560_13219__$1)){
var c__5673__auto___13220 = cljs.core.chunk_first(seq__12560_13219__$1);
var G__13221 = cljs.core.chunk_rest(seq__12560_13219__$1);
var G__13222 = c__5673__auto___13220;
var G__13223 = cljs.core.count(c__5673__auto___13220);
var G__13224 = (0);
seq__12560_13205 = G__13221;
chunk__12561_13206 = G__13222;
count__12562_13207 = G__13223;
i__12563_13208 = G__13224;
continue;
} else {
var vec__12593_13225 = cljs.core.first(seq__12560_13219__$1);
var k_13226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_13225,(0),null);
var v_13227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_13225,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_13226);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13226),v_13227);


var G__13231 = cljs.core.next(seq__12560_13219__$1);
var G__13232 = null;
var G__13233 = (0);
var G__13234 = (0);
seq__12560_13205 = G__13231;
chunk__12561_13206 = G__13232;
count__12562_13207 = G__13233;
i__12563_13208 = G__13234;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12599 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12599,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12599,(1),null);
var seq__12606_13242 = cljs.core.seq(node_children);
var chunk__12608_13243 = null;
var count__12609_13244 = (0);
var i__12610_13245 = (0);
while(true){
if((i__12610_13245 < count__12609_13244)){
var child_struct_13248 = chunk__12608_13243.cljs$core$IIndexed$_nth$arity$2(null,i__12610_13245);
if((!((child_struct_13248 == null)))){
if(typeof child_struct_13248 === 'string'){
var text_13249 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13249)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13248)));
} else {
var children_13253 = shadow.dom.svg_node(child_struct_13248);
if(cljs.core.seq_QMARK_(children_13253)){
var seq__12643_13256 = cljs.core.seq(children_13253);
var chunk__12645_13257 = null;
var count__12646_13258 = (0);
var i__12647_13259 = (0);
while(true){
if((i__12647_13259 < count__12646_13258)){
var child_13261 = chunk__12645_13257.cljs$core$IIndexed$_nth$arity$2(null,i__12647_13259);
if(cljs.core.truth_(child_13261)){
node.appendChild(child_13261);


var G__13262 = seq__12643_13256;
var G__13263 = chunk__12645_13257;
var G__13264 = count__12646_13258;
var G__13266 = (i__12647_13259 + (1));
seq__12643_13256 = G__13262;
chunk__12645_13257 = G__13263;
count__12646_13258 = G__13264;
i__12647_13259 = G__13266;
continue;
} else {
var G__13267 = seq__12643_13256;
var G__13268 = chunk__12645_13257;
var G__13269 = count__12646_13258;
var G__13270 = (i__12647_13259 + (1));
seq__12643_13256 = G__13267;
chunk__12645_13257 = G__13268;
count__12646_13258 = G__13269;
i__12647_13259 = G__13270;
continue;
}
} else {
var temp__5825__auto___13271 = cljs.core.seq(seq__12643_13256);
if(temp__5825__auto___13271){
var seq__12643_13273__$1 = temp__5825__auto___13271;
if(cljs.core.chunked_seq_QMARK_(seq__12643_13273__$1)){
var c__5673__auto___13277 = cljs.core.chunk_first(seq__12643_13273__$1);
var G__13278 = cljs.core.chunk_rest(seq__12643_13273__$1);
var G__13279 = c__5673__auto___13277;
var G__13280 = cljs.core.count(c__5673__auto___13277);
var G__13281 = (0);
seq__12643_13256 = G__13278;
chunk__12645_13257 = G__13279;
count__12646_13258 = G__13280;
i__12647_13259 = G__13281;
continue;
} else {
var child_13283 = cljs.core.first(seq__12643_13273__$1);
if(cljs.core.truth_(child_13283)){
node.appendChild(child_13283);


var G__13285 = cljs.core.next(seq__12643_13273__$1);
var G__13286 = null;
var G__13287 = (0);
var G__13288 = (0);
seq__12643_13256 = G__13285;
chunk__12645_13257 = G__13286;
count__12646_13258 = G__13287;
i__12647_13259 = G__13288;
continue;
} else {
var G__13293 = cljs.core.next(seq__12643_13273__$1);
var G__13294 = null;
var G__13295 = (0);
var G__13296 = (0);
seq__12643_13256 = G__13293;
chunk__12645_13257 = G__13294;
count__12646_13258 = G__13295;
i__12647_13259 = G__13296;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13253);
}
}


var G__13298 = seq__12606_13242;
var G__13299 = chunk__12608_13243;
var G__13300 = count__12609_13244;
var G__13301 = (i__12610_13245 + (1));
seq__12606_13242 = G__13298;
chunk__12608_13243 = G__13299;
count__12609_13244 = G__13300;
i__12610_13245 = G__13301;
continue;
} else {
var G__13303 = seq__12606_13242;
var G__13304 = chunk__12608_13243;
var G__13305 = count__12609_13244;
var G__13306 = (i__12610_13245 + (1));
seq__12606_13242 = G__13303;
chunk__12608_13243 = G__13304;
count__12609_13244 = G__13305;
i__12610_13245 = G__13306;
continue;
}
} else {
var temp__5825__auto___13308 = cljs.core.seq(seq__12606_13242);
if(temp__5825__auto___13308){
var seq__12606_13313__$1 = temp__5825__auto___13308;
if(cljs.core.chunked_seq_QMARK_(seq__12606_13313__$1)){
var c__5673__auto___13314 = cljs.core.chunk_first(seq__12606_13313__$1);
var G__13315 = cljs.core.chunk_rest(seq__12606_13313__$1);
var G__13316 = c__5673__auto___13314;
var G__13317 = cljs.core.count(c__5673__auto___13314);
var G__13318 = (0);
seq__12606_13242 = G__13315;
chunk__12608_13243 = G__13316;
count__12609_13244 = G__13317;
i__12610_13245 = G__13318;
continue;
} else {
var child_struct_13322 = cljs.core.first(seq__12606_13313__$1);
if((!((child_struct_13322 == null)))){
if(typeof child_struct_13322 === 'string'){
var text_13323 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13323)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13322)));
} else {
var children_13324 = shadow.dom.svg_node(child_struct_13322);
if(cljs.core.seq_QMARK_(children_13324)){
var seq__12670_13325 = cljs.core.seq(children_13324);
var chunk__12672_13326 = null;
var count__12673_13327 = (0);
var i__12674_13328 = (0);
while(true){
if((i__12674_13328 < count__12673_13327)){
var child_13329 = chunk__12672_13326.cljs$core$IIndexed$_nth$arity$2(null,i__12674_13328);
if(cljs.core.truth_(child_13329)){
node.appendChild(child_13329);


var G__13330 = seq__12670_13325;
var G__13331 = chunk__12672_13326;
var G__13332 = count__12673_13327;
var G__13333 = (i__12674_13328 + (1));
seq__12670_13325 = G__13330;
chunk__12672_13326 = G__13331;
count__12673_13327 = G__13332;
i__12674_13328 = G__13333;
continue;
} else {
var G__13335 = seq__12670_13325;
var G__13336 = chunk__12672_13326;
var G__13337 = count__12673_13327;
var G__13338 = (i__12674_13328 + (1));
seq__12670_13325 = G__13335;
chunk__12672_13326 = G__13336;
count__12673_13327 = G__13337;
i__12674_13328 = G__13338;
continue;
}
} else {
var temp__5825__auto___13339__$1 = cljs.core.seq(seq__12670_13325);
if(temp__5825__auto___13339__$1){
var seq__12670_13340__$1 = temp__5825__auto___13339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12670_13340__$1)){
var c__5673__auto___13341 = cljs.core.chunk_first(seq__12670_13340__$1);
var G__13342 = cljs.core.chunk_rest(seq__12670_13340__$1);
var G__13343 = c__5673__auto___13341;
var G__13344 = cljs.core.count(c__5673__auto___13341);
var G__13345 = (0);
seq__12670_13325 = G__13342;
chunk__12672_13326 = G__13343;
count__12673_13327 = G__13344;
i__12674_13328 = G__13345;
continue;
} else {
var child_13346 = cljs.core.first(seq__12670_13340__$1);
if(cljs.core.truth_(child_13346)){
node.appendChild(child_13346);


var G__13348 = cljs.core.next(seq__12670_13340__$1);
var G__13349 = null;
var G__13350 = (0);
var G__13351 = (0);
seq__12670_13325 = G__13348;
chunk__12672_13326 = G__13349;
count__12673_13327 = G__13350;
i__12674_13328 = G__13351;
continue;
} else {
var G__13352 = cljs.core.next(seq__12670_13340__$1);
var G__13353 = null;
var G__13354 = (0);
var G__13355 = (0);
seq__12670_13325 = G__13352;
chunk__12672_13326 = G__13353;
count__12673_13327 = G__13354;
i__12674_13328 = G__13355;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13324);
}
}


var G__13356 = cljs.core.next(seq__12606_13313__$1);
var G__13357 = null;
var G__13358 = (0);
var G__13359 = (0);
seq__12606_13242 = G__13356;
chunk__12608_13243 = G__13357;
count__12609_13244 = G__13358;
i__12610_13245 = G__13359;
continue;
} else {
var G__13360 = cljs.core.next(seq__12606_13313__$1);
var G__13361 = null;
var G__13362 = (0);
var G__13363 = (0);
seq__12606_13242 = G__13360;
chunk__12608_13243 = G__13361;
count__12609_13244 = G__13362;
i__12610_13245 = G__13363;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___13368 = arguments.length;
var i__5877__auto___13369 = (0);
while(true){
if((i__5877__auto___13369 < len__5876__auto___13368)){
args__5882__auto__.push((arguments[i__5877__auto___13369]));

var G__13370 = (i__5877__auto___13369 + (1));
i__5877__auto___13369 = G__13370;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12689){
var G__12690 = cljs.core.first(seq12689);
var seq12689__$1 = cljs.core.next(seq12689);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12690,seq12689__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
