/**
 * Generates the per-page HTML entry files from one template, so the head of
 * every page (font loading, favicon, viewport, theme colour, social tags) stays
 * identical and a change only has to be made once.
 *
 * Run with: node scripts/gen-html.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Keep in sync with data/company.ts — used in meta descriptions only. */
const COUNTRIES = 17;

const pages = [
  {
    file: 'index.html',
    entry: '/src/pages/home/main.tsx',
    title: 'GLS Services | Drilling Equipment MRO, Jacking & Skidding, Cranes | Dubai, UAE',
    description: `GLS Services provides inspection, repair, overhaul and field support for drilling and rig equipment. ISO 9001, ISO 14001 and ISO 45001 certified, with project experience across ${COUNTRIES} countries.`,
  },
  {
    file: 'about.html',
    entry: '/src/pages/about/main.tsx',
    title: 'Company | GLS Services',
    description: `GLS Services delivers equipment inspection, maintenance, repair and overhaul for the oil & gas drilling sector from a workshop in Hamriyah Free Zone, Sharjah, with experience across ${COUNTRIES} countries.`,
  },
  {
    file: 'services.html',
    entry: '/src/pages/services/main.tsx',
    title: 'Capabilities | Engineering & MRO Services | GLS Services',
    description:
      'Drilling equipment MRO, jacking & skidding, crane services and used equipment supply — four service lines covering inspection, repair, overhaul and field support.',
  },
  {
    file: 'equipment.html',
    entry: '/src/pages/equipment/main.tsx',
    title: 'Equipment We Support | GLS Services',
    description:
      'Drawworks, mud pumps, top drives, rotary tables, iron roughnecks, crown and travelling blocks, jacking and skidding systems and cranes — with the published service scope for each.',
  },
  {
    file: 'projects.html',
    entry: '/src/pages/projects/main.tsx',
    title: 'Project Experience | GLS Services',
    description: `Equipment and field services delivered across ${COUNTRIES} countries in the Middle East, Europe, Asia and Africa. Equipment-specific project references available on request.`,
  },
  {
    file: 'certifications.html',
    entry: '/src/pages/certifications/main.tsx',
    title: 'Quality & QHSE | ISO 9001, ISO 14001, ISO 45001 | GLS Services',
    description:
      'GLS Services holds ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 management system certifications. Certificates, policies and QHSE documentation available on request.',
  },
  {
    file: 'careers.html',
    entry: '/src/pages/careers/main.tsx',
    title: 'Careers | GLS Services',
    description:
      'Mechanical, electrical, inspection, workshop, field service, engineering and administration roles at GLS Services. Submit your CV for review against current and upcoming requirements.',
  },
  {
    file: 'contact.html',
    entry: '/src/pages/contact/main.tsx',
    title: 'Contact | Request a Technical Quote | GLS Services',
    description:
      'Send GLS Services your equipment details, service requirement or RFQ. Head office in Jumeirah Lakes Towers, Dubai; workshop in Hamriyah Free Zone, Sharjah.',
  },
  {
    file: 'privacy-policy.html',
    entry: '/src/pages/privacy-policy/main.tsx',
    title: 'Privacy Policy | GLS Services',
    description: 'How GLS Services handles information submitted through this website.',
  },
  {
    file: 'services/drilling-equipment-mro.html',
    entry: '/src/pages/services/drilling-equipment-mro/main.tsx',
    title: 'Drilling Equipment MRO | Inspection, Repair & Overhaul | GLS Services',
    description:
      'Inspection, repair and overhaul of drawworks, mud pumps, top drives, rotary tables, iron roughnecks and hoisting assemblies, including CAT III and CAT IV inspection scopes.',
  },
  {
    file: 'services/jacking-skidding.html',
    entry: '/src/pages/services/jacking-skidding/main.tsx',
    title: 'Jacking & Skidding Equipment Services | GLS Services',
    description:
      'Inspection, repair and complete overhaul of rig jacking systems — 200+ rigs of experience — plus electrical rack & pinion and hydraulic skidding systems, with field support.',
  },
  {
    file: 'services/cranes.html',
    entry: '/src/pages/services/cranes/main.tsx',
    title: 'Crane Inspection, Maintenance & Repair | GLS Services',
    description:
      'Annual and five-year special survey inspections for all crane types, plus maintenance, repair and overhaul of electrical and diesel-hydraulic cranes by API-approved technicians.',
  },
  {
    file: 'services/used-equipment-supply.html',
    entry: '/src/pages/services/used-equipment-supply/main.tsx',
    title: 'Used Equipment | Inspected & Refurbished | GLS Services',
    description:
      'Reusable, reconditioned marine machinery and spare parts sourced through an established network of ship-breaking yards. Condition stated as inspected, refurbished or as-is.',
  },
];

/** Minimal HTML escaping for the values interpolated into the head. */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function template({ title, description, entry }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<meta name="theme-color" content="#263238" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="GLS Services" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<link rel="icon" type="image/png" href="%BASE_URL%assets/images/logo/gls-logo-mark.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
</head>
<body>
<div id="root"></div>
<script type="module" src="${entry}"></script>
</body>
</html>
`;
}

for (const page of pages) {
  const target = resolve(root, page.file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, template(page), 'utf8');
  console.log('wrote', page.file);
}
