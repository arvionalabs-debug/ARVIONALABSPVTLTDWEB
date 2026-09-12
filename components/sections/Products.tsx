"use client";

import { m } from "framer-motion";
import { Layers, Cpu, Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASE } from "@/lib/motion";

const PILLARS = [
  {
    id: "platform",
    icon: Layers,
    tag: "Software",
    title: "Personalized learning platform",
    body: "Concepts, notes, questions and explanations assembled around what the learner currently understands.",
  },
  {
    id: "device",
    icon: Cpu,
    tag: "Hardware",
    title: "Dedicated learning device",
    body: "Purpose-built for focused study and low-connectivity environments, where a general-purpose device is a distraction.",
  },
  {
    id: "future",
    icon: Compass,
    tag: "Ecosystem",
    title: "Future learning products",
    body: "New surfaces on the same intelligence, so what the system learns in one place improves the others.",
  },
];

export function Products() {
  return (
    <Section tone="soft" size="lg">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedText
          as="h2"
          text="An ecosystem built around how people learn."
          className="text-section font-medium balance"
        />
      </div>

      <div
        role="group"
        aria-label="Arviona product pillars"
        tabIndex={0}
        className="snap-rail -mx-[var(--shell-x)] mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--shell-x)] pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {PILLARS.map((p, i) => (
          <m.article
            key={p.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
            className="group w-[82vw] shrink-0 snap-start rounded-2xl border border-ink/[0.09] bg-white p-8 sm:w-[60vw] lg:w-auto lg:shrink transition-all duration-500 ease-arv hover:border-ink/20 hover:shadow-[0_36px_70px_-50px_rgba(7,8,11,0.5)] sm:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.04] transition-colors duration-500 group-hover:bg-accent/10">
                <p.icon
                  aria-hidden
                  className="h-5 w-5 text-ink/70 transition-colors group-hover:text-accent-deep"
                />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/60">
                {p.tag}
              </span>
            </div>
            <h3 className="mt-8 text-[1.3rem] font-medium tracking-[-0.025em] balance">
              {p.title}
            </h3>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/65 pretty">
              {p.body}
            </p>
          </m.article>
        ))}
      </div>
    </Section>
  );
}
