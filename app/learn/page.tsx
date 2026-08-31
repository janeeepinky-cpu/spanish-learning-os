"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, Clock, ListChecks, Map, PlayCircle, ScrollText, Volume2 } from "lucide-react";
import { Card } from "@/components/Card";
import { lessons } from "@/course/lessons";
import { levels } from "@/course/levels";
import { units } from "@/course/units";
import { useProgress } from "@/lib/useProgress";

export default function LearnPage() {
  const { progress } = useProgress();

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-bold text-clay">Course Map</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">A0 to real conversations</h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-700">
          Unit 是一个主题单元；Day 是一天的完整小课，不是一句句子。每一天都有新词、语法、输入、跟读和输出任务。
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-5">
          {levels.filter((level) => !level.locked).map((level) => (
            <Card key={level.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-black text-clay">
                    <Map className="h-4 w-4" aria-hidden />
                    {level.label}
                  </div>
                  <h2 className="mt-2 text-2xl font-black">{level.description}</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {units
                  .filter((unit) => unit.level === level.id)
                  .map((unit) => (
                    <div key={unit.id} className="rounded-lg bg-stone-100 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-black uppercase tracking-wide text-stone-700">{unit.title}</div>
                          <div className="mt-1 text-lg font-black">{unit.subtitle}</div>
                          <div className="mt-1 text-sm font-bold text-stone-700">7 天完成一个真实会话主题</div>
                        </div>
                        {unit.locked ? <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-stone-700">Locked</span> : null}
                      </div>

                      {unit.lessonIds.length ? (
                        <div className="mt-4 grid gap-3">
                          {unit.lessonIds.map((lessonId) => {
                            const lesson = lessons.find((candidate) => candidate.id === lessonId);
                            if (!lesson) return null;
                            const complete = progress?.lessonProgress[lesson.id]?.completed;
                            return (
                              <Link
                                key={lesson.id}
                                href={`/learn/day/${lesson.day}`}
                                className="block rounded-lg border border-stone-200 bg-white p-4 transition hover:border-clay/40 hover:shadow-soft"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-clay">
                                      <BookOpen className="h-4 w-4" aria-hidden />
                                      Day {lesson.day}
                                    </div>
                                    <div className="mt-1 text-lg font-black text-ink">{lesson.title}</div>
                                    <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{lesson.mission}</p>
                                  </div>
                                  {complete ? <CheckCircle2 className="h-6 w-6 shrink-0 text-mint" aria-hidden /> : <PlayCircle className="h-6 w-6 shrink-0 text-clay" aria-hidden />}
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                                  <div className="rounded-lg bg-paper px-3 py-2">
                                    <Clock className="mb-1 h-4 w-4 text-clay" aria-hidden />
                                    <div className="text-sm font-black">{lesson.estimatedMinutes} min</div>
                                  </div>
                                  <div className="rounded-lg bg-paper px-3 py-2">
                                    <ListChecks className="mb-1 h-4 w-4 text-clay" aria-hidden />
                                    <div className="text-sm font-black">{lesson.newVocabulary.length} words</div>
                                  </div>
                                  <div className="rounded-lg bg-paper px-3 py-2">
                                    <ScrollText className="mb-1 h-4 w-4 text-clay" aria-hidden />
                                    <div className="text-sm font-black">{lesson.grammar.length} grammar</div>
                                  </div>
                                  <div className="rounded-lg bg-paper px-3 py-2">
                                    <Map className="mb-1 h-4 w-4 text-clay" aria-hidden />
                                    <div className="text-sm font-black">{lesson.input.lines.length} lines</div>
                                  </div>
                                </div>

                                <div className="mt-3 rounded-lg bg-stone-100 px-3 py-2 text-sm font-bold text-stone-800">
                                  Can-do: {lesson.canDo}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="h-fit">
          <h2 className="text-xl font-black">Focus</h2>
          <Link
            href="/phonics"
            className="mt-4 flex items-center gap-3 rounded-lg bg-ink p-4 text-white transition hover:bg-stone-800"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun text-ink">
              <Volume2 className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <div className="text-sm font-black">拼读先行</div>
              <p className="mt-1 text-xs font-semibold leading-5 text-stone-100">
                学每个 Day 前，先确认字母和重音怎么读。
              </p>
            </div>
          </Link>
          <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-stone-800">
            <p>现在只做 Pre-A1 第一单元。</p>
            <p>每天是一个 30-45 分钟的小课包，不是一句句子。</p>
            <p>建议顺序：先学 Day 1，再进入 Review 和 Speak 巩固。</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
