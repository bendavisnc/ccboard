(ns ccboard.shared.model.coord)


(defn x [this]
  (:x this))

(defn y [this]
  (:y this))

(defn z [this]
  (:z this))

(defn create [& {:keys [x, y, z]}]
  {
    :x x
    :y y
    :z (or z 1)
  })
