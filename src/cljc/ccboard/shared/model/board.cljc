(ns ccboard.shared.model.board)

;;
;;
;; Defines a board object.


(defn move-events [this]
  "All of the move events that have happened relative to this board."
  (:move-events this))

(defn starting-positions [this]
  "The initial coord for each piece."
  (:starting-positions this))

(defn board-id [this]
  "The keyword identifier for this board."
  (:board-id this))

(defn create [board-id & {:keys [starting-positions, move-events]}]
  {
    :board-id board-id
    :starting-positions starting-positions
    :move-events (or move-events [])
  })


