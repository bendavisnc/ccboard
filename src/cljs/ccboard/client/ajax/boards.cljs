(ns ccboard.client.ajax.boards
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

(defn send-new-board-request! [raw-board-name & {:keys [on-success]}]
  (jayq/done
    (jayq/ajax
      {
       :url "new-board-request"
       :type "get"
       :data raw-board-name
       })
    on-success))
