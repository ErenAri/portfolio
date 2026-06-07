/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Rasterizes the SVG sources in /public into the PNG icon set + OG image.
 * Run with: npm run assets   (requires devDependency @resvg/resvg-js)
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const ACCENT = '#3ee8b5';
const BASE = '#0a0a0a';

const shield = (stroke, sw) =>
  `<path d="M32 9 L51 15.5 V31 C51 42.5 42.6 50.6 32 55 C21.4 50.6 13 42.5 13 31 V15.5 Z" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>` +
  `<path d="M28 25 l-6 7 l6 7" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>` +
  `<line x1="35" y1="39" x2="44" y2="39" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;

// Full-bleed square icon (used for app/apple icons — let the OS round the corners)
const iconSquare = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="${BASE}"/>${shield(ACCENT, 3.2)}</svg>`;

// Maskable: shrink the mark into the ~80% safe zone on a full-bleed background
const iconMaskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="${BASE}"/><g transform="translate(32 32) scale(0.66) translate(-32 -32)">${shield(ACCENT, 3.6)}</g></svg>`;

const png = (svg, size) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();

const out = (name, buf) => {
  writeFileSync(join(pub, name), buf);
  console.log('  wrote', name, `(${buf.length} bytes)`);
};

console.log('Generating icons + OG image…');

const faviconSvg = readFileSync(join(pub, 'favicon.svg'), 'utf8');
out('favicon-32.png', png(faviconSvg, 32));

out('apple-touch-icon.png', png(iconSquare, 180));
out('icon-192.png', png(iconSquare, 192));
out('icon-512.png', png(iconSquare, 512));
out('icon-512-maskable.png', png(iconMaskable, 512));

const ogSvg = readFileSync(join(pub, 'og-image.svg'), 'utf8');
out('og-image.png', png(ogSvg, 1200));

console.log('Done.');
