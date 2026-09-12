"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const CONCEPT = "A derivative";

const METHODS = [
  {
    id: "example",
    label: "Example-first",
    badge: "Intuitive & Grounded",
    focus: "Physical intuition",
    symbol: "v(t) = 60 km/h",
    text: "A speedometer reads 60 km/h. That is a derivative — how fast the distance is changing right now, not over the whole trip.",
    detail: "Bypasses formalism to ground rate of change in tangible everyday experience.",
  },
  {
    id: "analogy",
    label: "Analogy-first",
    badge: "Spatial & Metaphorical",
    focus: "Terrain geometry",
    symbol: "slope = dy/dx",
    text: "Stand on a hill. The derivative is the steepness under your feet — not how tall the hill is, but how sharply the ground tilts where you are.",
    detail: "Translates abstract calculus into an intuitive sense of incline and direction.",
  },
  {
    id: "theory",
    label: "Theory-first",
    badge: "Formal & Rigorous",
    focus: "Mathematical structure",
    symbol: "lim(Δx→0) Δy/Δx",
    text: "The limit of the average rate of change as the interval shrinks toward zero. A global relationship, made local.",
    detail: "Constructs the rigorous foundation connecting instantaneous rate with limits.",
  },
  {
    id: "simple",
    label: "Simplified",
    badge: "Direct & Atomic",
    focus: "Instant clarity",
    symbol: "Δ at t₀",
    text: "How fast something is changing, at one exact moment. That is it.",
    detail: "Strips cognitive overhead so the core principle clicks on first contact.",
  },
];

export function PrismDemo() {
  const [active, setActive] = useState(0);
  const method = METHODS[active];

  return (
    <Section tone="dark" size="lg" id="prism-section">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-white/55">Prism Lens</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="One concept. Many ways to understand it."
          className="mt-7 text-section font-medium text-white balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.12}>
          <p className="mt-4 text-lead text-white/65">
            Different learners need different entry points. The interface adapts the explanation without sacrificing rigor.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        {/* Visual Prism Lens Representation */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#06070A] p-7 sm:p-9">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                Cognitive Refraction
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[0.72rem] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                {method.badge}
              </span>
            </div>

            {/* Interactive Concept Lens Graphic */}
            <div className="mt-8 relative flex h-[200px] w-full items-center justify-center sm:h-[240px]">
              <svg viewBox="0 0 400 180" className="h-full w-full" aria-hidden>
                {/* Background Grid */}
                <defs>
                  <pattern id="prism-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                  </pattern>
                  <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.9)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#prism-grid)" />

                {/* Incoming Concept Ray */}
                <path d="M 30 90 L 170 90" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="30" cy="90" r="4" fill="rgba(255, 255, 255, 0.7)" />

                {/* Central Prism Polygon */}
                <polygon
                  points="200,30 240,150 160,150"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="90" r="8" fill="white" fillOpacity="0.15" />

                {/* 4 Dispersed Output Rays */}
                {METHODS.map((mth, i) => {
                  const targetY = 40 + i * 33;
                  const isSelected = i === active;
                  return (
                    <g key={mth.id}>
                      <path
                        d={`M 200 90 Q 260 ${targetY}, 360 ${targetY}`}
                        fill="none"
                        stroke={isSelected ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.15)"}
                        strokeWidth={isSelected ? 2.2 : 1}
                        className="transition-all duration-300"
                      />
                      <circle
                        cx="360"
                        cy={targetY}
                        r={isSelected ? 4.5 : 2.5}
                        fill={isSelected ? "white" : "rgba(255, 255, 255, 0.3)"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between text-[0.8rem] text-white/55">
              <span>Focal Mode:</span>
              <span className="font-mono text-white/80">{method.focus}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[0.8rem] text-white/55">
              <span>Representation:</span>
              <span className="font-mono text-white/90 font-medium">{method.symbol}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Explanation Panel */}
        <div className="flex flex-col justify-between">
          <div>
            <ScrollReveal>
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-white/50">
                Core Concept
              </p>
              <p className="mt-2 text-title font-medium text-white">{CONCEPT}</p>
            </ScrollReveal>

            {/* Interactive Tab Switcher */}
            <ScrollReveal delay={0.08}>
              <div
                role="tablist"
                aria-label="Explanation method"
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {METHODS.map((mth, i) => {
                  const isSelected = i === active;
                  return (
                    <button
                      key={mth.id}
                      id={`prism-tab-${mth.id}`}
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls="prism-panel"
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActive(i)}
                      className={`rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-all duration-300 ${
                        isSelected
                          ? "border-white bg-white text-ink shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                          : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {mth.label}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Active Explanation Content */}
            <ScrollReveal delay={0.12}>
              <div
                id="prism-panel"
                role="tabpanel"
                aria-labelledby={`prism-tab-${method.id}`}
                className="mt-7 flex min-h-[190px] flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
              >
                <AnimatePresence mode="wait">
                  <m.div
                    key={method.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="text-[1.25rem] sm:text-[1.4rem] leading-snug font-medium text-white balance">
                      &ldquo;{method.text}&rdquo;
                    </p>
                    <p className="mt-4 text-[0.88rem] text-white/50 leading-relaxed">
                      {method.detail}
                    </p>
                  </m.div>
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16}>
            <p className="mt-6 text-[0.88rem] text-white/50">
              The engine detects friction in one framing and seamlessly shifts to another — keeping the learner in flow without dumbing down the topic.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
