(ns ccboard.server.pieces.piece-querying
  (:require
    [ccboard.server.pieces.piece-generation :as piece-generation]
    [ccboard.server.util.math :as math-util]
    [ccboard.shared.model.coord :as coord]
    )
)

(def pieces-per-player 10)

(def pieces-center-coord (piece-generation/get-rel-coord piece-generation/coord-0 6 5))

(defn get-player-piece-keys** [rotation-angle, how-many]
  (map first
    (take how-many
      (sort-by
        (fn [[piece-k, c]]
          (let [
              once-rotated
                (coord/from-vec
                  (math-util/perform-rotation
                    (coord/to-vec c)
                    rotation-angle
                    (coord/to-vec pieces-center-coord)))
            ]
            (+ (* (coord/y once-rotated) 1000) (* (coord/x once-rotated) 100))))
        (vec piece-generation/generated-pieces)))))


(defn get-player-piece-keys* [rotation-angle]
  (get-player-piece-keys** rotation-angle pieces-per-player))

(defn get-player-one-piece-keys []
  (get-player-piece-keys* 0))

(defn get-player-two-piece-keys []
  (get-player-piece-keys* 60))

(defn get-player-three-piece-keys []
  (get-player-piece-keys* 120))

(defn get-player-four-piece-keys []
  (get-player-piece-keys* 180))

(defn get-player-four-piece-keys []
  (get-player-piece-keys* 240))

(defn get-player-five-piece-keys []
  (get-player-piece-keys* 300))

(defn get-player-six-piece-keys []
  (get-player-piece-keys* 360))

