import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OneToMany } from "@/components/visuals/OneToMany";

export function Problem() {
  return (
    <>
      <Section tone="light" size="lg">
        <AnimatedText
          as="h2"
          text="Education is still largely one-size-fits-all."
          className="max-w-3xl text-section font-medium balance"
        />
        <ScrollReveal delay={0.1} className="snap-rail mt-16 overflow-x-auto pb-2">
          <OneToMany />
        </ScrollReveal>
      </Section>

      <Section tone="soft" size="lg" grid>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText
            as="h2"
            text="The problem isn't always ability."
            className="text-section font-medium balance"
          />
          <ScrollReveal delay={0.35}>
            <p className="mx-auto mt-8 max-w-xl text-lead text-dim pretty">
              Sometimes the explanation simply doesn&rsquo;t meet the learner where
              they are.
            </p>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
