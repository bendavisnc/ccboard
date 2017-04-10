(ns ccboard.core
  (require
    [ccboard.server.handlers :as ccboard-handlers]
    [clojure.tools.logging :as logging]
    [org.httpkit.server :as httpkit])
  (:gen-class))

(defn -main
  "Start the httpkit server."
  [& args]
  ;(println "hey man"))
  (time
    (do
      (httpkit/run-server
        ccboard-handlers/main-handler
        {:port 3000}
        )
      (logging/info "httpkit server started."))))
