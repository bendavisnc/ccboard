(ns ccboard.client.atomic
  (:require
    [ccboard.shared.data.pieces :as pieces-data]
    [ccboard.client.view :as ccboard-view]
    [ccboard.client.movement :as ccboard-movement]
    )
)

;;
;; An atom:
;;   automatically invokes a move eval function when a new move event is added
(def moves
  (let [new-atom (atom [])]
    (do
      (add-watch new-atom :atomic-moves
        (fn [k r o n]
          (ccboard-movement/eval-move-events! n)))
      new-atom)))
