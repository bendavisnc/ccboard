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

(defn single-green-ball-reactive-elem [pos-atom]
  (fn []
    [:circle {:fill "green" :r 60 :cx (coord/x @pos-atom), :cy (coord/y @pos-atom)}]))

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
    [(single-green-ball-reactive-elem only-pos-atom)]
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
