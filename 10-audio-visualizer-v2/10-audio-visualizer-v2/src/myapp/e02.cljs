(ns myapp.e02
  (:require [myapp.state :as state]))

(defn draw-frequency-loop! []
  (let [canvas (state/get-canvas)
        ctx (state/get-canvas-context)]
    (when-let [analyser (:analyser @state/app-state)]
      (let [data-array (:data-array-freq @state/app-state)
            w (.-width canvas)
            h (.-height canvas)]
        (letfn [(draw []
                  ;; Only continue if we're still in bars mode
                  (when (= (:mode @state/app-state) :bars)
                    (swap! state/app-state assoc :animation-frame
                           (js/requestAnimationFrame draw))

                    ;; get frequency data
                    (.getByteFrequencyData analyser data-array)

                    ;; clear canvas
                    (state/clear-canvas! ctx w h)

                    ;; draw bars
                    (let [num-bars (.-length data-array)
                          bar-width (/ w num-bars)
                          bar-gap 1]
                      (loop [i 0
                             x 0]
                        (when (< i num-bars)
                          (let [v (aget data-array i)
                                bar-height (* v (/ h 256))]
                            ;; Bright rainbow colors based on position
                            (let [hue (* 360 (/ i num-bars))
                                  ;; High saturation and lightness for bright colors
                                  brightness (+ 50 (* 20 (/ v 255)))]
                              (set! (.-fillStyle ctx)
                                    (str "hsl(" hue ", 100%, " brightness "%)")))

                            ;; Strong glow for visibility
                            (set! (.-shadowBlur ctx) 15)
                            (set! (.-shadowColor ctx) (str "hsl(" (* 360 (/ i num-bars)) ", 100%, 60%)"))

                            ;; draw the bar
                            (.fillRect ctx x (- h bar-height) (- bar-width bar-gap) bar-height))
                          (recur (inc i) (+ x bar-width)))))

                    ;; Stats
                    (state/measure-fps!)
                    (when (:show-stats @state/app-state)
                      (set! (.-fillStyle ctx) "rgba(0, 255, 180, 0.8)")
                      (set! (.-font ctx) "16px monospace")
                      (.fillText ctx (str "FPS: " (:fps @state/app-state)) 20 30))))]
          (draw))))))

(defn start!
  "Start frequency bars visualizer"
  []
  (when-let [analyser (state/setup-analyser!)]
    (draw-frequency-loop!)))
