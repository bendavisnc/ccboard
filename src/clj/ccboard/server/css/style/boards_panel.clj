(ns ccboard.server.css.style.boards-panel)

(def boards-panel-css
  [
    [
      "#boards-panel" {
        "width" "400px"
        "height" "90vh"
        ;"border" "1px solid green"
        "border-left" "4px solid #999999"
        "position" "absolute"
        "right" "40px"
        "top" "40px"
        "margin-left" "auto"
        "margin-right" "auto"
      }
      [
        "#new-board-button" {
          "margin-left" "auto"
          "margin-right" "auto"
          "margin-bottom" "20px"
          "float" "none"
          ;"display" "inline-block"
        }
      ]
      [
        "ul" {
          "margin" "0px"
        }
      ]
      [
        ".board-li" {
          "width" "100%"
          "height" "100px"
          "border-top" "2px solid #999999"
          "color" "#4d4d4d"
          "font-size" "36px"
          "text-decoration" "none"
          "font-family" "monospace"
          "vertical-align" "middle"
          "line-height" "100px"
          "overflow" "hidden"
        }
      ]
      [
        ".board-li.selected" {
          "color" "white"
        }
      ]
    ]
  ]
  )
