# Arviona Labs — Website

The official website for **Arviona Labs Pvt Ltd** — building Cognitive Learning
Intelligence for scalable hyper-personalized learning.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS 3** with a token-driven design system
- **Framer Motion** for scroll narrative and micro-interactions
- **Lucide** icons

No image assets, no UI kit, no analytics. Every visual on the site is drawn in
SVG or CSS so the page stays fast and scales cleanly on any display.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## The Prism visual

`/` and `/platform` render a real WebGL prism — light going in, distinct colours
coming out — as the literal form of the Prism section's argument, next to the
tab-switchable explanation demo. Ported from React Bits'
[Prism](https://reactbits.dev) component (`ogl`, no React wrapper upstream) into
`components/visuals/Prism.tsx`, with:

- **TypeScript throughout** (props, refs, the rotation matrix builder).
- **Lazy-loaded via `next/dynamic` with `ssr: false`** — WebGL and the `ogl`
  runtime never reach the server bundle or a visitor who never scrolls to it.
- **A try/catch around context creation.** WebGL is not guaranteed — blocked by
  browser policy, unavailable on old hardware, refused when too many contexts
  are already live — and the section reads fine from its copy alone, so a
  failure here is silent rather than fatal.
- **`suspendWhenOffscreen`** to stop rendering once it scrolls out of view, and
  a full teardown (canvas removed, GL context explicitly lost) on unmount, so
  navigating away doesn't leak a context.
- **`hueShift={5.7}`**, chosen by rendering the shader at several hues and
  comparing screenshots — the default swings amber/green, which fights the
  site's violet/indigo/blue palette; this value lands on the accent-to-signal
  gradient the rest of the site already uses.
- **`timeScale` set to 0 under `useReducedMotionSafe()`** so the canvas freezes
  rather than spinning for visitors who asked for reduced motion — it still
  renders one frame, it just doesn't animate.
- **`aria-hidden`** on the container: the canvas illustrates the paragraph next
  to it, it doesn't carry information the copy lacks.

## Tests

```bash
npm run dev          # in one terminal
npm run test:smoke   # in another
```

`tests/` drives the locally installed Chrome (via `playwright-core`, no browser
download) and exercises every interactive control on the site — the hero demo,
the Prism selector, the product interface including the wrong-answer hint path,
all disclosures, the partnership form, the mobile menu, navigation, redirects,
keyboard entry and reduced-motion rendering. It also fails the run on any
console error. 65 checks.

## Structure

```
app/
  layout.tsx            root shell, fonts, metadata, nav + footer
  page.tsx              the Arviona experience (homepage)
  platform/             the product and what using it feels like
  intelligence/         "How It Works" — the mechanics, in plain language
  edu-tour/             Edu Tour 2026 programme + outcomes
  schools/              institutional page + partnership form (#partner)
  about/                company, founder, direction
  legal/                privacy, terms
components/
  HeroDemo              the adaptive explanation in the hero
  ProductDemo           the full simulated learning interface
  PrismDemo             one concept, four ways in
  Navbar, Footer, SchoolPartnershipForm
  sections/             composable page sections
  visuals/              SVG systems (intelligence core, prism, pipeline)
  ui/                   Section, AnimatedText, CTA, ScrollReveal
lib/
  site.ts               nav + company constants
  motion.ts             easing and shared variants
  demo.ts               hero demonstration script
  product.ts            product interface content
  pal.ts                PAL architecture content (used on /intelligence)
  prism.ts              Prism lenses (used on /intelligence)
  edutour.ts            Edu Tour agenda, outcomes, facts
```

Retired routes redirect permanently: `/for-schools` → `/schools`,
`/partner` → `/schools#partner`, `/research` → `/#research`.

## Where technical depth lives

Almost nowhere, on purpose.

`/intelligence` is called **How It Works** and it explains exactly that: the six
things that happen between a learner getting stuck and getting an explanation
that works, then the four dials that actually move (explanation, difficulty,
pace, revision timing), then what a school can audit. No model list in the main
flow.

The eleven models appear twice on the whole site, both times folded away: one
sentence plus a collapsed **Under the hood** panel on the homepage, and one more
at the very bottom of `/intelligence`. A visitor never has to read a parts list
to understand the product, and the person who wants one can find it in a click.

The rule: describe what the system *does for a learner*, not what it is
*assembled from*.

## Design system

Tokens live in `app/globals.css` (`:root`) and are exposed to Tailwind through
`tailwind.config.ts`:

- **Surfaces** — `--ink` (near black), `--paper` / `--paper-soft` (off-white)
- **Accents** — `--accent` violet, `--accent-soft`, `--signal` electric blue
- **Type** — Inter for text, JetBrains Mono for system/state labels
- **Rhythm** — `.band` / `.band-tight` section padding, `.shell` max width

Sections alternate dark and light deliberately. Accent colour is reserved for
moments where the site is communicating intelligence, state or interaction —
never for decoration.

## Content rules encoded in this build

- No invented customers, partnerships, funding, user numbers, testimonials,
  awards, research statistics, pilot results or performance improvements.
- The learning demos are labelled as illustrative product simulations, not live
  model output.
- No claims about marks, outcomes, or replacing teachers. The site states the
  opposite: technology should make personalization scalable, and teachers
  remain central.
- The roadmap is presented as a sequence, not as dated commitments.

## The partnership form

`components/SchoolPartnershipForm.tsx` (on `/schools#partner`) is intentionally
**not** wired to a backend. It validates, shows a sending state and renders a confirmation, and it
says plainly in the UI that nothing is transmitted or stored. To make it real,
replace the `handleSubmit` body with a call to a route handler (e.g.
`app/api/partner/route.ts`) and remove the demonstration notices in the form and
in `app/legal/privacy/page.tsx`.

## Performance

Measured on the production build:

- **Animation library: 43KB → 16KB gzipped.** Every animated component uses
  `m.*` under a `LazyMotion` provider (`components/MotionProvider.tsx`) loading
  only the `domAnimation` feature set. Nothing on the site uses layout
  animations, so the heavier bundle is never needed. If you add a `motion.*`
  component it will still work, but it pulls the full library back in — use
  `m.*`.
- **The hero paints without JavaScript.** The headline is the LCP element, so
  its reveal runs on CSS keyframes (`.anim-rise`, `.anim-fade-up`) rather than
  waiting for hydration. Below-the-fold reveals stay JS-driven, where they cost
  nothing.
- **Large point fields animate in CSS**, not one component per dot.
- No images, no icon font, no analytics. Every visual is inline SVG or CSS.

## Accessibility & motion

- Semantic landmarks, a skip link, visible focus rings, labelled form controls,
  and `aria-*` state on every interactive control.
- **Contrast meets WCAG AA.** Dimmed text is floored at `white/50` on ink and
  `ink/60` on paper for small text; lower tones appear only on type large
  enough to qualify for the 3:1 threshold. `lib`-level rule of thumb: if it is
  under 24px, it does not go below those values.
- `prefers-reduced-motion` is honoured in CSS and via `useReducedMotion()` in
  each animated component.
- A `<noscript>` rule un-hides scroll reveals, so the site remains fully
  readable with JavaScript disabled.
- Horizontally scrolling rails (`.snap-rail`) are keyboard-scrollable where
  they carry real content.
