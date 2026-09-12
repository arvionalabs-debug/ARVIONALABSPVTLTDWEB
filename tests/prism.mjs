import { chromium } from "playwright-core";
const BASE = "http://localhost:3000";
const pass = [], fail = [], errs = [];
const ok = (n, c, d = "") => (c ? pass : fail).push(n + (d ? ` — ${d}` : ""));

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
p.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 140)));
p.on("pageerror", (e) => errs.push("PAGEERROR " + e.message.slice(0, 140)));

await p.goto(BASE, { waitUntil: "networkidle" });
const panel = p.locator("#prism-panel");
await panel.scrollIntoViewIfNeeded();
await p.waitForTimeout(1000);

// Verify Prism component renders
ok("prism: panel is visible", await panel.isVisible());

// Selecting a method must switch the explanation.
const theory = p.getByRole("tab", { name: "Theory-first" });
await theory.click();
await p.waitForTimeout(400);
ok("prism: tab switches copy to theory", /limit of the average rate/i.test(await panel.innerText()));
ok("prism: tabpanel wired to tab",
  (await panel.getAttribute("aria-labelledby")) === "prism-tab-theory");

// Test another tab
const analogy = p.getByRole("tab", { name: "Analogy-first" });
await analogy.click();
await p.waitForTimeout(400);
ok("prism: tab switches copy to analogy", /stand on a hill/i.test(await panel.innerText()));
ok("prism: tabpanel wired to analogy tab",
  (await panel.getAttribute("aria-labelledby")) === "prism-tab-analogy");

// Test on platform page as well
await p.goto(BASE + "/platform", { waitUntil: "networkidle" });
const platformPanel = p.locator("#prism-panel");
await platformPanel.scrollIntoViewIfNeeded();
await p.waitForTimeout(500);
ok("prism: renders on /platform page", await platformPanel.isVisible());

console.log(JSON.stringify({ pass, fail, errs: [...new Set(errs)] }, null, 2));
await b.close();
