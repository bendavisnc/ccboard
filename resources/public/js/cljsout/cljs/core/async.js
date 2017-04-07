// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9326 = [];
var len__7843__auto___9332 = arguments.length;
var i__7844__auto___9333 = (0);
while(true){
if((i__7844__auto___9333 < len__7843__auto___9332)){
args9326.push((arguments[i__7844__auto___9333]));

var G__9334 = (i__7844__auto___9333 + (1));
i__7844__auto___9333 = G__9334;
continue;
} else {
}
break;
}

var G__9328 = args9326.length;
switch (G__9328) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9326.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9329 = (function (f,blockable,meta9330){
this.f = f;
this.blockable = blockable;
this.meta9330 = meta9330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9331,meta9330__$1){
var self__ = this;
var _9331__$1 = this;
return (new cljs.core.async.t_cljs$core$async9329(self__.f,self__.blockable,meta9330__$1));
});

cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9331){
var self__ = this;
var _9331__$1 = this;
return self__.meta9330;
});

cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9330","meta9330",65162777,null)], null);
});

cljs.core.async.t_cljs$core$async9329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9329";

cljs.core.async.t_cljs$core$async9329.cljs$lang$ctorPrWriter = (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async9329");
});

cljs.core.async.__GT_t_cljs$core$async9329 = (function cljs$core$async$__GT_t_cljs$core$async9329(f__$1,blockable__$1,meta9330){
return (new cljs.core.async.t_cljs$core$async9329(f__$1,blockable__$1,meta9330));
});

}

