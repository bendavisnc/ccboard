(ns ccboard.client.atomic
  (:require
    [ccboard.shared.data.pieces :as pieces-data]
    [ccboard.client.view :as ccboard-view]
    )
)

(defn- build-position-atom [piece-k, v]
  (let [new-atom (atom v)]
    (do
      (add-watch new-atom piece-k
        (fn [k r o n]
          (ccboard-view/update-piece! k n)))
      new-atom)))


(def pieces
  (reduce-kv
    (fn [acc k v]
      (assoc acc k (build-position-atom k v)))
    {}
    pieces-data/piece-data))

(def moves (atom []))
