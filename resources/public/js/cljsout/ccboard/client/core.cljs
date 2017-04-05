(ns ccboard.client.core
 (:require
   [reagent.core :as reagent]
   [jayq.core :as jayq]
   [ccboard.client.model.coord :as coord]
   )
)


;;
;;
;;

(def only-pos-atom (reagent/atom {:x 50 :y 60}))

(defn test-handler [id special-message & [args]]
  (this-as this*
    (do
      (swap! only-pos-atom assoc
        :x (aget args "clientX"))
      (swap! only-pos-atom assoc
        :y (aget args "clientY")))))

      ;(aset js/window "testobj1" args)
      ;(.dir js/console special-message)
      ;(println (aget args "clientX"))
      ;(.dir js/console this*)
      ;(.dir js/console args)
      ;(.dir js/console id)
      ;)))

(defn single-green-ball-reactive-elem [pos-atom, id]
  (fn []
    [:circle {
      :draggable true
      :cursor "move"
      ;:on-drag-start (partial test-handler id "drag starting!")
      ;:on-drag-end (partial test-handler id "drag ending!")
      ;:on-drag (partial test-handler id "dragging!")
      :on-mouse-move (partial test-handler id "mouse moving!")
      ;:on-mouse-up (partial test-handler id "mouseup!")
      :fill "aqua"
      :r 60
      :cx (coord/x @pos-atom),
      :cy (coord/y @pos-atom)}]))

;(defn wire-keyboard-support! []
;  (jayq/on
;    (jayq/$ js/window)
;    "keydown"
;    (fn [d]
;      (when-let [
;        [c f]
;          (let [k (aget d "keyCode")]
;            (cond
;              (= k 37) ;left-arrow
;                [:x #(- % 20)]
;              (= k 38) ;up-arrow
;                ;[:y inc]
;                [:y #(- % 20)]
;              (= k 39) ;right-arrow
;                ;[:x inc]
;                [:x #(+ % 20)]
;              (= k 40) ;down-arrow
;                ;[:y dec]
;                [:y #(+ % 20)]
;                ))
;        ]
;        (swap! only-pos-atom update c f)))))

(defn wire-keyboard-support! []
  (jayq/on
    (jayq/$ js/window)
    "keydown"
    (fn [d]
      (when-let [
          [c f]
            (->
              (aget d "keyCode")
              {37 :left-arrow, 38 :up-arrow, 39 :right-arrow, 40 :down-arrow}
              {
                :left-arrow
                  [:x #(- % 20)]
                :up-arrow
                  [:y #(- % 20)]
                :right-arrow
                  [:x #(+ % 20)]
                :down-arrow
                  [:y #(+ % 20)]
               })
        ]
        (swap! only-pos-atom update c f)))))


(defn svg-target []
  (first (jayq/$ "svg")))


(defn init-single-green-ball! []
  (reagent/render
    [(single-green-ball-reactive-elem only-pos-atom :piece17)]
    (svg-target)))

(defn setup! []
  (do
    (init-single-green-ball!)
    (wire-keyboard-support!)
    ))

;;
;; onload
(jayq/$
  (fn []
    (do
      (setup!))))


(enable-console-print!)
