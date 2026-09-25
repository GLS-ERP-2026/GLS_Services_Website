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
 * `image` is the certification mark, shown on a white tile in both logo rows.
 * The originals are in content-source/photos/certifications/; the ISO marks
 * were trimmed of their white margins and scaled to 300px tall, and the API Q2
 * mark is used as supplied. `width`/`height` are the file's pixel size, so the
 * row reserves each logo's space before it loads. A badge without `image`
 * falls back to a slot carrying its name.
 */
export interface CertificationBadge {
  /** Short label, used on the home page. */
  name: string;
  /** Label with edition, used on the Certifications page. */
  fullName: string;
  /** What the standard governs. Describes the standard, not GLS's performance. */
  description: string;
  icon: 'check' | 'leaf' | 'shield' | 'certificate';
  image?: { src: string; width: number; height: number };
}

export const certificationBadges: CertificationBadge[] = [
  {
    name: 'ISO 9001',
    fullName: 'ISO 9001:2015',
    description:
      'Quality Management System — consistent, customer-focused quality across every service we deliver.',
    icon: 'check',
    image: { src: '/assets/images/certifications/iso-9001.jpg', width: 792, height: 300 },
  },
  {
    name: 'ISO 14001',
    fullName: 'ISO 14001:2015',
    description:
      'Environmental Management System — responsible operations that minimize environmental impact.',
    icon: 'leaf',
    image: { src: '/assets/images/certifications/iso-14001.jpg', width: 792, height: 300 },
  },
  {
    name: 'ISO 45001',
    fullName: 'ISO 45001:2018',
    description:
      'Occupational Health & Safety Management — protecting our people on every job, every time.',
    icon: 'shield',
    image: { src: '/assets/images/certifications/iso-45001.jpg', width: 792, height: 300 },
  },
  {
    name: 'API Q2',
    fullName: 'API Q2 2nd Edition',
    description:
      'Quality management for service supply organizations in the petroleum and natural gas industry, covering service execution, personnel competency and contingency planning.',
    icon: 'certificate',
    image: { src: '/assets/images/certifications/api-q2.jpg', width: 133, height: 160 },
  },
];

export const additionalAccreditation = [
  { name: 'ANAB Certified', badge: '/assets/images/certifications/badge-anab.svg' },
  { name: 'CT Certified', badge: '/assets/images/certifications/ct-certified.png' },
];
