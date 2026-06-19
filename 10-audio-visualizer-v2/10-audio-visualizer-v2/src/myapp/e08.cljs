(ns myapp.e08
  "UI Control Panel - Reagent-based interface for all settings"
  (:require [reagent.dom.client :as rdom]
            [myapp.state :as state]
            [myapp.e01 :as e01]
            [myapp.e02 :as e02]
            [myapp.e05 :as e05]
            [myapp.e06 :as e06]
            [myapp.e07 :as e07]))

;;  ============================================================
;; TAURI INTEGRATION
;; ============================================================

(defn tauri-available? 
  "Check if running in Tauri environment"
  []
  (and js/window
       (.-__TAURI__ js/window)
       (.. js/window -__TAURI__ -core)))

(defn invoke-tauri
  "Call Tauri backend command"
  [cmd args]
  (if (tauri-available?)
    (-> (.. js/window -__TAURI__ -core (invoke cmd (clj->js args)))
        (.catch (fn [error]
                  (js/console.error "Tauri error:" error))))
    (do
      (js/console.warn "Tauri API not available. Make sure you're running via 'npm run tauri:dev' not just the browser.")
      (js/Promise.resolve nil))))

(declare load-audio-file!)

(defn open-file-dialog!
  "Open native file dialog and load audio"
  []
  (-> (invoke-tauri "open_file_dialog" {})
      (.then (fn [path]
               (when path
                 (swap! state/app-state assoc :current-file path)
                 (load-audio-file! path))))))

(declare play-audio-buffer!)

(defn load-audio-file!
  "Load audio file via Tauri and create audio buffer"
  [path]
  (-> (invoke-tauri "load_audio_file" {:path path})
      (.then (fn [audio-data]
               (let [ctx (state/get-audio-context)
                     {:keys [samples sample-rate channels]} (js->clj audio-data :keywordize-keys true)
                     ;; Create AudioBuffer from samples
                     buffer (.createBuffer ctx channels (count samples) sample-rate)]
                 ;; Fill buffer with samples
                 (dotimes [channel channels]
                   (let [channel-data (.getChannelData buffer channel)]
                     (doseq [i (range (.-length channel-data))]
                       (aset channel-data i (nth samples i)))))

                 ;; Play the buffer
                 (play-audio-buffer! buffer))))))

(defn play-audio-buffer!
  "Play audio buffer through analyser"
  [buffer]
  (let [ctx (state/get-audio-context)
        source (.createBufferSource ctx)
        analyser (or (:analyser @state/app-state) (state/setup-analyser!))]
    (set! (.-buffer source) buffer)
    (set! (.-loop source) true)
    (.connect source analyser)
    (.connect analyser (.-destination ctx))
    (.start source)
    (swap! state/app-state assoc
           :audio-source source
           :audio-buffer buffer
           :source-type :file)))

(defn toggle-mini-mode!
  "Toggle mini mode via Tauri"
  []
  (let [mini (not (:mini-mode @state/app-state))]
    (swap! state/app-state assoc :mini-mode mini)
    (invoke-tauri "toggle_mini_mode" {:mini mini})))

;; ============================================================
;; VISUALIZER MODE SWITCHING
;; ============================================================

(defn stop-current-visualizer!
  "Stop current animation loop"
  []
  (when-let [frame-id (:animation-frame @state/app-state)]
    (js/cancelAnimationFrame frame-id)
    (swap! state/app-state assoc :animation-frame nil)))

(defn start-visualizer!
  "Start visualizer for given mode"
  [mode]
  (stop-current-visualizer!)
  (swap! state/app-state assoc :mode mode)
  (case mode
    :waveform (e01/start!)
    :bars (e02/start!)
    :circular (e05/start!)
    :particles (e06/start!)
    :spectrogram (e07/start!)
    nil))

;; ============================================================
;; UI COMPONENTS
;; ============================================================

(defn mode-selector []
  (let [current-mode (:mode @state/app-state)
        modes [{:key :waveform :label "Waveform" :icon "~"}
               {:key :bars :label "Bars" :icon "||"}
               {:key :circular :label "Circular" :icon "◉"}
               {:key :particles :label "Particles" :icon "✦"}
               {:key :spectrogram :label "Spectrogram" :icon "▤"}]]
    [:div.mode-selector
     [:label "Visualizer Mode:"]
     [:div.mode-buttons
      (for [{:keys [key label icon]} modes]
        ^{:key key}
        [:button.mode-btn
         {:class (when (= current-mode key) "active")
          :on-click #(start-visualizer! key)}
         [:span.icon icon]
         [:span.label label]])]]))

(defn sensitivity-slider []
  (let [sensitivity (:sensitivity @state/app-state)]
    [:div.control-row
     [:label "Sensitivity:"]
     [:input {:type "range"
              :min 0.1
              :max 3.0
              :step 0.1
              :value sensitivity
              :on-change #(swap! state/app-state assoc :sensitivity
                                 (js/parseFloat (-> % .-target .-value)))}]
     [:span.value (.toFixed sensitivity 1) "x"]]))

