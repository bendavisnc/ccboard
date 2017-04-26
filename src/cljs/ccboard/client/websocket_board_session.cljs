(ns ccboard.client.websocket-board-session
  (:require [ccboard.client.ui.svg :as ccboard-svg]
            [ccboard.shared.model.board :as board]
            [ccboard.shared.model.move-event :as move-event]
            [ccboard.client.async.movement.from-server :as async-movement]
            [ccboard.client.mouse :as ccboard-mouse]
            [ccboard.client.evaluation.move-event :as move-event-evaluation]
            [ccboard.shared.constants :as shared-constants]))


;;
;;
;; Defines simple functionality that revolves around one board and one websocket connection.
;;   A new board session is created each time a selection is made from the panel or automatically
;;   when the page loads.


;;
;; The current selected board key.
(def ^:private selected-board-key (atom nil))

(def ^:private current-client-id (atom nil))

(defn ^:private send-board-request! [conn, ^Keyword board-key]
  (.send conn board-key))

(defn ^:private ws-event-resolver [[_, e]]
  (cond
    (= (aget e "type") "open")
      :new-board-session
    (:new-client-id e)
      :new-session-data-received
    (move-event/move-event? e)
      :new-from-server-move-event
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


(defn start-new-session! [new-client-id, new-board]
  (do
    (reset! current-client-id new-client-id)
    (ccboard-svg/clear-transitions!)
    (ccboard-svg/clear-pieces!)
    (ccboard-svg/init-static-pieces! (board/static-pieces new-board))
    (ccboard-svg/init-player-pieces! (board/player-pieces new-board))
    ;(move-event-evaluation/eval-move-events! (board/move-events new-board) :skip-animation? false :pace move-event-evaluation/fast-transition-time)
    (move-event-evaluation/eval-move-events! (board/move-events new-board) :skip-animation? false :pace move-event-evaluation/super-fast-transition-time)
    (ccboard-mouse/enable-mouse-drag!)))

(defmethod ^:private websocket-server-reactions :new-session-data-received [[conn, new-data]]
  (let [[new-client-id, new-board] ((juxt :new-client-id :board) new-data)]
    (start-new-session! new-client-id new-board)))

(defmethod ^:private websocket-server-reactions :new-from-server-move-event [[conn, new-move-event]]
  (println "received new event from server! " (move-event/as-str new-move-event))
  (async-movement/put-new-from-server-move-event! new-move-event)
  )

; todo - cleanup
(defn ^:private add-ws-open-event-listener [conn]
  (.addEventListener conn "open"
    (fn [e]
      (websocket-server-reactions [conn, e]))))

(defn ^:private add-ws-receive-event-listener [conn]
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
    (add-ws-receive-event-listener conn)
    ))

(def ^:private connection-atom (atom nil))

(add-watch connection-atom :every-new-connection
  (fn [_ _ old-conn new-conn]
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
    (reset! connection-atom (js/WebSocket. (str "ws://" shared-constants/site-address "/ws")))))

(defn ^:private on-new-board-session! [session-board-key]
  (renew-connection! session-board-key))

(defn create-new [session-board-key]
  (on-new-board-session! session-board-key))

(defn send-server-move-event! [e]
  (.send (get-connection) e))

(defn current-board []
  (or
    (deref selected-board-key)
    (throw (new js/Error "No board available."))))

(defn current-client []
  (or
    (deref current-client-id)
    (throw (new js/Error "No client available."))))
