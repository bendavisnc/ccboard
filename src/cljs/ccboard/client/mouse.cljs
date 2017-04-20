(ns ccboard.client.mouse
  (:require
    [ccboard.client.async.movement.local-chans :as async-movement]
    [ccboard.client.ui.svg :as ccboard-svg]
    [ccboard.client.d3-helpers :as d3-helpers]
    [ccboard.shared.model.coord :as coord]
    [d3.core :as d3])
)


(defn on-drag! [_]
  "Calls the d3 piece render method and pushes out for async usage."
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
        [mouse-x, mouse-y] (d3-helpers/mouse-data ccboard-svg/svg-d3)
        event-data (coord/create :x mouse-x :y mouse-y)
      ]
      (do
        (ccboard-svg/update-piece! piece-k event-data)
        (async-movement/put-new-coord! event-data)))))

(defn on-drag-start! [_]
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
      ]
      (async-movement/put-start! piece-k))))

(defn on-drag-stop! [_]
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
      ]
      (async-movement/put-stop! piece-k))))


(defn enable-mouse-drag! []
  (.call
    (d3/select* ".player-piece")
    (->
      (.drag js/d3)
      (.on "start" on-drag-start!)
      (.on "drag" on-drag!)
      (.on "end" on-drag-stop!))))
