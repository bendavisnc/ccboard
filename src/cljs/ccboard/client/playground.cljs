(ns ccboard.client.playground
  (:require
    [ccboard.client.atomic :as ccboard-atomic]
    [ccboard.client.async :as ccboard-async]
    [ccboard.shared.data.test-data :as test-data]
    [ccboard.shared.model.move-event :as move-event]
    ))


(aset js/window "testfn4"
  (fn []
    (println @ccboard-atomic/moves)))


(aset js/window "test_place_move"
  (fn []
    (swap! ccboard-atomic/moves
      conj
      (move-event/create test-data/test-move))))



