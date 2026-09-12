"use client";

import { Fragment, useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { HeroDemo } from "@/components/HeroDemo";
import { IntelligenceCore } from "@/components/visuals/IntelligenceCore";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";

const WORDS = ["Learning", "should", "adapt", "to", "the", "learner."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const coreScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const coreOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.04]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="dark-band relative flex min-h-[100svh] items-center overflow-hidden bg-ink pb-20 pt-[124px] sm:pb-24 sm:pt-[150px]"
    >
      <div className="grid-field pointer-events-none absolute inset-0" />

      <m.div
        style={reduce ? undefined : { scale: coreScale, opacity: coreOpacity }}
        className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[min(165vw,1080px)] -translate-x-1/2 -translate-y-1/2 opacity-60"
      >
        <IntelligenceCore className="h-full w-full" />
      </m.div>

      {/* Keeps every line of copy legible over the visual behind it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-ink/75 lg:bg-ink/60"
      />

      <m.div
        style={reduce ? undefined : { opacity: fade }}
        className="shell relative z-10 w-full"
      >
        <div className="anim-fade-up">
          <Eyebrow invert>Arviona Labs</Eyebrow>
        </div>

        {/* Full measure, so the headline breaks where it reads best. */}
        <h1 className="mt-7 max-w-4xl text-hero font-medium text-white balance">
          {WORDS.map((w, i) => (
            <Fragment key={w + i}>
              <span
                className="anim-fade-up inline-block"
                style={{ animationDelay: `${(0.1 + i * 0.06).toFixed(2)}s` }}
              >
                {w}
              </span>
              {i < WORDS.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div
            className="anim-fade-up max-w-lg"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-lead text-white/65 pretty">
              Arviona Labs is building Cognitive Learning Intelligence for
              scalable hyper-personalized learning.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CTA href="/platform" tone="dark" variant="primary" size="lg">
                Experience Arviona
              </CTA>
              <CTA href="/schools" tone="dark" variant="secondary" size="lg">
                For Schools
              </CTA>
            </div>
          </div>

          <div className="anim-fade-up" style={{ animationDelay: "0.62s" }}>
            <HeroDemo />
          </div>
        </div>
      </m.div>
    </section>
  );
}
