import { chromium } from "playwright-core";
const BASE = "http://localhost:3000";
const pass = [], fail = [], errs = [];
const ok = (n, c, d = "") => (c ? pass : fail).push(n + (d ? ` — ${d}` : ""));

const b = await chromium.launch({ channel: "chrome", headless: true });

// ---------------- MOBILE ----------------
const m = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
m.on("console", (e) => e.type() === "error" && errs.push("mobile: " + e.text().slice(0, 120)));
m.on("pageerror", (e) => errs.push("mobile PAGEERROR " + e.message.slice(0, 120)));
await m.goto(BASE, { waitUntil: "networkidle" });
await m.waitForTimeout(2000);

ok("mobile: no horizontal overflow",
  await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
  "scrollWidth=" + await m.evaluate(() => document.documentElement.scrollWidth));

const burger = m.getByRole("button", { name: "Open menu" });
ok("mobile: menu button present", await burger.count() > 0);
if (await burger.count()) {
  await burger.click();
  await m.waitForTimeout(600);
  ok("mobile: menu opens", await m.getByRole("navigation", { name: "Mobile" }).getByRole("link", { name: "How It Works" }).isVisible());
  ok("mobile: body scroll locked",
    await m.evaluate(() => getComputedStyle(document.body).overflow === "hidden"));

  await m.keyboard.press("Escape");
  await m.waitForTimeout(500);
  const stillOpen = await m.getByRole("button", { name: "Close menu" }).count();
  ok("mobile: Escape closes menu", stillOpen === 0, stillOpen ? "menu stayed open" : "");

  if (stillOpen) await m.getByRole("button", { name: "Close menu" }).click();
  await m.waitForTimeout(400);
  await m.getByRole("button", { name: "Open menu" }).click();
  await m.waitForTimeout(500);
  await m.getByRole("navigation", { name: "Mobile" }).getByRole("link", { name: "Edu Tour" }).click();
  await m.waitForTimeout(1200);
  ok("mobile: menu link navigates", new URL(m.url()).pathname === "/edu-tour", m.url());
  ok("mobile: menu closes after nav", await m.getByRole("button", { name: "Open menu" }).count() > 0);
  ok("mobile: scroll unlocked after nav",
    await m.evaluate(() => getComputedStyle(document.body).overflow !== "hidden"));
}

// hero demo on a phone
await m.goto(BASE, { waitUntil: "networkidle" });
await m.waitForTimeout(2400);
const chip = m.getByRole("button", { name: "Give me an example." });
ok("mobile: hero demo interactive", await chip.count() > 0);
if (await chip.count()) {
  await chip.click();
  await m.waitForTimeout(700);
  ok("mobile: hero demo adapts", /trolley/i.test(await m.locator("section").first().innerText()));
}

// product card rail is swipeable
await m.goto(BASE + "/platform", { waitUntil: "networkidle" });
await m.waitForTimeout(800);
const rail = m.getByRole("group", { name: "Arviona product pillars" });
ok("mobile: product rail present", await rail.count() > 0);
if (await rail.count()) {
  await rail.scrollIntoViewIfNeeded();
  const scrollable = await rail.evaluate((el) => el.scrollWidth > el.clientWidth + 10);
  ok("mobile: product rail scrolls", scrollable);
}

// ---------------- KEYBOARD ----------------
const k = await b.newPage({ viewport: { width: 1440, height: 900 } });
await k.goto(BASE, { waitUntil: "networkidle" });
await k.waitForTimeout(1200);
await k.keyboard.press("Tab");
const first = await k.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 30));
ok("kbd: skip link focused first", /Skip to content/i.test(first || ""), "got: " + first);
await k.keyboard.press("Enter");
await k.waitForTimeout(400);
ok("kbd: skip link targets main", k.url().includes("#main"), k.url());

// focus ring defined
ok("kbd: focus-visible outline defined",
  await k.evaluate(() => [...document.styleSheets].some((s) => {
    try { return [...s.cssRules].some((r) => r.cssText.includes(":focus-visible") && r.cssText.includes("outline")); }
    catch { return false; }
  })));

// ---------------- REDUCED MOTION ----------------
const r = await b.newPage({ viewport: { width: 1440, height: 900 } });
await r.emulateMedia({ reducedMotion: "reduce" });
const rErrs = [];
r.on("console", (e) => e.type() === "error" && rErrs.push(e.text().slice(0, 140)));
r.on("pageerror", (e) => rErrs.push("PAGEERROR " + e.message.slice(0, 140)));
await r.goto(BASE, { waitUntil: "networkidle" });
await r.waitForTimeout(1800);
const rBody = await r.locator("body").innerText();
ok("reduced-motion: hero headline visible", /Learning should adapt/i.test(rBody));
ok("reduced-motion: hero demo populated (not blank)", /Force equals|Let's try it differently/i.test(rBody));
ok("reduced-motion: below-fold copy visible", /Cognitive Learning Intelligence/i.test(rBody));
ok("reduced-motion: no hydration errors", rErrs.filter((e) => /hydrat/i.test(e)).length === 0, rErrs.join(" | "));

console.log(JSON.stringify({ pass, fail, errs: [...new Set(errs)] }, null, 2));
await b.close();
