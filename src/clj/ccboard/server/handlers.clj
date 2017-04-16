(ns ccboard.server.handlers
  (:require
    [compojure.route :as route]
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.params :as params]
    [ring.middleware.content-type :as content-type]
    [ccboard.server.html.main-page :as main-page]
    [ccboard.server.boards :as boards]
    [ccboard.server.websockets.handler :as websockets-handler]
    )
  )


;[alleycat.server.html.main-page :as main-page]

(defroutes main-handler
  (GET "/" [] (main-page/render))
  (GET "/ws" []  websockets-handler/ws-handler)
  (GET "/get-all-board-ids" request {
      :status 200
      :headers {"Content-Type" "application/edn"}
      :body
        (pr-str
          (boards/get-all-board-keys))
    })
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))



