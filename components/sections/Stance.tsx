import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Stance() {
  return (
    <Section tone="dark" size="md">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedText
          as="h2"
          text="Technology should make personalization possible at scale."
          className="text-section font-medium text-white balance"
        />
        <ScrollReveal delay={0.35}>
          <p className="mx-auto mt-8 max-w-lg text-lead text-white/50 pretty">
            Not replace the people who teach. Arviona is built to support learners
            and educators — teachers matter as much as they always have.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
