(ns ccboard.shared.model.board-tests
  (:require
    [ccboard.shared.model.board :as board]
    [ccboard.shared.data.test-data :as test-data]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "board/board-id"
    (is
      (keyword?
        (board/board-id (first (vals test-data/test-boards)))))))
