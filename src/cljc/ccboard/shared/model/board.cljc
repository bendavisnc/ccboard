(ns ccboard.shared.model.board)

(defprotocol IBoard
  (move-events [this])
  (board-id [this]))


(defrecord Board [board-id, move-events]
  IBoard
  (move-events [this] (:move-events this))
  (board-id [this] (:board-id this)))


(defn create
  ([m](map->Board m))
  ([board-id, move-events]
   (new Board board-id move-events)))


(defn create-set [raw-set]
  (reduce-kv
    (fn [acc, k, v]
      (assoc acc k (create (merge v {:board-id k}))))
    {}
    raw-set))
