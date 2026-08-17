export interface ServiceSummary {
  slug: 'drilling-equipment-mro' | 'jacking-skidding' | 'cranes' | 'used-equipment-supply';
  title: string;
  blurb: string;
  homeBlurb: string;
  image: string;
  href: string;
}

export const services: ServiceSummary[] = [
  {
    slug: 'drilling-equipment-mro',
    title: 'Drilling Equipment MRO',
    homeBlurb:
      'Inspection, repair & overhaul for drawworks, mud pumps, top drives, crown & travelling blocks, rotary tables and more.',
    blurb:
      'Inspection, repair & overhaul for drawworks, mud pumps, top drives, crown & travelling blocks, rotary tables, iron roughnecks and casing stabbing boards.',
    image: '/assets/images/services/drawworks.jpg',
    href: '/services/drilling-equipment-mro.html',
  },
  {
    slug: 'jacking-skidding',
    title: 'Jacking & Skidding',
    homeBlurb:
      'Inspection, repair and complete overhaul of jacking systems, plus electrical rack & pinion and hydraulic skidding systems.',
    blurb:
      "Inspection, repair and complete overhaul of jacking systems — with 200+ rigs of experience — plus electrical rack & pinion and hydraulic skidding systems.",
    image: '/assets/images/services/jacking-gear.jpg',
    href: '/services/jacking-skidding.html',
  },
  {
    slug: 'cranes',
    title: 'Cranes',
    homeBlurb: 'Annual and five-year special survey inspections, plus repair & overhaul for electrical and diesel-hydraulic cranes.',
    blurb:
      'Annual inspections, five-year special survey inspections, and repair & overhaul for electrical and diesel-hydraulic cranes with API-approved technicians.',
    image: '/assets/images/services/crane.jpg',
    href: '/services/cranes.html',
  },
  {
    slug: 'used-equipment-supply',
    title: 'Used Equipment Supply',
    homeBlurb: 'Reusable, reconditioned marine machinery and spare parts sourced through a global network of ship-breaking yards.',
    blurb: "Reusable, reconditioned marine machinery and spare parts sourced through GLS's global network of ship-breaking yards.",
    image: '/assets/images/services/used-equipment.jpg',
    href: '/services/used-equipment-supply.html',
  },
];

export function relatedServices(excludeSlug: ServiceSummary['slug']): ServiceSummary[] {
  return services.filter((s) => s.slug !== excludeSlug);
}
