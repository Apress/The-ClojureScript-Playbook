// Prevents additional console window on Windows in release
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};
use tauri::Manager;
use tauri_plugin_dialog::DialogExt;
use tauri::menu::{MenuBuilder, MenuItemBuilder};
use tauri::tray::{TrayIconBuilder, TrayIconEvent, MouseButton, MouseButtonState};

mod audio_loader;

#[derive(Debug, Serialize, Deserialize)]
struct AudioData {
    samples: Vec<f32>,
    sample_rate: u32,
    channels: u16,
    duration: f64,
}

/// Load audio file and return raw samples
#[tauri::command]
async fn load_audio_file(path: String) -> Result<AudioData, String> {
    audio_loader::load_audio(&path).map_err(|e| format!("Failed to load audio: {}", e))
}

/// Open file dialog and return selected path
#[tauri::command]
async fn open_file_dialog(app: tauri::AppHandle) -> Result<Option<String>, String> {
    let file_path = app
        .dialog()
        .file()
        .add_filter("Audio Files", &["mp3", "wav", "flac", "m4a", "ogg"])
        .blocking_pick_file();

    Ok(file_path.map(|p| p.to_string()))
}

/// Toggle mini mode (small always-on-top window)
#[tauri::command]
async fn toggle_mini_mode(window: tauri::WebviewWindow, mini: bool) -> Result<(), String> {
    if mini {
        window
            .set_size(tauri::LogicalSize::new(400, 400))
            .map_err(|e| e.to_string())?;
        window.set_always_on_top(true).map_err(|e| e.to_string())?;
        window.set_decorations(false).map_err(|e| e.to_string())?;
    } else {
        window
            .set_size(tauri::LogicalSize::new(1200, 800))
            .map_err(|e| e.to_string())?;
        window.set_always_on_top(false).map_err(|e| e.to_string())?;
        window.set_decorations(true).map_err(|e| e.to_string())?;
    }
    Ok(())
}

/// Get system audio devices (for future expansion)
#[tauri::command]
async fn get_audio_devices() -> Result<Vec<String>, String> {
    // Placeholder for future system audio device enumeration
    Ok(vec!["Default Microphone".to_string()])
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            let show_i = MenuItemBuilder::with_id("show", "Show").build(app)?;
            let mini_i = MenuItemBuilder::with_id("mini", "Mini Mode").build(app)?;
            let quit_i = MenuItemBuilder::with_id("quit", "Quit").build(app)?;

            let menu = MenuBuilder::new(app)
                .item(&show_i)
                .item(&mini_i)
                .separator()
                .item(&quit_i)
                .build()?;

            let _tray = TrayIconBuilder::new()
                .menu(&menu)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "show" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    "mini" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let w = window.clone();
                            tauri::async_runtime::spawn(async move {
                                let _ = toggle_mini_mode(w, true).await;
                            });
                        }
                    }
                    "quit" => {
                        std::process::exit(0);
                    }
                    _ => {}
                })
                .on_tray_icon_event(|tray, event| match event {
                    TrayIconEvent::Click {
                        button: MouseButton::Left,
                        button_state: MouseButtonState::Up,
                        ..
                    } => {
                        if let Some(window) = tray.app_handle().get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    _ => {}
                })
                .build(app)?;

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            load_audio_file,
            open_file_dialog,
            toggle_mini_mode,
            get_audio_devices
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
