/**
 * Equipment GLS supports, with the service scope actually stated in the
 * company's own service copy. Drives the home "Equipment We Support" grid,
 * the Equipment page, the MRO equipment rows and the capability matrix.
 *
 * `scope` flags are only set where the capability is stated somewhere in
 * GLS's own material — an unset flag means "not claimed", not "not possible".
 */
export type ServiceSlug = 'drilling-equipment-mro' | 'jacking-skidding' | 'cranes' | 'used-equipment-supply';

export interface EquipmentScope {
  inspection?: boolean;
  repair?: boolean;
  overhaul?: boolean;
  refurbishment?: boolean;
  installRemoval?: boolean;
}

export interface EquipmentItem {
  slug: string;
  name: string;
  /** One line, technical. No marketing. */
  summary: string;
  /** Two lines for the larger equipment rows on the MRO page. */
  detail: string;
  image: string;
  /** Inspection category / survey type, where GLS states one. */
  inspectionScope?: string;
  scope: EquipmentScope;
  /** The stated service activities for this equipment. */
  activities: string[];
  /** Which service page this equipment's capability is described on. */
  service: ServiceSlug;
  href: string;
  /** Shown in the home page equipment grid. */
  featured?: boolean;
}

const MRO = '/services/drilling-equipment-mro.html';
const JACKING = '/services/jacking-skidding.html';
const CRANES = '/services/cranes.html';

