// Compiled by ClojureScript 1.9.494 {}
goog.provide('d3.core');
goog.require('cljs.core');
d3.core.selector__GT_name = (function d3$core$selector__GT_name(selector){
if((selector instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,selector);
} else {
return selector;
}
});
d3.core.select = (function d3$core$select(var_args){
var args8499 = [];
var len__7843__auto___8502 = arguments.length;
var i__7844__auto___8503 = (0);
while(true){
if((i__7844__auto___8503 < len__7843__auto___8502)){
args8499.push((arguments[i__7844__auto___8503]));

var G__8504 = (i__7844__auto___8503 + (1));
i__7844__auto___8503 = G__8504;
continue;
} else {
}
break;
}

var G__8501 = args8499.length;
switch (G__8501) {
case 2:
return d3.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8499.length)].join('')));

}
});

d3.core.select.cljs$core$IFn$_invoke$arity$2 = (function (parent,selector){
return parent.select(d3.core.selector__GT_name.call(null,selector));
});

d3.core.select.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return d3.core.select.call(null,d3,selector);
});

d3.core.select.cljs$lang$maxFixedArity = 2;

d3.core.select_STAR_ = (function d3$core$select_STAR_(var_args){
var args8506 = [];
var len__7843__auto___8509 = arguments.length;
var i__7844__auto___8510 = (0);
while(true){
if((i__7844__auto___8510 < len__7843__auto___8509)){
args8506.push((arguments[i__7844__auto___8510]));

var G__8511 = (i__7844__auto___8510 + (1));
i__7844__auto___8510 = G__8511;
continue;
} else {
}
break;
}

var G__8508 = args8506.length;
switch (G__8508) {
case 2:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8506.length)].join('')));

}
});

d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (parent,selector){
return parent.selectAll(d3.core.selector__GT_name.call(null,selector));
});

d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return d3.core.select_STAR_.call(null,d3,selector);
});

d3.core.select_STAR_.cljs$lang$maxFixedArity = 2;

d3.core.attr = (function d3$core$attr(var_args){
var args8513 = [];
var len__7843__auto___8516 = arguments.length;
var i__7844__auto___8517 = (0);
while(true){
if((i__7844__auto___8517 < len__7843__auto___8516)){
args8513.push((arguments[i__7844__auto___8517]));

var G__8518 = (i__7844__auto___8517 + (1));
i__7844__auto___8517 = G__8518;
continue;
} else {
}
break;
}

var G__8515 = args8513.length;
switch (G__8515) {
case 1:
return d3.core.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8513.length)].join('')));

}
});

d3.core.attr.cljs$core$IFn$_invoke$arity$1 = (function (selection){
return selection.attr();
});

d3.core.attr.cljs$core$IFn$_invoke$arity$2 = (function (selection,type){
return selection.attr(cljs.core.name.call(null,type));
});

d3.core.attr.cljs$core$IFn$_invoke$arity$3 = (function (selection,type,value){
return selection.attr(cljs.core.name.call(null,type),value);
});

d3.core.attr.cljs$lang$maxFixedArity = 3;

