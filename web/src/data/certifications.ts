/**
 * Management-system certifications held by GLS Services.
 *
 * ⚠️ PENDING VERIFIED DATA — the `body`, `certificateNo`, `validity` and
 * `documentHref` fields are deliberately left undefined until GLS supplies the
 * real certificate details. CertificateCard renders only the fields that are
 * present, so a panel is never shown with an invented or empty value. Fill the
 * fields in here and every page picks them up.
 *
 * Note on standard editions: ISO 45001 has only ever been published as
 * ISO 45001:2018. Earlier site copy said "ISO 45001-2015", which is not a real
 * standard edition — corrected here and everywhere it was referenced.
 */
export interface Certification {
  /** e.g. "ISO 9001:2015" */
  standard: string;
  /** e.g. "Quality Management System" */
  system: string;
  /** What the standard means in practice — no claims beyond the certification scope. */
  meaning: string;
  /** Certification body. Undefined until verified. */
  body?: string;
  /** Certificate number. Undefined until verified. */
  certificateNo?: string;
  /** Validity / expiry. Undefined until verified. */
  validity?: string;
  /** Certified scope statement. Undefined until verified. */
  scope?: string;
  /** Path to a real certificate file. Undefined until a document exists in the repo. */
  documentHref?: string;
  icon: 'check' | 'leaf' | 'shield';
}

export const certifications: Certification[] = [
  {
    standard: 'ISO 9001:2015',
    system: 'Quality Management System',
    meaning:
      'Structured processes and documented quality controls applied across inspection, repair, overhaul and testing work.',
    icon: 'check',
  },
  {
    standard: 'ISO 14001:2015',
    system: 'Environmental Management System',
    meaning:
      'Environmental considerations are built into how work is planned and carried out, as part of the management system.',
    icon: 'leaf',
  },
  {
    standard: 'ISO 45001:2018',
    system: 'Occupational Health & Safety Management System',
    meaning:
      'A management framework supporting workplace health and safety across workshop and site-based activities.',
    icon: 'shield',
  },
];

/** Short standard names for the home page trust strip. */
export const certificationLabels = certifications.map((c) => c.standard);

/**
 * Document categories GLS can provide. `href` is only set where an actual file
 * exists in the repo — a category with no href renders as available on request
 * rather than as a dead download link.
 */
export interface QualityDocument {
  title: string;
  description: string;
  href?: string;
}

export const qualityDocuments: QualityDocument[] = [
  {
    title: 'Certificates',
    description: 'Copies of current ISO management-system certificates.',
  },
  {
    title: 'Policies',
    description: 'Quality, environmental and occupational health & safety policy statements.',
  },
  {
    title: 'QHSE Documents',
    description: 'Supporting QHSE documentation relevant to a given scope of work.',
  },
  {
    title: 'Quality Documentation',
    description: 'Procedure and record templates applicable to inspection, repair and testing.',
  },
];

/** Record types that form part of a project documentation pack. */
export const projectDocuments: QualityDocument[] = [
  { title: 'Inspection Report', description: 'Findings from visual inspection of the equipment and components.' },
  { title: 'Dimensional Report', description: 'Critical measurements recorded against the applicable tolerances.' },
  { title: 'Repair Record', description: 'Repair, refurbishment and component replacement work carried out.' },
  { title: 'Assembly Record', description: 'Reassembly carried out against the applicable job requirements.' },
  { title: 'Test Record', description: 'Applicable functional or performance testing completed within scope.' },
  { title: 'Final Service Report', description: 'Consolidated summary of the work completed before dispatch.' },
];
