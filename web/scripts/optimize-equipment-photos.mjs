/**
 * Turns the original equipment photos into web-sized copies for the Services
 * page cards, and writes the manifest the page reads them from.
 *
 *   originals   content-source/equipment/<category>/<slug>/*   (full quality, any size)
 *   output      web/public/assets/images/equipment/<category>/<slug>/*.jpg
 *   manifest    web/src/data/equipment-photos.generated.json
 *
 * Runs automatically before `npm run dev` and `npm run build`; `npm run photos`
 * runs it alone. Photos appear in each card's slideshow in file-name order.
 *
 * Quality: each photo is only ever scaled down, never up, to the two widths
 * below (the larger one covers an open card on a 2x / retina screen), and saved
 * as high-quality JPEG with full-resolution colour (4:4:4, no chroma
 * subsampling), which is visually indistinguishable from the original at that
 * size. A small original that needs no resizing is used byte-for-byte when
 * that is the smaller file.
 *
 * Output names carry a hash of the original, so an unchanged photo is skipped on
 * the next run, a replaced photo gets a new URL (no stale browser caches), and
 * outputs whose original was deleted are removed.
 */
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join, parse, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = resolve(WEB_ROOT, '../content-source/equipment');
const PUBLIC_DIR = resolve(WEB_ROOT, 'public');
const OUTPUT_DIR = join(PUBLIC_DIR, 'assets/images/equipment');
const MANIFEST = resolve(WEB_ROOT, 'src/data/equipment-photos.generated.json');

/** Collapsed card at 2x, and an open card (~1040px wide) at 2x. */
const WIDTHS = [1000, 2200];
const JPEG = { quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4', progressive: true };
/** Bump when the settings above change, so every photo is regenerated. */
const SETTINGS_VERSION = 'v2';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.avif', '.heic', '.heif']);

const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

async function subdirs(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort(collator.compare);
}

async function imagesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && IMAGE_EXTENSIONS.has(extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .sort(collator.compare);
}

function safeName(fileName) {
  return (
    parse(fileName)
      .name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'photo'
  );
}

async function walkFiles(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkFiles(full)));
    else out.push(full);
  }
  return out;
}

async function removeEmptyDirs(dir) {
  if (!existsSync(dir)) return;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) await removeEmptyDirs(join(dir, entry.name));
  }
  if (dir !== OUTPUT_DIR && (await readdir(dir)).length === 0) await rmdir(dir);
}

const toUrl = (file) => '/' + relative(PUBLIC_DIR, file).split(sep).join('/');

async function main() {
  const manifest = {};
  const expected = new Set();
  let written = 0;
  let failed = 0;

  for (const category of await subdirs(SOURCE_DIR)) {
    for (const slug of await subdirs(join(SOURCE_DIR, category))) {
      const sourceFolder = join(SOURCE_DIR, category, slug);
      const outFolder = join(OUTPUT_DIR, category, slug);
      const photos = [];

      for (const fileName of await imagesIn(sourceFolder)) {
        const sourcePath = join(sourceFolder, fileName);
        try {
          const buffer = await readFile(sourcePath);
          const hash = createHash('sha1').update(SETTINGS_VERSION).update(buffer).digest('hex').slice(0, 8);
          // rotate() applies the camera's EXIF orientation before measuring.
          const meta = await sharp(buffer).rotate().metadata();
          const upright = (meta.orientation ?? 1) >= 5;
          const srcWidth = upright ? meta.height : meta.width;
          const srcHeight = upright ? meta.width : meta.height;

          // Never upscale: the largest size is capped at the original's width,
          // and a smaller size close to that (within 20%) is not worth a file.
          const largest = Math.min(WIDTHS[WIDTHS.length - 1], srcWidth);
          const widths = [...WIDTHS.filter((w) => w * 1.2 < largest), largest];
          const sources = [];
          for (const width of widths) {
            const outPath = join(outFolder, `${safeName(fileName)}-${hash}-${width}.jpg`);
            expected.add(outPath);
            if (!existsSync(outPath)) {
              await mkdir(outFolder, { recursive: true });
              const encoded = await sharp(buffer)
                .rotate()
                .resize({ width, withoutEnlargement: true })
                .flatten({ background: '#ffffff' })
                .jpeg(JPEG)
                .toBuffer();
              // An original JPEG that needs no resizing and is already smaller
              // than the re-encode is used as-is: byte-identical, so no quality
              // is lost at all. Only when it carries no EXIF, which can hold the
              // camera's GPS position.
              const keepOriginal =
                width === srcWidth && meta.format === 'jpeg' && !meta.exif && buffer.length < encoded.length;
              await writeFile(outPath, keepOriginal ? buffer : encoded);
              written++;
            }
            sources.push({ src: toUrl(outPath), width });
          }
          photos.push({ sources, width: srcWidth, height: srcHeight });
        } catch (err) {
          failed++;
          console.warn(`[equipment photos] Skipped ${relative(WEB_ROOT, sourcePath)}: ${err.message}`);
        }
      }

      if (photos.length) manifest[`${category}/${slug}`] = photos;
    }
  }

  let removed = 0;
  for (const file of await walkFiles(OUTPUT_DIR)) {
    if (!expected.has(file)) {
      await rm(file);
      removed++;
    }
  }
  await removeEmptyDirs(OUTPUT_DIR);

  const json = JSON.stringify(manifest, null, 2) + '\n';
  const previous = existsSync(MANIFEST) ? await readFile(MANIFEST, 'utf8') : '';
  if (json !== previous) await writeFile(MANIFEST, json);

  const count = Object.values(manifest).reduce((n, list) => n + list.length, 0);
  console.log(
    `[equipment photos] ${count} photo(s) across ${Object.keys(manifest).length} card(s); ` +
      `${written} file(s) written, ${removed} stale file(s) removed${failed ? `, ${failed} failed` : ''}.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
