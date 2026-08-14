# GLS Services — Website

Revamped static site for GLS Services (glsserv.com), built as plain HTML/CSS/JS with no build step, ready to host on GitHub Pages.

## Preview locally

No build tools required. From this folder, run one of:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open the printed local URL (e.g. `http://localhost:3000` or `http://localhost:8000`) in a browser. Opening `index.html` directly via `file://` also works for a quick look, but some browsers restrict things when not served over `http://`, so prefer a local server.

## Folder structure

```
index.html, about.html, services.html, careers.html,
certifications.html, contact.html, privacy-policy.html   -- top-level pages
services/                                                  -- 4 service detail pages
assets/css/style.css                                       -- all styles (design tokens at the top)
assets/js/main.js                                           -- nav toggle, scroll reveal, stat counters, form UI
assets/images/                                              -- logo, hero, about, services, certifications
content-source/                                             -- drop real Word/PDF/JPG/PNG files here for reference
```

There's no templating system, so the header/nav and footer markup is duplicated at the top and bottom of every page. If you change the nav (add a page, rename a link, etc.), update it in every `.html` file — search for `class="site-header"` / `class="site-footer"` to find every instance.

## Real photos — how they're organized

Real GLS photos (logo, equipment, rig backgrounds) live in `content-source/photos/` as originally uploaded, and optimized/resized copies (web-sized JPGs, max ~1920px wide, compressed) are what's actually referenced by the site under `assets/images/`. If you add new photos:

1. Drop the original file into `content-source/photos/`.
2. Resize/compress it before adding it to `assets/images/...` — the originals can be several MB each, which is too heavy to serve directly. (The conversion used `sharp`; see git history for the exact script if you need to repeat it.)
3. Update the corresponding `<img src="...">` in the HTML.

A handful of slots still use the original **SVG placeholders** (gradient + icon + caption naming the file it stands in for), because no matching photo was provided yet:
- `assets/images/services/service-jacking-skidding.svg` — Skidding System subservice (no dedicated skidding photo yet; Jacking System already uses a real photo)
- `assets/images/services/service-cranes.svg` — Cranes "Repair & Overhaul" subservice (Cranes "Inspection" already uses a real photo)
- `assets/images/about/about-team.svg` — homepage/About page team split-image

A few uploaded photos aren't used anywhere yet and are sitting in `content-source/photos/` in reserve: `BOP.jpeg`, `Deadline Anchor.jpg`, `DLA2.png`, plus several extra oil-rig/background shots not assigned to a page (there were more good rig photos than page slots).

## Known gaps / next steps

- **Forms aren't connected yet.** The Contact and Careers forms are fully built (including CV upload on Careers) but only validate on the front end — submitting shows an inline message pointing people to email/phone instead of actually sending anything. When ready, wire them to a service like Formspree, or a small backend, then remove the "not connected yet" note in each page and the corresponding comment in `assets/js/main.js`.
- **Privacy Policy is a generic draft** (`privacy-policy.html`) — not reviewed by legal, and not copied from the original site. Replace before launch.
- **GitHub Pages isn't enabled yet** — the repo is connected and pushed, but Pages needs to be turned on in the repo's Settings → Pages (source: `main` branch, `/` root) to actually get a live URL.
