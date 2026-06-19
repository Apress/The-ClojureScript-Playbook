# 🎵 Audio Visualizer - Chapter 10

A stunning real-time audio visualizer built with **Tauri** (Rust) and **ClojureScript**. Features multiple visualization modes, beat detection, particle effects, and native desktop capabilities.

![Audio Visualizer Demo](screenshot.png)

## ✨ Features

### 🎨 Visualization Modes
- **Waveform** - Classic oscilloscope-style time domain
- **Frequency Bars** - Spectrum analyzer with gradients
- **Circular Spectrum** - Radial bars radiating from center
- **Particles** - Beat-reactive physics-based particle system
- **Spectrogram** - Scrolling frequency history heatmap

### 🎛️ Controls
- **4 Color Schemes**: Rainbow, Blue, Fire, Monochrome
- **Sensitivity Slider**: Adjust responsiveness (0.1x - 3.0x)
- **Audio Sources**: Microphone or local files (MP3/WAV/FLAC)
- **Mini Mode**: Always-on-top compact window
- **Stats Overlay**: FPS, peak frequency, and more

### ⌨️ Keyboard Shortcuts
- `1-5` - Switch visualizer modes
- `Space` - Pause/Resume
- `F` - Toggle fullscreen
- `+/-` - Adjust sensitivity
- `S` - Toggle stats overlay

### 🖥️ Native Desktop Features (Tauri)
- Load local audio files (MP3, WAV, FLAC, M4A)
- Native file dialogs
- System tray integration
- Always-on-top mini mode
- Cross-platform (macOS, Windows, Linux)

## 📦 Installation

### Prerequisites
- **Node.js** 18+ (for ClojureScript compilation)
- **Rust** 1.70+ (for Tauri backend)
- **Java** 11+ (for Shadow-CLJS)

### Install Dependencies

```bash
# Install npm dependencies (Tauri CLI, Shadow-CLJS)
npm install

# Tauri will auto-install Rust dependencies on first run
```

## 🚀 Development

### Quick Start (Recommended)

Run both ClojureScript compiler and Tauri dev server simultaneously:

```bash
npm run dev
```

This uses `concurrently` to run both:
- Shadow-CLJS watch mode (port 8020)
- Tauri dev server (native window)

### Manual Start (Alternative)

If you prefer separate terminals:

```bash
# Terminal 1: Start ClojureScript compiler
npm run shadow:watch

# Terminal 2: Start Tauri (after ClojureScript compiles)
npm run tauri:dev
```

### First Run

The first time you run `tauri dev`, it will:
1. Download and compile Rust dependencies (~5 minutes)
2. Build Symphonia audio decoder
3. Launch the application window

Subsequent runs are much faster (~10 seconds).

## 🏗️ Production Build

Build standalone desktop application:

```bash
npm run build
```

This will:
1. Compile ClojureScript (`shadow-cljs release app`)
2. Build Tauri binary (`tauri build`)
3. Output to `src-tauri/target/release/bundle/`

### Build Outputs

- **macOS**: `.dmg` and `.app` in `bundle/macos/`
- **Windows**: `.msi` in `bundle/msi/`
- **Linux**: `.deb` and `.AppImage` in `bundle/deb/` and `bundle/appimage/`

## 📁 Project Structure

```
10-audio-visualizer/
├── src/
│   └── myapp/
│       ├── core.cljs          # Main app & keyboard shortcuts
│       ├── state.cljs          # Shared state management
│       ├── e01.cljs            # Waveform visualizer
│       ├── e02.cljs            # Frequency bars
│       ├── e05.cljs            # Circular spectrum
│       ├── e06.cljs            # Particle system
│       ├── e07.cljs            # Spectrogram
│       └── e08.cljs            # UI Control Panel
├── src-tauri/
│   ├── src/
│   │   ├── main.rs             # Tauri app & commands
│   │   └── audio_loader.rs     # Audio file decoder
│   ├── Cargo.toml              # Rust dependencies
│   └── tauri.conf.json         # Tauri configuration
├── public/
│   ├── index.html              # HTML shell
│   └── js/                     # Compiled ClojureScript
├── package.json                # npm dependencies & scripts
└── shadow-cljs.edn             # ClojureScript build config
```

## 🎓 Architecture

```
Audio Input (Microphone/File)
         ↓
    AudioContext (Web Audio API)
         ↓
    AnalyserNode (FFT Processing)
         ↓
┌────────────────────────────┐
│ Shared State (state.cljs)  │
│  - Audio data              │
│  - Color schemes           │
│  - Beat detection          │
└────────────────────────────┘
         ↓
    Mode Router (e08)
         ↓
    ┌────┬────┬────┬────┬────┐
   e01  e02  e05  e06  e07
  (wave)(bars)(circ)(part)(spec)
    └────┴────┴────┴────┴────┘
         ↓
    Canvas 2D Rendering
```

## 🔧 Troubleshooting

### "Icon file not found" error

**Temporary fix**: Comment out icon references in `src-tauri/tauri.conf.json`:

```json
"icon": [
  // "icons/32x32.png",
  // ...
],
```

### ClojureScript compilation errors

1. Ensure Java 11+ is installed: `java --version`
2. Clear shadow-cljs cache: `rm -rf .shadow-cljs`
3. Reinstall: `npm install`

### Rust compilation errors

1. Update Rust: `rustup update`
2. Clean build: `cd src-tauri && cargo clean`
3. Rebuild: `npm run tauri:dev`

### Audio not working

- **Microphone**: Browser/OS may require permissions
- **File loading**: Ensure Tauri file access permissions in config
- **No sound**: Check system audio settings

## 🎯 Learning Objectives (Chapter 10)

This project demonstrates:

1. **Tauri Integration** - Building desktop apps with Rust + Web tech
2. **FFT Analysis** - Real-time frequency analysis
3. **Canvas Performance** - 60fps visualization rendering
4. **Particle Physics** - Gravity, velocity, lifespan management
5. **Beat Detection** - Auto-detection from frequency data
6. **State Management** - Shared state across components
7. **Rust ↔ JS Communication** - Tauri commands & events
8. **Native File System** - Loading local files securely
9. **Cross-Platform Build** - Single codebase, multiple platforms

## 📚 What You'll Learn

- How to set up a Tauri + ClojureScript project
- Web Audio API for real-time analysis
- Creating multiple visualization renderers
- Physics-based particle systems
- Beat detection algorithms
- Reagent UI component patterns
- Rust audio decoding with Symphonia
- Desktop app distribution

## 🌟 Extending the Project

Ideas for further development:

- [ ] **Recording**: Save visualizations as video/GIF
- [ ] **Presets**: Save/load visualization configurations
- [ ] **MIDI Support**: Control parameters via MIDI controller
- [ ] **Shader Effects**: WebGL for more advanced visuals
- [ ] **Playlist**: Queue multiple audio files
- [ ] **Beat Sync**: Snap animations to detected beats
- [ ] **Themes**: Full UI theming system
- [ ] **Plugins**: Extensible visualizer plugin system

## 📝 License

Educational project for the ClojureScript book.

## 🙏 Credits

Built for **Chapter 10** of the ClojureScript Creative Coding book, demonstrating the power of combining:
- **Tauri** - Cross-platform desktop apps
- **ClojureScript** - Functional reactive programming
- **Reagent** - React wrapper for ClojureScript
- **Web Audio API** - Real-time audio processing
- **Rust** - Systems programming for native capabilities

---

**Ready to visualize some audio?** Run `npm run dev` and press `1-5` to switch modes! 🎶✨
