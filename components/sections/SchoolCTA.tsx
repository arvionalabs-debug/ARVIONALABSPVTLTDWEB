import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTA } from "@/components/ui/CTA";

export function SchoolCTA() {
  return (
    <Section tone="soft" size="lg" grid id="schools">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div>
          <ScrollReveal>
            <p className="eyebrow text-ink/60">For schools</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="Bring the future of learning to your school."
            className="mt-7 max-w-xl text-section font-medium balance"
            delay={0.08}
          />
          <ScrollReveal delay={0.32}>
            <p className="mt-8 max-w-lg text-lead text-dim pretty">
              A two-hour interactive experience introducing students to AI,
              responsible AI usage, modern learning, future skills and the
              opportunities ahead of them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.38}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA href="/schools#partner" size="lg">
                Bring Arviona to Your School
              </CTA>
              <CTA href="/edu-tour" variant="secondary" size="lg">
                Explore the Edu Tour
              </CTA>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="dark-band flex h-full flex-col justify-between rounded-2xl bg-ink p-8 sm:p-10">
            <div>
              <p className="eyebrow text-white/50">Arviona</p>
              <p className="mt-6 text-[2rem] font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.4rem]">
                Edu Tour
                <span className="block text-white/40">2026</span>
              </p>
            </div>
            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-soft">
                The Founding Twenty
              </p>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-white/65">
                The first twenty schools to host the programme.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
