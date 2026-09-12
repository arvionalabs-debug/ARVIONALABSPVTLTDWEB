import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EduTourOverview } from "@/components/sections/EduTourOverview";
import { EduTourShowcase } from "@/components/sections/EduTourShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { OUTCOMES } from "@/lib/edutour";

export const metadata: Metadata = {
  title: "Edu Tour 2026",
  description:
    "Arviona Edu Tour 2026 — The Founding Twenty. A two-hour interactive session on AI awareness, responsible AI, live demonstrations, future skills and career exploration, delivered in your school.",
};

export default function EduTourPage() {
  return (
    <>
      <PageHero
        eyebrow="Arviona Edu Tour 2026 — The Founding Twenty"
        title="The future of learning belongs in the classroom."
        lead="A two-hour interactive experience for higher secondary students — built to be run in your school, in your room, with your students."
        primary={{ label: "Invite Arviona to Your School", href: "/schools#partner" }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />

      {/* 2-Hour Experience Overview with High-Impact Hooks */}
      <EduTourOverview />

      {/* Classroom Moments Photo Morph Showcase */}
      <EduTourShowcase />

      <section className="dark-band relative overflow-hidden bg-ink">
        <div className="grid-field pointer-events-none absolute inset-0 opacity-60" />
        <div className="shell band relative">
          <SectionHeader
            eyebrow="Outcomes"
            invert
            title="Students leave with more than awareness."
            lead="No percentages and no claims of measured improvement — these are the practical outcomes the session is designed to produce."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {OUTCOMES.map((o, i) => (
              <ScrollReveal key={o} as="li" delay={(i % 2) * 0.05} className="bg-ink p-7 sm:p-8">
                <span className="font-mono text-[0.7rem] text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-white/70 pretty">
                  {o}
                </p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-paper-soft">
        <div className="shell band-tight">
          <SectionHeader
            eyebrow="Also a research initiative"
            title="Every session teaches us something too."
            lead="The Edu Tour puts Arviona in front of real learners in real classrooms. What we observe there shapes what we build — and we report only what we have actually gathered."
          />
        </div>
      </section>

      <CTASection
        eyebrow="The Founding Twenty"
        title="Invite Arviona to your school."
        lead="Tell us about your school and your students, and we will take it from there. The Founding Twenty are the first twenty schools to host the programme."
        primary={{ label: "Bring Arviona to Your School", href: "/schools#partner" }}
        secondary={{ label: "See How It Works", href: "/intelligence" }}
      />
    </>
  );
}
