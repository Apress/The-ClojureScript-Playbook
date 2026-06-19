(ns myapp.e05
  (:require [myapp.state :as state]))

(defn draw-frequency-loop! []
  (let [canvas (state/get-canvas)
        ctx (state/get-canvas-context)]
    (when-let [analyser (:analyser @state/app-state)]
      (let [data-array (:data-array-freq @state/app-state)]
        (letfn [(draw []
                  ;; Only continue if we're still in circular mode
                  (when (= (:mode @state/app-state) :circular)
                    (swap! state/app-state assoc :animation-frame
                           (js/requestAnimationFrame draw))

                    ;; Get frequency data
                    (.getByteFrequencyData analyser data-array)

                    ;; Clear background - always use pure black
                    (let [w (.-width canvas)
                          h (.-height canvas)
                          center-x (/ w 2)
                          center-y (/ h 2)
                          max-radius (min (/ w 2) (/ h 2))]
                      (set! (.-fillStyle ctx) "#000")
                      (.fillRect ctx 0 0 w h)

                      ;; Compute average amplitude for center "pulse" radius
                      (let [num-bars (.-length data-array)
                            sum (reduce + (map #(aget data-array %) (range num-bars)))
                            avg (/ sum num-bars)
                            norm (/ avg 255.0)
                            base-inner-radius (+ 20 (* norm 80))]

                        ;; Draw radial bars - disable any shadows/glow
                        (set! (.-shadowBlur ctx) 0)
                        (set! (.-shadowColor ctx) "transparent")
                        (set! (.-lineWidth ctx) 2)
                        (let [angle-step (/ (* 2 Math/PI) num-bars)]
                          (loop [i 0]
                            (when (< i num-bars)
                              (let [v (aget data-array i)
                                    bin-norm (/ v 255.0)
                                    bar-length (* 0.85 (+ 50 (* bin-norm max-radius)))
                                    angle (* i angle-step)

                                    x-start (+ center-x (* base-inner-radius (Math/cos angle)))
                                    y-start (+ center-y (* base-inner-radius (Math/sin angle)))

                                    x-end (+ center-x (* bar-length (Math/cos angle)))
                                    y-end (+ center-y (* bar-length (Math/sin angle)))

                                    ;; Always use rainbow colors for circular mode
                                    hue (mod (* 360 (/ i num-bars)) 360)
                                    lightness (+ 30 (* 50 bin-norm))]

                                ;; Fixed rainbow color
                                (set! (.-strokeStyle ctx)
                                      (str "hsl(" hue ", 100%, " lightness "%)"))
                                (.beginPath ctx)
                                (.moveTo ctx x-start y-start)
                                (.lineTo ctx x-end y-end)
                                (.stroke ctx))

                              (recur (inc i)))))

                        ;; Crosshair & stats overlay
                        (when (:show-stats @state/app-state)
                          ;; Crosshair
                          (set! (.-strokeStyle ctx) "rgba(0, 255, 180, 0.2)")
                          (set! (.-lineWidth ctx) 1)
                          (.beginPath ctx)
                          (.moveTo ctx center-x 0)
                          (.lineTo ctx center-x h)
                          (.moveTo ctx 0 center-y)
                          (.lineTo ctx w center-y)
                          (.stroke ctx)

                          ;; Big center digits
                          (set! (.-fillStyle ctx) "rgba(0, 255, 180, 0.9)")
                          (set! (.-font ctx) "bold 48px monospace")
                          (set! (.-textAlign ctx) "center")
                          (.fillText ctx (str (int avg)) center-x center-y)

                          ;; Corner stats
                          (set! (.-font ctx) "14px monospace")
                          (set! (.-textAlign ctx) "left")
                          (.fillText ctx (str "FPS: " (:fps @state/app-state)) 20 30)
                          (.fillText ctx (str "Avg: " (int avg)) 20 50)
                          (.fillText ctx (str "Peak: " (apply max (map #(aget data-array %) (range num-bars)))) 20 70))))))]
          (draw))))))

(defn start!
  "Start circular spectrum visualizer"
  []
  (when-let [analyser (state/setup-analyser!)]
    (draw-frequency-loop!)))
