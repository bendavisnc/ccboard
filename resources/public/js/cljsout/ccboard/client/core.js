// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('ccboard.client.model.coord');
ccboard.client.core.only_pos_atom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null));
ccboard.client.core.test_handler = (function ccboard$client$core$test_handler(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8803 = arguments.length;
var i__7844__auto___8804 = (0);
while(true){
if((i__7844__auto___8804 < len__7843__auto___8803)){
args__7850__auto__.push((arguments[i__7844__auto___8804]));

var G__8805 = (i__7844__auto___8804 + (1));
i__7844__auto___8804 = G__8805;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return ccboard.client.core.test_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

ccboard.client.core.test_handler.cljs$core$IFn$_invoke$arity$variadic = (function (id,special_message,p__8799){
var vec__8800 = p__8799;
var args = cljs.core.nth.call(null,vec__8800,(0),null);
var this_STAR_ = this;
cljs.core.swap_BANG_.call(null,ccboard.client.core.only_pos_atom,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(args["clientX"]));

return cljs.core.swap_BANG_.call(null,ccboard.client.core.only_pos_atom,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(args["clientY"]));
});

ccboard.client.core.test_handler.cljs$lang$maxFixedArity = (2);

ccboard.client.core.test_handler.cljs$lang$applyTo = (function (seq8796){
var G__8797 = cljs.core.first.call(null,seq8796);
var seq8796__$1 = cljs.core.next.call(null,seq8796);
var G__8798 = cljs.core.first.call(null,seq8796__$1);
var seq8796__$2 = cljs.core.next.call(null,seq8796__$1);
return ccboard.client.core.test_handler.cljs$core$IFn$_invoke$arity$variadic(G__8797,G__8798,seq8796__$2);
});

ccboard.client.core.single_green_ball_reactive_elem = (function ccboard$client$core$single_green_ball_reactive_elem(pos_atom,id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move",new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),cljs.core.partial.call(null,ccboard.client.core.test_handler,id,"mouse moving!"),new cljs.core.Keyword(null,"fill","fill",883462889),"aqua",new cljs.core.Keyword(null,"r","r",-471384190),(60),new cljs.core.Keyword(null,"cx","cx",1272694324),ccboard.client.model.coord.x.call(null,cljs.core.deref.call(null,pos_atom)),new cljs.core.Keyword(null,"cy","cy",755331060),ccboard.client.model.coord.y.call(null,cljs.core.deref.call(null,pos_atom))], null)], null);
});
});
ccboard.client.core.wire_keyboard_support_BANG_ = (function ccboard$client$core$wire_keyboard_support_BANG_(){
return jayq.core.on.call(null,jayq.core.$.call(null,window),"keydown",(function (d){
var temp__4657__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-arrow","left-arrow",1576454296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__8806_SHARP_){
return (p1__8806_SHARP_ - (20));
})], null),new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__8807_SHARP_){
return (p1__8807_SHARP_ - (20));
})], null),new cljs.core.Keyword(null,"right-arrow","right-arrow",-582816704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__8808_SHARP_){
return (p1__8808_SHARP_ + (20));
})], null),new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__8809_SHARP_){
return (p1__8809_SHARP_ + (20));
})], null)], null).call(null,new cljs.core.PersistentArrayMap(null, 4, [(37),new cljs.core.Keyword(null,"left-arrow","left-arrow",1576454296),(38),new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),(39),new cljs.core.Keyword(null,"right-arrow","right-arrow",-582816704),(40),new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670)], null).call(null,(d["keyCode"])));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__8813 = temp__4657__auto__;
var c = cljs.core.nth.call(null,vec__8813,(0),null);
var f = cljs.core.nth.call(null,vec__8813,(1),null);
return cljs.core.swap_BANG_.call(null,ccboard.client.core.only_pos_atom,cljs.core.update,c,f);
} else {
return null;
}
}));
});
ccboard.client.core.svg_target = (function ccboard$client$core$svg_target(){
return cljs.core.first.call(null,jayq.core.$.call(null,"svg"));
});
ccboard.client.core.init_single_green_ball_BANG_ = (function ccboard$client$core$init_single_green_ball_BANG_(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ccboard.client.core.single_green_ball_reactive_elem.call(null,ccboard.client.core.only_pos_atom,new cljs.core.Keyword(null,"piece17","piece17",1213707884))], null),ccboard.client.core.svg_target.call(null));
});
ccboard.client.core.setup_BANG_ = (function ccboard$client$core$setup_BANG_(){
ccboard.client.core.init_single_green_ball_BANG_.call(null);

return ccboard.client.core.wire_keyboard_support_BANG_.call(null);
});
jayq.core.$.call(null,(function (){
return ccboard.client.core.setup_BANG_.call(null);
}));
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=core.js.map