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

(add-watch running-server :every-start
  (fn [k r old-stop-server-fn new-stop-server-fn]
    (do
      (when (fn? old-stop-server-fn)
        (do
          (old-stop-server-fn)
          (logging/info "killed old server.")))
      (cond
        (fn? new-stop-server-fn)
          (logging/info "httpkit server started.")
        :else
          (throw (new Exception "Server creation failed."))))))

(defn stop-server! []
  (@running-server))

(defn -main
  "Start the httpkit server."
  [& args]
  (time
    (start-server!)))
