(ns ccboard.client.ui.boards-panel
  (:require
    [d3.core :as d3]))
  

(defn init-board-items! [container board-keys on-board-item-click!]
  (->
    container
    (d3/select "#boards-panel-items-container")
    (d3/select* ".board-li")
    (d3/data
      (clj->js
        (for [board-k board-keys] (name board-k))))
    (d3/entered)
    (d3/append "li")
    (d3/attr "class" "board-li")
    (d3/attr "title" identity)
    (d3/attr "id" identity)
    (d3/text identity)
    (d3/on "click"
           (fn [d]
             (on-board-item-click! (keyword d))))))
  ;(doto
  ;
  ;  (->
  ;    container
  ;    (d3/select "#boards-panel-items-container")
  ;    (d3/select* ".board-li"))
  ;
  ;  (.remove)
  ;
  ;  (d3/data
  ;    (clj->js
  ;      (for [board-k board-keys] (name board-k))))
  ;  (d3/entered)
  ;  (d3/append "li")
  ;  (d3/attr "class" "board-li")
  ;  (d3/attr "title" identity)
  ;  (d3/attr "id" identity)
  ;  (d3/text identity)
  ;  (d3/on "click"
  ;         (fn [d]
  ;           (on-board-item-click! (keyword d))))))

(defn init-board-input! [container on-input-submit!]
  (->
    container
    (d3/select "#new-board-input input")
    (d3/on "keypress"
      (fn [d]
        (this-as this*
          (when 
            (= 13 (-> js/d3 (aget "event") (aget "keyCode")))
              (do
                (on-input-submit! (aget this* "value"))
                (aset this* "value" ""))))))))
    

(defn init! [board-keys & {:keys [on-board-item-click! on-input-submit!]}]
  (let [boards-panel (d3/select "#boards-panel")]
    (do
      (init-board-items! boards-panel board-keys on-board-item-click!)
      (when
        on-input-submit!
        (init-board-input! boards-panel on-input-submit!)))))

