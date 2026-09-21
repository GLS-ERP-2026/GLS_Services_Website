import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { CertificateCard } from '../../components/ui/CertificateCard';
import { DocumentGrid } from '../../components/ui/DocumentCard';
import { ValueBlock } from '../../components/ui/ValueBlock';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { certifications, qualityDocuments, projectDocuments } from '../../data/certifications';
import { coreValues } from '../../data/values';
import { asset } from '../../lib/paths';

const meanings = [
  {
    title: 'Quality Management',
    icon: 'check' as const,
    description:
      'Structured processes and documented quality controls across how work is planned, carried out and recorded.',
  },
  {
    title: 'Environmental Management',
    icon: 'leaf' as const,
    description:
      'Environmental considerations are built into the management system that governs workshop and site activity.',
  },
  {
    title: 'Occupational Health & Safety',
    icon: 'shield' as const,
    description:
      'A management framework supporting workplace health and safety for workshop and field-based personnel.',
  },
];

export function Certifications() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-certifications.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Quality & QHSE' }]}
        eyebrow="Quality & QHSE"
        title="Quality, Safety & Environmental Management"
        description="GLS maintains management systems and certifications supporting its operational and quality objectives."
        actions={
          <a href={asset('/contact.html')} className="btn btn-primary">
            Request Certificate Copies
          </a>
        }
      />

      {/* ---- Certificate panels ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Certifications"
            title="Management System Certifications"
            description="Three certified management systems. Certificate details are issued on request as part of a technical enquiry or pre-qualification."
          />
          <div className="cert-grid">
            {certifications.map((cert) => (
              <CertificateCard key={cert.standard} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- What the certifications mean ---- */}
      <section className="section section-muted" id="qhse">
        <div className="container">
          <SectionHead
            eyebrow="In Practice"
            title="What the Certifications Mean"
            description="What each management system governs in day-to-day work. These are statements about the system, not about outcomes beyond its scope."
          />
          <div className="grid-3">
            {meanings.map((item) => (
              <ValueBlock key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- How quality shows up on a job ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Project Documentation"
            title="Quality Is Documented"
            description="On a given job, the management system shows up as the records issued with the equipment. Which of these apply depends on the scope."
          />
          <DocumentGrid documents={projectDocuments} />
        </div>
      </section>

      {/* ---- Document requests ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Documents"
            title="Available on Request"
            description="Certificates, policies and QHSE documentation are supplied against a named enquiry or pre-qualification request rather than published as open downloads."
          />
          <div className="grid-4">
            {qualityDocuments.map((doc) => (
              <ValueBlock key={doc.title} title={doc.title} description={doc.description} icon="document" />
            ))}
          </div>
          <Reveal className="btn-row" style={{ marginTop: 36 }}>
            <a href={asset('/contact.html')} className="btn btn-primary">
              Contact GLS
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---- Values behind the systems ---- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What Drives Us" title="How We Work" />
          <div className="grid-4">
            {coreValues.map((value) => (
              <ValueBlock key={value.title} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </div>
      </section>

      <TechnicalCTA
        eyebrow="Next Step"
        title="Carrying Out Vendor Pre-Qualification?"
        description="Tell us what your pre-qualification process requires and we will supply the applicable certificates, policies and QHSE documentation."
        primaryLabel="Contact GLS"
        primaryHref="/contact.html"
        secondaryLabel="Request a Technical Quote"
        secondaryHref="/contact.html#rfq"
      />
    </Layout>
  );
}
