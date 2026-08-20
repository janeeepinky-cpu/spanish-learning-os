"use client";

import { Volume2 } from "lucide-react";
import { getPronunciationGuide } from "@/lib/pronunciation";
import { speakSpanish } from "@/lib/speech";
import { getPhraseTranslation, type PhraseTranslation } from "@/lib/translations";

type ShadowLineProps = {
  lines: string[];
  title?: string;
  compact?: boolean;
  className?: string;
  translations?: Record<string, PhraseTranslation>;
};

export function ShadowLine({ lines, title = "Shadow", compact = false, className = "", translations = {} }: ShadowLineProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {title ? <div className="text-xs font-black uppercase tracking-wide text-stone-700">{title}</div> : null}
      <div className="space-y-2">
        {lines.map((line) => {
          const translation = translations[line] ?? getPhraseTranslation(line);
          const pronunciation = getPronunciationGuide(line);

          return (
            <button
              key={line}
              type="button"
              onClick={() => void speakSpanish(line)}
              className={`flex w-full items-start gap-3 rounded-2xl border border-stone-200 bg-white text-left text-ink shadow-sm transition hover:border-clay/40 hover:bg-[#fffdf8] ${
                compact ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
              }`}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sun text-ink">
                <Volume2 className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-black" lang="es-MX">{line}</span>
                {pronunciation ? (
                  <span className={`mt-1 block rounded-xl bg-[#fff4d8] px-3 py-2 leading-5 text-stone-800 ${compact ? "text-xs" : "text-sm"}`}>
                    <span className="font-mono font-black text-ink">{pronunciation.ipa}</span>
                    <span className="mx-2 text-stone-500">/</span>
                    <span className="font-bold">音节：{pronunciation.syllables}</span>
                    {!compact ? <span className="mt-0.5 block">{pronunciation.note}</span> : null}
                  </span>
                ) : null}
                {translation ? (
                  <span className={`mt-1 block leading-5 text-stone-700 ${compact ? "text-xs" : "text-sm"}`}>
                    <span className="font-bold">{translation.en}</span>
                    <span className="mx-2 text-stone-400">|</span>
                    <span>{translation.zh}</span>
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
