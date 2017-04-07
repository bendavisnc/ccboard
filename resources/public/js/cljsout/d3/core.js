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
var args10028 = [];
var len__7843__auto___10031 = arguments.length;
var i__7844__auto___10032 = (0);
while(true){
if((i__7844__auto___10032 < len__7843__auto___10031)){
args10028.push((arguments[i__7844__auto___10032]));

var G__10033 = (i__7844__auto___10032 + (1));
i__7844__auto___10032 = G__10033;
continue;
} else {
}
break;
}

var G__10030 = args10028.length;
switch (G__10030) {
case 2:
return d3.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10028.length)].join('')));

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
var args10035 = [];
var len__7843__auto___10038 = arguments.length;
var i__7844__auto___10039 = (0);
while(true){
if((i__7844__auto___10039 < len__7843__auto___10038)){
args10035.push((arguments[i__7844__auto___10039]));

var G__10040 = (i__7844__auto___10039 + (1));
i__7844__auto___10039 = G__10040;
continue;
} else {
}
break;
}

var G__10037 = args10035.length;
switch (G__10037) {
case 2:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10035.length)].join('')));

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
var args10042 = [];
var len__7843__auto___10045 = arguments.length;
var i__7844__auto___10046 = (0);
while(true){
if((i__7844__auto___10046 < len__7843__auto___10045)){
args10042.push((arguments[i__7844__auto___10046]));

var G__10047 = (i__7844__auto___10046 + (1));
i__7844__auto___10046 = G__10047;
continue;
} else {
}
break;
}

var G__10044 = args10042.length;
switch (G__10044) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10042.length)].join('')));

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
var len__7843__auto___10061 = arguments.length;
var i__7844__auto___10062 = (0);
while(true){
if((i__7844__auto___10062 < len__7843__auto___10061)){
args__7850__auto__.push((arguments[i__7844__auto___10062]));

var G__10063 = (i__7844__auto___10062 + (1));
i__7844__auto___10062 = G__10063;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (selection,kvs){
var seq__10051_10064 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10052_10065 = null;
var count__10053_10066 = (0);
var i__10054_10067 = (0);
while(true){
if((i__10054_10067 < count__10053_10066)){
var vec__10055_10068 = cljs.core._nth.call(null,chunk__10052_10065,i__10054_10067);
var k_10069 = cljs.core.nth.call(null,vec__10055_10068,(0),null);
var v_10070 = cljs.core.nth.call(null,vec__10055_10068,(1),null);
d3.core.attr.call(null,selection,k_10069,v_10070);

var G__10071 = seq__10051_10064;
var G__10072 = chunk__10052_10065;
var G__10073 = count__10053_10066;
var G__10074 = (i__10054_10067 + (1));
seq__10051_10064 = G__10071;
chunk__10052_10065 = G__10072;
count__10053_10066 = G__10073;
i__10054_10067 = G__10074;
continue;
} else {
var temp__4657__auto___10075 = cljs.core.seq.call(null,seq__10051_10064);
if(temp__4657__auto___10075){
var seq__10051_10076__$1 = temp__4657__auto___10075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10051_10076__$1)){
var c__7549__auto___10077 = cljs.core.chunk_first.call(null,seq__10051_10076__$1);
var G__10078 = cljs.core.chunk_rest.call(null,seq__10051_10076__$1);
var G__10079 = c__7549__auto___10077;
var G__10080 = cljs.core.count.call(null,c__7549__auto___10077);
var G__10081 = (0);
seq__10051_10064 = G__10078;
chunk__10052_10065 = G__10079;
count__10053_10066 = G__10080;
i__10054_10067 = G__10081;
continue;
} else {
var vec__10058_10082 = cljs.core.first.call(null,seq__10051_10076__$1);
var k_10083 = cljs.core.nth.call(null,vec__10058_10082,(0),null);
var v_10084 = cljs.core.nth.call(null,vec__10058_10082,(1),null);
d3.core.attr.call(null,selection,k_10083,v_10084);

var G__10085 = cljs.core.next.call(null,seq__10051_10076__$1);
var G__10086 = null;
var G__10087 = (0);
var G__10088 = (0);
seq__10051_10064 = G__10085;
chunk__10052_10065 = G__10086;
count__10053_10066 = G__10087;
i__10054_10067 = G__10088;
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

d3.core.attr_STAR_.cljs$lang$applyTo = (function (seq10049){
var G__10050 = cljs.core.first.call(null,seq10049);
var seq10049__$1 = cljs.core.next.call(null,seq10049);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10050,seq10049__$1);
});

d3.core.insert = (function d3$core$insert(selection,type,before){
return selection.insert(cljs.core.name.call(null,type),cljs.core.name.call(null,before));
});
d3.core.remove = (function d3$core$remove(selection){
return selection.remove();
});
d3.core.css = (function d3$core$css(var_args){
var args10089 = [];
var len__7843__auto___10092 = arguments.length;
var i__7844__auto___10093 = (0);
while(true){
if((i__7844__auto___10093 < len__7843__auto___10092)){
args10089.push((arguments[i__7844__auto___10093]));

var G__10094 = (i__7844__auto___10093 + (1));
i__7844__auto___10093 = G__10094;
continue;
} else {
}
break;
}

var G__10091 = args10089.length;
switch (G__10091) {
case 2:
return d3.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10089.length)].join('')));

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
var args10096 = [];
var len__7843__auto___10099 = arguments.length;
var i__7844__auto___10100 = (0);
while(true){
if((i__7844__auto___10100 < len__7843__auto___10099)){
args10096.push((arguments[i__7844__auto___10100]));

var G__10101 = (i__7844__auto___10100 + (1));
i__7844__auto___10100 = G__10101;
continue;
} else {
}
break;
}

var G__10098 = args10096.length;
switch (G__10098) {
case 2:
return d3.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10096.length)].join('')));

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
var args10103 = [];
var len__7843__auto___10106 = arguments.length;
var i__7844__auto___10107 = (0);
while(true){
if((i__7844__auto___10107 < len__7843__auto___10106)){
args10103.push((arguments[i__7844__auto___10107]));

var G__10108 = (i__7844__auto___10107 + (1));
i__7844__auto___10107 = G__10108;
continue;
} else {
}
break;
}

