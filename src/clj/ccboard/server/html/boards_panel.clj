(ns ccboard.server.html.boards-panel
  (:require
    [ccboard.server.html.buttons :as buttons])
)

(def new-board-input
  [:input {:id "new-board-input" :type "text" :placeholder "new board"}])

(def element
  [:div {:id "boards-panel"}
    [:ul {:id "boards-panel-items-container"}
      [:li {:class "board-li"}
        new-board-input]]
        ;buttons/new-board-button]]
  ])
