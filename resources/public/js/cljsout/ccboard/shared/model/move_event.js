// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.shared.model.move_event');
goog.require('cljs.core');

/**
 * @interface
 */
ccboard.shared.model.move_event.IMoveEvent = function(){};

/**
 * The piece that was moved.
 */
ccboard.shared.model.move_event.piece = (function ccboard$shared$model$move_event$piece(this$){
if((!((this$ == null))) && (!((this$.ccboard$shared$model$move_event$IMoveEvent$piece$arity$1 == null)))){
return this$.ccboard$shared$model$move_event$IMoveEvent$piece$arity$1(this$);
} else {
var x__7398__auto__ = (((this$ == null))?null:this$);
var m__7399__auto__ = (ccboard.shared.model.move_event.piece[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,this$);
} else {
var m__7399__auto____$1 = (ccboard.shared.model.move_event.piece["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IMoveEvent.piece",this$);
}
}
}
});

/**
 * All of the positions (x y coords) that the piece moved.
 */
ccboard.shared.model.move_event.movement_data = (function ccboard$shared$model$move_event$movement_data(this$){
if((!((this$ == null))) && (!((this$.ccboard$shared$model$move_event$IMoveEvent$movement_data$arity$1 == null)))){
return this$.ccboard$shared$model$move_event$IMoveEvent$movement_data$arity$1(this$);
} else {
var x__7398__auto__ = (((this$ == null))?null:this$);
var m__7399__auto__ = (ccboard.shared.model.move_event.movement_data[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,this$);
} else {
var m__7399__auto____$1 = (ccboard.shared.model.move_event.movement_data["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IMoveEvent.movement-data",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {ccboard.shared.model.move_event.IMoveEvent}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ccboard.shared.model.move_event.MoveEvent = (function (piece,movement_data,__meta,__extmap,__hash){
this.piece = piece;
this.movement_data = movement_data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7357__auto__,k__7358__auto__){
var self__ = this;
var this__7357__auto____$1 = this;
return this__7357__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7358__auto__,null);
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7359__auto__,k8614,else__7360__auto__){
var self__ = this;
var this__7359__auto____$1 = this;
var G__8616 = (((k8614 instanceof cljs.core.Keyword))?k8614.fqn:null);
switch (G__8616) {
case "piece":
return self__.piece;

break;
case "movement-data":
return self__.movement_data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8614,else__7360__auto__);

}
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7371__auto__,writer__7372__auto__,opts__7373__auto__){
var self__ = this;
var this__7371__auto____$1 = this;
var pr_pair__7374__auto__ = ((function (this__7371__auto____$1){
return (function (keyval__7375__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7372__auto__,cljs.core.pr_writer,""," ","",opts__7373__auto__,keyval__7375__auto__);
});})(this__7371__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7372__auto__,pr_pair__7374__auto__,"#ccboard.shared.model.move-event.MoveEvent{",", ","}",opts__7373__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"piece","piece",1396691784),self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),self__.movement_data],null))], null),self__.__extmap));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8613){
var self__ = this;
var G__8613__$1 = this;
return (new cljs.core.RecordIter((0),G__8613__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"movement-data","movement-data",-314283653)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7355__auto__){
var self__ = this;
var this__7355__auto____$1 = this;
return self__.__meta;
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7351__auto__){
var self__ = this;
var this__7351__auto____$1 = this;
return (new ccboard.shared.model.move_event.MoveEvent(self__.piece,self__.movement_data,self__.__meta,self__.__extmap,self__.__hash));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7361__auto__){
var self__ = this;
var this__7361__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7352__auto__){
var self__ = this;
var this__7352__auto____$1 = this;
var h__7170__auto__ = self__.__hash;
if(!((h__7170__auto__ == null))){
return h__7170__auto__;
} else {
var h__7170__auto____$1 = cljs.core.hash_imap.call(null,this__7352__auto____$1);
self__.__hash = h__7170__auto____$1;

return h__7170__auto____$1;
}
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7353__auto__,other__7354__auto__){
var self__ = this;
var this__7353__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6718__auto__ = other__7354__auto__;
if(cljs.core.truth_(and__6718__auto__)){
return ((this__7353__auto____$1.constructor === other__7354__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7353__auto____$1,other__7354__auto__));
} else {
return and__6718__auto__;
}
})())){
return true;
} else {
return false;
}
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7366__auto__,k__7367__auto__){
var self__ = this;
var this__7366__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),null,new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),null], null), null),k__7367__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7366__auto____$1),self__.__meta),k__7367__auto__);
} else {
return (new ccboard.shared.model.move_event.MoveEvent(self__.piece,self__.movement_data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7367__auto__)),null));
}
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7364__auto__,k__7365__auto__,G__8613){
var self__ = this;
var this__7364__auto____$1 = this;
var pred__8617 = cljs.core.keyword_identical_QMARK_;
var expr__8618 = k__7365__auto__;
if(cljs.core.truth_(pred__8617.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784),expr__8618))){
return (new ccboard.shared.model.move_event.MoveEvent(G__8613,self__.movement_data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8617.call(null,new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),expr__8618))){
return (new ccboard.shared.model.move_event.MoveEvent(self__.piece,G__8613,self__.__meta,self__.__extmap,null));
} else {
return (new ccboard.shared.model.move_event.MoveEvent(self__.piece,self__.movement_data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7365__auto__,G__8613),null));
}
}
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7369__auto__){
var self__ = this;
var this__7369__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"piece","piece",1396691784),self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),self__.movement_data],null))], null),self__.__extmap));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7356__auto__,G__8613){
var self__ = this;
var this__7356__auto____$1 = this;
return (new ccboard.shared.model.move_event.MoveEvent(self__.piece,self__.movement_data,G__8613,self__.__extmap,self__.__hash));
});

