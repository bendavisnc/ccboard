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
var args7897 = [];
var len__7843__auto___7900 = arguments.length;
var i__7844__auto___7901 = (0);
while(true){
if((i__7844__auto___7901 < len__7843__auto___7900)){
args7897.push((arguments[i__7844__auto___7901]));

var G__7902 = (i__7844__auto___7901 + (1));
i__7844__auto___7901 = G__7902;
continue;
} else {
}
break;
}

var G__7899 = args7897.length;
switch (G__7899) {
case 2:
return d3.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7897.length)].join('')));

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
var args7904 = [];
var len__7843__auto___7907 = arguments.length;
var i__7844__auto___7908 = (0);
while(true){
if((i__7844__auto___7908 < len__7843__auto___7907)){
args7904.push((arguments[i__7844__auto___7908]));

var G__7909 = (i__7844__auto___7908 + (1));
i__7844__auto___7908 = G__7909;
continue;
} else {
}
break;
}

var G__7906 = args7904.length;
switch (G__7906) {
case 2:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return d3.core.select_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7904.length)].join('')));

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
var args7911 = [];
var len__7843__auto___7914 = arguments.length;
var i__7844__auto___7915 = (0);
while(true){
if((i__7844__auto___7915 < len__7843__auto___7914)){
args7911.push((arguments[i__7844__auto___7915]));

var G__7916 = (i__7844__auto___7915 + (1));
i__7844__auto___7915 = G__7916;
continue;
} else {
}
break;
}

var G__7913 = args7911.length;
switch (G__7913) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7911.length)].join('')));

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
var len__7843__auto___7930 = arguments.length;
var i__7844__auto___7931 = (0);
while(true){
if((i__7844__auto___7931 < len__7843__auto___7930)){
args__7850__auto__.push((arguments[i__7844__auto___7931]));

var G__7932 = (i__7844__auto___7931 + (1));
i__7844__auto___7931 = G__7932;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (selection,kvs){
var seq__7920_7933 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7921_7934 = null;
var count__7922_7935 = (0);
var i__7923_7936 = (0);
while(true){
if((i__7923_7936 < count__7922_7935)){
var vec__7924_7937 = cljs.core._nth.call(null,chunk__7921_7934,i__7923_7936);
var k_7938 = cljs.core.nth.call(null,vec__7924_7937,(0),null);
var v_7939 = cljs.core.nth.call(null,vec__7924_7937,(1),null);
d3.core.attr.call(null,selection,k_7938,v_7939);

var G__7940 = seq__7920_7933;
var G__7941 = chunk__7921_7934;
var G__7942 = count__7922_7935;
var G__7943 = (i__7923_7936 + (1));
seq__7920_7933 = G__7940;
chunk__7921_7934 = G__7941;
count__7922_7935 = G__7942;
i__7923_7936 = G__7943;
continue;
} else {
var temp__4657__auto___7944 = cljs.core.seq.call(null,seq__7920_7933);
if(temp__4657__auto___7944){
var seq__7920_7945__$1 = temp__4657__auto___7944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7920_7945__$1)){
var c__7549__auto___7946 = cljs.core.chunk_first.call(null,seq__7920_7945__$1);
var G__7947 = cljs.core.chunk_rest.call(null,seq__7920_7945__$1);
var G__7948 = c__7549__auto___7946;
var G__7949 = cljs.core.count.call(null,c__7549__auto___7946);
var G__7950 = (0);
seq__7920_7933 = G__7947;
chunk__7921_7934 = G__7948;
count__7922_7935 = G__7949;
i__7923_7936 = G__7950;
continue;
} else {
var vec__7927_7951 = cljs.core.first.call(null,seq__7920_7945__$1);
var k_7952 = cljs.core.nth.call(null,vec__7927_7951,(0),null);
var v_7953 = cljs.core.nth.call(null,vec__7927_7951,(1),null);
d3.core.attr.call(null,selection,k_7952,v_7953);

var G__7954 = cljs.core.next.call(null,seq__7920_7945__$1);
var G__7955 = null;
var G__7956 = (0);
var G__7957 = (0);
seq__7920_7933 = G__7954;
chunk__7921_7934 = G__7955;
count__7922_7935 = G__7956;
i__7923_7936 = G__7957;
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

d3.core.attr_STAR_.cljs$lang$applyTo = (function (seq7918){
var G__7919 = cljs.core.first.call(null,seq7918);
var seq7918__$1 = cljs.core.next.call(null,seq7918);
return d3.core.attr_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__7919,seq7918__$1);
});

d3.core.insert = (function d3$core$insert(selection,type,before){
return selection.insert(cljs.core.name.call(null,type),cljs.core.name.call(null,before));
});
d3.core.remove = (function d3$core$remove(selection){
return selection.remove();
});
d3.core.css = (function d3$core$css(var_args){
var args7958 = [];
var len__7843__auto___7961 = arguments.length;
var i__7844__auto___7962 = (0);
while(true){
if((i__7844__auto___7962 < len__7843__auto___7961)){
args7958.push((arguments[i__7844__auto___7962]));

var G__7963 = (i__7844__auto___7962 + (1));
i__7844__auto___7962 = G__7963;
continue;
} else {
}
break;
}

var G__7960 = args7958.length;
switch (G__7960) {
case 2:
return d3.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7958.length)].join('')));

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
var args7965 = [];
var len__7843__auto___7968 = arguments.length;
var i__7844__auto___7969 = (0);
while(true){
if((i__7844__auto___7969 < len__7843__auto___7968)){
args7965.push((arguments[i__7844__auto___7969]));

var G__7970 = (i__7844__auto___7969 + (1));
i__7844__auto___7969 = G__7970;
continue;
} else {
}
break;
}

var G__7967 = args7965.length;
switch (G__7967) {
case 2:
return d3.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return d3.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7965.length)].join('')));

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
var args7972 = [];
var len__7843__auto___7975 = arguments.length;
var i__7844__auto___7976 = (0);
while(true){
if((i__7844__auto___7976 < len__7843__auto___7975)){
args7972.push((arguments[i__7844__auto___7976]));

var G__7977 = (i__7844__auto___7976 + (1));
i__7844__auto___7976 = G__7977;
continue;
} else {
}
break;
}

