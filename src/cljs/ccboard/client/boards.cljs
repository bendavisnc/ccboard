(ns ccboard.client.boards
  (:require
    [ccboard.client.ajax.boards-data :as boards-data]
    [ccboard.shared.model.board :as board]
    [ccboard.client.ui.boards-panel :as boards-panel]
    [ccboard.client.svg :as ccboard-svg]
    [ccboard.client.mouse :as ccboard-mouse]
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

(defn toggle-board-selected [board-key]
  (do
    (->
      (d3/select* ".board-li")
      (d3/attr "class" "board-li"))
    (->
      (d3/select (str "#" (name board-key)))
      (d3/attr "class" "board-li selected"))))

(defn on-board-select! [newly-selected-board-key]
  (do
    (websocket-board-session/create-new newly-selected-board-key)
    (toggle-board-selected newly-selected-board-key)))



(defn select-board! [board-key]
  "Selects the board associated with the given board key."
  (on-board-select! board-key))

;(defn select-board! [board-key]
;  "Selects the board associated with the given board key."
;  (boards-data/get-board-data board-key
;    (fn [board-from-server]
;      (do
;        (assert (= (board/board-id board-from-server) board-key))
;        (on-board-select! board-from-server)
;        ))))

(defn select-first-board! []
  (select-board!
    (or
      (first @atomic-board-ids)
      (throw (new js/Error "No boards loaded.")))))

