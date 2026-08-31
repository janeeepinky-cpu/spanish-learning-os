"use client";

const SPANISH_LANG_PRIORITY = ["es-MX", "es-419", "es-US", "es-ES"];
const PREMIUM_VOICE_HINTS = ["natural", "online", "google", "microsoft", "sabina", "jorge", "paulina", "helena", "monica"];
const SPEAKER_LABEL = /(^|[.!?]\s+)[A-Za-z\u00c1\u00c9\u00cd\u00d3\u00da\u00d1\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]+:\s*/g;

function normalizeSpanishText(text: string) {
  return text
    .replaceAll("\u9a74", "\u00bf")
    .replaceAll("\u7164", "\u00fa")
    .replaceAll("\u8d38", "\u00f3")
    .replaceAll("\u8c29", "\u00e1")
    .replaceAll("\u8305", "\u00e9")
    .replaceAll("\u94c6", "\u00ed")
    .replaceAll("\u5e3d", "\u00f1")
    .replace(/\s+/g, " ")
    .trim();
}

function toPronunciationText(text: string) {
  const normalized = normalizeSpanishText(text);
  const pacedText = normalized.includes(",") && !/[.!?\u00bf\u00a1]/.test(normalized)
    ? normalized.replace(/,\s*/g, ". ")
    : normalized;

  return pacedText
    .replace(SPEAKER_LABEL, "$1")
    .replace(/\bM[e\u00e9]xico\b/gi, "M\u00e9jico")
    .replace(/\bShanghai\b/g, "Shangh\u00e1i")
    .replace(/\bJane\b/g, "Yein")
    .replace(/\bY t[u\u00fa]\b/g, "y t\u00fa")
    .replace(/\s*([?!])\s*/g, "$1 ")
    .replace(/\s+/g, " ")
    .trim();
}

function languageScore(lang: string) {
  const normalized = lang.toLowerCase();
  const exactIndex = SPANISH_LANG_PRIORITY.findIndex((item) => item.toLowerCase() === normalized);

  if (exactIndex >= 0) {
    return 100 - exactIndex * 10;
  }

  return normalized.startsWith("es-") || normalized === "es" ? 40 : -100;
}

function voiceScore(voice: SpeechSynthesisVoice) {
  const name = voice.name.toLowerCase();
  const premiumScore = PREMIUM_VOICE_HINTS.some((hint) => name.includes(hint)) ? 12 : 0;
  const localPenalty = voice.localService ? 0 : 3;

  return languageScore(voice.lang) + premiumScore + localPenalty;
}

function chooseSpanishVoice() {
  const voices = window.speechSynthesis.getVoices();

  return voices
    .filter((voice) => languageScore(voice.lang) > 0)
    .sort((a, b) => voiceScore(b) - voiceScore(a))[0];
}

export function speakSpanish(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  const synth = window.speechSynthesis;
  const cleanText = toPronunciationText(text);
  const voice = chooseSpanishVoice();
  const utterance = new SpeechSynthesisUtterance(cleanText);

  synth.cancel();
  utterance.lang = voice?.lang || "es-MX";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  if (voice) {
    utterance.voice = voice;
  }

  synth.resume();
  synth.speak(utterance);
}
