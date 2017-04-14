(ns ccboard.shared.model.board-tests
  (:require
    [ccboard.shared.model.board :as board]
    [ccboard.shared.data.test-data :as test-data]
    [clojure.test :refer :all]
    ))

(def test-boards (board/create-set test-data/test-boards))

(deftest tests
  (testing "board/board-id"
    (is
      (keyword?
        (board/board-id (first (vals test-boards)))))))
