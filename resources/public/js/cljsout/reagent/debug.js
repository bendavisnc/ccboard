// Compiled by ClojureScript 1.9.494 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8016__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8017__i = 0, G__8017__a = new Array(arguments.length -  0);
while (G__8017__i < G__8017__a.length) {G__8017__a[G__8017__i] = arguments[G__8017__i + 0]; ++G__8017__i;}
  args = new cljs.core.IndexedSeq(G__8017__a,0);
} 
return G__8016__delegate.call(this,args);};
G__8016.cljs$lang$maxFixedArity = 0;
G__8016.cljs$lang$applyTo = (function (arglist__8018){
var args = cljs.core.seq(arglist__8018);
return G__8016__delegate(args);
});
G__8016.cljs$core$IFn$_invoke$arity$variadic = G__8016__delegate;
return G__8016;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8019__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8020__i = 0, G__8020__a = new Array(arguments.length -  0);
while (G__8020__i < G__8020__a.length) {G__8020__a[G__8020__i] = arguments[G__8020__i + 0]; ++G__8020__i;}
  args = new cljs.core.IndexedSeq(G__8020__a,0);
} 
return G__8019__delegate.call(this,args);};
G__8019.cljs$lang$maxFixedArity = 0;
G__8019.cljs$lang$applyTo = (function (arglist__8021){
var args = cljs.core.seq(arglist__8021);
return G__8019__delegate(args);
});
G__8019.cljs$core$IFn$_invoke$arity$variadic = G__8019__delegate;
return G__8019;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map