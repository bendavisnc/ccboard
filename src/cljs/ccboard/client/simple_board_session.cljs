(ns ccboard.client.simple-board-session
  (:require [ccboard.client.svg :as ccboard-svg]
            [ccboard.shared.model.board :as board]
            [ccboard.client.mouse :as ccboard-mouse]
            [d3.core :as d3]))

;;
;;
;; Defines simple functionality that revolves around one board and one websocket connection.


(def selected-board-key (atom nil))

(defn send-board-request! [conn, ^Keyword board-key]
  (.send conn board-key))

(defn ws-event-resolver [[_, e]]
  (cond
    (= (aget e "type") "open")
      :new-board-session
    :new-client-id
      :new-session-data-received
    :else
      (do
        (.dir js/console e)
        (println (str e))
        (throw (new js/Error "Unhandled websocket event.")))))



(defmulti websocket-server-reactions ws-event-resolver)

;;
;; What to do right when a connection is established:
;;   Tell the server what board data we want.
(defmethod websocket-server-reactions :new-board-session [[conn, e]]
  (send-board-request! conn @selected-board-key))

;;
;; What to do when we receive new board data:
;;   Draw the new pieces.
;;   Activate the corresponding mouse listeners for piece dragging.
(defmethod websocket-server-reactions :new-session-data-received [[conn, new-data]]
  (let [[new-client-id, new-board] ((juxt :new-client-id :board) new-data)]
    (do
      (ccboard-svg/init-pieces! (board/starting-positions new-board))
      (ccboard-mouse/enable-mouse-drag!))))
      ;(println new-client-id)
      ;(println new-board))))

;(defn get-board-selected-key []
;  (->
;    ".board-li.selected"
;    (d3/select)
;    (d3/datum)
;    keyword))

; todo - cleanup
(defn add-ws-open-event-listener [conn]
  (.addEventListener conn "open"
                     (fn [e]
      (websocket-server-reactions [conn, e]))))

(defn add-ws-recieve-event-listener [conn]
  (.addEventListener conn "message"
                     (fn [e]
      (let [
          parsed-data
            (->
              (aget e "data")
              cljs.reader/read-string)
        ]
        (websocket-server-reactions [conn, parsed-data])))))

(defn add-all-ws-event-listeners [conn]
  (do
    (add-ws-open-event-listener conn)
    (add-ws-recieve-event-listener conn)
    ))



(def connection-atom (atom nil))
(add-watch connection-atom :every-new-connection
  (fn [k r old-conn new-conn]
    (do
      (when old-conn (.close old-conn))
      (add-all-ws-event-listeners new-conn))))
      ;(set! (.-onopen new-conn)
      ;  (fn [e]
      ;    (send-board-
      ;    ))
      ;(set! (.-onerror new-conn)
      ;  (fn [e]
      ;    (println "bad! " e)))
      ;(set! (.-onmessage new-conn)
      ;  (fn [e]
      ;    (println "message! " e))))))


(defn renew-connection! [new-board-key & {:keys [and-then]}]
  (do
    (reset! selected-board-key new-board-key)
    (reset! connection-atom (js/WebSocket. "ws://localhost:3000/ws")))
    (when and-then (and-then)))

(defn on-new-board-session! [session-board-key]
  (renew-connection! session-board-key))

;(defn on-new-board-session! [session-board-key]
;  (renew-connection!
;    :and-then
;      #(do
;        (ccboard-svg/init-pieces! (board/starting-positions session-board))
;        (ccboard-mouse/enable-mouse-drag!))))


(defn create-new [session-board-key]
  (on-new-board-session! session-board-key))

