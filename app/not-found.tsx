import { CTA } from "@/components/ui/CTA";

export default function NotFound() {
  return (
    <section className="dark-band relative flex min-h-[92svh] items-center overflow-hidden bg-ink">
      <div className="grid-field pointer-events-none absolute inset-0" />
      <div className="shell relative">
        <p className="eyebrow text-white/55">404</p>
        <h1 className="mt-8 max-w-2xl text-hero font-medium text-white balance">
          This path doesn&rsquo;t exist yet.
        </h1>
        <p className="mt-7 max-w-md text-lead text-white/55">
          Not every route adapts. This one didn&rsquo;t.
        </p>
        <div className="mt-11 flex flex-wrap gap-3">
          <CTA href="/" tone="dark">
            Back to Arviona
          </CTA>
          <CTA href="/edu-tour" tone="dark" variant="secondary">
            Explore the Edu Tour
          </CTA>
        </div>
      </div>
    </section>
  );
}
