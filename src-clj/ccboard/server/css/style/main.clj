(ns ccboard.server.css.style.main
  (:require [ccboard.server.css.style.constants :as style-constants])
)


(def main-css
  [
    ["body" {
      "background-color" style-constants/main-background-color
    }],
    ["svg" {
      "border" "2px solid black"
    }]
  ])

(def all-css-data
  [
    main-css
  ])
