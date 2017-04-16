(ns ccboard.client.async.movement.local-chans
  (:require
    [cljs.core.async :as async]
    )
)

;;
;; A chan that signifies drag starts.
(def starts (async/chan))
(defn put-start! [k] (async/put! starts k))

(def stops (async/chan))
(defn put-stop! [k] (async/put! stops k))

(def new-coords (async/chan))
(defn put-new-coord! [c] (async/put! new-coords c))

(def local-move-events (async/chan))
(defn put-new-local-move-event! [e]
  (async/put! local-move-events e))

