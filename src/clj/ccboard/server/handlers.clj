(ns ccboard.server.handlers
  (:require
    [compojure.route :as route]
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.params :as params]
    [ccboard.server.html.main-page :as main-page]
    )
  )


;[alleycat.server.html.main-page :as main-page]

(defroutes main-handler
  (GET "/" [] (main-page/render))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))



