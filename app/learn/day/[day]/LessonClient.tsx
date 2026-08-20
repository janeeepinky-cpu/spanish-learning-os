"use client";

import { Check, ChevronLeft, ChevronRight, Sparkles, Volume2 } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { Recorder } from "@/components/Recorder";
import { ShadowLine } from "@/components/ShadowLine";
import type { Lesson } from "@/course/types";
import { useProgress } from "@/lib/useProgress";

const activityAccent: Record<string, string> = {
  recall: "Review what is already warm.",
  mission: "Aim for a real-world action.",
  microLesson: "One small pattern, no grammar swamp.",
  input: "Read and listen for meaning.",
  notice: "Spot one tiny detail.",
  useIt: "Make Spanish with your own hands.",
  speak: "Say it out loud.",
  quickCheck: "Confirm the useful chunk.",
  complete: "Lock in the Can-Do."
};

const pronunciationTips: Record<string, string[]> = {
  Hola: [
    "h 不发音：Hola 听起来接近 ola。",
    "五个元音 a/e/i/o/u 要短、稳、清楚，不要拖成英语式双元音。",
    "llamo 里的 ll 在多数拉美口音里接近 y 音。"
  ]
};

export function LessonClient({ lesson }: { lesson: Lesson }) {
  const { progress, completeActivity, markPronunciation } = useProgress();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const activity = lesson.activities[index] ?? lesson.activities[0];
  const lessonProgress = progress?.lessonProgress[lesson.id];
  const completedActivities = lessonProgress?.completedActivities ?? [];
  const done = completedActivities.includes(activity.id);
  const completedCount = completedActivities.length;
  const fillBlankCorrect = activity.expectedAnswer ? answer.trim().toLowerCase() === activity.expectedAnswer.toLowerCase() : true;

  const progressValue = useMemo(() => (completedCount / lesson.activities.length) * 100, [completedCount, lesson.activities.length]);

  function completeCurrent() {
    if (!fillBlankCorrect) {
      return;
    }
    completeActivity(lesson.id, activity.id, activity.xp, lesson.canDo);
  }

  return (
    <div className="space-y-5">
      <div className="sticky top-0 z-30 -mx-4 border-b border-stone-200 bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-xs font-black text-stone-500">
              <span>Day {lesson.day} live progress</span>
              <span>{completedCount} / {lesson.activities.length}</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={progressValue} />
            </div>
          </div>
          <span className="rounded-full bg-ink px-3 py-2 text-xs font-black text-white">{Math.round(progressValue)}%</span>
        </div>
      </div>

      <Link href="/learn" className="inline-flex items-center gap-2 text-sm font-black text-stone-500">
        <ChevronLeft className="h-4 w-4" aria-hidden />
        Course Map
      </Link>

      <header className="rounded-[2rem] bg-ink p-5 text-white shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black text-sun">Day {lesson.day}</p>
            <h1 className="mt-1 text-3xl font-black">{lesson.title}</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-200">{lesson.mission}</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm font-black">{lesson.estimatedMinutes} min</div>
        </div>
        <div className="mt-5">
          <ProgressBar value={progressValue} label={`${completedCount} / ${lesson.activities.length} completed`} />
        </div>
      </header>

      <Card className="p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]">
          <div>
            <h2 className="text-xs font-black uppercase tracking-wide text-clay">Today&apos;s Words</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {lesson.newVocabulary.map((word) => (
                <span key={word} className="rounded-full bg-paper px-3 py-1 text-sm font-black text-ink">
                  {word}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-wide text-clay">Today&apos;s Grammar</h2>
            <div className="mt-3 space-y-2">
              {lesson.grammar.map((rule, ruleIndex) => (
                <p key={rule} className="rounded-lg bg-stone-100 px-3 py-2 text-sm font-bold leading-6 text-stone-800">
                  {ruleIndex + 1}. {rule}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-wide text-clay">Input Preview</h2>
            <div className="mt-3 space-y-2">
              {lesson.input.lines.slice(0, 3).map((line) => (
                <p key={line} className="rounded-lg bg-stone-100 px-3 py-2 text-sm font-bold leading-6 text-stone-800">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-stone-200 bg-stone-100 px-3 py-2 text-xs font-bold leading-5 text-stone-800">
          <span className="font-black text-clay">Design Basis:</span> CEFR/ACTFL Can-Do + PCIC A1 categories + input, noticing, retrieval, output and interaction.
          {lesson.sourceBasis.needsReview ? <span className="ml-2 rounded-full bg-white px-2 py-0.5 font-black text-clay">needs_review</span> : null}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[17rem_1fr]">
        <Card>
          <h2 className="text-sm font-black uppercase text-stone-500">Flow</h2>
          <div className="mt-4 space-y-2">
            {lesson.activities.map((step, stepIndex) => {
              const complete = completedActivities.includes(step.id);
              const active = index === stepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setIndex(stepIndex)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-black transition ${
                    active ? "bg-ink text-white" : "bg-stone-100 text-stone-600"
                  }`}
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${complete ? "bg-mint text-white" : "bg-white text-stone-500"}`}>
                    {complete ? <Check className="h-4 w-4" aria-hidden /> : stepIndex + 1}
                  </span>
                  {step.title}
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="min-h-[30rem]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-clay">{activityAccent[activity.kind]}</p>
              <h2 className="mt-2 text-3xl font-black">{activity.title}</h2>
            </div>
            {done ? <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-black text-mint">Completed</span> : null}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-stone-100 p-5">
            <p className="text-lg font-bold leading-8">{activity.prompt}</p>
            {activity.speakingPrompt ? <p className="mt-4 rounded-2xl bg-white p-4 text-xl font-black">{activity.speakingPrompt}</p> : null}
            {activity.referenceAnswer ? <p className="mt-4 text-sm font-bold text-stone-500">Reference: {activity.referenceAnswer}</p> : null}
          </div>

          <ShadowLine
            className="mt-5"
            title="Tap to shadow"
            lines={
              activity.speakingPrompt
                ? [activity.speakingPrompt]
                : activity.referenceAnswer
                  ? [activity.referenceAnswer]
                  : lesson.input.lines.map((line) => line.replace(/^[^:]+:\s*/, "")).slice(0, 2)
            }
          />

          {activity.kind === "input" ? (
            <div className="mt-5 rounded-[1.5rem] border border-stone-200 p-5">
              <h3 className="font-black">{lesson.input.title}</h3>
              <div className="mt-3 space-y-2">
                {lesson.input.lines.map((line) => (
                  <div key={line} className="rounded-2xl bg-paper p-3">
                    <p className="px-1 pb-2 text-sm font-bold">{line}</p>
                    <ShadowLine compact title="" lines={[line.replace(/^[^:]+:\s*/, "")]} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activity.kind === "microLesson" ? (
            <>
              <div className="mt-5 rounded-[1.5rem] bg-paper p-5">
                <h3 className="font-black">Vocabulary Drill / 词汇训练</h3>
                <p className="mt-1 text-sm font-semibold text-stone-500">今天不是只学一句。先把这些高频词块听熟、看懂、会跟读。</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {lesson.newVocabulary.map((word) => (
                    <ShadowLine key={word} compact title="" lines={[word]} />
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[1.5rem] bg-stone-100 p-5">
                <h3 className="font-black">Patterns / 句式</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {lesson.chunks.map((chunk) => (
                    <ShadowLine key={chunk} compact title="" lines={[chunk]} />
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[1.5rem] bg-white p-5 ring-1 ring-stone-200">
                <h3 className="font-black">Grammar / 语法</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {lesson.grammar.map((rule, ruleIndex) => (
                    <div key={rule} className="rounded-2xl bg-paper p-4">
                      <div className="text-xs font-black text-clay">Point {ruleIndex + 1}</div>
                      <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {activity.kind === "notice" ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[...lesson.pronunciation.notes, ...(pronunciationTips[lesson.title] ?? [])].map((note) => (
                <div key={note} className="flex gap-3 rounded-2xl bg-paper p-4 text-sm font-bold">
                  <Volume2 className="mt-0.5 h-5 w-5 shrink-0 text-clay" aria-hidden />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          ) : null}

          {activity.expectedAnswer ? (
            <div className="mt-5">
              <label className="text-sm font-black text-stone-500" htmlFor="lesson-answer">
                Your answer
              </label>
              <input
                id="lesson-answer"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-4 text-lg font-bold outline-none focus:border-mint"
                placeholder="Type here"
              />
              {answer && !fillBlankCorrect ? <p className="mt-2 text-sm font-bold text-clay">Try the core chunk from the lesson.</p> : null}
            </div>
          ) : null}

          {activity.kind === "speak" ? (
            <div className="mt-5">
              <Recorder
                listenLabel="Model"
                listenText={activity.speakingPrompt ?? "Hola, me llamo Jane. Mucho gusto."}
                onRecorded={() => markPronunciation("Day 1 self-introduction")}
              />
            </div>
          ) : null}

          {activity.kind === "complete" ? (
            <div className="mt-5 rounded-[1.5rem] bg-mint/15 p-5">
              <div className="flex items-center gap-3 text-lg font-black text-mint">
                <Sparkles className="h-6 w-6" aria-hidden />
                {lesson.canDo}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={completeCurrent}
              disabled={done || !fillBlankCorrect}
              className="rounded-2xl bg-ink px-5 py-4 text-sm font-black text-white disabled:opacity-45"
            >
              {done ? "DONE" : `COMPLETE +${activity.xp} XP`}
            </button>
            <div className="flex gap-3">
              <button type="button" disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))} className="rounded-2xl bg-stone-100 px-4 py-4 font-black disabled:opacity-45">
                Back
              </button>
              <button
                type="button"
                disabled={index === lesson.activities.length - 1}
                onClick={() => setIndex((value) => Math.min(lesson.activities.length - 1, value + 1))}
                className="inline-flex items-center gap-2 rounded-2xl bg-sun px-4 py-4 font-black text-ink disabled:opacity-45"
              >
                Next <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
