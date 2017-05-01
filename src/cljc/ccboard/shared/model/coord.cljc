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
    :z (or z 1)})
  

(defn to-vec [this]
  [(x this) (y this)])

(defn from-vec [[x, y]]
  (create :x x :y y))