var G__7974 = args7972.length;
switch (G__7974) {
case 1:
return d3.core.datum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.datum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7972.length)].join('')));

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
var len__7843__auto___7983 = arguments.length;
var i__7844__auto___7984 = (0);
while(true){
if((i__7844__auto___7984 < len__7843__auto___7983)){
args__7850__auto__.push((arguments[i__7844__auto___7984]));

var G__7985 = (i__7844__auto___7984 + (1));
i__7844__auto___7984 = G__7985;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

d3.core.call.cljs$core$IFn$_invoke$arity$variadic = (function (selection,f,args){
return selection.call((function (p1__7979_SHARP_){
return cljs.core.apply.call(null,f,p1__7979_SHARP_,args);
}));
});

d3.core.call.cljs$lang$maxFixedArity = (2);

d3.core.call.cljs$lang$applyTo = (function (seq7980){
var G__7981 = cljs.core.first.call(null,seq7980);
var seq7980__$1 = cljs.core.next.call(null,seq7980);
var G__7982 = cljs.core.first.call(null,seq7980__$1);
var seq7980__$2 = cljs.core.next.call(null,seq7980__$1);
return d3.core.call.cljs$core$IFn$_invoke$arity$variadic(G__7981,G__7982,seq7980__$2);
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
var len__7843__auto___7989 = arguments.length;
var i__7844__auto___7990 = (0);
while(true){
if((i__7844__auto___7990 < len__7843__auto___7989)){
args__7850__auto__.push((arguments[i__7844__auto___7990]));

var G__7991 = (i__7844__auto___7990 + (1));
i__7844__auto___7990 = G__7991;
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

d3.core.ease.cljs$lang$applyTo = (function (seq7986){
var G__7987 = cljs.core.first.call(null,seq7986);
var seq7986__$1 = cljs.core.next.call(null,seq7986);
var G__7988 = cljs.core.first.call(null,seq7986__$1);
var seq7986__$2 = cljs.core.next.call(null,seq7986__$1);
return d3.core.ease.cljs$core$IFn$_invoke$arity$variadic(G__7987,G__7988,seq7986__$2);
});

d3.core.rotate = (function d3$core$rotate(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
d3.core.translate = (function d3$core$translate(var_args){
var args7992 = [];
var len__7843__auto___7995 = arguments.length;
var i__7844__auto___7996 = (0);
while(true){
if((i__7844__auto___7996 < len__7843__auto___7995)){
args7992.push((arguments[i__7844__auto___7996]));

var G__7997 = (i__7844__auto___7996 + (1));
i__7844__auto___7996 = G__7997;
continue;
} else {
}
break;
}

var G__7994 = args7992.length;
switch (G__7994) {
case 1:
return d3.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args7992.length)].join('')));

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