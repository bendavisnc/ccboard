(ns ccboard.server.css.style.main
  (:require
    [ccboard.server.css.style.constants :as style-constants]
    [ccboard.server.css.style.pieces :as style-pieces]
    [ccboard.server.css.style.boards-panel :as style-boards-panel]
    [ccboard.server.css.style.buttons :as style-buttons]
    )
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
        ;"background-color" "aqua"
        "border" "1px solid gray"
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
    style-pieces/piece-css
    style-boards-panel/boards-panel-css
    style-buttons/buttons-css
  ])
