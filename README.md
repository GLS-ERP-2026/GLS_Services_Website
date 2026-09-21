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
index.html, about.html, services.html, equipment.html,
projects.html, careers.html, certifications.html,
contact.html, privacy-policy.html                        -- built pages (generated, don't hand-edit)
services/                                                  -- 4 built service detail pages (generated)
assets/                                                     -- built JS/CSS bundles + images (generated)
web/                                                        -- React + TypeScript source (edit here)
  src/pages/                                                 -- one folder per site page
  src/components/                                            -- shared Header, Footer, cards, etc.
  src/data/                                                   -- ALL page content: company stats, equipment, services,
                                                                 process, certifications, projects, inventory, nav, contact
  scripts/gen-html.mjs                                       -- regenerates every *.html entry file from one template
  src/styles/                                                 -- design tokens (Stone & Sky palette) + global CSS
content-source/                                              -- drop real Word/PDF/JPG/PNG files here for reference
```

## Real photos — how they're organized

Real GLS photos (logo, equipment, rig backgrounds) live in `content-source/photos/` as originally uploaded, and optimized/resized copies (web-sized JPGs, max ~1920px wide, compressed) are what's actually referenced by the site under `web/public/assets/images/`. If you add new photos:

1. Drop the original file into `content-source/photos/`.
2. Resize/compress it before adding it to `web/public/assets/images/...` — the originals can be several MB each, which is too heavy to serve directly. (The conversion used `sharp`; see git history for the exact script if you need to repeat it.)
3. Update the corresponding image reference in the relevant page under `web/src/pages/` (or in `web/src/data/services.ts` / `certifications.ts` for images driven from shared data).
4. Rebuild and republish per "Making changes" above.

One slot still uses an original **SVG placeholder** (gradient + icon + caption naming the file it stands in for), because no matching photo was provided yet:
- `web/public/assets/images/services/service-jacking-skidding.svg` — Skidding Systems (no dedicated skidding photo yet; Jacking Systems already uses a real photo)

These placeholders are no longer referenced by any page and can be deleted once you're sure nothing needs them:
`services/service-cranes.svg`, `services/service-mro.svg`, `services/service-used-equipment.svg`,
`about/about-team.svg`, `hero/page-banner.svg`, `certifications/badge-anab.svg`, `certifications/badge-ct.svg`.

A few uploaded photos aren't used anywhere yet and are sitting in `content-source/photos/` in reserve: `BOP.jpeg`, `Deadline Anchor.jpg`, `DLA2.png`, plus several extra oil-rig/background shots not assigned to a page (there were more good rig photos than page slots).


## Content data — single source of truth

All page content lives in `web/src/data/`. Two rules matter:

- **Never hard-code a company statistic in a component.** `data/company.ts` owns every figure, and the
  countries-served count is derived from `data/operatingCountries.ts`, so the headline number and the world map can
  never disagree. Add or remove a country there and every page follows. (The old site claimed "11 countries" in
  prose while the map rendered 17 — that is what this structure exists to prevent.)
- **An unset capability flag means "not claimed", not "not possible."** `data/equipment.ts` and `data/services.ts`
  only set a scope flag where the capability is stated in GLS's own service copy. The capability tables render a
  dash for anything unset, and a footnote says exactly that.

`web/scripts/gen-html.mjs` generates every `*.html` entry file (titles, meta descriptions, og tags, font loading)
from one template. Edit the page list there and run `node scripts/gen-html.mjs` rather than hand-editing the HTML.

## Known gaps / next steps

- **Certificate details are not filled in.** `web/src/data/certifications.ts` leaves `body`, `certificateNo`,
  `validity`, `scope` and `documentHref` undefined. Certificate panels render "Available on request" for each
  missing field rather than inventing one — fill them in and the Certifications and About pages pick them up.
  **Also confirm whether GLS holds API Q2**: it appears nowhere in this repo, so the site makes no API Q2 claim.
- **No project data.** `web/src/data/projects.ts` is an empty array by design. The Projects page, the home page
  project section and the MRO page all show an honest "references available on request" state while it is empty,
  and switch to real cards as soon as entries are added.
- **No used-equipment inventory.** `web/src/data/inventory.ts` is likewise empty; the Used Equipment page shows an
  availability-on-request state plus the listing schema, instead of fake stock.
- **NDT is not claimed anywhere.** Nothing in the source material establishes in-house NDT capability, so the site
  says "inspection and condition assessment" and cites the CAT III / CAT IV scopes that *are* documented. If GLS
  does provide NDT, add it to `data/equipment.ts` and the inspection sections.
- **Forms have no backend — and don't pretend to.** Contact (technical RFQ) and Careers compose a pre-filled
  `mailto:` via `web/src/hooks/useMailtoForm.ts`, open the visitor's own mail client, and print the composed text
  so it can be copied if that fails. Nothing is transmitted by the site, and no submission is ever reported as
  successful. Attachments can't travel through `mailto:`, so both forms tell the visitor to attach documents to the
  email that opens. To wire up a real service (Formspree or similar), replace the body of `handleSubmit` — the
  field-collection logic is reusable as-is, and only then should the "Reference: GLS-XXXXXX" confirmation appear.
- **Privacy Policy is a generic draft** (`web/src/pages/privacy-policy/PrivacyPolicy.tsx`). The structure and a
  banner saying so are in place, but the wording has not been reviewed by legal counsel. Replace before launch.
- **No `og:image`.** Social cards need an absolute URL, which depends on the final domain. Add it to
  `web/scripts/gen-html.mjs` once the domain is settled.
- **GitHub Pages isn't enabled yet** — the repo is connected and pushed, but Pages needs to be turned on in the
  repo's Settings → Pages (source: `main` branch, `/` root) to actually get a live URL.
