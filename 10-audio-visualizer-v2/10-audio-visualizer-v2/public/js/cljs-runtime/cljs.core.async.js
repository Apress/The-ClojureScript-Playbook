goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14813 = (function (f,blockable,meta14814){
this.f = f;
this.blockable = blockable;
this.meta14814 = meta14814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14815,meta14814__$1){
var self__ = this;
var _14815__$1 = this;
return (new cljs.core.async.t_cljs$core$async14813(self__.f,self__.blockable,meta14814__$1));
}));

(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14815){
var self__ = this;
var _14815__$1 = this;
return self__.meta14814;
}));

(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14814","meta14814",614654526,null)], null);
}));

(cljs.core.async.t_cljs$core$async14813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14813");

(cljs.core.async.t_cljs$core$async14813.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14813.
 */
cljs.core.async.__GT_t_cljs$core$async14813 = (function cljs$core$async$__GT_t_cljs$core$async14813(f,blockable,meta14814){
return (new cljs.core.async.t_cljs$core$async14813(f,blockable,meta14814));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14811 = arguments.length;
switch (G__14811) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14813(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14839 = arguments.length;
switch (G__14839) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14841 = arguments.length;
switch (G__14841) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14875 = arguments.length;
switch (G__14875) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18404 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18404) : fn1.call(null,val_18404));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18404) : fn1.call(null,val_18404));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14985 = arguments.length;
switch (G__14985) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___18417 = n;
var x_18418 = (0);
while(true){
if((x_18418 < n__5741__auto___18417)){
(a[x_18418] = x_18418);

var G__18419 = (x_18418 + (1));
x_18418 = G__18419;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15020 = (function (flag,meta15021){
this.flag = flag;
this.meta15021 = meta15021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15022,meta15021__$1){
var self__ = this;
var _15022__$1 = this;
return (new cljs.core.async.t_cljs$core$async15020(self__.flag,meta15021__$1));
}));

(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15022){
var self__ = this;
var _15022__$1 = this;
return self__.meta15021;
}));

(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15021","meta15021",1579147323,null)], null);
}));

(cljs.core.async.t_cljs$core$async15020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15020");

(cljs.core.async.t_cljs$core$async15020.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15020.
 */
cljs.core.async.__GT_t_cljs$core$async15020 = (function cljs$core$async$__GT_t_cljs$core$async15020(flag,meta15021){
return (new cljs.core.async.t_cljs$core$async15020(flag,meta15021));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15020(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15032 = (function (flag,cb,meta15033){
this.flag = flag;
this.cb = cb;
this.meta15033 = meta15033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15034,meta15033__$1){
var self__ = this;
var _15034__$1 = this;
return (new cljs.core.async.t_cljs$core$async15032(self__.flag,self__.cb,meta15033__$1));
}));

(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15034){
var self__ = this;
var _15034__$1 = this;
return self__.meta15033;
}));

(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15033","meta15033",-979037677,null)], null);
}));

