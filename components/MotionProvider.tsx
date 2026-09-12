"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM animation feature set instead of the full library.
 * Every animated component uses `m.*` rather than `motion.*` so the heavier
 * bundle is never pulled in. Layout animations are deliberately not included —
 * nothing on the site needs them.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
