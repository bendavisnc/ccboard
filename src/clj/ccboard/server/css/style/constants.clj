(ns ccboard.server.css.style.constants
  (:require [ccboard.shared.constants :as shared-constants])
)

;;
;;
;; A ns for anything that's a constant and a style value.

;;
;; colors
(def main-background-color "#272822")
;(def main-background-color "yellow")
(def noplayer-color "#999")
(def player-one-color "#aaff01")
(def player-two-color "#ffaa01")
(def player-three-color "#ff00aa")
(def player-four-color "#ab00ff")
(def player-five-color "white")
(def player-six-color "#00aaff")

;;
;; dimensions
;(def board-width "800px")
;(def board-height "600px")
;(def board-width (str shared-constants/board-width "px"))
;(def board-height (str shared-constants/board-height "px"))
;(def board-width "100vh")
(def board-width "100%")
(def board-height board-width)
