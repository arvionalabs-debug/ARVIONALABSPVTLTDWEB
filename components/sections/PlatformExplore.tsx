"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Layers, RefreshCw } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PILLARS = [
  {
    icon: RefreshCw,
    title: "Adaptive Rephrasing",
    desc: "When a concept doesn't land, the system shifts angle — switching from theory to analogy without dumbing it down.",
  },
  {
    icon: Sparkles,
    title: "Prism Lens",
    desc: "Experience multiple perspectives on a single topic, tailored to how your mind naturally processes information.",
  },
  {
    icon: Layers,
    title: "Continuous Memory",
    desc: "Understanding compounds across sessions. What worked is reinforced; what created friction is retired.",
  },
];

export function PlatformExplore() {
  return (
    <Section tone="dark" size="lg" id="platform-explore">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-white/50">The Platform</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="A learning interface that changes with the learner."
          className="mt-7 text-section font-medium text-white balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/60 pretty">
            Rather than a static textbook or generic chatbot, Arviona actively senses cognitive friction and restructures the explanation in real time.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-400 hover:border-white/30 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors group-hover:border-white/30 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-[1.2rem] font-medium text-white tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-white/55 group-hover:text-white/70 transition-colors">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/platform"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[0.92rem] font-medium text-ink transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Explore the Interactive Platform
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/intelligence"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
          >
            How It Works
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}
