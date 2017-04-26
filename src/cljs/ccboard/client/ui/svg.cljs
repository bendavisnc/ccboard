(ns ccboard.client.ui.svg
  (:require
    [ccboard.client.d3-helpers :refer [get-x, get-y, get-id]]
    [ccboard.shared.constants :as constants]
    [diithree.core :as d3]
    ))

;;
;;
;; Any d3 svg manipulation happens here.

(def svg-d3
  (d3/select "svg"))

(def pieces-container (d3/select "#pieces-container"))

(defn to-creation-data [piece-data]
  (reduce-kv
    (fn [acc k v]
      (conj acc
        (assoc v :id (name k))))
    [] piece-data))

(defn clear-pieces! []
  (->
    pieces-container
    (d3/select-all ".piece")
    (d3/remove)))

(defn clear-transitions! []
  (->
    pieces-container
    (d3/select-all ".piece")
    (d3/interrupt)))

(defn init-player-pieces! [piece-data]
  (->
    pieces-container
    (d3/select-all ".player-piece")
    (d3/data
      (->
        piece-data
        (to-creation-data)
        (clj->js)))
    (d3/enter)
    (d3/append "circle")
    (d3/attr "class" "piece player-piece")
    (d3/attr "cx" get-x)
    (d3/attr "cy" get-y)
    (d3/attr "id" get-id)
    ;(d3/attr "r" (* constants/piece-radius constants/board-width))
    (d3/attr "r" constants/piece-radius)
    ))

(defn init-static-pieces! [piece-data]
  (->
    pieces-container
    (d3/select-all ".static-piece")
    (d3/data
      (->
        piece-data
        (to-creation-data)
        (clj->js)))
    (d3/enter)
    (d3/append "circle")
    (d3/attr "class" "piece static-piece")
    (d3/attr "cx" get-x)
    (d3/attr "cy" get-y)
    (d3/attr "id" get-id)
    (d3/attr "r" constants/piece-radius)
    ))

;todo cleanup
(defn update-piece! [piece-k, new-position & {:keys [transition-time, and-then]}]
  "Tasked with ultimately calling d3's attr method once on a piece piece-k and a new position."
  (let [
      selection-a
        (->
          (str "#" (name piece-k))
          (d3/select)
          (d3/datum (clj->js new-position)))
      selection-b
        (if
          transition-time
          (->
            selection-a
            (d3/transition)
            ;(d3/ease (aget js/d3 "easeCubic"))
            (d3/duration transition-time))
          ;else
          selection-a)
      selection-c
        (if
          and-then
          (->
            selection-b
            (d3/on "end" and-then))
          ;else
          selection-b)
        ]
    (->
      selection-c
      (d3/attr "cx" get-x)
      (d3/attr "cy" get-y))))


(defn highlight-piece! [p]
  (do
    (->
      (d3/select-all ".static-piece")
      (d3/classed "highlighted" false))
    (->
      p
      (d3/classed "highlighted" true))))
