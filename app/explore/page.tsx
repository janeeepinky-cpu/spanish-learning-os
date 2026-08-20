import { Clock, Filter, Headphones, PlayCircle } from "lucide-react";
import { Card } from "@/components/Card";
import { ShadowLine } from "@/components/ShadowLine";
import { exploreItems } from "@/course/content/explore";
import { levelLabel } from "@/lib/format";

const iconByType = {
  Video: PlayCircle,
  Podcast: Headphones,
  "Mini Story": PlayCircle,
  Reading: Filter
};

const sampleLineByTopic: Record<string, string> = {
  "Daily Life": "Buenos días.",
  Conversation: "Hola, ¿cómo te llamas?",
  Work: "Trabajo en una empresa."
};

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-bold text-clay">Input Library</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">Short input you can actually use</h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-stone-600">
          暂时只保留适合 Pre-A1 的短输入：听一句、看意思、跟读一句。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {exploreItems.filter((item) => item.topic !== "Fun").slice(0, 3).map((item) => {
          const Icon = iconByType[item.type];
          return (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-clay">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-black text-stone-500">{item.variant}</span>
              </div>
              <h2 className="mt-5 text-xl font-black">{item.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-black text-stone-500">
                <span className="rounded-full bg-mint/15 px-3 py-1 text-mint">{levelLabel(item.level)}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {item.duration}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1">{item.type}</span>
                <span className="rounded-full bg-stone-100 px-3 py-1">{item.topic}</span>
              </div>
              <ShadowLine compact title="Sample line" className="mt-5" lines={[sampleLineByTopic[item.topic] ?? "Hola, mucho gusto."]} />
            </Card>
          );
        })}
      </section>
    </div>
  );
}
