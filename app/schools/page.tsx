import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ForEducators } from "@/components/sections/ForEducators";
import { SchoolPartnershipForm } from "@/components/SchoolPartnershipForm";
import { BrandThesis } from "@/components/sections/BrandThesis";
import { TOUR_FACTS, TOUR_FORMAT } from "@/lib/edutour";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Bring Arviona to your school. The Edu Tour 2026 — The Founding Twenty: a two-hour interactive experience for higher secondary students.",
};

const CONCERNS = [
  {
    q: "Will this replace our teachers?",
    a: "No. Arviona is built to support learners and educators. Teachers remain central — the system handles the repetition that personalization would otherwise demand.",
  },
  {
    q: "What does hosting involve?",
    a: "Two hours, your students, your room. We bring the session, the demonstrations and the materials.",
  },
  {
    q: "Who is it designed for?",
    a: "Higher secondary students. The session assumes no prior exposure to AI.",
  },
  {
    q: "What happens afterwards?",
    a: "Nothing is required of you. If the school wants to go further, we talk about pilots then — not before.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Schools & Institutions"
        title="Bring the future of learning to your school."
        lead="Arviona Edu Tour 2026 — The Founding Twenty. A two-hour interactive experience introducing students to AI, responsible AI usage, modern learning and the opportunities ahead of them."
        primary={{ label: "Bring Arviona to Your School", href: "#partner" }}
        secondary={{ label: "Explore the Edu Tour", href: "/edu-tour" }}
        meta={TOUR_FACTS.map((f) => ({ k: f.k, v: f.v }))}
      />

      <Section tone="light" size="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <AnimatedText
              as="h2"
              text="Two hours is the whole first step."
              className="max-w-md text-section font-medium balance"
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-8 max-w-md text-lead text-dim pretty">
                Students leave with more than awareness — they leave understanding
                how they learn, how to use AI responsibly, and what the next few
                years could ask of them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <ul className="mt-9 flex flex-wrap gap-2">
                {TOUR_FORMAT.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-ink/12 px-3.5 py-1.5 font-mono text-[0.7rem] text-ink/65"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <dl className="grid gap-px self-start overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {CONCERNS.map((c, i) => (
              <ScrollReveal key={c.q} delay={(i % 2) * 0.06} className="bg-paper p-7">
                <dt className="text-[1.08rem] font-medium tracking-[-0.02em] balance">
                  {c.q}
                </dt>
                <dd className="mt-3 text-[0.94rem] leading-relaxed text-ink/65 pretty">
                  {c.a}
                </dd>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </Section>

      <ForEducators />

      <section id="partner" className="dark-band relative overflow-hidden bg-ink">
        <div className="grid-field pointer-events-none absolute inset-0" />
        <div className="shell relative py-[clamp(5rem,10vw,9rem)]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-white/55">School partnership</p>
              <AnimatedText
                as="h2"
                text="Ready to bring Arviona to your students?"
                className="mt-7 max-w-md text-section font-medium text-white balance"
              />
              <ScrollReveal delay={0.35}>
                <p className="mt-8 max-w-sm text-lead text-white/55 pretty">
                  Tell us about your institution and we will come back with what a
                  session would look like for your students.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="mt-10 text-[0.9rem] text-white/50">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="border-b border-white/25 pb-0.5 text-white/70 transition-colors hover:border-white hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </ScrollReveal>
            </div>

            <SchoolPartnershipForm />
          </div>
        </div>
      </section>

      <BrandThesis />
    </>
  );
}
