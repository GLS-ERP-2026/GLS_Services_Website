/**
 * Certifications held by GLS Services.
 *
 * One list drives both places they appear. The home page uses the short `name`
 * — a logo needs a short label and the strip is a quick credibility scan — and
 * the Certifications page uses `fullName`, which carries the edition a
 * procurement reviewer would actually check.
 *
 * Note on ISO 45001: it has only ever been published as ISO 45001:2018. Earlier
 * copy across this site said "ISO 45001-2015" / "ISO 45001:2015", which is not a
 * real edition of that standard.
 *
 * `image` is undefined until the real logo file is supplied. While it is unset
 * the row renders a reserved slot at the logo's aspect ratio with the name in
 * it, so the layout is final but no broken image can ever appear. To publish a
 * logo, drop the file at the path below and set `image` — nothing else changes:
 *
 *   web/public/assets/images/certifications/iso-9001.png
 *                                           iso-14001.png
 *                                           iso-45001.png
 *                                           api-q2.png
 *
 * Transparent PNG or SVG reads best on the light background.
 */
export interface CertificationBadge {
  /** Short label, used on the home page. */
  name: string;
  /** Label with edition, used on the Certifications page. */
  fullName: string;
  /** What the standard governs. Describes the standard, not GLS's performance. */
  description: string;
  icon: 'check' | 'leaf' | 'shield' | 'certificate';
  image?: string;
}

export const certificationBadges: CertificationBadge[] = [
  {
    name: 'ISO 9001',
    fullName: 'ISO 9001:2015',
    description:
      'Quality Management System — consistent, customer-focused quality across every service we deliver.',
    icon: 'check',
  },
  {
    name: 'ISO 14001',
    fullName: 'ISO 14001:2015',
    description:
      'Environmental Management System — responsible operations that minimize environmental impact.',
    icon: 'leaf',
  },
  {
    name: 'ISO 45001',
    fullName: 'ISO 45001:2018',
    description:
      'Occupational Health & Safety Management — protecting our people on every job, every time.',
    icon: 'shield',
  },
  {
    name: 'API Q2',
    fullName: 'API Q2 2nd Edition',
    description:
      'Quality management for service supply organizations in the petroleum and natural gas industry, covering service execution, personnel competency and contingency planning.',
    icon: 'certificate',
  },
];

export const additionalAccreditation = [
  { name: 'ANAB Certified', badge: '/assets/images/certifications/badge-anab.svg' },
  { name: 'CT Certified', badge: '/assets/images/certifications/badge-ct.svg' },
];
