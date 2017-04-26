(ns ccboard.client.d3-helpers)


(defn get-x [d]
  (aget d "x"))

(defn get-y [d]
  (aget d "y"))

(defn mouse-data [container]
  (js->clj
    (.mouse js/d3
      (.node container))))

(defn get-id [d]
  (aget d "id"))

