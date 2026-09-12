/**
 * Interaction smoke tests. Drives the locally installed Chrome against a
 * running dev/prod server (default http://localhost:3000) and exercises every
 * interactive control on the site, plus navigation, redirects, mobile, keyboard
 * and reduced-motion behaviour.
 *
 *   npm run dev          # in one terminal
 *   npm run test:smoke   # in another
 */
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const SUITES = ["home.mjs", "pages.mjs", "responsive.mjs", "prism.mjs"];

const run = (file) =>
  new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(dir, file)], {
      stdio: ["ignore", "pipe", "inherit"],
    });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.on("close", (code) => resolve({ file, code, out }));
  });

let totalPass = 0;
let failures = [];
let errors = [];

for (const file of SUITES) {
  const { code, out } = await run(file);
  if (code !== 0) {
    failures.push(`${file}: suite crashed (exit ${code})`);
    continue;
  }
  let parsed;
  try {
    parsed = JSON.parse(out);
  } catch {
    failures.push(`${file}: could not parse output`);
    continue;
  }
  totalPass += parsed.pass.length;
  failures.push(...parsed.fail.map((f) => `${file}: ${f}`));
  errors.push(...(parsed.errs ?? parsed.consoleErrors ?? []).map((e) => `${file}: ${e}`));
  console.log(`${file.padEnd(16)} ${parsed.pass.length} passed, ${parsed.fail.length} failed`);
}

console.log(`\n${totalPass} checks passed, ${failures.length} failed`);
for (const f of failures) console.log("  FAIL " + f);
for (const e of [...new Set(errors)]) console.log("  CONSOLE " + e);

process.exit(failures.length || errors.length ? 1 : 0);
