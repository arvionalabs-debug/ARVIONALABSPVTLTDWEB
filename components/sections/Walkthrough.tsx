"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "It watches how the answer happened.",
    body: "Not just whether it was right. How long it took, how many attempts it needed, which hint moved things forward, what got changed on the way.",
    note: "A right answer reached by guessing is not the same as a right answer reached by understanding.",
  },
  {
    n: "02",
    title: "It builds a picture of the learner.",
    body: "How fast this learner moves. Which kind of explanation has worked for them before. How much they are holding at once right now.",
    note: "The picture updates continuously. It is not a test score taken once.",
  },
  {
    n: "03",
    title: "It decides what comes next.",
    body: "The next concept, the next difficulty, and whether to move on at all — or stay here until the ground is solid.",
    note: "Staying is a decision, not a failure.",
  },
  {
    n: "04",
    title: "It decides how to say it.",
    body: "The same idea can arrive as an example, as an analogy, as the formal theory, or as a smaller first step. Which one comes out depends on the picture from step two.",
    note: "This is the part most systems skip. Rewording is not re-explaining.",
  },
  {
    n: "05",
    title: "It checks whether that landed.",
    body: "Understanding is confirmed by transfer — the same idea in a shape the learner has not seen before, not the same question asked again.",
    note: "Agreement is not evidence. Transfer is.",
  },
  {
    n: "06",
    title: "It remembers what worked.",
    body: "An explanation style that failed is not tried again. One that worked shapes what comes next. The following session starts where this one ended.",
    note: "This is what makes it continuous learning intelligence rather than a generic chat.",
  },
];

export function Walkthrough() {
  return (
    <Section tone="light" size="lg">
      <div className="max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow text-ink/60">Step by step</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="What happens when a student uses Arviona."
          className="mt-7 text-section font-medium balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.3}>
          <p className="mt-7 text-lead text-dim pretty">
            Six things happen between a learner getting stuck and a learner
            getting an explanation that works. None of them are visible to the
            student — they just see the explanation change.
          </p>
        </ScrollReveal>
      </div>

      <ol className="mt-16">
        {STEPS.map((s, i) => (
          <m.li
            key={s.n}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: (i % 2) * 0.06, duration: 0.65, ease: EASE }}
            className="grid gap-4 border-t border-ink/10 py-9 md:grid-cols-[80px_1.1fr_1fr] md:gap-10 md:py-11"
          >
            <span className="font-mono text-[0.78rem] text-accent">{s.n}</span>
            <h3 className="text-[1.35rem] font-medium tracking-[-0.025em] balance sm:text-[1.6rem]">
              {s.title}
            </h3>
            <div>
              <p className="text-[1.02rem] leading-relaxed text-ink/65 pretty">
                {s.body}
              </p>
              <p className="mt-4 border-l border-accent/40 pl-4 text-[0.95rem] leading-relaxed text-ink/60">
                {s.note}
              </p>
            </div>
          </m.li>
        ))}
      </ol>
    </Section>
  );
}
