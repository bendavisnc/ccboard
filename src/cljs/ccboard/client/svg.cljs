(ns ccboard.client.svg
  (:require
    [d3.core :as d3]
    [ccboard.client.d3-helpers :refer [get-x, get-y, get-id]]
    ))

;;
;;
;; Any d3 svg manipulation happens here.

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

