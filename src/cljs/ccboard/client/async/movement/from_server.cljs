(ns ccboard.client.async.movement.from-server
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async]
    [ccboard.client.evaluation.move-event :as move-event-eval]))
    


(def from-server-move-events (async/chan))

(defn put-new-from-server-move-event! [e]
  (async/put! from-server-move-events e))

;;
;; Waits for from server move events and has them evaluated.
(async-macros/go
  (while true
    (move-event-eval/eval-move-event! (async/<! from-server-move-events))))





