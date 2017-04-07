(ns ccboard.client.movement
  (:require-macros
    [cljs.core.async.macros :as async-macros])
  (:require [d3.core :as d3]
            [ccboard.client.async :as ccboard-async]
            [ccboard.client.view :as ccboard-view]
            [cljs.core.async :as async]
            [ccboard.client.atomic :as ccboard-atomic]
            [ccboard.client.d3-helpers :as d3-helpers]))


(defn on-drag! [d]
  (this-as this*
    (let [
        d* (js->clj d :keywordize-keys true)
        piece-k (keyword (aget this* "id"))
        [mouse-x, mouse-y]
          (js->clj
            (.mouse js/d3
              (.node ccboard-view/svg-d3)))
      ]
      (swap!
        (ccboard-atomic/pieces piece-k)
         merge
         {
           :x mouse-x
           :y mouse-y
         }))))

(defn on-drag-start! [args]
  nil)

(defn on-drag-stop! [args]
  nil)

(defn enable-piece-drag! []
  (.call
    (d3/select* ".piece")
    (->
      (.drag js/d3)
      (.on "start" on-drag-start!)
      (.on "drag" on-drag!)
      (.on "end" on-drag-stop!))))


;(defn- wire-mousedown! []
;  (->
;    ".piece"
;    (d3/select)
;    (d3/on "mousedown"
;    (fn [d]
;      (ccboard-async/pass-to-mousedown-chan! (keyword (aget d "id")))))))
;      ;(do
;      ;  (println "hey there bob")
;      ;  (println
;      ;    (.mouse js/d3 (.node ccboard-view/svg-d3)))
;
;
;(defn- wire-mouseup! []
;  (->
;    ".piece"
;    (d3/select)
;    (d3/on "mouseup"
;    (fn [d]
;      (ccboard-async/pass-to-mouseup-chan! (keyword (aget d "id")))))))
;
;(defn enable-piece-drag! []
;  (do
;    (wire-mousedown!)
;    (wire-mouseup!)
;    ))
;
;(def asynctity
;  (async-macros/go-loop []
;    (let [piece-k (async/<! ccboard-async/piece-mousedown-events-chan)]
;      (do
;        (while (not (async/poll! ccboard-async/piece-mouseup-events-chan))
;          (let [
;              part1 (.node ccboard-view/svg-d3)
;              good? (.dir js/console part1)
;              part2 (.mouse js/d3 part1)
;              [mousex, mousey]
;                (do
;                  (println part1)
;                  (println part2)
;                  (js->clj part2))
;            ]
;            (swap!
;              (ccboard-atomic/pieces piece-k) merge
;              {
;                :x mousex
;                :y mousey
;               })))
;        (recur)))))
