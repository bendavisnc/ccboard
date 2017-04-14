(ns ccboard.server.data.boards-tests
  (:require
    [ccboard.server.data.boards :as boards-data]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "boards-data/select-all"
    (is
      (keyword?
        (first
          (boards-data/select-all :keys-only? true))))
    (is
      (not
        (keyword?
          (first
            (boards-data/select-all)))))))







