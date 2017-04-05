(defproject ccboard "0.1.0-SNAPSHOT"
  :description "Typing until my buddy and I can play chinese checkers..."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [
    [lein-ring "0.11.0"]
    [lein-garden "0.3.0"]
    [lein-cljsbuild "1.1.5"]
    ]
  :dependencies [
    [ring/ring-core "1.5.0"]
    [hiccup "1.0.5"],
    [reagent "0.6.1"]
    [compojure "1.5.2"]
    [org.clojure/clojure "1.8.0"]
    [org.clojure/clojurescript "1.9.494"]
    [jayq "2.5.4"]
    ]
  :source-paths ["src-clj"]
  :ring {:handler ccboard.server.handlers/main-handler}
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :garden {
    :builds [{
      :id "ccboard-style"
      :source-paths ["src-clj"]
      :stylesheet ccboard.server.css.style.main/all-css-data
      :compiler {
        :output-to "resources/public/css/main-style.css"
        :pretty-print? true}}]}
  :cljsbuild {
    :builds [{
      :source-paths ["src-cljs"]
      :compiler {
        :output-dir "resources/public/js/cljsout"
        :asset-path "js/cljsout"
        :main ccboard.client.core
        :source-map true
        :output-to "resources/public/js/cljsout/main.js"
        :optimizations :none
        :pretty-print true}}]}

  )
