"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASE } from "@/lib/motion";

const LINES = [
  "We believe the next generation of education will not simply deliver content.",
  "It will understand the learner.",
  "It will adapt.",
  "And it will continuously improve.",
];

export function Vision() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.55, 0.12]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="dark-band relative flex min-h-[90svh] items-center overflow-hidden bg-ink"
    >
      <m.div
        aria-hidden
        style={reduce ? undefined : { opacity: glow, y }}
        className="glow-core pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="shell relative py-[clamp(5rem,10vw,9rem)]">
        <AnimatedText
          as="h2"
          text="What if education could understand the learner before deciding how to teach?"
          className="max-w-4xl text-hero font-medium text-white balance"
          stagger={0.045}
        />

        <div className="mt-16 max-w-2xl space-y-1">
          {LINES.map((line, i) => (
            <m.p
              key={line}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: EASE }}
              className={`text-[1.15rem] leading-[1.7] sm:text-[1.4rem] ${
                i === 0 ? "text-white/55" : "text-white"
              }`}
            >
              {line}
            </m.p>
          ))}
        </div>
      </div>
    </section>
  );
}
