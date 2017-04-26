(ns ccboard.client.evaluation.move-event
  (:require [ccboard.client.ui.svg :as ccboard-svg]
            [ccboard.shared.model.move-event :as move-event]))
            

(def inbetween-transition-time 15)
;(def inbetween-transition-time 20)

(def fast-transition-time 10)
(def super-fast-transition-time 2)

(def move-end-transition-time 500)

(defn eval-move-event! [e & {:keys [pace and-then skip-animation?]}]
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
                  :transition-time
                    (cond
                      pace
                        pace
                      :else
                        (move-event/transition-inbetween-time e)))))]
    (update-fn (move-event/movement-data e))))


(defn eval-move-events! [es & {:keys [skip-animation? pace]}]
  (when (not (empty? es))
    (eval-move-event! (first es)
      :skip-animation? skip-animation?
      :pace pace
      :and-then
        (fn []
          (when
            (not (empty? (rest es)))
            (eval-move-events! (rest es) :pace pace :skip-animation? skip-animation?))))))
