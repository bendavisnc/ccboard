(ns ccboard.server.html.main-page
  (:require
    [ccboard.server.html.basic-template :as basic-template]
    [ccboard.server.css.style.constants :as style-constants]
    ))


(defn svg-with-content [& content]
  [:svg {:width style-constants/board-width, :height style-constants/board-height}
    content])


(defn example-content []
  (svg-with-content
    ;[:circle {:cx 400 :cy 400 :r 30 :fill "blue"}]))
    [:circle {:id "green-example" :cx 400 :cy 400 :r 30 :fill "green"}]))


(defn render []
  (basic-template/render
    (example-content)))




