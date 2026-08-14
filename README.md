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

## Placeholder content — what to swap later

Every image on the site right now is a hand-built **SVG placeholder** (gradient background, simple icon, and a caption naming the exact file it stands in for), so nothing is a broken image link while real content is pending. To swap one in:

1. Save the real photo using the filename referenced in the placeholder's caption (e.g. `assets/images/hero/hero-home.jpg`).
2. Update the corresponding `<img src="...">` in the HTML from the `.svg` path to your new `.jpg`/`.png` path.

Placeholder locations:
- `assets/images/logo/gls-logo.svg` — replace with the real GLS logo when available
- `assets/images/hero/hero-home.svg` — homepage hero background
- `assets/images/hero/page-banner.svg` — generic banner reused on every interior page (can be replaced with a single real image, or split into page-specific ones)
- `assets/images/about/about-team.svg` — About page / homepage team image
- `assets/images/services/service-*.svg` — one per service (MRO, Jacking & Skidding, Cranes, Used Equipment Supply)
- `assets/images/certifications/badge-*.svg` — ANAB / CT badge artwork

Drop the Word/PDF/JPG/PNG files you're given into `content-source/` so they're versioned in the repo, then use them to update the actual page copy and images above.

## Known gaps / next steps

- **Forms aren't connected yet.** The Contact and Careers forms are fully built (including CV upload on Careers) but only validate on the front end — submitting shows an inline message pointing people to email/phone instead of actually sending anything. When ready, wire them to a service like Formspree, or a small backend, then remove the "not connected yet" note in each page and the corresponding comment in `assets/js/main.js`.
- **Privacy Policy is a generic draft** (`privacy-policy.html`) — not reviewed by legal, and not copied from the original site. Replace before launch.
- **Logo is a placeholder wordmark** — swap in the real GLS Services logo file when available.
- **GitHub repo isn't connected yet** — this project hasn't been `git init`-ed. Once you're happy with the local build, initialize git, commit, and add your new (non-ERP) repo as the remote to publish via GitHub Pages.
