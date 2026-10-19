// Builds the static site into build/ with no dependencies.
// Each page in src/ gets src/styles.css inlined so the first response carries
// everything needed to render, then the gzipped size is checked against the
// ~14 KB a server can send in its first round trip (10 TCP segments).
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

// Leave ~1 KB of the 14.6 KB window for response headers.
const BUDGET = 13 * 1024;
const OUT = 'build';
const PAGES = ['index.html', '404.html'];

const minifyCss = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();

const minifyHtml = (html) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s*\n\s*</g, '><')
    .replace(/\n\s*/g, ' ')
    .trim();

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT);
cpSync('public', OUT, { recursive: true });

const css = minifyCss(readFileSync('src/styles.css', 'utf8'));
let over = false;
for (const page of PAGES) {
  const html = minifyHtml(readFileSync(`src/${page}`, 'utf8')).replace('/*STYLES*/', () => css);
  writeFileSync(`${OUT}/${page}`, html);
  const gz = gzipSync(html, { level: 9 }).length;
  console.log(`${page}: ${html.length} B raw, ${gz} B gzipped (budget ${BUDGET} B)`);
  if (gz > BUDGET) over = true;
}
if (over) {
  console.error('A page is over the 14 KB first-round-trip budget.');
  process.exit(1);
}
