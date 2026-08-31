"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, Home, Mic, RotateCcw, TrendingUp, Volume2 } from "lucide-react";

const items = [
  { href: "/today", label: "Today", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/phonics", label: "Sounds", icon: Volume2 },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/review", label: "Review", icon: RotateCcw },
  { href: "/speak", label: "Speak", icon: Mic },
  { href: "/progress", label: "Progress", icon: TrendingUp }
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-stone-200 bg-white px-5 py-6 shadow-soft lg:block">
        <Link href="/today" className="mb-8 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-lg font-black text-white">ES</div>
          <div>
            <div className="text-base font-black text-ink">Spanish OS</div>
            <div className="text-xs font-semibold text-stone-700">México-first Pre-A1</div>
          </div>
        </Link>

        <nav className="space-y-2">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                  active ? "bg-ink text-white shadow-soft" : "text-stone-800 hover:bg-stone-100"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-7 gap-1 rounded-2xl border border-white/70 bg-white/65 p-2 shadow-[0_18px_45px_rgba(32,33,36,0.18)] backdrop-blur-xl backdrop-saturate-150 lg:hidden">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[0.62rem] font-bold transition ${
                active ? "bg-ink/90 text-white shadow-sm" : "text-stone-800 hover:bg-white/60"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
