import type { Unit } from "../types";

export const units: Unit[] = [
  {
    id: "pre-a1-unit-01",
    level: "pre-a1",
    order: 1,
    title: "Unit 01",
    subtitle: "First Contact",
    lessonIds: [
      "day-1-hola",
      "day-2-como-te-llamas",
      "day-3-de-donde-eres",
      "day-4-como-estas",
      "day-5-trabajo-en",
      "day-6-mini-story-1",
      "day-7-first-conversation"
    ]
  },
  {
    id: "pre-a1-unit-02",
    level: "pre-a1",
    order: 2,
    title: "Unit 02",
    subtitle: "Everyday Rhythm",
    lessonIds: [],
    locked: true
  }
];
