(ns ccboard.client.async
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async]
    [ccboard.client.atomic :as ccboard-atomic]
    )
)


(def piece-drag-start-chan (async/chan))
(defn push-piece-drag-start-event [e]
  (async/put! piece-drag-start-chan e))

(def piece-drag-end-chan (async/chan))
(defn push-piece-drag-end-event [e]
  (async/put! piece-drag-end-chan e))

(def piece-drag-chan (async/chan))
(defn push-piece-drag-event [e]
  (async/put! piece-drag-chan e))

;(def captured-piece-move-events (atom []))

(aset js/window "testfn3"
  (fn []
    (println @ccboard-atomic/moves)))

(async-macros/go
  (while true
    (loop [
        move-data []
        piece-k (async/<! piece-drag-start-chan)
        start-time (.getTime (new js/Date))
      ]
      (let [
          [next-event, from-port] (async/alts! [piece-drag-end-chan, piece-drag-chan])
        ]
        (if
          (= from-port piece-drag-end-chan)
            (swap!
              ccboard-atomic/moves
              conj
              {
                :piece piece-k
                :move-data move-data
                :end-time (.getTime (new js/Date))
              })
          ;else
            (recur
              (conj move-data next-event)
              piece-k
              start-time
              ))))))


