// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('ccboard.client.model.coord');
ccboard.client.core.only_pos_atom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null));
ccboard.client.core.single_green_ball_reactive_elem = (function ccboard$client$core$single_green_ball_reactive_elem(pos_atom){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"r","r",-471384190),(60),new cljs.core.Keyword(null,"cx","cx",1272694324),ccboard.client.model.coord.x.call(null,cljs.core.deref.call(null,pos_atom)),new cljs.core.Keyword(null,"cy","cy",755331060),ccboard.client.model.coord.y.call(null,cljs.core.deref.call(null,pos_atom))], null)], null);
});
});
ccboard.client.core.wire_keyboard_support_BANG_ = (function ccboard$client$core$wire_keyboard_support_BANG_(){
return jayq.core.on.call(null,jayq.core.$.call(null,window),"keydown",(function (d){
var temp__4657__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-arrow","left-arrow",1576454296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__8246_SHARP_){
return (p1__8246_SHARP_ - (20));
})], null),new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__8247_SHARP_){
return (p1__8247_SHARP_ - (20));
})], null),new cljs.core.Keyword(null,"right-arrow","right-arrow",-582816704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__8248_SHARP_){
return (p1__8248_SHARP_ + (20));
})], null),new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__8249_SHARP_){
return (p1__8249_SHARP_ + (20));
})], null)], null).call(null,new cljs.core.PersistentArrayMap(null, 4, [(37),new cljs.core.Keyword(null,"left-arrow","left-arrow",1576454296),(38),new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),(39),new cljs.core.Keyword(null,"right-arrow","right-arrow",-582816704),(40),new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670)], null).call(null,(d["keyCode"])));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__8253 = temp__4657__auto__;
var c = cljs.core.nth.call(null,vec__8253,(0),null);
var f = cljs.core.nth.call(null,vec__8253,(1),null);
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
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ccboard.client.core.single_green_ball_reactive_elem.call(null,ccboard.client.core.only_pos_atom)], null),ccboard.client.core.svg_target.call(null));
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