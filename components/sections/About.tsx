import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/site";

const FOCUS = ["AI", "Cognitive learning", "Educational innovation", "Personalized learning"];

export function About() {
  return (
    <Section tone="light" size="lg" id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
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
          <div className="overflow-hidden rounded-3xl border border-ink/[0.09] bg-paper-soft p-8 sm:p-10 transition-all duration-400 hover:shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-ink/5 shadow-md">
                <Image
                  src="/founder.png"
                  alt={COMPANY.founder}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <p className="eyebrow text-accent font-semibold">Founder</p>
                <h3 className="mt-1.5 text-[1.45rem] font-medium tracking-[-0.025em] text-ink">
                  {COMPANY.founder}
                </h3>
                <p className="font-mono text-[0.75rem] uppercase tracking-wider text-ink/50 mt-1">
                  Founder & CEO
                </p>
              </div>
            </div>

            <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/70 pretty border-t border-ink/[0.08] pt-6">
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
