// Museng entry for makefun-coin-promo-01 (Node 22, standard library only).
//
// The entry is the coin itself: this program only copies LAUNCH.json from the
// repository root to /output, where the house reads the coin's mint and the
// signature of the transaction that created it on pump.fun. The house then
// looks the coin up on pump.fun and judges it as traders see it (logo, name,
// ticker, description, links). Nothing written here is judged.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'LAUNCH.json');
const target = join(OUTPUT_DIR, 'LAUNCH.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${source}: ${(err).message}`);
  process.exit(1);
}
