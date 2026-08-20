import { percent } from "@/lib/format";

type ProgressBarProps = {
  value: number;
  label?: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      {label ? <div className="text-sm font-medium text-stone-600">{label}</div> : null}
      <div className="h-3 overflow-hidden rounded-full bg-stone-200">
        <div className="h-full rounded-full bg-mint transition-all" style={{ width: percent(value) }} />
      </div>
    </div>
  );
}
