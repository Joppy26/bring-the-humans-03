// bring-the-humans-03 entry: hands in the TikTok video's address.
// The video itself is the entry: an original 20-second vertical ad for
// make.fun, made new for this bounty, posted publicly on TikTok with the
// bounty's line and our play code in its caption. This program only copies
// VIDEO.json (the video's full TikTok address) to the output directory so
// the house can read it and fetch the video's views. It makes no network
// request and draws nothing.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./VIDEO.json', import.meta.url), join(outDir, 'VIDEO.json'));
