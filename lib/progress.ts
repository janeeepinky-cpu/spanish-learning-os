"use client";

import { initialVocabulary } from "@/course/content/vocabulary";
import type { ReviewStatus, VocabItem } from "@/course/types";

const STORAGE_KEY = "spanish-learning-os-progress-v1";
const RETIRED_VOCABULARY_IDS = new Set(["yo", "tu", "china", "mexico"]);

export type PronunciationStatus = "Practice" | "Recorded" | "Completed";

export type LessonProgress = {
  lessonId: string;
  completedActivities: string[];
  completed: boolean;
  updatedAt: string;
};

export type PronunciationProfile = {
  sound: string;
  attempts: number;
  score: null;
  status: PronunciationStatus;
  lastPracticed: string | null;
  commonIssue: string;
};

export type ProgressState = {
  streak: number;
  xp: number;
  levelProgress: number;
  lastDailyGoalDate: string | null;
  lessonProgress: Record<string, LessonProgress>;
  vocabulary: VocabItem[];
  pronunciation: Record<string, PronunciationProfile>;
  weekly: {
    listeningMinutes: number;
    speakingMinutes: number;
    readingMinutes: number;
    reviewsCompleted: number;
  };
  skills: {
    listening: number;
    speaking: number;
    reading: number;
    writing: number;
    interaction: number;
  };
  canDo: Record<string, boolean>;
};

export const defaultProgress: ProgressState = {
  streak: 12,
  xp: 95,
  levelProgress: 18,
  lastDailyGoalDate: null,
  lessonProgress: {},
  vocabulary: initialVocabulary,
  pronunciation: {
    "R / RR": {
      sound: "R / RR",
      attempts: 0,
      score: null,
      status: "Practice",
      lastPracticed: null,
      commonIssue: "Keep pero short and perro more rolled or tapped."
    }
  },
  weekly: {
    listeningMinutes: 18,
    speakingMinutes: 9,
    readingMinutes: 12,
    reviewsCompleted: 14
  },
  skills: {
    listening: 22,
    speaking: 16,
    reading: 28,
    writing: 12,
    interaction: 18
  },
  canDo: {
    "I can introduce myself.": false,
    "I can ask someone's name.": false,
    "I can describe my daily routine.": false,
    "I can tell what happened yesterday.": false
  }
};

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultProgress;
    }

    const parsed = JSON.parse(saved) as Partial<ProgressState>;
    const currentVocabularyById = new Map(initialVocabulary.map((item) => [item.id, item]));
    const savedVocabulary = (parsed.vocabulary ?? [])
      .filter((item) => !RETIRED_VOCABULARY_IDS.has(item.id))
      .map((item) => {
        const currentItem = currentVocabularyById.get(item.id);

        return currentItem
          ? {
              ...item,
              term: currentItem.term,
              meaning: currentItem.meaning,
              meaningZh: currentItem.meaningZh,
              lessonId: currentItem.lessonId
            }
          : item;
      });
    const savedVocabularyIds = new Set(savedVocabulary.map((item) => item.id));

    return {
      ...defaultProgress,
      ...parsed,
      vocabulary: [
        ...savedVocabulary,
        ...initialVocabulary.filter((item) => !savedVocabularyIds.has(item.id))
      ]
    };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: ProgressState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateReviewStatus(item: VocabItem, remembered: boolean): VocabItem {
  const now = new Date().toISOString();
  const strength = remembered ? Math.min(100, item.strength + 18) : Math.max(0, item.strength - 12);
  const status: ReviewStatus =
    strength >= 90
      ? "MASTERED"
      : strength >= 70
        ? "STRONG"
        : strength >= 50
          ? "ACTIVE"
          : strength >= 30
            ? "FAMILIAR"
            : "LEARNING";

  return {
    ...item,
    strength,
    status,
    lastSeen: now,
    nextReview: now,
    correctStreak: remembered ? item.correctStreak + 1 : 0,
    wrongCount: remembered ? item.wrongCount : item.wrongCount + 1,
    productionScore: remembered ? Math.min(100, item.productionScore + 10) : item.productionScore,
    listeningScore: remembered ? Math.min(100, item.listeningScore + 8) : item.listeningScore,
    contextScore: remembered ? Math.min(100, item.contextScore + 6) : item.contextScore
  };
}
