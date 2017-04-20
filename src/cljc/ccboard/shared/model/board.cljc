(ns ccboard.shared.model.board)

;;
;;
;; Defines a board object.


(defn move-events [this]
  "All of the move events that have happened relative to this board."
  (:move-events this))

(defn player-pieces [this]
  "The initial player piece positions."
  (:player-pieces this))

(defn static-pieces [this]
  "Static piece positions"
  (:static-pieces this))

(defn board-id [this]
  "The keyword identifier for this board."
  (:board-id this))

(defn create [board-id & {:keys [player-pieces, static-pieces, move-events]}]
  {
    :board-id board-id
    :player-pieces player-pieces
    :static-pieces static-pieces
    :move-events (or move-events [])
  })


