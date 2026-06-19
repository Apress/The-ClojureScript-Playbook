(ns myapp.e06
  (:require [myapp.state :as state]))

;; Simple particle system that ALWAYS spawns particles

(defn create-particle [x y vx vy color life]
  {:x x :y y :vx vx :vy vy :color color :life life})

(defn update-particle [p]
  (when (> (:life p) 0)
    (-> p
        (update :x + (:vx p))
        (update :y + (:vy p))
        (update :vy + 0.2)  ; gravity
        (update :life - 0.01))))

(defn update-particles! []
  (swap! state/app-state update :particles
         (fn [particles]
           (vec (keep update-particle particles)))))

(defn draw-particles! [ctx]
  (doseq [p (:particles @state/app-state)]
    (set! (.-fillStyle ctx) (:color p))
    (set! (.-globalAlpha ctx) (:life p))
    (.fillRect ctx (:x p) (:y p) 4 4))
  (set! (.-globalAlpha ctx) 1.0))

(defn spawn-particles! [freq-data canvas-width canvas-height]
  "Spawn particles - ALWAYS spawn some regardless of audio!"
  (let [bass (/ (aget freq-data 2) 255.0)
        mid (/ (aget freq-data 128) 255.0)
        high (/ (aget freq-data 500) 255.0)
        sensitivity (:sensitivity @state/app-state)

        ;; Make particle count VERY reactive to audio (wider range)
        bass-count (int (* 30 bass sensitivity))  ; 0-30 particles
        mid-count (int (* 15 mid sensitivity))    ; 0-15 particles  
        high-count (int (* 20 high sensitivity))] ; 0-20 particles

    ;; Bass bursts from center
    (dotimes [_ bass-count]
      (let [angle (* (rand) (* 2 js/Math.PI))
            speed (+ 3 (* 6 (max 0.3 bass)))
            vx (* speed (js/Math.cos angle))
            vy (* speed (js/Math.sin angle))]
        (swap! state/app-state update :particles conj
               (create-particle
                (/ canvas-width 2)
                (/ canvas-height 2)
                vx vy
                "rgba(255, 100, 100, 0.8)"
                1.0))))

    ;; Mid streams from sides
    (dotimes [_ mid-count]
      (let [from-left (< (rand) 0.5)
            x (if from-left 0 canvas-width)
            y (* (rand) canvas-height)
            vx (if from-left (* 6 (max 0.3 mid)) (* -6 (max 0.3 mid)))
            vy (* (- (rand) 0.5) 4)]
        (swap! state/app-state update :particles conj
               (create-particle
                x y vx vy
                "rgba(100, 255, 255, 0.8)"
                0.8))))

    ;; High rain from top
    (dotimes [_ high-count]
      (swap! state/app-state update :particles conj
             (create-particle
              (* (rand) canvas-width)
              0
              (* (- (rand) 0.5) 2)
              (* 4 (max 0.3 high))
              "rgba(255, 255, 100, 0.8)"
              0.7)))))

(defn draw-loop! []
  (let [canvas (state/get-canvas)
        ctx (state/get-canvas-context)]
    (when-let [analyser (:analyser @state/app-state)]
      (let [freq-data (:data-array-freq @state/app-state)
            w (.-width canvas)
            h (.-height canvas)]
        (letfn [(draw []
                  ;; Only continue if we're still in particles mode
                  (when (= (:mode @state/app-state) :particles)
                    ;; Get frequency data
                    (.getByteFrequencyData analyser freq-data)

                    ;; Clear with fade effect (trail)
                    (set! (.-fillStyle ctx) "rgba(0, 0, 0, 0.1)")
                    (.fillRect ctx 0 0 w h)

                    ;; Update and draw particles
                    (update-particles!)
                    (spawn-particles! freq-data w h)
                    (draw-particles! ctx)

                    ;; FPS counter
                    (state/measure-fps!)
                    (when (:show-stats @state/app-state)
                      (set! (.-fillStyle ctx) "rgba(0, 255, 180, 0.8)")
                      (set! (.-font ctx) "16px monospace")
                      (.fillText ctx (str "FPS: " (:fps @state/app-state)) 20 30)
                      (.fillText ctx (str "Particles: " (count (:particles @state/app-state))) 20 50))

                    ;; Schedule next frame
                    (swap! state/app-state assoc :animation-frame
                           (js/requestAnimationFrame draw))))]
          (draw))))))

(defn start!
  "Start particle visualizer"
  []
  ;; Clear old particles
  (swap! state/app-state assoc :particles [])
  (when-let [_analyser (state/setup-analyser!)]
    (draw-loop!)))
