(ns ccboard.server.html.buttons)

(defn- button-template [button-id, img-src]
  ["div" {:class "ccboard-button" :id button-id}
    ["img" {:src img-src}]])
  

(def move-forward-button
  (button-template "move-forward-button" "img/buttons/right-arrow.png"))

(def move-back-button
  (button-template "move-back-button" "img/buttons/left-arrow.png"))

(def move-buttons-set
  [:div {:id "move-buttons" :class "buttons-set"}
    move-back-button,
    move-forward-button,])
    

(def reset-button
  (button-template "reset-button" "img/buttons/reset-button.png"))

(def rotate-button
  (button-template "rotate-button" "img/buttons/rotate-button.png"))


(def bottom-buttons-set
  [:div {:id "bottom-buttons" :class "buttons-set"}
    rotate-button,])
    ;reset-button,
    

(def new-board-button
  (button-template "new-board-button" "img/buttons/new-board-button.png"))
