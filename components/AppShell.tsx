import type { ReactNode } from "react";
import { AppNav } from "./AppNav";
import { PwaBoot } from "./PwaBoot";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div>
      <PwaBoot />
      <AppNav />
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-safe pt-5 sm:px-6 lg:mx-0 lg:ml-64 lg:max-w-[calc(100%-16rem)] lg:px-10 lg:pb-10 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
