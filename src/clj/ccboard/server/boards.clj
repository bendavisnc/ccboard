(ns ccboard.server.boards
  (:require
    [ccboard.shared.data.test-data :as test-data]
    [ccboard.shared.model.board :as board]
    )
)


(def loaded-boards test-data/test-boards)

(defn get-board [board-k]
  (or
    (board-k loaded-boards)
    (throw (new Exception "Board not found."))))

(defn get-all-board-keys [] (keys loaded-boards))