d3.core.attr_STAR_ = (function d3$core$attr_STAR_(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8532 = arguments.length;
var i__7844__auto___8533 = (0);
while(true){
if((i__7844__auto___8533 < len__7843__auto___8532)){
args__7850__auto__.push((arguments[i__7844__auto___8533]));

var G__8534 = (i__7844__auto___8533 + (1));
i__7844__auto___8533 = G__8534;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (selection,kvs){
var seq__8522_8535 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8523_8536 = null;
var count__8524_8537 = (0);
var i__8525_8538 = (0);
while(true){
if((i__8525_8538 < count__8524_8537)){
var vec__8526_8539 = cljs.core._nth.call(null,chunk__8523_8536,i__8525_8538);
var k_8540 = cljs.core.nth.call(null,vec__8526_8539,(0),null);
var v_8541 = cljs.core.nth.call(null,vec__8526_8539,(1),null);
d3.core.attr.call(null,selection,k_8540,v_8541);

var G__8542 = seq__8522_8535;
var G__8543 = chunk__8523_8536;
var G__8544 = count__8524_8537;
var G__8545 = (i__8525_8538 + (1));
seq__8522_8535 = G__8542;
chunk__8523_8536 = G__8543;
count__8524_8537 = G__8544;
i__8525_8538 = G__8545;
continue;
} else {
var temp__4657__auto___8546 = cljs.core.seq.call(null,seq__8522_8535);
if(temp__4657__auto___8546){
var seq__8522_8547__$1 = temp__4657__auto___8546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8522_8547__$1)){
var c__7549__auto___8548 = cljs.core.chunk_first.call(null,seq__8522_8547__$1);
var G__8549 = cljs.core.chunk_rest.call(null,seq__8522_8547__$1);
var G__8550 = c__7549__auto___8548;
var G__8551 = cljs.core.count.call(null,c__7549__auto___8548);
var G__8552 = (0);
seq__8522_8535 = G__8549;
chunk__8523_8536 = G__8550;
count__8524_8537 = G__8551;
i__8525_8538 = G__8552;
continue;
} else {
var vec__8529_8553 = cljs.core.first.call(null,seq__8522_8547__$1);
var k_8554 = cljs.core.nth.call(null,vec__8529_8553,(0),null);
var v_8555 = cljs.core.nth.call(null,vec__8529_8553,(1),null);
d3.core.attr.call(null,selection,k_8554,v_8555);

var G__8556 = cljs.core.next.call(null,seq__8522_8547__$1);
var G__8557 = null;
var G__8558 = (0);
var G__8559 = (0);
seq__8522_8535 = G__8556;
chunk__8523_8536 = G__8557;
count__8524_8537 = G__8558;
i__8525_8538 = G__8559;
continue;
}
} else {
}
}
break;
}

return selection;
});

d3.core.attr_STAR_.cljs$lang$maxFixedArity = (1);

d3.core.attr_STAR_.cljs$lang$applyTo = (function (seq8520){
var G__8521 = cljs.core.first.call(null,seq8520);
var seq8520__$1 = cljs.core.next.call(null,seq8520);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__8521,seq8520__$1);
});

d3.core.insert = (function d3$core$insert(selection,type,before){
return selection.insert(cljs.core.name.call(null,type),cljs.core.name.call(null,before));
});
d3.core.remove = (function d3$core$remove(selection){
return selection.remove();
});
d3.core.css = (function d3$core$css(var_args){
var args8560 = [];
var len__7843__auto___8563 = arguments.length;
var i__7844__auto___8564 = (0);
while(true){
if((i__7844__auto___8564 < len__7843__auto___8563)){
args8560.push((arguments[i__7844__auto___8564]));

var G__8565 = (i__7844__auto___8564 + (1));
i__7844__auto___8564 = G__8565;
continue;
} else {
}
break;
}

var G__8562 = args8560.length;
switch (G__8562) {
case 2:
return d3.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8560.length)].join('')));

}
});

d3.core.css.cljs$core$IFn$_invoke$arity$2 = (function (selection,type){
return selection.style(cljs.core.name.call(null,type));
});

d3.core.css.cljs$core$IFn$_invoke$arity$3 = (function (selection,type,value){
return selection.style(cljs.core.name.call(null,type),value);
});

d3.core.css.cljs$lang$maxFixedArity = 3;

d3.core.width = (function d3$core$width(selection){
return parseInt(d3.core.css.call(null,selection,new cljs.core.Keyword(null,"width","width",-384071477)));
});
d3.core.height = (function d3$core$height(selection){
return parseInt(d3.core.css.call(null,selection,new cljs.core.Keyword(null,"height","height",1025178622)));
});
d3.core.text = (function d3$core$text(selection,text){
return selection.text(text);
});
d3.core.html = (function d3$core$html(selection,text){
return selection.html(text);
});

/**
 * @interface
 */
d3.core.Append = function(){};

