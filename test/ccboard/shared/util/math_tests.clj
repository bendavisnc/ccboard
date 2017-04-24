(ns ccboard.shared.util.math-tests
  (:require
    [ccboard.shared.util.math :as math-util]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "boards/good-board-key?"
    (is
      (=
        (math-util/to-precision 1.23456 2)
        1.23))))
