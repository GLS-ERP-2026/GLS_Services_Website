# Equipment photos (Services page cards)

Each folder here is one card on the Services page, under the Mechanical / Electrical / Offshore tabs:

```
content-source/equipment/<tab>/<equipment>/
```

**To add photos:** drop the full-quality originals into the card's folder (`.jpg`, `.jpeg`, `.png`, `.webp`, `.tif`). There's no need to resize them. Every photo in a folder is shown in that card's slideshow, in file-name order, so name them `1.jpg`, `2.jpg`, `3.jpg`… to control the order.

Then rebuild and publish as described in the root README (`cd web && npm run build`, and so on). The build step shrinks each photo to web size and writes it to `web/public/assets/images/equipment/`. **Don't edit that output folder by hand**, because it's regenerated from these originals. Deleting or replacing a photo here updates the site on the next build.

A card with no photos shows a plain placeholder panel. A card with one photo shows it without a slideshow.

**Photo tips**
- Landscape photos work best. The open card shows a wide, roughly 3:2 crop.
- Keep the equipment near the centre of the frame, because the edges get cropped in the narrow card.
- iPhone `.heic` photos can't be read. Export them as JPEG first.

**Adding a new card** (new equipment): add an entry in `web/src/data/equipment.ts`, then create a folder here whose name matches that entry's `slug`.
