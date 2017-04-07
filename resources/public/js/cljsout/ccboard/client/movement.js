// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.movement');
goog.require('cljs.core');
goog.require('d3.core');
goog.require('ccboard.client.async');
goog.require('ccboard.client.view');
goog.require('cljs.core.async');
goog.require('ccboard.client.atomic');
goog.require('ccboard.client.d3_helpers');
ccboard.client.movement.wire_mousedown_BANG_ = (function ccboard$client$movement$wire_mousedown_BANG_(){
return d3.core.on.call(null,d3.core.select.call(null,".piece"),"mousedown",(function (d){
return ccboard.client.async.pass_to_mousedown_chan_BANG_.call(null,cljs.core.keyword.call(null,(d["id"])));
}));
});
ccboard.client.movement.wire_mouseup_BANG_ = (function ccboard$client$movement$wire_mouseup_BANG_(){
return d3.core.on.call(null,d3.core.select.call(null,".piece"),"mouseup",(function (d){
return ccboard.client.async.pass_to_mouseup_chan_BANG_.call(null,cljs.core.keyword.call(null,(d["id"])));
}));
});
ccboard.client.movement.enable_piece_drag_BANG_ = (function ccboard$client$movement$enable_piece_drag_BANG_(){
ccboard.client.movement.wire_mousedown_BANG_.call(null);

return ccboard.client.movement.wire_mouseup_BANG_.call(null);
});
ccboard.client.movement.asynctity = (function (){var c__9139__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9139__auto__){
return (function (){
var f__9140__auto__ = (function (){var switch__9118__auto__ = ((function (c__9139__auto__){
return (function (state_9580){
var state_val_9581 = (state_9580[(1)]);
if((state_val_9581 === (1))){
var state_9580__$1 = state_9580;
var statearr_9582_9600 = state_9580__$1;
(statearr_9582_9600[(2)] = null);

(statearr_9582_9600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (2))){
var state_9580__$1 = state_9580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9580__$1,(4),ccboard.client.async.piece_mousedown_events_chan);
} else {
if((state_val_9581 === (3))){
var inst_9578 = (state_9580[(2)]);
var state_9580__$1 = state_9580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9580__$1,inst_9578);
} else {
if((state_val_9581 === (4))){
var inst_9549 = (state_9580[(2)]);
var state_9580__$1 = (function (){var statearr_9583 = state_9580;
(statearr_9583[(7)] = inst_9549);

return statearr_9583;
})();
var statearr_9584_9601 = state_9580__$1;
(statearr_9584_9601[(2)] = null);

(statearr_9584_9601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (5))){
var inst_9551 = cljs.core.async.poll_BANG_.call(null,ccboard.client.async.piece_mouseup_events_chan);
var inst_9552 = cljs.core.not.call(null,inst_9551);
var state_9580__$1 = state_9580;
if(inst_9552){
var statearr_9585_9602 = state_9580__$1;
(statearr_9585_9602[(1)] = (7));

} else {
var statearr_9586_9603 = state_9580__$1;
(statearr_9586_9603[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (6))){
var inst_9575 = (state_9580[(2)]);
var state_9580__$1 = (function (){var statearr_9587 = state_9580;
(statearr_9587[(8)] = inst_9575);

return statearr_9587;
})();
var statearr_9588_9604 = state_9580__$1;
(statearr_9588_9604[(2)] = null);

(statearr_9588_9604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (7))){
var inst_9549 = (state_9580[(7)]);
var inst_9557 = ccboard.client.view.svg_d3.node();
var inst_9558 = console.dir(inst_9557);
var inst_9559 = d3.mouse(inst_9557);
var inst_9560 = cljs.core.println.call(null,inst_9557);
var inst_9561 = cljs.core.println.call(null,inst_9559);
var inst_9562 = cljs.core.js__GT_clj.call(null,inst_9559);
var inst_9563 = cljs.core.nth.call(null,inst_9562,(0),null);
var inst_9564 = cljs.core.nth.call(null,inst_9562,(1),null);
var inst_9565 = ccboard.client.atomic.pieces.call(null,inst_9549);
var inst_9566 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_9567 = [inst_9563,inst_9564];
var inst_9568 = cljs.core.PersistentHashMap.fromArrays(inst_9566,inst_9567);
var inst_9569 = cljs.core.swap_BANG_.call(null,inst_9565,cljs.core.merge,inst_9568);
var state_9580__$1 = (function (){var statearr_9589 = state_9580;
(statearr_9589[(9)] = inst_9560);

(statearr_9589[(10)] = inst_9569);

(statearr_9589[(11)] = inst_9558);

(statearr_9589[(12)] = inst_9561);

return statearr_9589;
})();
var statearr_9590_9605 = state_9580__$1;
(statearr_9590_9605[(2)] = null);

(statearr_9590_9605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (8))){
var state_9580__$1 = state_9580;
var statearr_9591_9606 = state_9580__$1;
(statearr_9591_9606[(2)] = null);

(statearr_9591_9606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9581 === (9))){
var inst_9573 = (state_9580[(2)]);
var state_9580__$1 = state_9580;
var statearr_9592_9607 = state_9580__$1;
(statearr_9592_9607[(2)] = inst_9573);

(statearr_9592_9607[(1)] = (6));


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
});})(c__9139__auto__))
;
return ((function (switch__9118__auto__,c__9139__auto__){
return (function() {
var ccboard$client$movement$state_machine__9119__auto__ = null;
var ccboard$client$movement$state_machine__9119__auto____0 = (function (){
var statearr_9596 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9596[(0)] = ccboard$client$movement$state_machine__9119__auto__);

(statearr_9596[(1)] = (1));

return statearr_9596;
});
var ccboard$client$movement$state_machine__9119__auto____1 = (function (state_9580){
while(true){
var ret_value__9120__auto__ = (function (){try{while(true){
var result__9121__auto__ = switch__9118__auto__.call(null,state_9580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9121__auto__;
}
break;
}
}catch (e9597){if((e9597 instanceof Object)){
var ex__9122__auto__ = e9597;
var statearr_9598_9608 = state_9580;
(statearr_9598_9608[(5)] = ex__9122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9609 = state_9580;
state_9580 = G__9609;
continue;
} else {
return ret_value__9120__auto__;
}
break;
}
});
ccboard$client$movement$state_machine__9119__auto__ = function(state_9580){
switch(arguments.length){
case 0:
return ccboard$client$movement$state_machine__9119__auto____0.call(this);
case 1:
return ccboard$client$movement$state_machine__9119__auto____1.call(this,state_9580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ccboard$client$movement$state_machine__9119__auto__.cljs$core$IFn$_invoke$arity$0 = ccboard$client$movement$state_machine__9119__auto____0;
ccboard$client$movement$state_machine__9119__auto__.cljs$core$IFn$_invoke$arity$1 = ccboard$client$movement$state_machine__9119__auto____1;
return ccboard$client$movement$state_machine__9119__auto__;
})()
;})(switch__9118__auto__,c__9139__auto__))
})();
var state__9141__auto__ = (function (){var statearr_9599 = f__9140__auto__.call(null);
(statearr_9599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9139__auto__);

return statearr_9599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9141__auto__);
});})(c__9139__auto__))
);

return c__9139__auto__;
})();

//# sourceMappingURL=movement.js.map