(defn color-scheme-selector []
  (let [scheme (:color-scheme @state/app-state)
        schemes [:rainbow :blue :fire :monochrome]]
    [:div.control-row
     [:label "Colors:"]
     [:div.color-buttons
      (for [s schemes]
        ^{:key s}
        [:button.color-btn
         {:class (when (= scheme s) "active")
          :on-click #(swap! state/app-state assoc :color-scheme s)}
         (name s)])]]))

(defn audio-source-controls []
  (let [source-type (:source-type @state/app-state)
        current-file (:current-file @state/app-state)]
    [:div.audio-controls
     [:h4 "Audio Source"]
     [:div.source-buttons
      [:button
       {:class (when (= source-type :microphone) "active")
        :on-click #(do
                     (swap! state/app-state assoc :source-type :microphone)
                     ;; Request microphone access
                     (-> (js/navigator.mediaDevices.getUserMedia #js {:audio true})
                         (.then (fn [stream]
                                  (let [ctx (state/get-audio-context)
                                        source (.createMediaStreamSource ctx stream)
                                        analyser (or (:analyser @state/app-state)
                                                     (state/setup-analyser!))]
                                    (.connect source analyser)
                                    (.connect analyser (.-destination ctx))
                                    (swap! state/app-state assoc :started? true))))))}
       "🎤 Microphone"]

      [:button
       {:on-click open-file-dialog!}
       "📁 Load File"]]

     (when current-file
       [:div.current-file
        [:small "Playing: " (last (.split current-file "/"))]])]))

(defn stats-toggle []
  (let [show (:show-stats @state/app-state)]
    [:div.control-row
     [:label "Show Stats:"]
     [:input {:type "checkbox"
              :checked show
              :on-change #(swap! state/app-state update :show-stats not)}]]))

(defn mini-mode-toggle []
  [:div.control-row
   [:button.special-btn
    {:on-click toggle-mini-mode!}
    (if (:mini-mode @state/app-state)
      "🔲 Normal Mode"
      "🗗 Mini Mode")]])

(defn control-panel []
  (when (:show-ui @state/app-state)
    [:div.control-panel
     {:style {:position "absolute"
              :top 20
              :right 20
              :background "rgba(20, 20, 35, 0.95)"
              :border "1px solid rgba(0, 255, 180, 0.3)"
              :border-radius "12px"
              :padding "20px"
              :min-width "300px"
              :backdrop-filter "blur(10px)"
              :box-shadow "0 8px 32px rgba(0, 0, 0, 0.5)"
              :font-family "sans-serif"
              :color "#fff"
              :z-index 1000}}

     [:h3 {:style {:margin "0 0 20px 0"
                   :font-size "20px"
                   :color "#00FFAA"}}
      "🎵 Audio Visualizer"]

     [audio-source-controls]
     [:hr {:style {:border "none"
                   :border-top "1px solid rgba(255, 255, 255, 0.1)"
                   :margin "20px 0"}}]

     [mode-selector]
     [:hr {:style {:border "none"
                   :border-top "1px solid rgba(255, 255, 255, 0.1)"
                   :margin "20px 0"}}]

     [sensitivity-slider]
     [color-scheme-selector]
     [stats-toggle]

     [:hr {:style {:border "none"
                   :border-top "1px solid rgba(255, 255, 255, 0.1)"
                   :margin "20px 0"}}]

     [mini-mode-toggle]

     [:div.keyboard-hints {:style {:margin-top "20px"
                                   :padding "10px"
                                   :background "rgba(0, 0, 0, 0.3)"
                                   :border-radius "6px"
                                   :font-size "12px"}}
      [:div "Keyboard Shortcuts:"]
      [:div {:style {:margin-top "5px"}}
       [:code "1-5"] " = Switch modes"]
      [:div [:code "Space"] " = Pause/Play"]
      [:div [:code "F"] " = Fullscreen"]
      [:div [:code "H"] " = Hide/Show UI"]]]))

;; ============================================================
;; INITIALIZATION
;; ============================================================

(defonce root (rdom/create-root (.getElementById js/document "controls")))

(defn mount-ui!
  "Mount control panel to DOM"
  []
  (rdom/render root [control-panel]))