(cljs.core.async.t_cljs$core$async15032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15032");

(cljs.core.async.t_cljs$core$async15032.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15032.
 */
cljs.core.async.__GT_t_cljs$core$async15032 = (function cljs$core$async$__GT_t_cljs$core$async15032(flag,cb,meta15033){
return (new cljs.core.async.t_cljs$core$async15032(flag,cb,meta15033));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15032(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18442)){
if((!(((port_18442.cljs$core$IFn$_invoke$arity$1 ? port_18442.cljs$core$IFn$_invoke$arity$1((1)) : port_18442.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18443 = (i + (1));
i = G__18443;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15046_SHARP_){
var G__15075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15046_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15075) : fret.call(null,G__15075));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15048_SHARP_){
var G__15076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15048_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15076) : fret.call(null,G__15076));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18445 = (i + (1));
i = G__18445;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18446 = arguments.length;
var i__5877__auto___18447 = (0);
while(true){
if((i__5877__auto___18447 < len__5876__auto___18446)){
args__5882__auto__.push((arguments[i__5877__auto___18447]));

var G__18448 = (i__5877__auto___18447 + (1));
i__5877__auto___18447 = G__18448;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15091){
var map__15092 = p__15091;
var map__15092__$1 = cljs.core.__destructure_map(map__15092);
var opts = map__15092__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15082){
var G__15083 = cljs.core.first(seq15082);
var seq15082__$1 = cljs.core.next(seq15082);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15083,seq15082__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15100 = arguments.length;
switch (G__15100) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14661__auto___18454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15185){
var state_val_15186 = (state_15185[(1)]);
if((state_val_15186 === (7))){
var inst_15162 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15201_18455 = state_15185__$1;
(statearr_15201_18455[(2)] = inst_15162);

(statearr_15201_18455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (1))){
var state_15185__$1 = state_15185;
var statearr_15202_18457 = state_15185__$1;
(statearr_15202_18457[(2)] = null);

(statearr_15202_18457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (4))){
var inst_15128 = (state_15185[(7)]);
var inst_15128__$1 = (state_15185[(2)]);
var inst_15131 = (inst_15128__$1 == null);
var state_15185__$1 = (function (){var statearr_15209 = state_15185;
(statearr_15209[(7)] = inst_15128__$1);

return statearr_15209;
})();
if(cljs.core.truth_(inst_15131)){
var statearr_15211_18458 = state_15185__$1;
(statearr_15211_18458[(1)] = (5));

} else {
var statearr_15212_18459 = state_15185__$1;
(statearr_15212_18459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (13))){
var state_15185__$1 = state_15185;
var statearr_15215_18460 = state_15185__$1;
(statearr_15215_18460[(2)] = null);

(statearr_15215_18460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (6))){
var inst_15128 = (state_15185[(7)]);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15185__$1,(11),to,inst_15128);
} else {
if((state_val_15186 === (3))){
var inst_15170 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15185__$1,inst_15170);
} else {
if((state_val_15186 === (12))){
var state_15185__$1 = state_15185;
var statearr_15224_18464 = state_15185__$1;
(statearr_15224_18464[(2)] = null);

(statearr_15224_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (2))){
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15185__$1,(4),from);
} else {
if((state_val_15186 === (11))){
var inst_15143 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15143)){
var statearr_15226_18465 = state_15185__$1;
(statearr_15226_18465[(1)] = (12));

} else {
var statearr_15227_18466 = state_15185__$1;
(statearr_15227_18466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (9))){
var state_15185__$1 = state_15185;
var statearr_15229_18467 = state_15185__$1;
(statearr_15229_18467[(2)] = null);

(statearr_15229_18467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (5))){
var state_15185__$1 = state_15185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15230_18468 = state_15185__$1;
(statearr_15230_18468[(1)] = (8));

} else {
var statearr_15233_18469 = state_15185__$1;
(statearr_15233_18469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (14))){
var inst_15160 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15234_18470 = state_15185__$1;
(statearr_15234_18470[(2)] = inst_15160);

(statearr_15234_18470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (10))){
var inst_15139 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15238_18474 = state_15185__$1;
(statearr_15238_18474[(2)] = inst_15139);

(statearr_15238_18474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (8))){
var inst_15134 = cljs.core.async.close_BANG_(to);
var state_15185__$1 = state_15185;
var statearr_15242_18475 = state_15185__$1;
(statearr_15242_18475[(2)] = inst_15134);

(statearr_15242_18475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_15253 = [null,null,null,null,null,null,null,null];
(statearr_15253[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_15253[(1)] = (1));

return statearr_15253;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_15185){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15185);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15255){var ex__14331__auto__ = e15255;
var statearr_15258_18477 = state_15185;
(statearr_15258_18477[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15185[(4)]))){
var statearr_15263_18478 = state_15185;
(statearr_15263_18478[(1)] = cljs.core.first((state_15185[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18479 = state_15185;
state_15185 = G__18479;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_15185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_15185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15268 = f__14662__auto__();
(statearr_15268[(6)] = c__14661__auto___18454);

return statearr_15268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15299){
var vec__15300 = p__15299;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(1),null);
var job = vec__15300;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14661__auto___18480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15315){
var state_val_15319 = (state_15315[(1)]);
if((state_val_15319 === (1))){
var state_15315__$1 = state_15315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15315__$1,(2),res,v);
} else {
if((state_val_15319 === (2))){
var inst_15312 = (state_15315[(2)]);
var inst_15313 = cljs.core.async.close_BANG_(res);
var state_15315__$1 = (function (){var statearr_15325 = state_15315;
(statearr_15325[(7)] = inst_15312);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15315__$1,inst_15313);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_15331 = [null,null,null,null,null,null,null,null];
(statearr_15331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__);

(statearr_15331[(1)] = (1));

return statearr_15331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1 = (function (state_15315){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15315);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15336){var ex__14331__auto__ = e15336;
var statearr_15337_18485 = state_15315;
(statearr_15337_18485[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15315[(4)]))){
var statearr_15338_18486 = state_15315;
(statearr_15338_18486[(1)] = cljs.core.first((state_15315[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18487 = state_15315;
state_15315 = G__18487;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = function(state_15315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1.call(this,state_15315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15346 = f__14662__auto__();
(statearr_15346[(6)] = c__14661__auto___18480);

return statearr_15346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15347){
var vec__15348 = p__15347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15348,(1),null);
var job = vec__15348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___18491 = n;
var __18493 = (0);
while(true){
if((__18493 < n__5741__auto___18491)){
var G__15358_18494 = type;
var G__15358_18495__$1 = (((G__15358_18494 instanceof cljs.core.Keyword))?G__15358_18494.fqn:null);
switch (G__15358_18495__$1) {
case "compute":
var c__14661__auto___18497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18493,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = ((function (__18493,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function (state_15372){
var state_val_15373 = (state_15372[(1)]);
if((state_val_15373 === (1))){
var state_15372__$1 = state_15372;
var statearr_15380_18498 = state_15372__$1;
(statearr_15380_18498[(2)] = null);

(statearr_15380_18498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (2))){
var state_15372__$1 = state_15372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15372__$1,(4),jobs);
} else {
if((state_val_15373 === (3))){
var inst_15370 = (state_15372[(2)]);
var state_15372__$1 = state_15372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15372__$1,inst_15370);
} else {
if((state_val_15373 === (4))){
var inst_15361 = (state_15372[(2)]);
var inst_15362 = process__$1(inst_15361);
var state_15372__$1 = state_15372;
if(cljs.core.truth_(inst_15362)){
var statearr_15385_18501 = state_15372__$1;
(statearr_15385_18501[(1)] = (5));

} else {
var statearr_15386_18502 = state_15372__$1;
(statearr_15386_18502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (5))){
var state_15372__$1 = state_15372;
var statearr_15387_18503 = state_15372__$1;
(statearr_15387_18503[(2)] = null);

(statearr_15387_18503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (6))){
var state_15372__$1 = state_15372;
var statearr_15388_18504 = state_15372__$1;
(statearr_15388_18504[(2)] = null);

(statearr_15388_18504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (7))){
var inst_15368 = (state_15372[(2)]);
var state_15372__$1 = state_15372;
var statearr_15391_18506 = state_15372__$1;
(statearr_15391_18506[(2)] = inst_15368);

(statearr_15391_18506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18493,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
;
return ((function (__18493,switch__14327__auto__,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_15395 = [null,null,null,null,null,null,null];
(statearr_15395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__);

(statearr_15395[(1)] = (1));

return statearr_15395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1 = (function (state_15372){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15372);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15402){var ex__14331__auto__ = e15402;
var statearr_15403_18511 = state_15372;
(statearr_15403_18511[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15372[(4)]))){
var statearr_15404_18512 = state_15372;
(statearr_15404_18512[(1)] = cljs.core.first((state_15372[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18513 = state_15372;
state_15372 = G__18513;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = function(state_15372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1.call(this,state_15372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__;
})()
;})(__18493,switch__14327__auto__,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
})();
var state__14663__auto__ = (function (){var statearr_15407 = f__14662__auto__();
(statearr_15407[(6)] = c__14661__auto___18497);

return statearr_15407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
});})(__18493,c__14661__auto___18497,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
);


break;
case "async":
var c__14661__auto___18514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18493,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = ((function (__18493,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function (state_15423){
var state_val_15424 = (state_15423[(1)]);
if((state_val_15424 === (1))){
var state_15423__$1 = state_15423;
var statearr_15432_18515 = state_15423__$1;
(statearr_15432_18515[(2)] = null);

(statearr_15432_18515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (2))){
var state_15423__$1 = state_15423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15423__$1,(4),jobs);
} else {
if((state_val_15424 === (3))){
var inst_15421 = (state_15423[(2)]);
var state_15423__$1 = state_15423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15423__$1,inst_15421);
} else {
if((state_val_15424 === (4))){
var inst_15413 = (state_15423[(2)]);
var inst_15414 = async(inst_15413);
var state_15423__$1 = state_15423;
if(cljs.core.truth_(inst_15414)){
var statearr_15435_18520 = state_15423__$1;
(statearr_15435_18520[(1)] = (5));

} else {
var statearr_15437_18521 = state_15423__$1;
(statearr_15437_18521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (5))){
var state_15423__$1 = state_15423;
var statearr_15440_18522 = state_15423__$1;
(statearr_15440_18522[(2)] = null);

(statearr_15440_18522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (6))){
var state_15423__$1 = state_15423;
var statearr_15441_18523 = state_15423__$1;
(statearr_15441_18523[(2)] = null);

(statearr_15441_18523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (7))){
var inst_15419 = (state_15423[(2)]);
var state_15423__$1 = state_15423;
var statearr_15442_18524 = state_15423__$1;
(statearr_15442_18524[(2)] = inst_15419);

(statearr_15442_18524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18493,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
;
return ((function (__18493,switch__14327__auto__,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_15444 = [null,null,null,null,null,null,null];
(statearr_15444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__);

(statearr_15444[(1)] = (1));

return statearr_15444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1 = (function (state_15423){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15423);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15445){var ex__14331__auto__ = e15445;
var statearr_15446_18525 = state_15423;
(statearr_15446_18525[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15423[(4)]))){
var statearr_15447_18526 = state_15423;
(statearr_15447_18526[(1)] = cljs.core.first((state_15423[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18527 = state_15423;
state_15423 = G__18527;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = function(state_15423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1.call(this,state_15423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__;
})()
;})(__18493,switch__14327__auto__,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
})();
var state__14663__auto__ = (function (){var statearr_15452 = f__14662__auto__();
(statearr_15452[(6)] = c__14661__auto___18514);

return statearr_15452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
});})(__18493,c__14661__auto___18514,G__15358_18494,G__15358_18495__$1,n__5741__auto___18491,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15358_18495__$1))));

}

var G__18528 = (__18493 + (1));
__18493 = G__18528;
continue;
} else {
}
break;
}

var c__14661__auto___18529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15480){
var state_val_15481 = (state_15480[(1)]);
if((state_val_15481 === (7))){
var inst_15476 = (state_15480[(2)]);
var state_15480__$1 = state_15480;
var statearr_15491_18530 = state_15480__$1;
(statearr_15491_18530[(2)] = inst_15476);

(statearr_15491_18530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15481 === (1))){
var state_15480__$1 = state_15480;
var statearr_15493_18531 = state_15480__$1;
(statearr_15493_18531[(2)] = null);

(statearr_15493_18531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15481 === (4))){
var inst_15457 = (state_15480[(7)]);
var inst_15457__$1 = (state_15480[(2)]);
var inst_15458 = (inst_15457__$1 == null);
var state_15480__$1 = (function (){var statearr_15500 = state_15480;
(statearr_15500[(7)] = inst_15457__$1);

return statearr_15500;
})();
if(cljs.core.truth_(inst_15458)){
var statearr_15501_18532 = state_15480__$1;
(statearr_15501_18532[(1)] = (5));

} else {
var statearr_15502_18533 = state_15480__$1;
(statearr_15502_18533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15481 === (6))){
var inst_15457 = (state_15480[(7)]);
var inst_15464 = (state_15480[(8)]);
var inst_15464__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15468 = [inst_15457,inst_15464__$1];
var inst_15469 = (new cljs.core.PersistentVector(null,2,(5),inst_15467,inst_15468,null));
var state_15480__$1 = (function (){var statearr_15504 = state_15480;
(statearr_15504[(8)] = inst_15464__$1);

return statearr_15504;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15480__$1,(8),jobs,inst_15469);
} else {
if((state_val_15481 === (3))){
var inst_15478 = (state_15480[(2)]);
var state_15480__$1 = state_15480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15480__$1,inst_15478);
} else {
if((state_val_15481 === (2))){
var state_15480__$1 = state_15480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15480__$1,(4),from);
} else {
if((state_val_15481 === (9))){
var inst_15473 = (state_15480[(2)]);
var state_15480__$1 = (function (){var statearr_15508 = state_15480;
(statearr_15508[(9)] = inst_15473);

return statearr_15508;
})();
var statearr_15511_18535 = state_15480__$1;
(statearr_15511_18535[(2)] = null);

(statearr_15511_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15481 === (5))){
var inst_15461 = cljs.core.async.close_BANG_(jobs);
var state_15480__$1 = state_15480;
var statearr_15512_18536 = state_15480__$1;
(statearr_15512_18536[(2)] = inst_15461);

(statearr_15512_18536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15481 === (8))){
var inst_15464 = (state_15480[(8)]);
var inst_15471 = (state_15480[(2)]);
var state_15480__$1 = (function (){var statearr_15513 = state_15480;
(statearr_15513[(10)] = inst_15471);

return statearr_15513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15480__$1,(9),results,inst_15464);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_15515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__);

(statearr_15515[(1)] = (1));

return statearr_15515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1 = (function (state_15480){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15480);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15516){var ex__14331__auto__ = e15516;
var statearr_15517_18538 = state_15480;
(statearr_15517_18538[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15480[(4)]))){
var statearr_15519_18539 = state_15480;
(statearr_15519_18539[(1)] = cljs.core.first((state_15480[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18541 = state_15480;
state_15480 = G__18541;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = function(state_15480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1.call(this,state_15480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15522 = f__14662__auto__();
(statearr_15522[(6)] = c__14661__auto___18529);

return statearr_15522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


var c__14661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15563){
var state_val_15564 = (state_15563[(1)]);
if((state_val_15564 === (7))){
var inst_15559 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15567_18542 = state_15563__$1;
(statearr_15567_18542[(2)] = inst_15559);

(statearr_15567_18542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (20))){
var state_15563__$1 = state_15563;
var statearr_15570_18543 = state_15563__$1;
(statearr_15570_18543[(2)] = null);

(statearr_15570_18543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (1))){
var state_15563__$1 = state_15563;
var statearr_15573_18544 = state_15563__$1;
(statearr_15573_18544[(2)] = null);

(statearr_15573_18544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (4))){
var inst_15528 = (state_15563[(7)]);
var inst_15528__$1 = (state_15563[(2)]);
var inst_15529 = (inst_15528__$1 == null);
var state_15563__$1 = (function (){var statearr_15574 = state_15563;
(statearr_15574[(7)] = inst_15528__$1);

return statearr_15574;
})();
if(cljs.core.truth_(inst_15529)){
var statearr_15575_18545 = state_15563__$1;
(statearr_15575_18545[(1)] = (5));

} else {
var statearr_15576_18546 = state_15563__$1;
(statearr_15576_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (15))){
var inst_15541 = (state_15563[(8)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15563__$1,(18),to,inst_15541);
} else {
if((state_val_15564 === (21))){
var inst_15554 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15578_18547 = state_15563__$1;
(statearr_15578_18547[(2)] = inst_15554);

(statearr_15578_18547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (13))){
var inst_15556 = (state_15563[(2)]);
var state_15563__$1 = (function (){var statearr_15580 = state_15563;
(statearr_15580[(9)] = inst_15556);

return statearr_15580;
})();
var statearr_15582_18548 = state_15563__$1;
(statearr_15582_18548[(2)] = null);

(statearr_15582_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (6))){
var inst_15528 = (state_15563[(7)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(11),inst_15528);
} else {
if((state_val_15564 === (17))){
var inst_15549 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
if(cljs.core.truth_(inst_15549)){
var statearr_15586_18553 = state_15563__$1;
(statearr_15586_18553[(1)] = (19));

} else {
var statearr_15587_18554 = state_15563__$1;
(statearr_15587_18554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (3))){
var inst_15561 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15563__$1,inst_15561);
} else {
if((state_val_15564 === (12))){
var inst_15538 = (state_15563[(10)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(14),inst_15538);
} else {
if((state_val_15564 === (2))){
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(4),results);
} else {
if((state_val_15564 === (19))){
var state_15563__$1 = state_15563;
var statearr_15591_18555 = state_15563__$1;
(statearr_15591_18555[(2)] = null);

(statearr_15591_18555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (11))){
var inst_15538 = (state_15563[(2)]);
var state_15563__$1 = (function (){var statearr_15594 = state_15563;
(statearr_15594[(10)] = inst_15538);

return statearr_15594;
})();
var statearr_15595_18560 = state_15563__$1;
(statearr_15595_18560[(2)] = null);

(statearr_15595_18560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (9))){
var state_15563__$1 = state_15563;
var statearr_15597_18561 = state_15563__$1;
(statearr_15597_18561[(2)] = null);

(statearr_15597_18561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (5))){
var state_15563__$1 = state_15563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15598_18562 = state_15563__$1;
(statearr_15598_18562[(1)] = (8));

} else {
var statearr_15599_18563 = state_15563__$1;
(statearr_15599_18563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (14))){
var inst_15541 = (state_15563[(8)]);
var inst_15543 = (state_15563[(11)]);
var inst_15541__$1 = (state_15563[(2)]);
var inst_15542 = (inst_15541__$1 == null);
var inst_15543__$1 = cljs.core.not(inst_15542);
var state_15563__$1 = (function (){var statearr_15600 = state_15563;
(statearr_15600[(8)] = inst_15541__$1);

(statearr_15600[(11)] = inst_15543__$1);

return statearr_15600;
})();
if(inst_15543__$1){
var statearr_15602_18564 = state_15563__$1;
(statearr_15602_18564[(1)] = (15));

} else {
var statearr_15603_18565 = state_15563__$1;
(statearr_15603_18565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (16))){
var inst_15543 = (state_15563[(11)]);
var state_15563__$1 = state_15563;
var statearr_15605_18567 = state_15563__$1;
(statearr_15605_18567[(2)] = inst_15543);

(statearr_15605_18567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (10))){
var inst_15535 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15607_18568 = state_15563__$1;
(statearr_15607_18568[(2)] = inst_15535);

(statearr_15607_18568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (18))){
var inst_15546 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15610_18569 = state_15563__$1;
(statearr_15610_18569[(2)] = inst_15546);

(statearr_15610_18569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15564 === (8))){
var inst_15532 = cljs.core.async.close_BANG_(to);
var state_15563__$1 = state_15563;
var statearr_15613_18570 = state_15563__$1;
(statearr_15613_18570[(2)] = inst_15532);

(statearr_15613_18570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_15614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__);

(statearr_15614[(1)] = (1));

return statearr_15614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1 = (function (state_15563){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15563);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15615){var ex__14331__auto__ = e15615;
var statearr_15616_18571 = state_15563;
(statearr_15616_18571[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15563[(4)]))){
var statearr_15618_18573 = state_15563;
(statearr_15618_18573[(1)] = cljs.core.first((state_15563[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18574 = state_15563;
state_15563 = G__18574;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__ = function(state_15563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1.call(this,state_15563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15621 = f__14662__auto__();
(statearr_15621[(6)] = c__14661__auto__);

return statearr_15621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

return c__14661__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15624 = arguments.length;
switch (G__15624) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15628 = arguments.length;
switch (G__15628) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15632 = arguments.length;
switch (G__15632) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14661__auto___18581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15660){
var state_val_15661 = (state_15660[(1)]);
if((state_val_15661 === (7))){
var inst_15656 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
var statearr_15663_18585 = state_15660__$1;
(statearr_15663_18585[(2)] = inst_15656);

(statearr_15663_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (1))){
var state_15660__$1 = state_15660;
var statearr_15664_18586 = state_15660__$1;
(statearr_15664_18586[(2)] = null);

(statearr_15664_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (4))){
var inst_15636 = (state_15660[(7)]);
var inst_15636__$1 = (state_15660[(2)]);
var inst_15637 = (inst_15636__$1 == null);
var state_15660__$1 = (function (){var statearr_15666 = state_15660;
(statearr_15666[(7)] = inst_15636__$1);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15637)){
var statearr_15667_18588 = state_15660__$1;
(statearr_15667_18588[(1)] = (5));

} else {
var statearr_15668_18590 = state_15660__$1;
(statearr_15668_18590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (13))){
var state_15660__$1 = state_15660;
var statearr_15669_18592 = state_15660__$1;
(statearr_15669_18592[(2)] = null);

(statearr_15669_18592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (6))){
var inst_15636 = (state_15660[(7)]);
var inst_15643 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15636) : p.call(null,inst_15636));
var state_15660__$1 = state_15660;
if(cljs.core.truth_(inst_15643)){
var statearr_15670_18593 = state_15660__$1;
(statearr_15670_18593[(1)] = (9));

} else {
var statearr_15671_18594 = state_15660__$1;
(statearr_15671_18594[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (3))){
var inst_15658 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15660__$1,inst_15658);
} else {
if((state_val_15661 === (12))){
var state_15660__$1 = state_15660;
var statearr_15672_18596 = state_15660__$1;
(statearr_15672_18596[(2)] = null);

(statearr_15672_18596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (2))){
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15660__$1,(4),ch);
} else {
if((state_val_15661 === (11))){
var inst_15636 = (state_15660[(7)]);
var inst_15647 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15660__$1,(8),inst_15647,inst_15636);
} else {
if((state_val_15661 === (9))){
var state_15660__$1 = state_15660;
var statearr_15674_18602 = state_15660__$1;
(statearr_15674_18602[(2)] = tc);

(statearr_15674_18602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (5))){
var inst_15640 = cljs.core.async.close_BANG_(tc);
var inst_15641 = cljs.core.async.close_BANG_(fc);
var state_15660__$1 = (function (){var statearr_15676 = state_15660;
(statearr_15676[(8)] = inst_15640);

return statearr_15676;
})();
var statearr_15677_18606 = state_15660__$1;
(statearr_15677_18606[(2)] = inst_15641);

(statearr_15677_18606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (14))){
var inst_15654 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
var statearr_15678_18607 = state_15660__$1;
(statearr_15678_18607[(2)] = inst_15654);

(statearr_15678_18607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (10))){
var state_15660__$1 = state_15660;
var statearr_15679_18608 = state_15660__$1;
(statearr_15679_18608[(2)] = fc);

(statearr_15679_18608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15661 === (8))){
var inst_15649 = (state_15660[(2)]);
var state_15660__$1 = state_15660;
if(cljs.core.truth_(inst_15649)){
var statearr_15680_18609 = state_15660__$1;
(statearr_15680_18609[(1)] = (12));

} else {
var statearr_15683_18610 = state_15660__$1;
(statearr_15683_18610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_15684 = [null,null,null,null,null,null,null,null,null];
(statearr_15684[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_15684[(1)] = (1));

return statearr_15684;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_15660){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15660);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15685){var ex__14331__auto__ = e15685;
var statearr_15686_18611 = state_15660;
(statearr_15686_18611[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15660[(4)]))){
var statearr_15687_18615 = state_15660;
(statearr_15687_18615[(1)] = cljs.core.first((state_15660[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18620 = state_15660;
state_15660 = G__18620;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_15660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_15660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15688 = f__14662__auto__();
(statearr_15688[(6)] = c__14661__auto___18581);

return statearr_15688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (7))){
var inst_15719 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15734_18628 = state_15728__$1;
(statearr_15734_18628[(2)] = inst_15719);

(statearr_15734_18628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (1))){
var inst_15700 = init;
var inst_15701 = inst_15700;
var state_15728__$1 = (function (){var statearr_15739 = state_15728;
(statearr_15739[(7)] = inst_15701);

return statearr_15739;
})();
var statearr_15741_18629 = state_15728__$1;
(statearr_15741_18629[(2)] = null);

(statearr_15741_18629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var inst_15705 = (state_15728[(8)]);
var inst_15705__$1 = (state_15728[(2)]);
var inst_15707 = (inst_15705__$1 == null);
var state_15728__$1 = (function (){var statearr_15742 = state_15728;
(statearr_15742[(8)] = inst_15705__$1);

return statearr_15742;
})();
if(cljs.core.truth_(inst_15707)){
var statearr_15743_18630 = state_15728__$1;
(statearr_15743_18630[(1)] = (5));

} else {
var statearr_15744_18631 = state_15728__$1;
(statearr_15744_18631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var inst_15701 = (state_15728[(7)]);
var inst_15705 = (state_15728[(8)]);
var inst_15710 = (state_15728[(9)]);
var inst_15710__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15701,inst_15705) : f.call(null,inst_15701,inst_15705));
var inst_15711 = cljs.core.reduced_QMARK_(inst_15710__$1);
var state_15728__$1 = (function (){var statearr_15745 = state_15728;
(statearr_15745[(9)] = inst_15710__$1);

return statearr_15745;
})();
if(inst_15711){
var statearr_15746_18632 = state_15728__$1;
(statearr_15746_18632[(1)] = (8));

} else {
var statearr_15747_18633 = state_15728__$1;
(statearr_15747_18633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (3))){
var inst_15721 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15728__$1,inst_15721);
} else {
if((state_val_15729 === (2))){
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15728__$1,(4),ch);
} else {
if((state_val_15729 === (9))){
var inst_15710 = (state_15728[(9)]);
var inst_15701 = inst_15710;
var state_15728__$1 = (function (){var statearr_15750 = state_15728;
(statearr_15750[(7)] = inst_15701);

return statearr_15750;
})();
var statearr_15753_18643 = state_15728__$1;
(statearr_15753_18643[(2)] = null);

(statearr_15753_18643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var inst_15701 = (state_15728[(7)]);
var state_15728__$1 = state_15728;
var statearr_15754_18644 = state_15728__$1;
(statearr_15754_18644[(2)] = inst_15701);

(statearr_15754_18644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (10))){
var inst_15717 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15758_18645 = state_15728__$1;
(statearr_15758_18645[(2)] = inst_15717);

(statearr_15758_18645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15710 = (state_15728[(9)]);
var inst_15713 = cljs.core.deref(inst_15710);
var state_15728__$1 = state_15728;
var statearr_15759_18646 = state_15728__$1;
(statearr_15759_18646[(2)] = inst_15713);

(statearr_15759_18646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14328__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14328__auto____0 = (function (){
var statearr_15764 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15764[(0)] = cljs$core$async$reduce_$_state_machine__14328__auto__);

(statearr_15764[(1)] = (1));

return statearr_15764;
});
var cljs$core$async$reduce_$_state_machine__14328__auto____1 = (function (state_15728){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15728);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15765){var ex__14331__auto__ = e15765;
var statearr_15768_18650 = state_15728;
(statearr_15768_18650[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15728[(4)]))){
var statearr_15772_18651 = state_15728;
(statearr_15772_18651[(1)] = cljs.core.first((state_15728[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18652 = state_15728;
state_15728 = G__18652;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14328__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14328__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14328__auto____0;
cljs$core$async$reduce_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14328__auto____1;
return cljs$core$async$reduce_$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15781 = f__14662__auto__();
(statearr_15781[(6)] = c__14661__auto__);

return statearr_15781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

return c__14661__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15795){
var state_val_15797 = (state_15795[(1)]);
if((state_val_15797 === (1))){
var inst_15790 = cljs.core.async.reduce(f__$1,init,ch);
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15795__$1,(2),inst_15790);
} else {
if((state_val_15797 === (2))){
var inst_15792 = (state_15795[(2)]);
var inst_15793 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15792) : f__$1.call(null,inst_15792));
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15795__$1,inst_15793);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14328__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14328__auto____0 = (function (){
var statearr_15819 = [null,null,null,null,null,null,null];
(statearr_15819[(0)] = cljs$core$async$transduce_$_state_machine__14328__auto__);

(statearr_15819[(1)] = (1));

return statearr_15819;
});
var cljs$core$async$transduce_$_state_machine__14328__auto____1 = (function (state_15795){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15795);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15821){var ex__14331__auto__ = e15821;
var statearr_15822_18656 = state_15795;
(statearr_15822_18656[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15795[(4)]))){
var statearr_15823_18657 = state_15795;
(statearr_15823_18657[(1)] = cljs.core.first((state_15795[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18659 = state_15795;
state_15795 = G__18659;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14328__auto__ = function(state_15795){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14328__auto____1.call(this,state_15795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14328__auto____0;
cljs$core$async$transduce_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14328__auto____1;
return cljs$core$async$transduce_$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15827 = f__14662__auto__();
(statearr_15827[(6)] = c__14661__auto__);

return statearr_15827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

return c__14661__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15833 = arguments.length;
switch (G__15833) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_15867){
var state_val_15868 = (state_15867[(1)]);
if((state_val_15868 === (7))){
var inst_15846 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15873_18664 = state_15867__$1;
(statearr_15873_18664[(2)] = inst_15846);

(statearr_15873_18664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (1))){
var inst_15839 = cljs.core.seq(coll);
var inst_15840 = inst_15839;
var state_15867__$1 = (function (){var statearr_15875 = state_15867;
(statearr_15875[(7)] = inst_15840);

return statearr_15875;
})();
var statearr_15876_18665 = state_15867__$1;
(statearr_15876_18665[(2)] = null);

(statearr_15876_18665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (4))){
var inst_15840 = (state_15867[(7)]);
var inst_15844 = cljs.core.first(inst_15840);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15867__$1,(7),ch,inst_15844);
} else {
if((state_val_15868 === (13))){
var inst_15860 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15880_18666 = state_15867__$1;
(statearr_15880_18666[(2)] = inst_15860);

(statearr_15880_18666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (6))){
var inst_15849 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15849)){
var statearr_15884_18667 = state_15867__$1;
(statearr_15884_18667[(1)] = (8));

} else {
var statearr_15885_18668 = state_15867__$1;
(statearr_15885_18668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (3))){
var inst_15864 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15867__$1,inst_15864);
} else {
if((state_val_15868 === (12))){
var state_15867__$1 = state_15867;
var statearr_15887_18669 = state_15867__$1;
(statearr_15887_18669[(2)] = null);

(statearr_15887_18669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (2))){
var inst_15840 = (state_15867[(7)]);
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15840)){
var statearr_15889_18670 = state_15867__$1;
(statearr_15889_18670[(1)] = (4));

} else {
var statearr_15891_18671 = state_15867__$1;
(statearr_15891_18671[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (11))){
var inst_15857 = cljs.core.async.close_BANG_(ch);
var state_15867__$1 = state_15867;
var statearr_15894_18672 = state_15867__$1;
(statearr_15894_18672[(2)] = inst_15857);

(statearr_15894_18672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (9))){
var state_15867__$1 = state_15867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15895_18673 = state_15867__$1;
(statearr_15895_18673[(1)] = (11));

} else {
var statearr_15896_18674 = state_15867__$1;
(statearr_15896_18674[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (5))){
var inst_15840 = (state_15867[(7)]);
var state_15867__$1 = state_15867;
var statearr_15900_18678 = state_15867__$1;
(statearr_15900_18678[(2)] = inst_15840);

(statearr_15900_18678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (10))){
var inst_15862 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15903_18679 = state_15867__$1;
(statearr_15903_18679[(2)] = inst_15862);

(statearr_15903_18679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (8))){
var inst_15840 = (state_15867[(7)]);
var inst_15851 = cljs.core.next(inst_15840);
var inst_15840__$1 = inst_15851;
var state_15867__$1 = (function (){var statearr_15905 = state_15867;
(statearr_15905[(7)] = inst_15840__$1);

return statearr_15905;
})();
var statearr_15906_18680 = state_15867__$1;
(statearr_15906_18680[(2)] = null);

(statearr_15906_18680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_15908 = [null,null,null,null,null,null,null,null];
(statearr_15908[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_15908[(1)] = (1));

return statearr_15908;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_15867){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_15867);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e15913){var ex__14331__auto__ = e15913;
var statearr_15916_18681 = state_15867;
(statearr_15916_18681[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_15867[(4)]))){
var statearr_15918_18682 = state_15867;
(statearr_15918_18682[(1)] = cljs.core.first((state_15867[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18683 = state_15867;
state_15867 = G__18683;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_15867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_15867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_15920 = f__14662__auto__();
(statearr_15920[(6)] = c__14661__auto__);

return statearr_15920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

return c__14661__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15927 = arguments.length;
switch (G__15927) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18685 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18685(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18688 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18688(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18689 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18689(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18692 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18692(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15963 = (function (ch,cs,meta15964){
this.ch = ch;
this.cs = cs;
this.meta15964 = meta15964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15965,meta15964__$1){
var self__ = this;
var _15965__$1 = this;
return (new cljs.core.async.t_cljs$core$async15963(self__.ch,self__.cs,meta15964__$1));
}));

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15965){
var self__ = this;
var _15965__$1 = this;
return self__.meta15964;
}));

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15963.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15964","meta15964",-2085904644,null)], null);
}));

(cljs.core.async.t_cljs$core$async15963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15963");

(cljs.core.async.t_cljs$core$async15963.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15963.
 */
cljs.core.async.__GT_t_cljs$core$async15963 = (function cljs$core$async$__GT_t_cljs$core$async15963(ch,cs,meta15964){
return (new cljs.core.async.t_cljs$core$async15963(ch,cs,meta15964));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15963(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14661__auto___18696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_16182){
var state_val_16185 = (state_16182[(1)]);
if((state_val_16185 === (7))){
var inst_16174 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16197_18697 = state_16182__$1;
(statearr_16197_18697[(2)] = inst_16174);

(statearr_16197_18697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (20))){
var inst_16039 = (state_16182[(7)]);
var inst_16058 = cljs.core.first(inst_16039);
var inst_16060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16058,(0),null);
var inst_16061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16058,(1),null);
var state_16182__$1 = (function (){var statearr_16206 = state_16182;
(statearr_16206[(8)] = inst_16060);

return statearr_16206;
})();
if(cljs.core.truth_(inst_16061)){
var statearr_16213_18698 = state_16182__$1;
(statearr_16213_18698[(1)] = (22));

} else {
var statearr_16214_18699 = state_16182__$1;
(statearr_16214_18699[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (27))){
var inst_16101 = (state_16182[(9)]);
var inst_16103 = (state_16182[(10)]);
var inst_16109 = (state_16182[(11)]);
var inst_15993 = (state_16182[(12)]);
var inst_16109__$1 = cljs.core._nth(inst_16101,inst_16103);
var inst_16110 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16109__$1,inst_15993,done);
var state_16182__$1 = (function (){var statearr_16220 = state_16182;
(statearr_16220[(11)] = inst_16109__$1);

return statearr_16220;
})();
if(cljs.core.truth_(inst_16110)){
var statearr_16221_18701 = state_16182__$1;
(statearr_16221_18701[(1)] = (30));

} else {
var statearr_16222_18702 = state_16182__$1;
(statearr_16222_18702[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (1))){
var state_16182__$1 = state_16182;
var statearr_16223_18703 = state_16182__$1;
(statearr_16223_18703[(2)] = null);

(statearr_16223_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (24))){
var inst_16039 = (state_16182[(7)]);
var inst_16069 = (state_16182[(2)]);
var inst_16070 = cljs.core.next(inst_16039);
var inst_16004 = inst_16070;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16182__$1 = (function (){var statearr_16225 = state_16182;
(statearr_16225[(13)] = inst_16069);

(statearr_16225[(14)] = inst_16004);

(statearr_16225[(15)] = inst_16005);

(statearr_16225[(16)] = inst_16006);

(statearr_16225[(17)] = inst_16007);

return statearr_16225;
})();
var statearr_16228_18704 = state_16182__$1;
(statearr_16228_18704[(2)] = null);

(statearr_16228_18704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (39))){
var state_16182__$1 = state_16182;
var statearr_16240_18705 = state_16182__$1;
(statearr_16240_18705[(2)] = null);

(statearr_16240_18705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (4))){
var inst_15993 = (state_16182[(12)]);
var inst_15993__$1 = (state_16182[(2)]);
var inst_15994 = (inst_15993__$1 == null);
var state_16182__$1 = (function (){var statearr_16242 = state_16182;
(statearr_16242[(12)] = inst_15993__$1);

return statearr_16242;
})();
if(cljs.core.truth_(inst_15994)){
var statearr_16243_18706 = state_16182__$1;
(statearr_16243_18706[(1)] = (5));

} else {
var statearr_16244_18707 = state_16182__$1;
(statearr_16244_18707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (15))){
var inst_16007 = (state_16182[(17)]);
var inst_16004 = (state_16182[(14)]);
var inst_16005 = (state_16182[(15)]);
var inst_16006 = (state_16182[(16)]);
var inst_16029 = (state_16182[(2)]);
var inst_16031 = (inst_16007 + (1));
var tmp16230 = inst_16005;
var tmp16231 = inst_16004;
var tmp16232 = inst_16006;
var inst_16004__$1 = tmp16231;
var inst_16005__$1 = tmp16230;
var inst_16006__$1 = tmp16232;
var inst_16007__$1 = inst_16031;
var state_16182__$1 = (function (){var statearr_16245 = state_16182;
(statearr_16245[(18)] = inst_16029);

(statearr_16245[(14)] = inst_16004__$1);

(statearr_16245[(15)] = inst_16005__$1);

(statearr_16245[(16)] = inst_16006__$1);

(statearr_16245[(17)] = inst_16007__$1);

return statearr_16245;
})();
var statearr_16246_18708 = state_16182__$1;
(statearr_16246_18708[(2)] = null);

(statearr_16246_18708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (21))){
var inst_16077 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16250_18710 = state_16182__$1;
(statearr_16250_18710[(2)] = inst_16077);

(statearr_16250_18710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (31))){
var inst_16109 = (state_16182[(11)]);
var inst_16116 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16109);
var state_16182__$1 = state_16182;
var statearr_16251_18711 = state_16182__$1;
(statearr_16251_18711[(2)] = inst_16116);

(statearr_16251_18711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (32))){
var inst_16103 = (state_16182[(10)]);
var inst_16100 = (state_16182[(19)]);
var inst_16101 = (state_16182[(9)]);
var inst_16102 = (state_16182[(20)]);
var inst_16118 = (state_16182[(2)]);
var inst_16121 = (inst_16103 + (1));
var tmp16247 = inst_16102;
var tmp16248 = inst_16101;
var tmp16249 = inst_16100;
var inst_16100__$1 = tmp16249;
var inst_16101__$1 = tmp16248;
var inst_16102__$1 = tmp16247;
var inst_16103__$1 = inst_16121;
var state_16182__$1 = (function (){var statearr_16252 = state_16182;
(statearr_16252[(21)] = inst_16118);

(statearr_16252[(19)] = inst_16100__$1);

(statearr_16252[(9)] = inst_16101__$1);

(statearr_16252[(20)] = inst_16102__$1);

(statearr_16252[(10)] = inst_16103__$1);

return statearr_16252;
})();
var statearr_16253_18712 = state_16182__$1;
(statearr_16253_18712[(2)] = null);

(statearr_16253_18712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (40))){
var inst_16143 = (state_16182[(22)]);
var inst_16147 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16143);
var state_16182__$1 = state_16182;
var statearr_16255_18713 = state_16182__$1;
(statearr_16255_18713[(2)] = inst_16147);

(statearr_16255_18713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (33))){
var inst_16125 = (state_16182[(23)]);
var inst_16129 = cljs.core.chunked_seq_QMARK_(inst_16125);
var state_16182__$1 = state_16182;
if(inst_16129){
var statearr_16257_18714 = state_16182__$1;
(statearr_16257_18714[(1)] = (36));

} else {
var statearr_16258_18715 = state_16182__$1;
(statearr_16258_18715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (13))){
var inst_16019 = (state_16182[(24)]);
var inst_16026 = cljs.core.async.close_BANG_(inst_16019);
var state_16182__$1 = state_16182;
var statearr_16259_18716 = state_16182__$1;
(statearr_16259_18716[(2)] = inst_16026);

(statearr_16259_18716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (22))){
var inst_16060 = (state_16182[(8)]);
var inst_16066 = cljs.core.async.close_BANG_(inst_16060);
var state_16182__$1 = state_16182;
var statearr_16260_18717 = state_16182__$1;
(statearr_16260_18717[(2)] = inst_16066);

(statearr_16260_18717[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (36))){
var inst_16125 = (state_16182[(23)]);
var inst_16137 = cljs.core.chunk_first(inst_16125);
var inst_16138 = cljs.core.chunk_rest(inst_16125);
var inst_16139 = cljs.core.count(inst_16137);
var inst_16100 = inst_16138;
var inst_16101 = inst_16137;
var inst_16102 = inst_16139;
var inst_16103 = (0);
var state_16182__$1 = (function (){var statearr_16262 = state_16182;
(statearr_16262[(19)] = inst_16100);

(statearr_16262[(9)] = inst_16101);

(statearr_16262[(20)] = inst_16102);

(statearr_16262[(10)] = inst_16103);

return statearr_16262;
})();
var statearr_16266_18720 = state_16182__$1;
(statearr_16266_18720[(2)] = null);

(statearr_16266_18720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (41))){
var inst_16125 = (state_16182[(23)]);
var inst_16149 = (state_16182[(2)]);
var inst_16152 = cljs.core.next(inst_16125);
var inst_16100 = inst_16152;
var inst_16101 = null;
var inst_16102 = (0);
var inst_16103 = (0);
var state_16182__$1 = (function (){var statearr_16267 = state_16182;
(statearr_16267[(25)] = inst_16149);

(statearr_16267[(19)] = inst_16100);

(statearr_16267[(9)] = inst_16101);

(statearr_16267[(20)] = inst_16102);

(statearr_16267[(10)] = inst_16103);

return statearr_16267;
})();
var statearr_16268_18725 = state_16182__$1;
(statearr_16268_18725[(2)] = null);

(statearr_16268_18725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (43))){
var state_16182__$1 = state_16182;
var statearr_16269_18727 = state_16182__$1;
(statearr_16269_18727[(2)] = null);

(statearr_16269_18727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (29))){
var inst_16161 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16271_18728 = state_16182__$1;
(statearr_16271_18728[(2)] = inst_16161);

(statearr_16271_18728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (44))){
var inst_16171 = (state_16182[(2)]);
var state_16182__$1 = (function (){var statearr_16272 = state_16182;
(statearr_16272[(26)] = inst_16171);

return statearr_16272;
})();
var statearr_16273_18731 = state_16182__$1;
(statearr_16273_18731[(2)] = null);

(statearr_16273_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (6))){
var inst_16088 = (state_16182[(27)]);
var inst_16087 = cljs.core.deref(cs);
var inst_16088__$1 = cljs.core.keys(inst_16087);
var inst_16089 = cljs.core.count(inst_16088__$1);
var inst_16090 = cljs.core.reset_BANG_(dctr,inst_16089);
var inst_16099 = cljs.core.seq(inst_16088__$1);
var inst_16100 = inst_16099;
var inst_16101 = null;
var inst_16102 = (0);
var inst_16103 = (0);
var state_16182__$1 = (function (){var statearr_16274 = state_16182;
(statearr_16274[(27)] = inst_16088__$1);

(statearr_16274[(28)] = inst_16090);

(statearr_16274[(19)] = inst_16100);

(statearr_16274[(9)] = inst_16101);

(statearr_16274[(20)] = inst_16102);

(statearr_16274[(10)] = inst_16103);

return statearr_16274;
})();
var statearr_16276_18733 = state_16182__$1;
(statearr_16276_18733[(2)] = null);

(statearr_16276_18733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (28))){
var inst_16100 = (state_16182[(19)]);
var inst_16125 = (state_16182[(23)]);
var inst_16125__$1 = cljs.core.seq(inst_16100);
var state_16182__$1 = (function (){var statearr_16277 = state_16182;
(statearr_16277[(23)] = inst_16125__$1);

return statearr_16277;
})();
if(inst_16125__$1){
var statearr_16279_18735 = state_16182__$1;
(statearr_16279_18735[(1)] = (33));

} else {
var statearr_16281_18736 = state_16182__$1;
(statearr_16281_18736[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (25))){
var inst_16103 = (state_16182[(10)]);
var inst_16102 = (state_16182[(20)]);
var inst_16105 = (inst_16103 < inst_16102);
var inst_16106 = inst_16105;
var state_16182__$1 = state_16182;
if(cljs.core.truth_(inst_16106)){
var statearr_16283_18737 = state_16182__$1;
(statearr_16283_18737[(1)] = (27));

} else {
var statearr_16284_18738 = state_16182__$1;
(statearr_16284_18738[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (34))){
var state_16182__$1 = state_16182;
var statearr_16285_18744 = state_16182__$1;
(statearr_16285_18744[(2)] = null);

(statearr_16285_18744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (17))){
var state_16182__$1 = state_16182;
var statearr_16286_18745 = state_16182__$1;
(statearr_16286_18745[(2)] = null);

(statearr_16286_18745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (3))){
var inst_16176 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16182__$1,inst_16176);
} else {
if((state_val_16185 === (12))){
var inst_16082 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16287_18755 = state_16182__$1;
(statearr_16287_18755[(2)] = inst_16082);

(statearr_16287_18755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (2))){
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16182__$1,(4),ch);
} else {
if((state_val_16185 === (23))){
var state_16182__$1 = state_16182;
var statearr_16288_18756 = state_16182__$1;
(statearr_16288_18756[(2)] = null);

(statearr_16288_18756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (35))){
var inst_16159 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16289_18757 = state_16182__$1;
(statearr_16289_18757[(2)] = inst_16159);

(statearr_16289_18757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (19))){
var inst_16039 = (state_16182[(7)]);
var inst_16047 = cljs.core.chunk_first(inst_16039);
var inst_16048 = cljs.core.chunk_rest(inst_16039);
var inst_16049 = cljs.core.count(inst_16047);
var inst_16004 = inst_16048;
var inst_16005 = inst_16047;
var inst_16006 = inst_16049;
var inst_16007 = (0);
var state_16182__$1 = (function (){var statearr_16293 = state_16182;
(statearr_16293[(14)] = inst_16004);

(statearr_16293[(15)] = inst_16005);

(statearr_16293[(16)] = inst_16006);

(statearr_16293[(17)] = inst_16007);

return statearr_16293;
})();
var statearr_16294_18758 = state_16182__$1;
(statearr_16294_18758[(2)] = null);

(statearr_16294_18758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (11))){
var inst_16004 = (state_16182[(14)]);
var inst_16039 = (state_16182[(7)]);
var inst_16039__$1 = cljs.core.seq(inst_16004);
var state_16182__$1 = (function (){var statearr_16295 = state_16182;
(statearr_16295[(7)] = inst_16039__$1);

return statearr_16295;
})();
if(inst_16039__$1){
var statearr_16296_18761 = state_16182__$1;
(statearr_16296_18761[(1)] = (16));

} else {
var statearr_16297_18762 = state_16182__$1;
(statearr_16297_18762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (9))){
var inst_16084 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16298_18763 = state_16182__$1;
(statearr_16298_18763[(2)] = inst_16084);

(statearr_16298_18763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (5))){
var inst_16001 = cljs.core.deref(cs);
var inst_16002 = cljs.core.seq(inst_16001);
var inst_16004 = inst_16002;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16182__$1 = (function (){var statearr_16300 = state_16182;
(statearr_16300[(14)] = inst_16004);

(statearr_16300[(15)] = inst_16005);

(statearr_16300[(16)] = inst_16006);

(statearr_16300[(17)] = inst_16007);

return statearr_16300;
})();
var statearr_16302_18764 = state_16182__$1;
(statearr_16302_18764[(2)] = null);

(statearr_16302_18764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (14))){
var state_16182__$1 = state_16182;
var statearr_16305_18765 = state_16182__$1;
(statearr_16305_18765[(2)] = null);

(statearr_16305_18765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (45))){
var inst_16168 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16312_18770 = state_16182__$1;
(statearr_16312_18770[(2)] = inst_16168);

(statearr_16312_18770[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (26))){
var inst_16088 = (state_16182[(27)]);
var inst_16163 = (state_16182[(2)]);
var inst_16164 = cljs.core.seq(inst_16088);
var state_16182__$1 = (function (){var statearr_16315 = state_16182;
(statearr_16315[(29)] = inst_16163);

return statearr_16315;
})();
if(inst_16164){
var statearr_16318_18771 = state_16182__$1;
(statearr_16318_18771[(1)] = (42));

} else {
var statearr_16319_18772 = state_16182__$1;
(statearr_16319_18772[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (16))){
var inst_16039 = (state_16182[(7)]);
var inst_16044 = cljs.core.chunked_seq_QMARK_(inst_16039);
var state_16182__$1 = state_16182;
if(inst_16044){
var statearr_16320_18774 = state_16182__$1;
(statearr_16320_18774[(1)] = (19));

} else {
var statearr_16321_18775 = state_16182__$1;
(statearr_16321_18775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (38))){
var inst_16156 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16322_18778 = state_16182__$1;
(statearr_16322_18778[(2)] = inst_16156);

(statearr_16322_18778[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (30))){
var state_16182__$1 = state_16182;
var statearr_16325_18779 = state_16182__$1;
(statearr_16325_18779[(2)] = null);

(statearr_16325_18779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (10))){
var inst_16005 = (state_16182[(15)]);
var inst_16007 = (state_16182[(17)]);
var inst_16018 = cljs.core._nth(inst_16005,inst_16007);
var inst_16019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16018,(0),null);
var inst_16022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16018,(1),null);
var state_16182__$1 = (function (){var statearr_16330 = state_16182;
(statearr_16330[(24)] = inst_16019);

return statearr_16330;
})();
if(cljs.core.truth_(inst_16022)){
var statearr_16332_18781 = state_16182__$1;
(statearr_16332_18781[(1)] = (13));

} else {
var statearr_16337_18782 = state_16182__$1;
(statearr_16337_18782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (18))){
var inst_16080 = (state_16182[(2)]);
var state_16182__$1 = state_16182;
var statearr_16342_18783 = state_16182__$1;
(statearr_16342_18783[(2)] = inst_16080);

(statearr_16342_18783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (42))){
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16182__$1,(45),dchan);
} else {
if((state_val_16185 === (37))){
var inst_16125 = (state_16182[(23)]);
var inst_16143 = (state_16182[(22)]);
var inst_15993 = (state_16182[(12)]);
var inst_16143__$1 = cljs.core.first(inst_16125);
var inst_16144 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16143__$1,inst_15993,done);
var state_16182__$1 = (function (){var statearr_16352 = state_16182;
(statearr_16352[(22)] = inst_16143__$1);

return statearr_16352;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16353_18784 = state_16182__$1;
(statearr_16353_18784[(1)] = (39));

} else {
var statearr_16354_18785 = state_16182__$1;
(statearr_16354_18785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (8))){
var inst_16007 = (state_16182[(17)]);
var inst_16006 = (state_16182[(16)]);
var inst_16011 = (inst_16007 < inst_16006);
var inst_16012 = inst_16011;
var state_16182__$1 = state_16182;
if(cljs.core.truth_(inst_16012)){
var statearr_16359_18786 = state_16182__$1;
(statearr_16359_18786[(1)] = (10));

} else {
var statearr_16362_18787 = state_16182__$1;
(statearr_16362_18787[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14328__auto__ = null;
var cljs$core$async$mult_$_state_machine__14328__auto____0 = (function (){
var statearr_16371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16371[(0)] = cljs$core$async$mult_$_state_machine__14328__auto__);

(statearr_16371[(1)] = (1));

return statearr_16371;
});
var cljs$core$async$mult_$_state_machine__14328__auto____1 = (function (state_16182){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_16182);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e16372){var ex__14331__auto__ = e16372;
var statearr_16380_18793 = state_16182;
(statearr_16380_18793[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_16182[(4)]))){
var statearr_16382_18794 = state_16182;
(statearr_16382_18794[(1)] = cljs.core.first((state_16182[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18795 = state_16182;
state_16182 = G__18795;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14328__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14328__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14328__auto____0;
cljs$core$async$mult_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14328__auto____1;
return cljs$core$async$mult_$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_16384 = f__14662__auto__();
(statearr_16384[(6)] = c__14661__auto___18696);

return statearr_16384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16391 = arguments.length;
switch (G__16391) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18797 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18797(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18802 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18802(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18807 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18807(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18808 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18808(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18809 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18809(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18810 = arguments.length;
var i__5877__auto___18811 = (0);
while(true){
if((i__5877__auto___18811 < len__5876__auto___18810)){
args__5882__auto__.push((arguments[i__5877__auto___18811]));

var G__18812 = (i__5877__auto___18811 + (1));
i__5877__auto___18811 = G__18812;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16447){
var map__16448 = p__16447;
var map__16448__$1 = cljs.core.__destructure_map(map__16448);
var opts = map__16448__$1;
var statearr_16452_18814 = state;
(statearr_16452_18814[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16453_18817 = state;
(statearr_16453_18817[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_16455_18819 = state;
(statearr_16455_18819[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16437){
var G__16438 = cljs.core.first(seq16437);
var seq16437__$1 = cljs.core.next(seq16437);
var G__16439 = cljs.core.first(seq16437__$1);
var seq16437__$2 = cljs.core.next(seq16437__$1);
var G__16440 = cljs.core.first(seq16437__$2);
var seq16437__$3 = cljs.core.next(seq16437__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16438,G__16439,G__16440,seq16437__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16464 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16465){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16465 = meta16465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16466,meta16465__$1){
var self__ = this;
var _16466__$1 = this;
return (new cljs.core.async.t_cljs$core$async16464(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16465__$1));
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16466){
var self__ = this;
var _16466__$1 = this;
return self__.meta16465;
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16465","meta16465",2042947792,null)], null);
}));

(cljs.core.async.t_cljs$core$async16464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16464");

(cljs.core.async.t_cljs$core$async16464.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16464.
 */
cljs.core.async.__GT_t_cljs$core$async16464 = (function cljs$core$async$__GT_t_cljs$core$async16464(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16465){
return (new cljs.core.async.t_cljs$core$async16464(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16465));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16464(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14661__auto___18873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_16550){
var state_val_16551 = (state_16550[(1)]);
if((state_val_16551 === (7))){
var inst_16510 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
if(cljs.core.truth_(inst_16510)){
var statearr_16557_18874 = state_16550__$1;
(statearr_16557_18874[(1)] = (8));

} else {
var statearr_16558_18875 = state_16550__$1;
(statearr_16558_18875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (20))){
var inst_16503 = (state_16550[(7)]);
var state_16550__$1 = state_16550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16550__$1,(23),out,inst_16503);
} else {
if((state_val_16551 === (1))){
var inst_16484 = calc_state();
var inst_16485 = cljs.core.__destructure_map(inst_16484);
var inst_16487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16485,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16485,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16485,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16490 = inst_16484;
var state_16550__$1 = (function (){var statearr_16559 = state_16550;
(statearr_16559[(8)] = inst_16487);

(statearr_16559[(9)] = inst_16488);

(statearr_16559[(10)] = inst_16489);

(statearr_16559[(11)] = inst_16490);

return statearr_16559;
})();
var statearr_16560_18879 = state_16550__$1;
(statearr_16560_18879[(2)] = null);

(statearr_16560_18879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (24))){
var inst_16493 = (state_16550[(12)]);
var inst_16490 = inst_16493;
var state_16550__$1 = (function (){var statearr_16562 = state_16550;
(statearr_16562[(11)] = inst_16490);

return statearr_16562;
})();
var statearr_16563_18880 = state_16550__$1;
(statearr_16563_18880[(2)] = null);

(statearr_16563_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (4))){
var inst_16503 = (state_16550[(7)]);
var inst_16505 = (state_16550[(13)]);
var inst_16501 = (state_16550[(2)]);
var inst_16503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16501,(0),null);
var inst_16504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16501,(1),null);
var inst_16505__$1 = (inst_16503__$1 == null);
var state_16550__$1 = (function (){var statearr_16564 = state_16550;
(statearr_16564[(7)] = inst_16503__$1);

(statearr_16564[(14)] = inst_16504);

(statearr_16564[(13)] = inst_16505__$1);

return statearr_16564;
})();
if(cljs.core.truth_(inst_16505__$1)){
var statearr_16566_18885 = state_16550__$1;
(statearr_16566_18885[(1)] = (5));

} else {
var statearr_16570_18886 = state_16550__$1;
(statearr_16570_18886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (15))){
var inst_16494 = (state_16550[(15)]);
var inst_16524 = (state_16550[(16)]);
var inst_16524__$1 = cljs.core.empty_QMARK_(inst_16494);
var state_16550__$1 = (function (){var statearr_16572 = state_16550;
(statearr_16572[(16)] = inst_16524__$1);

return statearr_16572;
})();
if(inst_16524__$1){
var statearr_16573_18887 = state_16550__$1;
(statearr_16573_18887[(1)] = (17));

} else {
var statearr_16574_18888 = state_16550__$1;
(statearr_16574_18888[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (21))){
var inst_16493 = (state_16550[(12)]);
var inst_16490 = inst_16493;
var state_16550__$1 = (function (){var statearr_16575 = state_16550;
(statearr_16575[(11)] = inst_16490);

return statearr_16575;
})();
var statearr_16576_18889 = state_16550__$1;
(statearr_16576_18889[(2)] = null);

(statearr_16576_18889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (13))){
var inst_16517 = (state_16550[(2)]);
var inst_16518 = calc_state();
var inst_16490 = inst_16518;
var state_16550__$1 = (function (){var statearr_16577 = state_16550;
(statearr_16577[(17)] = inst_16517);

(statearr_16577[(11)] = inst_16490);

return statearr_16577;
})();
var statearr_16578_18891 = state_16550__$1;
(statearr_16578_18891[(2)] = null);

(statearr_16578_18891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (22))){
var inst_16544 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16579_18892 = state_16550__$1;
(statearr_16579_18892[(2)] = inst_16544);

(statearr_16579_18892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (6))){
var inst_16504 = (state_16550[(14)]);
var inst_16508 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16504,change);
var state_16550__$1 = state_16550;
var statearr_16584_18894 = state_16550__$1;
(statearr_16584_18894[(2)] = inst_16508);

(statearr_16584_18894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (25))){
var state_16550__$1 = state_16550;
var statearr_16585_18896 = state_16550__$1;
(statearr_16585_18896[(2)] = null);

(statearr_16585_18896[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (17))){
var inst_16495 = (state_16550[(18)]);
var inst_16504 = (state_16550[(14)]);
var inst_16526 = (inst_16495.cljs$core$IFn$_invoke$arity$1 ? inst_16495.cljs$core$IFn$_invoke$arity$1(inst_16504) : inst_16495.call(null,inst_16504));
var inst_16527 = cljs.core.not(inst_16526);
var state_16550__$1 = state_16550;
var statearr_16589_18897 = state_16550__$1;
(statearr_16589_18897[(2)] = inst_16527);

(statearr_16589_18897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (3))){
var inst_16548 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16550__$1,inst_16548);
} else {
if((state_val_16551 === (12))){
var state_16550__$1 = state_16550;
var statearr_16596_18901 = state_16550__$1;
(statearr_16596_18901[(2)] = null);

(statearr_16596_18901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (2))){
var inst_16490 = (state_16550[(11)]);
var inst_16493 = (state_16550[(12)]);
var inst_16493__$1 = cljs.core.__destructure_map(inst_16490);
var inst_16494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16493__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16493__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16493__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16550__$1 = (function (){var statearr_16597 = state_16550;
(statearr_16597[(12)] = inst_16493__$1);

(statearr_16597[(15)] = inst_16494);

(statearr_16597[(18)] = inst_16495);

return statearr_16597;
})();
return cljs.core.async.ioc_alts_BANG_(state_16550__$1,(4),inst_16496);
} else {
if((state_val_16551 === (23))){
var inst_16535 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
if(cljs.core.truth_(inst_16535)){
var statearr_16599_18902 = state_16550__$1;
(statearr_16599_18902[(1)] = (24));

} else {
var statearr_16603_18903 = state_16550__$1;
(statearr_16603_18903[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (19))){
var inst_16530 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16605_18904 = state_16550__$1;
(statearr_16605_18904[(2)] = inst_16530);

(statearr_16605_18904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (11))){
var inst_16504 = (state_16550[(14)]);
var inst_16514 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16504);
var state_16550__$1 = state_16550;
var statearr_16606_18905 = state_16550__$1;
(statearr_16606_18905[(2)] = inst_16514);

(statearr_16606_18905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (9))){
var inst_16494 = (state_16550[(15)]);
var inst_16504 = (state_16550[(14)]);
var inst_16521 = (state_16550[(19)]);
var inst_16521__$1 = (inst_16494.cljs$core$IFn$_invoke$arity$1 ? inst_16494.cljs$core$IFn$_invoke$arity$1(inst_16504) : inst_16494.call(null,inst_16504));
var state_16550__$1 = (function (){var statearr_16613 = state_16550;
(statearr_16613[(19)] = inst_16521__$1);

return statearr_16613;
})();
if(cljs.core.truth_(inst_16521__$1)){
var statearr_16614_18906 = state_16550__$1;
(statearr_16614_18906[(1)] = (14));

} else {
var statearr_16615_18907 = state_16550__$1;
(statearr_16615_18907[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (5))){
var inst_16505 = (state_16550[(13)]);
var state_16550__$1 = state_16550;
var statearr_16616_18908 = state_16550__$1;
(statearr_16616_18908[(2)] = inst_16505);

(statearr_16616_18908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (14))){
var inst_16521 = (state_16550[(19)]);
var state_16550__$1 = state_16550;
var statearr_16620_18910 = state_16550__$1;
(statearr_16620_18910[(2)] = inst_16521);

(statearr_16620_18910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (26))){
var inst_16540 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16622_18911 = state_16550__$1;
(statearr_16622_18911[(2)] = inst_16540);

(statearr_16622_18911[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (16))){
var inst_16532 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
if(cljs.core.truth_(inst_16532)){
var statearr_16623_18912 = state_16550__$1;
(statearr_16623_18912[(1)] = (20));

} else {
var statearr_16624_18913 = state_16550__$1;
(statearr_16624_18913[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (10))){
var inst_16546 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16625_18914 = state_16550__$1;
(statearr_16625_18914[(2)] = inst_16546);

(statearr_16625_18914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (18))){
var inst_16524 = (state_16550[(16)]);
var state_16550__$1 = state_16550;
var statearr_16626_18915 = state_16550__$1;
(statearr_16626_18915[(2)] = inst_16524);

(statearr_16626_18915[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (8))){
var inst_16503 = (state_16550[(7)]);
var inst_16512 = (inst_16503 == null);
var state_16550__$1 = state_16550;
if(cljs.core.truth_(inst_16512)){
var statearr_16628_18916 = state_16550__$1;
(statearr_16628_18916[(1)] = (11));

} else {
var statearr_16629_18917 = state_16550__$1;
(statearr_16629_18917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14328__auto__ = null;
var cljs$core$async$mix_$_state_machine__14328__auto____0 = (function (){
var statearr_16630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16630[(0)] = cljs$core$async$mix_$_state_machine__14328__auto__);

(statearr_16630[(1)] = (1));

return statearr_16630;
});
var cljs$core$async$mix_$_state_machine__14328__auto____1 = (function (state_16550){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_16550);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e16634){var ex__14331__auto__ = e16634;
var statearr_16635_18918 = state_16550;
(statearr_16635_18918[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_16550[(4)]))){
var statearr_16640_18919 = state_16550;
(statearr_16640_18919[(1)] = cljs.core.first((state_16550[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18921 = state_16550;
state_16550 = G__18921;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14328__auto__ = function(state_16550){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14328__auto____1.call(this,state_16550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14328__auto____0;
cljs$core$async$mix_$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14328__auto____1;
return cljs$core$async$mix_$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_16644 = f__14662__auto__();
(statearr_16644[(6)] = c__14661__auto___18873);

return statearr_16644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18925 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18925(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18926 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18926(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18927 = (function() {
var G__18928 = null;
var G__18928__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18928__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18928 = function(p,v){
switch(arguments.length){
case 1:
return G__18928__1.call(this,p);
case 2:
return G__18928__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18928.cljs$core$IFn$_invoke$arity$1 = G__18928__1;
G__18928.cljs$core$IFn$_invoke$arity$2 = G__18928__2;
return G__18928;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16671 = arguments.length;
switch (G__16671) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18927(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18927(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16706 = meta16706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16707,meta16706__$1){
var self__ = this;
var _16707__$1 = this;
return (new cljs.core.async.t_cljs$core$async16705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16706__$1));
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16707){
var self__ = this;
var _16707__$1 = this;
return self__.meta16706;
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16706","meta16706",890086644,null)], null);
}));

(cljs.core.async.t_cljs$core$async16705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16705");

(cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16705.
 */
cljs.core.async.__GT_t_cljs$core$async16705 = (function cljs$core$async$__GT_t_cljs$core$async16705(ch,topic_fn,buf_fn,mults,ensure_mult,meta16706){
return (new cljs.core.async.t_cljs$core$async16705(ch,topic_fn,buf_fn,mults,ensure_mult,meta16706));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16693 = arguments.length;
switch (G__16693) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16675_SHARP_){
if(cljs.core.truth_((p1__16675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16675_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16675_SHARP_.call(null,topic)))){
return p1__16675_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16675_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14661__auto___18936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_16826){
var state_val_16827 = (state_16826[(1)]);
if((state_val_16827 === (7))){
var inst_16820 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16832_18937 = state_16826__$1;
(statearr_16832_18937[(2)] = inst_16820);

(statearr_16832_18937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (20))){
var state_16826__$1 = state_16826;
var statearr_16834_18938 = state_16826__$1;
(statearr_16834_18938[(2)] = null);

(statearr_16834_18938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (1))){
var state_16826__$1 = state_16826;
var statearr_16835_18939 = state_16826__$1;
(statearr_16835_18939[(2)] = null);

(statearr_16835_18939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (24))){
var inst_16802 = (state_16826[(7)]);
var inst_16812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16802);
var state_16826__$1 = state_16826;
var statearr_16838_18940 = state_16826__$1;
(statearr_16838_18940[(2)] = inst_16812);

(statearr_16838_18940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (4))){
var inst_16749 = (state_16826[(8)]);
var inst_16749__$1 = (state_16826[(2)]);
var inst_16750 = (inst_16749__$1 == null);
var state_16826__$1 = (function (){var statearr_16842 = state_16826;
(statearr_16842[(8)] = inst_16749__$1);

return statearr_16842;
})();
if(cljs.core.truth_(inst_16750)){
var statearr_16844_18941 = state_16826__$1;
(statearr_16844_18941[(1)] = (5));

} else {
var statearr_16848_18942 = state_16826__$1;
(statearr_16848_18942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (15))){
var inst_16796 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16852_18943 = state_16826__$1;
(statearr_16852_18943[(2)] = inst_16796);

(statearr_16852_18943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (21))){
var inst_16817 = (state_16826[(2)]);
var state_16826__$1 = (function (){var statearr_16853 = state_16826;
(statearr_16853[(9)] = inst_16817);

return statearr_16853;
})();
var statearr_16854_18944 = state_16826__$1;
(statearr_16854_18944[(2)] = null);

(statearr_16854_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (13))){
var inst_16778 = (state_16826[(10)]);
var inst_16780 = cljs.core.chunked_seq_QMARK_(inst_16778);
var state_16826__$1 = state_16826;
if(inst_16780){
var statearr_16856_18945 = state_16826__$1;
(statearr_16856_18945[(1)] = (16));

} else {
var statearr_16857_18946 = state_16826__$1;
(statearr_16857_18946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (22))){
var inst_16809 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
if(cljs.core.truth_(inst_16809)){
var statearr_16858_18947 = state_16826__$1;
(statearr_16858_18947[(1)] = (23));

} else {
var statearr_16859_18948 = state_16826__$1;
(statearr_16859_18948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (6))){
var inst_16749 = (state_16826[(8)]);
var inst_16802 = (state_16826[(7)]);
var inst_16805 = (state_16826[(11)]);
var inst_16802__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16749) : topic_fn.call(null,inst_16749));
var inst_16804 = cljs.core.deref(mults);
var inst_16805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16804,inst_16802__$1);
var state_16826__$1 = (function (){var statearr_16867 = state_16826;
(statearr_16867[(7)] = inst_16802__$1);

(statearr_16867[(11)] = inst_16805__$1);

return statearr_16867;
})();
if(cljs.core.truth_(inst_16805__$1)){
var statearr_16874_18953 = state_16826__$1;
(statearr_16874_18953[(1)] = (19));

} else {
var statearr_16877_18954 = state_16826__$1;
(statearr_16877_18954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (25))){
var inst_16814 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16878_18956 = state_16826__$1;
(statearr_16878_18956[(2)] = inst_16814);

(statearr_16878_18956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (17))){
var inst_16778 = (state_16826[(10)]);
var inst_16787 = cljs.core.first(inst_16778);
var inst_16788 = cljs.core.async.muxch_STAR_(inst_16787);
var inst_16789 = cljs.core.async.close_BANG_(inst_16788);
var inst_16790 = cljs.core.next(inst_16778);
var inst_16760 = inst_16790;
var inst_16761 = null;
var inst_16762 = (0);
var inst_16763 = (0);
var state_16826__$1 = (function (){var statearr_16885 = state_16826;
(statearr_16885[(12)] = inst_16789);

(statearr_16885[(13)] = inst_16760);

(statearr_16885[(14)] = inst_16761);

(statearr_16885[(15)] = inst_16762);

(statearr_16885[(16)] = inst_16763);

return statearr_16885;
})();
var statearr_16886_18957 = state_16826__$1;
(statearr_16886_18957[(2)] = null);

(statearr_16886_18957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (3))){
var inst_16822 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16826__$1,inst_16822);
} else {
if((state_val_16827 === (12))){
var inst_16798 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16887_18958 = state_16826__$1;
(statearr_16887_18958[(2)] = inst_16798);

(statearr_16887_18958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (2))){
var state_16826__$1 = state_16826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16826__$1,(4),ch);
} else {
if((state_val_16827 === (23))){
var state_16826__$1 = state_16826;
var statearr_16895_18959 = state_16826__$1;
(statearr_16895_18959[(2)] = null);

(statearr_16895_18959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (19))){
var inst_16805 = (state_16826[(11)]);
var inst_16749 = (state_16826[(8)]);
var inst_16807 = cljs.core.async.muxch_STAR_(inst_16805);
var state_16826__$1 = state_16826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16826__$1,(22),inst_16807,inst_16749);
} else {
if((state_val_16827 === (11))){
var inst_16760 = (state_16826[(13)]);
var inst_16778 = (state_16826[(10)]);
var inst_16778__$1 = cljs.core.seq(inst_16760);
var state_16826__$1 = (function (){var statearr_16899 = state_16826;
(statearr_16899[(10)] = inst_16778__$1);

return statearr_16899;
})();
if(inst_16778__$1){
var statearr_16900_18961 = state_16826__$1;
(statearr_16900_18961[(1)] = (13));

} else {
var statearr_16901_18962 = state_16826__$1;
(statearr_16901_18962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (9))){
var inst_16800 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16905_18963 = state_16826__$1;
(statearr_16905_18963[(2)] = inst_16800);

(statearr_16905_18963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (5))){
var inst_16757 = cljs.core.deref(mults);
var inst_16758 = cljs.core.vals(inst_16757);
var inst_16759 = cljs.core.seq(inst_16758);
var inst_16760 = inst_16759;
var inst_16761 = null;
var inst_16762 = (0);
var inst_16763 = (0);
var state_16826__$1 = (function (){var statearr_16906 = state_16826;
(statearr_16906[(13)] = inst_16760);

(statearr_16906[(14)] = inst_16761);

(statearr_16906[(15)] = inst_16762);

(statearr_16906[(16)] = inst_16763);

return statearr_16906;
})();
var statearr_16907_18964 = state_16826__$1;
(statearr_16907_18964[(2)] = null);

(statearr_16907_18964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (14))){
var state_16826__$1 = state_16826;
var statearr_16911_18967 = state_16826__$1;
(statearr_16911_18967[(2)] = null);

(statearr_16911_18967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (16))){
var inst_16778 = (state_16826[(10)]);
var inst_16782 = cljs.core.chunk_first(inst_16778);
var inst_16783 = cljs.core.chunk_rest(inst_16778);
var inst_16784 = cljs.core.count(inst_16782);
var inst_16760 = inst_16783;
var inst_16761 = inst_16782;
var inst_16762 = inst_16784;
var inst_16763 = (0);
var state_16826__$1 = (function (){var statearr_16912 = state_16826;
(statearr_16912[(13)] = inst_16760);

(statearr_16912[(14)] = inst_16761);

(statearr_16912[(15)] = inst_16762);

(statearr_16912[(16)] = inst_16763);

return statearr_16912;
})();
var statearr_16917_18970 = state_16826__$1;
(statearr_16917_18970[(2)] = null);

(statearr_16917_18970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (10))){
var inst_16761 = (state_16826[(14)]);
var inst_16763 = (state_16826[(16)]);
var inst_16760 = (state_16826[(13)]);
var inst_16762 = (state_16826[(15)]);
var inst_16768 = cljs.core._nth(inst_16761,inst_16763);
var inst_16769 = cljs.core.async.muxch_STAR_(inst_16768);
var inst_16770 = cljs.core.async.close_BANG_(inst_16769);
var inst_16772 = (inst_16763 + (1));
var tmp16908 = inst_16760;
var tmp16909 = inst_16762;
var tmp16910 = inst_16761;
var inst_16760__$1 = tmp16908;
var inst_16761__$1 = tmp16910;
var inst_16762__$1 = tmp16909;
var inst_16763__$1 = inst_16772;
var state_16826__$1 = (function (){var statearr_16926 = state_16826;
(statearr_16926[(17)] = inst_16770);

(statearr_16926[(13)] = inst_16760__$1);

(statearr_16926[(14)] = inst_16761__$1);

(statearr_16926[(15)] = inst_16762__$1);

(statearr_16926[(16)] = inst_16763__$1);

return statearr_16926;
})();
var statearr_16929_18972 = state_16826__$1;
(statearr_16929_18972[(2)] = null);

(statearr_16929_18972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (18))){
var inst_16793 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16930_18973 = state_16826__$1;
(statearr_16930_18973[(2)] = inst_16793);

(statearr_16930_18973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16827 === (8))){
var inst_16763 = (state_16826[(16)]);
var inst_16762 = (state_16826[(15)]);
var inst_16765 = (inst_16763 < inst_16762);
var inst_16766 = inst_16765;
var state_16826__$1 = state_16826;
if(cljs.core.truth_(inst_16766)){
var statearr_16931_18974 = state_16826__$1;
(statearr_16931_18974[(1)] = (10));

} else {
var statearr_16932_18975 = state_16826__$1;
(statearr_16932_18975[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_16933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16933[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_16933[(1)] = (1));

return statearr_16933;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_16826){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_16826);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e16934){var ex__14331__auto__ = e16934;
var statearr_16935_18976 = state_16826;
(statearr_16935_18976[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_16826[(4)]))){
var statearr_16936_18977 = state_16826;
(statearr_16936_18977[(1)] = cljs.core.first((state_16826[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18978 = state_16826;
state_16826 = G__18978;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_16826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_16826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_16943 = f__14662__auto__();
(statearr_16943[(6)] = c__14661__auto___18936);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16951 = arguments.length;
switch (G__16951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16955 = arguments.length;
switch (G__16955) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16966 = arguments.length;
switch (G__16966) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14661__auto___18984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17032){
var state_val_17033 = (state_17032[(1)]);
if((state_val_17033 === (7))){
var state_17032__$1 = state_17032;
var statearr_17044_18985 = state_17032__$1;
(statearr_17044_18985[(2)] = null);

(statearr_17044_18985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (1))){
var state_17032__$1 = state_17032;
var statearr_17045_18986 = state_17032__$1;
(statearr_17045_18986[(2)] = null);

(statearr_17045_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (4))){
var inst_16984 = (state_17032[(7)]);
var inst_16983 = (state_17032[(8)]);
var inst_16986 = (inst_16984 < inst_16983);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_16986)){
var statearr_17047_18990 = state_17032__$1;
(statearr_17047_18990[(1)] = (6));

} else {
var statearr_17048_18991 = state_17032__$1;
(statearr_17048_18991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (15))){
var inst_17015 = (state_17032[(9)]);
var inst_17022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17015);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(17),out,inst_17022);
} else {
if((state_val_17033 === (13))){
var inst_17015 = (state_17032[(9)]);
var inst_17015__$1 = (state_17032[(2)]);
var inst_17017 = cljs.core.some(cljs.core.nil_QMARK_,inst_17015__$1);
var state_17032__$1 = (function (){var statearr_17053 = state_17032;
(statearr_17053[(9)] = inst_17015__$1);

return statearr_17053;
})();
if(cljs.core.truth_(inst_17017)){
var statearr_17055_18995 = state_17032__$1;
(statearr_17055_18995[(1)] = (14));

} else {
var statearr_17057_18996 = state_17032__$1;
(statearr_17057_18996[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (6))){
var state_17032__$1 = state_17032;
var statearr_17058_18997 = state_17032__$1;
(statearr_17058_18997[(2)] = null);

(statearr_17058_18997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (17))){
var inst_17025 = (state_17032[(2)]);
var state_17032__$1 = (function (){var statearr_17069 = state_17032;
(statearr_17069[(10)] = inst_17025);

return statearr_17069;
})();
var statearr_17070_18998 = state_17032__$1;
(statearr_17070_18998[(2)] = null);

(statearr_17070_18998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (3))){
var inst_17030 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17032__$1,inst_17030);
} else {
if((state_val_17033 === (12))){
var _ = (function (){var statearr_17095 = state_17032;
(statearr_17095[(4)] = cljs.core.rest((state_17032[(4)])));

return statearr_17095;
})();
var state_17032__$1 = state_17032;
var ex17066 = (state_17032__$1[(2)]);
var statearr_17112_18999 = state_17032__$1;
(statearr_17112_18999[(5)] = ex17066);


if((ex17066 instanceof Object)){
var statearr_17115_19000 = state_17032__$1;
(statearr_17115_19000[(1)] = (11));

(statearr_17115_19000[(5)] = null);

} else {
throw ex17066;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (2))){
var inst_16982 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16983 = cnt;
var inst_16984 = (0);
var state_17032__$1 = (function (){var statearr_17122 = state_17032;
(statearr_17122[(11)] = inst_16982);

(statearr_17122[(8)] = inst_16983);

(statearr_17122[(7)] = inst_16984);

return statearr_17122;
})();
var statearr_17124_19002 = state_17032__$1;
(statearr_17124_19002[(2)] = null);

(statearr_17124_19002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (11))){
var inst_16989 = (state_17032[(2)]);
var inst_16990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17032__$1 = (function (){var statearr_17127 = state_17032;
(statearr_17127[(12)] = inst_16989);

return statearr_17127;
})();
var statearr_17130_19003 = state_17032__$1;
(statearr_17130_19003[(2)] = inst_16990);

(statearr_17130_19003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (9))){
var inst_16984 = (state_17032[(7)]);
var _ = (function (){var statearr_17135 = state_17032;
(statearr_17135[(4)] = cljs.core.cons((12),(state_17032[(4)])));

return statearr_17135;
})();
var inst_17000 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16984) : chs__$1.call(null,inst_16984));
var inst_17001 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16984) : done.call(null,inst_16984));
var inst_17002 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17000,inst_17001);
var ___$1 = (function (){var statearr_17138 = state_17032;
(statearr_17138[(4)] = cljs.core.rest((state_17032[(4)])));

return statearr_17138;
})();
var state_17032__$1 = state_17032;
var statearr_17139_19004 = state_17032__$1;
(statearr_17139_19004[(2)] = inst_17002);

(statearr_17139_19004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (5))){
var inst_17013 = (state_17032[(2)]);
var state_17032__$1 = (function (){var statearr_17142 = state_17032;
(statearr_17142[(13)] = inst_17013);

return statearr_17142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17032__$1,(13),dchan);
} else {
if((state_val_17033 === (14))){
var inst_17019 = cljs.core.async.close_BANG_(out);
var state_17032__$1 = state_17032;
var statearr_17145_19005 = state_17032__$1;
(statearr_17145_19005[(2)] = inst_17019);

(statearr_17145_19005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (16))){
var inst_17028 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17147_19006 = state_17032__$1;
(statearr_17147_19006[(2)] = inst_17028);

(statearr_17147_19006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (10))){
var inst_16984 = (state_17032[(7)]);
var inst_17005 = (state_17032[(2)]);
var inst_17007 = (inst_16984 + (1));
var inst_16984__$1 = inst_17007;
var state_17032__$1 = (function (){var statearr_17153 = state_17032;
(statearr_17153[(14)] = inst_17005);

(statearr_17153[(7)] = inst_16984__$1);

return statearr_17153;
})();
var statearr_17155_19012 = state_17032__$1;
(statearr_17155_19012[(2)] = null);

(statearr_17155_19012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (8))){
var inst_17011 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17156_19017 = state_17032__$1;
(statearr_17156_19017[(2)] = inst_17011);

(statearr_17156_19017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_17160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17160[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_17160[(1)] = (1));

return statearr_17160;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17032){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17032);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17161){var ex__14331__auto__ = e17161;
var statearr_17162_19024 = state_17032;
(statearr_17162_19024[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17032[(4)]))){
var statearr_17163_19025 = state_17032;
(statearr_17163_19025[(1)] = cljs.core.first((state_17032[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19026 = state_17032;
state_17032 = G__19026;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17164 = f__14662__auto__();
(statearr_17164[(6)] = c__14661__auto___18984);

return statearr_17164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17170 = arguments.length;
switch (G__17170) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17203){
var state_val_17204 = (state_17203[(1)]);
if((state_val_17204 === (7))){
var inst_17181 = (state_17203[(7)]);
var inst_17182 = (state_17203[(8)]);
var inst_17181__$1 = (state_17203[(2)]);
var inst_17182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17181__$1,(0),null);
var inst_17183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17181__$1,(1),null);
var inst_17184 = (inst_17182__$1 == null);
var state_17203__$1 = (function (){var statearr_17215 = state_17203;
(statearr_17215[(7)] = inst_17181__$1);

(statearr_17215[(8)] = inst_17182__$1);

(statearr_17215[(9)] = inst_17183);

return statearr_17215;
})();
if(cljs.core.truth_(inst_17184)){
var statearr_17216_19034 = state_17203__$1;
(statearr_17216_19034[(1)] = (8));

} else {
var statearr_17217_19035 = state_17203__$1;
(statearr_17217_19035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (1))){
var inst_17171 = cljs.core.vec(chs);
var inst_17172 = inst_17171;
var state_17203__$1 = (function (){var statearr_17223 = state_17203;
(statearr_17223[(10)] = inst_17172);

return statearr_17223;
})();
var statearr_17224_19038 = state_17203__$1;
(statearr_17224_19038[(2)] = null);

(statearr_17224_19038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (4))){
var inst_17172 = (state_17203[(10)]);
var state_17203__$1 = state_17203;
return cljs.core.async.ioc_alts_BANG_(state_17203__$1,(7),inst_17172);
} else {
if((state_val_17204 === (6))){
var inst_17198 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17225_19039 = state_17203__$1;
(statearr_17225_19039[(2)] = inst_17198);

(statearr_17225_19039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (3))){
var inst_17200 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17203__$1,inst_17200);
} else {
if((state_val_17204 === (2))){
var inst_17172 = (state_17203[(10)]);
var inst_17174 = cljs.core.count(inst_17172);
var inst_17175 = (inst_17174 > (0));
var state_17203__$1 = state_17203;
if(cljs.core.truth_(inst_17175)){
var statearr_17227_19041 = state_17203__$1;
(statearr_17227_19041[(1)] = (4));

} else {
var statearr_17228_19042 = state_17203__$1;
(statearr_17228_19042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (11))){
var inst_17172 = (state_17203[(10)]);
var inst_17191 = (state_17203[(2)]);
var tmp17226 = inst_17172;
var inst_17172__$1 = tmp17226;
var state_17203__$1 = (function (){var statearr_17229 = state_17203;
(statearr_17229[(11)] = inst_17191);

(statearr_17229[(10)] = inst_17172__$1);

return statearr_17229;
})();
var statearr_17230_19043 = state_17203__$1;
(statearr_17230_19043[(2)] = null);

(statearr_17230_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (9))){
var inst_17182 = (state_17203[(8)]);
var state_17203__$1 = state_17203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17203__$1,(11),out,inst_17182);
} else {
if((state_val_17204 === (5))){
var inst_17196 = cljs.core.async.close_BANG_(out);
var state_17203__$1 = state_17203;
var statearr_17263_19045 = state_17203__$1;
(statearr_17263_19045[(2)] = inst_17196);

(statearr_17263_19045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (10))){
var inst_17194 = (state_17203[(2)]);
var state_17203__$1 = state_17203;
var statearr_17265_19046 = state_17203__$1;
(statearr_17265_19046[(2)] = inst_17194);

(statearr_17265_19046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17204 === (8))){
var inst_17172 = (state_17203[(10)]);
var inst_17181 = (state_17203[(7)]);
var inst_17182 = (state_17203[(8)]);
var inst_17183 = (state_17203[(9)]);
var inst_17186 = (function (){var cs = inst_17172;
var vec__17177 = inst_17181;
var v = inst_17182;
var c = inst_17183;
return (function (p1__17168_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17168_SHARP_);
});
})();
var inst_17187 = cljs.core.filterv(inst_17186,inst_17172);
var inst_17172__$1 = inst_17187;
var state_17203__$1 = (function (){var statearr_17272 = state_17203;
(statearr_17272[(10)] = inst_17172__$1);

return statearr_17272;
})();
var statearr_17273_19056 = state_17203__$1;
(statearr_17273_19056[(2)] = null);

(statearr_17273_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_17274 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17274[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_17274[(1)] = (1));

return statearr_17274;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17203){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17203);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17275){var ex__14331__auto__ = e17275;
var statearr_17276_19057 = state_17203;
(statearr_17276_19057[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17203[(4)]))){
var statearr_17277_19059 = state_17203;
(statearr_17277_19059[(1)] = cljs.core.first((state_17203[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19060 = state_17203;
state_17203 = G__19060;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17280 = f__14662__auto__();
(statearr_17280[(6)] = c__14661__auto___19033);

return statearr_17280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17306 = arguments.length;
switch (G__17306) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17348){
var state_val_17350 = (state_17348[(1)]);
if((state_val_17350 === (7))){
var inst_17330 = (state_17348[(7)]);
var inst_17330__$1 = (state_17348[(2)]);
var inst_17331 = (inst_17330__$1 == null);
var inst_17332 = cljs.core.not(inst_17331);
var state_17348__$1 = (function (){var statearr_17358 = state_17348;
(statearr_17358[(7)] = inst_17330__$1);

return statearr_17358;
})();
if(inst_17332){
var statearr_17359_19077 = state_17348__$1;
(statearr_17359_19077[(1)] = (8));

} else {
var statearr_17362_19078 = state_17348__$1;
(statearr_17362_19078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (1))){
var inst_17325 = (0);
var state_17348__$1 = (function (){var statearr_17363 = state_17348;
(statearr_17363[(8)] = inst_17325);

return statearr_17363;
})();
var statearr_17364_19079 = state_17348__$1;
(statearr_17364_19079[(2)] = null);

(statearr_17364_19079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (4))){
var state_17348__$1 = state_17348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17348__$1,(7),ch);
} else {
if((state_val_17350 === (6))){
var inst_17343 = (state_17348[(2)]);
var state_17348__$1 = state_17348;
var statearr_17368_19084 = state_17348__$1;
(statearr_17368_19084[(2)] = inst_17343);

(statearr_17368_19084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (3))){
var inst_17345 = (state_17348[(2)]);
var inst_17346 = cljs.core.async.close_BANG_(out);
var state_17348__$1 = (function (){var statearr_17370 = state_17348;
(statearr_17370[(9)] = inst_17345);

return statearr_17370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17348__$1,inst_17346);
} else {
if((state_val_17350 === (2))){
var inst_17325 = (state_17348[(8)]);
var inst_17327 = (inst_17325 < n);
var state_17348__$1 = state_17348;
if(cljs.core.truth_(inst_17327)){
var statearr_17371_19085 = state_17348__$1;
(statearr_17371_19085[(1)] = (4));

} else {
var statearr_17372_19086 = state_17348__$1;
(statearr_17372_19086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (11))){
var inst_17325 = (state_17348[(8)]);
var inst_17335 = (state_17348[(2)]);
var inst_17336 = (inst_17325 + (1));
var inst_17325__$1 = inst_17336;
var state_17348__$1 = (function (){var statearr_17373 = state_17348;
(statearr_17373[(10)] = inst_17335);

(statearr_17373[(8)] = inst_17325__$1);

return statearr_17373;
})();
var statearr_17374_19087 = state_17348__$1;
(statearr_17374_19087[(2)] = null);

(statearr_17374_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (9))){
var state_17348__$1 = state_17348;
var statearr_17375_19094 = state_17348__$1;
(statearr_17375_19094[(2)] = null);

(statearr_17375_19094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (5))){
var state_17348__$1 = state_17348;
var statearr_17376_19096 = state_17348__$1;
(statearr_17376_19096[(2)] = null);

(statearr_17376_19096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (10))){
var inst_17340 = (state_17348[(2)]);
var state_17348__$1 = state_17348;
var statearr_17378_19097 = state_17348__$1;
(statearr_17378_19097[(2)] = inst_17340);

(statearr_17378_19097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (8))){
var inst_17330 = (state_17348[(7)]);
var state_17348__$1 = state_17348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17348__$1,(11),out,inst_17330);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_17379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17379[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_17379[(1)] = (1));

return statearr_17379;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17348){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17348);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17380){var ex__14331__auto__ = e17380;
var statearr_17382_19103 = state_17348;
(statearr_17382_19103[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17348[(4)]))){
var statearr_17383_19104 = state_17348;
(statearr_17383_19104[(1)] = cljs.core.first((state_17348[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19105 = state_17348;
state_17348 = G__19105;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17385 = f__14662__auto__();
(statearr_17385[(6)] = c__14661__auto___19073);

return statearr_17385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17403 = (function (f,ch,meta17392,_,fn1,meta17404){
this.f = f;
this.ch = ch;
this.meta17392 = meta17392;
this._ = _;
this.fn1 = fn1;
this.meta17404 = meta17404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17405,meta17404__$1){
var self__ = this;
var _17405__$1 = this;
return (new cljs.core.async.t_cljs$core$async17403(self__.f,self__.ch,self__.meta17392,self__._,self__.fn1,meta17404__$1));
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17405){
var self__ = this;
var _17405__$1 = this;
return self__.meta17404;
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17387_SHARP_){
var G__17409 = (((p1__17387_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17387_SHARP_) : self__.f.call(null,p1__17387_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17409) : f1.call(null,G__17409));
});
}));

(cljs.core.async.t_cljs$core$async17403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17392","meta17392",-1407053245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17391","cljs.core.async/t_cljs$core$async17391",-1417825312,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17404","meta17404",-1705641252,null)], null);
}));

(cljs.core.async.t_cljs$core$async17403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17403");

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17403.
 */
cljs.core.async.__GT_t_cljs$core$async17403 = (function cljs$core$async$__GT_t_cljs$core$async17403(f,ch,meta17392,_,fn1,meta17404){
return (new cljs.core.async.t_cljs$core$async17403(f,ch,meta17392,_,fn1,meta17404));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17391 = (function (f,ch,meta17392){
this.f = f;
this.ch = ch;
this.meta17392 = meta17392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17393,meta17392__$1){
var self__ = this;
var _17393__$1 = this;
return (new cljs.core.async.t_cljs$core$async17391(self__.f,self__.ch,meta17392__$1));
}));

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17393){
var self__ = this;
var _17393__$1 = this;
return self__.meta17392;
}));

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17403(self__.f,self__.ch,self__.meta17392,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17422 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17422) : self__.f.call(null,G__17422));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17392","meta17392",-1407053245,null)], null);
}));

(cljs.core.async.t_cljs$core$async17391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17391");

(cljs.core.async.t_cljs$core$async17391.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17391.
 */
cljs.core.async.__GT_t_cljs$core$async17391 = (function cljs$core$async$__GT_t_cljs$core$async17391(f,ch,meta17392){
return (new cljs.core.async.t_cljs$core$async17391(f,ch,meta17392));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17391(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17429 = (function (f,ch,meta17430){
this.f = f;
this.ch = ch;
this.meta17430 = meta17430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17431,meta17430__$1){
var self__ = this;
var _17431__$1 = this;
return (new cljs.core.async.t_cljs$core$async17429(self__.f,self__.ch,meta17430__$1));
}));

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17431){
var self__ = this;
var _17431__$1 = this;
return self__.meta17430;
}));

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17430","meta17430",1860637194,null)], null);
}));

(cljs.core.async.t_cljs$core$async17429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17429");

(cljs.core.async.t_cljs$core$async17429.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17429.
 */
cljs.core.async.__GT_t_cljs$core$async17429 = (function cljs$core$async$__GT_t_cljs$core$async17429(f,ch,meta17430){
return (new cljs.core.async.t_cljs$core$async17429(f,ch,meta17430));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17429(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17449 = (function (p,ch,meta17450){
this.p = p;
this.ch = ch;
this.meta17450 = meta17450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17451,meta17450__$1){
var self__ = this;
var _17451__$1 = this;
return (new cljs.core.async.t_cljs$core$async17449(self__.p,self__.ch,meta17450__$1));
}));

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17451){
var self__ = this;
var _17451__$1 = this;
return self__.meta17450;
}));

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17450","meta17450",1118014411,null)], null);
}));

(cljs.core.async.t_cljs$core$async17449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17449");

(cljs.core.async.t_cljs$core$async17449.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17449.
 */
cljs.core.async.__GT_t_cljs$core$async17449 = (function cljs$core$async$__GT_t_cljs$core$async17449(p,ch,meta17450){
return (new cljs.core.async.t_cljs$core$async17449(p,ch,meta17450));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17449(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17470 = arguments.length;
switch (G__17470) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17503){
var state_val_17504 = (state_17503[(1)]);
if((state_val_17504 === (7))){
var inst_17495 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17508_19137 = state_17503__$1;
(statearr_17508_19137[(2)] = inst_17495);

(statearr_17508_19137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (1))){
var state_17503__$1 = state_17503;
var statearr_17509_19138 = state_17503__$1;
(statearr_17509_19138[(2)] = null);

(statearr_17509_19138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (4))){
var inst_17476 = (state_17503[(7)]);
var inst_17476__$1 = (state_17503[(2)]);
var inst_17479 = (inst_17476__$1 == null);
var state_17503__$1 = (function (){var statearr_17510 = state_17503;
(statearr_17510[(7)] = inst_17476__$1);

return statearr_17510;
})();
if(cljs.core.truth_(inst_17479)){
var statearr_17511_19144 = state_17503__$1;
(statearr_17511_19144[(1)] = (5));

} else {
var statearr_17512_19149 = state_17503__$1;
(statearr_17512_19149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (6))){
var inst_17476 = (state_17503[(7)]);
var inst_17484 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17476) : p.call(null,inst_17476));
var state_17503__$1 = state_17503;
if(cljs.core.truth_(inst_17484)){
var statearr_17513_19151 = state_17503__$1;
(statearr_17513_19151[(1)] = (8));

} else {
var statearr_17516_19152 = state_17503__$1;
(statearr_17516_19152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (3))){
var inst_17498 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17503__$1,inst_17498);
} else {
if((state_val_17504 === (2))){
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17503__$1,(4),ch);
} else {
if((state_val_17504 === (11))){
var inst_17489 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17521_19153 = state_17503__$1;
(statearr_17521_19153[(2)] = inst_17489);

(statearr_17521_19153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (9))){
var state_17503__$1 = state_17503;
var statearr_17531_19154 = state_17503__$1;
(statearr_17531_19154[(2)] = null);

(statearr_17531_19154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (5))){
var inst_17481 = cljs.core.async.close_BANG_(out);
var state_17503__$1 = state_17503;
var statearr_17546_19158 = state_17503__$1;
(statearr_17546_19158[(2)] = inst_17481);

(statearr_17546_19158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (10))){
var inst_17492 = (state_17503[(2)]);
var state_17503__$1 = (function (){var statearr_17547 = state_17503;
(statearr_17547[(8)] = inst_17492);

return statearr_17547;
})();
var statearr_17549_19159 = state_17503__$1;
(statearr_17549_19159[(2)] = null);

(statearr_17549_19159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (8))){
var inst_17476 = (state_17503[(7)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17503__$1,(11),out,inst_17476);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_17551 = [null,null,null,null,null,null,null,null,null];
(statearr_17551[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_17551[(1)] = (1));

return statearr_17551;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17503){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17503);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17555){var ex__14331__auto__ = e17555;
var statearr_17558_19171 = state_17503;
(statearr_17558_19171[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17503[(4)]))){
var statearr_17559_19176 = state_17503;
(statearr_17559_19176[(1)] = cljs.core.first((state_17503[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19183 = state_17503;
state_17503 = G__19183;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17563 = f__14662__auto__();
(statearr_17563[(6)] = c__14661__auto___19136);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17575 = arguments.length;
switch (G__17575) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17663){
var state_val_17667 = (state_17663[(1)]);
if((state_val_17667 === (7))){
var inst_17652 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17682_19195 = state_17663__$1;
(statearr_17682_19195[(2)] = inst_17652);

(statearr_17682_19195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (20))){
var inst_17620 = (state_17663[(7)]);
var inst_17633 = (state_17663[(2)]);
var inst_17634 = cljs.core.next(inst_17620);
var inst_17603 = inst_17634;
var inst_17604 = null;
var inst_17605 = (0);
var inst_17606 = (0);
var state_17663__$1 = (function (){var statearr_17686 = state_17663;
(statearr_17686[(8)] = inst_17633);

(statearr_17686[(9)] = inst_17603);

(statearr_17686[(10)] = inst_17604);

(statearr_17686[(11)] = inst_17605);

(statearr_17686[(12)] = inst_17606);

return statearr_17686;
})();
var statearr_17694_19204 = state_17663__$1;
(statearr_17694_19204[(2)] = null);

(statearr_17694_19204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (1))){
var state_17663__$1 = state_17663;
var statearr_17702_19206 = state_17663__$1;
(statearr_17702_19206[(2)] = null);

(statearr_17702_19206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (4))){
var inst_17592 = (state_17663[(13)]);
var inst_17592__$1 = (state_17663[(2)]);
var inst_17593 = (inst_17592__$1 == null);
var state_17663__$1 = (function (){var statearr_17709 = state_17663;
(statearr_17709[(13)] = inst_17592__$1);

return statearr_17709;
})();
if(cljs.core.truth_(inst_17593)){
var statearr_17710_19212 = state_17663__$1;
(statearr_17710_19212[(1)] = (5));

} else {
var statearr_17711_19213 = state_17663__$1;
(statearr_17711_19213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (15))){
var state_17663__$1 = state_17663;
var statearr_17715_19214 = state_17663__$1;
(statearr_17715_19214[(2)] = null);

(statearr_17715_19214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (21))){
var state_17663__$1 = state_17663;
var statearr_17717_19218 = state_17663__$1;
(statearr_17717_19218[(2)] = null);

(statearr_17717_19218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (13))){
var inst_17606 = (state_17663[(12)]);
var inst_17603 = (state_17663[(9)]);
var inst_17604 = (state_17663[(10)]);
var inst_17605 = (state_17663[(11)]);
var inst_17613 = (state_17663[(2)]);
var inst_17614 = (inst_17606 + (1));
var tmp17712 = inst_17605;
var tmp17713 = inst_17603;
var tmp17714 = inst_17604;
var inst_17603__$1 = tmp17713;
var inst_17604__$1 = tmp17714;
var inst_17605__$1 = tmp17712;
var inst_17606__$1 = inst_17614;
var state_17663__$1 = (function (){var statearr_17719 = state_17663;
(statearr_17719[(14)] = inst_17613);

(statearr_17719[(9)] = inst_17603__$1);

(statearr_17719[(10)] = inst_17604__$1);

(statearr_17719[(11)] = inst_17605__$1);

(statearr_17719[(12)] = inst_17606__$1);

return statearr_17719;
})();
var statearr_17720_19235 = state_17663__$1;
(statearr_17720_19235[(2)] = null);

(statearr_17720_19235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (22))){
var state_17663__$1 = state_17663;
var statearr_17721_19236 = state_17663__$1;
(statearr_17721_19236[(2)] = null);

(statearr_17721_19236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (6))){
var inst_17592 = (state_17663[(13)]);
var inst_17601 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17592) : f.call(null,inst_17592));
var inst_17602 = cljs.core.seq(inst_17601);
var inst_17603 = inst_17602;
var inst_17604 = null;
var inst_17605 = (0);
var inst_17606 = (0);
var state_17663__$1 = (function (){var statearr_17723 = state_17663;
(statearr_17723[(9)] = inst_17603);

(statearr_17723[(10)] = inst_17604);

(statearr_17723[(11)] = inst_17605);

(statearr_17723[(12)] = inst_17606);

return statearr_17723;
})();
var statearr_17724_19242 = state_17663__$1;
(statearr_17724_19242[(2)] = null);

(statearr_17724_19242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (17))){
var inst_17620 = (state_17663[(7)]);
var inst_17625 = cljs.core.chunk_first(inst_17620);
var inst_17626 = cljs.core.chunk_rest(inst_17620);
var inst_17627 = cljs.core.count(inst_17625);
var inst_17603 = inst_17626;
var inst_17604 = inst_17625;
var inst_17605 = inst_17627;
var inst_17606 = (0);
var state_17663__$1 = (function (){var statearr_17728 = state_17663;
(statearr_17728[(9)] = inst_17603);

(statearr_17728[(10)] = inst_17604);

(statearr_17728[(11)] = inst_17605);

(statearr_17728[(12)] = inst_17606);

return statearr_17728;
})();
var statearr_17730_19248 = state_17663__$1;
(statearr_17730_19248[(2)] = null);

(statearr_17730_19248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (3))){
var inst_17654 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17663__$1,inst_17654);
} else {
if((state_val_17667 === (12))){
var inst_17642 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17731_19249 = state_17663__$1;
(statearr_17731_19249[(2)] = inst_17642);

(statearr_17731_19249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (2))){
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17663__$1,(4),in$);
} else {
if((state_val_17667 === (23))){
var inst_17650 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17732_19252 = state_17663__$1;
(statearr_17732_19252[(2)] = inst_17650);

(statearr_17732_19252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (19))){
var inst_17637 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17734_19259 = state_17663__$1;
(statearr_17734_19259[(2)] = inst_17637);

(statearr_17734_19259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (11))){
var inst_17603 = (state_17663[(9)]);
var inst_17620 = (state_17663[(7)]);
var inst_17620__$1 = cljs.core.seq(inst_17603);
var state_17663__$1 = (function (){var statearr_17741 = state_17663;
(statearr_17741[(7)] = inst_17620__$1);

return statearr_17741;
})();
if(inst_17620__$1){
var statearr_17742_19272 = state_17663__$1;
(statearr_17742_19272[(1)] = (14));

} else {
var statearr_17743_19273 = state_17663__$1;
(statearr_17743_19273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (9))){
var inst_17644 = (state_17663[(2)]);
var inst_17645 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17663__$1 = (function (){var statearr_17744 = state_17663;
(statearr_17744[(15)] = inst_17644);

return statearr_17744;
})();
if(cljs.core.truth_(inst_17645)){
var statearr_17745_19280 = state_17663__$1;
(statearr_17745_19280[(1)] = (21));

} else {
var statearr_17746_19281 = state_17663__$1;
(statearr_17746_19281[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (5))){
var inst_17595 = cljs.core.async.close_BANG_(out);
var state_17663__$1 = state_17663;
var statearr_17749_19286 = state_17663__$1;
(statearr_17749_19286[(2)] = inst_17595);

(statearr_17749_19286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (14))){
var inst_17620 = (state_17663[(7)]);
var inst_17623 = cljs.core.chunked_seq_QMARK_(inst_17620);
var state_17663__$1 = state_17663;
if(inst_17623){
var statearr_17758_19287 = state_17663__$1;
(statearr_17758_19287[(1)] = (17));

} else {
var statearr_17762_19288 = state_17663__$1;
(statearr_17762_19288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (16))){
var inst_17640 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17763_19289 = state_17663__$1;
(statearr_17763_19289[(2)] = inst_17640);

(statearr_17763_19289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (10))){
var inst_17604 = (state_17663[(10)]);
var inst_17606 = (state_17663[(12)]);
var inst_17611 = cljs.core._nth(inst_17604,inst_17606);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17663__$1,(13),out,inst_17611);
} else {
if((state_val_17667 === (18))){
var inst_17620 = (state_17663[(7)]);
var inst_17631 = cljs.core.first(inst_17620);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17663__$1,(20),out,inst_17631);
} else {
if((state_val_17667 === (8))){
var inst_17606 = (state_17663[(12)]);
var inst_17605 = (state_17663[(11)]);
var inst_17608 = (inst_17606 < inst_17605);
var inst_17609 = inst_17608;
var state_17663__$1 = state_17663;
if(cljs.core.truth_(inst_17609)){
var statearr_17777_19302 = state_17663__$1;
(statearr_17777_19302[(1)] = (10));

} else {
var statearr_17781_19303 = state_17663__$1;
(statearr_17781_19303[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____0 = (function (){
var statearr_17784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__);

(statearr_17784[(1)] = (1));

return statearr_17784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____1 = (function (state_17663){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17663);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17788){var ex__14331__auto__ = e17788;
var statearr_17789_19314 = state_17663;
(statearr_17789_19314[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17663[(4)]))){
var statearr_17790_19315 = state_17663;
(statearr_17790_19315[(1)] = cljs.core.first((state_17663[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_17663;
state_17663 = G__19316;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__ = function(state_17663){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____1.call(this,state_17663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14328__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17795 = f__14662__auto__();
(statearr_17795[(6)] = c__14661__auto__);

return statearr_17795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));

return c__14661__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17799 = arguments.length;
switch (G__17799) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17814 = arguments.length;
switch (G__17814) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17828 = arguments.length;
switch (G__17828) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17871){
var state_val_17872 = (state_17871[(1)]);
if((state_val_17872 === (7))){
var inst_17865 = (state_17871[(2)]);
var state_17871__$1 = state_17871;
var statearr_17877_19353 = state_17871__$1;
(statearr_17877_19353[(2)] = inst_17865);

(statearr_17877_19353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (1))){
var inst_17841 = null;
var state_17871__$1 = (function (){var statearr_17878 = state_17871;
(statearr_17878[(7)] = inst_17841);

return statearr_17878;
})();
var statearr_17879_19373 = state_17871__$1;
(statearr_17879_19373[(2)] = null);

(statearr_17879_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (4))){
var inst_17845 = (state_17871[(8)]);
var inst_17845__$1 = (state_17871[(2)]);
var inst_17848 = (inst_17845__$1 == null);
var inst_17849 = cljs.core.not(inst_17848);
var state_17871__$1 = (function (){var statearr_17880 = state_17871;
(statearr_17880[(8)] = inst_17845__$1);

return statearr_17880;
})();
if(inst_17849){
var statearr_17890_19380 = state_17871__$1;
(statearr_17890_19380[(1)] = (5));

} else {
var statearr_17894_19381 = state_17871__$1;
(statearr_17894_19381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (6))){
var state_17871__$1 = state_17871;
var statearr_17900_19382 = state_17871__$1;
(statearr_17900_19382[(2)] = null);

(statearr_17900_19382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (3))){
var inst_17867 = (state_17871[(2)]);
var inst_17868 = cljs.core.async.close_BANG_(out);
var state_17871__$1 = (function (){var statearr_17905 = state_17871;
(statearr_17905[(9)] = inst_17867);

return statearr_17905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17871__$1,inst_17868);
} else {
if((state_val_17872 === (2))){
var state_17871__$1 = state_17871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17871__$1,(4),ch);
} else {
if((state_val_17872 === (11))){
var inst_17845 = (state_17871[(8)]);
var inst_17859 = (state_17871[(2)]);
var inst_17841 = inst_17845;
var state_17871__$1 = (function (){var statearr_17909 = state_17871;
(statearr_17909[(10)] = inst_17859);

(statearr_17909[(7)] = inst_17841);

return statearr_17909;
})();
var statearr_17913_19393 = state_17871__$1;
(statearr_17913_19393[(2)] = null);

(statearr_17913_19393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (9))){
var inst_17845 = (state_17871[(8)]);
var state_17871__$1 = state_17871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17871__$1,(11),out,inst_17845);
} else {
if((state_val_17872 === (5))){
var inst_17845 = (state_17871[(8)]);
var inst_17841 = (state_17871[(7)]);
var inst_17853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17845,inst_17841);
var state_17871__$1 = state_17871;
if(inst_17853){
var statearr_17915_19399 = state_17871__$1;
(statearr_17915_19399[(1)] = (8));

} else {
var statearr_17916_19401 = state_17871__$1;
(statearr_17916_19401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (10))){
var inst_17862 = (state_17871[(2)]);
var state_17871__$1 = state_17871;
var statearr_17917_19413 = state_17871__$1;
(statearr_17917_19413[(2)] = inst_17862);

(statearr_17917_19413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17872 === (8))){
var inst_17841 = (state_17871[(7)]);
var tmp17914 = inst_17841;
var inst_17841__$1 = tmp17914;
var state_17871__$1 = (function (){var statearr_17918 = state_17871;
(statearr_17918[(7)] = inst_17841__$1);

return statearr_17918;
})();
var statearr_17919_19418 = state_17871__$1;
(statearr_17919_19418[(2)] = null);

(statearr_17919_19418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_17923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17923[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_17923[(1)] = (1));

return statearr_17923;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17871){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17871);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e17924){var ex__14331__auto__ = e17924;
var statearr_17925_19426 = state_17871;
(statearr_17925_19426[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17871[(4)]))){
var statearr_17926_19430 = state_17871;
(statearr_17926_19430[(1)] = cljs.core.first((state_17871[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19438 = state_17871;
state_17871 = G__19438;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_17927 = f__14662__auto__();
(statearr_17927[(6)] = c__14661__auto___19340);

return statearr_17927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17929 = arguments.length;
switch (G__17929) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_17971){
var state_val_17972 = (state_17971[(1)]);
if((state_val_17972 === (7))){
var inst_17967 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
var statearr_17976_19465 = state_17971__$1;
(statearr_17976_19465[(2)] = inst_17967);

(statearr_17976_19465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (1))){
var inst_17933 = (new Array(n));
var inst_17934 = inst_17933;
var inst_17935 = (0);
var state_17971__$1 = (function (){var statearr_17979 = state_17971;
(statearr_17979[(7)] = inst_17934);

(statearr_17979[(8)] = inst_17935);

return statearr_17979;
})();
var statearr_17982_19469 = state_17971__$1;
(statearr_17982_19469[(2)] = null);

(statearr_17982_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (4))){
var inst_17938 = (state_17971[(9)]);
var inst_17938__$1 = (state_17971[(2)]);
var inst_17940 = (inst_17938__$1 == null);
var inst_17941 = cljs.core.not(inst_17940);
var state_17971__$1 = (function (){var statearr_17983 = state_17971;
(statearr_17983[(9)] = inst_17938__$1);

return statearr_17983;
})();
if(inst_17941){
var statearr_17986_19476 = state_17971__$1;
(statearr_17986_19476[(1)] = (5));

} else {
var statearr_17988_19480 = state_17971__$1;
(statearr_17988_19480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (15))){
var inst_17961 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
var statearr_17990_19481 = state_17971__$1;
(statearr_17990_19481[(2)] = inst_17961);

(statearr_17990_19481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (13))){
var state_17971__$1 = state_17971;
var statearr_17993_19483 = state_17971__$1;
(statearr_17993_19483[(2)] = null);

(statearr_17993_19483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (6))){
var inst_17935 = (state_17971[(8)]);
var inst_17957 = (inst_17935 > (0));
var state_17971__$1 = state_17971;
if(cljs.core.truth_(inst_17957)){
var statearr_18008_19484 = state_17971__$1;
(statearr_18008_19484[(1)] = (12));

} else {
var statearr_18009_19485 = state_17971__$1;
(statearr_18009_19485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (3))){
var inst_17969 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17971__$1,inst_17969);
} else {
if((state_val_17972 === (12))){
var inst_17934 = (state_17971[(7)]);
var inst_17959 = cljs.core.vec(inst_17934);
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17971__$1,(15),out,inst_17959);
} else {
if((state_val_17972 === (2))){
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17971__$1,(4),ch);
} else {
if((state_val_17972 === (11))){
var inst_17951 = (state_17971[(2)]);
var inst_17952 = (new Array(n));
var inst_17934 = inst_17952;
var inst_17935 = (0);
var state_17971__$1 = (function (){var statearr_18015 = state_17971;
(statearr_18015[(10)] = inst_17951);

(statearr_18015[(7)] = inst_17934);

(statearr_18015[(8)] = inst_17935);

return statearr_18015;
})();
var statearr_18016_19491 = state_17971__$1;
(statearr_18016_19491[(2)] = null);

(statearr_18016_19491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (9))){
var inst_17934 = (state_17971[(7)]);
var inst_17949 = cljs.core.vec(inst_17934);
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17971__$1,(11),out,inst_17949);
} else {
if((state_val_17972 === (5))){
var inst_17934 = (state_17971[(7)]);
var inst_17935 = (state_17971[(8)]);
var inst_17938 = (state_17971[(9)]);
var inst_17944 = (state_17971[(11)]);
var inst_17943 = (inst_17934[inst_17935] = inst_17938);
var inst_17944__$1 = (inst_17935 + (1));
var inst_17945 = (inst_17944__$1 < n);
var state_17971__$1 = (function (){var statearr_18022 = state_17971;
(statearr_18022[(12)] = inst_17943);

(statearr_18022[(11)] = inst_17944__$1);

return statearr_18022;
})();
if(cljs.core.truth_(inst_17945)){
var statearr_18025_19501 = state_17971__$1;
(statearr_18025_19501[(1)] = (8));

} else {
var statearr_18027_19502 = state_17971__$1;
(statearr_18027_19502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (14))){
var inst_17964 = (state_17971[(2)]);
var inst_17965 = cljs.core.async.close_BANG_(out);
var state_17971__$1 = (function (){var statearr_18036 = state_17971;
(statearr_18036[(13)] = inst_17964);

return statearr_18036;
})();
var statearr_18040_19503 = state_17971__$1;
(statearr_18040_19503[(2)] = inst_17965);

(statearr_18040_19503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (10))){
var inst_17955 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
var statearr_18049_19504 = state_17971__$1;
(statearr_18049_19504[(2)] = inst_17955);

(statearr_18049_19504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (8))){
var inst_17934 = (state_17971[(7)]);
var inst_17944 = (state_17971[(11)]);
var tmp18035 = inst_17934;
var inst_17934__$1 = tmp18035;
var inst_17935 = inst_17944;
var state_17971__$1 = (function (){var statearr_18053 = state_17971;
(statearr_18053[(7)] = inst_17934__$1);

(statearr_18053[(8)] = inst_17935);

return statearr_18053;
})();
var statearr_18063_19507 = state_17971__$1;
(statearr_18063_19507[(2)] = null);

(statearr_18063_19507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_18076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18076[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_18076[(1)] = (1));

return statearr_18076;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_17971){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_17971);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e18079){var ex__14331__auto__ = e18079;
var statearr_18080_19512 = state_17971;
(statearr_18080_19512[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_17971[(4)]))){
var statearr_18081_19513 = state_17971;
(statearr_18081_19513[(1)] = cljs.core.first((state_17971[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19514 = state_17971;
state_17971 = G__19514;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_17971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_17971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_18085 = f__14662__auto__();
(statearr_18085[(6)] = c__14661__auto___19460);

return statearr_18085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18094 = arguments.length;
switch (G__18094) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14661__auto___19522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14662__auto__ = (function (){var switch__14327__auto__ = (function (state_18140){
var state_val_18141 = (state_18140[(1)]);
if((state_val_18141 === (7))){
var inst_18136 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18144_19523 = state_18140__$1;
(statearr_18144_19523[(2)] = inst_18136);

(statearr_18144_19523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (1))){
var inst_18096 = [];
var inst_18097 = inst_18096;
var inst_18098 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18140__$1 = (function (){var statearr_18150 = state_18140;
(statearr_18150[(7)] = inst_18097);

(statearr_18150[(8)] = inst_18098);

return statearr_18150;
})();
var statearr_18151_19526 = state_18140__$1;
(statearr_18151_19526[(2)] = null);

(statearr_18151_19526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (4))){
var inst_18101 = (state_18140[(9)]);
var inst_18101__$1 = (state_18140[(2)]);
var inst_18102 = (inst_18101__$1 == null);
var inst_18103 = cljs.core.not(inst_18102);
var state_18140__$1 = (function (){var statearr_18152 = state_18140;
(statearr_18152[(9)] = inst_18101__$1);

return statearr_18152;
})();
if(inst_18103){
var statearr_18153_19527 = state_18140__$1;
(statearr_18153_19527[(1)] = (5));

} else {
var statearr_18154_19528 = state_18140__$1;
(statearr_18154_19528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (15))){
var inst_18097 = (state_18140[(7)]);
var inst_18128 = cljs.core.vec(inst_18097);
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18140__$1,(18),out,inst_18128);
} else {
if((state_val_18141 === (13))){
var inst_18123 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18156_19530 = state_18140__$1;
(statearr_18156_19530[(2)] = inst_18123);

(statearr_18156_19530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (6))){
var inst_18097 = (state_18140[(7)]);
var inst_18125 = inst_18097.length;
var inst_18126 = (inst_18125 > (0));
var state_18140__$1 = state_18140;
if(cljs.core.truth_(inst_18126)){
var statearr_18157_19531 = state_18140__$1;
(statearr_18157_19531[(1)] = (15));

} else {
var statearr_18167_19532 = state_18140__$1;
(statearr_18167_19532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (17))){
var inst_18133 = (state_18140[(2)]);
var inst_18134 = cljs.core.async.close_BANG_(out);
var state_18140__$1 = (function (){var statearr_18169 = state_18140;
(statearr_18169[(10)] = inst_18133);

return statearr_18169;
})();
var statearr_18170_19535 = state_18140__$1;
(statearr_18170_19535[(2)] = inst_18134);

(statearr_18170_19535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (3))){
var inst_18138 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18140__$1,inst_18138);
} else {
if((state_val_18141 === (12))){
var inst_18097 = (state_18140[(7)]);
var inst_18116 = cljs.core.vec(inst_18097);
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18140__$1,(14),out,inst_18116);
} else {
if((state_val_18141 === (2))){
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18140__$1,(4),ch);
} else {
if((state_val_18141 === (11))){
var inst_18097 = (state_18140[(7)]);
var inst_18101 = (state_18140[(9)]);
var inst_18105 = (state_18140[(11)]);
var inst_18113 = inst_18097.push(inst_18101);
var tmp18171 = inst_18097;
var inst_18097__$1 = tmp18171;
var inst_18098 = inst_18105;
var state_18140__$1 = (function (){var statearr_18172 = state_18140;
(statearr_18172[(12)] = inst_18113);

(statearr_18172[(7)] = inst_18097__$1);

(statearr_18172[(8)] = inst_18098);

return statearr_18172;
})();
var statearr_18173_19542 = state_18140__$1;
(statearr_18173_19542[(2)] = null);

(statearr_18173_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (9))){
var inst_18098 = (state_18140[(8)]);
var inst_18109 = cljs.core.keyword_identical_QMARK_(inst_18098,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18140__$1 = state_18140;
var statearr_18174_19544 = state_18140__$1;
(statearr_18174_19544[(2)] = inst_18109);

(statearr_18174_19544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (5))){
var inst_18101 = (state_18140[(9)]);
var inst_18105 = (state_18140[(11)]);
var inst_18098 = (state_18140[(8)]);
var inst_18106 = (state_18140[(13)]);
var inst_18105__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18101) : f.call(null,inst_18101));
var inst_18106__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18105__$1,inst_18098);
var state_18140__$1 = (function (){var statearr_18188 = state_18140;
(statearr_18188[(11)] = inst_18105__$1);

(statearr_18188[(13)] = inst_18106__$1);

return statearr_18188;
})();
if(inst_18106__$1){
var statearr_18189_19545 = state_18140__$1;
(statearr_18189_19545[(1)] = (8));

} else {
var statearr_18191_19546 = state_18140__$1;
(statearr_18191_19546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (14))){
var inst_18101 = (state_18140[(9)]);
var inst_18105 = (state_18140[(11)]);
var inst_18118 = (state_18140[(2)]);
var inst_18119 = [];
var inst_18120 = inst_18119.push(inst_18101);
var inst_18097 = inst_18119;
var inst_18098 = inst_18105;
var state_18140__$1 = (function (){var statearr_18199 = state_18140;
(statearr_18199[(14)] = inst_18118);

(statearr_18199[(15)] = inst_18120);

(statearr_18199[(7)] = inst_18097);

(statearr_18199[(8)] = inst_18098);

return statearr_18199;
})();
var statearr_18200_19547 = state_18140__$1;
(statearr_18200_19547[(2)] = null);

(statearr_18200_19547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (16))){
var state_18140__$1 = state_18140;
var statearr_18201_19548 = state_18140__$1;
(statearr_18201_19548[(2)] = null);

(statearr_18201_19548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (10))){
var inst_18111 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
if(cljs.core.truth_(inst_18111)){
var statearr_18204_19549 = state_18140__$1;
(statearr_18204_19549[(1)] = (11));

} else {
var statearr_18207_19550 = state_18140__$1;
(statearr_18207_19550[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (18))){
var inst_18130 = (state_18140[(2)]);
var state_18140__$1 = state_18140;
var statearr_18208_19551 = state_18140__$1;
(statearr_18208_19551[(2)] = inst_18130);

(statearr_18208_19551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18141 === (8))){
var inst_18106 = (state_18140[(13)]);
var state_18140__$1 = state_18140;
var statearr_18210_19552 = state_18140__$1;
(statearr_18210_19552[(2)] = inst_18106);

(statearr_18210_19552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14328__auto__ = null;
var cljs$core$async$state_machine__14328__auto____0 = (function (){
var statearr_18213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18213[(0)] = cljs$core$async$state_machine__14328__auto__);

(statearr_18213[(1)] = (1));

return statearr_18213;
});
var cljs$core$async$state_machine__14328__auto____1 = (function (state_18140){
while(true){
var ret_value__14329__auto__ = (function (){try{while(true){
var result__14330__auto__ = switch__14327__auto__(state_18140);
if(cljs.core.keyword_identical_QMARK_(result__14330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14330__auto__;
}
break;
}
}catch (e18216){var ex__14331__auto__ = e18216;
var statearr_18217_19562 = state_18140;
(statearr_18217_19562[(2)] = ex__14331__auto__);


if(cljs.core.seq((state_18140[(4)]))){
var statearr_18218_19563 = state_18140;
(statearr_18218_19563[(1)] = cljs.core.first((state_18140[(4)])));

} else {
throw ex__14331__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19564 = state_18140;
state_18140 = G__19564;
continue;
} else {
return ret_value__14329__auto__;
}
break;
}
});
cljs$core$async$state_machine__14328__auto__ = function(state_18140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14328__auto____1.call(this,state_18140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14328__auto____0;
cljs$core$async$state_machine__14328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14328__auto____1;
return cljs$core$async$state_machine__14328__auto__;
})()
})();
var state__14663__auto__ = (function (){var statearr_18227 = f__14662__auto__();
(statearr_18227[(6)] = c__14661__auto___19522);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14663__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
