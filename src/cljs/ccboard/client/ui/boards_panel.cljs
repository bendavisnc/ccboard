(ns ccboard.client.ui.boards-panel
  (:require [d3.core :as d3])
)

(defn init! [piece-keys]
  (->
    (d3/select "#boards-panel-items-container")
    (d3/select* ".board-li")
    (d3/data
      (clj->js
        (for [piece-k piece-keys] (name piece-k))))
    (d3/entered)
    (d3/append "li")
    (d3/attr "class" "board-li")
    (d3/attr "title" identity)
    (d3/text identity)))
