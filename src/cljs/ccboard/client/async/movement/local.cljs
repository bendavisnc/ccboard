(ns ccboard.client.async.movement.local
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require
    [cljs.core.async :as async]
    [ccboard.shared.model.move-event :as move-event]
    [ccboard.client.websocket-board-session :as board-session]
    [ccboard.client.async.movement.local-chans :refer [starts, stops, new-coords, put-new-local-move-event!, local-move-events]]))
    


;;
;; Manipulates drag channels to produce move events.
(async-macros/go
  (while true
    (loop [
           movement-data []
           piece-k (async/<! starts)
           start-time (.getTime (new js/Date))]
      
      (let [
            [next-event, from-port] (async/alts! [stops, new-coords])]
        
        (if
          (= from-port stops)
          (put-new-local-move-event!
            (move-event/create
              piece-k
              (board-session/current-board)
              (board-session/current-client)
              :movement-data movement-data
              :end-time (.getTime (new js/Date))
              :start-time start-time
              :move-realized? true))
          ;else
          (recur
            (conj movement-data next-event)
            piece-k
            start-time))))))
              


;; Wait's for local move events and bounces them to the server
(async-macros/go
  (while true
    (let [next-local-move-event (async/<! local-move-events)]
      (board-session/send-server-move-event! next-local-move-event))))
