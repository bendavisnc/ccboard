(ns ccboard.server.css.style.pieces
  (:require
    [ccboard.server.css.style.constants :as constants]
    [ccboard.server.pieces.piece-generation :as piece-generation]))
    



(defn get-player-css [player-pieces, fill-color]
  (map
    (fn [player-k]
      [(str "#" (name player-k)), {"fill" fill-color}])
    (keys player-pieces)))

(def player-one-css (get-player-css piece-generation/player-one-pieces constants/player-one-color))
(def player-two-css (get-player-css piece-generation/player-two-pieces constants/player-two-color))
(def player-three-css (get-player-css piece-generation/player-three-pieces constants/player-three-color))
(def player-four-css (get-player-css piece-generation/player-four-pieces constants/player-four-color))
(def player-five-css (get-player-css piece-generation/player-five-pieces constants/player-five-color))
(def player-six-css (get-player-css piece-generation/player-six-pieces constants/player-six-color))

(def piece-css
  (concat
    [[".static-piece.highlighted", {"fill" "#cbcbcb"}]]
    [[".static-piece", {"fill" constants/noplayer-color}]]
    player-one-css
    player-two-css
    player-three-css
    player-four-css
    player-five-css
    player-six-css))
    
