// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.atomic');
goog.require('cljs.core');
goog.require('ccboard.shared.data.pieces');
goog.require('ccboard.client.view');
ccboard.client.atomic.build_position_atom = (function ccboard$client$atomic$build_position_atom(piece_k,v){
var new_atom = cljs.core.atom.call(null,v);
cljs.core.add_watch.call(null,new_atom,piece_k,((function (new_atom){
return (function (k,r,o,n){
return ccboard.client.view.update_piece_BANG_.call(null,k,n);
});})(new_atom))
);

return new_atom;
});
ccboard.client.atomic.pieces = cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,ccboard.client.atomic.build_position_atom.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,ccboard.shared.data.pieces.piece_data);

//# sourceMappingURL=atomic.js.map