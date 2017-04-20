(ns ccboard.client.boards
  (:require
    [ccboard.client.ajax.boards-data :as boards-data]
    [ccboard.client.ui.boards-panel :as boards-panel]
    [ccboard.client.websocket-board-session :as websocket-board-session]
    [d3.core :as d3]
    )
)

(def atomic-board-ids (atom {}))

(declare select-board!)

(defn load-boards-from-server! [& {:keys [and-then]}]
  "Makes a request for all board keys and uses that to populate the board panel."
  (boards-data/get-all-board-ids
    (fn [board-ids-from-server]
      (do
        (reset! atomic-board-ids board-ids-from-server)
        (boards-panel/init! board-ids-from-server :on-board-item-click! select-board!)
        (when and-then (and-then))))))

(defn ^:private toggle-board-selected [board-key]
  (do
    (->
      (d3/select* ".board-li")
      (d3/attr "class" "board-li"))
    (->
      (d3/select (str "#" (name board-key)))
      (d3/attr "class" "board-li selected"))))

(defn ^:private on-board-select! [newly-selected-board-key]
  (do
    (websocket-board-session/create-new newly-selected-board-key)
    (toggle-board-selected newly-selected-board-key)))



(defn select-board! [board-key]
  "Selects the board associated with the given board key."
  (on-board-select! board-key))


(defn select-first-board! []
  (select-board!
    (or
      (first @atomic-board-ids)
      (throw (new js/Error "No boards loaded.")))))

