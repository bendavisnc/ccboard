(ns ccboard.client.rotation-filter
  (:require
    [ccboard.shared.util.math :as math-util]
    [ccboard.shared.model.coord :as coord]
    [diithree.core :as d3]
    [ccboard.client.ui.svg :as ccboard-svg]))
    

;;
;;
;; The functionality that enables board rotation.

;(def rotation-state (atom (cycle (range 0 360 60))))
(def rotation-state (atom nil))

(add-watch rotation-state :each-new-val
           (fn [_ _ _ n]
   (->
      ccboard-svg/pieces-container
      (d3/transition)
      ;(d3/attr "transform" (str "rotate(" (first n) ", 0.5, 0.5)"))
      (d3/attr "transform" (str "rotate(" n ", 0.5, 0.5)"))
      (d3/duration 500)
      (d3/ease (aget js/d3 "easeCircleInOut"))
      )))

(defn enable! []
  (->
    (d3/select "#rotate-button")
    (d3/on "click"
      (fn [_]
        (swap! rotation-state
          (fn [v]
            (or
              (and (< (+ v 60) 360) (+ v 60))
              0)))))))

(defn r-apply [c]
  (coord/from-vec
    (math-util/perform-rotation
      (coord/to-vec c)
      (deref rotation-state)
      [0.5, 0.5])))


