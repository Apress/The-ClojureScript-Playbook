(ns myapp.core
  "Main application entry point"
  (:require
   [myapp.state :as state]
   [myapp.e01 :as e01]
   [myapp.e02 :as e02]
   [myapp.e05 :as e05]
   [myapp.e06 :as e06]
   [myapp.e07 :as e07]
   [myapp.e08 :as e08]))

;; ============================================================
;; KEYBOARD SHORTCUTS
;; ============================================================

(defn handle-keydown! [e]
  (let [key (.-key e)]
    (case key
      ;; Mode switching
      "1" (e08/start-visualizer! :waveform)
      "2" (e08/start-visualizer! :bars)
      "3" (e08/start-visualizer! :circular)
      "4" (e08/start-visualizer! :particles)
      "5" (e08/start-visualizer! :spectrogram)

      ;; Controls
      " " (do (.preventDefault e)
              ;; Toggle pause (stop/resume audio context)
              (let [ctx (:audio-context @state/app-state)]
                (when ctx
                  (if (= (.-state ctx) "running")
                    (.suspend ctx)
                    (.resume ctx)))))

      ;; Fullscreen
      "f" (do (.preventDefault e)
              (if (.-fullscreenElement js/document)
                (.exitFullscreen js/document)
                (-> (.querySelector js/document "body")
                    (.requestFullscreen))))

      ;; Sensitivity
      "+" (swap! state/app-state update :sensitivity #(min 3.0 (+ % 0.1)))
      "-" (swap! state/app-state update :sensitivity #(max 0.1 (- % 0.1)))

      ;; Stats toggle
      "s" (swap! state/app-state update :show-stats not)

      ;; UI toggle
      "h" (swap! state/app-state update :show-ui not)

      nil)))

;; ============================================================
;; INITIALIZATION
;; ============================================================

(defn ^:export init
  "Initialize the application"
  []
  (state/resize-canvas!)
  (.addEventListener js/window "resize" state/resize-canvas!)
  (.addEventListener js/window "keydown" handle-keydown!)

  ;; Mount UI control panel
  (e08/mount-ui!)

  ;; Auto-start with circular visualizer
  (e08/start-visualizer! :circular)

  (js/console.log "🎵 Audio Visualizer initialized!"))
