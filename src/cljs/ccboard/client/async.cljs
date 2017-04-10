(ns ccboard.client.async
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async]
    [ccboard.client.atomic :as ccboard-atomic]
    [ccboard.shared.model.move-event :as move-event]
    )
)

;;
;;
;; Contains all things core.async related
;;   - Listens for drag events and publishes move events


;;
;; A chan that gets pushed on whenever a drag event starts.
;;   The flux is a piece key.
(def piece-drag-start-chan (async/chan))
(defn push-piece-drag-start-event [e]
  (async/put! piece-drag-start-chan e))

;;
;; A chan that gets pushed on whenever a drag event ends.
;;   The flux is a piece key.
(def piece-drag-end-chan (async/chan))
(defn push-piece-drag-end-event [e]
  (async/put! piece-drag-end-chan e))

;;
;; A chan that gets pushed on whenever a drag event ends.
;;   The flux is a piece key.
(def piece-drag-move-chan (async/chan))
(defn push-piece-drag-move-event [e]
  (async/put! piece-drag-move-chan e))


;;
;; Manipulates drag channels to produce move events.
(async-macros/go
  (while true
    (loop [
        move-data []
        piece-k (async/<! piece-drag-start-chan)
        start-time (.getTime (new js/Date))
      ]
      (let [
          [next-event, from-port] (async/alts! [piece-drag-end-chan, piece-drag-move-chan])
        ]
        (if
          (= from-port piece-drag-end-chan)
            (swap!
              ccboard-atomic/moves
              conj
              (move-event/create
                piece-k
                :move-data move-data
                :end-time (.getTime (new js/Date))
                :start-time start-time
                :move-realized? true))
          ;else
            (recur
              (conj move-data next-event)
              piece-k
              start-time
              ))))))


