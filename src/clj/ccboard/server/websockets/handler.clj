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

(def connections->client-ids (atom {})) ;todo - revisit

(defmethod websocket-client-reactions :board-key-received [[conn, board-key]]
  (do
    (logging/info "board request received: " board-key)
    (let [red-hot-client-id (new-client-id)]
      (do
        (httpkit-server/send! conn (pr-str {:new-client-id red-hot-client-id :board (boards/get-board board-key)}))
        (swap! connections->client-ids assoc conn red-hot-client-id)
        (boards/add-new-board-listener!
          :board board-key
          :client-id red-hot-client-id
          :on-new-move-event!
            (fn [e] (httpkit-server/send! conn (pr-str e))))))))

(defmethod websocket-client-reactions :client-session-over [[conn, _]]
  (do
    (boards/remove-board-listener! (@connections->client-ids conn))
    (logging/info "client session over")))

;(defn update-board-listeners! [new-move-event]

(defmethod websocket-client-reactions :move-event-received [[conn, new-move-event]]
  (do
    (logging/info
      "new move event with piece: "
      (move-event/as-str new-move-event))
    (boards/update-board! new-move-event)
    (boards/update-board-listeners! new-move-event)
    ))

(defn ws-handler [request]
  (httpkit-server/with-channel request conn
    (do
      (httpkit-server/on-close conn
        (fn [e]
          (websocket-client-reactions [conn, :close-event])))
      (httpkit-server/on-receive conn
        #(websocket-client-reactions [conn, (read-string %)]))
        )))
