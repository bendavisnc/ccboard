(ns ccboard.server.boards-tests
  (:require
    [ccboard.server.boards :as boards]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "boards/board-key?"
    (is
      (boards/board-key? :board-0))
    (is (not
      (boards/board-key? :board-i-do-what-i-want)))
      ))


