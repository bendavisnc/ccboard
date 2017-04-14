(ns ccboard.server.html.boards-panel
  (:require
    [ccboard.server.html.buttons :as buttons])
)

(def element
  [:div {:id "boards-panel"}
    [:ul {:id "boards-panel-items-container"}
      [:li
        buttons/new-board-button]]
  ])
