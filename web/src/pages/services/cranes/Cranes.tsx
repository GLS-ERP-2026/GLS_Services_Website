import { Layout } from '../../../components/layout/Layout';
import { PageHeader } from '../../../components/layout/PageHeader';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHead } from '../../../components/ui/SectionHead';
import { ValueBlock } from '../../../components/ui/ValueBlock';
import { CheckList } from '../../../components/ui/CheckList';
import { DocumentGrid } from '../../../components/ui/DocumentCard';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { TechnicalCTA } from '../../../components/ui/TechnicalCTA';
import type { QualityDocument } from '../../../data/certifications';
import { asset } from '../../../lib/paths';

const serviceTypes = [
  {
    title: 'Inspection',
    icon: 'eye' as const,
    description:
      'Annual inspections across all crane types, carried out as condition assessment against the applicable scope by API-approved field technicians.',
  },
  {
    title: 'Maintenance',
    icon: 'gear' as const,
    description:
      'Maintenance and corrective service support for electrical and diesel-hydraulic cranes, in the workshop or on site.',
  },
  {
    title: 'Repair & Overhaul',
    icon: 'wrench' as const,
    description:
      'Repair and overhaul activities carried out against the inspection findings and the agreed scope of work.',
  },
];

const craneDocuments: QualityDocument[] = [
  { title: 'Inspection Report', description: 'Findings recorded against the applicable inspection scope.' },
  { title: 'Repair Record', description: 'Repair and component replacement work carried out on the crane.' },
  { title: 'Test Documentation', description: 'Applicable functional testing completed within the agreed scope.' },
  { title: 'Survey Support Records', description: 'Documentation supporting an annual or five-year special survey.' },
];

export function Cranes() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-cranes.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Capabilities', href: '/services.html' },
          { label: 'Crane Services' },
        ]}
        eyebrow="Crane Services"
        title="Crane Inspection, Maintenance & Repair"
        description="Inspection, maintenance, repair and survey-related support for crane systems."
        actions={
          <a href={asset('/contact.html#rfq')} className="btn btn-primary">
            Request Crane Service
          </a>
        }
      />

      {/* ---- Service types ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Service Types"
            title="Three Service Categories"
            description="Crane work falls into three categories, each with its own scope and output."
          />
          <div className="grid-3">
            {serviceTypes.map((item) => (
              <ValueBlock key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Special survey ---- */}
      <section className="section section-dark" id="special-survey">
        <div className="container split split--wide-left split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled eyebrow--on-dark">Special Survey Support</span>
            <h2>Annual &amp; Five-Year Special Survey Inspections</h2>
            <p>
              GLS provides annual inspections for all crane types, along with five-year special survey inspections.
              Work is carried out by API-approved field technicians, with the inspection findings forming the basis of
              any repair or overhaul scope that follows.
            </p>
            <p>
              GLS provides the inspection and supporting documentation. Certification requirements and their
              acceptance remain a matter for the client and their appointed certifying body.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a href={asset('/contact.html#rfq')} className="btn btn-primary">
                Request Survey Support
              </a>
            </div>
          </Reveal>
          <Reveal className="split-media">
            <img src={asset('/assets/images/services/crane.jpg')} alt="Offshore crane inspection" />
            <span className="media-caption">Crane inspection</span>
          </Reveal>
        </div>
      </section>

      {/* ---- Crane types & scope ---- */}
      <section className="section">
        <div className="container split split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled">Crane Types</span>
            <h2>Cranes We Work On</h2>
            <p>
              Repair and overhaul is supported across both crane drive types, with the engineering and technical
              support behind the job in each case.
            </p>
            <div style={{ marginTop: 20 }}>
              <CheckList
                items={[
                  'Electrical cranes',
                  'Diesel-hydraulic cranes',
                  'All crane types for annual inspection',
                ]}
              />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow eyebrow--ruled">Scope of Work</span>
            <h2>What a Crane Job Covers</h2>
            <p>
              The scope is set by the inspection findings and the requirement, whether the crane stays on site or
              comes into the workshop.
            </p>
            <div style={{ marginTop: 20 }}>
              <CheckList
                items={[
                  'Annual inspection for all crane types',
                  'Five-year special survey inspection',
                  'Maintenance and corrective service support',
                  'Repair and overhaul operations',
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Documentation ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Project Documentation"
            title="What You Receive"
            description="Records issued against a crane job, depending on the scope carried out."
          />
          <DocumentGrid documents={craneDocuments} />
        </div>
      </section>

      <RelatedServices excludeSlug="cranes" />

      <TechnicalCTA
        eyebrow="Next Step"
        title="Due for a Crane Inspection?"
        description="Tell us the crane type, location and whether you need an annual inspection, a five-year special survey or repair work, and our team will respond with the appropriate service approach."
        primaryLabel="Request Crane Service"
      />
    </Layout>
  );
}
