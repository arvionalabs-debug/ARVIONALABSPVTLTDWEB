"use client";

import { m } from "framer-motion";
import { EASE } from "@/lib/motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function Transition() {
  const reduce = useReducedMotionSafe();

  return (
    <section className="dark-band relative flex min-h-[65svh] items-center justify-center overflow-hidden bg-[#050608] py-28 sm:py-36">
      {/* Background Matrix Grid */}
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />

      {/* Google-style Breathing Radiant Aura */}
      <m.div
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.18, 1],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="google-glow-aura pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 sm:h-[700px] sm:w-[700px]"
      />

      <div className="shell relative mx-auto max-w-5xl text-center">
        {/* Animated Eyebrow Badge */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#93B8FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C792EA]" />
          </span>
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-white/70">
            Cognitive Core
          </span>
        </m.div>

        {/* Google-style Shimmering Headline Hook */}
        <div className="mt-8">
          <m.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="text-display font-medium tracking-[-0.035em] text-white balance leading-[1.08]"
          >
            Because no two learners{" "}
            <span className="google-gradient-text inline-block font-semibold">
              understand the same way.
            </span>
          </m.h2>
        </div>

        {/* Supporting Hook Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.25, duration: 0.75, ease: EASE }}
          className="mx-auto mt-8 max-w-2xl text-[1.12rem] leading-relaxed text-white/60 sm:text-[1.3rem] pretty font-normal"
        >
          A single fixed explanation was never meant for everyone. Arviona senses cognitive friction and reshapes itself in real time.
        </m.p>
      </div>
    </section>
  );
}
