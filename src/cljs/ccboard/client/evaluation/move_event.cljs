(ns ccboard.client.evaluation.move-event
  (:require [d3.core :as d3]
            [ccboard.client.svg :as ccboard-view]
            [ccboard.shared.model.move-event :as move-event]
            ))

(defn eval-move-event! [e]
  "Takes a move event model object and makes a ghost like piece drag happen."
  (letfn [
      (update-fn [moves-to-make]
        (when (not (empty? moves-to-make))
          (ccboard-view/update-piece!
            (move-event/piece e)
            (first moves-to-make)
            :and-then (fn [] (update-fn (rest moves-to-make)))
            :transition-time 10 ;todo make smarter
            )))
    ]
    (update-fn (move-event/movement-data e))))


;(defn eval-move-events! [es]
;  (dorun
;    (map
;      #(eval-move-event! %)
;      (filter
;        (complement :move-realized?)
;        es))))

