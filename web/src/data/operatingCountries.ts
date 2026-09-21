/**
 * Countries GLS Services operates in, keyed by ISO 3166-1 numeric code
 * (matches the `id` field in world-atlas topojson country features).
 *
 * This list is the single source of the "countries served" figure — see
 * data/company.ts, which derives companyStats.countriesServed from its length.
 * Add or remove a country here and every page follows.
 */
export type OperatingRegion = 'Middle East' | 'Europe' | 'Asia' | 'Africa';

export interface OperatingCountry {
  name: string;
  isoNumeric: string;
  region: OperatingRegion;
  /** [longitude, latitude] — only needed for small nations that are hard to see as a filled shape. */
  markerCoords?: [number, number];
}

export const operatingCountries: OperatingCountry[] = [
  { name: 'United Arab Emirates', isoNumeric: '784', region: 'Middle East' },
  { name: 'Saudi Arabia', isoNumeric: '682', region: 'Middle East' },
  { name: 'Qatar', isoNumeric: '634', region: 'Middle East' },
  { name: 'Bahrain', isoNumeric: '048', region: 'Middle East', markerCoords: [50.5577, 26.0667] },
  { name: 'United Kingdom', isoNumeric: '826', region: 'Europe' },
  { name: 'Denmark', isoNumeric: '208', region: 'Europe' },
  { name: 'Croatia', isoNumeric: '191', region: 'Europe' },
  { name: 'Italy', isoNumeric: '380', region: 'Europe' },
  { name: 'India', isoNumeric: '356', region: 'Asia' },
  { name: 'Singapore', isoNumeric: '702', region: 'Asia', markerCoords: [103.8198, 1.3521] },
  { name: 'Malaysia', isoNumeric: '458', region: 'Asia' },
  { name: 'Thailand', isoNumeric: '764', region: 'Asia' },
  { name: 'Vietnam', isoNumeric: '704', region: 'Asia' },
  { name: 'Egypt', isoNumeric: '818', region: 'Africa' },
  { name: 'Nigeria', isoNumeric: '566', region: 'Africa' },
  { name: 'Angola', isoNumeric: '024', region: 'Africa' },
  { name: 'Equatorial Guinea', isoNumeric: '226', region: 'Africa' },
];

export const operatingCountryIds = new Set(operatingCountries.map((c) => c.isoNumeric));

export const operatingRegions: OperatingRegion[] = ['Middle East', 'Europe', 'Asia', 'Africa'];

export function countriesByRegion(region: OperatingRegion): OperatingCountry[] {
  return operatingCountries.filter((c) => c.region === region);
}
