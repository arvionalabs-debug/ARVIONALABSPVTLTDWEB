import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { ScrollReveal } from "./ScrollReveal";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  invert = false,
  align = "left",
  className = "",
  maxWidth = "max-w-3xl",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div
      className={`${maxWidth} ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow ? (
        <ScrollReveal>
          <Eyebrow invert={invert}>{eyebrow}</Eyebrow>
        </ScrollReveal>
      ) : null}
      <ScrollReveal delay={0.06}>
        <h2 className="mt-6 text-section font-medium balance">{title}</h2>
      </ScrollReveal>
      {lead ? (
        <ScrollReveal delay={0.12}>
          <p
            className={`mt-6 text-lead pretty ${
              invert ? "text-dim-invert" : "text-dim"
            } ${align === "center" ? "mx-auto" : ""} max-w-2xl`}
          >
            {lead}
          </p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}
