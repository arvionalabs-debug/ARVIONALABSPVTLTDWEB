import type { ReactNode } from "react";

/**
 * The single section primitive. Tone decides the surface; every band on the
 * site is one of these so vertical rhythm stays consistent.
 */
export function Section({
  children,
  tone = "light",
  size = "md",
  grid = false,
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "soft" | "dark";
  size?: "sm" | "md" | "lg";
  grid?: boolean;
  id?: string;
  className?: string;
}) {
  const surface = {
    light: "bg-paper",
    soft: "bg-paper-soft",
    dark: "dark-band bg-ink",
  }[tone];

  const pad = {
    sm: "py-[clamp(3.5rem,7vw,6rem)]",
    md: "py-[clamp(5rem,10vw,9rem)]",
    lg: "py-[clamp(6.5rem,14vw,13rem)]",
  }[size];

  return (
    <section id={id} className={`relative overflow-hidden ${surface} ${className}`}>
      {grid ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${
            tone === "dark" ? "grid-field" : "grid-field-light"
          }`}
        />
      ) : null}
      <div className={`shell relative ${pad}`}>{children}</div>
    </section>
  );
}
