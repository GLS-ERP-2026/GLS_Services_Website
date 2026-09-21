export const isoCertifications = [
  {
    title: 'ISO 9001:2015',
    description: 'Quality Management System — consistent, customer-focused quality across every service we deliver.',
    icon: 'check',
  },
  {
    title: 'ISO 14001:2015',
    description: 'Environmental Management System — responsible operations that minimize environmental impact.',
    icon: 'leaf',
  },
  {
    title: 'ISO 45001:2015',
    description: 'Occupational Health & Safety Management — protecting our people on every job, every time.',
    icon: 'shield',
  },
];

export const additionalAccreditation = [
  { name: 'ANAB Certified', badge: '/assets/images/certifications/badge-anab.svg' },
  { name: 'CT Certified', badge: '/assets/images/certifications/badge-ct.svg' },
];

/**
 * Certifications shown as a logo row — in the credibility strip below the home
 * hero and again, larger, in the home Certifications section.
 *
 * Bare standard names (no edition years) by design: a logo needs a short label,
 * and the full detail belongs on the Certifications page.
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
  name: string;
  image?: string;
}

export const certificationBadges: CertificationBadge[] = [
  { name: 'ISO 9001' },
  { name: 'ISO 14001' },
  { name: 'ISO 45001' },
  { name: 'API Q2' },
];
