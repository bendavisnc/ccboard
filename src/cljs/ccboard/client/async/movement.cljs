(ns ccboard.client.async.movement
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async]
    [ccboard.shared.model.move-event :as move-event]
    [ccboard.client.evaluation.move-event :as move-event-eval])
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

(def from-server-move-events (async/chan))
(defn put-new-from-server-move-event! [e]
  (async/put! from-server-move-events e))



;;
;; Manipulates drag channels to produce move events.
(async-macros/go
  (while true
    (loop [
        movement-data []
        piece-k (async/<! starts)
        start-time (.getTime (new js/Date))
      ]
      (let [
          [next-event, from-port] (async/alts! [stops, new-coords])
        ]
        (if
          (= from-port stops)
            (put-new-local-move-event!
              (move-event/create
                piece-k
                :movement-data movement-data
                :end-time (.getTime (new js/Date))
                :start-time start-time
                :move-realized? true))
          ;else
            (recur
              (conj movement-data next-event)
              piece-k
              start-time
              ))))))


;; Wait's for local move events and bounces them to the server
(async-macros/go
  (while true
    (let [next-local-move-event (async/<! local-move-events)]
      (println "Hey I'm a new move-event! " (move-event/piece next-local-move-event)))))


;;
;; Waits for from server move events and has them evaluated.
(async-macros/go
  (while true
    (move-event-eval/eval-move-event! (async/<! from-server-move-events))))






