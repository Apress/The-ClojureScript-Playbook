(ns myapp.e01
  (:require [myapp.state :as state]))

(defn draw-loop! []
  (let [canvas (state/get-canvas)
        ctx (state/get-canvas-context)]
    (when-let [analyser (:analyser @state/app-state)]
      (let [data-array (:data-array-time @state/app-state)
            w (.-width canvas)
            h (.-height canvas)]
        (letfn [(draw []
                  ;; Only continue if we're still in waveform mode
                  (when (= (:mode @state/app-state) :waveform)
                    (swap! state/app-state assoc :animation-frame
                           (js/requestAnimationFrame draw))

                    (.getByteTimeDomainData analyser data-array)

                    (state/clear-canvas! ctx w h)

                    (set! (.-lineWidth ctx) 2)
                    (set! (.-strokeStyle ctx) "#00FFAA")
                    (.beginPath ctx)

                    (let [slice (/ w (.-length data-array))]
                      (loop [i 0
                             x 0]
                        (when (< i (.-length data-array))
                          (let [v (/ (aget data-array i) 128.0)
                                ;; 2x amplitude with smooth clamping (no blocky edges)
                                deviation-raw (* (- v 1) h 2)
                                ;; Soft clamp using tanh for smooth curves
                                deviation (* (js/Math.tanh (/ deviation-raw h)) h 0.8)
                                y (+ (/ h 2) deviation)]
                            (if (zero? i)
                              (.moveTo ctx x y)
                              (.lineTo ctx x y))
                            (recur (inc i) (+ x slice))))))

                    (.lineTo ctx w (/ h 2))
                    (.stroke ctx)

                    ;; Stats
                    (state/measure-fps!)
                    (when (:show-stats @state/app-state)
                      (set! (.-fillStyle ctx) "rgba(0, 255, 180, 0.8)")
                      (set! (.-font ctx) "16px monospace")
                      (.fillText ctx (str "FPS: " (:fps @state/app-state)) 20 30))))]
          (draw))))))

(defn start!
  "Start waveform visualizer"
  []
  (when-let [analyser (state/setup-analyser!)]
    (draw-loop!)))