export const equipment: EquipmentItem[] = [
  {
    slug: 'drawworks',
    name: 'Drawworks',
    summary: 'Inspection, repair and overhaul of drawworks assemblies, with maintenance and troubleshooting support.',
    detail:
      'Full inspection, repair and overhaul of drawworks hoisting assemblies. Maintenance and troubleshooting support is provided alongside the overhaul scope.',
    image: '/assets/images/services/drawworks.jpg',
    scope: { inspection: true, repair: true, overhaul: true },
    activities: ['Inspection, repair & overhaul', 'Maintenance & troubleshooting'],
    service: 'drilling-equipment-mro',
    href: MRO,
    featured: true,
  },
  {
    slug: 'mud-pumps',
    name: 'Mud Pumps',
    summary: 'CAT III and CAT IV inspection through to complete refurbishment and overhaul.',
    detail:
      'Mud pump services spanning CAT III and CAT IV inspection through to complete refurbishment and overhaul, with maintenance and troubleshooting support.',
    image: '/assets/images/services/mud-pump-1.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, repair: true, overhaul: true, refurbishment: true },
    activities: [
      'CAT III & CAT IV inspection',
      'Inspection, repair & overhaul',
      'Complete refurbishment and overhaul',
      'Maintenance & troubleshooting',
    ],
    service: 'drilling-equipment-mro',
    href: MRO,
    featured: true,
  },
  {
    slug: 'top-drives',
    name: 'Top Drives',
    summary: 'CAT III and condition inspection, with in-house PLC, VFD and software test capability.',
    detail:
      'CAT III and condition inspection for top drives, with mechanical and electrical troubleshooting supported by in-house PLC, VFD and software test capability.',
    image: '/assets/images/services/top-drive.jpg',
    inspectionScope: 'CAT III & condition inspection',
    scope: { inspection: true, repair: true },
    activities: [
      'CAT III inspection and condition inspection',
      'Mechanical & electrical troubleshooting',
      'In-house PLC, VFD and software test capability',
      'Assistance with overhaul',
    ],
    service: 'drilling-equipment-mro',
    href: MRO,
    featured: true,
  },
  {
    slug: 'rotary-tables',
    name: 'Rotary Tables',
    summary: 'CAT III and CAT IV inspection, refurbishment, overhaul, installation and removal.',
    detail:
      'CAT III and CAT IV inspection of rotary tables, followed by refurbishment or overhaul as the inspection findings require. Installation and removal support is available.',
    image: '/assets/images/services/rotary-table.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, overhaul: true, refurbishment: true, installRemoval: true },
    activities: ['CAT III & CAT IV inspection', 'Refurbishment and overhaul', 'Installation & removal'],
    service: 'drilling-equipment-mro',
    href: MRO,
    featured: true,
  },
  {
    slug: 'iron-roughnecks',
    name: 'Iron Roughnecks',
    summary: 'CAT III and CAT IV inspection, refurbishment, overhaul, installation and removal.',
    detail:
      'CAT III and CAT IV inspection of iron roughnecks, with refurbishment and overhaul carried out against the inspection findings and agreed scope.',
    image: '/assets/images/services/iron-roughneck.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, overhaul: true, refurbishment: true, installRemoval: true },
    activities: ['CAT III & CAT IV inspection', 'Refurbishment and overhaul', 'Installation & removal'],
    service: 'drilling-equipment-mro',
    href: MRO,
    featured: true,
  },
  {
    slug: 'crown-blocks',
    name: 'Crown Blocks',
    summary: 'CAT III and CAT IV inspection, refurbishment, overhaul, installation and removal.',
    detail:
      'CAT III and CAT IV inspection of crown blocks, with refurbishment, overhaul, installation and removal support across the hoisting assembly.',
    image: '/assets/images/services/crown-block.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, overhaul: true, refurbishment: true, installRemoval: true },
    activities: ['CAT III & CAT IV inspection', 'Refurbishment and overhaul', 'Installation & removal'],
    service: 'drilling-equipment-mro',
    href: MRO,
  },
  {
    slug: 'travelling-blocks',
    name: 'Travelling Blocks',
    summary: 'CAT III and CAT IV inspection, refurbishment, overhaul, installation and removal.',
    detail:
      'CAT III and CAT IV inspection of travelling blocks, with refurbishment, overhaul, installation and removal support across the hoisting assembly.',
    image: '/assets/images/services/travelling-block.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, overhaul: true, refurbishment: true, installRemoval: true },
    activities: ['CAT III & CAT IV inspection', 'Refurbishment and overhaul', 'Installation & removal'],
    service: 'drilling-equipment-mro',
    href: MRO,
  },
  {
    slug: 'casing-stabbing-boards',
    name: 'Casing Stabbing Boards',
    summary: 'CAT III and CAT IV inspection, refurbishment, overhaul, installation and removal.',
    detail:
      'CAT III and CAT IV inspection of casing stabbing boards, with refurbishment, overhaul and installation or removal carried out to the agreed scope.',
    image: '/assets/images/services/casing-stabbing-board.jpg',
    inspectionScope: 'CAT III & CAT IV',
    scope: { inspection: true, overhaul: true, refurbishment: true, installRemoval: true },
    activities: ['CAT III & CAT IV inspection', 'Refurbishment and overhaul', 'Installation & removal'],
    service: 'drilling-equipment-mro',
    href: MRO,
  },
  {
    slug: 'jacking-systems',
    name: 'Jacking Systems',
    summary: 'Inspection, repair and complete overhaul of rig jacking systems.',
    detail:
      'Inspection, repair and complete overhaul of all jacking systems used on drilling rigs, backed by experience across 200+ rigs. Gearbox overhaul is provided through partner shops.',
    image: '/assets/images/services/jacking-gear.jpg',
    scope: { inspection: true, repair: true, overhaul: true },
    activities: [
      'Inspection, repair & complete overhaul of all jacking systems',
      'Gearbox overhaul via partner shops',
    ],
    service: 'jacking-skidding',
    href: JACKING,
    featured: true,
  },
  {
    slug: 'skidding-systems',
    name: 'Skidding Systems',
    summary: 'Electrical rack & pinion and hydraulic skidding systems, inspected, repaired and overhauled.',
    detail:
      'Coverage of electrical rack and pinion skidding systems as well as hydraulic skidding systems, from inspection through repair and overhaul.',
    image: '/assets/images/services/service-jacking-skidding.svg',
    scope: { inspection: true, repair: true, overhaul: true },
    activities: [
      'Electrical rack & pinion skidding systems',
      'Hydraulic skidding systems',
      'Inspection, repair & overhaul support',
    ],
    service: 'jacking-skidding',
    href: JACKING,
  },
  {
    slug: 'cranes',
    name: 'Cranes',
    summary: 'Annual and five-year special survey inspection, repair and overhaul.',
    detail:
      'Annual inspections and five-year special survey inspections for all crane types, plus repair and overhaul of electrical and diesel-hydraulic cranes.',
    image: '/assets/images/services/crane.jpg',
    inspectionScope: 'Annual & five-year special survey',
    scope: { inspection: true, repair: true, overhaul: true },
    activities: [
      'Annual inspections for all crane types',
      'Five-year special survey inspections',
      'Electrical & diesel-hydraulic crane repair and overhaul',
    ],
    service: 'cranes',
    href: CRANES,
    featured: true,
  },
];

export const featuredEquipment = equipment.filter((item) => item.featured);

export function equipmentForService(service: ServiceSlug): EquipmentItem[] {
  return equipment.filter((item) => item.service === service);
}

/** Column definitions for the service capability matrix. */
export const capabilityColumns: { key: keyof EquipmentScope; label: string }[] = [
  { key: 'inspection', label: 'Inspection' },
  { key: 'repair', label: 'Repair' },
  { key: 'overhaul', label: 'Overhaul' },
  { key: 'refurbishment', label: 'Refurbishment' },
  { key: 'installRemoval', label: 'Install & Removal' },
];
