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
var args8061 = [];
var len__7843__auto___8064 = arguments.length;
var i__7844__auto___8065 = (0);
while(true){
if((i__7844__auto___8065 < len__7843__auto___8064)){
args8061.push((arguments[i__7844__auto___8065]));

var G__8066 = (i__7844__auto___8065 + (1));
i__7844__auto___8065 = G__8066;
continue;
} else {
}
break;
}

var G__8063 = args8061.length;
switch (G__8063) {
case 2:
return d3.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8061.length)].join('')));

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
var args8068 = [];
var len__7843__auto___8071 = arguments.length;
var i__7844__auto___8072 = (0);
while(true){
if((i__7844__auto___8072 < len__7843__auto___8071)){
args8068.push((arguments[i__7844__auto___8072]));

var G__8073 = (i__7844__auto___8072 + (1));
i__7844__auto___8072 = G__8073;
continue;
} else {
}
break;
}

var G__8070 = args8068.length;
switch (G__8070) {
case 2:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8068.length)].join('')));

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
var args8075 = [];
var len__7843__auto___8078 = arguments.length;
var i__7844__auto___8079 = (0);
while(true){
if((i__7844__auto___8079 < len__7843__auto___8078)){
args8075.push((arguments[i__7844__auto___8079]));

var G__8080 = (i__7844__auto___8079 + (1));
i__7844__auto___8079 = G__8080;
continue;
} else {
}
break;
}

var G__8077 = args8075.length;
switch (G__8077) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8075.length)].join('')));

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
var len__7843__auto___8094 = arguments.length;
var i__7844__auto___8095 = (0);
while(true){
if((i__7844__auto___8095 < len__7843__auto___8094)){
args__7850__auto__.push((arguments[i__7844__auto___8095]));

var G__8096 = (i__7844__auto___8095 + (1));
i__7844__auto___8095 = G__8096;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (selection,kvs){
var seq__8084_8097 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8085_8098 = null;
var count__8086_8099 = (0);
var i__8087_8100 = (0);
while(true){
if((i__8087_8100 < count__8086_8099)){
var vec__8088_8101 = cljs.core._nth.call(null,chunk__8085_8098,i__8087_8100);
var k_8102 = cljs.core.nth.call(null,vec__8088_8101,(0),null);
var v_8103 = cljs.core.nth.call(null,vec__8088_8101,(1),null);
d3.core.attr.call(null,selection,k_8102,v_8103);

var G__8104 = seq__8084_8097;
var G__8105 = chunk__8085_8098;
var G__8106 = count__8086_8099;
var G__8107 = (i__8087_8100 + (1));
seq__8084_8097 = G__8104;
chunk__8085_8098 = G__8105;
count__8086_8099 = G__8106;
i__8087_8100 = G__8107;
continue;
} else {
var temp__4657__auto___8108 = cljs.core.seq.call(null,seq__8084_8097);
if(temp__4657__auto___8108){
var seq__8084_8109__$1 = temp__4657__auto___8108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8084_8109__$1)){
var c__7549__auto___8110 = cljs.core.chunk_first.call(null,seq__8084_8109__$1);
var G__8111 = cljs.core.chunk_rest.call(null,seq__8084_8109__$1);
var G__8112 = c__7549__auto___8110;
var G__8113 = cljs.core.count.call(null,c__7549__auto___8110);
var G__8114 = (0);
seq__8084_8097 = G__8111;
chunk__8085_8098 = G__8112;
count__8086_8099 = G__8113;
i__8087_8100 = G__8114;
continue;
} else {
var vec__8091_8115 = cljs.core.first.call(null,seq__8084_8109__$1);
var k_8116 = cljs.core.nth.call(null,vec__8091_8115,(0),null);
var v_8117 = cljs.core.nth.call(null,vec__8091_8115,(1),null);
d3.core.attr.call(null,selection,k_8116,v_8117);

var G__8118 = cljs.core.next.call(null,seq__8084_8109__$1);
var G__8119 = null;
var G__8120 = (0);
var G__8121 = (0);
seq__8084_8097 = G__8118;
chunk__8085_8098 = G__8119;
count__8086_8099 = G__8120;
i__8087_8100 = G__8121;
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

d3.core.attr_STAR_.cljs$lang$applyTo = (function (seq8082){
var G__8083 = cljs.core.first.call(null,seq8082);
var seq8082__$1 = cljs.core.next.call(null,seq8082);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__8083,seq8082__$1);
});

d3.core.insert = (function d3$core$insert(selection,type,before){
return selection.insert(cljs.core.name.call(null,type),cljs.core.name.call(null,before));
});
d3.core.remove = (function d3$core$remove(selection){
return selection.remove();
});
d3.core.css = (function d3$core$css(var_args){
var args8122 = [];
var len__7843__auto___8125 = arguments.length;
var i__7844__auto___8126 = (0);
while(true){
if((i__7844__auto___8126 < len__7843__auto___8125)){
args8122.push((arguments[i__7844__auto___8126]));

var G__8127 = (i__7844__auto___8126 + (1));
i__7844__auto___8126 = G__8127;
continue;
} else {
}
break;
}

var G__8124 = args8122.length;
switch (G__8124) {
case 2:
return d3.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8122.length)].join('')));

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
var args8129 = [];
var len__7843__auto___8132 = arguments.length;
var i__7844__auto___8133 = (0);
while(true){
if((i__7844__auto___8133 < len__7843__auto___8132)){
args8129.push((arguments[i__7844__auto___8133]));

var G__8134 = (i__7844__auto___8133 + (1));
i__7844__auto___8133 = G__8134;
continue;
} else {
}
break;
}

var G__8131 = args8129.length;
switch (G__8131) {
case 2:
return d3.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8129.length)].join('')));

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
var args8136 = [];
var len__7843__auto___8139 = arguments.length;
var i__7844__auto___8140 = (0);
while(true){
if((i__7844__auto___8140 < len__7843__auto___8139)){
args8136.push((arguments[i__7844__auto___8140]));

var G__8141 = (i__7844__auto___8140 + (1));
i__7844__auto___8140 = G__8141;
continue;
} else {
}
break;
}

