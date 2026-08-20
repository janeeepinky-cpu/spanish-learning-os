"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Clipboard, Lock, RotateCcw, Sparkles } from "lucide-react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { ShadowLine } from "@/components/ShadowLine";
import { decodeProgressBackup, encodeProgressBackup } from "@/lib/progress";
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
  const { progress, updateProgress } = useProgress();
  const [backupCode, setBackupCode] = useState("");
  const [syncMessage, setSyncMessage] = useState("进度只保存在当前浏览器。换设备时，可以复制备份码再导入。");
  const vocabulary = progress?.vocabulary ?? [];
  const counts = {
    New: vocabulary.filter((item) => item.status === "NEW").length,
    Learning: vocabulary.filter((item) => item.status === "LEARNING" || item.status === "FAMILIAR").length,
    Active: vocabulary.filter((item) => item.status === "ACTIVE").length,
    Strong: vocabulary.filter((item) => item.status === "STRONG" || item.status === "MASTERED").length
  };

  async function copyBackupCode() {
    if (!progress) {
      return;
    }

    const code = encodeProgressBackup(progress);
    setBackupCode(code);

    try {
      await navigator.clipboard.writeText(code);
      setSyncMessage("备份码已复制。到另一台设备打开 Progress，粘贴后点导入。");
    } catch {
      setSyncMessage("备份码已生成。可以手动全选复制。");
    }
  }

  function importBackupCode() {
    try {
      const nextProgress = decodeProgressBackup(backupCode);
      updateProgress(nextProgress);
      setSyncMessage("导入成功。当前设备已经切换到这份学习进度。");
    } catch {
      setSyncMessage("导入失败。请确认粘贴的是完整备份码。");
    }
  }

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

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-black text-clay">Progress Backup</p>
            <h2 className="mt-1 text-2xl font-black">Move progress between devices</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{syncMessage}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={copyBackupCode}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-black text-white"
            >
              <Clipboard className="h-4 w-4" aria-hidden />
              Copy backup
            </button>
            <button
              type="button"
              onClick={importBackupCode}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sun px-4 py-3 text-sm font-black text-ink"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Import
            </button>
          </div>
        </div>
        <textarea
          value={backupCode}
          onChange={(event) => setBackupCode(event.target.value)}
          placeholder="Paste progress backup code here"
          className="mt-4 min-h-28 w-full resize-y rounded-2xl border border-stone-200 bg-stone-50 p-4 font-mono text-xs font-semibold leading-5 text-ink outline-none focus:border-clay"
        />
      </Card>

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
