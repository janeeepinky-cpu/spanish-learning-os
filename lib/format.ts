import type { LevelId } from "@/course/types";

export function levelLabel(level: LevelId) {
  if (level === "pre-a1") {
    return "Pre-A1";
  }

  return level.toUpperCase();
}

export function percent(value: number) {
  return `${Math.max(0, Math.min(100, value))}%`;
}
