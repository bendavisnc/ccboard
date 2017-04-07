(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.model.coord :as coord]
   [d3.core :as d3]
   [ccboard.client.d3-helpers :refer [get-x, get-y, get-id, mouse-x, mouse-y, key->classname]]
   [ccboard.client.atomic :as ccboard-atomic]
   [ccboard.client.view :as ccboard-view]
   [ccboard.shared.data.pieces :as pieces-data]
   [ccboard.client.movement :as ccboard-movement]

   )
)


(defn wire-keyboard-support! []
  (jayq/on
    (jayq/$ js/window)
    "keydown"
    (fn [d]
      (when-let [
        [c f]
          (let [k (aget d "keyCode")]
            (cond
              (= k 37) ;left-arrow
                [:x #(- % 20)]
              (= k 38) ;up-arrow
                ;[:y inc]
                [:y #(- % 20)]
              (= k 39) ;right-arrow
                ;[:x inc]
                [:x #(+ % 20)]
              (= k 40) ;down-arrow
                ;[:y dec]
                [:y #(+ % 20)]
                ))
        ]
        (do
          (swap! (ccboard-atomic/pieces :p27) update c f))))))

(defn setup! []
  (do
    (ccboard-view/init-pieces! pieces-data/piece-data)
    (wire-keyboard-support!)
    (ccboard-movement/enable-piece-drag!)
    ))

;;
;; onload
(jayq/$ setup!)

(enable-console-print!)


