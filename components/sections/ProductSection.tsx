import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductDemo } from "@/components/ProductDemo";

export function ProductSection() {
  return (
    <Section tone="light" size="lg" id="product">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-ink/60">The product</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="A learning experience that changes with you."
          className="mt-7 text-section font-medium balance"
          delay={0.08}
        />
      </div>

      <ScrollReveal delay={0.12} className="mt-16">
        <ProductDemo />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mt-6 text-center font-mono text-[0.72rem] text-ink/60">
          Interactive product simulation · live interface demonstration
        </p>
      </ScrollReveal>
    </Section>
  );
}
