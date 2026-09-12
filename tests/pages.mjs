import { chromium } from "playwright-core";
const BASE = "http://localhost:3000";
const pass = [], fail = [], errs = [];
const ok = (n, c, d = "") => (c ? pass : fail).push(n + (d ? ` — ${d}` : ""));

const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
p.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 140)));
p.on("pageerror", (e) => errs.push("PAGEERROR " + e.message.slice(0, 140)));

// ---------- /intelligence ----------
await p.goto(BASE + "/intelligence", { waitUntil: "networkidle" });
await p.waitForTimeout(800);

const lever = p.locator("button[aria-pressed]").filter({ hasText: /^The pace/ });
ok("how-it-works: walkthrough steps render", /watches how the answer happened/i.test(await p.locator("body").innerText()));
ok("how-it-works: no model list in main flow", !/Forgetting Curve Model/i.test(await p.locator("body").innerText()));
ok("how-it-works: levers render", await lever.count() > 0);
if (await lever.count()) {
  await lever.scrollIntoViewIfNeeded();
  await lever.click();
  await p.waitForTimeout(500);
  ok("how-it-works: lever switches panel", /needs three passes/i.test(await p.locator("body").innerText()));
  ok("how-it-works: lever aria-pressed", (await lever.getAttribute("aria-pressed")) === "true");
}

// Under the hood / models list is removed
ok("how-it-works: no under the hood accordion", await p.locator("button:has-text('Under the hood')").count() === 0);


// ---------- /edu-tour ----------
await p.goto(BASE + "/edu-tour", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
const seg = p.getByRole("button", { name: /AI HALLUCINATION|AI Hallucination/ });
ok("edu: agenda segments render", await seg.count() > 0);
if (await seg.count()) {
  await seg.scrollIntoViewIfNeeded();
  await seg.click();
  await p.waitForTimeout(500);
  ok("edu: segment expands", /confident answers can be wrong/i.test(await p.locator("body").innerText()));
}

// ---------- /schools form ----------
await p.goto(BASE + "/schools#partner", { waitUntil: "networkidle" });
await p.waitForTimeout(700);
ok("schools: #partner anchor scrolled", await p.evaluate(() => window.scrollY > 300), "scrollY=" + await p.evaluate(() => Math.round(window.scrollY)));

const submit = p.getByRole("button", { name: "Request a School Partnership" });
ok("form: submit button present", await submit.count() > 0);
await submit.click();
await p.waitForTimeout(400);
ok("form: blocks empty submit (validation)", !/Request received/i.test(await p.locator("body").innerText()));

await p.fill("#school", "St. Xavier's High School");
await p.fill("#name", "A. Ronald");
await p.fill("#designation", "Principal");
await p.fill("#email", "principal@example.com");
await p.fill("#phone", "9000000000");
await p.fill("#city", "Hyderabad");
await submit.click();
await p.waitForTimeout(1600);
const body = await p.locator("body").innerText();
ok("form: submits and confirms", /Request received/i.test(body));
ok("form: confirmation uses school name", /St\. Xavier/i.test(body));
ok("form: states nothing was sent", /nothing was\s+transmitted|not\s+transmitted/i.test(body));

const another = p.getByRole("button", { name: "Submit another request" });
ok("form: can reset", await another.count() > 0);
if (await another.count()) {
  await another.click();
  await p.waitForTimeout(500);
  ok("form: reset returns to fields", await p.locator("#school").count() > 0);
}

// ---------- navigation flow ----------
await p.goto(BASE, { waitUntil: "networkidle" });
for (const [label, expect] of [["Platform", "/platform"], ["How It Works", "/intelligence"], ["Edu Tour", "/edu-tour"], ["For Schools", "/schools"], ["About", "/about"]]) {
  await p.goto(BASE, { waitUntil: "domcontentloaded" });
  await p.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: label, exact: true }).click();
  await p.waitForURL("**" + expect, { timeout: 5000 }).catch(() => {});
  ok(`nav: ${label} -> ${expect}`, new URL(p.url()).pathname === expect, p.url());
}

// redirects
for (const [from, to] of [["/for-schools", "/schools"], ["/partner", "/schools"], ["/research", "/"]]) {
  await p.goto(BASE + from, { waitUntil: "domcontentloaded" });
  ok(`redirect: ${from} -> ${to}`, new URL(p.url()).pathname === to, p.url());
}

console.log(JSON.stringify({ pass, fail, errs: [...new Set(errs)] }, null, 2));
await b.close();
