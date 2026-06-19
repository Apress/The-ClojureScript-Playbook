use std::fs::File;
use std::path::Path;
use symphonia::core::audio::SampleBuffer;
use symphonia::core::codecs::{DecoderOptions, CODEC_TYPE_NULL};
use symphonia::core::errors::Error;
use symphonia::core::formats::FormatOptions;
use symphonia::core::io::MediaSourceStream;
use symphonia::core::meta::MetadataOptions;
use symphonia::core::probe::Hint;

use crate::AudioData;

pub fn load_audio(path: &str) -> Result<AudioData, String> {
    let path = Path::new(path);

    // Open the media source
    let file = File::open(path).map_err(|e| format!("Failed to open file: {}", e))?;

    let mss = MediaSourceStream::new(Box::new(file), Default::default());

    // Create a probe hint using the file extension
    let mut hint = Hint::new();
    if let Some(extension) = path.extension() {
        if let Some(ext_str) = extension.to_str() {
            hint.with_extension(ext_str);
        }
    }

    // Use the default options for metadata and format readers
    let meta_opts: MetadataOptions = Default::default();
    let fmt_opts: FormatOptions = Default::default();

    // Probe the media source
    let probed = symphonia::default::get_probe()
        .format(&hint, mss, &fmt_opts, &meta_opts)
        .map_err(|e| format!("Probe failed: {}", e))?;

    let mut format = probed.format;

    // Find the first audio track
    let track = format
        .tracks()
        .iter()
        .find(|t| t.codec_params.codec != CODEC_TYPE_NULL)
        .ok_or_else(|| "No supported audio tracks found".to_string())?;

    let track_id = track.id;
    let sample_rate = track
        .codec_params
        .sample_rate
        .ok_or_else(|| "Unknown sample rate".to_string())?;
    let channels = track
        .codec_params
        .channels
        .ok_or_else(|| "Unknown channel count".to_string())?
        .count() as u16;

    // Create a decoder for the track
    let dec_opts: DecoderOptions = Default::default();
    let mut decoder = symphonia::default::get_codecs()
        .make(&track.codec_params, &dec_opts)
        .map_err(|e| format!("Failed to create decoder: {}", e))?;

    // Decode and collect all samples
    let mut all_samples: Vec<f32> = Vec::new();

    loop {
        // Get the next packet from the media format
        let packet = match format.next_packet() {
            Ok(packet) => packet,
            Err(Error::ResetRequired) => {
                // The decoder needs to be reset
                decoder.reset();
                continue;
            }
            Err(Error::IoError(ref e)) if e.kind() == std::io::ErrorKind::UnexpectedEof => {
                // End of stream
                break;
            }
            Err(err) => {
                return Err(format!("Read error: {}", err));
            }
        };

        // Only decode packets for the selected track
        if packet.track_id() != track_id {
            continue;
        }

        // Decode the packet into audio samples
        match decoder.decode(&packet) {
            Ok(decoded) => {
                // Convert to f32 samples
                let spec = *decoded.spec();
                let duration = decoded.capacity() as u64;
                let mut sample_buf = SampleBuffer::<f32>::new(duration, spec);
                sample_buf.copy_interleaved_ref(decoded);

                all_samples.extend_from_slice(sample_buf.samples());
            }
            Err(Error::IoError(_)) => continue,
            Err(Error::DecodeError(_)) => continue,
            Err(err) => return Err(format!("Decode error: {}", err)),
        }
    }

    let duration = all_samples.len() as f64 / (sample_rate as f64 * channels as f64);

    Ok(AudioData {
        samples: all_samples,
        sample_rate,
        channels,
        duration,
    })
}
