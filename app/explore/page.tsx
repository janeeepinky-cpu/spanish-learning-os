import { Clock, ExternalLink, Film, Globe2, Headphones, PlayCircle } from "lucide-react";
import { Card } from "@/components/Card";
import { exploreItems } from "@/course/content/explore";
import { levelLabel } from "@/lib/format";

const iconByType = {
  Video: PlayCircle,
  Podcast: Headphones,
  Movie: Film,
  Culture: Globe2
};

const groups = [
  {
    id: "Listen",
    title: "Podcasts",
    subtitle: "Use these for repeated listening, not word-by-word translation."
  },
  {
    id: "Watch",
    title: "Videos",
    subtitle: "Short visual input is the easiest way to build listening confidence."
  },
  {
    id: "Movie",
    title: "Movies + Culture",
    subtitle: "Legal film and culture entrances for when you want real Spanish outside lessons."
  }
];

const startHereIds = [
  "dreaming-spanish-superbeginner",
  "coffee-break-spanish",
  "duolingo-spanish-podcast"
];

const accessStyle: Record<string, string> = {
  Free: "bg-mint/15 text-mint",
  "Free/Paid": "bg-sun/25 text-clay",
  "May need account": "bg-stone-100 text-stone-700",
  "Region may vary": "bg-ocean/10 text-ocean"
};

export default function ExplorePage() {
  const startHere = startHereIds
    .map((id) => exploreItems.find((item) => item.id === id))
    .filter((item): item is (typeof exploreItems)[number] => Boolean(item));

  return (
    <div className="space-y-7">
      <header className="max-w-3xl">
        <p className="text-sm font-bold text-clay">Input Library</p>
        <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">Real Spanish you can open now</h1>
        <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">
          Podcasts, videos and legal film sources for extra input. Pick one small resource, repeat it, then bring useful lines back into Learn and Review.
        </p>
      </header>

      <section className="rounded-[1.5rem] bg-ink p-5 text-white shadow-soft">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black text-sun">Start here today</p>
            <h2 className="mt-1 text-2xl font-black">Do not choose. Open one of these first.</h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-stone-200">
            First watch Dreaming Spanish. If that asks for login, use Coffee Break Spanish instead.
          </p>
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {startHere.map((item, index) => {
            const Icon = iconByType[item.type];

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white p-4 text-ink transition hover:bg-[#fff8e8]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-sun px-3 py-1 text-xs font-black text-ink">Pick {index + 1}</span>
                  <Icon className="h-5 w-5 text-clay" aria-hidden />
                </div>
                <h3 className="mt-3 text-lg font-black leading-6">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">{item.useFor}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-black text-clay">
                  Open directly
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {groups.map((group) => {
          const count = exploreItems.filter((item) => item.category === group.id).length;

          return (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft transition hover:border-clay/40 hover:bg-[#fffdf8]"
            >
              <div className="text-xs font-black uppercase text-clay">{count} resources</div>
              <div className="mt-1 text-xl font-black text-ink">{group.title}</div>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{group.subtitle}</p>
            </a>
          );
        })}
      </section>

      {groups.map((group) => {
        const items = exploreItems.filter((item) => item.category === group.id);

        return (
          <section key={group.id} id={group.id} className="scroll-mt-6 space-y-4">
            <div>
              <p className="text-sm font-black text-clay">{group.title}</p>
              <h2 className="mt-1 text-2xl font-black text-ink">{group.subtitle}</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => {
                const Icon = iconByType[item.type];

                return (
                  <Card key={item.id} className="p-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-full flex-col p-5 text-ink transition hover:bg-[#fffdf8]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-clay">
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-black text-stone-600">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          Open
                        </span>
                      </div>

                      <div className="mt-5 min-w-0">
                        <p className="text-xs font-black uppercase text-stone-500">{item.provider}</p>
                        <h3 className="mt-1 text-xl font-black leading-7">{item.title}</h3>
                        <p className="mt-3 text-sm font-semibold leading-6 text-stone-700">{item.description}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-black">
                        <span className="rounded-full bg-mint/15 px-3 py-1 text-mint">{levelLabel(item.level)}</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-stone-600">
                          <Clock className="h-3.5 w-3.5" aria-hidden />
                          {item.duration}
                        </span>
                        <span className="rounded-full bg-stone-100 px-3 py-1 text-stone-600">{item.variant}</span>
                        <span className={`rounded-full px-3 py-1 ${accessStyle[item.access]}`}>{item.access}</span>
                      </div>

                      <div className="mt-5 rounded-2xl bg-stone-100 p-4">
                        <div className="text-xs font-black uppercase text-clay">How to use it</div>
                        <p className="mt-2 text-sm font-bold leading-6 text-stone-800">{item.useFor}</p>
                      </div>

                      <p className="mt-4 text-xs font-semibold leading-5 text-stone-500">{item.learnerNote}</p>
                    </a>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
