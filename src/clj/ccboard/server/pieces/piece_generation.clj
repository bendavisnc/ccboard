(ns ccboard.server.pieces.piece-generation
  (:require
    [ccboard.shared.model.coord :as coord]
    [ccboard.shared.constants :as constants]
    [ccboard.shared.util.math :as math-util]
    [ccboard.server.pieces.constants :as piece-constants]
    [ccboard.server.pieces.util :as pieces-util]))
    


;;
;;
;; Responsible for all of the icky math that goes into laying out
;; a chinese checkers board.
;;   todo - make math more general and cleaner for boards with different dimensions.


(def pieces-center-coord (coord/create :x 0.5 :y 0.5))

(def ^{:doc "The coord that the following layout math is based on."}
  coord-0 (pieces-util/get-rel-coord pieces-center-coord -6 -4))

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
          (conj acc (pieces-util/to-the-right-of (last acc)))))))

(defn triangle-of-piece-coords [row-0]
  "Given a bottom row of coords, creates shorter stacks of rows until creating a row of one coord, thus finishing the triangle coord set."
  (loop [[last-row & _ :as acc] (list row-0)]
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


(defn star-of-piece-coords [triangle-0]
  (let [
        rotation-coord ; The coord to rotate the triangle of coords by to have a star.
        (pieces-util/get-rel-coord coord-0 (Math/floor (/ constants/board-side-length 2.0)) 4)]
    
    (sort-by (fn [e] (+ (* (coord/y e) 1000) (* (coord/x e) 100))) ; sort by top left
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

(def generate-coords
  ^{:doc "Given a coord to start out, generates all of the coords representing all of the pieces of a chinese checkers set."}
  (comp
    ;projected-coords
    star-of-piece-coords
    triangle-of-piece-coords
    (partial row-of-piece-coords constants/board-side-length)))


(def all-static-pieces
  (into {}
    (map-indexed
      (fn [i, c]
        [(keyword (str "static-piece" i)), c])
      (generate-coords coord-0))))


(defn get-player-pieces* [rotation-angle, how-many]
  "Given a rotation angle and a count, return a map that has 
   a unique player piece id and a piece coord for all the pieces at that angle."
  (into {}
    (map
      (fn [[i, c]]
        [(keyword (str "player-piece" i)), c])
      (take how-many
        (sort-by
          (fn [[_, c]]
            (let [
                  once-rotated
                  (coord/from-vec
                    (math-util/perform-rotation
                      (coord/to-vec c)
                      rotation-angle
                      (coord/to-vec pieces-center-coord)))]
              
              (+ (* (coord/y once-rotated) 1000) (* (coord/x once-rotated) 100))))
          (map-indexed vector (generate-coords coord-0)))))))


(defn get-player-pieces** [rotation-angle]
  (get-player-pieces* rotation-angle piece-constants/pieces-per-player))

(def player-one-pieces
  (get-player-pieces** 0))

(def player-two-pieces
  (get-player-pieces** 60))

(def player-three-pieces
  (get-player-pieces** 120))

(def player-four-pieces
  (get-player-pieces** 180))

(def player-five-pieces
  (get-player-pieces** 240))

(def player-six-pieces
  (get-player-pieces** 300))

(def all-player-pieces
  (merge
    player-one-pieces
    player-two-pieces
    player-three-pieces
    player-four-pieces
    player-five-pieces
    player-six-pieces))
