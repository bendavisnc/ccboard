(ns ccboard.shared.model.move-event-tests
  (:require
    [ccboard.shared.model.move-event :as move-event]
    [clojure.test :refer :all]
    ))

(def test-move-event
  (move-event/create :piece27 []))



(deftest tests
  (testing "move-event/piece"
    (is
      (=
        (move-event/piece test-move-event)
        :piece27))))