var G__10105 = args10103.length;
switch (G__10105) {
case 1:
return d3.core.datum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.datum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10103.length)].join('')));

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
var len__7843__auto___10114 = arguments.length;
var i__7844__auto___10115 = (0);
while(true){
if((i__7844__auto___10115 < len__7843__auto___10114)){
args__7850__auto__.push((arguments[i__7844__auto___10115]));

var G__10116 = (i__7844__auto___10115 + (1));
i__7844__auto___10115 = G__10116;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

d3.core.call.cljs$core$IFn$_invoke$arity$variadic = (function (selection,f,args){
return selection.call((function (p1__10110_SHARP_){
return cljs.core.apply.call(null,f,p1__10110_SHARP_,args);
}));
});

d3.core.call.cljs$lang$maxFixedArity = (2);

d3.core.call.cljs$lang$applyTo = (function (seq10111){
var G__10112 = cljs.core.first.call(null,seq10111);
var seq10111__$1 = cljs.core.next.call(null,seq10111);
var G__10113 = cljs.core.first.call(null,seq10111__$1);
var seq10111__$2 = cljs.core.next.call(null,seq10111__$1);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic(G__10112,G__10113,seq10111__$2);
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
var len__7843__auto___10120 = arguments.length;
var i__7844__auto___10121 = (0);
while(true){
if((i__7844__auto___10121 < len__7843__auto___10120)){
args__7850__auto__.push((arguments[i__7844__auto___10121]));

var G__10122 = (i__7844__auto___10121 + (1));
i__7844__auto___10121 = G__10122;
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

d3.core.ease.cljs$lang$applyTo = (function (seq10117){
var G__10118 = cljs.core.first.call(null,seq10117);
var seq10117__$1 = cljs.core.next.call(null,seq10117);
var G__10119 = cljs.core.first.call(null,seq10117__$1);
var seq10117__$2 = cljs.core.next.call(null,seq10117__$1);
return d3.core.ease.cljs$core$IFn$_invoke$arity$variadic(G__10118,G__10119,seq10117__$2);
});

d3.core.rotate = (function d3$core$rotate(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
d3.core.translate = (function d3$core$translate(var_args){
var args10123 = [];
var len__7843__auto___10126 = arguments.length;
var i__7844__auto___10127 = (0);
while(true){
if((i__7844__auto___10127 < len__7843__auto___10126)){
args10123.push((arguments[i__7844__auto___10127]));

var G__10128 = (i__7844__auto___10127 + (1));
i__7844__auto___10127 = G__10128;
continue;
} else {
}
break;
}

var G__10125 = args10123.length;
switch (G__10125) {
case 1:
return d3.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10123.length)].join('')));

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