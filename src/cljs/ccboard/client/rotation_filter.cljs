(ns ccboard.client.rotation-filter
  (:require
    [ccboard.shared.util.math :as math-util]
    [ccboard.shared.model.coord :as coord]
    [d3.core :as d3]
    [ccboard.client.ui.svg :as ccboard-svg]))
    


(def rotation-val (atom 0))

(add-watch rotation-val :each-new-val
  (fn [k r o n]
   (->
      ccboard-svg/pieces-container
      (d3/transition)
      (d3/attr "transform" (str "rotate(" n ", 0.5, 0.5)"))
      (d3/duration 2000)
      (d3/duration 500)
      (.ease (aget js/d3 "easeCircleInOut"))
      )))

(defn enable! []
  (->
    (d3/select "#rotate-button")
    (d3/on "click"
      (fn [d]
        (do
          (swap! rotation-val
            (fn [v]
              (if (<= (+ v 60) 360)
                (+ v 60)
                0)))
          (println "new val: " (deref rotation-val)))))))

(defn r-apply [c]
  (coord/from-vec
    (math-util/perform-rotation
      (coord/to-vec c)
      (deref rotation-val)
      [0.5, 0.5])))

(defn r-unapply [c]
  (coord/from-vec
    (math-util/perform-rotation
      (coord/to-vec c)
      (* -1 (deref rotation-val))
      [0.5, 0.5])))
;
;
;(defn apply-all-pieces [ps]
;  (reduce-kv
;    (fn [acc piece-k piece-c]
;      (assoc acc piece-k (r-apply piece-c)))
;    {}
;    ps))





