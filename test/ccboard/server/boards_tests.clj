(ns ccboard.server.boards-tests
  (:require
    [ccboard.server.boards :as boards]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "boards/good-board-key?"
    (boards/good-board-key? :just-a-test-bard)))


