// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.view');
goog.require('cljs.core');
goog.require('d3.core');
goog.require('ccboard.client.d3_helpers');
goog.require('ccboard.client.async');
ccboard.client.view.svg_d3 = d3.core.select.call(null,"svg");
ccboard.client.view.to_creation_data = (function ccboard$client$view$to_creation_data(piece_data){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.conj.call(null,acc,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,k)));
}),cljs.core.PersistentVector.EMPTY,piece_data);
});
ccboard.client.view.init_pieces_BANG_ = (function ccboard$client$view$init_pieces_BANG_(piece_data){
return d3.core.css.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.attr.call(null,d3.core.append.call(null,d3.core.entered.call(null,d3.core.data.call(null,d3.core.select_STAR_.call(null,ccboard.client.view.svg_d3,".piece"),cljs.core.clj__GT_js.call(null,ccboard.client.view.to_creation_data.call(null,piece_data)))),"circle"),"class","piece"),"cx",ccboard.client.d3_helpers.get_x),"cy",ccboard.client.d3_helpers.get_y),"id",ccboard.client.d3_helpers.get_id),"r",(50)),"fill","white");
});
ccboard.client.view.update_piece_BANG_ = (function ccboard$client$view$update_piece_BANG_(piece_k,new_position){
return d3.core.attr.call(null,d3.core.attr.call(null,d3.core.datum.call(null,d3.core.select.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,piece_k))].join('')),cljs.core.clj__GT_js.call(null,new_position)),"cx",ccboard.client.d3_helpers.get_x),"cy",ccboard.client.d3_helpers.get_y);
});

//# sourceMappingURL=view.js.map