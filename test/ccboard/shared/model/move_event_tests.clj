(ns ccboard.shared.model.move-event-tests
  (:require
    [ccboard.shared.model.move-event :as move-event]
    [clojure.test :refer :all]
    ))

(def raw-test-event
  {
    :piece :piece27
    :movement-data [{:x 191, :y 133} {:x 185, :y 137} {:x 182, :y 141}]
    :start-time 7
    :end-time 77
    :move-realized? false
  })

(def test-move-event
  (move-event/create
    :piece27
    :movement-data [{:x 191, :y 133} {:x 185, :y 137} {:x 182, :y 141}]
    :start-time 7
    :end-time 77
    :move-realized? false))


(deftest tests
  (testing "move-event/piece"
    (is
      (=
        (move-event/piece test-move-event)
        :piece27)))
  (testing "move-event/create"
    (is
      (=
        (into {} test-move-event)
        raw-test-event
      )))
)

