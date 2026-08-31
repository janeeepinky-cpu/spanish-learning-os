"use client";

import { BookOpen, CheckCircle2, Ear, Languages, Mic2, Play, Volume2 } from "lucide-react";
import { Card } from "@/components/Card";
import { alphabetRows, currentPhonicsDrills, phonicsSections, sourceNotes, vowelSounds } from "@/course/content/phonics";
import { speakSpanish } from "@/lib/speech";

const stageLabels = {
  now: "Now",
  next: "Next"
};

const priorityLabels = {
  now: "现在优先",
  soon: "近期会用",
  reference: "查表备用"
};

const priorityStyles = {
  now: "bg-mint/15 text-mint",
  soon: "bg-sun/25 text-clay",
  reference: "bg-stone-100 text-stone-700"
};

export default function PhonicsPage() {
  const nowDrills = currentPhonicsDrills.filter((item) => item.stage === "now");
  const nextDrills = currentPhonicsDrills.filter((item) => item.stage === "next");

  return (
    <div className="space-y-6">
      <header className="max-w-3xl">
        <p className="text-sm font-bold text-clay">Sounds</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">Spanish spelling and sound system</h1>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">
          西语确实有点像“拼音友好型语言”，但它有自己的拼读、重音、音节和地区差异。这里既能按当前阶段练，也能当完整规则表回溯。
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="bg-ink text-white">
          <div className="flex items-center gap-2 text-sm font-black text-sun">
            <Ear className="h-4 w-4" aria-hidden />
            Current stage
          </div>
          <h2 className="mt-2 text-2xl font-black">Day 1-7 先练这三件事</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["1", "元音短稳", "a e i o u 不按英语读"],
              ["2", "重音清楚", "cómo / estás / dónde"],
              ["3", "能被听懂", "h、ll、r 先练到清楚"]
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-lg bg-white/10 p-4">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-sun text-sm font-black text-ink">{step}</div>
                <div className="mt-3 text-base font-black">{title}</div>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-100">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 text-sm font-black text-clay">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            How to practice
          </div>
          <div className="mt-4 space-y-3 text-sm font-bold leading-6 text-stone-800">
            <p>先看音节，再听一遍，然后自己读一遍。</p>
            <p>不要追求 native-like accent；目标是 intelligibility，也就是别人能听懂。</p>
            <p>遇到新词时按顺序查：元音、c/g/q、重音、r/rr、ll/y、地区差异。</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-black text-clay">Vowels</p>
          <h2 className="mt-1 text-2xl font-black text-ink">五个元音每个都能单独听</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {vowelSounds.map((vowel) => (
            <Card key={vowel.letter} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-5xl font-black leading-none text-ink">{vowel.letter}</div>
                  <div className="mt-2 font-mono text-sm font-black text-clay">{vowel.ipa}</div>
                </div>
                <button
                  type="button"
                  onClick={() => speakSpanish(vowel.audioText)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun text-ink transition hover:bg-[#f0b72f]"
                  aria-label={`Play vowel ${vowel.letter}`}
                >
                  <Volume2 className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <p className="mt-4 text-sm font-bold leading-6 text-stone-800">{vowel.mouth}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {vowel.examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => speakSpanish(example)}
                    className="rounded-full bg-paper px-3 py-1 text-xs font-black text-ink transition hover:bg-[#f6dfaa]"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-black text-clay">Alphabet</p>
          <h2 className="mt-1 text-2xl font-black text-ink">字母表：点每张卡听字母名和例词</h2>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {alphabetRows.map((row) => (
            <button
              key={row.letter}
              type="button"
              onClick={() => speakSpanish(row.audioText)}
              className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 text-left shadow-soft transition hover:border-clay/40 hover:bg-[#fffdf8]"
            >
              <span className="text-2xl font-black text-ink">{row.letter}</span>
              <span className="min-w-0 text-right">
                <span className="block text-xs font-black uppercase text-clay">{row.name}</span>
                <span className="block truncate text-sm font-bold text-stone-700">{row.example}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-black text-clay">Read Aloud</p>
          <h2 className="mt-1 text-2xl font-black text-ink">先练今天会用到的句子</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {nowDrills.map((item) => (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-black text-mint">{stageLabels[item.stage]}</span>
                  <h3 className="mt-3 text-2xl font-black leading-8 text-ink">{item.spanish}</h3>
                  <p className="mt-1 text-sm font-bold text-stone-600">{item.meaning}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speakSpanish(item.spanish)}
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sun text-ink transition hover:bg-[#f0b72f]"
                  aria-label={`Play ${item.spanish}`}
                >
                  <Volume2 className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-paper p-4">
                  <div className="text-xs font-black uppercase text-clay">Syllables</div>
                  <div className="mt-2 text-lg font-black text-ink">{item.syllables}</div>
                </div>
                <div className="rounded-lg bg-stone-100 p-4">
                  <div className="text-xs font-black uppercase text-stone-600">IPA</div>
                  <div className="mt-2 text-lg font-black text-ink">{item.ipa}</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-stone-200 px-4 py-3 text-sm font-bold leading-6 text-stone-800">
                {item.focus}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-black text-clay">Spelling Rules</p>
          <h2 className="mt-1 text-2xl font-black text-ink">完整拼读体系</h2>
        </div>

        <div className="space-y-5">
          {phonicsSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-6">
              <div className="mb-3">
                <h3 className="text-xl font-black text-ink">{section.title}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-stone-700">{section.subtitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.rules.map((rule) => (
                  <Card key={rule.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-black uppercase text-clay">{rule.pattern}</div>
                        <h4 className="mt-1 text-xl font-black leading-7 text-ink">{rule.title}</h4>
                      </div>
                      <Languages className="h-6 w-6 shrink-0 text-clay" aria-hidden />
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${priorityStyles[rule.priority]}`}>
                        {priorityLabels[rule.priority]}
                      </span>
                      {rule.variant ? (
                        <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-black text-ocean">{rule.variant}</span>
                      ) : null}
                    </div>

                    <p className="mt-3 text-sm font-semibold leading-6 text-stone-700">{rule.explanation}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {rule.examples.map((example) => (
                        <button
                          key={example}
                          type="button"
                          onClick={() => speakSpanish(example)}
                          className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-2 text-xs font-black text-ink transition hover:bg-[#f6dfaa]"
                        >
                          <Play className="h-3.5 w-3.5" aria-hidden />
                          {example}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 rounded-lg bg-stone-100 p-3 text-sm font-bold leading-6 text-stone-800">
                      {rule.watchOut}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Card>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-mint" aria-hidden />
          <div>
            <h2 className="text-xl font-black text-ink">Design basis</h2>
            <div className="mt-3 space-y-2 text-sm font-semibold leading-6 text-stone-700">
              {sourceNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        {nextDrills.map((item) => (
          <Card key={item.id} className="bg-[#fffdf8]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-black text-ocean">{stageLabels[item.stage]}</span>
                <h3 className="mt-3 text-xl font-black text-ink">{item.spanish}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-stone-700">{item.focus}</p>
              </div>
              <button
                type="button"
                onClick={() => speakSpanish(item.spanish)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white transition hover:bg-stone-800"
                aria-label={`Play ${item.spanish}`}
              >
                <Mic2 className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-black text-stone-800">
              <BookOpen className="h-4 w-4 text-clay" aria-hidden />
              {item.syllables}
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
