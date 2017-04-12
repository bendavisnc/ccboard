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
(def player1-color "#aaff01")
(def player2-color "#ffaa01")
(def player3-color "#ff00aa")
(def player4-color "#ab00ff")
(def player5-color "white")
(def player6-color "#00aaff")

;;
;; dimensions
;(def board-width "800px")
;(def board-height "600px")
(def board-width (str shared-constants/board-width "px"))
(def board-height (str shared-constants/board-height "px"))
