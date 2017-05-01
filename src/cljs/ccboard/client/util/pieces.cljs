(ns ccboard.client.util.pieces
  (:require
    [ccboard.shared.util.math :as math-util]
    [ccboard.shared.model.coord :as coord]
    [diithree.core :as d3]))


(defn piece->coord [p]
  (let [
        {:keys [x, y, z]}
        (js->clj (d3/datum p) :keywordize-keys true)]
    
    (coord/create :x x :y y :z z)))

(defn piece-k->coord [piece-k]
  (->
    (d3/select (str "#" (name piece-k)))
    piece->coord))

(defn coord->static-piece [c]
  (d3/select
    (first
      (filter
        (fn [static-piece]
          (=
            (piece->coord (d3/select static-piece))
            c))
        (d3/select-all ".static-piece")))))

(def all-static-coords
  (memoize
    (fn []
      (map
        (comp piece->coord d3/select)
        (d3/select-all ".static-piece")))))

(defn all-player-piece-coords []
  (map
    (comp piece->coord d3/select)
    (d3/select-all ".player-piece")))

(defn occupied? [c]
  (some
    (fn [piece-c]
      (= c piece-c))
    (all-player-piece-coords)))

(defn closest-available-coord [rel-coord]
  (first
    (filter
      (fn [static-coord]
        (not (occupied? static-coord)))
      (sort-by
        (fn [c]
          (math-util/distance (coord/to-vec rel-coord) (coord/to-vec c)))
        (all-static-coords)))))

