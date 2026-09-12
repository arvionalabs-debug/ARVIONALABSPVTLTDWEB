/**
 * Server and client must produce byte-identical markup, and they don't agree on
 * the last bit of Math.sin/cos — which is enough to trip React hydration when
 * those results end up in SVG attributes. These helpers keep generated geometry
 * and pseudo-random values stable across engines.
 */

/** Round to a fixed precision so trig results stringify identically everywhere. */
export function round(n: number, places = 3): number {
  const f = 10 ** places;
  return Math.round(n * f) / f;
}

/**
 * Integer-only hash in [0, 1). Uses Math.imul and bit ops exclusively, so every
 * JS engine returns the same double — unlike a Math.sin-based fake random.
 */
export function hash01(i: number): number {
  let x = Math.imul(i ^ 0x9e3779b9, 0x85ebca6b);
  x ^= x >>> 13;
  x = Math.imul(x, 0xc2b2ae35);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}
