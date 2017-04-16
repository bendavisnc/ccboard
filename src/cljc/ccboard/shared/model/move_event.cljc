(ns ccboard.shared.model.move-event)


;;
;;
;; Defines what a move event is and functionality to create and query against one.

(defn piece [this]
  "The piece that was moved (id key)."
  (:piece this))

(defn movement-data [this]
  "All of the positions (x y coords) that the piece moved."
  (:movement-data this))

(defn start-time [this]
  "The time (millis) the move event started."
  (:start-time this))

(defn end-time [this]
  "The time (millis) the move event finished."
  (:end-time this))

(defn comitter [this]
  "The client id that's the creator of this move."
  (:comitter this))

(defn board [this]
  "The board id that's the board of this move."
  (:board this))

;(defn move-realized? [this]
;  "Whether this move is expected to ALREADY be reflected on the current client's board (svg dom)."
;  (:move-realized? this))

;(defn create [piece, & {:keys [movement-data, start-time, end-time, move-realized?]}]
(defn create [piece, board, comitter & {:keys [movement-data, start-time, end-time]}]
  "Convenience constructor that takes a piece key and all of the relevent move event data."
  {
    :piece piece
    :board board
    :comitter comitter
    :movement-data movement-data
    :start-time start-time
    :end-time end-time
  })

(defn move-event? [e]
  (boolean
    (and
      (:piece e)
      (:board e)
      (:comitter e)
      (:movement-data e)
      (:start-time e)
      (:end-time e)
      ;(:move-realized? e)
      )))

(defn as-str [e]
  (str
    (assoc e
      :movement-data (str "<count: " (count (movement-data e)) ">"))))
