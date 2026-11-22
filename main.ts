// news-image-20261122 — entry program (Node 22, standard library only).
//
// The front page for Sunday 22 November 2026 is drawn once and shipped
// in this repository as entry.png. This program copies that file, byte
// for byte, into the output directory the grader hands it through
// MAKEFUN_OUTPUT_DIR (falling back to /output). No network access, no
// randomness, no clock reads: the bytes written are exactly the bytes
// stored here, so running the program twice produces identical output.
//
// After copying, the program hashes the file it just wrote and compares
// that digest with the hash of the bundled entry.png. A truncated write,
// a disk error, or a stray modification makes the two digests differ,
// and the program fails loudly instead of silently shipping a corrupt
// image.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

function sha256Hex(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  fs.mkdirSync(outDir, { recursive: true });

  const here = path.dirname(fileURLToPath(import.meta.url));
  const source = path.join(here, 'entry.png');
  const target = path.join(outDir, 'entry.png');

  const bundled = fs.readFileSync(source);
  const expected = sha256Hex(bundled);
  fs.copyFileSync(source, target);

  const written = fs.readFileSync(target);
  const actual = sha256Hex(written);
  if (actual !== expected) {
    throw new Error(
      `entry.png failed post-write verification: wrote ${actual}, ` +
        `expected ${expected}`,
    );
  }
  console.log(`entry.png copied to ${target} and verified: ${actual}`);
}

main();
