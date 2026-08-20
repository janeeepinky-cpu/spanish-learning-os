import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  const hasCustomBackground = /\bbg-/.test(className);
  const background = hasCustomBackground ? "" : "bg-white";

  return <section className={`rounded-lg border border-stone-200/85 ${background} p-5 shadow-soft ${className}`}>{children}</section>;
}
