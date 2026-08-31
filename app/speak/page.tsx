"use client";

import { Mic, Repeat2, Sparkles } from "lucide-react";
import { Card } from "@/components/Card";
import { Recorder } from "@/components/Recorder";
import { ShadowLine } from "@/components/ShadowLine";
import { useProgress } from "@/lib/useProgress";

const entries = [
  { label: "Pronunciation", icon: Mic, active: true },
  { label: "Shadowing", icon: Repeat2, active: true }
];

const targetWords = ["Hola.", "Me llamo Jane.", "¿Cómo estás?", "¿De dónde eres?"];
const shadowingLines = [
  "Hola, me llamo Jane.",
  "Mucho gusto. ¿Y tú?",
  "Soy de China y vivo en Shanghai."
];

const soundTips = [
  "Hola 的 h 不发音，开头直接读 o。",
  "llamo 的 ll 先按拉美常见 y 音练。",
  "cómo / estás / dónde 的重音要读清楚。"
];

export default function SpeakPage() {
  const { progress, markPronunciation } = useProgress();
  const profile = progress?.pronunciation["Current stage sounds"];

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-bold text-clay">Speak</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">Build a voice in Spanish</h1>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => {
          const Icon = entry.icon;
          return (
            <Card key={entry.label} className="border-ink">
              <Icon className="h-7 w-7 text-ink" aria-hidden />
              <div className="mt-4 font-black">{entry.label}</div>
              <div className="mt-1 text-xs font-bold text-stone-500">Ready</div>
            </Card>
          );
        })}
      </section>

      <Card className="bg-ink text-white">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-black text-sun">Today&apos;s Sound</p>
            <h2 className="mt-2 text-4xl font-black">A0 Sounds</h2>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-stone-200">
              Goal accent: broadly understandable Latin American Spanish. Today tracks intelligibility, clear vowels, word stress and first-conversation rhythm.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
            <span className="rounded-full bg-white px-3 py-2 text-ink">México</span>
            <span className="rounded-full bg-white/10 px-3 py-2 text-white">Latin America</span>
            <span className="rounded-full bg-white/10 px-3 py-2 text-white">España</span>
          </div>
        </div>

        <div className="mt-6">
          <ShadowLine compact title="" lines={targetWords} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {soundTips.map((tip) => (
            <div key={tip} className="rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-stone-100">
              {tip}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black">Pronunciation Practice</h2>
            <p className="mt-2 text-sm font-semibold text-stone-500">Listen, record, then listen to your own audio.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-3 py-1 text-xs font-black text-mint">
            <Sparkles className="h-4 w-4" aria-hidden />
            {profile?.status ?? "Practice"}
          </span>
        </div>

        <div className="mt-6">
          <Recorder listenText={targetWords.join(" ")} onRecorded={() => markPronunciation("Current stage sounds")} />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-stone-100 p-4">
            <div className="text-xs font-black text-stone-500">Attempts</div>
            <div className="mt-1 text-2xl font-black">{profile?.attempts ?? 0}</div>
          </div>
          <div className="rounded-2xl bg-stone-100 p-4">
            <div className="text-xs font-black text-stone-500">Score</div>
            <div className="mt-1 text-2xl font-black">Not scored</div>
          </div>
          <div className="rounded-2xl bg-stone-100 p-4">
            <div className="text-xs font-black text-stone-500">Status</div>
            <div className="mt-1 text-2xl font-black">{profile?.status ?? "Practice"}</div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black">Shadowing</h2>
            <p className="mt-2 text-sm font-semibold text-stone-500">Listen to the model line, repeat immediately, then compare your recording.</p>
          </div>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-black text-clay">es-MX voice</span>
        </div>

        <div className="mt-5">
          <ShadowLine title="" lines={shadowingLines} />
        </div>

        <div className="mt-6">
          <Recorder
            listenLabel="Model"
            listenText={shadowingLines.join(" ")}
            onRecorded={() => markPronunciation("Shadowing: first introduction")}
          />
        </div>
      </Card>
    </div>
  );
}
