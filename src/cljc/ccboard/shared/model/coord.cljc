(ns ccboard.shared.model.coord)


(defn x [this]
  (:x this))

(defn y [this]
  (:y this))

(defn create [& {:keys [x, y]}]
  {
    :x x
    :y y
  })
