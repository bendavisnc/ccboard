(ns ccboard.server.boards
  (:require
    [ccboard.shared.data.test-data :as test-data]
    [ccboard.shared.model.board :as board]
    [ccboard.shared.model.move-event :as move-event]
    )
)

;;
;;
;; The in-memory warehousing of all existing boards.

(def loaded-boards (atom test-data/test-boards))

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
;; client-id -> boards-listening-to -> that board's channel
(def all-board-listeners (atom {}))

(defn add-new-board-listener! [& {:keys [board, client-id, on-new-move-event!]}]
  (swap! all-board-listeners assoc-in [client-id, board] on-new-move-event!))

(defn remove-board-listener! [client-id]
  (swap! all-board-listeners dissoc client-id))

(defn update-board-listeners! [new-move-event]
  "Send the move event to all of the current board listeners."
  (dorun
    (for [listener-key (keys @all-board-listeners)]
      (when (not (= listener-key (move-event/comitter new-move-event)))
        (when-let [send-fn (get-in @all-board-listeners [listener-key (move-event/board new-move-event)])]
          (send-fn new-move-event))))))




