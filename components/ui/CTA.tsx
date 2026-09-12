import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "light" | "dark";

const base =
  "group inline-flex items-center gap-2.5 rounded-full text-[0.94rem] font-medium tracking-[-0.01em] transition-all duration-500 ease-arv will-change-transform";

const sizes = {
  md: "px-6 py-3",
  lg: "px-7 py-3.5",
  sm: "px-5 py-2.5 text-[0.85rem]",
};

function styles(variant: Variant, tone: Tone) {
  if (tone === "dark") {
    return {
      primary:
        "bg-white text-ink hover:bg-white/90 shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]",
      secondary:
        "border border-white/20 text-white hover:border-white/45 hover:bg-white/5",
      ghost: "text-white/70 hover:text-white",
    }[variant];
  }
  return {
    primary: "bg-ink text-white hover:bg-ink/88",
    secondary:
      "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
    ghost: "text-ink/60 hover:text-ink",
  }[variant];
}

export function CTA({
  href,
  children,
  variant = "primary",
  tone = "light",
  size = "md",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${styles(variant, tone)} ${className}`}
    >
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-500 ease-arv group-hover:translate-x-1"
        />
      ) : null}
    </Link>
  );
}
