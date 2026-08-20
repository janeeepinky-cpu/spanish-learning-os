"use client";

import { useRef, useState } from "react";
import { Mic, Play, RotateCcw, Square } from "lucide-react";
import { speakSpanish } from "@/lib/speech";

type RecorderProps = {
  onRecorded?: () => void;
  listenText?: string;
  listenLabel?: string;
};

const defaultListenText = "perro, pero, carro, correo";

export function Recorder({ onRecorded, listenText = defaultListenText, listenLabel = "Listen" }: RecorderProps) {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunks.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((track) => track.stop());
        onRecorded?.();
      };
      mediaRecorder.current = recorder;
      recorder.start();
      setRecording(true);
    } catch {
      setError("Microphone permission is needed to record.");
    }
  }

  function stopRecording() {
    mediaRecorder.current?.stop();
    setRecording(false);
  }

  function reset() {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setError(null);
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button type="button" className="rounded-2xl bg-stone-100 px-4 py-3 font-bold text-ink" onClick={() => void speakSpanish(listenText)}>
          <Play className="mx-auto mb-1 h-5 w-5" aria-hidden />
          {listenLabel}
        </button>
        <button
          type="button"
          className={`rounded-2xl px-4 py-3 font-bold text-white ${recording ? "bg-clay" : "bg-ink"}`}
          onClick={recording ? stopRecording : startRecording}
        >
          {recording ? <Square className="mx-auto mb-1 h-5 w-5" aria-hidden /> : <Mic className="mx-auto mb-1 h-5 w-5" aria-hidden />}
          {recording ? "Stop" : "Record"}
        </button>
        <button type="button" disabled={!audioUrl} className="rounded-2xl bg-stone-100 px-4 py-3 font-bold text-ink disabled:opacity-45" onClick={() => audioUrl && new Audio(audioUrl).play()}>
          <Play className="mx-auto mb-1 h-5 w-5" aria-hidden />
          Mine
        </button>
        <button type="button" className="rounded-2xl bg-stone-100 px-4 py-3 font-bold text-ink" onClick={reset}>
          <RotateCcw className="mx-auto mb-1 h-5 w-5" aria-hidden />
          Try Again
        </button>
      </div>
      {audioUrl ? <audio className="w-full" controls src={audioUrl} /> : null}
      {error ? <p className="text-sm font-semibold text-clay">{error}</p> : null}
    </div>
  );
}
