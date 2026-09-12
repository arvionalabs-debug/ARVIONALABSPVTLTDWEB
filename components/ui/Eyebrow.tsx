import type { ReactNode } from "react";

export function Eyebrow({
  children,
  invert = false,
  className = "",
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2.5 ${
        invert ? "text-white/50" : "text-ink/65"
      } ${className}`}
    >
      <span
        aria-hidden
        className="h-px w-6 bg-current opacity-60"
      />
      {children}
    </span>
  );
}
