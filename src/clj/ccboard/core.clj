(ns ccboard.core
  (require
    [ccboard.server.handlers :as ccboard-handlers]
    [clojure.tools.logging :as logging]
    [org.httpkit.server :as httpkit])
  (:gen-class))

(def running-server (atom nil))

(defn start-server! []
  (reset! running-server
    (httpkit/run-server
      ccboard-handlers/main-handler
      {:port 3000}
      )))

(defn stop-server! []
  (@running-server :timeout 100))

(defn -main
  "Start the httpkit server."
  [& args]
  (time
    (do
      (start-server!)
      (logging/info "httpkit server started."))))
