(ns ccboard.client.playground
  (:require
    [ccboard.shared.data.test-data :as test-data]
    [ccboard.client.async.movement :as async-movement]
    ))


(aset js/window "test_place_move"
  (fn []
    (async-movement/put-new-from-server-move-event!
      test-data/test-move-event)))
;
;

