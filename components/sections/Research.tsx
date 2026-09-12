"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";
import { round, hash01 } from "@/lib/deterministic";

/* Evolving data points — observation, not findings. */
function DataField() {
  const cols = 15;
  const rows = 5;
  return (
    <svg viewBox="0 0 600 180" className="w-full" aria-hidden>
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const seed = hash01(r * 31 + c);
          return (
            <circle
              key={`${r}-${c}`}
              cx={20 + c * 40}
              cy={22 + r * 34}
              r={round(1.5 + seed * 2.3, 2)}
              fill="var(--accent-soft)"
              className="twinkle"
              style={
                {
                  "--tw-dur": `${round(5 + seed * 4, 2)}s`,
                  "--tw-delay": `${round(seed * 3, 2)}s`,
                  "--tw-peak": `${round(0.18 + seed * 0.42, 2)}`,
                } as React.CSSProperties
              }
            />
          );
        }),
      )}
      <m.path
        d="M 20 142 C 120 118, 190 68, 300 84 C 410 100, 470 44, 586 36"
        fill="none"
        stroke="white"
        strokeOpacity={0.3}
        strokeWidth={1.2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE }}
      />
    </svg>
  );
}

export function Research() {
  return (
    <Section tone="dark" size="lg" id="research">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <AnimatedText
            as="h2"
            text="We don't just build learning technology."
            className="max-w-lg text-section font-medium text-white balance"
          />
          <AnimatedText
            as="p"
            text="We study learning."
            className="max-w-lg text-section font-medium text-white/35 balance"
            delay={0.3}
          />
          <ScrollReveal delay={0.5}>
            <p className="mt-8 max-w-md text-lead text-white/55 pretty">
              The Edu Tour also helps Arviona understand student learning
              behaviours, academic challenges, learning preferences and future
              aspirations.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.12}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <DataField />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
