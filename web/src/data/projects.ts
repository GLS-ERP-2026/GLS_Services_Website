/**
 * Project experience.
 *
 * ⚠️ EMPTY BY DESIGN — no project data has been verified yet, and the site must
 * not carry invented project references. The Projects page and the home page
 * project section both read this array: while it is empty they render an honest
 * "available on request" state instead of placeholder cards.
 *
 * To publish real project experience, add entries below. Nothing else needs to
 * change — the page, the home section and the MRO page all pick them up.
 */
export interface Project {
  slug: string;
  /** e.g. "Drawworks Overhaul" */
  type: string;
  /** Manufacturer and model, e.g. "LeTourneau Technologies LDW1500K001" */
  equipment: string;
  /** What GLS was asked to do. */
  scope: string;
  /** What the inspection established. */
  inspection?: string;
  /** What was actually carried out. */
  workCompleted?: string;
  /** Outcome on release. */
  result?: string;
  image?: string;
  service?: 'drilling-equipment-mro' | 'jacking-skidding' | 'cranes' | 'used-equipment-supply';
}

export const projects: Project[] = [];

export function projectsForService(service: NonNullable<Project['service']>): Project[] {
  return projects.filter((p) => p.service === service);
}

export const hasProjects = projects.length > 0;
