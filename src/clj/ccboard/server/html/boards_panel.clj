(ns ccboard.server.html.boards-panel
  (:require
    [ccboard.server.html.buttons :as buttons]))

;;
;;
;; Static htlm elements that make up the boards panel

(def ^:private new-board-input
  [:div {:id "new-board-input"}
    [:input {:id "new-board-input" :type "text" :placeholder "new board"}]])

(def element
  [:div {:id "boards-panel"}
    new-board-input  
    [:ul {:id "boards-panel-items-container"}]])

