"use client";

import { m } from "framer-motion";
import { Sparkles, Brain, ShieldCheck, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE } from "@/lib/motion";

const PILLARS = [
  {
    icon: Sparkles,
    num: "01",
    title: "Demystifying AI for Students",
    hook: "Moving beyond buzzwords to genuine understanding.",
    desc: "Students learn how generative systems and cognitive models actually work under the hood, building foundational intuition without intimidating math.",
  },
  {
    icon: Brain,
    num: "02",
    title: "Live Interactive Demonstrations",
    hook: "Watching explanations shift in real time.",
    desc: "We bring real-time technology demonstrations into the classroom, showing students how concepts adapt to different learning styles.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Responsible AI & Critical Thinking",
    hook: "Why confident answers can still be wrong.",
    desc: "Equipping students with the judgment to spot hallucinations, question AI output, and use intelligence tools ethically to enhance their own thinking.",
  },
  {
    icon: Compass,
    num: "04",
    title: "Future Skills & Career Pathways",
    hook: "Preparing for the opportunities ahead.",
    desc: "A realistic exploration of emerging tech careers, multidisciplinary skills, and how higher secondary students can position themselves for the future.",
  },
];

export function EduTourOverview() {
  return (
    <section className="relative bg-paper">
      <div className="shell band">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="The 2-Hour Experience"
            title="A focused, interactive session for your classroom."
            lead="Designed to fit seamlessly within a standard school block. No prior exposure to AI required — students leave with clarity, curiosity, and practical skills."
            align="center"
          />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <m.div
                key={p.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: EASE }}
                className="group relative flex flex-col justify-between rounded-2xl border border-ink/[0.09] bg-paper-soft p-8 sm:p-10 transition-all duration-400 hover:border-ink/25 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-ink/[0.08] pb-5">
                    <span className="font-mono text-[0.8rem] font-medium text-accent">
                      Phase {p.num}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink/5 text-ink/75 transition-colors group-hover:bg-ink group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-[1.3rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.45rem]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] font-medium text-ink/80">
                    {p.hook}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65 pretty">
                    {p.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
