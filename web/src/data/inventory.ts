/**
 * Used equipment inventory.
 *
 * ⚠️ EMPTY BY DESIGN — no live inventory has been supplied, and the page must
 * not display fabricated stock. While this array is empty the Used Equipment
 * page shows an availability-on-request state instead of listing cards.
 *
 * The shape below is what a future inventory feed should populate. Add entries
 * here (or swap the import for a fetch) and the listing renders automatically.
 */
export type EquipmentCondition = 'Inspected' | 'Refurbished' | 'As-Is';

export interface InventoryItem {
  id: string;
  manufacturer: string;
  model: string;
  serialNumber?: string;
  equipmentType: string;
  condition: EquipmentCondition;
  /** e.g. "Visual and dimensional inspection completed" */
  inspectionStatus?: string;
  location?: string;
  availability?: string;
  image?: string;
}

export const inventory: InventoryItem[] = [];

/** Condition categories, explained. Shown whether or not stock is listed. */
export const conditionCategories: { label: EquipmentCondition; description: string }[] = [
  {
    label: 'Inspected',
    description: 'Condition has been assessed and recorded. Supplied in its inspected state, with the findings shared.',
  },
  {
    label: 'Refurbished',
    description: 'Repair or refurbishment has been carried out against the inspection findings before supply.',
  },
  {
    label: 'As-Is',
    description: 'Supplied in its current condition, with no repair or refurbishment carried out.',
  },
];
