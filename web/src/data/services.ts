/** Service-level scope, used by the Services page comparison table. */
export interface ServiceScope {
  inspection?: boolean;
  repair?: boolean;
  overhaul?: boolean;
  refurbishment?: boolean;
  supply?: boolean;
}

export interface ServiceSummary {
  slug: 'drilling-equipment-mro' | 'jacking-skidding' | 'cranes' | 'used-equipment-supply';
  /** "01" — "04", used as the technical marker on the Services page. */
  index: string;
  title: string;
  /** Where the service is delivered, in plain words rather than a checkbox. */
  delivery: string;
  scope: ServiceScope;
  /** One sentence. Used on the home capability cards. */
  homeBlurb: string;
  /** Fuller description for the Services page and page banners. */
  blurb: string;
  /** Short list of what falls under this service. */
  covers: string[];
  image: string;
  href: string;
  /** Specific CTA for this service — never a bare "Learn More". */
  cta: string;
}

export const services: ServiceSummary[] = [
  {
    slug: 'drilling-equipment-mro',
    index: '01',
    title: 'Drilling Equipment MRO',
    delivery: 'Workshop & Field',
    scope: { inspection: true, repair: true, overhaul: true, refurbishment: true },
    homeBlurb:
      'Inspection, disassembly, repair, overhaul, assembly and testing of drilling and rig equipment.',
    blurb:
      'Inspection, repair and overhaul for drawworks, mud pumps, top drives, crown and travelling blocks, rotary tables, iron roughnecks and casing stabbing boards.',
    covers: [
      'Drawworks',
      'Mud Pumps',
      'Top Drives',
      'Rotary Tables',
      'Iron Roughnecks',
      'Crown & Travelling Blocks',
      'Casing Stabbing Boards',
    ],
    image: '/assets/images/services/drawworks.jpg',
    href: '/services/drilling-equipment-mro.html',
    cta: 'Explore MRO',
  },
  {
    slug: 'jacking-skidding',
    index: '02',
    title: 'Jacking & Skidding',
    delivery: 'Workshop & Field',
    scope: { inspection: true, repair: true, overhaul: true },
    homeBlurb: 'Inspection, repair and complete overhaul of jacking and skidding systems.',
    blurb:
      'Inspection, repair and complete overhaul of jacking systems — with 200+ rigs of experience — plus electrical rack & pinion and hydraulic skidding systems.',
    covers: ['Jacking Systems', 'Skidding Systems', 'Hydraulic Systems', 'Field Service & Support'],
    image: '/assets/images/services/jacking-gear.jpg',
    href: '/services/jacking-skidding.html',
    cta: 'Explore Jacking & Skidding',
  },
  {
    slug: 'cranes',
    index: '03',
    title: 'Crane Services',
    delivery: 'Workshop & Field',
    scope: { inspection: true, repair: true, overhaul: true },
    homeBlurb: 'Inspection, maintenance, repair and special survey support for crane systems.',
    blurb:
      'Annual inspections, five-year special survey inspections, and repair & overhaul for electrical and diesel-hydraulic cranes with API-approved technicians.',
    covers: ['Annual Inspection', 'Special Survey Support', 'Maintenance', 'Repair & Overhaul'],
    image: '/assets/images/services/crane.jpg',
    href: '/services/cranes.html',
    cta: 'Explore Crane Services',
  },
  {
    slug: 'used-equipment-supply',
    index: '04',
    title: 'Used Equipment',
    delivery: 'Supply',
    scope: { inspection: true, refurbishment: true, supply: true },
    homeBlurb: 'Assessment, refurbishment and supply of used marine machinery and spare parts.',
    blurb:
      "Reusable, reconditioned marine machinery and spare parts sourced through GLS's global network of ship-breaking yards.",
    covers: ['Condition Assessment', 'Refurbishment', 'Marine Machinery', 'Spare Parts'],
    image: '/assets/images/services/used-equipment.jpg',
    href: '/services/used-equipment-supply.html',
    cta: 'View Used Equipment',
  },
];

export function relatedServices(excludeSlug: ServiceSummary['slug']): ServiceSummary[] {
  return services.filter((s) => s.slug !== excludeSlug);
}

/** Column definitions for the Services page comparison table. */
export const serviceScopeColumns: { key: keyof ServiceScope; label: string }[] = [
  { key: 'inspection', label: 'Inspection' },
  { key: 'repair', label: 'Repair' },
  { key: 'overhaul', label: 'Overhaul' },
  { key: 'refurbishment', label: 'Refurbishment' },
  { key: 'supply', label: 'Supply' },
];
