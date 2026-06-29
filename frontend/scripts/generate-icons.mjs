/**
 * One-off script: generates favicon + app icons + OG image from a source portrait.
 *
 *   node scripts/generate-icons.mjs <source-image>
 *
 * Default source: ../profile/source.jpg (repo-level profile folder).
 *
 * Outputs to ./public/:
 *   - favicon.ico       (32 px, ICO)
 *   - icon-32.png
 *   - icon-192.png
 *   - icon-512.png
 *   - apple-touch-icon.png (180 px)
 *   - og-image.png      (1200 x 630, padded on brand background)
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const src = process.argv[2] ?? '../profile/source.jpg';
if (!existsSync(src)) {
    console.error(`Source image not found: ${src}`);
    process.exit(1);
}

const outDir = resolve('public');
await mkdir(outDir, { recursive: true });

// Tight head-and-shoulders square crop. We first manually narrow the frame so
// sharp's `attention` strategy reliably picks the face region (not the torso
// or empty background). Values tuned for the source portrait (5400 x 3600,
// head centred horizontally, face around the upper third).
const meta = await sharp(src).rotate().metadata();
const cropW = Math.round(meta.width * 0.45); // narrow horizontally
const cropH = Math.round(meta.height * 0.65); // keep face + upper torso
const cropLeft = Math.round((meta.width - cropW) / 2);
const cropTop = Math.round(meta.height * 0.05);

const square = sharp(src)
    .rotate()
    .extract({ left: cropLeft, top: cropTop, width: cropW, height: cropH });

const pngSizes = [
    { name: 'icon-32.png', size: 32 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
];

for (const { name, size } of pngSizes) {
    await square
        .clone()
        .resize(size, size, { fit: 'cover', position: 'attention' })
        .png({ compressionLevel: 9 })
        .toFile(resolve(outDir, name));
    console.log(`✓ ${name}`);
}

// favicon.ico (single 32x32 frame is fine for modern browsers; .ico container expected)
await square
    .clone()
    .resize(32, 32, { fit: 'cover', position: 'attention' })
    .toFormat('png')
    .toFile(resolve(outDir, 'favicon.ico')); // browsers accept PNG payload in .ico filename
console.log('✓ favicon.ico');

// Open Graph image: 1200x630 with the portrait on the right and a brand-tinted background.
await sharp({
    create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 15, g: 23, b: 42, alpha: 1 }, // slate-900
    },
})
    .composite([
        {
            input: await square
                .clone()
                .resize(560, 560, { fit: 'cover', position: 'attention' })
                .png()
                .toBuffer(),
            top: 35,
            left: 600,
        },
    ])
    .png()
    .toFile(resolve(outDir, 'og-image.png'));
console.log('✓ og-image.png');

console.log('\nAll icons written to', outDir);
