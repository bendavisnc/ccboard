(ns ccboard.client.websocket-board-session
  (:require [ccboard.client.svg :as ccboard-svg]
            [ccboard.shared.model.board :as board]
            [ccboard.client.mouse :as ccboard-mouse]
            [d3.core :as d3]))

;;
;;
;; Defines simple functionality that revolves around one board and one websocket connection.


;;
;; The current selected board key.
(def ^:private selected-board-key (atom nil))

(defn ^:private send-board-request! [conn, ^Keyword board-key]
  (.send conn board-key))

(defn ^:private ws-event-resolver [[_, e]]
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



(defmulti ^:private websocket-server-reactions ws-event-resolver)

;;
;; What to do right when a connection is established:
;;   Tell the server what board data we want.
(defmethod ^:private websocket-server-reactions :new-board-session [[conn, e]]
  (send-board-request! conn @selected-board-key))


(defn start-new-session! [new-pieces]
  (do
    (ccboard-svg/init-pieces! new-pieces)
    (ccboard-mouse/enable-mouse-drag!)))
;;
;; What to do when we receive new board data:
;;   Draw the new pieces.
;;   Activate the corresponding mouse listeners for piece dragging.
(defmethod ^:private websocket-server-reactions :new-session-data-received [[conn, new-data]]
  (let [[new-client-id, new-board] ((juxt :new-client-id :board) new-data)]
    (start-new-session! (board/starting-positions new-board))))

; todo - cleanup
(defn ^:private add-ws-open-event-listener [conn]
  (.addEventListener conn "open"
    (fn [e]
      (websocket-server-reactions [conn, e]))))

(defn ^:private add-ws-recieve-event-listener [conn]
  (.addEventListener conn "message"
    (fn [e]
      (let [
          parsed-data
            (->
              (aget e "data")
              cljs.reader/read-string)
        ]
        (websocket-server-reactions [conn, parsed-data])))))

(defn ^:private add-all-ws-event-listeners [conn]
  (do
    (add-ws-open-event-listener conn)
    (add-ws-recieve-event-listener conn)
    ))

(def ^:private connection-atom (atom nil))

(add-watch connection-atom :every-new-connection
  (fn [k r old-conn new-conn]
    (do
      (when old-conn (.close old-conn))
      (add-all-ws-event-listeners new-conn))))

(defn get-connection []
  (or
    (deref connection-atom)
    (throw (new js/Error "Connection unavailable."))))

(defn ^:private renew-connection! [new-board-key]
  (do
    (reset! selected-board-key new-board-key)
    (reset! connection-atom (js/WebSocket. "ws://localhost:3000/ws"))))

(defn ^:private on-new-board-session! [session-board-key]
  (renew-connection! session-board-key))

(defn create-new [session-board-key]
  (on-new-board-session! session-board-key))

(defn send-server-move-event! [e]
  (.send (get-connection) e))


