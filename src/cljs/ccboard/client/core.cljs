(ns ccboard.client.core
 (:require
   [jayq.core :as jayq]
   [ccboard.client.playground]
   [ccboard.client.boards :as boards]
   [ccboard.client.async.movement.local]
   )
)

(defn on-app-start! []
  (boards/load-boards-from-server! :and-then boards/select-first-board!))

;;
;; onload
(jayq/$ on-app-start!)

(enable-console-print!)