return (new cljs.core.async.t_cljs$core$async9329(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args9338 = [];
var len__7843__auto___9341 = arguments.length;
var i__7844__auto___9342 = (0);
while(true){
if((i__7844__auto___9342 < len__7843__auto___9341)){
args9338.push((arguments[i__7844__auto___9342]));

var G__9343 = (i__7844__auto___9342 + (1));
i__7844__auto___9342 = G__9343;
continue;
} else {
}
break;
}

var G__9340 = args9338.length;
switch (G__9340) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9338.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9345 = [];
var len__7843__auto___9348 = arguments.length;
var i__7844__auto___9349 = (0);
while(true){
if((i__7844__auto___9349 < len__7843__auto___9348)){
args9345.push((arguments[i__7844__auto___9349]));

var G__9350 = (i__7844__auto___9349 + (1));
i__7844__auto___9349 = G__9350;
continue;
} else {
}
break;
}

var G__9347 = args9345.length;
switch (G__9347) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9345.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args9352 = [];
var len__7843__auto___9355 = arguments.length;
var i__7844__auto___9356 = (0);
while(true){
if((i__7844__auto___9356 < len__7843__auto___9355)){
args9352.push((arguments[i__7844__auto___9356]));

var G__9357 = (i__7844__auto___9356 + (1));
i__7844__auto___9356 = G__9357;
continue;
} else {
}
break;
}

var G__9354 = args9352.length;
switch (G__9354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9352.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9359 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9359);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9359,ret){
return (function (){
return fn1.call(null,val_9359);
});})(val_9359,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9360 = [];
var len__7843__auto___9363 = arguments.length;
var i__7844__auto___9364 = (0);
while(true){
if((i__7844__auto___9364 < len__7843__auto___9363)){
args9360.push((arguments[i__7844__auto___9364]));

var G__9365 = (i__7844__auto___9364 + (1));
i__7844__auto___9364 = G__9365;
continue;
} else {
}
break;
}

var G__9362 = args9360.length;
switch (G__9362) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9360.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7653__auto___9367 = n;
var x_9368 = (0);
while(true){
if((x_9368 < n__7653__auto___9367)){
(a[x_9368] = (0));

var G__9369 = (x_9368 + (1));
x_9368 = G__9369;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9370 = (i + (1));
i = G__9370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9374 = (function (flag,meta9375){
this.flag = flag;
this.meta9375 = meta9375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9376,meta9375__$1){
var self__ = this;
var _9376__$1 = this;
return (new cljs.core.async.t_cljs$core$async9374(self__.flag,meta9375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9376){
var self__ = this;
var _9376__$1 = this;
return self__.meta9375;
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9375","meta9375",728337607,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9374";

cljs.core.async.t_cljs$core$async9374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async9374");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9374(flag__$1,meta9375){
return (new cljs.core.async.t_cljs$core$async9374(flag__$1,meta9375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9374(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9380 = (function (flag,cb,meta9381){
this.flag = flag;
this.cb = cb;
this.meta9381 = meta9381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9382,meta9381__$1){
var self__ = this;
var _9382__$1 = this;
return (new cljs.core.async.t_cljs$core$async9380(self__.flag,self__.cb,meta9381__$1));
});

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9382){
var self__ = this;
var _9382__$1 = this;
return self__.meta9381;
});

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9381","meta9381",-1402300001,null)], null);
});

cljs.core.async.t_cljs$core$async9380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9380";

cljs.core.async.t_cljs$core$async9380.cljs$lang$ctorPrWriter = (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async9380");
});

cljs.core.async.__GT_t_cljs$core$async9380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9380(flag__$1,cb__$1,meta9381){
return (new cljs.core.async.t_cljs$core$async9380(flag__$1,cb__$1,meta9381));
});

}

return (new cljs.core.async.t_cljs$core$async9380(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9383_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9384_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9384_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6730__auto__ = wport;
if(cljs.core.truth_(or__6730__auto__)){
return or__6730__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9385 = (i + (1));
i = G__9385;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6730__auto__ = ret;
if(cljs.core.truth_(or__6730__auto__)){
return or__6730__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6718__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6718__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6718__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__7850__auto__ = [];
var len__7843__auto___9391 = arguments.length;
var i__7844__auto___9392 = (0);
while(true){
if((i__7844__auto___9392 < len__7843__auto___9391)){
args__7850__auto__.push((arguments[i__7844__auto___9392]));

var G__9393 = (i__7844__auto___9392 + (1));
i__7844__auto___9392 = G__9393;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9388){
var map__9389 = p__9388;
var map__9389__$1 = ((((!((map__9389 == null)))?((((map__9389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9389):map__9389);
var opts = map__9389__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9386){
var G__9387 = cljs.core.first.call(null,seq9386);
var seq9386__$1 = cljs.core.next.call(null,seq9386);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9387,seq9386__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args9394 = [];
var len__7843__auto___9444 = arguments.length;
var i__7844__auto___9445 = (0);
while(true){
if((i__7844__auto___9445 < len__7843__auto___9444)){
args9394.push((arguments[i__7844__auto___9445]));

var G__9446 = (i__7844__auto___9445 + (1));
i__7844__auto___9445 = G__9446;
continue;
} else {
}
break;
}

var G__9396 = args9394.length;
switch (G__9396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9394.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9281__auto___9448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___9448){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___9448){
return (function (state_9420){
var state_val_9421 = (state_9420[(1)]);
if((state_val_9421 === (7))){
var inst_9416 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
var statearr_9422_9449 = state_9420__$1;
(statearr_9422_9449[(2)] = inst_9416);

(statearr_9422_9449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (1))){
var state_9420__$1 = state_9420;
var statearr_9423_9450 = state_9420__$1;
(statearr_9423_9450[(2)] = null);

(statearr_9423_9450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (4))){
var inst_9399 = (state_9420[(7)]);
var inst_9399__$1 = (state_9420[(2)]);
var inst_9400 = (inst_9399__$1 == null);
var state_9420__$1 = (function (){var statearr_9424 = state_9420;
(statearr_9424[(7)] = inst_9399__$1);

return statearr_9424;
})();
if(cljs.core.truth_(inst_9400)){
var statearr_9425_9451 = state_9420__$1;
(statearr_9425_9451[(1)] = (5));

} else {
var statearr_9426_9452 = state_9420__$1;
(statearr_9426_9452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (13))){
var state_9420__$1 = state_9420;
var statearr_9427_9453 = state_9420__$1;
(statearr_9427_9453[(2)] = null);

(statearr_9427_9453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (6))){
var inst_9399 = (state_9420[(7)]);
var state_9420__$1 = state_9420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9420__$1,(11),to,inst_9399);
} else {
if((state_val_9421 === (3))){
var inst_9418 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9420__$1,inst_9418);
} else {
if((state_val_9421 === (12))){
var state_9420__$1 = state_9420;
var statearr_9428_9454 = state_9420__$1;
(statearr_9428_9454[(2)] = null);

(statearr_9428_9454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (2))){
var state_9420__$1 = state_9420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9420__$1,(4),from);
} else {
if((state_val_9421 === (11))){
var inst_9409 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
if(cljs.core.truth_(inst_9409)){
var statearr_9429_9455 = state_9420__$1;
(statearr_9429_9455[(1)] = (12));

} else {
var statearr_9430_9456 = state_9420__$1;
(statearr_9430_9456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (9))){
var state_9420__$1 = state_9420;
var statearr_9431_9457 = state_9420__$1;
(statearr_9431_9457[(2)] = null);

(statearr_9431_9457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (5))){
var state_9420__$1 = state_9420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9432_9458 = state_9420__$1;
(statearr_9432_9458[(1)] = (8));

} else {
var statearr_9433_9459 = state_9420__$1;
(statearr_9433_9459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (14))){
var inst_9414 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
var statearr_9434_9460 = state_9420__$1;
(statearr_9434_9460[(2)] = inst_9414);

(statearr_9434_9460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (10))){
var inst_9406 = (state_9420[(2)]);
var state_9420__$1 = state_9420;
var statearr_9435_9461 = state_9420__$1;
(statearr_9435_9461[(2)] = inst_9406);

(statearr_9435_9461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9421 === (8))){
var inst_9403 = cljs.core.async.close_BANG_.call(null,to);
var state_9420__$1 = state_9420;
var statearr_9436_9462 = state_9420__$1;
(statearr_9436_9462[(2)] = inst_9403);

(statearr_9436_9462[(1)] = (10));


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
});})(c__9281__auto___9448))
;
return ((function (switch__9169__auto__,c__9281__auto___9448){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_9440 = [null,null,null,null,null,null,null,null];
(statearr_9440[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_9440[(1)] = (1));

return statearr_9440;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_9420){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9441){if((e9441 instanceof Object)){
var ex__9173__auto__ = e9441;
var statearr_9442_9463 = state_9420;
(statearr_9442_9463[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9464 = state_9420;
state_9420 = G__9464;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_9420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_9420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___9448))
})();
var state__9283__auto__ = (function (){var statearr_9443 = f__9282__auto__.call(null);
(statearr_9443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9448);

return statearr_9443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___9448))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9652){
var vec__9653 = p__9652;
var v = cljs.core.nth.call(null,vec__9653,(0),null);
var p = cljs.core.nth.call(null,vec__9653,(1),null);
var job = vec__9653;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9281__auto___9839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results){
return (function (state_9660){
var state_val_9661 = (state_9660[(1)]);
if((state_val_9661 === (1))){
var state_9660__$1 = state_9660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9660__$1,(2),res,v);
} else {
if((state_val_9661 === (2))){
var inst_9657 = (state_9660[(2)]);
var inst_9658 = cljs.core.async.close_BANG_.call(null,res);
var state_9660__$1 = (function (){var statearr_9662 = state_9660;
(statearr_9662[(7)] = inst_9657);

return statearr_9662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9660__$1,inst_9658);
} else {
return null;
}
}
});})(c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results))
;
return ((function (switch__9169__auto__,c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_9666 = [null,null,null,null,null,null,null,null];
(statearr_9666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__);

(statearr_9666[(1)] = (1));

return statearr_9666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1 = (function (state_9660){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9667){if((e9667 instanceof Object)){
var ex__9173__auto__ = e9667;
var statearr_9668_9840 = state_9660;
(statearr_9668_9840[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9841 = state_9660;
state_9660 = G__9841;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = function(state_9660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1.call(this,state_9660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results))
})();
var state__9283__auto__ = (function (){var statearr_9669 = f__9282__auto__.call(null);
(statearr_9669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9839);

return statearr_9669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___9839,res,vec__9653,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9670){
var vec__9671 = p__9670;
var v = cljs.core.nth.call(null,vec__9671,(0),null);
var p = cljs.core.nth.call(null,vec__9671,(1),null);
var job = vec__9671;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7653__auto___9842 = n;
var __9843 = (0);
while(true){
if((__9843 < n__7653__auto___9842)){
var G__9674_9844 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9674_9844) {
case "compute":
var c__9281__auto___9846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9843,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (__9843,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function (state_9687){
var state_val_9688 = (state_9687[(1)]);
if((state_val_9688 === (1))){
var state_9687__$1 = state_9687;
var statearr_9689_9847 = state_9687__$1;
(statearr_9689_9847[(2)] = null);

(statearr_9689_9847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9688 === (2))){
var state_9687__$1 = state_9687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9687__$1,(4),jobs);
} else {
if((state_val_9688 === (3))){
var inst_9685 = (state_9687[(2)]);
var state_9687__$1 = state_9687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9687__$1,inst_9685);
} else {
if((state_val_9688 === (4))){
var inst_9677 = (state_9687[(2)]);
var inst_9678 = process.call(null,inst_9677);
var state_9687__$1 = state_9687;
if(cljs.core.truth_(inst_9678)){
var statearr_9690_9848 = state_9687__$1;
(statearr_9690_9848[(1)] = (5));

} else {
var statearr_9691_9849 = state_9687__$1;
(statearr_9691_9849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9688 === (5))){
var state_9687__$1 = state_9687;
var statearr_9692_9850 = state_9687__$1;
(statearr_9692_9850[(2)] = null);

(statearr_9692_9850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9688 === (6))){
var state_9687__$1 = state_9687;
var statearr_9693_9851 = state_9687__$1;
(statearr_9693_9851[(2)] = null);

(statearr_9693_9851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9688 === (7))){
var inst_9683 = (state_9687[(2)]);
var state_9687__$1 = state_9687;
var statearr_9694_9852 = state_9687__$1;
(statearr_9694_9852[(2)] = inst_9683);

(statearr_9694_9852[(1)] = (3));


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
});})(__9843,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
;
return ((function (__9843,switch__9169__auto__,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_9698 = [null,null,null,null,null,null,null];
(statearr_9698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__);

(statearr_9698[(1)] = (1));

return statearr_9698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1 = (function (state_9687){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9699){if((e9699 instanceof Object)){
var ex__9173__auto__ = e9699;
var statearr_9700_9853 = state_9687;
(statearr_9700_9853[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9854 = state_9687;
state_9687 = G__9854;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = function(state_9687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1.call(this,state_9687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__;
})()
;})(__9843,switch__9169__auto__,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
})();
var state__9283__auto__ = (function (){var statearr_9701 = f__9282__auto__.call(null);
(statearr_9701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9846);

return statearr_9701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(__9843,c__9281__auto___9846,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
);


break;
case "async":
var c__9281__auto___9855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9843,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (__9843,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function (state_9714){
var state_val_9715 = (state_9714[(1)]);
if((state_val_9715 === (1))){
var state_9714__$1 = state_9714;
var statearr_9716_9856 = state_9714__$1;
(statearr_9716_9856[(2)] = null);

(statearr_9716_9856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (2))){
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9714__$1,(4),jobs);
} else {
if((state_val_9715 === (3))){
var inst_9712 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9714__$1,inst_9712);
} else {
if((state_val_9715 === (4))){
var inst_9704 = (state_9714[(2)]);
var inst_9705 = async.call(null,inst_9704);
var state_9714__$1 = state_9714;
if(cljs.core.truth_(inst_9705)){
var statearr_9717_9857 = state_9714__$1;
(statearr_9717_9857[(1)] = (5));

} else {
var statearr_9718_9858 = state_9714__$1;
(statearr_9718_9858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (5))){
var state_9714__$1 = state_9714;
var statearr_9719_9859 = state_9714__$1;
(statearr_9719_9859[(2)] = null);

(statearr_9719_9859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (6))){
var state_9714__$1 = state_9714;
var statearr_9720_9860 = state_9714__$1;
(statearr_9720_9860[(2)] = null);

(statearr_9720_9860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (7))){
var inst_9710 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9721_9861 = state_9714__$1;
(statearr_9721_9861[(2)] = inst_9710);

(statearr_9721_9861[(1)] = (3));


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
});})(__9843,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
;
return ((function (__9843,switch__9169__auto__,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_9725 = [null,null,null,null,null,null,null];
(statearr_9725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__);

(statearr_9725[(1)] = (1));

return statearr_9725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1 = (function (state_9714){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9726){if((e9726 instanceof Object)){
var ex__9173__auto__ = e9726;
var statearr_9727_9862 = state_9714;
(statearr_9727_9862[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9863 = state_9714;
state_9714 = G__9863;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = function(state_9714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1.call(this,state_9714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__;
})()
;})(__9843,switch__9169__auto__,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
})();
var state__9283__auto__ = (function (){var statearr_9728 = f__9282__auto__.call(null);
(statearr_9728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9855);

return statearr_9728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(__9843,c__9281__auto___9855,G__9674_9844,n__7653__auto___9842,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__9864 = (__9843 + (1));
__9843 = G__9864;
continue;
} else {
}
break;
}

var c__9281__auto___9865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___9865,jobs,results,process,async){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___9865,jobs,results,process,async){
return (function (state_9750){
var state_val_9751 = (state_9750[(1)]);
if((state_val_9751 === (1))){
var state_9750__$1 = state_9750;
var statearr_9752_9866 = state_9750__$1;
(statearr_9752_9866[(2)] = null);

(statearr_9752_9866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9751 === (2))){
var state_9750__$1 = state_9750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9750__$1,(4),from);
} else {
if((state_val_9751 === (3))){
var inst_9748 = (state_9750[(2)]);
var state_9750__$1 = state_9750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9750__$1,inst_9748);
} else {
if((state_val_9751 === (4))){
var inst_9731 = (state_9750[(7)]);
var inst_9731__$1 = (state_9750[(2)]);
var inst_9732 = (inst_9731__$1 == null);
var state_9750__$1 = (function (){var statearr_9753 = state_9750;
(statearr_9753[(7)] = inst_9731__$1);

return statearr_9753;
})();
if(cljs.core.truth_(inst_9732)){
var statearr_9754_9867 = state_9750__$1;
(statearr_9754_9867[(1)] = (5));

} else {
var statearr_9755_9868 = state_9750__$1;
(statearr_9755_9868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9751 === (5))){
var inst_9734 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9750__$1 = state_9750;
var statearr_9756_9869 = state_9750__$1;
(statearr_9756_9869[(2)] = inst_9734);

(statearr_9756_9869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9751 === (6))){
var inst_9731 = (state_9750[(7)]);
var inst_9736 = (state_9750[(8)]);
var inst_9736__$1 = cljs.core.async.chan.call(null,(1));
var inst_9737 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9738 = [inst_9731,inst_9736__$1];
var inst_9739 = (new cljs.core.PersistentVector(null,2,(5),inst_9737,inst_9738,null));
var state_9750__$1 = (function (){var statearr_9757 = state_9750;
(statearr_9757[(8)] = inst_9736__$1);

return statearr_9757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9750__$1,(8),jobs,inst_9739);
} else {
if((state_val_9751 === (7))){
var inst_9746 = (state_9750[(2)]);
var state_9750__$1 = state_9750;
var statearr_9758_9870 = state_9750__$1;
(statearr_9758_9870[(2)] = inst_9746);

(statearr_9758_9870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9751 === (8))){
var inst_9736 = (state_9750[(8)]);
var inst_9741 = (state_9750[(2)]);
var state_9750__$1 = (function (){var statearr_9759 = state_9750;
(statearr_9759[(9)] = inst_9741);

return statearr_9759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9750__$1,(9),results,inst_9736);
} else {
if((state_val_9751 === (9))){
var inst_9743 = (state_9750[(2)]);
var state_9750__$1 = (function (){var statearr_9760 = state_9750;
(statearr_9760[(10)] = inst_9743);

return statearr_9760;
})();
var statearr_9761_9871 = state_9750__$1;
(statearr_9761_9871[(2)] = null);

(statearr_9761_9871[(1)] = (2));


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
});})(c__9281__auto___9865,jobs,results,process,async))
;
return ((function (switch__9169__auto__,c__9281__auto___9865,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_9765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__);

(statearr_9765[(1)] = (1));

return statearr_9765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1 = (function (state_9750){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9766){if((e9766 instanceof Object)){
var ex__9173__auto__ = e9766;
var statearr_9767_9872 = state_9750;
(statearr_9767_9872[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9873 = state_9750;
state_9750 = G__9873;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = function(state_9750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1.call(this,state_9750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___9865,jobs,results,process,async))
})();
var state__9283__auto__ = (function (){var statearr_9768 = f__9282__auto__.call(null);
(statearr_9768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9865);

return statearr_9768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___9865,jobs,results,process,async))
);


var c__9281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto__,jobs,results,process,async){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto__,jobs,results,process,async){
return (function (state_9806){
var state_val_9807 = (state_9806[(1)]);
if((state_val_9807 === (7))){
var inst_9802 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9808_9874 = state_9806__$1;
(statearr_9808_9874[(2)] = inst_9802);

(statearr_9808_9874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (20))){
var state_9806__$1 = state_9806;
var statearr_9809_9875 = state_9806__$1;
(statearr_9809_9875[(2)] = null);

(statearr_9809_9875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (1))){
var state_9806__$1 = state_9806;
var statearr_9810_9876 = state_9806__$1;
(statearr_9810_9876[(2)] = null);

(statearr_9810_9876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (4))){
var inst_9771 = (state_9806[(7)]);
var inst_9771__$1 = (state_9806[(2)]);
var inst_9772 = (inst_9771__$1 == null);
var state_9806__$1 = (function (){var statearr_9811 = state_9806;
(statearr_9811[(7)] = inst_9771__$1);

return statearr_9811;
})();
if(cljs.core.truth_(inst_9772)){
var statearr_9812_9877 = state_9806__$1;
(statearr_9812_9877[(1)] = (5));

} else {
var statearr_9813_9878 = state_9806__$1;
(statearr_9813_9878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (15))){
var inst_9784 = (state_9806[(8)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9806__$1,(18),to,inst_9784);
} else {
if((state_val_9807 === (21))){
var inst_9797 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9814_9879 = state_9806__$1;
(statearr_9814_9879[(2)] = inst_9797);

(statearr_9814_9879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (13))){
var inst_9799 = (state_9806[(2)]);
var state_9806__$1 = (function (){var statearr_9815 = state_9806;
(statearr_9815[(9)] = inst_9799);

return statearr_9815;
})();
var statearr_9816_9880 = state_9806__$1;
(statearr_9816_9880[(2)] = null);

(statearr_9816_9880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (6))){
var inst_9771 = (state_9806[(7)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9806__$1,(11),inst_9771);
} else {
if((state_val_9807 === (17))){
var inst_9792 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
if(cljs.core.truth_(inst_9792)){
var statearr_9817_9881 = state_9806__$1;
(statearr_9817_9881[(1)] = (19));

} else {
var statearr_9818_9882 = state_9806__$1;
(statearr_9818_9882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (3))){
var inst_9804 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9806__$1,inst_9804);
} else {
if((state_val_9807 === (12))){
var inst_9781 = (state_9806[(10)]);
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9806__$1,(14),inst_9781);
} else {
if((state_val_9807 === (2))){
var state_9806__$1 = state_9806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9806__$1,(4),results);
} else {
if((state_val_9807 === (19))){
var state_9806__$1 = state_9806;
var statearr_9819_9883 = state_9806__$1;
(statearr_9819_9883[(2)] = null);

(statearr_9819_9883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (11))){
var inst_9781 = (state_9806[(2)]);
var state_9806__$1 = (function (){var statearr_9820 = state_9806;
(statearr_9820[(10)] = inst_9781);

return statearr_9820;
})();
var statearr_9821_9884 = state_9806__$1;
(statearr_9821_9884[(2)] = null);

(statearr_9821_9884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (9))){
var state_9806__$1 = state_9806;
var statearr_9822_9885 = state_9806__$1;
(statearr_9822_9885[(2)] = null);

(statearr_9822_9885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (5))){
var state_9806__$1 = state_9806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9823_9886 = state_9806__$1;
(statearr_9823_9886[(1)] = (8));

} else {
var statearr_9824_9887 = state_9806__$1;
(statearr_9824_9887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (14))){
var inst_9784 = (state_9806[(8)]);
var inst_9786 = (state_9806[(11)]);
var inst_9784__$1 = (state_9806[(2)]);
var inst_9785 = (inst_9784__$1 == null);
var inst_9786__$1 = cljs.core.not.call(null,inst_9785);
var state_9806__$1 = (function (){var statearr_9825 = state_9806;
(statearr_9825[(8)] = inst_9784__$1);

(statearr_9825[(11)] = inst_9786__$1);

return statearr_9825;
})();
if(inst_9786__$1){
var statearr_9826_9888 = state_9806__$1;
(statearr_9826_9888[(1)] = (15));

} else {
var statearr_9827_9889 = state_9806__$1;
(statearr_9827_9889[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (16))){
var inst_9786 = (state_9806[(11)]);
var state_9806__$1 = state_9806;
var statearr_9828_9890 = state_9806__$1;
(statearr_9828_9890[(2)] = inst_9786);

(statearr_9828_9890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (10))){
var inst_9778 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9829_9891 = state_9806__$1;
(statearr_9829_9891[(2)] = inst_9778);

(statearr_9829_9891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (18))){
var inst_9789 = (state_9806[(2)]);
var state_9806__$1 = state_9806;
var statearr_9830_9892 = state_9806__$1;
(statearr_9830_9892[(2)] = inst_9789);

(statearr_9830_9892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9807 === (8))){
var inst_9775 = cljs.core.async.close_BANG_.call(null,to);
var state_9806__$1 = state_9806;
var statearr_9831_9893 = state_9806__$1;
(statearr_9831_9893[(2)] = inst_9775);

(statearr_9831_9893[(1)] = (10));


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
});})(c__9281__auto__,jobs,results,process,async))
;
return ((function (switch__9169__auto__,c__9281__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_9835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__);

(statearr_9835[(1)] = (1));

return statearr_9835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1 = (function (state_9806){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9836){if((e9836 instanceof Object)){
var ex__9173__auto__ = e9836;
var statearr_9837_9894 = state_9806;
(statearr_9837_9894[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9895 = state_9806;
state_9806 = G__9895;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__ = function(state_9806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1.call(this,state_9806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto__,jobs,results,process,async))
})();
var state__9283__auto__ = (function (){var statearr_9838 = f__9282__auto__.call(null);
(statearr_9838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto__);

return statearr_9838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto__,jobs,results,process,async))
);

return c__9281__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9896 = [];
var len__7843__auto___9899 = arguments.length;
var i__7844__auto___9900 = (0);
while(true){
if((i__7844__auto___9900 < len__7843__auto___9899)){
args9896.push((arguments[i__7844__auto___9900]));

var G__9901 = (i__7844__auto___9900 + (1));
i__7844__auto___9900 = G__9901;
continue;
} else {
}
break;
}

var G__9898 = args9896.length;
switch (G__9898) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9896.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args9903 = [];
var len__7843__auto___9906 = arguments.length;
var i__7844__auto___9907 = (0);
while(true){
if((i__7844__auto___9907 < len__7843__auto___9906)){
args9903.push((arguments[i__7844__auto___9907]));

var G__9908 = (i__7844__auto___9907 + (1));
i__7844__auto___9907 = G__9908;
continue;
} else {
}
break;
}

var G__9905 = args9903.length;
switch (G__9905) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9903.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args9910 = [];
var len__7843__auto___9963 = arguments.length;
var i__7844__auto___9964 = (0);
while(true){
if((i__7844__auto___9964 < len__7843__auto___9963)){
args9910.push((arguments[i__7844__auto___9964]));

var G__9965 = (i__7844__auto___9964 + (1));
i__7844__auto___9964 = G__9965;
continue;
} else {
}
break;
}

var G__9912 = args9910.length;
switch (G__9912) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9910.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9281__auto___9967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___9967,tc,fc){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___9967,tc,fc){
return (function (state_9938){
var state_val_9939 = (state_9938[(1)]);
if((state_val_9939 === (7))){
var inst_9934 = (state_9938[(2)]);
var state_9938__$1 = state_9938;
var statearr_9940_9968 = state_9938__$1;
(statearr_9940_9968[(2)] = inst_9934);

(statearr_9940_9968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (1))){
var state_9938__$1 = state_9938;
var statearr_9941_9969 = state_9938__$1;
(statearr_9941_9969[(2)] = null);

(statearr_9941_9969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (4))){
var inst_9915 = (state_9938[(7)]);
var inst_9915__$1 = (state_9938[(2)]);
var inst_9916 = (inst_9915__$1 == null);
var state_9938__$1 = (function (){var statearr_9942 = state_9938;
(statearr_9942[(7)] = inst_9915__$1);

return statearr_9942;
})();
if(cljs.core.truth_(inst_9916)){
var statearr_9943_9970 = state_9938__$1;
(statearr_9943_9970[(1)] = (5));

} else {
var statearr_9944_9971 = state_9938__$1;
(statearr_9944_9971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (13))){
var state_9938__$1 = state_9938;
var statearr_9945_9972 = state_9938__$1;
(statearr_9945_9972[(2)] = null);

(statearr_9945_9972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (6))){
var inst_9915 = (state_9938[(7)]);
var inst_9921 = p.call(null,inst_9915);
var state_9938__$1 = state_9938;
if(cljs.core.truth_(inst_9921)){
var statearr_9946_9973 = state_9938__$1;
(statearr_9946_9973[(1)] = (9));

} else {
var statearr_9947_9974 = state_9938__$1;
(statearr_9947_9974[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (3))){
var inst_9936 = (state_9938[(2)]);
var state_9938__$1 = state_9938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9938__$1,inst_9936);
} else {
if((state_val_9939 === (12))){
var state_9938__$1 = state_9938;
var statearr_9948_9975 = state_9938__$1;
(statearr_9948_9975[(2)] = null);

(statearr_9948_9975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (2))){
var state_9938__$1 = state_9938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9938__$1,(4),ch);
} else {
if((state_val_9939 === (11))){
var inst_9915 = (state_9938[(7)]);
var inst_9925 = (state_9938[(2)]);
var state_9938__$1 = state_9938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9938__$1,(8),inst_9925,inst_9915);
} else {
if((state_val_9939 === (9))){
var state_9938__$1 = state_9938;
var statearr_9949_9976 = state_9938__$1;
(statearr_9949_9976[(2)] = tc);

(statearr_9949_9976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (5))){
var inst_9918 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9919 = cljs.core.async.close_BANG_.call(null,fc);
var state_9938__$1 = (function (){var statearr_9950 = state_9938;
(statearr_9950[(8)] = inst_9918);

return statearr_9950;
})();
var statearr_9951_9977 = state_9938__$1;
(statearr_9951_9977[(2)] = inst_9919);

(statearr_9951_9977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (14))){
var inst_9932 = (state_9938[(2)]);
var state_9938__$1 = state_9938;
var statearr_9952_9978 = state_9938__$1;
(statearr_9952_9978[(2)] = inst_9932);

(statearr_9952_9978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (10))){
var state_9938__$1 = state_9938;
var statearr_9953_9979 = state_9938__$1;
(statearr_9953_9979[(2)] = fc);

(statearr_9953_9979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9939 === (8))){
var inst_9927 = (state_9938[(2)]);
var state_9938__$1 = state_9938;
if(cljs.core.truth_(inst_9927)){
var statearr_9954_9980 = state_9938__$1;
(statearr_9954_9980[(1)] = (12));

} else {
var statearr_9955_9981 = state_9938__$1;
(statearr_9955_9981[(1)] = (13));

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
});})(c__9281__auto___9967,tc,fc))
;
return ((function (switch__9169__auto__,c__9281__auto___9967,tc,fc){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_9959 = [null,null,null,null,null,null,null,null,null];
(statearr_9959[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_9959[(1)] = (1));

return statearr_9959;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_9938){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_9938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e9960){if((e9960 instanceof Object)){
var ex__9173__auto__ = e9960;
var statearr_9961_9982 = state_9938;
(statearr_9961_9982[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9983 = state_9938;
state_9938 = G__9983;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_9938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_9938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___9967,tc,fc))
})();
var state__9283__auto__ = (function (){var statearr_9962 = f__9282__auto__.call(null);
(statearr_9962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___9967);

return statearr_9962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___9967,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto__){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto__){
return (function (state_10047){
var state_val_10048 = (state_10047[(1)]);
if((state_val_10048 === (7))){
var inst_10043 = (state_10047[(2)]);
var state_10047__$1 = state_10047;
var statearr_10049_10070 = state_10047__$1;
(statearr_10049_10070[(2)] = inst_10043);

(statearr_10049_10070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (1))){
var inst_10027 = init;
var state_10047__$1 = (function (){var statearr_10050 = state_10047;
(statearr_10050[(7)] = inst_10027);

return statearr_10050;
})();
var statearr_10051_10071 = state_10047__$1;
(statearr_10051_10071[(2)] = null);

(statearr_10051_10071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (4))){
var inst_10030 = (state_10047[(8)]);
var inst_10030__$1 = (state_10047[(2)]);
var inst_10031 = (inst_10030__$1 == null);
var state_10047__$1 = (function (){var statearr_10052 = state_10047;
(statearr_10052[(8)] = inst_10030__$1);

return statearr_10052;
})();
if(cljs.core.truth_(inst_10031)){
var statearr_10053_10072 = state_10047__$1;
(statearr_10053_10072[(1)] = (5));

} else {
var statearr_10054_10073 = state_10047__$1;
(statearr_10054_10073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (6))){
var inst_10027 = (state_10047[(7)]);
var inst_10030 = (state_10047[(8)]);
var inst_10034 = (state_10047[(9)]);
var inst_10034__$1 = f.call(null,inst_10027,inst_10030);
var inst_10035 = cljs.core.reduced_QMARK_.call(null,inst_10034__$1);
var state_10047__$1 = (function (){var statearr_10055 = state_10047;
(statearr_10055[(9)] = inst_10034__$1);

return statearr_10055;
})();
if(inst_10035){
var statearr_10056_10074 = state_10047__$1;
(statearr_10056_10074[(1)] = (8));

} else {
var statearr_10057_10075 = state_10047__$1;
(statearr_10057_10075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (3))){
var inst_10045 = (state_10047[(2)]);
var state_10047__$1 = state_10047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10047__$1,inst_10045);
} else {
if((state_val_10048 === (2))){
var state_10047__$1 = state_10047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10047__$1,(4),ch);
} else {
if((state_val_10048 === (9))){
var inst_10034 = (state_10047[(9)]);
var inst_10027 = inst_10034;
var state_10047__$1 = (function (){var statearr_10058 = state_10047;
(statearr_10058[(7)] = inst_10027);

return statearr_10058;
})();
var statearr_10059_10076 = state_10047__$1;
(statearr_10059_10076[(2)] = null);

(statearr_10059_10076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (5))){
var inst_10027 = (state_10047[(7)]);
var state_10047__$1 = state_10047;
var statearr_10060_10077 = state_10047__$1;
(statearr_10060_10077[(2)] = inst_10027);

(statearr_10060_10077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (10))){
var inst_10041 = (state_10047[(2)]);
var state_10047__$1 = state_10047;
var statearr_10061_10078 = state_10047__$1;
(statearr_10061_10078[(2)] = inst_10041);

(statearr_10061_10078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10048 === (8))){
var inst_10034 = (state_10047[(9)]);
var inst_10037 = cljs.core.deref.call(null,inst_10034);
var state_10047__$1 = state_10047;
var statearr_10062_10079 = state_10047__$1;
(statearr_10062_10079[(2)] = inst_10037);

(statearr_10062_10079[(1)] = (10));


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
});})(c__9281__auto__))
;
return ((function (switch__9169__auto__,c__9281__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9170__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9170__auto____0 = (function (){
var statearr_10066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10066[(0)] = cljs$core$async$reduce_$_state_machine__9170__auto__);

(statearr_10066[(1)] = (1));

return statearr_10066;
});
var cljs$core$async$reduce_$_state_machine__9170__auto____1 = (function (state_10047){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_10047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e10067){if((e10067 instanceof Object)){
var ex__9173__auto__ = e10067;
var statearr_10068_10080 = state_10047;
(statearr_10068_10080[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10081 = state_10047;
state_10047 = G__10081;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9170__auto__ = function(state_10047){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9170__auto____1.call(this,state_10047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9170__auto____0;
cljs$core$async$reduce_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9170__auto____1;
return cljs$core$async$reduce_$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto__))
})();
var state__9283__auto__ = (function (){var statearr_10069 = f__9282__auto__.call(null);
(statearr_10069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto__);

return statearr_10069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto__))
);

return c__9281__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto__,f__$1){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto__,f__$1){
return (function (state_10101){
var state_val_10102 = (state_10101[(1)]);
if((state_val_10102 === (1))){
var inst_10096 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10101__$1 = state_10101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10101__$1,(2),inst_10096);
} else {
if((state_val_10102 === (2))){
var inst_10098 = (state_10101[(2)]);
var inst_10099 = f__$1.call(null,inst_10098);
var state_10101__$1 = state_10101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10101__$1,inst_10099);
} else {
return null;
}
}
});})(c__9281__auto__,f__$1))
;
return ((function (switch__9169__auto__,c__9281__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9170__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9170__auto____0 = (function (){
var statearr_10106 = [null,null,null,null,null,null,null];
(statearr_10106[(0)] = cljs$core$async$transduce_$_state_machine__9170__auto__);

(statearr_10106[(1)] = (1));

return statearr_10106;
});
var cljs$core$async$transduce_$_state_machine__9170__auto____1 = (function (state_10101){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_10101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e10107){if((e10107 instanceof Object)){
var ex__9173__auto__ = e10107;
var statearr_10108_10110 = state_10101;
(statearr_10108_10110[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10111 = state_10101;
state_10101 = G__10111;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9170__auto__ = function(state_10101){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9170__auto____1.call(this,state_10101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9170__auto____0;
cljs$core$async$transduce_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9170__auto____1;
return cljs$core$async$transduce_$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto__,f__$1))
})();
var state__9283__auto__ = (function (){var statearr_10109 = f__9282__auto__.call(null);
(statearr_10109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto__);

return statearr_10109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto__,f__$1))
);

return c__9281__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10112 = [];
var len__7843__auto___10164 = arguments.length;
var i__7844__auto___10165 = (0);
while(true){
if((i__7844__auto___10165 < len__7843__auto___10164)){
args10112.push((arguments[i__7844__auto___10165]));

var G__10166 = (i__7844__auto___10165 + (1));
i__7844__auto___10165 = G__10166;
continue;
} else {
}
break;
}

var G__10114 = args10112.length;
switch (G__10114) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10112.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto__){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto__){
return (function (state_10139){
var state_val_10140 = (state_10139[(1)]);
if((state_val_10140 === (7))){
var inst_10121 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10141_10168 = state_10139__$1;
(statearr_10141_10168[(2)] = inst_10121);

(statearr_10141_10168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (1))){
var inst_10115 = cljs.core.seq.call(null,coll);
var inst_10116 = inst_10115;
var state_10139__$1 = (function (){var statearr_10142 = state_10139;
(statearr_10142[(7)] = inst_10116);

return statearr_10142;
})();
var statearr_10143_10169 = state_10139__$1;
(statearr_10143_10169[(2)] = null);

(statearr_10143_10169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (4))){
var inst_10116 = (state_10139[(7)]);
var inst_10119 = cljs.core.first.call(null,inst_10116);
var state_10139__$1 = state_10139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10139__$1,(7),ch,inst_10119);
} else {
if((state_val_10140 === (13))){
var inst_10133 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10144_10170 = state_10139__$1;
(statearr_10144_10170[(2)] = inst_10133);

(statearr_10144_10170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (6))){
var inst_10124 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10124)){
var statearr_10145_10171 = state_10139__$1;
(statearr_10145_10171[(1)] = (8));

} else {
var statearr_10146_10172 = state_10139__$1;
(statearr_10146_10172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (3))){
var inst_10137 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10139__$1,inst_10137);
} else {
if((state_val_10140 === (12))){
var state_10139__$1 = state_10139;
var statearr_10147_10173 = state_10139__$1;
(statearr_10147_10173[(2)] = null);

(statearr_10147_10173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (2))){
var inst_10116 = (state_10139[(7)]);
var state_10139__$1 = state_10139;
if(cljs.core.truth_(inst_10116)){
var statearr_10148_10174 = state_10139__$1;
(statearr_10148_10174[(1)] = (4));

} else {
var statearr_10149_10175 = state_10139__$1;
(statearr_10149_10175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (11))){
var inst_10130 = cljs.core.async.close_BANG_.call(null,ch);
var state_10139__$1 = state_10139;
var statearr_10150_10176 = state_10139__$1;
(statearr_10150_10176[(2)] = inst_10130);

(statearr_10150_10176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (9))){
var state_10139__$1 = state_10139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10151_10177 = state_10139__$1;
(statearr_10151_10177[(1)] = (11));

} else {
var statearr_10152_10178 = state_10139__$1;
(statearr_10152_10178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (5))){
var inst_10116 = (state_10139[(7)]);
var state_10139__$1 = state_10139;
var statearr_10153_10179 = state_10139__$1;
(statearr_10153_10179[(2)] = inst_10116);

(statearr_10153_10179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (10))){
var inst_10135 = (state_10139[(2)]);
var state_10139__$1 = state_10139;
var statearr_10154_10180 = state_10139__$1;
(statearr_10154_10180[(2)] = inst_10135);

(statearr_10154_10180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10140 === (8))){
var inst_10116 = (state_10139[(7)]);
var inst_10126 = cljs.core.next.call(null,inst_10116);
var inst_10116__$1 = inst_10126;
var state_10139__$1 = (function (){var statearr_10155 = state_10139;
(statearr_10155[(7)] = inst_10116__$1);

return statearr_10155;
})();
var statearr_10156_10181 = state_10139__$1;
(statearr_10156_10181[(2)] = null);

(statearr_10156_10181[(1)] = (2));


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
});})(c__9281__auto__))
;
return ((function (switch__9169__auto__,c__9281__auto__){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_10160 = [null,null,null,null,null,null,null,null];
(statearr_10160[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_10160[(1)] = (1));

return statearr_10160;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_10139){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_10139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e10161){if((e10161 instanceof Object)){
var ex__9173__auto__ = e10161;
var statearr_10162_10182 = state_10139;
(statearr_10162_10182[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10183 = state_10139;
state_10139 = G__10183;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_10139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_10139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto__))
})();
var state__9283__auto__ = (function (){var statearr_10163 = f__9282__auto__.call(null);
(statearr_10163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto__);

return statearr_10163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto__))
);

return c__9281__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7398__auto__ = (((_ == null))?null:_);
var m__7399__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,_);
} else {
var m__7399__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7399__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,ch);
} else {
var m__7399__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m);
} else {
var m__7399__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10409 = (function (ch,cs,meta10410){
this.ch = ch;
this.cs = cs;
this.meta10410 = meta10410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10411,meta10410__$1){
var self__ = this;
var _10411__$1 = this;
return (new cljs.core.async.t_cljs$core$async10409(self__.ch,self__.cs,meta10410__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10411){
var self__ = this;
var _10411__$1 = this;
return self__.meta10410;
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10410","meta10410",-1360250597,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10409";

cljs.core.async.t_cljs$core$async10409.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async10409");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10409 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10409(ch__$1,cs__$1,meta10410){
return (new cljs.core.async.t_cljs$core$async10409(ch__$1,cs__$1,meta10410));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10409(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9281__auto___10634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___10634,cs,m,dchan,dctr,done){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___10634,cs,m,dchan,dctr,done){
return (function (state_10546){
var state_val_10547 = (state_10546[(1)]);
if((state_val_10547 === (7))){
var inst_10542 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10548_10635 = state_10546__$1;
(statearr_10548_10635[(2)] = inst_10542);

(statearr_10548_10635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (20))){
var inst_10445 = (state_10546[(7)]);
var inst_10457 = cljs.core.first.call(null,inst_10445);
var inst_10458 = cljs.core.nth.call(null,inst_10457,(0),null);
var inst_10459 = cljs.core.nth.call(null,inst_10457,(1),null);
var state_10546__$1 = (function (){var statearr_10549 = state_10546;
(statearr_10549[(8)] = inst_10458);

return statearr_10549;
})();
if(cljs.core.truth_(inst_10459)){
var statearr_10550_10636 = state_10546__$1;
(statearr_10550_10636[(1)] = (22));

} else {
var statearr_10551_10637 = state_10546__$1;
(statearr_10551_10637[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (27))){
var inst_10494 = (state_10546[(9)]);
var inst_10489 = (state_10546[(10)]);
var inst_10487 = (state_10546[(11)]);
var inst_10414 = (state_10546[(12)]);
var inst_10494__$1 = cljs.core._nth.call(null,inst_10487,inst_10489);
var inst_10495 = cljs.core.async.put_BANG_.call(null,inst_10494__$1,inst_10414,done);
var state_10546__$1 = (function (){var statearr_10552 = state_10546;
(statearr_10552[(9)] = inst_10494__$1);

return statearr_10552;
})();
if(cljs.core.truth_(inst_10495)){
var statearr_10553_10638 = state_10546__$1;
(statearr_10553_10638[(1)] = (30));

} else {
var statearr_10554_10639 = state_10546__$1;
(statearr_10554_10639[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (1))){
var state_10546__$1 = state_10546;
var statearr_10555_10640 = state_10546__$1;
(statearr_10555_10640[(2)] = null);

(statearr_10555_10640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (24))){
var inst_10445 = (state_10546[(7)]);
var inst_10464 = (state_10546[(2)]);
var inst_10465 = cljs.core.next.call(null,inst_10445);
var inst_10423 = inst_10465;
var inst_10424 = null;
var inst_10425 = (0);
var inst_10426 = (0);
var state_10546__$1 = (function (){var statearr_10556 = state_10546;
(statearr_10556[(13)] = inst_10464);

(statearr_10556[(14)] = inst_10425);

(statearr_10556[(15)] = inst_10424);

(statearr_10556[(16)] = inst_10423);

(statearr_10556[(17)] = inst_10426);

return statearr_10556;
})();
var statearr_10557_10641 = state_10546__$1;
(statearr_10557_10641[(2)] = null);

(statearr_10557_10641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (39))){
var state_10546__$1 = state_10546;
var statearr_10561_10642 = state_10546__$1;
(statearr_10561_10642[(2)] = null);

(statearr_10561_10642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (4))){
var inst_10414 = (state_10546[(12)]);
var inst_10414__$1 = (state_10546[(2)]);
var inst_10415 = (inst_10414__$1 == null);
var state_10546__$1 = (function (){var statearr_10562 = state_10546;
(statearr_10562[(12)] = inst_10414__$1);

return statearr_10562;
})();
if(cljs.core.truth_(inst_10415)){
var statearr_10563_10643 = state_10546__$1;
(statearr_10563_10643[(1)] = (5));

} else {
var statearr_10564_10644 = state_10546__$1;
(statearr_10564_10644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (15))){
var inst_10425 = (state_10546[(14)]);
var inst_10424 = (state_10546[(15)]);
var inst_10423 = (state_10546[(16)]);
var inst_10426 = (state_10546[(17)]);
var inst_10441 = (state_10546[(2)]);
var inst_10442 = (inst_10426 + (1));
var tmp10558 = inst_10425;
var tmp10559 = inst_10424;
var tmp10560 = inst_10423;
var inst_10423__$1 = tmp10560;
var inst_10424__$1 = tmp10559;
var inst_10425__$1 = tmp10558;
var inst_10426__$1 = inst_10442;
var state_10546__$1 = (function (){var statearr_10565 = state_10546;
(statearr_10565[(14)] = inst_10425__$1);

(statearr_10565[(15)] = inst_10424__$1);

(statearr_10565[(18)] = inst_10441);

(statearr_10565[(16)] = inst_10423__$1);

(statearr_10565[(17)] = inst_10426__$1);

return statearr_10565;
})();
var statearr_10566_10645 = state_10546__$1;
(statearr_10566_10645[(2)] = null);

(statearr_10566_10645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (21))){
var inst_10468 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10570_10646 = state_10546__$1;
(statearr_10570_10646[(2)] = inst_10468);

(statearr_10570_10646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (31))){
var inst_10494 = (state_10546[(9)]);
var inst_10498 = done.call(null,null);
var inst_10499 = cljs.core.async.untap_STAR_.call(null,m,inst_10494);
var state_10546__$1 = (function (){var statearr_10571 = state_10546;
(statearr_10571[(19)] = inst_10498);

return statearr_10571;
})();
var statearr_10572_10647 = state_10546__$1;
(statearr_10572_10647[(2)] = inst_10499);

(statearr_10572_10647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (32))){
var inst_10489 = (state_10546[(10)]);
var inst_10487 = (state_10546[(11)]);
var inst_10488 = (state_10546[(20)]);
var inst_10486 = (state_10546[(21)]);
var inst_10501 = (state_10546[(2)]);
var inst_10502 = (inst_10489 + (1));
var tmp10567 = inst_10487;
var tmp10568 = inst_10488;
var tmp10569 = inst_10486;
var inst_10486__$1 = tmp10569;
var inst_10487__$1 = tmp10567;
var inst_10488__$1 = tmp10568;
var inst_10489__$1 = inst_10502;
var state_10546__$1 = (function (){var statearr_10573 = state_10546;
(statearr_10573[(10)] = inst_10489__$1);

(statearr_10573[(22)] = inst_10501);

(statearr_10573[(11)] = inst_10487__$1);

(statearr_10573[(20)] = inst_10488__$1);

(statearr_10573[(21)] = inst_10486__$1);

return statearr_10573;
})();
var statearr_10574_10648 = state_10546__$1;
(statearr_10574_10648[(2)] = null);

(statearr_10574_10648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (40))){
var inst_10514 = (state_10546[(23)]);
var inst_10518 = done.call(null,null);
var inst_10519 = cljs.core.async.untap_STAR_.call(null,m,inst_10514);
var state_10546__$1 = (function (){var statearr_10575 = state_10546;
(statearr_10575[(24)] = inst_10518);

return statearr_10575;
})();
var statearr_10576_10649 = state_10546__$1;
(statearr_10576_10649[(2)] = inst_10519);

(statearr_10576_10649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (33))){
var inst_10505 = (state_10546[(25)]);
var inst_10507 = cljs.core.chunked_seq_QMARK_.call(null,inst_10505);
var state_10546__$1 = state_10546;
if(inst_10507){
var statearr_10577_10650 = state_10546__$1;
(statearr_10577_10650[(1)] = (36));

} else {
var statearr_10578_10651 = state_10546__$1;
(statearr_10578_10651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (13))){
var inst_10435 = (state_10546[(26)]);
var inst_10438 = cljs.core.async.close_BANG_.call(null,inst_10435);
var state_10546__$1 = state_10546;
var statearr_10579_10652 = state_10546__$1;
(statearr_10579_10652[(2)] = inst_10438);

(statearr_10579_10652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (22))){
var inst_10458 = (state_10546[(8)]);
var inst_10461 = cljs.core.async.close_BANG_.call(null,inst_10458);
var state_10546__$1 = state_10546;
var statearr_10580_10653 = state_10546__$1;
(statearr_10580_10653[(2)] = inst_10461);

(statearr_10580_10653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (36))){
var inst_10505 = (state_10546[(25)]);
var inst_10509 = cljs.core.chunk_first.call(null,inst_10505);
var inst_10510 = cljs.core.chunk_rest.call(null,inst_10505);
var inst_10511 = cljs.core.count.call(null,inst_10509);
var inst_10486 = inst_10510;
var inst_10487 = inst_10509;
var inst_10488 = inst_10511;
var inst_10489 = (0);
var state_10546__$1 = (function (){var statearr_10581 = state_10546;
(statearr_10581[(10)] = inst_10489);

(statearr_10581[(11)] = inst_10487);

(statearr_10581[(20)] = inst_10488);

(statearr_10581[(21)] = inst_10486);

return statearr_10581;
})();
var statearr_10582_10654 = state_10546__$1;
(statearr_10582_10654[(2)] = null);

(statearr_10582_10654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (41))){
var inst_10505 = (state_10546[(25)]);
var inst_10521 = (state_10546[(2)]);
var inst_10522 = cljs.core.next.call(null,inst_10505);
var inst_10486 = inst_10522;
var inst_10487 = null;
var inst_10488 = (0);
var inst_10489 = (0);
var state_10546__$1 = (function (){var statearr_10583 = state_10546;
(statearr_10583[(27)] = inst_10521);

(statearr_10583[(10)] = inst_10489);

(statearr_10583[(11)] = inst_10487);

(statearr_10583[(20)] = inst_10488);

(statearr_10583[(21)] = inst_10486);

return statearr_10583;
})();
var statearr_10584_10655 = state_10546__$1;
(statearr_10584_10655[(2)] = null);

(statearr_10584_10655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (43))){
var state_10546__$1 = state_10546;
var statearr_10585_10656 = state_10546__$1;
(statearr_10585_10656[(2)] = null);

(statearr_10585_10656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (29))){
var inst_10530 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10586_10657 = state_10546__$1;
(statearr_10586_10657[(2)] = inst_10530);

(statearr_10586_10657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (44))){
var inst_10539 = (state_10546[(2)]);
var state_10546__$1 = (function (){var statearr_10587 = state_10546;
(statearr_10587[(28)] = inst_10539);

return statearr_10587;
})();
var statearr_10588_10658 = state_10546__$1;
(statearr_10588_10658[(2)] = null);

(statearr_10588_10658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (6))){
var inst_10478 = (state_10546[(29)]);
var inst_10477 = cljs.core.deref.call(null,cs);
var inst_10478__$1 = cljs.core.keys.call(null,inst_10477);
var inst_10479 = cljs.core.count.call(null,inst_10478__$1);
var inst_10480 = cljs.core.reset_BANG_.call(null,dctr,inst_10479);
var inst_10485 = cljs.core.seq.call(null,inst_10478__$1);
var inst_10486 = inst_10485;
var inst_10487 = null;
var inst_10488 = (0);
var inst_10489 = (0);
var state_10546__$1 = (function (){var statearr_10589 = state_10546;
(statearr_10589[(30)] = inst_10480);

(statearr_10589[(10)] = inst_10489);

(statearr_10589[(11)] = inst_10487);

(statearr_10589[(29)] = inst_10478__$1);

(statearr_10589[(20)] = inst_10488);

(statearr_10589[(21)] = inst_10486);

return statearr_10589;
})();
var statearr_10590_10659 = state_10546__$1;
(statearr_10590_10659[(2)] = null);

(statearr_10590_10659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (28))){
var inst_10486 = (state_10546[(21)]);
var inst_10505 = (state_10546[(25)]);
var inst_10505__$1 = cljs.core.seq.call(null,inst_10486);
var state_10546__$1 = (function (){var statearr_10591 = state_10546;
(statearr_10591[(25)] = inst_10505__$1);

return statearr_10591;
})();
if(inst_10505__$1){
var statearr_10592_10660 = state_10546__$1;
(statearr_10592_10660[(1)] = (33));

} else {
var statearr_10593_10661 = state_10546__$1;
(statearr_10593_10661[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (25))){
var inst_10489 = (state_10546[(10)]);
var inst_10488 = (state_10546[(20)]);
var inst_10491 = (inst_10489 < inst_10488);
var inst_10492 = inst_10491;
var state_10546__$1 = state_10546;
if(cljs.core.truth_(inst_10492)){
var statearr_10594_10662 = state_10546__$1;
(statearr_10594_10662[(1)] = (27));

} else {
var statearr_10595_10663 = state_10546__$1;
(statearr_10595_10663[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (34))){
var state_10546__$1 = state_10546;
var statearr_10596_10664 = state_10546__$1;
(statearr_10596_10664[(2)] = null);

(statearr_10596_10664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (17))){
var state_10546__$1 = state_10546;
var statearr_10597_10665 = state_10546__$1;
(statearr_10597_10665[(2)] = null);

(statearr_10597_10665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (3))){
var inst_10544 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10546__$1,inst_10544);
} else {
if((state_val_10547 === (12))){
var inst_10473 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10598_10666 = state_10546__$1;
(statearr_10598_10666[(2)] = inst_10473);

(statearr_10598_10666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (2))){
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10546__$1,(4),ch);
} else {
if((state_val_10547 === (23))){
var state_10546__$1 = state_10546;
var statearr_10599_10667 = state_10546__$1;
(statearr_10599_10667[(2)] = null);

(statearr_10599_10667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (35))){
var inst_10528 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10600_10668 = state_10546__$1;
(statearr_10600_10668[(2)] = inst_10528);

(statearr_10600_10668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (19))){
var inst_10445 = (state_10546[(7)]);
var inst_10449 = cljs.core.chunk_first.call(null,inst_10445);
var inst_10450 = cljs.core.chunk_rest.call(null,inst_10445);
var inst_10451 = cljs.core.count.call(null,inst_10449);
var inst_10423 = inst_10450;
var inst_10424 = inst_10449;
var inst_10425 = inst_10451;
var inst_10426 = (0);
var state_10546__$1 = (function (){var statearr_10601 = state_10546;
(statearr_10601[(14)] = inst_10425);

(statearr_10601[(15)] = inst_10424);

(statearr_10601[(16)] = inst_10423);

(statearr_10601[(17)] = inst_10426);

return statearr_10601;
})();
var statearr_10602_10669 = state_10546__$1;
(statearr_10602_10669[(2)] = null);

(statearr_10602_10669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (11))){
var inst_10445 = (state_10546[(7)]);
var inst_10423 = (state_10546[(16)]);
var inst_10445__$1 = cljs.core.seq.call(null,inst_10423);
var state_10546__$1 = (function (){var statearr_10603 = state_10546;
(statearr_10603[(7)] = inst_10445__$1);

return statearr_10603;
})();
if(inst_10445__$1){
var statearr_10604_10670 = state_10546__$1;
(statearr_10604_10670[(1)] = (16));

} else {
var statearr_10605_10671 = state_10546__$1;
(statearr_10605_10671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (9))){
var inst_10475 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10606_10672 = state_10546__$1;
(statearr_10606_10672[(2)] = inst_10475);

(statearr_10606_10672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (5))){
var inst_10421 = cljs.core.deref.call(null,cs);
var inst_10422 = cljs.core.seq.call(null,inst_10421);
var inst_10423 = inst_10422;
var inst_10424 = null;
var inst_10425 = (0);
var inst_10426 = (0);
var state_10546__$1 = (function (){var statearr_10607 = state_10546;
(statearr_10607[(14)] = inst_10425);

(statearr_10607[(15)] = inst_10424);

(statearr_10607[(16)] = inst_10423);

(statearr_10607[(17)] = inst_10426);

return statearr_10607;
})();
var statearr_10608_10673 = state_10546__$1;
(statearr_10608_10673[(2)] = null);

(statearr_10608_10673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (14))){
var state_10546__$1 = state_10546;
var statearr_10609_10674 = state_10546__$1;
(statearr_10609_10674[(2)] = null);

(statearr_10609_10674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (45))){
var inst_10536 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10610_10675 = state_10546__$1;
(statearr_10610_10675[(2)] = inst_10536);

(statearr_10610_10675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (26))){
var inst_10478 = (state_10546[(29)]);
var inst_10532 = (state_10546[(2)]);
var inst_10533 = cljs.core.seq.call(null,inst_10478);
var state_10546__$1 = (function (){var statearr_10611 = state_10546;
(statearr_10611[(31)] = inst_10532);

return statearr_10611;
})();
if(inst_10533){
var statearr_10612_10676 = state_10546__$1;
(statearr_10612_10676[(1)] = (42));

} else {
var statearr_10613_10677 = state_10546__$1;
(statearr_10613_10677[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (16))){
var inst_10445 = (state_10546[(7)]);
var inst_10447 = cljs.core.chunked_seq_QMARK_.call(null,inst_10445);
var state_10546__$1 = state_10546;
if(inst_10447){
var statearr_10614_10678 = state_10546__$1;
(statearr_10614_10678[(1)] = (19));

} else {
var statearr_10615_10679 = state_10546__$1;
(statearr_10615_10679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (38))){
var inst_10525 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10616_10680 = state_10546__$1;
(statearr_10616_10680[(2)] = inst_10525);

(statearr_10616_10680[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (30))){
var state_10546__$1 = state_10546;
var statearr_10617_10681 = state_10546__$1;
(statearr_10617_10681[(2)] = null);

(statearr_10617_10681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (10))){
var inst_10424 = (state_10546[(15)]);
var inst_10426 = (state_10546[(17)]);
var inst_10434 = cljs.core._nth.call(null,inst_10424,inst_10426);
var inst_10435 = cljs.core.nth.call(null,inst_10434,(0),null);
var inst_10436 = cljs.core.nth.call(null,inst_10434,(1),null);
var state_10546__$1 = (function (){var statearr_10618 = state_10546;
(statearr_10618[(26)] = inst_10435);

return statearr_10618;
})();
if(cljs.core.truth_(inst_10436)){
var statearr_10619_10682 = state_10546__$1;
(statearr_10619_10682[(1)] = (13));

} else {
var statearr_10620_10683 = state_10546__$1;
(statearr_10620_10683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (18))){
var inst_10471 = (state_10546[(2)]);
var state_10546__$1 = state_10546;
var statearr_10621_10684 = state_10546__$1;
(statearr_10621_10684[(2)] = inst_10471);

(statearr_10621_10684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (42))){
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10546__$1,(45),dchan);
} else {
if((state_val_10547 === (37))){
var inst_10514 = (state_10546[(23)]);
var inst_10505 = (state_10546[(25)]);
var inst_10414 = (state_10546[(12)]);
var inst_10514__$1 = cljs.core.first.call(null,inst_10505);
var inst_10515 = cljs.core.async.put_BANG_.call(null,inst_10514__$1,inst_10414,done);
var state_10546__$1 = (function (){var statearr_10622 = state_10546;
(statearr_10622[(23)] = inst_10514__$1);

return statearr_10622;
})();
if(cljs.core.truth_(inst_10515)){
var statearr_10623_10685 = state_10546__$1;
(statearr_10623_10685[(1)] = (39));

} else {
var statearr_10624_10686 = state_10546__$1;
(statearr_10624_10686[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10547 === (8))){
var inst_10425 = (state_10546[(14)]);
var inst_10426 = (state_10546[(17)]);
var inst_10428 = (inst_10426 < inst_10425);
var inst_10429 = inst_10428;
var state_10546__$1 = state_10546;
if(cljs.core.truth_(inst_10429)){
var statearr_10625_10687 = state_10546__$1;
(statearr_10625_10687[(1)] = (10));

} else {
var statearr_10626_10688 = state_10546__$1;
(statearr_10626_10688[(1)] = (11));

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
});})(c__9281__auto___10634,cs,m,dchan,dctr,done))
;
return ((function (switch__9169__auto__,c__9281__auto___10634,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9170__auto__ = null;
var cljs$core$async$mult_$_state_machine__9170__auto____0 = (function (){
var statearr_10630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10630[(0)] = cljs$core$async$mult_$_state_machine__9170__auto__);

(statearr_10630[(1)] = (1));

return statearr_10630;
});
var cljs$core$async$mult_$_state_machine__9170__auto____1 = (function (state_10546){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_10546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e10631){if((e10631 instanceof Object)){
var ex__9173__auto__ = e10631;
var statearr_10632_10689 = state_10546;
(statearr_10632_10689[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10690 = state_10546;
state_10546 = G__10690;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9170__auto__ = function(state_10546){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9170__auto____1.call(this,state_10546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9170__auto____0;
cljs$core$async$mult_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9170__auto____1;
return cljs$core$async$mult_$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___10634,cs,m,dchan,dctr,done))
})();
var state__9283__auto__ = (function (){var statearr_10633 = f__9282__auto__.call(null);
(statearr_10633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___10634);

return statearr_10633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___10634,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10691 = [];
var len__7843__auto___10694 = arguments.length;
var i__7844__auto___10695 = (0);
while(true){
if((i__7844__auto___10695 < len__7843__auto___10694)){
args10691.push((arguments[i__7844__auto___10695]));

var G__10696 = (i__7844__auto___10695 + (1));
i__7844__auto___10695 = G__10696;
continue;
} else {
}
break;
}

var G__10693 = args10691.length;
switch (G__10693) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10691.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,ch);
} else {
var m__7399__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,ch);
} else {
var m__7399__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m);
} else {
var m__7399__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,state_map);
} else {
var m__7399__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7398__auto__ = (((m == null))?null:m);
var m__7399__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,m,mode);
} else {
var m__7399__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7850__auto__ = [];
var len__7843__auto___10708 = arguments.length;
var i__7844__auto___10709 = (0);
while(true){
if((i__7844__auto___10709 < len__7843__auto___10708)){
args__7850__auto__.push((arguments[i__7844__auto___10709]));

var G__10710 = (i__7844__auto___10709 + (1));
i__7844__auto___10709 = G__10710;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((3) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10702){
var map__10703 = p__10702;
var map__10703__$1 = ((((!((map__10703 == null)))?((((map__10703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10703):map__10703);
var opts = map__10703__$1;
var statearr_10705_10711 = state;
(statearr_10705_10711[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10703,map__10703__$1,opts){
return (function (val){
var statearr_10706_10712 = state;
(statearr_10706_10712[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10703,map__10703__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10707_10713 = state;
(statearr_10707_10713[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10698){
var G__10699 = cljs.core.first.call(null,seq10698);
var seq10698__$1 = cljs.core.next.call(null,seq10698);
var G__10700 = cljs.core.first.call(null,seq10698__$1);
var seq10698__$2 = cljs.core.next.call(null,seq10698__$1);
var G__10701 = cljs.core.first.call(null,seq10698__$2);
var seq10698__$3 = cljs.core.next.call(null,seq10698__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10699,G__10700,G__10701,seq10698__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10881 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10882){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10882 = meta10882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10883,meta10882__$1){
var self__ = this;
var _10883__$1 = this;
return (new cljs.core.async.t_cljs$core$async10881(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10882__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10883){
var self__ = this;
var _10883__$1 = this;
return self__.meta10882;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta10882","meta10882",-2090810102,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10881";

cljs.core.async.t_cljs$core$async10881.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async10881");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10881 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10881(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10882){
return (new cljs.core.async.t_cljs$core$async10881(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10882));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10881(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9281__auto___11048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10985){
var state_val_10986 = (state_10985[(1)]);
if((state_val_10986 === (7))){
var inst_10900 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_10987_11049 = state_10985__$1;
(statearr_10987_11049[(2)] = inst_10900);

(statearr_10987_11049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (20))){
var inst_10912 = (state_10985[(7)]);
var state_10985__$1 = state_10985;
var statearr_10988_11050 = state_10985__$1;
(statearr_10988_11050[(2)] = inst_10912);

(statearr_10988_11050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (27))){
var state_10985__$1 = state_10985;
var statearr_10989_11051 = state_10985__$1;
(statearr_10989_11051[(2)] = null);

(statearr_10989_11051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (1))){
var inst_10887 = (state_10985[(8)]);
var inst_10887__$1 = calc_state.call(null);
var inst_10889 = (inst_10887__$1 == null);
var inst_10890 = cljs.core.not.call(null,inst_10889);
var state_10985__$1 = (function (){var statearr_10990 = state_10985;
(statearr_10990[(8)] = inst_10887__$1);

return statearr_10990;
})();
if(inst_10890){
var statearr_10991_11052 = state_10985__$1;
(statearr_10991_11052[(1)] = (2));

} else {
var statearr_10992_11053 = state_10985__$1;
(statearr_10992_11053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (24))){
var inst_10936 = (state_10985[(9)]);
var inst_10945 = (state_10985[(10)]);
var inst_10959 = (state_10985[(11)]);
var inst_10959__$1 = inst_10936.call(null,inst_10945);
var state_10985__$1 = (function (){var statearr_10993 = state_10985;
(statearr_10993[(11)] = inst_10959__$1);

return statearr_10993;
})();
if(cljs.core.truth_(inst_10959__$1)){
var statearr_10994_11054 = state_10985__$1;
(statearr_10994_11054[(1)] = (29));

} else {
var statearr_10995_11055 = state_10985__$1;
(statearr_10995_11055[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (4))){
var inst_10903 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10903)){
var statearr_10996_11056 = state_10985__$1;
(statearr_10996_11056[(1)] = (8));

} else {
var statearr_10997_11057 = state_10985__$1;
(statearr_10997_11057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (15))){
var inst_10930 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10930)){
var statearr_10998_11058 = state_10985__$1;
(statearr_10998_11058[(1)] = (19));

} else {
var statearr_10999_11059 = state_10985__$1;
(statearr_10999_11059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (21))){
var inst_10935 = (state_10985[(12)]);
var inst_10935__$1 = (state_10985[(2)]);
var inst_10936 = cljs.core.get.call(null,inst_10935__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10937 = cljs.core.get.call(null,inst_10935__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10938 = cljs.core.get.call(null,inst_10935__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10985__$1 = (function (){var statearr_11000 = state_10985;
(statearr_11000[(13)] = inst_10937);

(statearr_11000[(9)] = inst_10936);

(statearr_11000[(12)] = inst_10935__$1);

return statearr_11000;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10985__$1,(22),inst_10938);
} else {
if((state_val_10986 === (31))){
var inst_10967 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10967)){
var statearr_11001_11060 = state_10985__$1;
(statearr_11001_11060[(1)] = (32));

} else {
var statearr_11002_11061 = state_10985__$1;
(statearr_11002_11061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (32))){
var inst_10944 = (state_10985[(14)]);
var state_10985__$1 = state_10985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10985__$1,(35),out,inst_10944);
} else {
if((state_val_10986 === (33))){
var inst_10935 = (state_10985[(12)]);
var inst_10912 = inst_10935;
var state_10985__$1 = (function (){var statearr_11003 = state_10985;
(statearr_11003[(7)] = inst_10912);

return statearr_11003;
})();
var statearr_11004_11062 = state_10985__$1;
(statearr_11004_11062[(2)] = null);

(statearr_11004_11062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (13))){
var inst_10912 = (state_10985[(7)]);
var inst_10919 = inst_10912.cljs$lang$protocol_mask$partition0$;
var inst_10920 = (inst_10919 & (64));
var inst_10921 = inst_10912.cljs$core$ISeq$;
var inst_10922 = (cljs.core.PROTOCOL_SENTINEL === inst_10921);
var inst_10923 = (inst_10920) || (inst_10922);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10923)){
var statearr_11005_11063 = state_10985__$1;
(statearr_11005_11063[(1)] = (16));

} else {
var statearr_11006_11064 = state_10985__$1;
(statearr_11006_11064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (22))){
var inst_10945 = (state_10985[(10)]);
var inst_10944 = (state_10985[(14)]);
var inst_10943 = (state_10985[(2)]);
var inst_10944__$1 = cljs.core.nth.call(null,inst_10943,(0),null);
var inst_10945__$1 = cljs.core.nth.call(null,inst_10943,(1),null);
var inst_10946 = (inst_10944__$1 == null);
var inst_10947 = cljs.core._EQ_.call(null,inst_10945__$1,change);
var inst_10948 = (inst_10946) || (inst_10947);
var state_10985__$1 = (function (){var statearr_11007 = state_10985;
(statearr_11007[(10)] = inst_10945__$1);

(statearr_11007[(14)] = inst_10944__$1);

return statearr_11007;
})();
if(cljs.core.truth_(inst_10948)){
var statearr_11008_11065 = state_10985__$1;
(statearr_11008_11065[(1)] = (23));

} else {
var statearr_11009_11066 = state_10985__$1;
(statearr_11009_11066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (36))){
var inst_10935 = (state_10985[(12)]);
var inst_10912 = inst_10935;
var state_10985__$1 = (function (){var statearr_11010 = state_10985;
(statearr_11010[(7)] = inst_10912);

return statearr_11010;
})();
var statearr_11011_11067 = state_10985__$1;
(statearr_11011_11067[(2)] = null);

(statearr_11011_11067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (29))){
var inst_10959 = (state_10985[(11)]);
var state_10985__$1 = state_10985;
var statearr_11012_11068 = state_10985__$1;
(statearr_11012_11068[(2)] = inst_10959);

(statearr_11012_11068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (6))){
var state_10985__$1 = state_10985;
var statearr_11013_11069 = state_10985__$1;
(statearr_11013_11069[(2)] = false);

(statearr_11013_11069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (28))){
var inst_10955 = (state_10985[(2)]);
var inst_10956 = calc_state.call(null);
var inst_10912 = inst_10956;
var state_10985__$1 = (function (){var statearr_11014 = state_10985;
(statearr_11014[(15)] = inst_10955);

(statearr_11014[(7)] = inst_10912);

return statearr_11014;
})();
var statearr_11015_11070 = state_10985__$1;
(statearr_11015_11070[(2)] = null);

(statearr_11015_11070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (25))){
var inst_10981 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_11016_11071 = state_10985__$1;
(statearr_11016_11071[(2)] = inst_10981);

(statearr_11016_11071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (34))){
var inst_10979 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_11017_11072 = state_10985__$1;
(statearr_11017_11072[(2)] = inst_10979);

(statearr_11017_11072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (17))){
var state_10985__$1 = state_10985;
var statearr_11018_11073 = state_10985__$1;
(statearr_11018_11073[(2)] = false);

(statearr_11018_11073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (3))){
var state_10985__$1 = state_10985;
var statearr_11019_11074 = state_10985__$1;
(statearr_11019_11074[(2)] = false);

(statearr_11019_11074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (12))){
var inst_10983 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10985__$1,inst_10983);
} else {
if((state_val_10986 === (2))){
var inst_10887 = (state_10985[(8)]);
var inst_10892 = inst_10887.cljs$lang$protocol_mask$partition0$;
var inst_10893 = (inst_10892 & (64));
var inst_10894 = inst_10887.cljs$core$ISeq$;
var inst_10895 = (cljs.core.PROTOCOL_SENTINEL === inst_10894);
var inst_10896 = (inst_10893) || (inst_10895);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10896)){
var statearr_11020_11075 = state_10985__$1;
(statearr_11020_11075[(1)] = (5));

} else {
var statearr_11021_11076 = state_10985__$1;
(statearr_11021_11076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (23))){
var inst_10944 = (state_10985[(14)]);
var inst_10950 = (inst_10944 == null);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10950)){
var statearr_11022_11077 = state_10985__$1;
(statearr_11022_11077[(1)] = (26));

} else {
var statearr_11023_11078 = state_10985__$1;
(statearr_11023_11078[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (35))){
var inst_10970 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
if(cljs.core.truth_(inst_10970)){
var statearr_11024_11079 = state_10985__$1;
(statearr_11024_11079[(1)] = (36));

} else {
var statearr_11025_11080 = state_10985__$1;
(statearr_11025_11080[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (19))){
var inst_10912 = (state_10985[(7)]);
var inst_10932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10912);
var state_10985__$1 = state_10985;
var statearr_11026_11081 = state_10985__$1;
(statearr_11026_11081[(2)] = inst_10932);

(statearr_11026_11081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (11))){
var inst_10912 = (state_10985[(7)]);
var inst_10916 = (inst_10912 == null);
var inst_10917 = cljs.core.not.call(null,inst_10916);
var state_10985__$1 = state_10985;
if(inst_10917){
var statearr_11027_11082 = state_10985__$1;
(statearr_11027_11082[(1)] = (13));

} else {
var statearr_11028_11083 = state_10985__$1;
(statearr_11028_11083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (9))){
var inst_10887 = (state_10985[(8)]);
var state_10985__$1 = state_10985;
var statearr_11029_11084 = state_10985__$1;
(statearr_11029_11084[(2)] = inst_10887);

(statearr_11029_11084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (5))){
var state_10985__$1 = state_10985;
var statearr_11030_11085 = state_10985__$1;
(statearr_11030_11085[(2)] = true);

(statearr_11030_11085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (14))){
var state_10985__$1 = state_10985;
var statearr_11031_11086 = state_10985__$1;
(statearr_11031_11086[(2)] = false);

(statearr_11031_11086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (26))){
var inst_10945 = (state_10985[(10)]);
var inst_10952 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10945);
var state_10985__$1 = state_10985;
var statearr_11032_11087 = state_10985__$1;
(statearr_11032_11087[(2)] = inst_10952);

(statearr_11032_11087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (16))){
var state_10985__$1 = state_10985;
var statearr_11033_11088 = state_10985__$1;
(statearr_11033_11088[(2)] = true);

(statearr_11033_11088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (38))){
var inst_10975 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_11034_11089 = state_10985__$1;
(statearr_11034_11089[(2)] = inst_10975);

(statearr_11034_11089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (30))){
var inst_10937 = (state_10985[(13)]);
var inst_10936 = (state_10985[(9)]);
var inst_10945 = (state_10985[(10)]);
var inst_10962 = cljs.core.empty_QMARK_.call(null,inst_10936);
var inst_10963 = inst_10937.call(null,inst_10945);
var inst_10964 = cljs.core.not.call(null,inst_10963);
var inst_10965 = (inst_10962) && (inst_10964);
var state_10985__$1 = state_10985;
var statearr_11035_11090 = state_10985__$1;
(statearr_11035_11090[(2)] = inst_10965);

(statearr_11035_11090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (10))){
var inst_10887 = (state_10985[(8)]);
var inst_10908 = (state_10985[(2)]);
var inst_10909 = cljs.core.get.call(null,inst_10908,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10910 = cljs.core.get.call(null,inst_10908,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10911 = cljs.core.get.call(null,inst_10908,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10912 = inst_10887;
var state_10985__$1 = (function (){var statearr_11036 = state_10985;
(statearr_11036[(16)] = inst_10909);

(statearr_11036[(17)] = inst_10911);

(statearr_11036[(18)] = inst_10910);

(statearr_11036[(7)] = inst_10912);

return statearr_11036;
})();
var statearr_11037_11091 = state_10985__$1;
(statearr_11037_11091[(2)] = null);

(statearr_11037_11091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (18))){
var inst_10927 = (state_10985[(2)]);
var state_10985__$1 = state_10985;
var statearr_11038_11092 = state_10985__$1;
(statearr_11038_11092[(2)] = inst_10927);

(statearr_11038_11092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (37))){
var state_10985__$1 = state_10985;
var statearr_11039_11093 = state_10985__$1;
(statearr_11039_11093[(2)] = null);

(statearr_11039_11093[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10986 === (8))){
var inst_10887 = (state_10985[(8)]);
var inst_10905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10887);
var state_10985__$1 = state_10985;
var statearr_11040_11094 = state_10985__$1;
(statearr_11040_11094[(2)] = inst_10905);

(statearr_11040_11094[(1)] = (10));


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
});})(c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9169__auto__,c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9170__auto__ = null;
var cljs$core$async$mix_$_state_machine__9170__auto____0 = (function (){
var statearr_11044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11044[(0)] = cljs$core$async$mix_$_state_machine__9170__auto__);

(statearr_11044[(1)] = (1));

return statearr_11044;
});
var cljs$core$async$mix_$_state_machine__9170__auto____1 = (function (state_10985){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_10985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11045){if((e11045 instanceof Object)){
var ex__9173__auto__ = e11045;
var statearr_11046_11095 = state_10985;
(statearr_11046_11095[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11096 = state_10985;
state_10985 = G__11096;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9170__auto__ = function(state_10985){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9170__auto____1.call(this,state_10985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9170__auto____0;
cljs$core$async$mix_$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9170__auto____1;
return cljs$core$async$mix_$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9283__auto__ = (function (){var statearr_11047 = f__9282__auto__.call(null);
(statearr_11047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11048);

return statearr_11047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7398__auto__ = (((p == null))?null:p);
var m__7399__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7399__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7398__auto__ = (((p == null))?null:p);
var m__7399__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,p,v,ch);
} else {
var m__7399__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11097 = [];
var len__7843__auto___11100 = arguments.length;
var i__7844__auto___11101 = (0);
while(true){
if((i__7844__auto___11101 < len__7843__auto___11100)){
args11097.push((arguments[i__7844__auto___11101]));

var G__11102 = (i__7844__auto___11101 + (1));
i__7844__auto___11101 = G__11102;
continue;
} else {
}
break;
}

var G__11099 = args11097.length;
switch (G__11099) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11097.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7398__auto__ = (((p == null))?null:p);
var m__7399__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,p);
} else {
var m__7399__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7398__auto__ = (((p == null))?null:p);
var m__7399__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,p,v);
} else {
var m__7399__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args11105 = [];
var len__7843__auto___11230 = arguments.length;
var i__7844__auto___11231 = (0);
while(true){
if((i__7844__auto___11231 < len__7843__auto___11230)){
args11105.push((arguments[i__7844__auto___11231]));

var G__11232 = (i__7844__auto___11231 + (1));
i__7844__auto___11231 = G__11232;
continue;
} else {
}
break;
}

var G__11107 = args11105.length;
switch (G__11107) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11105.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6730__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6730__auto__)){
return or__6730__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6730__auto__,mults){
return (function (p1__11104_SHARP_){
if(cljs.core.truth_(p1__11104_SHARP_.call(null,topic))){
return p1__11104_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11104_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6730__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11108 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11109){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11109 = meta11109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11110,meta11109__$1){
var self__ = this;
var _11110__$1 = this;
return (new cljs.core.async.t_cljs$core$async11108(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11109__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11110){
var self__ = this;
var _11110__$1 = this;
return self__.meta11109;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11109","meta11109",-1144252441,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11108";

cljs.core.async.t_cljs$core$async11108.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async11108");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11108 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11109){
return (new cljs.core.async.t_cljs$core$async11108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11109));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11108(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9281__auto___11234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11234,mults,ensure_mult,p){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11234,mults,ensure_mult,p){
return (function (state_11182){
var state_val_11183 = (state_11182[(1)]);
if((state_val_11183 === (7))){
var inst_11178 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11184_11235 = state_11182__$1;
(statearr_11184_11235[(2)] = inst_11178);

(statearr_11184_11235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (20))){
var state_11182__$1 = state_11182;
var statearr_11185_11236 = state_11182__$1;
(statearr_11185_11236[(2)] = null);

(statearr_11185_11236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (1))){
var state_11182__$1 = state_11182;
var statearr_11186_11237 = state_11182__$1;
(statearr_11186_11237[(2)] = null);

(statearr_11186_11237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (24))){
var inst_11161 = (state_11182[(7)]);
var inst_11170 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11161);
var state_11182__$1 = state_11182;
var statearr_11187_11238 = state_11182__$1;
(statearr_11187_11238[(2)] = inst_11170);

(statearr_11187_11238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (4))){
var inst_11113 = (state_11182[(8)]);
var inst_11113__$1 = (state_11182[(2)]);
var inst_11114 = (inst_11113__$1 == null);
var state_11182__$1 = (function (){var statearr_11188 = state_11182;
(statearr_11188[(8)] = inst_11113__$1);

return statearr_11188;
})();
if(cljs.core.truth_(inst_11114)){
var statearr_11189_11239 = state_11182__$1;
(statearr_11189_11239[(1)] = (5));

} else {
var statearr_11190_11240 = state_11182__$1;
(statearr_11190_11240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (15))){
var inst_11155 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11191_11241 = state_11182__$1;
(statearr_11191_11241[(2)] = inst_11155);

(statearr_11191_11241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (21))){
var inst_11175 = (state_11182[(2)]);
var state_11182__$1 = (function (){var statearr_11192 = state_11182;
(statearr_11192[(9)] = inst_11175);

return statearr_11192;
})();
var statearr_11193_11242 = state_11182__$1;
(statearr_11193_11242[(2)] = null);

(statearr_11193_11242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (13))){
var inst_11137 = (state_11182[(10)]);
var inst_11139 = cljs.core.chunked_seq_QMARK_.call(null,inst_11137);
var state_11182__$1 = state_11182;
if(inst_11139){
var statearr_11194_11243 = state_11182__$1;
(statearr_11194_11243[(1)] = (16));

} else {
var statearr_11195_11244 = state_11182__$1;
(statearr_11195_11244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (22))){
var inst_11167 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
if(cljs.core.truth_(inst_11167)){
var statearr_11196_11245 = state_11182__$1;
(statearr_11196_11245[(1)] = (23));

} else {
var statearr_11197_11246 = state_11182__$1;
(statearr_11197_11246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (6))){
var inst_11163 = (state_11182[(11)]);
var inst_11113 = (state_11182[(8)]);
var inst_11161 = (state_11182[(7)]);
var inst_11161__$1 = topic_fn.call(null,inst_11113);
var inst_11162 = cljs.core.deref.call(null,mults);
var inst_11163__$1 = cljs.core.get.call(null,inst_11162,inst_11161__$1);
var state_11182__$1 = (function (){var statearr_11198 = state_11182;
(statearr_11198[(11)] = inst_11163__$1);

(statearr_11198[(7)] = inst_11161__$1);

return statearr_11198;
})();
if(cljs.core.truth_(inst_11163__$1)){
var statearr_11199_11247 = state_11182__$1;
(statearr_11199_11247[(1)] = (19));

} else {
var statearr_11200_11248 = state_11182__$1;
(statearr_11200_11248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (25))){
var inst_11172 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11201_11249 = state_11182__$1;
(statearr_11201_11249[(2)] = inst_11172);

(statearr_11201_11249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (17))){
var inst_11137 = (state_11182[(10)]);
var inst_11146 = cljs.core.first.call(null,inst_11137);
var inst_11147 = cljs.core.async.muxch_STAR_.call(null,inst_11146);
var inst_11148 = cljs.core.async.close_BANG_.call(null,inst_11147);
var inst_11149 = cljs.core.next.call(null,inst_11137);
var inst_11123 = inst_11149;
var inst_11124 = null;
var inst_11125 = (0);
var inst_11126 = (0);
var state_11182__$1 = (function (){var statearr_11202 = state_11182;
(statearr_11202[(12)] = inst_11125);

(statearr_11202[(13)] = inst_11124);

(statearr_11202[(14)] = inst_11148);

(statearr_11202[(15)] = inst_11123);

(statearr_11202[(16)] = inst_11126);

return statearr_11202;
})();
var statearr_11203_11250 = state_11182__$1;
(statearr_11203_11250[(2)] = null);

(statearr_11203_11250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (3))){
var inst_11180 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11182__$1,inst_11180);
} else {
if((state_val_11183 === (12))){
var inst_11157 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11204_11251 = state_11182__$1;
(statearr_11204_11251[(2)] = inst_11157);

(statearr_11204_11251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (2))){
var state_11182__$1 = state_11182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11182__$1,(4),ch);
} else {
if((state_val_11183 === (23))){
var state_11182__$1 = state_11182;
var statearr_11205_11252 = state_11182__$1;
(statearr_11205_11252[(2)] = null);

(statearr_11205_11252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (19))){
var inst_11163 = (state_11182[(11)]);
var inst_11113 = (state_11182[(8)]);
var inst_11165 = cljs.core.async.muxch_STAR_.call(null,inst_11163);
var state_11182__$1 = state_11182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11182__$1,(22),inst_11165,inst_11113);
} else {
if((state_val_11183 === (11))){
var inst_11137 = (state_11182[(10)]);
var inst_11123 = (state_11182[(15)]);
var inst_11137__$1 = cljs.core.seq.call(null,inst_11123);
var state_11182__$1 = (function (){var statearr_11206 = state_11182;
(statearr_11206[(10)] = inst_11137__$1);

return statearr_11206;
})();
if(inst_11137__$1){
var statearr_11207_11253 = state_11182__$1;
(statearr_11207_11253[(1)] = (13));

} else {
var statearr_11208_11254 = state_11182__$1;
(statearr_11208_11254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (9))){
var inst_11159 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11209_11255 = state_11182__$1;
(statearr_11209_11255[(2)] = inst_11159);

(statearr_11209_11255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (5))){
var inst_11120 = cljs.core.deref.call(null,mults);
var inst_11121 = cljs.core.vals.call(null,inst_11120);
var inst_11122 = cljs.core.seq.call(null,inst_11121);
var inst_11123 = inst_11122;
var inst_11124 = null;
var inst_11125 = (0);
var inst_11126 = (0);
var state_11182__$1 = (function (){var statearr_11210 = state_11182;
(statearr_11210[(12)] = inst_11125);

(statearr_11210[(13)] = inst_11124);

(statearr_11210[(15)] = inst_11123);

(statearr_11210[(16)] = inst_11126);

return statearr_11210;
})();
var statearr_11211_11256 = state_11182__$1;
(statearr_11211_11256[(2)] = null);

(statearr_11211_11256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (14))){
var state_11182__$1 = state_11182;
var statearr_11215_11257 = state_11182__$1;
(statearr_11215_11257[(2)] = null);

(statearr_11215_11257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (16))){
var inst_11137 = (state_11182[(10)]);
var inst_11141 = cljs.core.chunk_first.call(null,inst_11137);
var inst_11142 = cljs.core.chunk_rest.call(null,inst_11137);
var inst_11143 = cljs.core.count.call(null,inst_11141);
var inst_11123 = inst_11142;
var inst_11124 = inst_11141;
var inst_11125 = inst_11143;
var inst_11126 = (0);
var state_11182__$1 = (function (){var statearr_11216 = state_11182;
(statearr_11216[(12)] = inst_11125);

(statearr_11216[(13)] = inst_11124);

(statearr_11216[(15)] = inst_11123);

(statearr_11216[(16)] = inst_11126);

return statearr_11216;
})();
var statearr_11217_11258 = state_11182__$1;
(statearr_11217_11258[(2)] = null);

(statearr_11217_11258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (10))){
var inst_11125 = (state_11182[(12)]);
var inst_11124 = (state_11182[(13)]);
var inst_11123 = (state_11182[(15)]);
var inst_11126 = (state_11182[(16)]);
var inst_11131 = cljs.core._nth.call(null,inst_11124,inst_11126);
var inst_11132 = cljs.core.async.muxch_STAR_.call(null,inst_11131);
var inst_11133 = cljs.core.async.close_BANG_.call(null,inst_11132);
var inst_11134 = (inst_11126 + (1));
var tmp11212 = inst_11125;
var tmp11213 = inst_11124;
var tmp11214 = inst_11123;
var inst_11123__$1 = tmp11214;
var inst_11124__$1 = tmp11213;
var inst_11125__$1 = tmp11212;
var inst_11126__$1 = inst_11134;
var state_11182__$1 = (function (){var statearr_11218 = state_11182;
(statearr_11218[(12)] = inst_11125__$1);

(statearr_11218[(13)] = inst_11124__$1);

(statearr_11218[(17)] = inst_11133);

(statearr_11218[(15)] = inst_11123__$1);

(statearr_11218[(16)] = inst_11126__$1);

return statearr_11218;
})();
var statearr_11219_11259 = state_11182__$1;
(statearr_11219_11259[(2)] = null);

(statearr_11219_11259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (18))){
var inst_11152 = (state_11182[(2)]);
var state_11182__$1 = state_11182;
var statearr_11220_11260 = state_11182__$1;
(statearr_11220_11260[(2)] = inst_11152);

(statearr_11220_11260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11183 === (8))){
var inst_11125 = (state_11182[(12)]);
var inst_11126 = (state_11182[(16)]);
var inst_11128 = (inst_11126 < inst_11125);
var inst_11129 = inst_11128;
var state_11182__$1 = state_11182;
if(cljs.core.truth_(inst_11129)){
var statearr_11221_11261 = state_11182__$1;
(statearr_11221_11261[(1)] = (10));

} else {
var statearr_11222_11262 = state_11182__$1;
(statearr_11222_11262[(1)] = (11));

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
});})(c__9281__auto___11234,mults,ensure_mult,p))
;
return ((function (switch__9169__auto__,c__9281__auto___11234,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11226[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11226[(1)] = (1));

return statearr_11226;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11182){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11227){if((e11227 instanceof Object)){
var ex__9173__auto__ = e11227;
var statearr_11228_11263 = state_11182;
(statearr_11228_11263[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11264 = state_11182;
state_11182 = G__11264;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11234,mults,ensure_mult,p))
})();
var state__9283__auto__ = (function (){var statearr_11229 = f__9282__auto__.call(null);
(statearr_11229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11234);

return statearr_11229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11234,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11265 = [];
var len__7843__auto___11268 = arguments.length;
var i__7844__auto___11269 = (0);
while(true){
if((i__7844__auto___11269 < len__7843__auto___11268)){
args11265.push((arguments[i__7844__auto___11269]));

var G__11270 = (i__7844__auto___11269 + (1));
i__7844__auto___11269 = G__11270;
continue;
} else {
}
break;
}

var G__11267 = args11265.length;
switch (G__11267) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11265.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11272 = [];
var len__7843__auto___11275 = arguments.length;
var i__7844__auto___11276 = (0);
while(true){
if((i__7844__auto___11276 < len__7843__auto___11275)){
args11272.push((arguments[i__7844__auto___11276]));

var G__11277 = (i__7844__auto___11276 + (1));
i__7844__auto___11276 = G__11277;
continue;
} else {
}
break;
}

var G__11274 = args11272.length;
switch (G__11274) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11272.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args11279 = [];
var len__7843__auto___11350 = arguments.length;
var i__7844__auto___11351 = (0);
while(true){
if((i__7844__auto___11351 < len__7843__auto___11350)){
args11279.push((arguments[i__7844__auto___11351]));

var G__11352 = (i__7844__auto___11351 + (1));
i__7844__auto___11351 = G__11352;
continue;
} else {
}
break;
}

var G__11281 = args11279.length;
switch (G__11281) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11279.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9281__auto___11354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11320){
var state_val_11321 = (state_11320[(1)]);
if((state_val_11321 === (7))){
var state_11320__$1 = state_11320;
var statearr_11322_11355 = state_11320__$1;
(statearr_11322_11355[(2)] = null);

(statearr_11322_11355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (1))){
var state_11320__$1 = state_11320;
var statearr_11323_11356 = state_11320__$1;
(statearr_11323_11356[(2)] = null);

(statearr_11323_11356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (4))){
var inst_11284 = (state_11320[(7)]);
var inst_11286 = (inst_11284 < cnt);
var state_11320__$1 = state_11320;
if(cljs.core.truth_(inst_11286)){
var statearr_11324_11357 = state_11320__$1;
(statearr_11324_11357[(1)] = (6));

} else {
var statearr_11325_11358 = state_11320__$1;
(statearr_11325_11358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (15))){
var inst_11316 = (state_11320[(2)]);
var state_11320__$1 = state_11320;
var statearr_11326_11359 = state_11320__$1;
(statearr_11326_11359[(2)] = inst_11316);

(statearr_11326_11359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (13))){
var inst_11309 = cljs.core.async.close_BANG_.call(null,out);
var state_11320__$1 = state_11320;
var statearr_11327_11360 = state_11320__$1;
(statearr_11327_11360[(2)] = inst_11309);

(statearr_11327_11360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (6))){
var state_11320__$1 = state_11320;
var statearr_11328_11361 = state_11320__$1;
(statearr_11328_11361[(2)] = null);

(statearr_11328_11361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (3))){
var inst_11318 = (state_11320[(2)]);
var state_11320__$1 = state_11320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11320__$1,inst_11318);
} else {
if((state_val_11321 === (12))){
var inst_11306 = (state_11320[(8)]);
var inst_11306__$1 = (state_11320[(2)]);
var inst_11307 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11306__$1);
var state_11320__$1 = (function (){var statearr_11329 = state_11320;
(statearr_11329[(8)] = inst_11306__$1);

return statearr_11329;
})();
if(cljs.core.truth_(inst_11307)){
var statearr_11330_11362 = state_11320__$1;
(statearr_11330_11362[(1)] = (13));

} else {
var statearr_11331_11363 = state_11320__$1;
(statearr_11331_11363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (2))){
var inst_11283 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11284 = (0);
var state_11320__$1 = (function (){var statearr_11332 = state_11320;
(statearr_11332[(9)] = inst_11283);

(statearr_11332[(7)] = inst_11284);

return statearr_11332;
})();
var statearr_11333_11364 = state_11320__$1;
(statearr_11333_11364[(2)] = null);

(statearr_11333_11364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (11))){
var inst_11284 = (state_11320[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11320,(10),Object,null,(9));
var inst_11293 = chs__$1.call(null,inst_11284);
var inst_11294 = done.call(null,inst_11284);
var inst_11295 = cljs.core.async.take_BANG_.call(null,inst_11293,inst_11294);
var state_11320__$1 = state_11320;
var statearr_11334_11365 = state_11320__$1;
(statearr_11334_11365[(2)] = inst_11295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11320__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (9))){
var inst_11284 = (state_11320[(7)]);
var inst_11297 = (state_11320[(2)]);
var inst_11298 = (inst_11284 + (1));
var inst_11284__$1 = inst_11298;
var state_11320__$1 = (function (){var statearr_11335 = state_11320;
(statearr_11335[(10)] = inst_11297);

(statearr_11335[(7)] = inst_11284__$1);

return statearr_11335;
})();
var statearr_11336_11366 = state_11320__$1;
(statearr_11336_11366[(2)] = null);

(statearr_11336_11366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (5))){
var inst_11304 = (state_11320[(2)]);
var state_11320__$1 = (function (){var statearr_11337 = state_11320;
(statearr_11337[(11)] = inst_11304);

return statearr_11337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11320__$1,(12),dchan);
} else {
if((state_val_11321 === (14))){
var inst_11306 = (state_11320[(8)]);
var inst_11311 = cljs.core.apply.call(null,f,inst_11306);
var state_11320__$1 = state_11320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11320__$1,(16),out,inst_11311);
} else {
if((state_val_11321 === (16))){
var inst_11313 = (state_11320[(2)]);
var state_11320__$1 = (function (){var statearr_11338 = state_11320;
(statearr_11338[(12)] = inst_11313);

return statearr_11338;
})();
var statearr_11339_11367 = state_11320__$1;
(statearr_11339_11367[(2)] = null);

(statearr_11339_11367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (10))){
var inst_11288 = (state_11320[(2)]);
var inst_11289 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11320__$1 = (function (){var statearr_11340 = state_11320;
(statearr_11340[(13)] = inst_11288);

return statearr_11340;
})();
var statearr_11341_11368 = state_11320__$1;
(statearr_11341_11368[(2)] = inst_11289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11320__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11321 === (8))){
var inst_11302 = (state_11320[(2)]);
var state_11320__$1 = state_11320;
var statearr_11342_11369 = state_11320__$1;
(statearr_11342_11369[(2)] = inst_11302);

(statearr_11342_11369[(1)] = (5));


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
});})(c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9169__auto__,c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11346[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11346[(1)] = (1));

return statearr_11346;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11320){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object)){
var ex__9173__auto__ = e11347;
var statearr_11348_11370 = state_11320;
(statearr_11348_11370[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11371 = state_11320;
state_11320 = G__11371;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9283__auto__ = (function (){var statearr_11349 = f__9282__auto__.call(null);
(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11354);

return statearr_11349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11354,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11373 = [];
var len__7843__auto___11431 = arguments.length;
var i__7844__auto___11432 = (0);
while(true){
if((i__7844__auto___11432 < len__7843__auto___11431)){
args11373.push((arguments[i__7844__auto___11432]));

var G__11433 = (i__7844__auto___11432 + (1));
i__7844__auto___11432 = G__11433;
continue;
} else {
}
break;
}

var G__11375 = args11373.length;
switch (G__11375) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11373.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___11435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11435,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11435,out){
return (function (state_11407){
var state_val_11408 = (state_11407[(1)]);
if((state_val_11408 === (7))){
var inst_11387 = (state_11407[(7)]);
var inst_11386 = (state_11407[(8)]);
var inst_11386__$1 = (state_11407[(2)]);
var inst_11387__$1 = cljs.core.nth.call(null,inst_11386__$1,(0),null);
var inst_11388 = cljs.core.nth.call(null,inst_11386__$1,(1),null);
var inst_11389 = (inst_11387__$1 == null);
var state_11407__$1 = (function (){var statearr_11409 = state_11407;
(statearr_11409[(9)] = inst_11388);

(statearr_11409[(7)] = inst_11387__$1);

(statearr_11409[(8)] = inst_11386__$1);

return statearr_11409;
})();
if(cljs.core.truth_(inst_11389)){
var statearr_11410_11436 = state_11407__$1;
(statearr_11410_11436[(1)] = (8));

} else {
var statearr_11411_11437 = state_11407__$1;
(statearr_11411_11437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (1))){
var inst_11376 = cljs.core.vec.call(null,chs);
var inst_11377 = inst_11376;
var state_11407__$1 = (function (){var statearr_11412 = state_11407;
(statearr_11412[(10)] = inst_11377);

return statearr_11412;
})();
var statearr_11413_11438 = state_11407__$1;
(statearr_11413_11438[(2)] = null);

(statearr_11413_11438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (4))){
var inst_11377 = (state_11407[(10)]);
var state_11407__$1 = state_11407;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11407__$1,(7),inst_11377);
} else {
if((state_val_11408 === (6))){
var inst_11403 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
var statearr_11414_11439 = state_11407__$1;
(statearr_11414_11439[(2)] = inst_11403);

(statearr_11414_11439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (3))){
var inst_11405 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11407__$1,inst_11405);
} else {
if((state_val_11408 === (2))){
var inst_11377 = (state_11407[(10)]);
var inst_11379 = cljs.core.count.call(null,inst_11377);
var inst_11380 = (inst_11379 > (0));
var state_11407__$1 = state_11407;
if(cljs.core.truth_(inst_11380)){
var statearr_11416_11440 = state_11407__$1;
(statearr_11416_11440[(1)] = (4));

} else {
var statearr_11417_11441 = state_11407__$1;
(statearr_11417_11441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (11))){
var inst_11377 = (state_11407[(10)]);
var inst_11396 = (state_11407[(2)]);
var tmp11415 = inst_11377;
var inst_11377__$1 = tmp11415;
var state_11407__$1 = (function (){var statearr_11418 = state_11407;
(statearr_11418[(10)] = inst_11377__$1);

(statearr_11418[(11)] = inst_11396);

return statearr_11418;
})();
var statearr_11419_11442 = state_11407__$1;
(statearr_11419_11442[(2)] = null);

(statearr_11419_11442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (9))){
var inst_11387 = (state_11407[(7)]);
var state_11407__$1 = state_11407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11407__$1,(11),out,inst_11387);
} else {
if((state_val_11408 === (5))){
var inst_11401 = cljs.core.async.close_BANG_.call(null,out);
var state_11407__$1 = state_11407;
var statearr_11420_11443 = state_11407__$1;
(statearr_11420_11443[(2)] = inst_11401);

(statearr_11420_11443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (10))){
var inst_11399 = (state_11407[(2)]);
var state_11407__$1 = state_11407;
var statearr_11421_11444 = state_11407__$1;
(statearr_11421_11444[(2)] = inst_11399);

(statearr_11421_11444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11408 === (8))){
var inst_11377 = (state_11407[(10)]);
var inst_11388 = (state_11407[(9)]);
var inst_11387 = (state_11407[(7)]);
var inst_11386 = (state_11407[(8)]);
var inst_11391 = (function (){var cs = inst_11377;
var vec__11382 = inst_11386;
var v = inst_11387;
var c = inst_11388;
return ((function (cs,vec__11382,v,c,inst_11377,inst_11388,inst_11387,inst_11386,state_val_11408,c__9281__auto___11435,out){
return (function (p1__11372_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11372_SHARP_);
});
;})(cs,vec__11382,v,c,inst_11377,inst_11388,inst_11387,inst_11386,state_val_11408,c__9281__auto___11435,out))
})();
var inst_11392 = cljs.core.filterv.call(null,inst_11391,inst_11377);
var inst_11377__$1 = inst_11392;
var state_11407__$1 = (function (){var statearr_11422 = state_11407;
(statearr_11422[(10)] = inst_11377__$1);

return statearr_11422;
})();
var statearr_11423_11445 = state_11407__$1;
(statearr_11423_11445[(2)] = null);

(statearr_11423_11445[(1)] = (2));


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
});})(c__9281__auto___11435,out))
;
return ((function (switch__9169__auto__,c__9281__auto___11435,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11427[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11427[(1)] = (1));

return statearr_11427;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11407){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11428){if((e11428 instanceof Object)){
var ex__9173__auto__ = e11428;
var statearr_11429_11446 = state_11407;
(statearr_11429_11446[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11447 = state_11407;
state_11407 = G__11447;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11435,out))
})();
var state__9283__auto__ = (function (){var statearr_11430 = f__9282__auto__.call(null);
(statearr_11430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11435);

return statearr_11430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11435,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11448 = [];
var len__7843__auto___11497 = arguments.length;
var i__7844__auto___11498 = (0);
while(true){
if((i__7844__auto___11498 < len__7843__auto___11497)){
args11448.push((arguments[i__7844__auto___11498]));

var G__11499 = (i__7844__auto___11498 + (1));
i__7844__auto___11498 = G__11499;
continue;
} else {
}
break;
}

var G__11450 = args11448.length;
switch (G__11450) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11448.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___11501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11501,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11501,out){
return (function (state_11474){
var state_val_11475 = (state_11474[(1)]);
if((state_val_11475 === (7))){
var inst_11456 = (state_11474[(7)]);
var inst_11456__$1 = (state_11474[(2)]);
var inst_11457 = (inst_11456__$1 == null);
var inst_11458 = cljs.core.not.call(null,inst_11457);
var state_11474__$1 = (function (){var statearr_11476 = state_11474;
(statearr_11476[(7)] = inst_11456__$1);

return statearr_11476;
})();
if(inst_11458){
var statearr_11477_11502 = state_11474__$1;
(statearr_11477_11502[(1)] = (8));

} else {
var statearr_11478_11503 = state_11474__$1;
(statearr_11478_11503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (1))){
var inst_11451 = (0);
var state_11474__$1 = (function (){var statearr_11479 = state_11474;
(statearr_11479[(8)] = inst_11451);

return statearr_11479;
})();
var statearr_11480_11504 = state_11474__$1;
(statearr_11480_11504[(2)] = null);

(statearr_11480_11504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (4))){
var state_11474__$1 = state_11474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11474__$1,(7),ch);
} else {
if((state_val_11475 === (6))){
var inst_11469 = (state_11474[(2)]);
var state_11474__$1 = state_11474;
var statearr_11481_11505 = state_11474__$1;
(statearr_11481_11505[(2)] = inst_11469);

(statearr_11481_11505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (3))){
var inst_11471 = (state_11474[(2)]);
var inst_11472 = cljs.core.async.close_BANG_.call(null,out);
var state_11474__$1 = (function (){var statearr_11482 = state_11474;
(statearr_11482[(9)] = inst_11471);

return statearr_11482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11474__$1,inst_11472);
} else {
if((state_val_11475 === (2))){
var inst_11451 = (state_11474[(8)]);
var inst_11453 = (inst_11451 < n);
var state_11474__$1 = state_11474;
if(cljs.core.truth_(inst_11453)){
var statearr_11483_11506 = state_11474__$1;
(statearr_11483_11506[(1)] = (4));

} else {
var statearr_11484_11507 = state_11474__$1;
(statearr_11484_11507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (11))){
var inst_11451 = (state_11474[(8)]);
var inst_11461 = (state_11474[(2)]);
var inst_11462 = (inst_11451 + (1));
var inst_11451__$1 = inst_11462;
var state_11474__$1 = (function (){var statearr_11485 = state_11474;
(statearr_11485[(10)] = inst_11461);

(statearr_11485[(8)] = inst_11451__$1);

return statearr_11485;
})();
var statearr_11486_11508 = state_11474__$1;
(statearr_11486_11508[(2)] = null);

(statearr_11486_11508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (9))){
var state_11474__$1 = state_11474;
var statearr_11487_11509 = state_11474__$1;
(statearr_11487_11509[(2)] = null);

(statearr_11487_11509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (5))){
var state_11474__$1 = state_11474;
var statearr_11488_11510 = state_11474__$1;
(statearr_11488_11510[(2)] = null);

(statearr_11488_11510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (10))){
var inst_11466 = (state_11474[(2)]);
var state_11474__$1 = state_11474;
var statearr_11489_11511 = state_11474__$1;
(statearr_11489_11511[(2)] = inst_11466);

(statearr_11489_11511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11475 === (8))){
var inst_11456 = (state_11474[(7)]);
var state_11474__$1 = state_11474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11474__$1,(11),out,inst_11456);
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
});})(c__9281__auto___11501,out))
;
return ((function (switch__9169__auto__,c__9281__auto___11501,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11493[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11493[(1)] = (1));

return statearr_11493;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11474){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object)){
var ex__9173__auto__ = e11494;
var statearr_11495_11512 = state_11474;
(statearr_11495_11512[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11513 = state_11474;
state_11474 = G__11513;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11501,out))
})();
var state__9283__auto__ = (function (){var statearr_11496 = f__9282__auto__.call(null);
(statearr_11496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11501);

return statearr_11496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11501,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11521 = (function (f,ch,meta11522){
this.f = f;
this.ch = ch;
this.meta11522 = meta11522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11523,meta11522__$1){
var self__ = this;
var _11523__$1 = this;
return (new cljs.core.async.t_cljs$core$async11521(self__.f,self__.ch,meta11522__$1));
});

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11523){
var self__ = this;
var _11523__$1 = this;
return self__.meta11522;
});

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11524 = (function (f,ch,meta11522,_,fn1,meta11525){
this.f = f;
this.ch = ch;
this.meta11522 = meta11522;
this._ = _;
this.fn1 = fn1;
this.meta11525 = meta11525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11526,meta11525__$1){
var self__ = this;
var _11526__$1 = this;
return (new cljs.core.async.t_cljs$core$async11524(self__.f,self__.ch,self__.meta11522,self__._,self__.fn1,meta11525__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11526){
var self__ = this;
var _11526__$1 = this;
return self__.meta11525;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11514_SHARP_){
return f1.call(null,(((p1__11514_SHARP_ == null))?null:self__.f.call(null,p1__11514_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11522","meta11522",-927470346,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11521","cljs.core.async/t_cljs$core$async11521",541453018,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11525","meta11525",-146559941,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11524";

cljs.core.async.t_cljs$core$async11524.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async11524");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11524 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11524(f__$1,ch__$1,meta11522__$1,___$2,fn1__$1,meta11525){
return (new cljs.core.async.t_cljs$core$async11524(f__$1,ch__$1,meta11522__$1,___$2,fn1__$1,meta11525));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11524(self__.f,self__.ch,self__.meta11522,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6718__auto__ = ret;
if(cljs.core.truth_(and__6718__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6718__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11522","meta11522",-927470346,null)], null);
});

cljs.core.async.t_cljs$core$async11521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11521";

cljs.core.async.t_cljs$core$async11521.cljs$lang$ctorPrWriter = (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async11521");
});

cljs.core.async.__GT_t_cljs$core$async11521 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11521(f__$1,ch__$1,meta11522){
return (new cljs.core.async.t_cljs$core$async11521(f__$1,ch__$1,meta11522));
});

}

return (new cljs.core.async.t_cljs$core$async11521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11530 = (function (f,ch,meta11531){
this.f = f;
this.ch = ch;
this.meta11531 = meta11531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11532,meta11531__$1){
var self__ = this;
var _11532__$1 = this;
return (new cljs.core.async.t_cljs$core$async11530(self__.f,self__.ch,meta11531__$1));
});

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11532){
var self__ = this;
var _11532__$1 = this;
return self__.meta11531;
});

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11531","meta11531",856556692,null)], null);
});

cljs.core.async.t_cljs$core$async11530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11530";

cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorPrWriter = (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async11530");
});

cljs.core.async.__GT_t_cljs$core$async11530 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11530(f__$1,ch__$1,meta11531){
return (new cljs.core.async.t_cljs$core$async11530(f__$1,ch__$1,meta11531));
});

}

return (new cljs.core.async.t_cljs$core$async11530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11536 = (function (p,ch,meta11537){
this.p = p;
this.ch = ch;
this.meta11537 = meta11537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11538,meta11537__$1){
var self__ = this;
var _11538__$1 = this;
return (new cljs.core.async.t_cljs$core$async11536(self__.p,self__.ch,meta11537__$1));
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11538){
var self__ = this;
var _11538__$1 = this;
return self__.meta11537;
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11537","meta11537",-217105377,null)], null);
});

cljs.core.async.t_cljs$core$async11536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11536";

cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorPrWriter = (function (this__7341__auto__,writer__7342__auto__,opt__7343__auto__){
return cljs.core._write.call(null,writer__7342__auto__,"cljs.core.async/t_cljs$core$async11536");
});

cljs.core.async.__GT_t_cljs$core$async11536 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11536(p__$1,ch__$1,meta11537){
return (new cljs.core.async.t_cljs$core$async11536(p__$1,ch__$1,meta11537));
});

}

return (new cljs.core.async.t_cljs$core$async11536(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11539 = [];
var len__7843__auto___11583 = arguments.length;
var i__7844__auto___11584 = (0);
while(true){
if((i__7844__auto___11584 < len__7843__auto___11583)){
args11539.push((arguments[i__7844__auto___11584]));

var G__11585 = (i__7844__auto___11584 + (1));
i__7844__auto___11584 = G__11585;
continue;
} else {
}
break;
}

var G__11541 = args11539.length;
switch (G__11541) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11539.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___11587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11587,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11587,out){
return (function (state_11562){
var state_val_11563 = (state_11562[(1)]);
if((state_val_11563 === (7))){
var inst_11558 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
var statearr_11564_11588 = state_11562__$1;
(statearr_11564_11588[(2)] = inst_11558);

(statearr_11564_11588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (1))){
var state_11562__$1 = state_11562;
var statearr_11565_11589 = state_11562__$1;
(statearr_11565_11589[(2)] = null);

(statearr_11565_11589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (4))){
var inst_11544 = (state_11562[(7)]);
var inst_11544__$1 = (state_11562[(2)]);
var inst_11545 = (inst_11544__$1 == null);
var state_11562__$1 = (function (){var statearr_11566 = state_11562;
(statearr_11566[(7)] = inst_11544__$1);

return statearr_11566;
})();
if(cljs.core.truth_(inst_11545)){
var statearr_11567_11590 = state_11562__$1;
(statearr_11567_11590[(1)] = (5));

} else {
var statearr_11568_11591 = state_11562__$1;
(statearr_11568_11591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (6))){
var inst_11544 = (state_11562[(7)]);
var inst_11549 = p.call(null,inst_11544);
var state_11562__$1 = state_11562;
if(cljs.core.truth_(inst_11549)){
var statearr_11569_11592 = state_11562__$1;
(statearr_11569_11592[(1)] = (8));

} else {
var statearr_11570_11593 = state_11562__$1;
(statearr_11570_11593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (3))){
var inst_11560 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11562__$1,inst_11560);
} else {
if((state_val_11563 === (2))){
var state_11562__$1 = state_11562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11562__$1,(4),ch);
} else {
if((state_val_11563 === (11))){
var inst_11552 = (state_11562[(2)]);
var state_11562__$1 = state_11562;
var statearr_11571_11594 = state_11562__$1;
(statearr_11571_11594[(2)] = inst_11552);

(statearr_11571_11594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (9))){
var state_11562__$1 = state_11562;
var statearr_11572_11595 = state_11562__$1;
(statearr_11572_11595[(2)] = null);

(statearr_11572_11595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (5))){
var inst_11547 = cljs.core.async.close_BANG_.call(null,out);
var state_11562__$1 = state_11562;
var statearr_11573_11596 = state_11562__$1;
(statearr_11573_11596[(2)] = inst_11547);

(statearr_11573_11596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (10))){
var inst_11555 = (state_11562[(2)]);
var state_11562__$1 = (function (){var statearr_11574 = state_11562;
(statearr_11574[(8)] = inst_11555);

return statearr_11574;
})();
var statearr_11575_11597 = state_11562__$1;
(statearr_11575_11597[(2)] = null);

(statearr_11575_11597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11563 === (8))){
var inst_11544 = (state_11562[(7)]);
var state_11562__$1 = state_11562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11562__$1,(11),out,inst_11544);
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
});})(c__9281__auto___11587,out))
;
return ((function (switch__9169__auto__,c__9281__auto___11587,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11579 = [null,null,null,null,null,null,null,null,null];
(statearr_11579[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11579[(1)] = (1));

return statearr_11579;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11562){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11580){if((e11580 instanceof Object)){
var ex__9173__auto__ = e11580;
var statearr_11581_11598 = state_11562;
(statearr_11581_11598[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11599 = state_11562;
state_11562 = G__11599;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11587,out))
})();
var state__9283__auto__ = (function (){var statearr_11582 = f__9282__auto__.call(null);
(statearr_11582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11587);

return statearr_11582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11587,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11600 = [];
var len__7843__auto___11603 = arguments.length;
var i__7844__auto___11604 = (0);
while(true){
if((i__7844__auto___11604 < len__7843__auto___11603)){
args11600.push((arguments[i__7844__auto___11604]));

var G__11605 = (i__7844__auto___11604 + (1));
i__7844__auto___11604 = G__11605;
continue;
} else {
}
break;
}

var G__11602 = args11600.length;
switch (G__11602) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11600.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto__){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto__){
return (function (state_11772){
var state_val_11773 = (state_11772[(1)]);
if((state_val_11773 === (7))){
var inst_11768 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
var statearr_11774_11815 = state_11772__$1;
(statearr_11774_11815[(2)] = inst_11768);

(statearr_11774_11815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (20))){
var inst_11738 = (state_11772[(7)]);
var inst_11749 = (state_11772[(2)]);
var inst_11750 = cljs.core.next.call(null,inst_11738);
var inst_11724 = inst_11750;
var inst_11725 = null;
var inst_11726 = (0);
var inst_11727 = (0);
var state_11772__$1 = (function (){var statearr_11775 = state_11772;
(statearr_11775[(8)] = inst_11725);

(statearr_11775[(9)] = inst_11749);

(statearr_11775[(10)] = inst_11726);

(statearr_11775[(11)] = inst_11727);

(statearr_11775[(12)] = inst_11724);

return statearr_11775;
})();
var statearr_11776_11816 = state_11772__$1;
(statearr_11776_11816[(2)] = null);

(statearr_11776_11816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (1))){
var state_11772__$1 = state_11772;
var statearr_11777_11817 = state_11772__$1;
(statearr_11777_11817[(2)] = null);

(statearr_11777_11817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (4))){
var inst_11713 = (state_11772[(13)]);
var inst_11713__$1 = (state_11772[(2)]);
var inst_11714 = (inst_11713__$1 == null);
var state_11772__$1 = (function (){var statearr_11778 = state_11772;
(statearr_11778[(13)] = inst_11713__$1);

return statearr_11778;
})();
if(cljs.core.truth_(inst_11714)){
var statearr_11779_11818 = state_11772__$1;
(statearr_11779_11818[(1)] = (5));

} else {
var statearr_11780_11819 = state_11772__$1;
(statearr_11780_11819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (15))){
var state_11772__$1 = state_11772;
var statearr_11784_11820 = state_11772__$1;
(statearr_11784_11820[(2)] = null);

(statearr_11784_11820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (21))){
var state_11772__$1 = state_11772;
var statearr_11785_11821 = state_11772__$1;
(statearr_11785_11821[(2)] = null);

(statearr_11785_11821[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (13))){
var inst_11725 = (state_11772[(8)]);
var inst_11726 = (state_11772[(10)]);
var inst_11727 = (state_11772[(11)]);
var inst_11724 = (state_11772[(12)]);
var inst_11734 = (state_11772[(2)]);
var inst_11735 = (inst_11727 + (1));
var tmp11781 = inst_11725;
var tmp11782 = inst_11726;
var tmp11783 = inst_11724;
var inst_11724__$1 = tmp11783;
var inst_11725__$1 = tmp11781;
var inst_11726__$1 = tmp11782;
var inst_11727__$1 = inst_11735;
var state_11772__$1 = (function (){var statearr_11786 = state_11772;
(statearr_11786[(8)] = inst_11725__$1);

(statearr_11786[(10)] = inst_11726__$1);

(statearr_11786[(11)] = inst_11727__$1);

(statearr_11786[(14)] = inst_11734);

(statearr_11786[(12)] = inst_11724__$1);

return statearr_11786;
})();
var statearr_11787_11822 = state_11772__$1;
(statearr_11787_11822[(2)] = null);

(statearr_11787_11822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (22))){
var state_11772__$1 = state_11772;
var statearr_11788_11823 = state_11772__$1;
(statearr_11788_11823[(2)] = null);

(statearr_11788_11823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (6))){
var inst_11713 = (state_11772[(13)]);
var inst_11722 = f.call(null,inst_11713);
var inst_11723 = cljs.core.seq.call(null,inst_11722);
var inst_11724 = inst_11723;
var inst_11725 = null;
var inst_11726 = (0);
var inst_11727 = (0);
var state_11772__$1 = (function (){var statearr_11789 = state_11772;
(statearr_11789[(8)] = inst_11725);

(statearr_11789[(10)] = inst_11726);

(statearr_11789[(11)] = inst_11727);

(statearr_11789[(12)] = inst_11724);

return statearr_11789;
})();
var statearr_11790_11824 = state_11772__$1;
(statearr_11790_11824[(2)] = null);

(statearr_11790_11824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (17))){
var inst_11738 = (state_11772[(7)]);
var inst_11742 = cljs.core.chunk_first.call(null,inst_11738);
var inst_11743 = cljs.core.chunk_rest.call(null,inst_11738);
var inst_11744 = cljs.core.count.call(null,inst_11742);
var inst_11724 = inst_11743;
var inst_11725 = inst_11742;
var inst_11726 = inst_11744;
var inst_11727 = (0);
var state_11772__$1 = (function (){var statearr_11791 = state_11772;
(statearr_11791[(8)] = inst_11725);

(statearr_11791[(10)] = inst_11726);

(statearr_11791[(11)] = inst_11727);

(statearr_11791[(12)] = inst_11724);

return statearr_11791;
})();
var statearr_11792_11825 = state_11772__$1;
(statearr_11792_11825[(2)] = null);

(statearr_11792_11825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (3))){
var inst_11770 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11772__$1,inst_11770);
} else {
if((state_val_11773 === (12))){
var inst_11758 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
var statearr_11793_11826 = state_11772__$1;
(statearr_11793_11826[(2)] = inst_11758);

(statearr_11793_11826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (2))){
var state_11772__$1 = state_11772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11772__$1,(4),in$);
} else {
if((state_val_11773 === (23))){
var inst_11766 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
var statearr_11794_11827 = state_11772__$1;
(statearr_11794_11827[(2)] = inst_11766);

(statearr_11794_11827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (19))){
var inst_11753 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
var statearr_11795_11828 = state_11772__$1;
(statearr_11795_11828[(2)] = inst_11753);

(statearr_11795_11828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (11))){
var inst_11738 = (state_11772[(7)]);
var inst_11724 = (state_11772[(12)]);
var inst_11738__$1 = cljs.core.seq.call(null,inst_11724);
var state_11772__$1 = (function (){var statearr_11796 = state_11772;
(statearr_11796[(7)] = inst_11738__$1);

return statearr_11796;
})();
if(inst_11738__$1){
var statearr_11797_11829 = state_11772__$1;
(statearr_11797_11829[(1)] = (14));

} else {
var statearr_11798_11830 = state_11772__$1;
(statearr_11798_11830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (9))){
var inst_11760 = (state_11772[(2)]);
var inst_11761 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11772__$1 = (function (){var statearr_11799 = state_11772;
(statearr_11799[(15)] = inst_11760);

return statearr_11799;
})();
if(cljs.core.truth_(inst_11761)){
var statearr_11800_11831 = state_11772__$1;
(statearr_11800_11831[(1)] = (21));

} else {
var statearr_11801_11832 = state_11772__$1;
(statearr_11801_11832[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (5))){
var inst_11716 = cljs.core.async.close_BANG_.call(null,out);
var state_11772__$1 = state_11772;
var statearr_11802_11833 = state_11772__$1;
(statearr_11802_11833[(2)] = inst_11716);

(statearr_11802_11833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (14))){
var inst_11738 = (state_11772[(7)]);
var inst_11740 = cljs.core.chunked_seq_QMARK_.call(null,inst_11738);
var state_11772__$1 = state_11772;
if(inst_11740){
var statearr_11803_11834 = state_11772__$1;
(statearr_11803_11834[(1)] = (17));

} else {
var statearr_11804_11835 = state_11772__$1;
(statearr_11804_11835[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (16))){
var inst_11756 = (state_11772[(2)]);
var state_11772__$1 = state_11772;
var statearr_11805_11836 = state_11772__$1;
(statearr_11805_11836[(2)] = inst_11756);

(statearr_11805_11836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11773 === (10))){
var inst_11725 = (state_11772[(8)]);
var inst_11727 = (state_11772[(11)]);
var inst_11732 = cljs.core._nth.call(null,inst_11725,inst_11727);
var state_11772__$1 = state_11772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11772__$1,(13),out,inst_11732);
} else {
if((state_val_11773 === (18))){
var inst_11738 = (state_11772[(7)]);
var inst_11747 = cljs.core.first.call(null,inst_11738);
var state_11772__$1 = state_11772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11772__$1,(20),out,inst_11747);
} else {
if((state_val_11773 === (8))){
var inst_11726 = (state_11772[(10)]);
var inst_11727 = (state_11772[(11)]);
var inst_11729 = (inst_11727 < inst_11726);
var inst_11730 = inst_11729;
var state_11772__$1 = state_11772;
if(cljs.core.truth_(inst_11730)){
var statearr_11806_11837 = state_11772__$1;
(statearr_11806_11837[(1)] = (10));

} else {
var statearr_11807_11838 = state_11772__$1;
(statearr_11807_11838[(1)] = (11));

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
});})(c__9281__auto__))
;
return ((function (switch__9169__auto__,c__9281__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____0 = (function (){
var statearr_11811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11811[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__);

(statearr_11811[(1)] = (1));

return statearr_11811;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____1 = (function (state_11772){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11812){if((e11812 instanceof Object)){
var ex__9173__auto__ = e11812;
var statearr_11813_11839 = state_11772;
(statearr_11813_11839[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11840 = state_11772;
state_11772 = G__11840;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__ = function(state_11772){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____1.call(this,state_11772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9170__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto__))
})();
var state__9283__auto__ = (function (){var statearr_11814 = f__9282__auto__.call(null);
(statearr_11814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto__);

return statearr_11814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto__))
);

return c__9281__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11841 = [];
var len__7843__auto___11844 = arguments.length;
var i__7844__auto___11845 = (0);
while(true){
if((i__7844__auto___11845 < len__7843__auto___11844)){
args11841.push((arguments[i__7844__auto___11845]));

var G__11846 = (i__7844__auto___11845 + (1));
i__7844__auto___11845 = G__11846;
continue;
} else {
}
break;
}

var G__11843 = args11841.length;
switch (G__11843) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11841.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11848 = [];
var len__7843__auto___11851 = arguments.length;
var i__7844__auto___11852 = (0);
while(true){
if((i__7844__auto___11852 < len__7843__auto___11851)){
args11848.push((arguments[i__7844__auto___11852]));

var G__11853 = (i__7844__auto___11852 + (1));
i__7844__auto___11852 = G__11853;
continue;
} else {
}
break;
}

var G__11850 = args11848.length;
switch (G__11850) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11848.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11855 = [];
var len__7843__auto___11906 = arguments.length;
var i__7844__auto___11907 = (0);
while(true){
if((i__7844__auto___11907 < len__7843__auto___11906)){
args11855.push((arguments[i__7844__auto___11907]));

var G__11908 = (i__7844__auto___11907 + (1));
i__7844__auto___11907 = G__11908;
continue;
} else {
}
break;
}

var G__11857 = args11855.length;
switch (G__11857) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11855.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___11910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11910,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11910,out){
return (function (state_11881){
var state_val_11882 = (state_11881[(1)]);
if((state_val_11882 === (7))){
var inst_11876 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11883_11911 = state_11881__$1;
(statearr_11883_11911[(2)] = inst_11876);

(statearr_11883_11911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (1))){
var inst_11858 = null;
var state_11881__$1 = (function (){var statearr_11884 = state_11881;
(statearr_11884[(7)] = inst_11858);

return statearr_11884;
})();
var statearr_11885_11912 = state_11881__$1;
(statearr_11885_11912[(2)] = null);

(statearr_11885_11912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (4))){
var inst_11861 = (state_11881[(8)]);
var inst_11861__$1 = (state_11881[(2)]);
var inst_11862 = (inst_11861__$1 == null);
var inst_11863 = cljs.core.not.call(null,inst_11862);
var state_11881__$1 = (function (){var statearr_11886 = state_11881;
(statearr_11886[(8)] = inst_11861__$1);

return statearr_11886;
})();
if(inst_11863){
var statearr_11887_11913 = state_11881__$1;
(statearr_11887_11913[(1)] = (5));

} else {
var statearr_11888_11914 = state_11881__$1;
(statearr_11888_11914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (6))){
var state_11881__$1 = state_11881;
var statearr_11889_11915 = state_11881__$1;
(statearr_11889_11915[(2)] = null);

(statearr_11889_11915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (3))){
var inst_11878 = (state_11881[(2)]);
var inst_11879 = cljs.core.async.close_BANG_.call(null,out);
var state_11881__$1 = (function (){var statearr_11890 = state_11881;
(statearr_11890[(9)] = inst_11878);

return statearr_11890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11881__$1,inst_11879);
} else {
if((state_val_11882 === (2))){
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11881__$1,(4),ch);
} else {
if((state_val_11882 === (11))){
var inst_11861 = (state_11881[(8)]);
var inst_11870 = (state_11881[(2)]);
var inst_11858 = inst_11861;
var state_11881__$1 = (function (){var statearr_11891 = state_11881;
(statearr_11891[(10)] = inst_11870);

(statearr_11891[(7)] = inst_11858);

return statearr_11891;
})();
var statearr_11892_11916 = state_11881__$1;
(statearr_11892_11916[(2)] = null);

(statearr_11892_11916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (9))){
var inst_11861 = (state_11881[(8)]);
var state_11881__$1 = state_11881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11881__$1,(11),out,inst_11861);
} else {
if((state_val_11882 === (5))){
var inst_11858 = (state_11881[(7)]);
var inst_11861 = (state_11881[(8)]);
var inst_11865 = cljs.core._EQ_.call(null,inst_11861,inst_11858);
var state_11881__$1 = state_11881;
if(inst_11865){
var statearr_11894_11917 = state_11881__$1;
(statearr_11894_11917[(1)] = (8));

} else {
var statearr_11895_11918 = state_11881__$1;
(statearr_11895_11918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (10))){
var inst_11873 = (state_11881[(2)]);
var state_11881__$1 = state_11881;
var statearr_11896_11919 = state_11881__$1;
(statearr_11896_11919[(2)] = inst_11873);

(statearr_11896_11919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11882 === (8))){
var inst_11858 = (state_11881[(7)]);
var tmp11893 = inst_11858;
var inst_11858__$1 = tmp11893;
var state_11881__$1 = (function (){var statearr_11897 = state_11881;
(statearr_11897[(7)] = inst_11858__$1);

return statearr_11897;
})();
var statearr_11898_11920 = state_11881__$1;
(statearr_11898_11920[(2)] = null);

(statearr_11898_11920[(1)] = (2));


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
});})(c__9281__auto___11910,out))
;
return ((function (switch__9169__auto__,c__9281__auto___11910,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11902[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11902[(1)] = (1));

return statearr_11902;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11881){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11903){if((e11903 instanceof Object)){
var ex__9173__auto__ = e11903;
var statearr_11904_11921 = state_11881;
(statearr_11904_11921[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11922 = state_11881;
state_11881 = G__11922;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11910,out))
})();
var state__9283__auto__ = (function (){var statearr_11905 = f__9282__auto__.call(null);
(statearr_11905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11910);

return statearr_11905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11910,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11923 = [];
var len__7843__auto___11993 = arguments.length;
var i__7844__auto___11994 = (0);
while(true){
if((i__7844__auto___11994 < len__7843__auto___11993)){
args11923.push((arguments[i__7844__auto___11994]));

var G__11995 = (i__7844__auto___11994 + (1));
i__7844__auto___11994 = G__11995;
continue;
} else {
}
break;
}

var G__11925 = args11923.length;
switch (G__11925) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11923.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___11997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___11997,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___11997,out){
return (function (state_11963){
var state_val_11964 = (state_11963[(1)]);
if((state_val_11964 === (7))){
var inst_11959 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_11965_11998 = state_11963__$1;
(statearr_11965_11998[(2)] = inst_11959);

(statearr_11965_11998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (1))){
var inst_11926 = (new Array(n));
var inst_11927 = inst_11926;
var inst_11928 = (0);
var state_11963__$1 = (function (){var statearr_11966 = state_11963;
(statearr_11966[(7)] = inst_11928);

(statearr_11966[(8)] = inst_11927);

return statearr_11966;
})();
var statearr_11967_11999 = state_11963__$1;
(statearr_11967_11999[(2)] = null);

(statearr_11967_11999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (4))){
var inst_11931 = (state_11963[(9)]);
var inst_11931__$1 = (state_11963[(2)]);
var inst_11932 = (inst_11931__$1 == null);
var inst_11933 = cljs.core.not.call(null,inst_11932);
var state_11963__$1 = (function (){var statearr_11968 = state_11963;
(statearr_11968[(9)] = inst_11931__$1);

return statearr_11968;
})();
if(inst_11933){
var statearr_11969_12000 = state_11963__$1;
(statearr_11969_12000[(1)] = (5));

} else {
var statearr_11970_12001 = state_11963__$1;
(statearr_11970_12001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (15))){
var inst_11953 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_11971_12002 = state_11963__$1;
(statearr_11971_12002[(2)] = inst_11953);

(statearr_11971_12002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (13))){
var state_11963__$1 = state_11963;
var statearr_11972_12003 = state_11963__$1;
(statearr_11972_12003[(2)] = null);

(statearr_11972_12003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (6))){
var inst_11928 = (state_11963[(7)]);
var inst_11949 = (inst_11928 > (0));
var state_11963__$1 = state_11963;
if(cljs.core.truth_(inst_11949)){
var statearr_11973_12004 = state_11963__$1;
(statearr_11973_12004[(1)] = (12));

} else {
var statearr_11974_12005 = state_11963__$1;
(statearr_11974_12005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (3))){
var inst_11961 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11963__$1,inst_11961);
} else {
if((state_val_11964 === (12))){
var inst_11927 = (state_11963[(8)]);
var inst_11951 = cljs.core.vec.call(null,inst_11927);
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11963__$1,(15),out,inst_11951);
} else {
if((state_val_11964 === (2))){
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11963__$1,(4),ch);
} else {
if((state_val_11964 === (11))){
var inst_11943 = (state_11963[(2)]);
var inst_11944 = (new Array(n));
var inst_11927 = inst_11944;
var inst_11928 = (0);
var state_11963__$1 = (function (){var statearr_11975 = state_11963;
(statearr_11975[(7)] = inst_11928);

(statearr_11975[(10)] = inst_11943);

(statearr_11975[(8)] = inst_11927);

return statearr_11975;
})();
var statearr_11976_12006 = state_11963__$1;
(statearr_11976_12006[(2)] = null);

(statearr_11976_12006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (9))){
var inst_11927 = (state_11963[(8)]);
var inst_11941 = cljs.core.vec.call(null,inst_11927);
var state_11963__$1 = state_11963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11963__$1,(11),out,inst_11941);
} else {
if((state_val_11964 === (5))){
var inst_11936 = (state_11963[(11)]);
var inst_11928 = (state_11963[(7)]);
var inst_11927 = (state_11963[(8)]);
var inst_11931 = (state_11963[(9)]);
var inst_11935 = (inst_11927[inst_11928] = inst_11931);
var inst_11936__$1 = (inst_11928 + (1));
var inst_11937 = (inst_11936__$1 < n);
var state_11963__$1 = (function (){var statearr_11977 = state_11963;
(statearr_11977[(11)] = inst_11936__$1);

(statearr_11977[(12)] = inst_11935);

return statearr_11977;
})();
if(cljs.core.truth_(inst_11937)){
var statearr_11978_12007 = state_11963__$1;
(statearr_11978_12007[(1)] = (8));

} else {
var statearr_11979_12008 = state_11963__$1;
(statearr_11979_12008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (14))){
var inst_11956 = (state_11963[(2)]);
var inst_11957 = cljs.core.async.close_BANG_.call(null,out);
var state_11963__$1 = (function (){var statearr_11981 = state_11963;
(statearr_11981[(13)] = inst_11956);

return statearr_11981;
})();
var statearr_11982_12009 = state_11963__$1;
(statearr_11982_12009[(2)] = inst_11957);

(statearr_11982_12009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (10))){
var inst_11947 = (state_11963[(2)]);
var state_11963__$1 = state_11963;
var statearr_11983_12010 = state_11963__$1;
(statearr_11983_12010[(2)] = inst_11947);

(statearr_11983_12010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11964 === (8))){
var inst_11936 = (state_11963[(11)]);
var inst_11927 = (state_11963[(8)]);
var tmp11980 = inst_11927;
var inst_11927__$1 = tmp11980;
var inst_11928 = inst_11936;
var state_11963__$1 = (function (){var statearr_11984 = state_11963;
(statearr_11984[(7)] = inst_11928);

(statearr_11984[(8)] = inst_11927__$1);

return statearr_11984;
})();
var statearr_11985_12011 = state_11963__$1;
(statearr_11985_12011[(2)] = null);

(statearr_11985_12011[(1)] = (2));


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
});})(c__9281__auto___11997,out))
;
return ((function (switch__9169__auto__,c__9281__auto___11997,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_11989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11989[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_11989[(1)] = (1));

return statearr_11989;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_11963){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_11963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e11990){if((e11990 instanceof Object)){
var ex__9173__auto__ = e11990;
var statearr_11991_12012 = state_11963;
(statearr_11991_12012[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12013 = state_11963;
state_11963 = G__12013;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_11963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_11963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___11997,out))
})();
var state__9283__auto__ = (function (){var statearr_11992 = f__9282__auto__.call(null);
(statearr_11992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___11997);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___11997,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12014 = [];
var len__7843__auto___12088 = arguments.length;
var i__7844__auto___12089 = (0);
while(true){
if((i__7844__auto___12089 < len__7843__auto___12088)){
args12014.push((arguments[i__7844__auto___12089]));

var G__12090 = (i__7844__auto___12089 + (1));
i__7844__auto___12089 = G__12090;
continue;
} else {
}
break;
}

var G__12016 = args12014.length;
switch (G__12016) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12014.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9281__auto___12092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9281__auto___12092,out){
return (function (){
var f__9282__auto__ = (function (){var switch__9169__auto__ = ((function (c__9281__auto___12092,out){
return (function (state_12058){
var state_val_12059 = (state_12058[(1)]);
if((state_val_12059 === (7))){
var inst_12054 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12060_12093 = state_12058__$1;
(statearr_12060_12093[(2)] = inst_12054);

(statearr_12060_12093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (1))){
var inst_12017 = [];
var inst_12018 = inst_12017;
var inst_12019 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12058__$1 = (function (){var statearr_12061 = state_12058;
(statearr_12061[(7)] = inst_12018);

(statearr_12061[(8)] = inst_12019);

return statearr_12061;
})();
var statearr_12062_12094 = state_12058__$1;
(statearr_12062_12094[(2)] = null);

(statearr_12062_12094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (4))){
var inst_12022 = (state_12058[(9)]);
var inst_12022__$1 = (state_12058[(2)]);
var inst_12023 = (inst_12022__$1 == null);
var inst_12024 = cljs.core.not.call(null,inst_12023);
var state_12058__$1 = (function (){var statearr_12063 = state_12058;
(statearr_12063[(9)] = inst_12022__$1);

return statearr_12063;
})();
if(inst_12024){
var statearr_12064_12095 = state_12058__$1;
(statearr_12064_12095[(1)] = (5));

} else {
var statearr_12065_12096 = state_12058__$1;
(statearr_12065_12096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (15))){
var inst_12048 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12066_12097 = state_12058__$1;
(statearr_12066_12097[(2)] = inst_12048);

(statearr_12066_12097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (13))){
var state_12058__$1 = state_12058;
var statearr_12067_12098 = state_12058__$1;
(statearr_12067_12098[(2)] = null);

(statearr_12067_12098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (6))){
var inst_12018 = (state_12058[(7)]);
var inst_12043 = inst_12018.length;
var inst_12044 = (inst_12043 > (0));
var state_12058__$1 = state_12058;
if(cljs.core.truth_(inst_12044)){
var statearr_12068_12099 = state_12058__$1;
(statearr_12068_12099[(1)] = (12));

} else {
var statearr_12069_12100 = state_12058__$1;
(statearr_12069_12100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (3))){
var inst_12056 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12058__$1,inst_12056);
} else {
if((state_val_12059 === (12))){
var inst_12018 = (state_12058[(7)]);
var inst_12046 = cljs.core.vec.call(null,inst_12018);
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12058__$1,(15),out,inst_12046);
} else {
if((state_val_12059 === (2))){
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12058__$1,(4),ch);
} else {
if((state_val_12059 === (11))){
var inst_12026 = (state_12058[(10)]);
var inst_12022 = (state_12058[(9)]);
var inst_12036 = (state_12058[(2)]);
var inst_12037 = [];
var inst_12038 = inst_12037.push(inst_12022);
var inst_12018 = inst_12037;
var inst_12019 = inst_12026;
var state_12058__$1 = (function (){var statearr_12070 = state_12058;
(statearr_12070[(7)] = inst_12018);

(statearr_12070[(11)] = inst_12036);

(statearr_12070[(12)] = inst_12038);

(statearr_12070[(8)] = inst_12019);

return statearr_12070;
})();
var statearr_12071_12101 = state_12058__$1;
(statearr_12071_12101[(2)] = null);

(statearr_12071_12101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (9))){
var inst_12018 = (state_12058[(7)]);
var inst_12034 = cljs.core.vec.call(null,inst_12018);
var state_12058__$1 = state_12058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12058__$1,(11),out,inst_12034);
} else {
if((state_val_12059 === (5))){
var inst_12026 = (state_12058[(10)]);
var inst_12022 = (state_12058[(9)]);
var inst_12019 = (state_12058[(8)]);
var inst_12026__$1 = f.call(null,inst_12022);
var inst_12027 = cljs.core._EQ_.call(null,inst_12026__$1,inst_12019);
var inst_12028 = cljs.core.keyword_identical_QMARK_.call(null,inst_12019,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12029 = (inst_12027) || (inst_12028);
var state_12058__$1 = (function (){var statearr_12072 = state_12058;
(statearr_12072[(10)] = inst_12026__$1);

return statearr_12072;
})();
if(cljs.core.truth_(inst_12029)){
var statearr_12073_12102 = state_12058__$1;
(statearr_12073_12102[(1)] = (8));

} else {
var statearr_12074_12103 = state_12058__$1;
(statearr_12074_12103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (14))){
var inst_12051 = (state_12058[(2)]);
var inst_12052 = cljs.core.async.close_BANG_.call(null,out);
var state_12058__$1 = (function (){var statearr_12076 = state_12058;
(statearr_12076[(13)] = inst_12051);

return statearr_12076;
})();
var statearr_12077_12104 = state_12058__$1;
(statearr_12077_12104[(2)] = inst_12052);

(statearr_12077_12104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (10))){
var inst_12041 = (state_12058[(2)]);
var state_12058__$1 = state_12058;
var statearr_12078_12105 = state_12058__$1;
(statearr_12078_12105[(2)] = inst_12041);

(statearr_12078_12105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12059 === (8))){
var inst_12018 = (state_12058[(7)]);
var inst_12026 = (state_12058[(10)]);
var inst_12022 = (state_12058[(9)]);
var inst_12031 = inst_12018.push(inst_12022);
var tmp12075 = inst_12018;
var inst_12018__$1 = tmp12075;
var inst_12019 = inst_12026;
var state_12058__$1 = (function (){var statearr_12079 = state_12058;
(statearr_12079[(7)] = inst_12018__$1);

(statearr_12079[(14)] = inst_12031);

(statearr_12079[(8)] = inst_12019);

return statearr_12079;
})();
var statearr_12080_12106 = state_12058__$1;
(statearr_12080_12106[(2)] = null);

(statearr_12080_12106[(1)] = (2));


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
});})(c__9281__auto___12092,out))
;
return ((function (switch__9169__auto__,c__9281__auto___12092,out){
return (function() {
var cljs$core$async$state_machine__9170__auto__ = null;
var cljs$core$async$state_machine__9170__auto____0 = (function (){
var statearr_12084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12084[(0)] = cljs$core$async$state_machine__9170__auto__);

(statearr_12084[(1)] = (1));

return statearr_12084;
});
var cljs$core$async$state_machine__9170__auto____1 = (function (state_12058){
while(true){
var ret_value__9171__auto__ = (function (){try{while(true){
var result__9172__auto__ = switch__9169__auto__.call(null,state_12058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9172__auto__;
}
break;
}
}catch (e12085){if((e12085 instanceof Object)){
var ex__9173__auto__ = e12085;
var statearr_12086_12107 = state_12058;
(statearr_12086_12107[(5)] = ex__9173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12108 = state_12058;
state_12058 = G__12108;
continue;
} else {
return ret_value__9171__auto__;
}
break;
}
});
cljs$core$async$state_machine__9170__auto__ = function(state_12058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9170__auto____1.call(this,state_12058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9170__auto____0;
cljs$core$async$state_machine__9170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9170__auto____1;
return cljs$core$async$state_machine__9170__auto__;
})()
;})(switch__9169__auto__,c__9281__auto___12092,out))
})();
var state__9283__auto__ = (function (){var statearr_12087 = f__9282__auto__.call(null);
(statearr_12087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9281__auto___12092);

return statearr_12087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9283__auto__);
});})(c__9281__auto___12092,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map