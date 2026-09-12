"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-arv ${
          solid
            ? "border-b border-ink/[0.07] bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-[68px] items-center justify-between"
        >
          <Link
            href="/"
            className={`text-[0.95rem] font-semibold tracking-[0.26em] transition-colors duration-500 ${
              solid ? "text-ink" : "text-white"
            }`}
            aria-label="Arviona Labs — home"
          >
            ARVIONA
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.86rem] font-medium tracking-[-0.005em] transition-colors duration-300 ${
                    solid
                      ? active
                        ? "text-ink"
                        : "text-ink/65 hover:text-ink"
                      : active
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-arv ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/schools#partner"
              className={`hidden rounded-full px-5 py-2.5 text-[0.86rem] font-medium transition-all duration-500 ease-arv sm:inline-flex ${
                solid
                  ? "bg-ink text-white hover:bg-ink/88"
                  : "border border-white/25 text-white hover:border-white/60 hover:bg-white/[0.06]"
              }`}
            >
              Partner With Us
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
                open
                  ? "text-white"
                  : solid
                    ? "text-ink hover:bg-ink/5"
                    : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <m.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 bg-ink text-white lg:hidden"
          >
            <div className="grid-field pointer-events-none absolute inset-0" />
            <div className="shell flex h-full flex-col justify-between pb-12 pt-28">
              <nav aria-label="Mobile">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.6, ease: EASE }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-4 text-[1.75rem] font-medium tracking-[-0.03em]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-white/50" />
                    </Link>
                  </m.li>
                ))}
              </ul>
              </nav>
              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
                className="space-y-4"
              >
                <Link
                  href="/schools#partner"
                  className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-[0.95rem] font-medium text-ink"
                >
                  Partner With Arviona
                </Link>
                <p className="text-center text-[0.8rem] text-white/55">
                  Building Cognitive Learning Intelligence.
                </p>
              </m.div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
