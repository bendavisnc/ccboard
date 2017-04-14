(ns ccboard.shared.model.board)

(defprotocol IBoard
  (move-events [this] "All of the move events that have happened relative to this board.")
  (starting-positions [this] "The initial coord for each piece.")
  (board-id [this] "The keyword identifier for this board."))


(defrecord Board [board-id, starting-positions, move-events]
  IBoard
  (move-events [this] (:move-events this))
  (starting-positions [this] (:starting-positions this))
  (board-id [this] (:board-id this)))


(defn create
  ([m](map->Board m))
  ([board-id, starting-positions, move-events]
   (new Board board-id, starting-positions, move-events)))


(defn create-set [raw-set]
  (reduce-kv
    (fn [acc, k, v]
      (assoc acc k (create (merge v {:board-id k}))))
    {}
    raw-set))
