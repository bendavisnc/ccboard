(ns ccboard.client.simple-board-session
  (:require [ccboard.client.svg :as ccboard-svg]
            [ccboard.shared.model.board :as board]
            [ccboard.client.mouse :as ccboard-mouse]))

;;
;;
;; Defines simple functionality that revolves around one board and one websocket connection.

(def connection-atom (atom nil))
(add-watch connection-atom :every-new-connection
  (fn [k r old-conn new-conn]
    (do
      (when old-conn (.close old-conn))
      (set! (.-onopen new-conn)
        (fn [e]
          (send-board-
          ))
      (set! (.-onerror new-conn)
        (fn [e]
          (println "bad! " e)))
      (set! (.-onmessage new-conn)
        (fn [e]
          (println "message! " e))))))


(defn renew-connection! [& {:keys [and-then]}]
  (do
    (reset! connection-atom (js/WebSocket. "ws://localhost:3000/ws")))
    (when and-then (and-then)))

(defn on-new-board-session! [session-board]
  (renew-connection!
    :and-then
      #(do
        (ccboard-svg/init-pieces! (board/starting-positions session-board))
        (ccboard-mouse/enable-mouse-drag!))))


(defn create-new [session-board]
  (on-new-board-session! session-board))

