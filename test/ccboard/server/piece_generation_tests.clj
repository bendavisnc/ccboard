(ns ccboard.server.piece-generation-tests
  (:require
    [ccboard.server.piece-generation :as piece-generation]
    [ccboard.shared.model.coord :as coord]
    [ccboard.shared.constants :as constants]
    [clojure.test :refer :all]
    ))


(deftest tests
  (testing "piece-generation/to-the-right-of"
    (is
      (=
        (piece-generation/to-the-right-of piece-generation/coord-0)
        (assoc piece-generation/coord-0 :x (+ (coord/x piece-generation/coord-0) (* 2 constants/piece-radius)))))
  )
  (testing "piece-generation/row-of-piece-coords"
    (is
      (=
        (piece-generation/row-of-piece-coords 3 piece-generation/coord-0)
        [
          piece-generation/coord-0,
          (piece-generation/to-the-right-of piece-generation/coord-0),
          (piece-generation/to-the-right-of
            (piece-generation/to-the-right-of piece-generation/coord-0))
        ]))
    (is
      (not
        (=
          (first (piece-generation/row-of-piece-coords 3 piece-generation/coord-0))
          (second (piece-generation/row-of-piece-coords 3 piece-generation/coord-0)))))
  )
  (testing "piece-generation/triangle-of-piece-coords"
    (is
      (=
        (->>
          piece-generation/coord-0
          (piece-generation/row-of-piece-coords constants/board-side-length)
          (piece-generation/triangle-of-piece-coords)
          count)
        91))
  )
  (testing "piece-generation/star-of-piece-coords"
    (is
      (=
        (->>
          piece-generation/coord-0
          (piece-generation/row-of-piece-coords constants/board-side-length)
          (piece-generation/triangle-of-piece-coords)
          (piece-generation/star-of-piece-coords)
          count)
        121))
  )
)

