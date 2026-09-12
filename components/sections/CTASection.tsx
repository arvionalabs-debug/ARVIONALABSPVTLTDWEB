import { CTA } from "@/components/ui/CTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection({
  eyebrow = "Partner With Arviona",
  title = "Bring Cognitive Learning Intelligence into your school.",
  lead = "The Edu Tour is the fastest way to see how Arviona thinks about learning — delivered in your classroom, for your students.",
  primary = { label: "Bring Arviona to Your School", href: "/schools#partner" },
  secondary = { label: "Explore the Platform", href: "/platform" },
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="dark-band relative overflow-hidden bg-ink">
      <div className="grid-field pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="glow-core pointer-events-none absolute bottom-[-30%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-40"
      />
      <div className="shell band-tight relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-white/55">{eyebrow}</p>
          <h2 className="mt-7 text-section font-medium text-white balance">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/55 pretty">
            {lead}
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <CTA href={primary.href} tone="dark" variant="primary" size="lg">
              {primary.label}
            </CTA>
            {secondary ? (
              <CTA href={secondary.href} tone="dark" variant="secondary" size="lg">
                {secondary.label}
              </CTA>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
