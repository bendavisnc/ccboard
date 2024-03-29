(ns ccboard.server.html.main-page
  (:require
    [ccboard.server.html.basic-template :as basic-template]
    [ccboard.server.html.boards-panel :as boards-panel]
    [ccboard.server.html.buttons :as buttons]
    [ccboard.server.css.style.constants :as style-constants]))
    
;;
;;
;; Defines the one and only page and how to render it.

(def svg-element
  [:svg 
    {
     :width style-constants/board-width, 
     :height style-constants/board-height
     :viewbox "0 0 1 1"}
    [:g
     {:id "pieces-container"}]])


(defn render []
  (basic-template/render
    [:div {:id "svg-container"} svg-element]
    ;buttons/move-buttons-set
    buttons/bottom-buttons-set
    boards-panel/element))




