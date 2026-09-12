import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const POINTS = [
  {
    k: "The route is recorded",
    v: "A school can see the path a learner was taken through — which explanations were tried, which were dropped, and why the next step was chosen.",
  },
  {
    k: "Your syllabus sets the bounds",
    v: "Adaptation happens inside what your institution teaches, in the order your institution teaches it. The system decides how, not what.",
  },
  {
    k: "Your rules hold",
    v: "Where an institution sets limits — on pace, on difficulty, on what may be explained and when — those limits are the boundary, not a suggestion.",
  },
];

export function Trust() {
  return (
    <Section tone="soft" size="lg">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <ScrollReveal>
            <p className="eyebrow text-ink/60">For institutions</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="A school shouldn't have to take it on trust."
            className="mt-7 max-w-md text-section font-medium balance"
            delay={0.08}
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-7 max-w-md text-lead text-dim pretty">
              An adaptive system decides things about your students. You should be
              able to see what it decided, and why.
            </p>
          </ScrollReveal>
        </div>

        <dl className="self-center">
          {POINTS.map((p, i) => (
            <ScrollReveal key={p.k} delay={i * 0.07}>
              <div className="border-t border-ink/10 py-7">
                <dt className="text-[1.2rem] font-medium tracking-[-0.02em]">
                  {p.k}
                </dt>
                <dd className="mt-3 text-[1.02rem] leading-relaxed text-ink/65 pretty">
                  {p.v}
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
