(ns ccboard.client.ajax.boards-data
  (:require [jayq.core :as jayq])
)

(defn get-all-board-ids [callback-fn]
  (jayq/done
    (jayq/ajax
      {
        :url "get-all-board-ids"
        :type "get"
      })
      callback-fn))

