"use client";

import Link from "next/link";
import { BookOpen, Flame, Mic, RotateCcw, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { ShadowLine } from "@/components/ShadowLine";
import { getLessonByDay } from "@/course/lessons";
import { useProgress } from "@/lib/useProgress";

export default function TodayPage() {
  const { progress } = useProgress();
  const lesson = getLessonByDay(1);

  if (!lesson) {
    return null;
  }

  const lessonProgress = progress?.lessonProgress[lesson.id];
  const completed = lessonProgress?.completedActivities.length ?? 0;
  const dailyPercent = Math.round((completed / lesson.activities.length) * 100);
  const wordReps = lesson.newVocabulary.length * 3;
  const speakReps = Math.max(6, lesson.input.lines.length + lesson.chunks.length);

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-clay">Buenos días</p>
          <h1 className="mt-1 text-3xl font-black tracking-normal text-ink sm:text-4xl">Ready for a real first hello?</h1>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-soft">
          <div className="flex items-center justify-end gap-1 text-sm font-black text-clay">
            <Flame className="h-4 w-4" aria-hidden />
            {progress?.streak ?? 12} Day Streak
          </div>
          <div className="mt-1 text-xs font-bold text-stone-500">Pre-A1</div>
        </div>
      </header>

      <Card className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-black text-clay">Live Day Progress</div>
            <div className="mt-1 text-xs font-bold text-stone-500">
              {completed} / {lesson.activities.length} tasks completed
            </div>
          </div>
          <div className="text-2xl font-black text-ink">{dailyPercent}%</div>
        </div>
        <div className="mt-3">
          <ProgressBar value={dailyPercent} />
        </div>
      </Card>

      <Card className="bg-ink p-4 text-white sm:p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="flex items-center gap-2 text-sm font-black text-sun">
              <Sparkles className="h-4 w-4" aria-hidden />
              Today&apos;s Mission
            </div>
            <h2 className="mt-2 text-2xl font-black">Introduce yourself</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-100">
              {lesson.mission} 今天重点是会开口、会接话、知道句子怎么拼。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                [`${lesson.estimatedMinutes} min`],
                [`${lesson.newVocabulary.length} words`],
                [`${lesson.chunks.length} patterns`],
                [`${lesson.grammar.length} grammar`],
                [`${lesson.input.lines.length} lines`]
              ].map(([value]) => (
                <span key={value} className="rounded-full bg-white/10 px-3 py-1 text-sm font-black text-white">{value}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-ink">
            <div className="text-xs font-black uppercase tracking-wide text-clay">Today&apos;s Grammar</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Me llamo + 名字", "Soy + 名字", "¿Y tú?", "Soy de + 地点"].map((rule) => (
                <span key={rule} className="rounded-full bg-paper px-3 py-1 text-xs font-black text-ink">{rule}</span>
              ))}
            </div>
            <Link href="/learn/day/1" className="mt-3 inline-flex text-xs font-black text-clay">
              See all {lesson.grammar.length} grammar points
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <Link href="/learn/day/1" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sun px-5 py-4 text-sm font-black text-ink sm:w-auto">
            <BookOpen className="h-5 w-5" aria-hidden />
            Start lesson
          </Link>
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-black text-clay">Today&apos;s Grammar</p>
            <h2 className="mt-1 text-xl font-black">Small rules you can use immediately</h2>
          </div>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-black text-clay">{lesson.grammar.length} points</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {lesson.grammar.map((rule, ruleIndex) => (
            <div key={rule} className="rounded-2xl bg-stone-100 p-4">
              <div className="text-xs font-black text-clay">Grammar {ruleIndex + 1}</div>
              <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{rule}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <ShadowLine
          compact
          title="Today's sentence"
          lines={["Hola, me llamo Jane.", "Mucho gusto. ¿Y tú?"]}
        />
      </Card>

      <section className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-xl font-black">Today&apos;s Workload</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <RotateCcw className="mx-auto h-6 w-6 text-ocean" aria-hidden />
              <div className="mt-2 text-lg font-black">{wordReps}</div>
              <div className="text-xs font-bold text-stone-500">Word reps</div>
            </div>
            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <Target className="mx-auto h-6 w-6 text-ocean" aria-hidden />
              <div className="mt-2 text-lg font-black">{lesson.chunks.length}</div>
              <div className="text-xs font-bold text-stone-500">Patterns</div>
            </div>
            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <Mic className="mx-auto h-6 w-6 text-ocean" aria-hidden />
              <div className="mt-2 text-lg font-black">{speakReps}</div>
              <div className="text-xs font-bold text-stone-500">Speak reps</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-paper p-4">
            <div className="text-xs font-black uppercase text-stone-500">Words today</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {lesson.newVocabulary.map((word) => (
                <span key={word} className="rounded-full bg-white px-3 py-1 text-sm font-black text-ink shadow-sm">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Quick Day</h2>
            <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-black text-mint">{completed} / {lesson.activities.length} done</span>
          </div>
          <p className="mt-3 text-sm font-semibold leading-6 text-stone-600">
            忙的时候只保留三件事：复习一个词、听一句、开口跟读一句。这样也能维持学习连续性。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["1", "Review", "Hola."],
              ["2", "Input", "Buenos días."],
              ["3", "Speak", "Mucho gusto."]
            ].map(([step, label, line]) => (
              <div key={label} className="rounded-2xl bg-stone-100 p-4">
                <div className="text-xs font-black text-clay">Step {step}</div>
                <div className="mt-1 font-black">{label}</div>
                <div className="mt-3 rounded-xl bg-white px-3 py-2 text-sm font-black text-ink">{line}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
