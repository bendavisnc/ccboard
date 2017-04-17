(ns ccboard.client.evaluation.move-event
  (:require [d3.core :as d3]
            [ccboard.client.ui.svg :as ccboard-svg]
            [ccboard.shared.model.move-event :as move-event]
            ))

(defn eval-move-event! [e & {:keys [and-then skip-animation?]}]
  "Takes a move event model object and makes a ghost like piece drag happen."
  (letfn [
      (update-fn [moves-to-make]
        (cond
          skip-animation?
            (do
              (ccboard-svg/update-piece!
                (move-event/piece e)
                (last moves-to-make))
              (when and-then (and-then)))
          (empty? moves-to-make)
            (when and-then (and-then))
          :else
            (ccboard-svg/update-piece!
              (move-event/piece e)
              (first moves-to-make)
              :and-then (fn [] (update-fn (rest moves-to-make)))
              :transition-time 10 ;todo make smarter
              )))
    ]
    (update-fn (move-event/movement-data e))))


(defn eval-move-events! [es & {:keys [skip-animation?]}]
  (eval-move-event! (first es)
    :skip-animation? skip-animation?
    :and-then
      (fn []
        (when
          (not (empty? (rest es)))
            (eval-move-events! (rest es) :skip-animation? skip-animation?)))))
