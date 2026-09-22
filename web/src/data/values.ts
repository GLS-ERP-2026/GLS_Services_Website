export interface CoreValue {
  title: string;
  description: string;
  icon: 'shield' | 'target' | 'heart';
}

export const homeCoreValues: CoreValue[] = [
  { title: 'Integrity', description: 'Conducting business with honesty and fairness across every stakeholder relationship, on every project.', icon: 'shield' },
  { title: 'Mindfulness', description: "Understanding and respecting each customer's operational needs, constraints and priorities.", icon: 'target' },
  { title: 'Humility', description: 'Maintaining modesty and respect for all individuals we work with, at every level.', icon: 'heart' },
];

export const aboutCoreValues: CoreValue[] = [
  { title: 'Integrity', description: 'Conducting business with honesty and fairness across all stakeholder relationships, without exception.', icon: 'shield' },
  { title: 'Mindfulness', description: "Understanding and respecting each customer's needs, constraints and operational realities.", icon: 'target' },
  { title: 'Humility', description: 'Maintaining modesty and respect for all individuals we work alongside, at every level.', icon: 'heart' },
];

export interface Differentiator {
  title: string;
  description: string;
  icon: 'certificate' | 'gear' | 'globe' | 'factory';
}

export const whyGls: Differentiator[] = [
  {
    title: 'Certified Quality Systems',
    description:
      'Certified to ISO 9001, ISO 14001, ISO 45001 and API Q2 (2nd Edition), our quality, environmental and safety systems are independently audited.',
    icon: 'certificate',
  },
  {
    title: 'Experienced Technical Team',
    description:
      '15+ years of experience maintaining, servicing and overhauling oilfield drilling equipment. Our technicians hold BOSIET, First Aid, Fire Safety and Electrical Equipment Handling certifications.',
    icon: 'gear',
  },
  {
    title: 'Global Service Capability',
    description: 'Supporting clients and their equipment requirements across 17+ countries and multiple international markets.',
    icon: 'globe',
  },
  {
    title: 'Complete Equipment Support',
    description:
      'From inspection and maintenance through to overhaul and commissioning, we support your equipment across its entire service lifecycle.',
    icon: 'factory',
  },
];
