(ns ccboard.shared.model.move-event)

;;
;;
;; Defines what a move event is and functionality to create and query against one.

(defprotocol IMoveEvent
  (piece [this] "The piece that was moved (id key).")
  (movement-data [this] "All of the positions (x y coords) that the piece moved.")
  (start-time [this] "The time (millis) the move event started.")
  (end-time [this] "The time (millis) the move event finished.")
  (move-realized? [this] "Rather this move is expected to ALREADY be reflected on the current client's board (svg dom).")
  )

(defrecord MoveEvent [piece, movement-data, start-time, end-time, move-realized?]
  IMoveEvent
  (piece [this] (:piece this))
  (movement-data [this] (:movement-data this))
  (start-time [this] (:start-time this))
  (end-time [this] (:end-time this))
  (move-realized? [this] (:move-realized? this))
  )

(defn create
  "Convenience constructor that takes a piece key and all of the relevent move event data."
  ([m](map->MoveEvent m))
  ([piece, & {:keys [movement-data, start-time, end-time, move-realized?]}]
    (new MoveEvent piece, movement-data, start-time, end-time, move-realized?)))

