import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(root, "src");
const dist = path.join(root, "dist");
await mkdir(dist, { recursive: true });

async function inlineHtml(htmlPath) {
  const base = path.dirname(htmlPath);
  let html = await readFile(htmlPath, "utf8");

  for (const match of [...html.matchAll(/<link\s+rel="stylesheet"\s+href="([^"]+)"\s*\/?>/g)]) {
    const cssPath = path.resolve(base, match[1]);
    const css = await readFile(cssPath, "utf8");
    html = html.replace(match[0], () => `<style>\n${css}\n</style>`);
  }

  for (const match of [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)]) {
    const jsPath = path.resolve(base, match[1]);
    const js = (await readFile(jsPath, "utf8")).replace(/<\/script>/gi, "<\\/script>");
    html = html.replace(match[0], () => `<script>\n${js}\n</script>`);
  }

  return html;
}

async function emit(sourceName, outputName) {
  const html = await inlineHtml(path.join(src, sourceName));
  const output = path.join(dist, outputName);
  await writeFile(output, html);
  return output;
}

const app = await emit("index.html", "Study_Pack.html");
const print = await emit("print.html", "Study_Pack_Print.html");
const timetable = await emit("timetable.html", "Study_Pack_Timetable.html");

function chromePdf(htmlPath, pdfName) {
  const pdfPath = path.join(dist, pdfName);
  const chromium = process.env.CHROMIUM || "chromium";
  execFileSync(chromium, [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-extensions",
    "--no-first-run",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "inherit" });
  return pdfPath;
}

const fullPdf = chromePdf(print, "Study_Pack.pdf");
const timetablePdf = chromePdf(timetable, "Printable_Timetable.pdf");

for (const file of [app, print, timetable, fullPdf, timetablePdf]) {
  const info = await stat(file);
  console.log(`${path.relative(root, file)}  ${(info.size / 1024 / 1024).toFixed(2)} MB`);
}