d3.core.append_impl = (function d3$core$append_impl(_,selection){
if((!((_ == null))) && (!((_.d3$core$Append$append_impl$arity$2 == null)))){
return _.d3$core$Append$append_impl$arity$2(_,selection);
} else {
var x__7398__auto__ = (((_ == null))?null:_);
var m__7399__auto__ = (d3.core.append_impl[goog.typeOf(x__7398__auto__)]);
if(!((m__7399__auto__ == null))){
return m__7399__auto__.call(null,_,selection);
} else {
var m__7399__auto____$1 = (d3.core.append_impl["_"]);
if(!((m__7399__auto____$1 == null))){
return m__7399__auto____$1.call(null,_,selection);
} else {
throw cljs.core.missing_protocol.call(null,"Append.append-impl",_);
}
}
}
});

d3.core.handle_attrs = (function d3$core$handle_attrs(selection,v){
var sec = cljs.core.second.call(null,v);
if(cljs.core.map_QMARK_.call(null,sec)){
cljs.core.apply.call(null,d3.core.attr_STAR_,selection,cljs.core.apply.call(null,cljs.core.concat,sec));

return cljs.core.nnext.call(null,v);
} else {
return cljs.core.next.call(null,v);
}
});
String.prototype.d3$core$Append$ = cljs.core.PROTOCOL_SENTINEL;

String.prototype.d3$core$Append$append_impl$arity$2 = (function (k,selection){
var k__$1 = this;
return selection.append(k__$1);
});

cljs.core.PersistentVector.prototype.d3$core$Append$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.d3$core$Append$append_impl$arity$2 = (function (v,selection){
var v__$1 = this;
var res = d3.core.append_impl.call(null,d3.core.selector__GT_name.call(null,cljs.core.first.call(null,v__$1)),selection);
var ns = d3.core.handle_attrs.call(null,res,v__$1);
return cljs.core.reduce.call(null,((function (res,ns,v__$1){
return (function (s,n){
if(cljs.core.vector_QMARK_.call(null,n)){
return d3.core.append_impl.call(null,n,res);
} else {
return d3.core.text.call(null,res,n);
}
});})(res,ns,v__$1))
,res,ns);
});

Function.prototype.d3$core$Append$ = cljs.core.PROTOCOL_SENTINEL;

Function.prototype.d3$core$Append$append_impl$arity$2 = (function (f,selection){
var f__$1 = this;
return selection.append(f__$1);
});
d3.core.append = (function d3$core$append(selection,element){
return d3.core.append_impl.call(null,d3.core.selector__GT_name.call(null,element),selection);
});
d3.core.data = (function d3$core$data(var_args){
var args8567 = [];
var len__7843__auto___8570 = arguments.length;
var i__7844__auto___8571 = (0);
while(true){
if((i__7844__auto___8571 < len__7843__auto___8570)){
args8567.push((arguments[i__7844__auto___8571]));

var G__8572 = (i__7844__auto___8571 + (1));
i__7844__auto___8571 = G__8572;
continue;
} else {
}
break;
}

var G__8569 = args8567.length;
switch (G__8569) {
case 2:
return d3.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8567.length)].join('')));

}
});

d3.core.data.cljs$core$IFn$_invoke$arity$2 = (function (selection,data){
return selection.data(data);
});

d3.core.data.cljs$core$IFn$_invoke$arity$3 = (function (selection,data,key_fn){
return selection.data(data,key_fn);
});

d3.core.data.cljs$lang$maxFixedArity = 3;

d3.core.datum = (function d3$core$datum(var_args){
var args8574 = [];
var len__7843__auto___8577 = arguments.length;
var i__7844__auto___8578 = (0);
while(true){
if((i__7844__auto___8578 < len__7843__auto___8577)){
args8574.push((arguments[i__7844__auto___8578]));

var G__8579 = (i__7844__auto___8578 + (1));
i__7844__auto___8578 = G__8579;
continue;
} else {
}
break;
}

var G__8576 = args8574.length;
switch (G__8576) {
case 1:
return d3.core.datum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.datum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8574.length)].join('')));

}
});

d3.core.datum.cljs$core$IFn$_invoke$arity$1 = (function (selection){
return selection.datum();
});

