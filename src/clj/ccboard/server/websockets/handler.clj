(ns ccboard.server.websockets.handler
  (:require
    [org.httpkit.server :as httpkit-server]
    [ccboard.server.boards :as boards]
    )

)

(defn new-client-id []
  (gensym "ccboard-client"))

(defn on-recieve! [ws-chan e]
  (or
    (if-let [board-key (boards/good-board-key? (read-string e))]
      (httpkit-server/send! ws-chan (pr-str {:new-client-id (new-client-id) :board (boards/get-board board-key)}))
      true)
    (throw (new Exception (str "Unhandled web socket message." e)))))


(defn ws-handler [request]
  (httpkit-server/with-channel request channel
    (do
      (httpkit-server/on-close channel
        (fn [args] (println "s: closed!")))
      (httpkit-server/on-receive channel (partial on-recieve! channel))
        ;(fn [args] (println "s: recieved! " args))
        )))
