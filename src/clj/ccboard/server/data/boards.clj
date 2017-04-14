(ns ccboard.server.data.boards
  (:require
    [ccboard.shared.data.test-data :as test-data]
    [ccboard.shared.model.board :as board]
    )
)

(defn select-all [& {:keys [keys-only?]}]
  (apply
    (if keys-only? keys identity)
    [(board/create-set test-data/test-boards)]))

