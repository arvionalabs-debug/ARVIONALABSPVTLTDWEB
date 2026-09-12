"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASE } from "@/lib/motion";

const FLOW = [
  { k: "Learner", v: "Who is actually here." },
  { k: "Understanding", v: "What they have grasped so far." },
  { k: "Adaptation", v: "What should change because of it." },
  { k: "Learning", v: "What finally lands." },
];

export function Approach() {
  return (
    <Section tone="dark" size="lg">
      <AnimatedText
        as="h2"
        text="So we built around the learner."
        className="max-w-3xl text-section font-medium text-white balance"
      />

      <ol className="mt-20 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {FLOW.map((f, i) => (
          <m.li
            key={f.k}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
            className="relative lg:pr-10"
          >
            {/* Connector */}
            {i < FLOW.length - 1 ? (
              <m.span
                aria-hidden
                className="absolute left-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-accent-soft/60 to-accent-soft/10 lg:block"
                style={{ width: "100%" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: EASE }}
              />
            ) : null}

            <span
              aria-hidden
              className="relative z-10 block h-[15px] w-[15px] rounded-full border border-accent-soft/70 bg-ink"
            >
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft" />
            </span>

            <p className="mt-7 text-[1.45rem] font-medium tracking-[-0.028em] text-white">
              {f.k}
            </p>
            <p className="mt-2.5 max-w-[16rem] text-[1.04rem] leading-relaxed text-white/65">
              {f.v}
            </p>
          </m.li>
        ))}
      </ol>
    </Section>
  );
}
