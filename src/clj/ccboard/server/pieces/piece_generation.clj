(ns ccboard.server.pieces.piece-generation
  (:require
    [ccboard.shared.model.coord :as coord]
    [ccboard.shared.constants :as constants]
    [ccboard.server.util.math :as math-util]
    )
)

;;
;;
;; Responsible for all of the icky math that goes into laying out
;; a chinese checkers board.
;;   todo - make math more general and cleaner for boards with different dimensions.


(def ^{:doc "The coord that the following layout math is based on."}
  coord-0 (coord/create :x 0.2 :y 0.8))

(defn to-the-right-of [c]
  "Given a coord, return the right adjacent coord."
  (update c :x (partial + (* 2 constants/piece-radius))))

(defn projected-coords [cs]
  "Projects coords from a 0 1 unit space to a 0 board dimension unit space."
  (map
    (fn [c]
      (coord/create
        :x (* (coord/x c) constants/board-width)
        :y (* (coord/y c) constants/board-height)))
    cs))

(defn row-of-piece-coords [how-many, coord-0]
  "Generates a row of coords based on a starting coord."
  (loop [acc [coord-0]]
    (if
      (>= (count acc) how-many)
        acc
      ;else
        (recur
          (conj acc (to-the-right-of (last acc)))))))

(defn triangle-of-piece-coords [row-0]
  (loop [[last-row & rows :as acc] (list row-0)]
    (if
      (= 1 (count last-row))
        (flatten acc)
      ;else
        (recur
          (conj acc
            (row-of-piece-coords
              (dec (count last-row))
              (coord/from-vec
                (math-util/perform-rotation
                  (coord/to-vec (second last-row))
                  60
                  (coord/to-vec (first last-row))))))))))

(defn get-rel-coord [coord-0, right-amt, up-amt]
  (coord/create
    :x
      (+
        (coord/x coord-0)
        (*
          right-amt
          (* 2 constants/piece-radius)))

    :y
      (coord/y
        (coord/from-vec
          (math-util/perform-rotation
            (coord/to-vec
              (update coord-0 :x #(+ % (* constants/piece-radius 2 up-amt))))
            60
            (coord/to-vec coord-0))))))

(defn star-of-piece-coords [triangle-0]
  (let [
      rotation-coord ; The coord to rotate the triangle of coords by to have a star.
        (get-rel-coord coord-0 (Math/floor (/ constants/board-side-length 2.0)) 4)
    ]
    (sort-by (fn [e] (+ (* (coord/y e) 1000) (* (coord/x e) 100)))
      (set ; remove the duplicates
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
                  (math-util/perform-rotation ; the actual rotation.
                    (coord/to-vec c)
                    180
                    (coord/to-vec rotation-coord))))
              triangle-0)))))))

(def generate-pieces
  ^{:doc "Given a coord to start out, generates all of the coords representing all of the pieces of a chinese checkers set."}
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
      (range 121))))

