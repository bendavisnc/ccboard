(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.playground]
   [ccboard.client.boards :as boards]
   [ccboard.client.async.movement.local]
   [ccboard.client.rotation-filter :as rotation-filter]
   )
)

(defn on-app-start! []
  (do
    (rotation-filter/enable!)
    (boards/load-boards-from-server! :and-then boards/select-first-board!)))

;;
;; onload
(jayq/$ on-app-start!)

(enable-console-print!)


