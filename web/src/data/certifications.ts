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
 * Certifications named in the home page credibility strip, below the hero.
 * Bare standard names (no edition years) by design — the strip is a quick
 * credibility scan, and the full detail lives on the Certifications page.
 */
export const homeCertifications = ['ISO 9001', 'ISO 14001', 'ISO 45001', 'API Q2'];
