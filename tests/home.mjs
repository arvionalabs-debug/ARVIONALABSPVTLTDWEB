import { chromium } from "playwright-core";

const BASE = "http://localhost:3000";
const pass = [], fail = [];
const ok = (n, c, d = "") => (c ? pass : fail).push(n + (d ? ` — ${d}` : ""));

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const consoleErrors = [];
page.on("console", (m) => {
  if (m.type() === "error") consoleErrors.push(m.text().slice(0, 160));
});
page.on("pageerror", (e) => consoleErrors.push("PAGEERROR: " + e.message.slice(0, 160)));

await page.goto(BASE, { waitUntil: "networkidle" });

// ---- Hero demo ----
await page.waitForTimeout(2200);
const heroAnswer = () => page.locator("section").first().locator("p").filter({ hasText: /Force equals|stubborn|trolley|seatbelts/ }).first();
ok("hero: opening explanation appears", await heroAnswer().count() > 0);

const exampleChip = page.getByRole("button", { name: "Give me an example." }).first();
ok("hero: choice chips render", await exampleChip.count() > 0);
if (await exampleChip.count()) {
  await exampleChip.click();
  await page.waitForTimeout(700);
  const t = await page.locator("section").first().innerText();
  ok("hero: chip changes explanation", /trolley/i.test(t), t.match(/trolley/i) ? "" : "no trolley copy");
}
const simplerChip = page.getByRole("button", { name: "Explain it simpler." }).first();
if (await simplerChip.count()) {
  await simplerChip.click();
  await page.waitForTimeout(700);
  ok("hero: second chip re-adapts", /stubborn/i.test(await page.locator("section").first().innerText()));
}

// ---- Transition Headline ----
const transitionHeading = page.locator("h2").filter({ hasText: "Because no two learners understand the same way." });
ok("home: transition headline renders big and clean", await transitionHeading.count() > 0);

// ---- Platform Explore Teaser on Home ----
const platformCta = page.getByRole("link", { name: "Explore the Interactive Platform" });
ok("home: platform explore CTA present", await platformCta.count() > 0);

// ---- Test Product Simulation on /platform ----
await page.goto(BASE + "/platform", { waitUntil: "networkidle" });
await page.waitForTimeout(500);

await page.locator("#product").scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
const explainBtn = page.getByRole("button", { name: "Explain this" });
ok("platform: mode menu renders", await explainBtn.count() > 0);
if (await explainBtn.count()) {
  await explainBtn.click();
  await page.waitForTimeout(600);
  ok("platform: explain mode opens", /Force equals mass times acceleration/i.test(await page.locator("#product").innerText()));
}

// ---- Ensure 'Under the hood' is removed ----
ok("home: 'Under the hood' removed", (await page.locator("button:has-text('Under the hood')").count()) === 0);

console.log(JSON.stringify({ pass, fail, consoleErrors }, null, 2));
await browser.close();
