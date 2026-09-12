"use client";

import { m } from "framer-motion";
import { EASE } from "@/lib/motion";
import { COMPANY } from "@/lib/site";

export function BrandThesis() {
  return (
    <section className="dark-band relative flex min-h-[88svh] items-center overflow-hidden bg-ink">
      <div className="grid-field pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="glow-core pointer-events-none absolute bottom-[-25%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 opacity-35"
      />
      <div className="shell relative py-24 text-center">
        <m.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-display font-medium text-white balance"
        >
          Every learner is different.
        </m.h2>

        {/* The pause is the point. */}
        <m.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
          className="mt-3 text-display font-medium text-white/35 balance"
        >
          Learning should be too.
        </m.p>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          className="mt-20 text-[0.9rem] font-semibold tracking-[0.3em] text-white/50"
        >
          ARVIONA LABS
        </m.p>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="mx-auto mt-5 max-w-md text-[1rem] leading-relaxed text-white/65"
        >
          {COMPANY.tagline}
        </m.p>
      </div>
    </section>
  );
}
