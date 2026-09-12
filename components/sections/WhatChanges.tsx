"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const LEVERS = [
  {
    id: "style",
    label: "The explanation",
    from: "Theory first",
    to: "Example first",
    body: "A learner who needs something concrete gets the trolley before the formula. A learner who moves faster in the abstract gets the formula first.",
    detail:
      "Because the same definition, repeated more slowly, is still the same definition.",
  },
  {
    id: "difficulty",
    label: "The difficulty",
    from: "Standard",
    to: "Raised",
    body: "Questions sit where the learner has to work but can still get there. Too easy teaches nothing; too hard ends the session.",
    detail: "Raised after transfer is demonstrated. Eased the moment it isn't.",
  },
  {
    id: "pace",
    label: "The pace",
    from: "Move on",
    to: "Stay here",
    body: "The curriculum's schedule and the learner's readiness are different things. Arviona follows the second one.",
    detail: "One learner needs three passes at a concept. Another needs one.",
  },
  {
    id: "revision",
    label: "The timing",
    from: "Weekly slot",
    to: "Before it fades",
    body: "Revision arrives just before a concept would have been forgotten, which is when repeating it does the most work.",
    detail: "Per learner, per concept — not one revision schedule for the class.",
  },
];

export function WhatChanges() {
  const [active, setActive] = useState(0);
  const lever = LEVERS[active];

  return (
    <Section tone="dark" size="lg">
      <div className="max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow text-white/55">In practice</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="Four things actually change."
          className="mt-7 text-section font-medium text-white balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.3}>
          <p className="mt-7 text-lead text-white/65 pretty">
            Everything above exists to move these four dials. If none of them
            move, nothing has been personalized.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-14">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
          {LEVERS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`min-w-[180px] border-white/10 px-1 py-4 text-left transition-colors duration-400 lg:min-w-0 lg:border-t ${
                i === active ? "text-white" : "text-white/55 hover:text-white/80"
              }`}
            >
              <span className="block text-[1.15rem] font-medium tracking-[-0.02em]">
                {l.label}
              </span>
              <span className="mt-2 flex items-center gap-2 font-mono text-[0.72rem]">
                <span className={i === active ? "text-white/55" : "text-white/40"}>
                  {l.from}
                </span>
                <ArrowRight aria-hidden className="h-3 w-3 text-accent-soft" />
                <span className="text-accent-soft">{l.to}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <m.div
              key={lever.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <p className="text-title font-medium text-white balance">
                {lever.body}
              </p>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-white/65">
                {lever.detail}
              </p>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
