(ns ccboard.server.html.basic-template
  (:require
    [hiccup.page :refer [html5]]
    [ccboard.shared.constants :as constants]))
  

;;
;;
;; Defines the base html document that all of the generated pages make use of.

(defn- container [& content]
  "The basic container that wraps all of the dynamic content."
  [:div {:class "container"}
    content])


(defn render [& dynamic-content]
  (html5 {:lang "en"}
    [:head
      [:title constants/app-name]
      [:meta {:charset "utf-8"}]
      [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=yes"}]
      [:script {:src "js/lib/jquery-3.1.1.js"}]
      [:script {:src "js/lib/d3.js"}]
      [:link
        {
          :rel "stylesheet"
          :type "text/css"
          :href "css/main-style.css"}]]
        
      
    
    [:body
      (container dynamic-content)
      [:script {:src "js/cljsout/main.js"}]]))
    




