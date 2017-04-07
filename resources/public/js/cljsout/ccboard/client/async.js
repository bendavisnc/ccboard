// Compiled by ClojureScript 1.9.494 {}
goog.provide('ccboard.client.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
ccboard.client.async.piece_mousedown_events_chan = cljs.core.async.chan.call(null);
ccboard.client.async.pass_to_mousedown_chan_BANG_ = (function ccboard$client$async$pass_to_mousedown_chan_BANG_(e){
return cljs.core.async.put_BANG_.call(null,ccboard.client.async.piece_mousedown_events_chan,e);
});
ccboard.client.async.piece_mouseup_events_chan = cljs.core.async.chan.call(null);
ccboard.client.async.pass_to_mouseup_chan_BANG_ = (function ccboard$client$async$pass_to_mouseup_chan_BANG_(e){
return cljs.core.async.put_BANG_.call(null,ccboard.client.async.piece_mouseup_events_chan,e);
});

//# sourceMappingURL=async.js.map