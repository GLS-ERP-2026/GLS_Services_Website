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
