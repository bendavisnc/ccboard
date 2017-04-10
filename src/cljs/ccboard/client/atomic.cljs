(ns ccboard.client.atomic
  (:require
    [ccboard.shared.data.pieces :as pieces-data]
    [ccboard.client.view :as ccboard-view]
    [ccboard.client.movement :as ccboard-movement]
    )
)

;;
;;
;; A ns for anything that provides React-like functionality.
;;   That is, provides some value that's similar to an Rx subject.

(defn- build-position-atom [piece-k, v]
  (let [new-atom (atom v)]
    (do
      (add-watch new-atom piece-k
        (fn [k r o n]
          (ccboard-view/update-piece! k n)))
      new-atom)))


;;
;; A mapping:
;;   piece id key --> atom with watch fn to update d3 element anytime coord value changes
(def pieces
  (reduce-kv
    (fn [acc k v]
      (assoc acc k (build-position-atom k v)))
    {}
    pieces-data/piece-data))


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
