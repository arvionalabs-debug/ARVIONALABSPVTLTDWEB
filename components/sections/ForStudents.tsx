"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTA } from "@/components/ui/CTA";
import { EASE } from "@/lib/motion";

const ITEMS = [
  "Understand concepts",
  "Practice differently",
  "Ask questions",
  "Explore ideas",
  "Learn with modern technology",
  "Build future-ready skills",
];

export function ForStudents() {
  return (
    <Section tone="light" size="lg" id="students">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <ScrollReveal>
            <p className="eyebrow text-ink/60">For students</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="Learn in the way that makes sense to you."
            className="mt-7 max-w-lg text-section font-medium balance"
            delay={0.08}
          />
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <CTA href="/platform" size="lg">
                Explore Arviona
              </CTA>
            </div>
          </ScrollReveal>
        </div>

        <ul className="self-center">
          {ITEMS.map((it, i) => (
            <m.li
              key={it}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: EASE }}
              className="flex items-center gap-5 border-b border-ink/[0.08] py-5 last:border-b-0"
            >
              <span className="font-mono text-[0.7rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.15rem] tracking-[-0.02em]">{it}</span>
            </m.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
