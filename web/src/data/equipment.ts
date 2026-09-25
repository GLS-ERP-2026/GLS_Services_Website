import photoManifest from './equipment-photos.generated.json';

export type EquipmentCategory = 'mechanical' | 'electrical' | 'offshore';

export const equipmentCategories: { id: EquipmentCategory; label: string }[] = [
  { id: 'mechanical', label: 'Mechanical' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'offshore', label: 'Offshore' },
];

/** One optimized photo, as written by scripts/optimize-equipment-photos.mjs. */
export interface EquipmentPhoto {
  /** Candidates for srcset, smallest first. */
  sources: { src: string; width: number }[];
  width: number;
  height: number;
}

export interface Equipment {
  category: EquipmentCategory;
  /**
   * Also the photo folder name: originals go in
   * content-source/equipment/<category>/<slug>/.
   */
  slug: string;
  name: string;
  scopes: string[];
  description: string;
}

export interface EquipmentWithPhotos extends Equipment {
  photos: EquipmentPhoto[];
}

// Placeholder until the real descriptions are written.
const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

const CAT_III = 'CAT III';
const DI = 'D&I';
const OVERHAUL = 'Overhaul';

const equipmentList: Equipment[] = [
  // ---- Mechanical ----
  { category: 'mechanical', slug: 'mud-pump', name: 'Mud Pump', scopes: [CAT_III, DI], description: LOREM },
  { category: 'mechanical', slug: 'drawworks', name: 'Drawworks', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'top-drive', name: 'Top Drive', scopes: [CAT_III, DI], description: LOREM },
  { category: 'mechanical', slug: 'crown-block', name: 'Crown Block', scopes: [CAT_III, DI], description: LOREM },
  { category: 'mechanical', slug: 'travelling-block', name: 'Travelling Block', scopes: [CAT_III, DI], description: LOREM },
  { category: 'mechanical', slug: 'iron-roughneck', name: 'Iron Roughneck', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'rotary-table', name: 'Rotary Table', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'deadline-anchor', name: 'Deadline Anchor', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  {
    category: 'mechanical',
    slug: 'rotary-transmission-gearbox',
    name: 'Rotary Transmission Gearbox',
    scopes: [CAT_III, DI, OVERHAUL],
    description: LOREM,
  },
  { category: 'mechanical', slug: 'pipe-handler', name: 'Pipe Handler', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'pipe-spinner', name: 'Pipe Spinner', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'power-slip', name: 'Power Slip', scopes: [DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'crane-blocks', name: 'Crane Blocks', scopes: [CAT_III, DI, OVERHAUL], description: LOREM },
  { category: 'mechanical', slug: 'water-maker', name: 'Water Maker', scopes: [DI, OVERHAUL], description: LOREM },

  // ---- Electrical ----
  { category: 'electrical', slug: 'ac-motors', name: 'AC Motors', scopes: [DI, OVERHAUL, 'Testing'], description: LOREM },
  {
    category: 'electrical',
    slug: 'dc-motor-overhaul',
    name: 'DC Motor Overhaul',
    scopes: [DI, OVERHAUL, 'Testing'],
    description: LOREM,
  },
  {
    category: 'electrical',
    slug: 'mlt-jacking-motor',
    name: 'MLT Jacking Motor',
    scopes: [DI, OVERHAUL, 'Testing'],
    description: LOREM,
  },
  { category: 'electrical', slug: 'mlt-brakes', name: 'MLT Brakes', scopes: [DI, OVERHAUL, 'Recertification'], description: LOREM },
  { category: 'electrical', slug: 'mg-set', name: 'MG Set', scopes: [DI, OVERHAUL], description: LOREM },
  {
    category: 'electrical',
    slug: 'scr-panel',
    name: 'SCR Panel',
    scopes: [DI, OVERHAUL, 'Repair & Recertification'],
    description: LOREM,
  },
  { category: 'electrical', slug: 'cit-kit', name: 'CIT Kit', scopes: ['Testing'], description: LOREM },
  {
    category: 'electrical',
    slug: 'scr-bridges',
    name: 'SCR Bridges',
    scopes: [DI, OVERHAUL, 'Repair & Recertification'],
    description: LOREM,
  },
  { category: 'electrical', slug: 'circuit-breakers', name: 'Circuit Breakers', scopes: [DI, OVERHAUL], description: LOREM },
  { category: 'electrical', slug: 'contactors', name: 'Contactors', scopes: [], description: LOREM },
  { category: 'electrical', slug: 'relays-fuses', name: 'Relays & Fuses', scopes: [], description: LOREM },

  // ---- Offshore ----
  {
    category: 'offshore',
    slug: 'cat-iii-inspection',
    name: 'CAT III Inspection',
    scopes: [
      'Mud Pump',
      'Drawworks',
      'Top Drive',
      'Crown Block',
      'Travelling Block',
      'Deadline Anchor',
      'Iron Roughneck',
      'Casing Stabbing Board',
      'Rotary Table',
      'Rotary Transmission Gearbox',
      'Engines',
      'Water Makers',
    ],
    description: LOREM,
  },
  {
    category: 'offshore',
    slug: 'cat-iv-overhaul',
    name: 'CAT IV Overhaul',
    scopes: [
      'Mud Pump',
      'Drawworks',
      'Top Drive',
      'Crown Block',
      'Travelling Block',
      'Deadline Anchor',
      'Iron Roughneck',
      'Casing Stabbing Board',
      'Rotary Table',
      'Rotary Transmission Gearbox',
      'Water Makers',
    ],
    description: LOREM,
  },
  { category: 'offshore', slug: 'tfs-audit', name: 'TFS Audit', scopes: [], description: LOREM },
  { category: 'offshore', slug: 'ex-survey-remedials', name: 'Ex-Survey & Remedials', scopes: [], description: LOREM },
  { category: 'offshore', slug: 'cit-kit', name: 'CIT Kit', scopes: [], description: LOREM },
  { category: 'offshore', slug: 'electrical-audits', name: 'Electrical Audits', scopes: [], description: LOREM },
  { category: 'offshore', slug: 'preventive-maintenance', name: 'Preventive Maintenance', scopes: [], description: LOREM },
];

const photos = photoManifest as Record<string, EquipmentPhoto[]>;

export const equipment: EquipmentWithPhotos[] = equipmentList.map((item) => ({
  ...item,
  photos: photos[`${item.category}/${item.slug}`] ?? [],
}));
