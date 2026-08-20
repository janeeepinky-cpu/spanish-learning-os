import { day1Lesson } from "./day-1";
import { mockLessons } from "./mock-lessons";

export const lessons = [day1Lesson, ...mockLessons];

export function getLessonByDay(day: number) {
  return lessons.find((lesson) => lesson.day === day);
}

export function getLessonById(id: string) {
  return lessons.find((lesson) => lesson.id === id);
}
