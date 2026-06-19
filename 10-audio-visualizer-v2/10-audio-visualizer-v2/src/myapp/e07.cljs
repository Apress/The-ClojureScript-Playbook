(ns myapp.e07
  "Spectrogram visualizer - scrolling frequency history"
  (:require [myapp.state :as state]))

;; ============================================================
;; SPECTROGRAM
;; ============================================================

(def spectrogram-width 128)  ; Number of time slices to keep

(defn init-spectrogram-buffer!
  []
  (swap! state/app-state assoc
         :spectrogram-buffer
         (vec (repeat spectrogram-width
                      (vec (repeat 128 0))))))

(defn update-spectrogram! 
  "Update spectrogram buffer with new frequency data (downsampled to 128 bins)"
  [freq-data]
  (swap! state/app-state update :spectrogram-buffer
         (fn [buffer]
           ;; Downsample freq-data (1024 bins) to 128 bins by averaging groups of 8
           (let [downsampled (vec (for [i (range 128)]
                                    (let [start (* i 8)
                                          group (map #(aget freq-data (+ start %)) (range 8))
                                          avg (/ (reduce + group) 8)]
                                      (int avg))))]
             (conj (subvec buffer 1) downsampled)))))

(defn value->color [value sensitivity]
  (let [v (* value sensitivity (/ 1 255.0))
        v (min 1.0 v)]
    (cond
      (< v 0.2) (str "rgb(0, 0, " (int (* v 5 100)) ")")         ; Dark blue
      (< v 0.4) (str "rgb(0, " (int (* (- v 0.2) 5 255)) ", 150)") ; Blue to cyan
      (< v 0.6) (str "rgb(" (int (* (- v 0.4) 5 255)) ", 200, 150)") ; Cyan to yellow
      (< v 0.8) (str "rgb(255, " (int (* (- 0.8 v) 5 255)) ", 0)") ; Yellow to red
      :else (str "rgb(255, " (int (* (- 1.0 v) 5 120)) ", " (int (* (- 1.0 v) 5 120)) ")")))) ;Red to white

(defonce offscreen-canvas
  (let [c (js/document.createElement "canvas")]
    (set! (.-width c) spectrogram-width)
    (set! (.-height c) 128)
    c))

(defn draw-newest-slice! [freq-slice sensitivity]
  (let [ctx (.getContext offscreen-canvas "2d" #js {:alpha false})
        w (.-width offscreen-canvas)
        h (.-height offscreen-canvas)]
    
    ;; 1. Shift existing image left by 1 pixel
    (.drawImage ctx offscreen-canvas -1 0)
    
    ;; 2. Draw the newest slice at the rightmost edge (x = width - 1)
    (let [x (dec w)]
      (doseq [f (range 128)]
        (let [value (nth freq-slice f 0)
              color (value->color value sensitivity)
              y (- h (inc f))]
          (set! (.-fillStyle ctx) color)
          (.fillRect ctx x y 1 1))))))

(defn draw-spectrogram! [ctx width height]
  ;; In an optimized pipeline, we just stretch the offscreen canvas to fit the main canvas
  ;; Smoothing disabled to keep the retro 128x128 chunky look!
  (set! (.-imageSmoothingEnabled ctx) false)
  (.drawImage ctx offscreen-canvas 0 0 spectrogram-width 128 0 0 width height))

(defn draw-frequency-overlay! [ctx width height freq-data]
  (set! (.-strokeStyle ctx) "rgba(255, 255, 255, 0.8)")
  (set! (.-lineWidth ctx) 2)
  (.beginPath ctx)

  (let [num-bars (.-length freq-data)
        bar-width (/ width num-bars)]
    (loop [i 0]
      (when (< i num-bars)
        (let [v (aget freq-data i)
              x (* i bar-width)
              ;; Invert Y (draw from bottom up)
              y (- height (* (/ v 255.0) (/ height 2)))]
          (if (zero? i)
            (.moveTo ctx x y)
            (.lineTo ctx x y))
          (recur (inc i))))))

  (.stroke ctx))

;; ============================================================
;; MAIN DRAW LOOP
;; ============================================================

(defn draw-loop! []
  (let [canvas (state/get-canvas)
        ctx (state/get-canvas-context)]
    (when-let [analyser (:analyser @state/app-state)]
      (let [freq-data (:data-array-freq @state/app-state)
            w (.-width canvas)
            h (.-height canvas)]
        (letfn [(draw []
                  ;; Only continue if we're still in spectrogram mode
                  (when (= (:mode @state/app-state) :spectrogram)
                    (swap! state/app-state assoc :animation-frame
                           (js/requestAnimationFrame draw))

                    ;; Get frequency data
                    (.getByteFrequencyData analyser freq-data)

                    ;; Update internal buffer
                    (update-spectrogram! freq-data)
                    
                    ;; Draw ONLY the newest slice to offscreen buffer
                    (draw-newest-slice! (peek (:spectrogram-buffer @state/app-state)) (:sensitivity @state/app-state))

                    ;; Render offscreen buffer to screen
                    (draw-spectrogram! ctx w h)

                    ;; Draw current spectrum overlay
                    (draw-frequency-overlay! ctx w h freq-data)

                    ;; Grid lines for frequency markers
                    (set! (.-strokeStyle ctx) "rgba(255, 255, 255, 0.1)")
                    (set! (.-lineWidth ctx) 1)
                    (doseq [i (range 0 h 50)]
                      (.beginPath ctx)
                      (.moveTo ctx 0 i)
                      (.lineTo ctx w i)
                      (.stroke ctx))

                    ;; Stats
                    (state/measure-fps!)
                    (when (:show-stats @state/app-state)
                      (set! (.-fillStyle ctx) "rgba(0, 0, 0, 0.7)")
                      (.fillRect ctx 10 10 200 80)
                      (set! (.-fillStyle ctx) "rgba(0, 255, 180, 1)")
                      (set! (.-font ctx) "14px monospace")
                      (.fillText ctx "SPECTROGRAM MODE" 20 30)
                      (.fillText ctx (str "FPS: " (:fps @state/app-state)) 20 50)
                      (.fillText ctx (str "Sensitivity: " (.toFixed (:sensitivity @state/app-state) 2)) 20 70))))]
          (draw))))))

(defn start!
  []
  (init-spectrogram-buffer!)
  (when-let [_analyser (state/setup-analyser!)]
    (draw-loop!)))
