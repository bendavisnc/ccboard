(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.model.coord :as coord]
   [ccboard.client.mouse :as ccboard-mouse]
   [d3.core :as d3]
   [ccboard.client.d3-helpers :refer [get-x, get-y, get-id, mouse-x, mouse-y, key->classname]]
   [ccboard.client.svg :as ccboard-svg]
   [ccboard.shared.data.pieces :as pieces-data]
   [ccboard.client.playground]
   )
)

(defn setup! []
  (do
    (ccboard-svg/init-pieces! pieces-data/piece-data)
    (ccboard-mouse/enable-mouse-drag!)
    ))


;;
;; onload
(jayq/$ setup!)

(enable-console-print!)


