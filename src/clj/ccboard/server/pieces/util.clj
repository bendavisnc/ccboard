(ns ccboard.server.pieces.util
  (:require [ccboard.shared.model.coord :as coord]
            [ccboard.shared.constants :as constants]
            [ccboard.shared.util.math :as math-util]))

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

(defn to-the-right-of [c]
  "Given a coord, return the right adjacent coord."
  (update c :x (partial + (* 2 constants/piece-radius))))

