"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const CHAIN = [
  {
    step: "01",
    title: "Learner",
    desc: "Every interaction, pause, and attempt reveals how the mind approaches new concepts.",
  },
  {
    step: "02",
    title: "Learning Patterns",
    desc: "The system identifies preferred abstraction levels, pacing rhythm, and cognitive blockers.",
  },
  {
    step: "03",
    title: "Adaptive Experience",
    desc: "Explanations, difficulty, and pacing morph continuously in real time around the student.",
  },
];

export function CognitiveIntelligence() {
  return (
    <Section tone="light" size="lg">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-ink/60">The Core Idea</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="Cognitive Learning Intelligence"
          className="mt-7 text-section font-medium balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.35}>
          <p className="mx-auto mt-8 max-w-xl text-lead text-dim pretty">
            An intelligence layer designed to understand how a learner learns, and
            adapt the learning experience accordingly.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {CHAIN.map((c, i) => (
            <m.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
              className="flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-paper-soft p-7 sm:p-8 transition-shadow hover:shadow-sm"
            >
              <div>
                <span className="font-mono text-[0.72rem] text-accent">{c.step}</span>
                <h3 className="mt-4 text-[1.2rem] font-medium tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                  {c.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
