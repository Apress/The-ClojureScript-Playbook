(ns myapp.state
  "Shared application state and utilities"
  (:require [reagent.core :as r]))

;; ============================================================
;; GLOBAL STATE
;; ============================================================

(defonce app-state
  (r/atom {;; Audio context
           :audio-context nil
           :analyser nil
           :data-array-time nil      ; Time domain data (waveform)
           :data-array-freq nil       ; Frequency domain data (spectrum)
           :animation-frame nil
           :started? false

           ;; Audio source
           :source-type :microphone   ; :microphone or :file
           :audio-source nil
           :media-stream nil          ; Store stream to stop it later
           :audio-buffer nil
           :current-file nil

           ;; Visualizer settings
           :mode :circular            ; :waveform, :bars, :circular, :particles, :spectrogram, :3d
           :sensitivity 1.0
           :color-scheme :rainbow     ; :rainbow, :blue, :fire, :monochrome
           :show-stats true
           :show-ui true              ; Show/hide control panel
           :mini-mode false

           ;; Performance
           :fps 60
           :last-frame-time 0

           ;; Beat detection
           :beat-history []
           :last-beat-time 0

           ;; Particles (for particle mode)
           :particles []

           ;; Spectrogram buffer (for spectrogram mode)
           :spectrogram-buffer []}))

;; ============================================================
;; AUDIO CONTEXT MANAGEMENT
;; ============================================================

(defn get-audio-context []
  (or (:audio-context @app-state)
      (let [ctx (js/AudioContext.)]
        (swap! app-state assoc :audio-context ctx)
        ctx)))

(defn setup-analyser! []
  "Setup or reuse existing analyser. Auto-connects to microphone on first call."
  (if-let [existing (:analyser @app-state)]
    ;; Already have an analyser, just return it
    existing
    ;; Need to create new analyser and request microphone
    (let [ctx (get-audio-context)
          analyser (.createAnalyser ctx)]
      (set! (.-fftSize analyser) 2048)
      (set! (.-smoothingTimeConstant analyser) 0.8)
      (let [buffer-length-time (.-fftSize analyser)
            buffer-length-freq (.-frequencyBinCount analyser)
            data-time (js/Uint8Array. buffer-length-time)
            data-freq (js/Uint8Array. buffer-length-freq)]
        (swap! app-state assoc
               :analyser analyser
               :data-array-time data-time
               :data-array-freq data-freq))

      ;; Auto-request microphone if not started
      (when-not (:started? @app-state)
        (-> (js/navigator.mediaDevices.getUserMedia #js {:audio true})
            (.then (fn [stream]
                     (let [source (.createMediaStreamSource ctx stream)]
                       (.connect source analyser)
                       (swap! app-state assoc
                              :started? true
                              :audio-source source
                              :media-stream stream)  ; Store for cleanup
                       (js/console.log "✅ Microphone connected!"))))
            (.catch (fn [err]
                      (js/console.error "Microphone access denied:" err)))))

      analyser)))

(defn ensure-audio-running! []
  "Make sure audio context is running (not suspended)"
  (when-let [ctx (:audio-context @app-state)]
    (when (= (.-state ctx) "suspended")
      (js/console.warn "⚠️ Audio context suspended, resuming...")
      (.resume ctx))))

;; ============================================================
;; COLOR SCHEMES
;; ============================================================

(def color-schemes
  {:rainbow
   {:fn (fn [index total value]
          (let [hue (mod (* 360 (/ index total)) 360)
                lightness (+ 30 (* 50 value))]
            (str "hsl(" hue ", 100%, " lightness "%)")))
    :bg "#000"}

   :blue
   {:fn (fn [_ _ value]
          (let [intensity (int (* 255 value))]
            (str "rgb(0, " (* 0.5 intensity) ", " intensity ")")))
    :bg "#001020"}

   :fire
   {:fn (fn [_ _ value]
          (let [r (int (* 255 (min 1 (* value 1.5))))
                g (int (* 255 (max 0 (- (* value 2) 0.5))))
                b (int (* 40 value))]
            (str "rgb(" r ", " g ", " b ")")))
    :bg "#100000"}

   :monochrome
   {:fn (fn [_ _ value]
          (let [intensity (int (* 255 value))]
            (str "rgb(" intensity ", " intensity ", " intensity ")")))
    :bg "#000"}})

(defn get-color [index total value]
  (let [scheme-key (:color-scheme @app-state)
        scheme (get color-schemes scheme-key)
        color-fn (:fn scheme)]
    (color-fn index total value)))

(defn get-background-color []
  (let [scheme-key (:color-scheme @app-state)
        scheme (get color-schemes scheme-key)]
    (:bg scheme)))

;; ============================================================
;; BEAT DETECTION
;; ============================================================

(defn detect-beat [freq-data]
  "Simple beat detection based on bass frequencies"
  (let [bass-sum (reduce + (map #(aget freq-data %) (range 0 10)))
        bass-avg (/ bass-sum 10)
        bass-norm (/ bass-avg 255.0)

        history (:beat-history @app-state)
        avg-history (if (empty? history)
                      0.5
                      (/ (reduce + history) (count history)))
        threshold (* avg-history 1.4)
        now (.now js/Date)
        time-since-last (- now (:last-beat-time @app-state))]

    ;; Update history (keep last 100 frames)
    (swap! app-state update :beat-history
           #(take-last 100 (conj % bass-norm)))

    ;; Detect beat: bass spike + minimum time between beats
    (when (and (> bass-norm threshold)
               (> time-since-last 150))  ; Min 150ms between beats
      (swap! app-state assoc :last-beat-time now)
      true)))

;; ============================================================
;; FPS MEASUREMENT
;; ============================================================

(defn measure-fps! []
  (let [now (.now js/Date)
        last-time (:last-frame-time @app-state)
        delta (- now last-time)
        fps (if (zero? delta) 60 (/ 1000 delta))]
    (swap! app-state assoc
           :last-frame-time now
           :fps (js/Math.round fps))))

;; ============================================================
;; CANVAS UTILITIES
;; ============================================================

(defn clear-canvas! [ctx width height]
  (set! (.-fillStyle ctx) (get-background-color))
  (.fillRect ctx 0 0 width height))

(defn get-canvas []
  (.getElementById js/document "waveform"))

(defn get-canvas-context []
  (when-let [canvas (get-canvas)]
    (.getContext canvas "2d")))

(defn resize-canvas! []
  (when-let [canvas (get-canvas)]
    (set! (.-width canvas) (.-innerWidth js/window))
    (set! (.-height canvas) (.-innerHeight js/window))))
