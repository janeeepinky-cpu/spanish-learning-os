"use client";

import { Check, Eye, ListChecks, X } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/Card";
import { ShadowLine } from "@/components/ShadowLine";
import { updateReviewStatus } from "@/lib/progress";
import { getPhraseTranslation } from "@/lib/translations";
import { useProgress } from "@/lib/useProgress";

export default function ReviewPage() {
  const { progress, updateProgress } = useProgress();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const vocab = progress?.vocabulary ?? [];
  const current = vocab[index % Math.max(1, vocab.length)];
  const translation = current ? getPhraseTranslation(current.term) : undefined;

  function answer(remembered: boolean) {
    if (!progress || !current) return;
    const nextVocabulary = vocab.map((item) => (item.id === current.id ? updateReviewStatus(item, remembered) : item));
    updateProgress({
      ...progress,
      xp: progress.xp + (remembered ? 5 : 1),
      vocabulary: nextVocabulary,
      weekly: {
        ...progress.weekly,
        reviewsCompleted: progress.weekly.reviewsCompleted + 1
      }
    });
    setIndex((value) => value + 1);
    setRevealed(false);
  }

  const weak = vocab.filter((item) => item.strength < 40).length;
  const mastered = vocab.filter((item) => item.status === "MASTERED" || item.status === "STRONG").length;

  return (
    <div className="space-y-5">
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-black text-clay">Review</p>
          <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">复习今天的新词</h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-700">
            先回忆意思，再听发音和看音标，最后判断自己是否掌握。
          </p>
        </div>
        <div className="rounded-2xl bg-ink px-4 py-3 text-sm font-black text-white">
          {index + 1} / {Math.max(1, vocab.length)}
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-3">
        <Card className="p-4">
          <div className="text-sm font-black text-stone-700">Weak Words</div>
          <div className="mt-2 text-3xl font-black text-clay">{weak}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-black text-stone-700">Due Today</div>
          <div className="mt-2 text-3xl font-black text-ocean">{vocab.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-black text-stone-700">Mastered</div>
          <div className="mt-2 text-3xl font-black text-mint">{mastered}</div>
        </Card>
      </section>

      {current ? (
        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <Card className="p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-paper px-3 py-1 text-xs font-black text-clay">{current.status}</span>
            <span className="text-sm font-black text-stone-700">Strength {current.strength}%</span>
          </div>
          <div className="mt-7 text-center">
            <Eye className="mx-auto mb-4 h-7 w-7 text-clay" aria-hidden />
            <div className="text-4xl font-black">{current.term}</div>
            {revealed ? (
              <div className="mx-auto mt-4 max-w-md rounded-2xl bg-[#fff4d8] px-4 py-3 text-base font-bold text-stone-900">
                <div>{current.meaning}</div>
                <div>{current.meaningZh ?? translation?.zh}</div>
              </div>
            ) : (
              <button type="button" onClick={() => setRevealed(true)} className="mt-5 rounded-xl bg-sun px-5 py-3 text-sm font-black text-ink">
                Show meaning / 显示意思
              </button>
            )}
          </div>
          <ShadowLine compact title="Hear and repeat" className="mt-6" lines={[current.term]} />
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => answer(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-100 px-5 py-4 font-black text-ink">
              <X className="h-5 w-5" aria-hidden />
              Not Yet
            </button>
            <button type="button" onClick={() => answer(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-4 font-black text-white">
              <Check className="h-5 w-5" aria-hidden />
              I Know It
            </button>
          </div>
        </Card>
        <Card className="h-fit p-4">
          <div className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-clay" aria-hidden />
            <h2 className="font-black">Today&apos;s Word List</h2>
          </div>
          <div className="mt-4 max-h-[34rem] space-y-2 overflow-auto pr-1">
            {vocab.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-3 py-2">
                <div className="min-w-0">
                  <div className="text-sm font-black">{item.term}</div>
                  <div className="text-xs font-bold text-stone-700">{item.meaning} / {item.meaningZh}</div>
                </div>
                <span className="shrink-0 rounded-full bg-paper px-2 py-1 text-xs font-black text-clay">{item.strength}%</span>
              </div>
            ))}
          </div>
        </Card>
        </section>
      ) : null}
    </div>
  );
}
