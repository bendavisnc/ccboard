(ns ccboard.server.websockets.handler
  (:require
    [org.httpkit.server :as httpkit-server]
    [ccboard.server.boards :as boards]
    [clojure.tools.logging :as logging]
    [ccboard.shared.model.move-event :as move-event]
    )

)

(defn ^:private new-client-id []
  (gensym "ccboard-client"))

(defn ^:private ws-event-resolver [[_, e]]
  (cond
    (= e :close-event)
      :client-session-over
    (boards/board-key? e)
      :board-key-received
    (move-event/move-event? e)
      :move-event-received
    :else
      (throw (new Exception (str "Unhandled websocket event from client." e)))))

(defmulti websocket-client-reactions ws-event-resolver)

(defmethod websocket-client-reactions :board-key-received [[conn, board-key]]
  (do
    (logging/info "board request recieved: " board-key)
    (httpkit-server/send! conn (pr-str {:new-client-id (new-client-id) :board (boards/get-board board-key)}))))

(defmethod websocket-client-reactions :client-session-over [[conn, _]]
  (logging/info "client session over"))

(defmethod websocket-client-reactions :move-event-received [[conn, new-move-event]]
  (logging/info
    "new move event with piece: "
    (move-event/piece new-move-event)
    " \nmove size: "
    (count (move-event/movement-data new-move-event))))

(defn ws-handler [request]
  (httpkit-server/with-channel request conn
    (do
      (httpkit-server/on-close conn
        (fn [e]
          (websocket-client-reactions [conn, :close-event])))
      (httpkit-server/on-receive conn
        #(websocket-client-reactions [conn, (read-string %)]))
        )))
