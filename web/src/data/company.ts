/**
 * Single source of truth for every company-level statistic and fact used on
 * the site. Nothing else should hard-code a country count, a rig count or an
 * address — import from here so the numbers can never drift between pages.
 */
import { operatingCountries } from './operatingCountries';

export const companyStats = {
  /** Derived from the country dataset so the headline figure and the map can never disagree. */
  countriesServed: operatingCountries.length,
  /** Rigs whose jacking systems GLS has overhauled. Stated on the Jacking & Skidding service. */
  rigsJackingOverhauled: 200,
  /** Number of ISO management-system certifications held (see data/certifications.ts). */
  isoCertifications: 3,
  /** Target first response to an enquiry, in hours. */
  responseTargetHours: 24,
} as const;

/** Labelled figures for stat strips. `definition` exists so no number is ever shown undefined. */
export interface CompanyMetric {
  value: string;
  label: string;
  definition: string;
}

export const headlineMetrics: CompanyMetric[] = [
  {
    value: `${companyStats.countriesServed}`,
    label: 'Countries Served',
    definition: 'Countries in which GLS has delivered equipment or field services.',
  },
  {
    value: `${companyStats.rigsJackingOverhauled}+`,
    label: 'Rigs — Jacking Systems',
    definition: 'Rigs whose jacking systems GLS has inspected, repaired or overhauled.',
  },
  {
    value: `${companyStats.isoCertifications}`,
    label: 'ISO Certifications',
    definition: 'Quality, environmental and occupational health & safety management systems.',
  },
  {
    value: `${companyStats.responseTargetHours}h`,
    label: 'Response Target',
    definition: 'Target time to respond to a technical enquiry or RFQ.',
  },
];

/** Vertical company-facts panel (About page) — verified values only. */
export interface CompanyFactItem {
  label: string;
  value: string;
  href?: string;
}

export const companyFacts: CompanyFactItem[] = [
  { label: 'Head Office', value: 'Tiffany Towers, Jumeirah Lakes Towers, Dubai, UAE' },
  { label: 'Workshop', value: 'LV-30-B, Hamriyah Free Zone Phase II, Sharjah, UAE' },
  {
    label: 'Core Services',
    value: 'Inspection • Maintenance • Repair • Overhaul • Testing • Equipment Supply',
  },
  {
    label: 'Markets Served',
    value: `Middle East, Europe, Asia and Africa — ${companyStats.countriesServed} countries`,
  },
  { label: 'Certifications', value: 'ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018' },
  { label: 'Service Model', value: 'Workshop execution with field support' },
];

/** The three workshop/service facts shown beside the workshop photo on the home page. */
export const workshopFacts: CompanyFactItem[] = [
  { label: 'Workshop Location', value: 'Hamriyah Free Zone, Sharjah, UAE' },
  { label: 'Workshop Capability', value: 'Inspection • Repair • Assembly • Testing' },
  { label: 'Service Model', value: 'Workshop + Field Support' },
];
