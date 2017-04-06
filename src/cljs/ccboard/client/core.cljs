(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.model.coord :as coord]
   [d3.core :as d3]
   )
)


;;
;;
;;

;;
;; mouse down
;;   piece id
;;

;(def single-green-dot-d3
;  (d3/select "#green-example"))
(def svg-d3
  (d3/select "svg"))

(def piece-data
  [{:cx 550, :cy 89}])

(defn cx [d]
  (aget d "cx"))

(defn cy [d]
  (aget d "cy"))

(defn init-single-blue-dot! []
  (->
    svg-d3
    (.selectAll ".piece")
    (d3/data (clj->js piece-data))
    (.enter)
    (d3/append "circle")
    (d3/attr "class" "piece")
    (d3/attr "cx" cx)
    (d3/attr "cy" cy)
    (d3/attr "r" 50)
    (d3/css "fill" "pink")
    ))


(defn on-drag! [d]
  (this-as this*
    (do
      (aset d "cx"
        (+ (.-cx d) (.-dx (.-event js/d3))))
      (aset d "cy"
        (+ (.-cy d) (.-dy (.-event js/d3))))
      (->
        this*
        (d3/select)
        (d3/attr "cx" (.-cx d))
        (d3/attr "cy" (.-cy d))))))

  ;(do
    ;(.dir js/console args)
    ;(println "raggingdragging")))

;(def enable-basic-dragging!
;  (fn []
;    (->
;      (all-player-pieces-selection)
;      (.call
;        (->
;          (.drag js/d3)
;          (.on "start" on-drag-start!)
;          (.on "drag" on-drag!)
;          (.on "end" on-drag-stop!)
;          )))))

(defn on-drag-start! [d]
  (println "hey yo"))

(defn enable-dragging! []
  (.call (d3/select* ".piece")
    (->
      (.drag js/d3)
      (.on "drag" on-drag!)
      (.on "start" on-drag-start!)
      )))
      ;(d3/on "drag" on-drag!))))


(defn setup! []
  (do
    (init-single-blue-dot!)
    (enable-dragging!)
    ))

;;
;; onload
(jayq/$ setup!)

(enable-console-print!)




;(def moves
;  (atom []))
;
;(add-watch
;  moves
;  :moves-id
;  (fn [k r o n]



;;(def only-pos-atom (reagent/atom {:x 50 :y 60}))
;(def only-pos-atom (atom {:x 50 :y 60}))
;
;(defn test-handler [id special-message & [args]]
;  (this-as this*
;    (do
;      (swap! only-pos-atom assoc
;        :x (aget args "clientX"))
;      (swap! only-pos-atom assoc
;        :y (aget args "clientY")))))
;
;      ;(aset js/window "testobj1" args)
;      ;(.dir js/console special-message)
;      ;(println (aget args "clientX"))
;      ;(.dir js/console this*)
;      ;(.dir js/console args)
;      ;(.dir js/console id)
;      ;)))
;
;(defn single-green-ball-reactive-elem [pos-atom, id]
;  (fn []
;    [:circle {
;      :draggable true
;      :cursor "move"
;      ;:on-drag-start (partial test-handler id "drag starting!")
;      ;:on-drag-end (partial test-handler id "drag ending!")
;      ;:on-drag (partial test-handler id "dragging!")
;      :on-mouse-move (partial test-handler id "mouse moving!")
;      ;:on-mouse-up (partial test-handler id "mouseup!")
;      :fill "aqua"
;      :r 60
;      :cx (coord/x @pos-atom),
;      :cy (coord/y @pos-atom)}]))
;
;;(defn wire-keyboard-support! []
;;  (jayq/on
;;    (jayq/$ js/window)
;;    "keydown"
;;    (fn [d]
;;      (when-let [
;;        [c f]
;;          (let [k (aget d "keyCode")]
;;            (cond
;;              (= k 37) ;left-arrow
;;                [:x #(- % 20)]
;;              (= k 38) ;up-arrow
;;                ;[:y inc]
;;                [:y #(- % 20)]
;;              (= k 39) ;right-arrow
;;                ;[:x inc]
;;                [:x #(+ % 20)]
;;              (= k 40) ;down-arrow
;;                ;[:y dec]
;;                [:y #(+ % 20)]
;;                ))
;;        ]
;;        (swap! only-pos-atom update c f)))))
;
;(defn wire-keyboard-support! []
;  (jayq/on
;    (jayq/$ js/window)
;    "keydown"
;    (fn [d]
;      (when-let [
;          [c f]
;            (->
;              (aget d "keyCode")
;              {37 :left-arrow, 38 :up-arrow, 39 :right-arrow, 40 :down-arrow}
;              {
;                :left-arrow
;                  [:x #(- % 20)]
;                :up-arrow
;                  [:y #(- % 20)]
;                :right-arrow
;                  [:x #(+ % 20)]
;                :down-arrow
;                  [:y #(+ % 20)]
;               })
;        ]
;        (swap! only-pos-atom update c f)))))
;
;
;(defn svg-target []
;  (first (jayq/$ "svg")))
;
;
;(defn init-single-green-ball! []
;  (reagent/render
;    [(single-green-ball-reactive-elem only-pos-atom :piece17)]
;    (svg-target)))
;
;(defn setup! []
;  (do
;    (init-single-green-ball!)
;    (wire-keyboard-support!)
;    ))
;
;;;
;;; onload
;(jayq/$
;  (fn []
;    (do
;      (setup!))))
;
;
;(enable-console-print!)
