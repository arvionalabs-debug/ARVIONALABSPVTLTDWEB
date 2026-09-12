import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { About } from "@/components/sections/About";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Research } from "@/components/sections/Research";
import { Vision } from "@/components/sections/Vision";
import { BrandThesis } from "@/components/sections/BrandThesis";

export const metadata: Metadata = {
  title: "About",
  description:
    "Arviona Labs Pvt Ltd is a deep-tech education startup building Cognitive Learning Intelligence for scalable hyper-personalized learning. Founded by Andrew Surjit Ronald.",
};

const HORIZONS = [
  { when: "Today", what: "Edu Tour and technology validation" },
  { when: "Next", what: "PAL MVP and learner intelligence" },
  { when: "Then", what: "Institutional pilots" },
  { when: "Future", what: "Scalable personalized learning infrastructure" },
  { when: "Long term", what: "Learning products across subjects and contexts" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Arviona Labs"
        title="Every learner understands differently. We build for that."
        lead="Arviona Labs Pvt Ltd is a deep-tech education startup working across AI, cognitive learning, educational innovation and personalized learning."
        primary={{ label: "Bring Arviona to Your School", href: "/schools#partner" }}
        secondary={{ label: "Experience Arviona", href: "/platform" }}
      />
      <About />

      <Section tone="soft" size="lg">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="eyebrow text-ink/60">Where this goes</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="A direction, not a delivery schedule."
            className="mt-7 text-section font-medium balance"
            delay={0.08}
          />
        </div>
        <ol className="mt-16">
          {HORIZONS.map((h, i) => (
            <ScrollReveal key={h.when} as="li" delay={i * 0.05}>
              <div className="grid gap-2 border-t border-ink/10 py-7 transition-colors duration-500 hover:border-ink/30 md:grid-cols-[160px_1fr] md:items-baseline md:gap-8">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
                  {h.when}
                </span>
                <h3 className="text-[1.25rem] font-medium tracking-[-0.025em] balance">
                  {h.what}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </Section>

      <Research />
      <Vision />
      <BrandThesis />
    </>
  );
}