var G__8138 = args8136.length;
switch (G__8138) {
case 1:
return d3.core.datum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.datum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8136.length)].join('')));

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
var len__7843__auto___8147 = arguments.length;
var i__7844__auto___8148 = (0);
while(true){
if((i__7844__auto___8148 < len__7843__auto___8147)){
args__7850__auto__.push((arguments[i__7844__auto___8148]));

var G__8149 = (i__7844__auto___8148 + (1));
i__7844__auto___8148 = G__8149;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

d3.core.call.cljs$core$IFn$_invoke$arity$variadic = (function (selection,f,args){
return selection.call((function (p1__8143_SHARP_){
return cljs.core.apply.call(null,f,p1__8143_SHARP_,args);
}));
});

d3.core.call.cljs$lang$maxFixedArity = (2);

d3.core.call.cljs$lang$applyTo = (function (seq8144){
var G__8145 = cljs.core.first.call(null,seq8144);
var seq8144__$1 = cljs.core.next.call(null,seq8144);
var G__8146 = cljs.core.first.call(null,seq8144__$1);
var seq8144__$2 = cljs.core.next.call(null,seq8144__$1);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic(G__8145,G__8146,seq8144__$2);
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
var len__7843__auto___8153 = arguments.length;
var i__7844__auto___8154 = (0);
while(true){
if((i__7844__auto___8154 < len__7843__auto___8153)){
args__7850__auto__.push((arguments[i__7844__auto___8154]));

var G__8155 = (i__7844__auto___8154 + (1));
i__7844__auto___8154 = G__8155;
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

d3.core.ease.cljs$lang$applyTo = (function (seq8150){
var G__8151 = cljs.core.first.call(null,seq8150);
var seq8150__$1 = cljs.core.next.call(null,seq8150);
var G__8152 = cljs.core.first.call(null,seq8150__$1);
var seq8150__$2 = cljs.core.next.call(null,seq8150__$1);
return d3.core.ease.cljs$core$IFn$_invoke$arity$variadic(G__8151,G__8152,seq8150__$2);
});

d3.core.rotate = (function d3$core$rotate(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
d3.core.translate = (function d3$core$translate(var_args){
var args8156 = [];
var len__7843__auto___8159 = arguments.length;
var i__7844__auto___8160 = (0);
while(true){
if((i__7844__auto___8160 < len__7843__auto___8159)){
args8156.push((arguments[i__7844__auto___8160]));

var G__8161 = (i__7844__auto___8160 + (1));
i__7844__auto___8160 = G__8161;
continue;
} else {
}
break;
}

var G__8158 = args8156.length;
switch (G__8158) {
case 1:
return d3.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8156.length)].join('')));

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