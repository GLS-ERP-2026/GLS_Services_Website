/**
 * Countries GLS Services operates in, keyed by ISO 3166-1 numeric code
 * (matches the `id` field in world-atlas topojson country features).
 */
export interface OperatingCountry {
  name: string;
  isoNumeric: string;
  /** [longitude, latitude] — only needed for small nations that are hard to see as a filled shape. */
  markerCoords?: [number, number];
}

export const operatingCountries: OperatingCountry[] = [
  { name: 'United Kingdom', isoNumeric: '826' },
  { name: 'Denmark', isoNumeric: '208' },
  { name: 'Croatia', isoNumeric: '191' },
  { name: 'Italy', isoNumeric: '380' },
  { name: 'Egypt', isoNumeric: '818' },
  { name: 'Saudi Arabia', isoNumeric: '682' },
  { name: 'Bahrain', isoNumeric: '048', markerCoords: [50.5577, 26.0667] },
  { name: 'Qatar', isoNumeric: '634' },
  { name: 'United Arab Emirates', isoNumeric: '784' },
  { name: 'India', isoNumeric: '356' },
  { name: 'Singapore', isoNumeric: '702', markerCoords: [103.8198, 1.3521] },
  { name: 'Thailand', isoNumeric: '764' },
  { name: 'Vietnam', isoNumeric: '704' },
  { name: 'Nigeria', isoNumeric: '566' },
  { name: 'Angola', isoNumeric: '024' },
  { name: 'Equatorial Guinea', isoNumeric: '226' },
  { name: 'Malaysia', isoNumeric: '458' },
];

export const operatingCountryIds = new Set(operatingCountries.map((c) => c.isoNumeric));
