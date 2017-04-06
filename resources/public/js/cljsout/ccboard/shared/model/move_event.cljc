(ns ccboard.shared.model.move-event)

(defprotocol IMoveEvent
  (piece [this] "The piece that was moved.")
  (movement-data [this] "All of the positions (x y coords) that the piece moved."))

(defrecord MoveEvent [piece, movement-data]
  IMoveEvent
  (piece [this] (:piece this))
  (movement-data [this] (:movement-data this))
  )

(defn create
  ([m](map->MoveEvent m))
  ([piece, movement-data]
    (new MoveEvent piece movement-data)))

