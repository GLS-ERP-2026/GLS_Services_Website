/**
 * Countries GLS Services operates in, keyed by ISO 3166-1 numeric code
 * (matches the `id` field in world-atlas topojson country features).
 */
export interface OperatingCountry {
  name: string;
  isoNumeric: string;
  /** [longitude, latitude] where the map's connecting line ends. Picked by
   * hand rather than computed, so lines land inland on the mainland. */
  point: [number, number];
  /** Head office: the point every connecting line starts from. */
  isHq?: boolean;
}

export const operatingCountries: OperatingCountry[] = [
  { name: 'United Kingdom', isoNumeric: '826', point: [-1.5, 52.5] },
  { name: 'Denmark', isoNumeric: '208', point: [9.3, 56.1] },
  { name: 'Croatia', isoNumeric: '191', point: [15.9, 45.6] },
  { name: 'Italy', isoNumeric: '380', point: [12.5, 42.6] },
  { name: 'Egypt', isoNumeric: '818', point: [30.8, 26.8] },
  { name: 'Saudi Arabia', isoNumeric: '682', point: [45.0, 24.0] },
  { name: 'Bahrain', isoNumeric: '048', point: [50.56, 26.07] },
  { name: 'Qatar', isoNumeric: '634', point: [51.2, 25.3] },
  { name: 'United Arab Emirates', isoNumeric: '784', point: [55.27, 25.2], isHq: true },
  { name: 'India', isoNumeric: '356', point: [78.9, 21.5] },
  { name: 'Singapore', isoNumeric: '702', point: [103.82, 1.35] },
  { name: 'Thailand', isoNumeric: '764', point: [100.9, 15.5] },
  { name: 'Vietnam', isoNumeric: '704', point: [108.0, 14.1] },
  { name: 'Nigeria', isoNumeric: '566', point: [8.1, 9.1] },
  { name: 'Angola', isoNumeric: '024', point: [17.9, -11.2] },
  { name: 'Equatorial Guinea', isoNumeric: '226', point: [10.3, 1.6] },
  { name: 'Malaysia', isoNumeric: '458', point: [101.9, 4.2] },
];

export const operatingCountryIds = new Set(operatingCountries.map((c) => c.isoNumeric));

export const hqCountry = operatingCountries.find((c) => c.isHq) as OperatingCountry;
