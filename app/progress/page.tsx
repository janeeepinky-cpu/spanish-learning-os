"use client";

import { CheckCircle2, Circle, Lock, Sparkles } from "lucide-react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { ShadowLine } from "@/components/ShadowLine";
import { useProgress } from "@/lib/useProgress";

const skills = [
  ["Listening", "listening"],
  ["Speaking", "speaking"],
  ["Reading", "reading"],
  ["Writing", "writing"],
  ["Interaction", "interaction"]
] as const;

const canDoSamples: Record<string, string> = {
  "I can introduce myself.": "Hola, me llamo Jane. Mucho gusto.",
  "I can ask someone's name.": "Hola, ¿cómo te llamas?",
  "I can describe my daily routine.": "Trabajo en casa. Vivo en Shanghai.",
  "I can tell what happened yesterday.": "Ayer hablé con Ana."
};

export default function ProgressPage() {
  const { progress } = useProgress();
  const vocabulary = progress?.vocabulary ?? [];
  const counts = {
    New: vocabulary.filter((item) => item.status === "NEW").length,
    Learning: vocabulary.filter((item) => item.status === "LEARNING" || item.status === "FAMILIAR").length,
    Active: vocabulary.filter((item) => item.status === "ACTIVE").length,
    Strong: vocabulary.filter((item) => item.status === "STRONG" || item.status === "MASTERED").length
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-bold text-clay">Progress</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">Spanish Profile</h1>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-sun" aria-hidden />
            <h2 className="text-2xl font-black">Skill Profile</h2>
          </div>
          <div className="mt-5 space-y-4">
            {skills.map(([label, key]) => (
              <ProgressBar key={key} label={label} value={progress?.skills[key] ?? 0} />
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {Object.entries(counts).map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-stone-100 p-4">
                <div className="text-xs font-black text-stone-500">{label}</div>
                <div className="mt-1 text-3xl font-black">{value}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Card>
          <div className="text-xs font-black text-stone-500">Listening Minutes</div>
          <div className="mt-2 text-3xl font-black">{progress?.weekly.listeningMinutes ?? 0}</div>
        </Card>
        <Card>
          <div className="text-xs font-black text-stone-500">Speaking Minutes</div>
          <div className="mt-2 text-3xl font-black">{progress?.weekly.speakingMinutes ?? 0}</div>
        </Card>
        <Card>
          <div className="text-xs font-black text-stone-500">Reading Minutes</div>
          <div className="mt-2 text-3xl font-black">{progress?.weekly.readingMinutes ?? 0}</div>
        </Card>
        <Card>
          <div className="text-xs font-black text-stone-500">Reviews Completed</div>
          <div className="mt-2 text-3xl font-black">{progress?.weekly.reviewsCompleted ?? 0}</div>
        </Card>
      </section>

      <Card>
        <h2 className="text-2xl font-black">Can-Do</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {Object.entries(progress?.canDo ?? {}).map(([label, done], index) => (
            <div key={label} className="rounded-2xl bg-stone-100 p-4">
              <div className="flex items-center gap-3 font-bold">
                {done ? (
                  <CheckCircle2 className="h-6 w-6 text-mint" aria-hidden />
                ) : index < 3 ? (
                  <Circle className="h-6 w-6 text-sun" aria-hidden />
                ) : (
                  <Lock className="h-6 w-6 text-stone-400" aria-hidden />
                )}
                {label}
              </div>
              <ShadowLine compact title="" className="mt-3" lines={[canDoSamples[label] ?? "Hola, mucho gusto."]} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
