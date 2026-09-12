import Link from "next/link";
import { NAV_LINKS, COMPANY } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="dark-band relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-70" />
      <div className="shell relative py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-[1rem] font-semibold tracking-[0.26em]">
              ARVIONA LABS
            </p>
            <p className="mt-5 max-w-sm text-[1.04rem] leading-relaxed text-white/65 pretty">
              {COMPANY.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-white/50">Explore</p>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-white/50">Connect</p>
            <ul className="mt-6 space-y-3 text-[0.95rem] text-white/60">
              <li>
                <Link
                  href="/schools#partner"
                  className="transition-colors hover:text-white"
                >
                  Partner With Arviona
                </Link>
              </li>
              <li>
                <Link
                  href="/edu-tour"
                  className="transition-colors hover:text-white"
                >
                  Arviona Edu Tour 2026
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 text-[0.8rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/legal/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-white/70">
              Terms
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white/70">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
