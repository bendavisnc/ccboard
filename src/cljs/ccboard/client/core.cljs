(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.mouse :as ccboard-mouse]
   [d3.core :as d3]
   [ccboard.client.d3-helpers :refer [get-x, get-y, get-id, mouse-x, mouse-y, key->classname]]
   [ccboard.client.svg :as ccboard-svg]
   [ccboard.client.playground]
   [ccboard.client.boards :as boards]
   )
)

;(defn setup! []
;  (do
;    (ccboard-svg/init-pieces! pieces-data/piece-data)
;    (ccboard-mouse/enable-mouse-drag!)
;    ))

(defn on-app-start! []
  (do
    (boards/load-boards-from-server! :and-then boards/select-first-board!)))
                                     ;#(do
                                     ;  (boards/select-first-board!)
                                     ;  (ccboard-mouse/enable-mouse-drag!)))))

;;
;; onload
(jayq/$ on-app-start!)

(enable-console-print!)


