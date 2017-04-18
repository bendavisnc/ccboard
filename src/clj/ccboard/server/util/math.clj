(ns ccboard.server.util.math)


(defn to-precision [n, amt]
  (/
    (Math/round
      (* 1.0 n (Math/pow 10 amt)))
    (Math/pow 10 amt)))

(def to-radians
  (fn [degrees]
    (*
      degrees
      (/ Math/PI 180))))

(def apply-rotation
  (fn [coord, degrees]
    (let [
        theta (to-radians degrees)
        [x, y] coord
      ]
      [
        (+
          (* x (Math/cos theta))
          (* y (Math/sin theta))),
        (+
          (* x (Math/sin theta) -1)
          (* y (Math/cos theta)))])))

(def apply-translation
  (fn [coord, dx, dy]
    (let [
        [x, y] coord
      ]
      [
        (+ x dx)
        (+ y dy)])))


(def perform-rotation
  (fn [coord, degrees, pivot-coord]
    (let [
        [dx, dy] pivot-coord
      ]
      (
        (comp
          #(apply-translation % dx dy)
          #(apply-rotation % degrees)
          #(apply-translation % (- dx) (- dy)))
        coord))))

(def distance
  (fn [coord-a, coord-b]
    (let [
        [ax, ay] coord-a
        [bx, by] coord-b
      ]
      (Math/pow
        (+
          (Math/pow
            (-
              bx
              ax)
            2)
          (Math/pow
            (-
              by
              ay)
            2))
        0.5))))

