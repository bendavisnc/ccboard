(ns ccboard.client.boards
  (:require
    [ccboard.client.ajax.boards-data :as boards-data]
    [ccboard.client.ui.boards-panel :as boards-panel]
    )
)

(def atomic-board-ids (atom {}))

(defn load-boards-from-server! [& {:keys [and-then]}]
  (boards-data/get-all-board-ids
    (fn [board-ids-from-server]
      (do
        (reset! atomic-board-ids board-ids-from-server)
        (boards-panel/init! board-ids-from-server)
        (when and-then (and-then))))))




(defn select-board! [board-key]
  "Selects the board associated with the given board key."
  (println "need to select" board-key)
  )
  ;todo

(defn select-first-board! []
  (select-board!
    (or
      (first @atomic-board-ids)
      (throw (new js/Error "No boards loaded.")))))
