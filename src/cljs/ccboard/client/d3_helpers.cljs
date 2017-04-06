(ns ccboard.client.d3-helpers)

(defn- mouse-* [d_]
  (fn []
    (->
      js/d3
      (aget "event")
      (aget d_))))

(def mouse-x
  (mouse-* "dx"))

(def mouse-y
  (mouse-* "dy"))

(defn get-x [d]
  (aget d "x"))

(defn get-y [d]
  (aget d "y"))

(defn get-id [d]
  (aget d "id"))

(defn key->classname [k]
  (str "." (name k)))
