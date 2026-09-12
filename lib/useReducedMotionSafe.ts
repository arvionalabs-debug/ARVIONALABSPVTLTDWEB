"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * framer's useReducedMotion reads matchMedia during render: the server always
 * returns false, while a client with the preference set returns true on its
 * very first render. Any markup that branches on it then fails hydration.
 *
 * This reports false until after mount, so the first client render always
 * matches the server, then re-renders with the real preference. Motion is
 * additionally neutralised in CSS via the prefers-reduced-motion block, so the
 * one frame before mount is never actually animated.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted ? Boolean(reduce) : false;
}
