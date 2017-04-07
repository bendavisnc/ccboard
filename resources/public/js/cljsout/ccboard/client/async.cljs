(ns ccboard.client.async
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async])
)


(def piece-mousedown-events-chan (async/chan))

(defn pass-to-mousedown-chan! [e]
  (async/put! piece-mousedown-events-chan e))

(def piece-mouseup-events-chan (async/chan))

(defn pass-to-mouseup-chan! [e]
  (async/put! piece-mouseup-events-chan e))


