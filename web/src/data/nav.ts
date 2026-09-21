export interface NavLink {
  label: string;
  href: string;
}

/** Primary desktop navigation, left to right. Capabilities carries the services dropdown. */
export const primaryNav: NavLink[] = [
  { label: 'Company', href: '/about.html' },
  { label: 'Capabilities', href: '/services.html' },
  { label: 'Equipment', href: '/equipment.html' },
  { label: 'Projects', href: '/projects.html' },
  { label: 'Quality & QHSE', href: '/certifications.html' },
  { label: 'Careers', href: '/careers.html' },
];

/** Dropdown under Capabilities. */
export const servicesNav: NavLink[] = [
  { label: 'Drilling Equipment MRO', href: '/services/drilling-equipment-mro.html' },
  { label: 'Jacking & Skidding', href: '/services/jacking-skidding.html' },
  { label: 'Crane Services', href: '/services/cranes.html' },
  { label: 'Used Equipment', href: '/services/used-equipment-supply.html' },
];

export const footerCapabilities: NavLink[] = servicesNav;

export const footerCompany: NavLink[] = [
  { label: 'About GLS', href: '/about.html' },
  { label: 'Workshop & Facilities', href: '/about.html#workshop' },
  { label: 'Projects', href: '/projects.html' },
  { label: 'Careers', href: '/careers.html' },
];

export const footerQuality: NavLink[] = [
  { label: 'Certifications', href: '/certifications.html' },
  { label: 'Inspection & Testing', href: '/services/drilling-equipment-mro.html#inspection' },
  { label: 'QHSE', href: '/certifications.html#qhse' },
];

export const footerLegal: NavLink[] = [{ label: 'Privacy Policy', href: '/privacy-policy.html' }];
