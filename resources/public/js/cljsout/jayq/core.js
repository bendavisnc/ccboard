// Compiled by ClojureScript 1.9.494 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[crateGroup="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args8734 = [];
var len__7843__auto___8737 = arguments.length;
var i__7844__auto___8738 = (0);
while(true){
if((i__7844__auto___8738 < len__7843__auto___8737)){
args8734.push((arguments[i__7844__auto___8738]));

var G__8739 = (i__7844__auto___8738 + (1));
i__7844__auto___8738 = G__8739;
continue;
} else {
}
break;
}

var G__8736 = args8734.length;
switch (G__8736) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8734.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__6730__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6730__auto__)){
return or__6730__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__8742 = null;
var G__8742__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8742__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8742 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8742__2.call(this,self__,k);
case 3:
return G__8742__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8742.cljs$core$IFn$_invoke$arity$2 = G__8742__2;
G__8742.cljs$core$IFn$_invoke$arity$3 = G__8742__3;
return G__8742;
})()
;

jQuery.prototype.apply = (function (self__,args8741){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8741)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8750 = arguments.length;
var i__7844__auto___8751 = (0);
while(true){
if((i__7844__auto___8751 < len__7843__auto___8750)){
args__7850__auto__.push((arguments[i__7844__auto___8751]));

var G__8752 = (i__7844__auto___8751 + (1));
i__7844__auto___8751 = G__8752;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__8746){
var vec__8747 = p__8746;
var speed = cljs.core.nth.call(null,vec__8747,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8747,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq8743){
var G__8744 = cljs.core.first.call(null,seq8743);
var seq8743__$1 = cljs.core.next.call(null,seq8743);
var G__8745 = cljs.core.first.call(null,seq8743__$1);
var seq8743__$2 = cljs.core.next.call(null,seq8743__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__8744,G__8745,seq8743__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args8753 = [];
var len__7843__auto___8756 = arguments.length;
var i__7844__auto___8757 = (0);
while(true){
if((i__7844__auto___8757 < len__7843__auto___8756)){
args8753.push((arguments[i__7844__auto___8757]));

var G__8758 = (i__7844__auto___8757 + (1));
i__7844__auto___8757 = G__8758;
continue;
} else {
}
break;
}

var G__8755 = args8753.length;
switch (G__8755) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8753.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var args8760 = [];
var len__7843__auto___8763 = arguments.length;
var i__7844__auto___8764 = (0);
while(true){
if((i__7844__auto___8764 < len__7843__auto___8763)){
args8760.push((arguments[i__7844__auto___8764]));

var G__8765 = (i__7844__auto___8764 + (1));
i__7844__auto___8764 = G__8765;
continue;
} else {
}
break;
}

var G__8762 = args8760.length;
switch (G__8762) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8760.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var args8767 = [];
var len__7843__auto___8770 = arguments.length;
var i__7844__auto___8771 = (0);
while(true){
if((i__7844__auto___8771 < len__7843__auto___8770)){
args8767.push((arguments[i__7844__auto___8771]));

var G__8772 = (i__7844__auto___8771 + (1));
i__7844__auto___8771 = G__8772;
continue;
} else {
}
break;
}

var G__8769 = args8767.length;
switch (G__8769) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8767.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var args8774 = [];
var len__7843__auto___8777 = arguments.length;
var i__7844__auto___8778 = (0);
while(true){
if((i__7844__auto___8778 < len__7843__auto___8777)){
args8774.push((arguments[i__7844__auto___8778]));

var G__8779 = (i__7844__auto___8778 + (1));
i__7844__auto___8778 = G__8779;
continue;
} else {
}
break;
}

var G__8776 = args8774.length;
switch (G__8776) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8774.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args8781 = [];
var len__7843__auto___8784 = arguments.length;
var i__7844__auto___8785 = (0);
while(true){
if((i__7844__auto___8785 < len__7843__auto___8784)){
args8781.push((arguments[i__7844__auto___8785]));

var G__8786 = (i__7844__auto___8785 + (1));
i__7844__auto___8785 = G__8786;
continue;
} else {
}
break;
}

var G__8783 = args8781.length;
switch (G__8783) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8781.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args8788 = [];
var len__7843__auto___8791 = arguments.length;
var i__7844__auto___8792 = (0);
while(true){
if((i__7844__auto___8792 < len__7843__auto___8791)){
args8788.push((arguments[i__7844__auto___8792]));

var G__8793 = (i__7844__auto___8792 + (1));
i__7844__auto___8792 = G__8793;
continue;
} else {
}
break;
}

var G__8790 = args8788.length;
switch (G__8790) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8788.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args8795 = [];
var len__7843__auto___8798 = arguments.length;
var i__7844__auto___8799 = (0);
while(true){
if((i__7844__auto___8799 < len__7843__auto___8798)){
args8795.push((arguments[i__7844__auto___8799]));

var G__8800 = (i__7844__auto___8799 + (1));
i__7844__auto___8799 = G__8800;
continue;
} else {
}
break;
}

var G__8797 = args8795.length;
switch (G__8797) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8795.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8808 = arguments.length;
var i__7844__auto___8809 = (0);
while(true){
if((i__7844__auto___8809 < len__7843__auto___8808)){
args__7850__auto__.push((arguments[i__7844__auto___8809]));

var G__8810 = (i__7844__auto___8809 + (1));
i__7844__auto___8809 = G__8810;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8804){
var vec__8805 = p__8804;
var speed = cljs.core.nth.call(null,vec__8805,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8805,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq8802){
var G__8803 = cljs.core.first.call(null,seq8802);
var seq8802__$1 = cljs.core.next.call(null,seq8802);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__8803,seq8802__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8817 = arguments.length;
var i__7844__auto___8818 = (0);
while(true){
if((i__7844__auto___8818 < len__7843__auto___8817)){
args__7850__auto__.push((arguments[i__7844__auto___8818]));

var G__8819 = (i__7844__auto___8818 + (1));
i__7844__auto___8818 = G__8819;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8813){
var vec__8814 = p__8813;
var speed = cljs.core.nth.call(null,vec__8814,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8814,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq8811){
var G__8812 = cljs.core.first.call(null,seq8811);
var seq8811__$1 = cljs.core.next.call(null,seq8811);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__8812,seq8811__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8826 = arguments.length;
var i__7844__auto___8827 = (0);
while(true){
if((i__7844__auto___8827 < len__7843__auto___8826)){
args__7850__auto__.push((arguments[i__7844__auto___8827]));

var G__8828 = (i__7844__auto___8827 + (1));
i__7844__auto___8827 = G__8828;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8822){
var vec__8823 = p__8822;
var speed = cljs.core.nth.call(null,vec__8823,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8823,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq8820){
var G__8821 = cljs.core.first.call(null,seq8820);
var seq8820__$1 = cljs.core.next.call(null,seq8820);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__8821,seq8820__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8835 = arguments.length;
var i__7844__auto___8836 = (0);
while(true){
if((i__7844__auto___8836 < len__7843__auto___8835)){
args__7850__auto__.push((arguments[i__7844__auto___8836]));

var G__8837 = (i__7844__auto___8836 + (1));
i__7844__auto___8836 = G__8837;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8831){
var vec__8832 = p__8831;
var speed = cljs.core.nth.call(null,vec__8832,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8832,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq8829){
var G__8830 = cljs.core.first.call(null,seq8829);
var seq8829__$1 = cljs.core.next.call(null,seq8829);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__8830,seq8829__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8844 = arguments.length;
var i__7844__auto___8845 = (0);
while(true){
if((i__7844__auto___8845 < len__7843__auto___8844)){
args__7850__auto__.push((arguments[i__7844__auto___8845]));

var G__8846 = (i__7844__auto___8845 + (1));
i__7844__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8840){
var vec__8841 = p__8840;
var speed = cljs.core.nth.call(null,vec__8841,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8841,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq8838){
var G__8839 = cljs.core.first.call(null,seq8838);
var seq8838__$1 = cljs.core.next.call(null,seq8838);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__8839,seq8838__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8853 = arguments.length;
var i__7844__auto___8854 = (0);
while(true){
if((i__7844__auto___8854 < len__7843__auto___8853)){
args__7850__auto__.push((arguments[i__7844__auto___8854]));

var G__8855 = (i__7844__auto___8854 + (1));
i__7844__auto___8854 = G__8855;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8849){
var vec__8850 = p__8849;
var speed = cljs.core.nth.call(null,vec__8850,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8850,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq8847){
var G__8848 = cljs.core.first.call(null,seq8847);
var seq8847__$1 = cljs.core.next.call(null,seq8847);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__8848,seq8847__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8862 = arguments.length;
var i__7844__auto___8863 = (0);
while(true){
if((i__7844__auto___8863 < len__7843__auto___8862)){
args__7850__auto__.push((arguments[i__7844__auto___8863]));

var G__8864 = (i__7844__auto___8863 + (1));
i__7844__auto___8863 = G__8864;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8858){
var vec__8859 = p__8858;
var speed = cljs.core.nth.call(null,vec__8859,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8859,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq8856){
var G__8857 = cljs.core.first.call(null,seq8856);
var seq8856__$1 = cljs.core.next.call(null,seq8856);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__8857,seq8856__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args8865 = [];
var len__7843__auto___8868 = arguments.length;
var i__7844__auto___8869 = (0);
while(true){
if((i__7844__auto___8869 < len__7843__auto___8868)){
args8865.push((arguments[i__7844__auto___8869]));

var G__8870 = (i__7844__auto___8869 + (1));
i__7844__auto___8869 = G__8870;
continue;
} else {
}
break;
}

var G__8867 = args8865.length;
switch (G__8867) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8865.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args8872 = [];
var len__7843__auto___8875 = arguments.length;
var i__7844__auto___8876 = (0);
while(true){
if((i__7844__auto___8876 < len__7843__auto___8875)){
args8872.push((arguments[i__7844__auto___8876]));

var G__8877 = (i__7844__auto___8876 + (1));
i__7844__auto___8876 = G__8877;
continue;
} else {
}
break;
}

var G__8874 = args8872.length;
switch (G__8874) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8872.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args8879 = [];
var len__7843__auto___8882 = arguments.length;
var i__7844__auto___8883 = (0);
while(true){
if((i__7844__auto___8883 < len__7843__auto___8882)){
args8879.push((arguments[i__7844__auto___8883]));

var G__8884 = (i__7844__auto___8883 + (1));
i__7844__auto___8883 = G__8884;
continue;
} else {
}
break;
}

var G__8881 = args8879.length;
switch (G__8881) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8879.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var args8886 = [];
var len__7843__auto___8889 = arguments.length;
var i__7844__auto___8890 = (0);
while(true){
if((i__7844__auto___8890 < len__7843__auto___8889)){
args8886.push((arguments[i__7844__auto___8890]));

var G__8891 = (i__7844__auto___8890 + (1));
i__7844__auto___8890 = G__8891;
continue;
} else {
}
break;
}

var G__8888 = args8886.length;
switch (G__8888) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8886.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var args8893 = [];
var len__7843__auto___8896 = arguments.length;
var i__7844__auto___8897 = (0);
while(true){
if((i__7844__auto___8897 < len__7843__auto___8896)){
args8893.push((arguments[i__7844__auto___8897]));

var G__8898 = (i__7844__auto___8897 + (1));
i__7844__auto___8897 = G__8898;
continue;
} else {
}
break;
}

var G__8895 = args8893.length;
switch (G__8895) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8893.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var args8900 = [];
var len__7843__auto___8903 = arguments.length;
var i__7844__auto___8904 = (0);
while(true){
if((i__7844__auto___8904 < len__7843__auto___8903)){
args8900.push((arguments[i__7844__auto___8904]));

var G__8905 = (i__7844__auto___8904 + (1));
i__7844__auto___8904 = G__8905;
continue;
} else {
}
break;
}

var G__8902 = args8900.length;
switch (G__8902) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8900.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var args8907 = [];
var len__7843__auto___8910 = arguments.length;
var i__7844__auto___8911 = (0);
while(true){
if((i__7844__auto___8911 < len__7843__auto___8910)){
args8907.push((arguments[i__7844__auto___8911]));

var G__8912 = (i__7844__auto___8911 + (1));
i__7844__auto___8911 = G__8912;
continue;
} else {
}
break;
}

var G__8909 = args8907.length;
switch (G__8909) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8907.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args8914 = [];
var len__7843__auto___8917 = arguments.length;
var i__7844__auto___8918 = (0);
while(true){
if((i__7844__auto___8918 < len__7843__auto___8917)){
args8914.push((arguments[i__7844__auto___8918]));

var G__8919 = (i__7844__auto___8918 + (1));
i__7844__auto___8918 = G__8919;
continue;
} else {
}
break;
}

var G__8916 = args8914.length;
switch (G__8916) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8914.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var args8921 = [];
var len__7843__auto___8924 = arguments.length;
var i__7844__auto___8925 = (0);
while(true){
if((i__7844__auto___8925 < len__7843__auto___8924)){
args8921.push((arguments[i__7844__auto___8925]));

var G__8926 = (i__7844__auto___8925 + (1));
i__7844__auto___8925 = G__8926;
continue;
} else {
}
break;
}

var G__8923 = args8921.length;
switch (G__8923) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8921.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args8928 = [];
var len__7843__auto___8931 = arguments.length;
var i__7844__auto___8932 = (0);
while(true){
if((i__7844__auto___8932 < len__7843__auto___8931)){
args8928.push((arguments[i__7844__auto___8932]));

var G__8933 = (i__7844__auto___8932 + (1));
i__7844__auto___8932 = G__8933;
continue;
} else {
}
break;
}

var G__8930 = args8928.length;
switch (G__8930) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8928.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__7850__auto__ = [];
var len__7843__auto___8942 = arguments.length;
var i__7844__auto___8943 = (0);
while(true){
if((i__7844__auto___8943 < len__7843__auto___8942)){
args__7850__auto__.push((arguments[i__7844__auto___8943]));

var G__8944 = (i__7844__auto___8943 + (1));
i__7844__auto___8943 = G__8944;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__8938){
var vec__8939 = p__8938;
var context = cljs.core.nth.call(null,vec__8939,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq8935){
var G__8936 = cljs.core.first.call(null,seq8935);
var seq8935__$1 = cljs.core.next.call(null,seq8935);
var G__8937 = cljs.core.first.call(null,seq8935__$1);
var seq8935__$2 = cljs.core.next.call(null,seq8935__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__8936,G__8937,seq8935__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args8945 = [];
var len__7843__auto___8948 = arguments.length;
var i__7844__auto___8949 = (0);
while(true){
if((i__7844__auto___8949 < len__7843__auto___8948)){
args8945.push((arguments[i__7844__auto___8949]));

var G__8950 = (i__7844__auto___8949 + (1));
i__7844__auto___8949 = G__8950;
continue;
} else {
}
break;
}

var G__8947 = args8945.length;
switch (G__8947) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8945.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args8952 = [];
var len__7843__auto___8955 = arguments.length;
var i__7844__auto___8956 = (0);
while(true){
if((i__7844__auto___8956 < len__7843__auto___8955)){
args8952.push((arguments[i__7844__auto___8956]));

var G__8957 = (i__7844__auto___8956 + (1));
i__7844__auto___8956 = G__8957;
continue;
} else {
}
break;
}

var G__8954 = args8952.length;
switch (G__8954) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8952.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args8959 = [];
var len__7843__auto___8962 = arguments.length;
var i__7844__auto___8963 = (0);
while(true){
if((i__7844__auto___8963 < len__7843__auto___8962)){
args8959.push((arguments[i__7844__auto___8963]));

var G__8964 = (i__7844__auto___8963 + (1));
i__7844__auto___8963 = G__8964;
continue;
} else {
}
break;
}

var G__8961 = args8959.length;
switch (G__8961) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8959.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args8966 = [];
var len__7843__auto___8969 = arguments.length;
var i__7844__auto___8970 = (0);
while(true){
if((i__7844__auto___8970 < len__7843__auto___8969)){
args8966.push((arguments[i__7844__auto___8970]));

var G__8971 = (i__7844__auto___8970 + (1));
i__7844__auto___8970 = G__8971;
continue;
} else {
}
break;
}

var G__8968 = args8966.length;
switch (G__8968) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8966.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__8975){
var map__8978 = p__8975;
var map__8978__$1 = ((((!((map__8978 == null)))?((((map__8978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8978):map__8978);
var request = map__8978__$1;
var data = cljs.core.get.call(null,map__8978__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__8978__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__8978,map__8978__$1,request,data,contentType){
return (function (p1__8974_SHARP_){
if(cljs.core.truth_((function (){var and__6718__auto__ = ct;
if(cljs.core.truth_(and__6718__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6718__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__8974_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__8974_SHARP_;
}
});})(ct,map__8978,map__8978__$1,request,data,contentType))
.call(null,((function (ct,map__8978,map__8978__$1,request,data,contentType){
return (function (p1__8973_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__8973_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__8973_SHARP_;
}
});})(ct,map__8978,map__8978__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args8980 = [];
var len__7843__auto___8983 = arguments.length;
var i__7844__auto___8984 = (0);
while(true){
if((i__7844__auto___8984 < len__7843__auto___8983)){
args8980.push((arguments[i__7844__auto___8984]));

var G__8985 = (i__7844__auto___8984 + (1));
i__7844__auto___8984 = G__8985;
continue;
} else {
}
break;
}

var G__8982 = args8980.length;
switch (G__8982) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8980.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__8987,content,callback){
var vec__8991 = p__8987;
var method = cljs.core.nth.call(null,vec__8991,(0),null);
var uri = cljs.core.nth.call(null,vec__8991,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9001 = arguments.length;
var i__7844__auto___9002 = (0);
while(true){
if((i__7844__auto___9002 < len__7843__auto___9001)){
args__7850__auto__.push((arguments[i__7844__auto___9002]));

var G__9003 = (i__7844__auto___9002 + (1));
i__7844__auto___9002 = G__9003;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__8997){
var vec__8998 = p__8997;
var func = cljs.core.nth.call(null,vec__8998,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq8994){
var G__8995 = cljs.core.first.call(null,seq8994);
var seq8994__$1 = cljs.core.next.call(null,seq8994);
var G__8996 = cljs.core.first.call(null,seq8994__$1);
var seq8994__$2 = cljs.core.next.call(null,seq8994__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__8995,G__8996,seq8994__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9011 = arguments.length;
var i__7844__auto___9012 = (0);
while(true){
if((i__7844__auto___9012 < len__7843__auto___9011)){
args__7850__auto__.push((arguments[i__7844__auto___9012]));

var G__9013 = (i__7844__auto___9012 + (1));
i__7844__auto___9012 = G__9013;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__9007){
var vec__9008 = p__9007;
var sel = cljs.core.nth.call(null,vec__9008,(0),null);
var data = cljs.core.nth.call(null,vec__9008,(1),null);
var handler = cljs.core.nth.call(null,vec__9008,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq9004){
var G__9005 = cljs.core.first.call(null,seq9004);
var seq9004__$1 = cljs.core.next.call(null,seq9004);
var G__9006 = cljs.core.first.call(null,seq9004__$1);
var seq9004__$2 = cljs.core.next.call(null,seq9004__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__9005,G__9006,seq9004__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9021 = arguments.length;
var i__7844__auto___9022 = (0);
while(true){
if((i__7844__auto___9022 < len__7843__auto___9021)){
args__7850__auto__.push((arguments[i__7844__auto___9022]));

var G__9023 = (i__7844__auto___9022 + (1));
i__7844__auto___9022 = G__9023;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__9017){
var vec__9018 = p__9017;
var sel = cljs.core.nth.call(null,vec__9018,(0),null);
var data = cljs.core.nth.call(null,vec__9018,(1),null);
var handler = cljs.core.nth.call(null,vec__9018,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq9014){
var G__9015 = cljs.core.first.call(null,seq9014);
var seq9014__$1 = cljs.core.next.call(null,seq9014);
var G__9016 = cljs.core.first.call(null,seq9014__$1);
var seq9014__$2 = cljs.core.next.call(null,seq9014__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__9015,G__9016,seq9014__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9031 = arguments.length;
var i__7844__auto___9032 = (0);
while(true){
if((i__7844__auto___9032 < len__7843__auto___9031)){
args__7850__auto__.push((arguments[i__7844__auto___9032]));

var G__9033 = (i__7844__auto___9032 + (1));
i__7844__auto___9032 = G__9033;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((2) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7851__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__9027){
var vec__9028 = p__9027;
var sel = cljs.core.nth.call(null,vec__9028,(0),null);
var handler = cljs.core.nth.call(null,vec__9028,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq9024){
var G__9025 = cljs.core.first.call(null,seq9024);
var seq9024__$1 = cljs.core.next.call(null,seq9024);
var G__9026 = cljs.core.first.call(null,seq9024__$1);
var seq9024__$2 = cljs.core.next.call(null,seq9024__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__9025,G__9026,seq9024__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args9034 = [];
var len__7843__auto___9037 = arguments.length;
var i__7844__auto___9038 = (0);
while(true){
if((i__7844__auto___9038 < len__7843__auto___9037)){
args9034.push((arguments[i__7844__auto___9038]));

var G__9039 = (i__7844__auto___9038 + (1));
i__7844__auto___9038 = G__9039;
continue;
} else {
}
break;
}

var G__9036 = args9034.length;
switch (G__9036) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9034.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var args9041 = [];
var len__7843__auto___9044 = arguments.length;
var i__7844__auto___9045 = (0);
while(true){
if((i__7844__auto___9045 < len__7843__auto___9044)){
args9041.push((arguments[i__7844__auto___9045]));

var G__9046 = (i__7844__auto___9045 + (1));
i__7844__auto___9045 = G__9046;
continue;
} else {
}
break;
}

var G__9043 = args9041.length;
switch (G__9043) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9041.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args9048 = [];
var len__7843__auto___9051 = arguments.length;
var i__7844__auto___9052 = (0);
while(true){
if((i__7844__auto___9052 < len__7843__auto___9051)){
args9048.push((arguments[i__7844__auto___9052]));

var G__9053 = (i__7844__auto___9052 + (1));
i__7844__auto___9052 = G__9053;
continue;
} else {
}
break;
}

var G__9050 = args9048.length;
switch (G__9050) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9048.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args9055 = [];
var len__7843__auto___9058 = arguments.length;
var i__7844__auto___9059 = (0);
while(true){
if((i__7844__auto___9059 < len__7843__auto___9058)){
args9055.push((arguments[i__7844__auto___9059]));

var G__9060 = (i__7844__auto___9059 + (1));
i__7844__auto___9059 = G__9060;
continue;
} else {
}
break;
}

var G__9057 = args9055.length;
switch (G__9057) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9055.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args9062 = [];
var len__7843__auto___9065 = arguments.length;
var i__7844__auto___9066 = (0);
while(true){
if((i__7844__auto___9066 < len__7843__auto___9065)){
args9062.push((arguments[i__7844__auto___9066]));

var G__9067 = (i__7844__auto___9066 + (1));
i__7844__auto___9066 = G__9067;
continue;
} else {
}
break;
}

var G__9064 = args9062.length;
switch (G__9064) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9062.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args9069 = [];
var len__7843__auto___9072 = arguments.length;
var i__7844__auto___9073 = (0);
while(true){
if((i__7844__auto___9073 < len__7843__auto___9072)){
args9069.push((arguments[i__7844__auto___9073]));

var G__9074 = (i__7844__auto___9073 + (1));
i__7844__auto___9073 = G__9074;
continue;
} else {
}
break;
}

var G__9071 = args9069.length;
switch (G__9071) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9069.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9078 = arguments.length;
var i__7844__auto___9079 = (0);
while(true){
if((i__7844__auto___9079 < len__7843__auto___9078)){
args__7850__auto__.push((arguments[i__7844__auto___9079]));

var G__9080 = (i__7844__auto___9079 + (1));
i__7844__auto___9079 = G__9080;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq9076){
var G__9077 = cljs.core.first.call(null,seq9076);
var seq9076__$1 = cljs.core.next.call(null,seq9076);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__9077,seq9076__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9083 = arguments.length;
var i__7844__auto___9084 = (0);
while(true){
if((i__7844__auto___9084 < len__7843__auto___9083)){
args__7850__auto__.push((arguments[i__7844__auto___9084]));

var G__9085 = (i__7844__auto___9084 + (1));
i__7844__auto___9084 = G__9085;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq9081){
var G__9082 = cljs.core.first.call(null,seq9081);
var seq9081__$1 = cljs.core.next.call(null,seq9081);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__9082,seq9081__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args9086 = [];
var len__7843__auto___9089 = arguments.length;
var i__7844__auto___9090 = (0);
while(true){
if((i__7844__auto___9090 < len__7843__auto___9089)){
args9086.push((arguments[i__7844__auto___9090]));

var G__9091 = (i__7844__auto___9090 + (1));
i__7844__auto___9090 = G__9091;
continue;
} else {
}
break;
}

var G__9088 = args9086.length;
switch (G__9088) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9086.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__7850__auto__ = [];
var len__7843__auto___9095 = arguments.length;
var i__7844__auto___9096 = (0);
while(true){
if((i__7844__auto___9096 < len__7843__auto___9095)){
args__7850__auto__.push((arguments[i__7844__auto___9096]));

var G__9097 = (i__7844__auto___9096 + (1));
i__7844__auto___9096 = G__9097;
continue;
} else {
}
break;
}

var argseq__7851__auto__ = ((((1) < args__7850__auto__.length))?(new cljs.core.IndexedSeq(args__7850__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7851__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq9093){
var G__9094 = cljs.core.first.call(null,seq9093);
var seq9093__$1 = cljs.core.next.call(null,seq9093);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__9094,seq9093__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args9098 = [];
var len__7843__auto___9101 = arguments.length;
var i__7844__auto___9102 = (0);
while(true){
if((i__7844__auto___9102 < len__7843__auto___9101)){
args9098.push((arguments[i__7844__auto___9102]));

var G__9103 = (i__7844__auto___9102 + (1));
i__7844__auto___9102 = G__9103;
continue;
} else {
}
break;
}

var G__9100 = args9098.length;
switch (G__9100) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9098.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map