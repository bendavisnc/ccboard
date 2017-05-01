(ns ccboard.core
  (require
    [ccboard.server.handlers :as ccboard-handlers]
    [clojure.tools.logging :as logging]
    [clojure.tools.namespace.repl :as repl-tools]
    [ring.middleware.reload :refer [wrap-reload]]
    [org.httpkit.server :as httpkit])
  (:gen-class))

(logging/info "Starting ccboard.core")

(defonce running-server (atom nil))

(declare stop-server!)

(defn start-server! []
  (reset! running-server
    (httpkit/run-server
      (wrap-reload ccboard-handlers/main-handler)
      {:port 3000})))

(defn stop-server! []
  (do
    (logging/info "Killing server.")
    (@running-server)))
    
(defn restart-server! []
  (do
    (logging/info "Restarting server.")
    (when-let [existing-server-to-kill @running-server]
      (stop-server!))
    (start-server!)))

(defn auto-start! []
  (do
    (logging/info "Autostarting server.")
    (repl-tools/refresh :after 'ccboard.core/restart-server!)))

;(defn -main
;  "Start the httpkit server."
;  [args]
;  [& {:keys [site-address]}]
  ;(let [dynamic-site-address args]
  ;  (do
  ;    (println dynamic-site-address))))
  ;     (time
  ;       (start-server!)))))




(defn -main [& args]
 "Start the httpkit server."
  (time
        (start-server!)))




