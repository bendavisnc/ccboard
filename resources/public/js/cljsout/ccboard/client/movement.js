// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.movement');
goog.require('cljs.core');
goog.require('d3.core');
goog.require('ccboard.client.async');
goog.require('ccboard.client.view');
goog.require('cljs.core.async');
goog.require('ccboard.client.atomic');
goog.require('ccboard.client.d3_helpers');
ccboard.client.movement.on_drag_BANG_ = (function ccboard$client$movement$on_drag_BANG_(d){
var this_STAR_ = this;
var d_STAR_ = cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var piece_k = cljs.core.keyword.call(null,(this_STAR_["id"]));
var vec__10143 = cljs.core.js__GT_clj.call(null,d3.mouse(ccboard.client.view.svg_d3.node()));
var mouse_x = cljs.core.nth.call(null,vec__10143,(0),null);
var mouse_y = cljs.core.nth.call(null,vec__10143,(1),null);
return cljs.core.swap_BANG_.call(null,ccboard.client.atomic.pieces.call(null,piece_k),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mouse_x,new cljs.core.Keyword(null,"y","y",-1757859776),mouse_y], null));
});
ccboard.client.movement.on_drag_start_BANG_ = (function ccboard$client$movement$on_drag_start_BANG_(args){
return null;
});
ccboard.client.movement.on_drag_stop_BANG_ = (function ccboard$client$movement$on_drag_stop_BANG_(args){
return null;
});
ccboard.client.movement.enable_piece_drag_BANG_ = (function ccboard$client$movement$enable_piece_drag_BANG_(){
return d3.core.select_STAR_.call(null,".piece").call(d3.drag().on("start",ccboard.client.movement.on_drag_start_BANG_).on("drag",ccboard.client.movement.on_drag_BANG_).on("end",ccboard.client.movement.on_drag_stop_BANG_));
});

//# sourceMappingURL=movement.js.map