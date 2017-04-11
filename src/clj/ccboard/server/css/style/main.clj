(ns ccboard.server.css.style.main
  (:require [ccboard.server.css.style.constants :as style-constants])
)


(def main-css
  [
    [
      "body"
      {
        "background-color" "black"
      }
    ],
    [
      "svg"
      {
        "border" "2px solid black"
        "background-color" style-constants/main-background-color
      }
      [
        ".piece"
        {
          "cursor" "move"
        }
      ]
    ]
  ])

(def all-css-data
  [
    main-css
  ])
