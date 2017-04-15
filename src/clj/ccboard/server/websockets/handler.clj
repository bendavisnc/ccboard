(ns ccboard.server.websockets.handler
  (:require [org.httpkit.server :as httpkit-server])
)

(defn ws-handler [request]
  (httpkit-server/with-channel request channel
    (do
      (httpkit-server/on-close channel (fn [args] (println "s: closed!")))
      (httpkit-server/on-receive channel (fn [args] (println "s: recieved!"))))))
