// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('ccboard.client.model.coord');
goog.require('d3.core');
ccboard.client.core.svg_d3 = d3.core.select.call(null,"svg");
ccboard.client.core.piece_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),(550),new cljs.core.Keyword(null,"cy","cy",755331060),(89)], null)], null);
ccboard.client.core.cx = (function ccboard$client$core$cx(d){
return (d["cx"]);
});
ccboard.client.core.cy = (function ccboard$client$core$cy(d){
return (d["cy"]);
});
ccboard.client.core.init_single_blue_dot_BANG_ = (function ccboard$client$core$init_single_blue_dot_BANG_(){
return d3.core.css.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.append.call(null,d3.core.data.call(null,ccboard.client.core.svg_d3.selectAll(".piece"),cljs.core.clj__GT_js.call(null,ccboard.client.core.piece_data)).enter(),"circle"),"class","piece"),"cx",ccboard.client.core.cx),"cy",ccboard.client.core.cy),"r",(50)),"fill","pink");
});
ccboard.client.core.on_drag_BANG_ = (function ccboard$client$core$on_drag_BANG_(d){
var this_STAR_ = this;
(d["cx"] = (d.cx + d3.event.dx));

(d["cy"] = (d.cy + d3.event.dy));

return d3.core.attr.call(null,d3.core.attr.call(null,d3.core.select.call(null,this_STAR_),"cx",d.cx),"cy",d.cy);
});
ccboard.client.core.on_drag_start_BANG_ = (function ccboard$client$core$on_drag_start_BANG_(d){
return cljs.core.println.call(null,"hey yo");
});
ccboard.client.core.enable_dragging_BANG_ = (function ccboard$client$core$enable_dragging_BANG_(){
return d3.core.select_STAR_.call(null,".piece").call(d3.drag().on("drag",ccboard.client.core.on_drag_BANG_).on("start",ccboard.client.core.on_drag_start_BANG_));
});
ccboard.client.core.setup_BANG_ = (function ccboard$client$core$setup_BANG_(){
ccboard.client.core.init_single_blue_dot_BANG_.call(null);

return ccboard.client.core.enable_dragging_BANG_.call(null);
});
jayq.core.$.call(null,ccboard.client.core.setup_BANG_);
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=core.js.map