ccboard.shared.model.move_event.MoveEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7362__auto__,entry__7363__auto__){
var self__ = this;
var this__7362__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7363__auto__)){
return this__7362__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7363__auto__,(0)),cljs.core._nth.call(null,entry__7363__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7362__auto____$1,entry__7363__auto__);
}
});

ccboard.shared.model.move_event.MoveEvent.prototype.ccboard$shared$model$move_event$IMoveEvent$ = cljs.core.PROTOCOL_SENTINEL;

ccboard.shared.model.move_event.MoveEvent.prototype.ccboard$shared$model$move_event$IMoveEvent$piece$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ccboard.shared.model.move_event.MoveEvent.prototype.ccboard$shared$model$move_event$IMoveEvent$movement_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"movement-data","movement-data",-314283653).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ccboard.shared.model.move_event.MoveEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"piece","piece",-1257743985,null),new cljs.core.Symbol(null,"movement-data","movement-data",1326247874,null)], null);
});

ccboard.shared.model.move_event.MoveEvent.cljs$lang$type = true;

ccboard.shared.model.move_event.MoveEvent.cljs$lang$ctorPrSeq = (function (this__7391__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ccboard.shared.model.move-event/MoveEvent");
});

ccboard.shared.model.move_event.MoveEvent.cljs$lang$ctorPrWriter = (function (this__7391__auto__,writer__7392__auto__){
return cljs.core._write.call(null,writer__7392__auto__,"ccboard.shared.model.move-event/MoveEvent");
});

ccboard.shared.model.move_event.__GT_MoveEvent = (function ccboard$shared$model$move_event$__GT_MoveEvent(piece,movement_data){
return (new ccboard.shared.model.move_event.MoveEvent(piece,movement_data,null,null,null));
});

ccboard.shared.model.move_event.map__GT_MoveEvent = (function ccboard$shared$model$move_event$map__GT_MoveEvent(G__8615){
return (new ccboard.shared.model.move_event.MoveEvent(new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(G__8615),new cljs.core.Keyword(null,"movement-data","movement-data",-314283653).cljs$core$IFn$_invoke$arity$1(G__8615),null,cljs.core.dissoc.call(null,G__8615,new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"movement-data","movement-data",-314283653)),null));
});

ccboard.shared.model.move_event.create = (function ccboard$shared$model$move_event$create(var_args){
var args8621 = [];
var len__7843__auto___8624 = arguments.length;
var i__7844__auto___8625 = (0);
while(true){
if((i__7844__auto___8625 < len__7843__auto___8624)){
args8621.push((arguments[i__7844__auto___8625]));

var G__8626 = (i__7844__auto___8625 + (1));
i__7844__auto___8625 = G__8626;
continue;
} else {
}
break;
}

var G__8623 = args8621.length;
switch (G__8623) {
case 1:
return ccboard.shared.model.move_event.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ccboard.shared.model.move_event.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8621.length)].join('')));

}
});

ccboard.shared.model.move_event.create.cljs$core$IFn$_invoke$arity$1 = (function (m){
return ccboard.shared.model.move_event.map__GT_MoveEvent.call(null,m);
});

ccboard.shared.model.move_event.create.cljs$core$IFn$_invoke$arity$2 = (function (piece,movement_data){
return (new ccboard.shared.model.move_event.MoveEvent(piece,movement_data,null,null,null));
});

ccboard.shared.model.move_event.create.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=move_event.js.map