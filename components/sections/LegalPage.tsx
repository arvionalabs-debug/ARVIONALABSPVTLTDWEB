import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="dark-band relative overflow-hidden bg-ink pb-20 pt-[150px] sm:pt-[180px]">
        <div className="grid-field pointer-events-none absolute inset-0" />
        <div className="shell relative">
          <p className="eyebrow text-white/55">Legal</p>
          <h1 className="mt-8 max-w-3xl text-section font-medium text-white balance">
            {title}
          </h1>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white/50">
            Last updated {updated}
          </p>
        </div>
      </section>
      <section className="bg-paper">
        <div className="shell band-tight">
          <div className="max-w-prose space-y-8 text-[1rem] leading-relaxed text-ink/65 [&_h2]:text-[1.25rem] [&_h2]:font-medium [&_h2]:tracking-[-0.02em] [&_h2]:text-ink">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
