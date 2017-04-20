(ns ccboard.server.boards
  (:require
    [ccboard.shared.model.board :as board]
    [ccboard.shared.model.move-event :as move-event]
    [ccboard.server.pieces.piece-generation :as piece-generation]
    )
)

;;
;;
;; The in-memory warehousing of all existing boards.

(def the-standard-board
  (board/create :board-0
    :player-pieces piece-generation/all-player-pieces
    :static-pieces piece-generation/all-static-pieces
    ))

(def loaded-boards
  (atom
    {
     (board/board-id the-standard-board)
       the-standard-board
    }))

(defn get-board [board-k]
  (or
    (board-k @loaded-boards)
    (throw (new Exception "Board not found."))))

(defn update-board! [new-move-event]
  (swap! loaded-boards update-in [(move-event/board new-move-event), :move-events] conj new-move-event))

(defn get-all-board-keys [] (keys @loaded-boards))

(defn board-key? [board-key]
  "Returns the board key if present in the loaded board keys, otherwise nil."
  (->
    (get-all-board-keys)
    set
    board-key
    ))

;; an atomic Map
;; client-id -> boards-listening-to -> a send move function
(def all-board-listeners (atom {}))

(defn add-new-board-listener! [& {:keys [board, client-id, on-new-move-event!]}]
  (swap! all-board-listeners assoc-in [client-id, board] on-new-move-event!))

(defn remove-board-listener! [client-id]
  (swap! all-board-listeners dissoc client-id))

(defn update-board-listeners! [new-move-event]
  "Send the move event to all of the current board listeners."
  (dorun
    (for [listener-key (keys @all-board-listeners)]
      (when (not (= listener-key (move-event/comitter new-move-event))) ; Don't resend to the original sender
        (when-let [send-fn (get-in @all-board-listeners [listener-key (move-event/board new-move-event)])]
          (send-fn new-move-event))))))


;;
;; for debugging

(defn print-boards-data []
  (dorun
    (for [board-k (get-all-board-keys)]
      (do
        (println "----------------------------")
        (println "board: " board-k)
        (println "moves: " (count (board/move-events (get-board board-k))))
        (println "----------------------------")
        (println)
        ))))




