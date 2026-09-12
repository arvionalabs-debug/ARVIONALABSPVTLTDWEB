"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const STEPS = [
  { k: "Understand", v: "See how a class is actually learning." },
  { k: "Support", v: "Reach the students who need it, sooner." },
  { k: "Adapt", v: "Let the material meet each learner." },
  { k: "Track", v: "Follow progress that reflects understanding." },
];

export function ForEducators() {
  return (
    <Section tone="dark" size="lg" id="educators">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-white/55">For educators</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="Personalization, without multiplying the workload."
          className="mt-7 text-section font-medium text-white balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.35}>
          <p className="mx-auto mt-8 max-w-xl text-lead text-white/55 pretty">
            Teachers know every student learns differently. Arviona is being built
            to bring that personalization into scalable learning environments.
          </p>
        </ScrollReveal>
      </div>

      <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <m.li
            key={s.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.65, ease: EASE }}
            className="bg-ink p-8"
          >
            <p className="text-[1.3rem] font-medium tracking-[-0.025em] text-white">
              {s.k}
            </p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-white/65">
              {s.v}
            </p>
          </m.li>
        ))}
      </ul>
    </Section>
  );
}
