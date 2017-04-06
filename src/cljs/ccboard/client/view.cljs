(ns ccboard.client.view
  (:require
    [d3.core :as d3]
    [ccboard.client.d3-helpers :refer [get-x, get-y, get-id]]
    ))

(def svg-d3
  (d3/select "svg"))

(defn to-creation-data [piece-data]
  (reduce-kv
    (fn [acc k v]
      (conj acc
        (assoc v :id (name k))))
    [] piece-data))

(defn init-pieces! [piece-data]
  (->
    svg-d3
    (d3/select* ".piece")
    (d3/data
      (->
        piece-data
        (to-creation-data)
        (clj->js)))
    (d3/entered)
    (d3/append "circle")
    (d3/attr "class" "piece")
    (d3/attr "cx" get-x)
    (d3/attr "cy" get-y)
    (d3/attr "id" get-id)
    (d3/attr "r" 50)
    (d3/css "fill" "white")
    ))

(defn update-piece! [piece-k, new-position]
  (->
    (str "#" (name piece-k))
    (d3/select)
    (d3/datum (clj->js new-position))
    (d3/attr "cx" get-x)
    (d3/attr "cy" get-y)))