d3.core.datum.cljs$core$IFn$_invoke$arity$2 = (function (selection,value){
return selection.datum(value);
});

d3.core.datum.cljs$lang$maxFixedArity = 2;

d3.core.entered = (function d3$core$entered(selection){
return selection.enter();
});
d3.core.exited = (function d3$core$exited(selection){
return selection.exit();
});
d3.core.each = (function d3$core$each(selection,f){
return selection.each(f);
});
d3.core.call = (function d3$core$call(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8585 = arguments.length;
var i__7844__auto___8586 = (0);
while(true){
if((i__7844__auto___8586 < len__7843__auto___8585)){
args__7850__auto__.push((arguments[i__7844__auto___8586]));

var G__8587 = (i__7844__auto___8586 + (1));
i__7844__auto___8586 = G__8587;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

d3.core.call.cljs$core$IFn$_invoke$arity$variadic = (function (selection,f,args){
return selection.call((function (p1__8581_SHARP_){
return cljs.core.apply.call(null,f,p1__8581_SHARP_,args);
}));
});

d3.core.call.cljs$lang$maxFixedArity = (2);

d3.core.call.cljs$lang$applyTo = (function (seq8582){
var G__8583 = cljs.core.first.call(null,seq8582);
var seq8582__$1 = cljs.core.next.call(null,seq8582);
var G__8584 = cljs.core.first.call(null,seq8582__$1);
var seq8582__$2 = cljs.core.next.call(null,seq8582__$1);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic(G__8583,G__8584,seq8582__$2);
});

d3.core.on = (function d3$core$on(selection,event,listener){
return selection.on(cljs.core.name.call(null,event),listener);
});
d3.core.transition = (function d3$core$transition(selection){
return selection.transition();
});
d3.core.duration = (function d3$core$duration(transition,t){
return transition.duration(t);
});
d3.core.delay = (function d3$core$delay(transition,t){
return transition.delay(t);
});
d3.core.__GT_name = (function d3$core$__GT_name(arg){
if((arg instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,arg);
} else {
return arg;
}
});
d3.core.ease = (function d3$core$ease(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8591 = arguments.length;
var i__7844__auto___8592 = (0);
while(true){
if((i__7844__auto___8592 < len__7843__auto___8591)){
args__7850__auto__.push((arguments[i__7844__auto___8592]));

var G__8593 = (i__7844__auto___8592 + (1));
i__7844__auto___8592 = G__8593;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return d3.core.ease.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

d3.core.ease.cljs$core$IFn$_invoke$arity$variadic = (function (transition,easing,args){
return transition.ease(cljs.core.apply.call(null,d3.ease,cljs.core.name.call(null,easing),cljs.core.map.call(null,d3.core.__GT_name,args)));
});

d3.core.ease.cljs$lang$maxFixedArity = (2);

d3.core.ease.cljs$lang$applyTo = (function (seq8588){
var G__8589 = cljs.core.first.call(null,seq8588);
var seq8588__$1 = cljs.core.next.call(null,seq8588);
var G__8590 = cljs.core.first.call(null,seq8588__$1);
var seq8588__$2 = cljs.core.next.call(null,seq8588__$1);
return d3.core.ease.cljs$core$IFn$_invoke$arity$variadic(G__8589,G__8590,seq8588__$2);
});

d3.core.rotate = (function d3$core$rotate(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
d3.core.translate = (function d3$core$translate(var_args){
var args8594 = [];
var len__7843__auto___8597 = arguments.length;
var i__7844__auto___8598 = (0);
while(true){
if((i__7844__auto___8598 < len__7843__auto___8597)){
args8594.push((arguments[i__7844__auto___8598]));

var G__8599 = (i__7844__auto___8598 + (1));
i__7844__auto___8598 = G__8599;
continue;
} else {
}
break;
}

var G__8596 = args8594.length;
switch (G__8596) {
case 1:
return d3.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8594.length)].join('')));

}
});

d3.core.translate.cljs$core$IFn$_invoke$arity$1 = (function (d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

d3.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

d3.core.translate.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map