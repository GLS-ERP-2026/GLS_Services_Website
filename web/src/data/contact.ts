export const contactInfo = {
  headOffice: {
    label: 'Head Office',
    company: 'GLS Services DMCC',
    lines: ['Tiffany Towers, Room 508', 'Jumeirah Lakes Towers', 'Dubai, United Arab Emirates'],
    short: 'GLS Services DMCC, Tiffany Towers, Jumeirah Lakes Towers, Dubai, UAE',
  },
  workshop: {
    label: 'Workshop',
    company: 'GLS Services FZE',
    lines: ['LV-30-B, Hamriyah Free Zone, Phase II', 'Sharjah, United Arab Emirates'],
    short: 'GLS Services FZE, LV-30-B, Hamriyah Free Zone, Phase II, Sharjah, UAE',
  },
  emails: ['contact@glsserv.com', 'admin@glsserv.com'],
  phone: '+971 52 608 5036',
  phoneHref: 'tel:+971526085036',
  /** No verified company LinkedIn URL yet — the footer link is only rendered once this is set. */
  linkedin: undefined as string | undefined,
};

/** Service options offered in the technical RFQ form. */
export const rfqServices = [
  'Inspection',
  'Repair',
  'Overhaul',
  'Refurbishment',
  'Maintenance & Troubleshooting',
  'Installation / Removal',
  'Used Equipment Supply',
  'Other — described below',
];

/** Equipment options offered in the technical RFQ form. */
export const rfqEquipmentTypes = [
  'Drawworks',
  'Mud Pump',
  'Top Drive',
  'Rotary Table',
  'Iron Roughneck',
  'Crown Block',
  'Travelling Block',
  'Casing Stabbing Board',
  'Jacking System',
  'Skidding System',
  'Crane',
  'Other — described below',
];
