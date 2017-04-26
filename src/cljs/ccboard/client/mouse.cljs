(ns ccboard.client.mouse
  (:require
    [ccboard.client.async.movement.local-chans :as async-movement]
    [ccboard.client.ui.svg :as ccboard-svg]
    [ccboard.client.d3-helpers :as d3-helpers]
    [ccboard.shared.model.coord :as coord]
    [ccboard.client.util.pieces :as pieces-util]
    [diithree.core :as d3]
    [ccboard.client.rotation-filter :as rotation-filter]
    )
)


(defn on-drag! [_]
  "Calls the d3 piece render method and pushes out for async usage."
  (this-as this*
    (let [
        piece-k (keyword (aget this* "id"))
        drag-coord
          (rotation-filter/r-apply
            (coord/from-vec (d3-helpers/mouse-data ccboard-svg/svg-d3)))
        landing-piece
          (pieces-util/coord->static-piece
            (pieces-util/closest-available-coord
              (pieces-util/piece-k->coord piece-k)))
      ]
      (do
        (ccboard-svg/update-piece! piece-k drag-coord) ; update the dragged piece's position
        (ccboard-svg/highlight-piece! landing-piece) ; highlight the closest piece to it
        (async-movement/put-new-coord! drag-coord)))))

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
        landing-coord
          (pieces-util/closest-available-coord
            (pieces-util/piece-k->coord piece-k))
      ]
      (do
        (ccboard-svg/update-piece! piece-k landing-coord :transition-time 500)
        (async-movement/put-new-coord! landing-coord)
        (async-movement/put-stop! piece-k)))))


(defn enable-mouse-drag! []
  (.call
    (d3/select-all ".player-piece")
    (->
      (.drag js/d3)
      (.on "start" on-drag-start!)
      (.on "drag" on-drag!)
      (.on "end" on-drag-stop!))))
