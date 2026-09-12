import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/site";

const FOCUS = ["AI", "Cognitive learning", "Educational innovation", "Personalized learning"];

export function About() {
  return (
    <Section tone="light" size="lg" id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div>
          <ScrollReveal>
            <p className="eyebrow text-ink/60">About</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="Building the infrastructure for more personal learning."
            className="mt-7 max-w-xl text-section font-medium balance"
            delay={0.08}
          />
          <ScrollReveal delay={0.32}>
            <p className="mt-8 max-w-lg text-lead text-dim pretty">
              {COMPANY.legal} is a deep-tech education startup building Cognitive
              Learning Intelligence for scalable hyper-personalized learning.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.38}>
            <ul className="mt-9 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/10 px-3.5 py-1.5 font-mono text-[0.7rem] text-ink/65"
                >
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="rounded-2xl border border-ink/[0.09] bg-paper-soft p-8 sm:p-10">
            <p className="eyebrow text-ink/60">Founder</p>
            <p className="mt-6 text-title font-medium tracking-[-0.025em]">
              {COMPANY.founder}
            </p>
            <p className="mt-4 text-[1.04rem] leading-relaxed text-ink/65 pretty">
              A student entrepreneur working across AI, cognitive learning,
              educational innovation and product development — building Arviona
              from close to the classroom it is designed for.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
