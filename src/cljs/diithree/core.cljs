(ns diithree.core)

; A work in progress.

; based off of https://github.com/ibdknox/jayq/blob/master/src/jayq/core.cljs

;(def ddd
;  (fn [sel]
;    (cond
;      (string? sel)
;      (.selectAll js/d3 sel)
;      (array? sel)
;      (.selectAll js/d3 sel)
;      :else
;        (.select js/d3 sel))))

(defn select [s]
  (.select js/d3 s))

(defn select-all [s]
  (.selectAll js/d3 s))

(def d3type (.-selection js/d3))

(extend-type d3type

  ISeqable
  (-seq [this] (when (.node this)
                 this))
  ISeq
  (-first [this] (.node this))
  (-rest [this] (if (> (count this) 1)
                  (.slice (.nodes this) 1)
                  (list)))

  ICounted
  (-count [this] (.size this))

  IIndexed
  (-nth
    ([this n]
     (when (<  n (count this))
       (.slice (.nodes this) n (inc n))))
    ([this n not-found]
     (if (< n (count this))
       (.slice (.nodes this) n (inc n))
       (if (undefined? not-found)
         nil
         not-found))))

  ISequential

  ILookup
  (-lookup
    ([this k]
     (or (.slice (.nodes this) k (inc k)) nil))
    ([this k not-found]
     (-nth this k not-found)))

  IReduce
  (-reduce
    ([this f]
     (ci-reduce this f))
    ([this f start]
     (ci-reduce this f start))))


(def classed
  (fn
    ([this, c]
     (.classed this c))
    ([this, c, d]
     (.classed this c d))))


(def datum
  (fn
    ([this]
     (.datum this))
    ([this, d]
     (.datum this d))))

