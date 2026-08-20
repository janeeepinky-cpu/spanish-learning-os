import { notFound } from "next/navigation";
import { getLessonByDay, lessons } from "@/course/lessons";
import { LessonClient } from "./LessonClient";

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    day: String(lesson.day)
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const lesson = getLessonByDay(Number(day));

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} />;
}
