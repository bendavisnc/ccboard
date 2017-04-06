// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.d3_helpers');
goog.require('cljs.core');
ccboard.client.d3_helpers.mouse__STAR_ = (function ccboard$client$d3_helpers$mouse__STAR_(d_){
return (function (){
return ((d3["event"])[d_]);
});
});
ccboard.client.d3_helpers.mouse_x = ccboard.client.d3_helpers.mouse__STAR_.call(null,"dx");
ccboard.client.d3_helpers.mouse_y = ccboard.client.d3_helpers.mouse__STAR_.call(null,"dy");
ccboard.client.d3_helpers.get_x = (function ccboard$client$d3_helpers$get_x(d){
return (d["x"]);
});
ccboard.client.d3_helpers.get_y = (function ccboard$client$d3_helpers$get_y(d){
return (d["y"]);
});
ccboard.client.d3_helpers.get_id = (function ccboard$client$d3_helpers$get_id(d){
return (d["id"]);
});
ccboard.client.d3_helpers.key__GT_classname = (function ccboard$client$d3_helpers$key__GT_classname(k){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))].join('');
});

//# sourceMappingURL=d3_helpers.js.map