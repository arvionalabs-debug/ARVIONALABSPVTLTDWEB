"use client";

import { useRef } from "react";
import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LearningPath } from "@/components/visuals/LearningPath";
import { EASE } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "Arviona observes learning behaviour — not only whether an answer was right, but how it was reached.",
  },
  {
    n: "02",
    title: "Map",
    body: "The system maps the learner's individual profile: pace, preferred explanation style, and level of abstraction.",
  },
  {
    n: "03",
    title: "Adapt",
    body: "The intelligence selects what this learner needs next, and the form it should take.",
  },
  {
    n: "04",
    title: "Improve",
    body: "Every interaction is evidence. What worked is reinforced; what failed is retired.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Section tone="light" size="lg">
      <div ref={ref}>
        <div className="max-w-3xl">
          <AnimatedText
            as="h2"
            text="One learner in. A path that keeps dividing."
            className="text-section font-medium balance"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-7 max-w-xl text-lead text-dim pretty">
              The learning path does not exist before the learner does. It is drawn
              as understanding is observed, and redrawn when the evidence changes.
            </p>
          </ScrollReveal>
        </div>

        <div className="snap-rail mt-14 overflow-x-auto pb-2">
          <LearningPath trackRef={ref} />
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <m.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: EASE }}
              className="bg-paper p-7 sm:p-8"
            >
              <span className="font-mono text-[0.72rem] text-accent">{s.n}</span>
              <h3 className="mt-5 text-[1.25rem] font-medium tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/65 pretty">
                {s.body}
              </p>
            </m.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
