import type { Level } from "../types";

export const levels: Level[] = [
  {
    id: "pre-a1",
    label: "A0 / Pre-A1",
    description: "First contact with real Spanish.",
    unitIds: ["pre-a1-unit-01"]
  },
  {
    id: "a1",
    label: "A1",
    description: "Simple routines, needs, and social life.",
    unitIds: [],
    locked: true
  },
  {
    id: "a2",
    label: "A2",
    description: "Travel, plans, opinions, and daily stories.",
    unitIds: [],
    locked: true
  },
  {
    id: "b1",
    label: "B1",
    description: "Connected speech and independent interaction.",
    unitIds: [],
    locked: true
  }
];
