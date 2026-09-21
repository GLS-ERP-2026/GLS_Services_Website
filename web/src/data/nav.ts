export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/index.html' },
  { label: 'About Us', href: '/about.html' },
];

export const servicesNav: NavLink[] = [
  { label: 'Drilling Equipment MRO', href: '/services/drilling-equipment-mro.html' },
  { label: 'Jacking & Skidding', href: '/services/jacking-skidding.html' },
  { label: 'Cranes', href: '/services/cranes.html' },
  { label: 'Used Equipment Supply', href: '/services/used-equipment-supply.html' },
];

export const secondaryNav: NavLink[] = [
  { label: 'Careers', href: '/careers.html' },
  { label: 'Certifications', href: '/certifications.html' },
  { label: 'Contact Us', href: '/contact.html' },
];

export const footerQuickLinks: NavLink[] = [
  { label: 'About Us', href: '/about.html' },
  { label: 'Services', href: '/services.html' },
  { label: 'Careers', href: '/careers.html' },
  { label: 'Certifications', href: '/certifications.html' },
  { label: 'Contact Us', href: '/contact.html' },
];
