(ns ccboard.client.movement
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require [d3.core :as d3]
            [ccboard.client.async :as ccboard-async]
            [ccboard.client.view :as ccboard-view]
            [ccboard.client.atomic :as ccboard-atomic]
            [ccboard.client.d3-helpers :as d3-helpers]
            [ccboard.shared.model.move-event :as move-event]
            ))


(defn on-drag! [_]
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
        [mouse-x, mouse-y]
          (js->clj
            (.mouse js/d3
              (.node ccboard-view/svg-d3)))
        event-data
          {
            :x mouse-x
            :y mouse-y
          }
      ]
      (do
        (swap! (ccboard-atomic/pieces piece-k) merge event-data)
        (ccboard-async/push-piece-drag-move-event event-data)))))

(defn on-drag-start! [_]
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
      ]
      (ccboard-async/push-piece-drag-start-event piece-k))))

(defn on-drag-stop! [_]
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
      ]
      (ccboard-async/push-piece-drag-end-event piece-k))))

(defn enable-piece-drag! []
  (.call
    (d3/select* ".piece")
    (->
      (.drag js/d3)
      (.on "start" on-drag-start!)
      (.on "drag" on-drag!)
      (.on "end" on-drag-stop!))))


(defn eval-move-event! [e]
  (do
    (println e)
    (loop [move-positions (move-event/movement-data e)]
      (when (not (empty? move-positions))
        (do
          (swap!
            (ccboard-atomic/pieces (move-event/piece e))
            merge
            (first move-positions))
          (recur (rest move-positions)))))))



(defn eval-move-events! [es]
  (dorun
    (map
      #(eval-move-event! %)
      (filter
        (complement :move-realized?)
        es))))













