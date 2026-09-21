# GLS Services — Website

Site for GLS Services (glsserv.com), built with React + TypeScript + Vite. The repo root contains the **built, static output** (what GitHub Pages actually serves); the **source code lives in [`web/`](web/)**.

## Making changes

Always edit the source in `web/`, never the generated files at the repo root — they get overwritten by the next build.

```bash
cd web
npm install        # first time only
npm run dev        # local dev server with hot reload
```

When you're ready to publish a change:

```bash
cd web
npm run build       # writes to web/dist/
cp -r dist/. ..      # copy the build output over the repo root
cd ..
git add -A
git commit -m "..."
git push
```

GitHub Pages (source: `main` branch, `/` root) serves whatever is committed at the repo root, so the copy-and-commit step above is what actually publishes a change.

## Folder structure

```
index.html, about.html, services.html, careers.html,
certifications.html, contact.html, privacy-policy.html   -- built pages (generated, don't hand-edit)
services/                                                  -- 4 built service detail pages (generated)
assets/                                                     -- built JS/CSS bundles + images (generated)
web/                                                        -- React + TypeScript source (edit here)
  src/pages/                                                 -- one folder per site page
  src/components/                                            -- shared Header, Footer, cards, etc.
  src/data/                                                   -- nav links, services, contact info, certifications
  src/styles/                                                 -- design tokens (Stone & Sky palette) + global CSS
content-source/                                              -- drop real Word/PDF/JPG/PNG files here for reference
```

## Real photos — how they're organized

Real GLS photos (logo, equipment, rig backgrounds) live in `content-source/photos/` as originally uploaded, and optimized/resized copies (web-sized JPGs, max ~1920px wide, compressed) are what's actually referenced by the site under `web/public/assets/images/`. If you add new photos:

1. Drop the original file into `content-source/photos/`.
2. Resize/compress it before adding it to `web/public/assets/images/...` — the originals can be several MB each, which is too heavy to serve directly. (The conversion used `sharp`; see git history for the exact script if you need to repeat it.)
3. Update the corresponding image reference in the relevant page under `web/src/pages/` (or in `web/src/data/services.ts` / `certifications.ts` for images driven from shared data).
4. Rebuild and republish per "Making changes" above.

A handful of slots still use the original **SVG placeholders** (gradient + icon + caption naming the file it stands in for), because no matching photo was provided yet:
- `web/public/assets/images/services/service-jacking-skidding.svg` — Skidding System subservice (no dedicated skidding photo yet; Jacking System already uses a real photo)
- `web/public/assets/images/services/service-cranes.svg` — Cranes "Repair & Overhaul" subservice (Cranes "Inspection" already uses a real photo)
- `web/public/assets/images/about/about-team.svg` — homepage/About page team split-image

A few uploaded photos aren't used anywhere yet and are sitting in `content-source/photos/` in reserve: `BOP.jpeg`, `Deadline Anchor.jpg`, `DLA2.png`, plus several extra oil-rig/background shots not assigned to a page (there were more good rig photos than page slots).

## Known gaps / next steps

- **Forms aren't connected yet.** The Contact and Careers forms are fully built (including CV upload on Careers) but only validate on the front end — submitting shows an inline message pointing people to email/phone instead of actually sending anything. When ready, wire them to a service like Formspree, or a small backend, via `web/src/hooks/useFormStub.ts`.
- **Privacy Policy is a generic draft** (`web/src/pages/privacy-policy/PrivacyPolicy.tsx`) — not reviewed by legal, and not copied from the original site. Replace before launch.
- **GitHub Pages isn't enabled yet** — the repo is connected and pushed, but Pages needs to be turned on in the repo's Settings → Pages (source: `main` branch, `/` root) to actually get a live URL.
