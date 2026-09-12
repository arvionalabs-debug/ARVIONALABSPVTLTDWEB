"use client";

import { m } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const TRACKS = [
  { id: "a", label: "Explanation A", result: "Didn't work", ok: false },
  { id: "b", label: "Explanation B", result: "Worked", ok: true },
];

export function Continuity() {
  return (
    <Section tone="soft" size="lg">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <AnimatedText
            as="h2"
            text="And it shouldn't forget what works."
            className="max-w-xl text-section font-medium balance"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-8 max-w-md text-lead text-dim pretty">
              Arviona is designed to keep continuity in the learning experience —
              adapting future explanations based on what actually helped the
              learner understand.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="space-y-3">
            {TRACKS.map((t, i) => (
              <m.div
                key={t.id}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.25, duration: 0.7, ease: EASE }}
                className={`flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 transition-colors ${
                  t.ok
                    ? "border-accent/40 bg-accent/[0.07]"
                    : "border-ink/10 bg-white"
                }`}
              >
                <span
                  className={`text-[1.05rem] font-medium ${
                    t.ok ? "text-ink" : "text-ink/60 line-through decoration-ink/30"
                  }`}
                >
                  {t.label}
                </span>
                <span
                  className={`flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] ${
                    t.ok ? "text-accent-deep" : "text-ink/60"
                  }`}
                >
                  {t.ok ? (
                    <Check aria-hidden className="h-3.5 w-3.5" />
                  ) : (
                    <X aria-hidden className="h-3.5 w-3.5" />
                  )}
                  {t.result}
                </span>
              </m.div>
            ))}

            <m.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
              className="flex items-center gap-4 pt-4"
            >
              <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
              <span className="text-[0.95rem] text-ink/70">
                Future explanations adapt.
              </span>
            </m.div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
