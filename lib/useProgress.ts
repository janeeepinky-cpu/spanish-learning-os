"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultProgress, loadProgress, saveProgress, type ProgressState } from "./progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveProgress(progress);
    }
  }, [hydrated, progress]);

  const actions = useMemo(
    () => ({
      completeActivity(lessonId: string, activityId: string, xp: number, canDo?: string) {
        setProgress((current) => {
          const base = current ?? loadProgress();
          const lesson = base.lessonProgress[lessonId] ?? {
            lessonId,
            completedActivities: [],
            completed: false,
            updatedAt: new Date().toISOString()
          };
          const alreadyDone = lesson.completedActivities.includes(activityId);
          const completedActivities = alreadyDone
            ? lesson.completedActivities
            : [...lesson.completedActivities, activityId];
          const completed = completedActivities.length >= 9;
          const today = new Date().toISOString().slice(0, 10);
          const completedDailyGoal = completed && base.lastDailyGoalDate !== today;

          return {
            ...base,
            xp: alreadyDone ? base.xp : base.xp + xp + (completedDailyGoal ? 30 : 0),
            streak: completedDailyGoal ? base.streak + 1 : base.streak,
            levelProgress: Math.min(100, Math.max(base.levelProgress, completed ? 24 : base.levelProgress)),
            lastDailyGoalDate: completedDailyGoal ? today : base.lastDailyGoalDate,
            lessonProgress: {
              ...base.lessonProgress,
              [lessonId]: {
                ...lesson,
                completedActivities,
                completed,
                updatedAt: new Date().toISOString()
              }
            },
            weekly: {
              ...base.weekly,
              speakingMinutes: activityId.includes("speak") && !alreadyDone ? base.weekly.speakingMinutes + 3 : base.weekly.speakingMinutes,
              listeningMinutes: activityId.includes("input") && !alreadyDone ? base.weekly.listeningMinutes + 4 : base.weekly.listeningMinutes
            },
            canDo: canDo && completed ? { ...base.canDo, [canDo]: base.canDo[canDo] ?? false } : base.canDo
          };
        });
      },
      updateProgress(next: ProgressState) {
        setProgress(next);
      },
      markPronunciation(sound: string, completed = false) {
        setProgress((current) => {
          const base = current ?? loadProgress();
          const profile = base.pronunciation[sound] ?? {
            sound,
            attempts: 0,
            score: null,
            status: "Practice" as const,
            lastPracticed: null,
            commonIssue: ""
          };

          return {
            ...base,
            pronunciation: {
              ...base.pronunciation,
              [sound]: {
                ...profile,
                attempts: profile.attempts + 1,
                status: completed ? "Completed" : "Recorded",
                lastPracticed: new Date().toISOString()
              }
            },
            weekly: {
              ...base.weekly,
              speakingMinutes: base.weekly.speakingMinutes + 2
            }
          };
        });
      }
    }),
    []
  );

  return { progress, ...actions };
}
