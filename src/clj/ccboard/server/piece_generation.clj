(ns ccboard.server.piece-generation
  (:require
    [ccboard.shared.model.coord :as coord]
    [ccboard.shared.constants :as constants]
    [ccboard.server.util.math :as math-util]
    )
)

(def coord-0 (coord/create :x 0.2 :y 0.8))

(defn to-the-right-of [c]
  (update c :x (partial + (* 2 constants/piece-radius))))

(defn projected-coords [cs]
  (map
    (fn [c]
      (coord/create
        :x (* (coord/x c) constants/board-width)
        :y (* (coord/y c) constants/board-height)))
    cs))


(defn row-of-piece-coords [how-many, coord-0]
  (loop [acc [coord-0]]
    (cond
      (>= (count acc) how-many)
        acc
      :else
        (recur
          (conj acc (to-the-right-of (last acc)))))))

(defn triangle-of-piece-coords [row-0]
  (loop [[last-row & rows :as acc] (list row-0)]
    (cond
      (= 1 (count last-row))
        (flatten acc)
      :else
        (recur
          (conj acc
            (row-of-piece-coords
              (dec (count last-row))
              (coord/from-vec
                (math-util/perform-rotation
                  (coord/to-vec (second last-row))
                  60
                  (coord/to-vec (first last-row))))))))))

(defn star-of-piece-coords [triangle-0]
  (let [
      rotation-coord
        (coord/create
          :x
            (+
              (coord/x coord-0)
              (*
                (* 2 constants/piece-radius)
                (Math/floor (/ constants/board-side-length 2.0))))
          :y
            (coord/y
              (coord/from-vec
                (math-util/perform-rotation
                  (coord/to-vec
                    (update coord-0 :x #(+ % (* constants/piece-radius 4 2))))
                  60
                  (coord/to-vec coord-0)))))
    ]
    ;(sort
      ;(fn [c0, c1]
      ;  (cond
      ;    (< (coord/y c0) (coord/y c1))
      ;      1
      ;    (< (coord/x c0) (coord/x c1))
      ;      1
      ;    :else
      ;    -1))
    (sort-by (fn [e] (+ (* (coord/y e) 1000) (* (coord/x e) 100)))
      (set
        (map
          (fn [c]
            (->
              c
              (update :x #(math-util/to-precision % 4))
              (update :y #(math-util/to-precision % 4))))
          (concat
            triangle-0
            (map
              (fn [c]
                (coord/from-vec
                  (math-util/perform-rotation
                    (coord/to-vec c)
                    180
                    (coord/to-vec rotation-coord))))
              triangle-0)))))))

(def generate-pieces
  (comp
    projected-coords
    star-of-piece-coords
    triangle-of-piece-coords
    (partial row-of-piece-coords constants/board-side-length)))

(def generated-pieces
  (into {}
    (map
      (fn [c, i]
        [(keyword (str "piece" i)), c])
      (generate-pieces coord-0)
      (range 700))))

