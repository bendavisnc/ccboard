// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('ccboard.client.model.coord');
goog.require('d3.core');
goog.require('ccboard.client.d3_helpers');
goog.require('ccboard.client.atomic');
goog.require('ccboard.client.view');
goog.require('ccboard.shared.data.pieces');
goog.require('ccboard.client.movement');
ccboard.client.core.wire_keyboard_support_BANG_ = (function ccboard$client$core$wire_keyboard_support_BANG_(){
return jayq.core.on.call(null,jayq.core.$.call(null,window),"keydown",(function (d){
var temp__4657__auto__ = (function (){var k = (d["keyCode"]);
if(cljs.core._EQ_.call(null,k,(37))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),((function (k){
return (function (p1__10167_SHARP_){
return (p1__10167_SHARP_ - (20));
});})(k))
], null);
} else {
if(cljs.core._EQ_.call(null,k,(38))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),((function (k){
return (function (p1__10168_SHARP_){
return (p1__10168_SHARP_ - (20));
});})(k))
], null);
} else {
if(cljs.core._EQ_.call(null,k,(39))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),((function (k){
return (function (p1__10169_SHARP_){
return (p1__10169_SHARP_ + (20));
});})(k))
], null);
} else {
if(cljs.core._EQ_.call(null,k,(40))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),((function (k){
return (function (p1__10170_SHARP_){
return (p1__10170_SHARP_ + (20));
});})(k))
], null);
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var vec__10174 = temp__4657__auto__;
var c = cljs.core.nth.call(null,vec__10174,(0),null);
var f = cljs.core.nth.call(null,vec__10174,(1),null);
return cljs.core.swap_BANG_.call(null,ccboard.client.atomic.pieces.call(null,new cljs.core.Keyword(null,"p27","p27",347824413)),cljs.core.update,c,f);
} else {
return null;
}
}));
});
ccboard.client.core.setup_BANG_ = (function ccboard$client$core$setup_BANG_(){
ccboard.client.view.init_pieces_BANG_.call(null,ccboard.shared.data.pieces.piece_data);

ccboard.client.core.wire_keyboard_support_BANG_.call(null);

return ccboard.client.movement.enable_piece_drag_BANG_.call(null);
});
jayq.core.$.call(null,ccboard.client.core.setup_BANG_);
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=core.js.map