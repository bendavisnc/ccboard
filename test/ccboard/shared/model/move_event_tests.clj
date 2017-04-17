(ns ccboard.shared.model.move-event-tests
  (:require
    [ccboard.shared.model.move-event :as move-event]
    [clojure.test :refer :all]
    ))

(def raw-test-event
  {
    :piece :piece27
    :board :board21
    :comitter :clienteastwood
    :movement-data [{:x 191, :y 133} {:x 185, :y 137} {:x 182, :y 141}]
    :start-time 7
    :end-time 77
  })

(def test-move-event
  (move-event/create
    :piece27
    :board21
    :clienteastwood
    :movement-data [{:x 191, :y 133} {:x 185, :y 137} {:x 182, :y 141}]
    :start-time 7
    :end-time 77
    ))


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

