import { Layout } from '../../../components/layout/Layout';
import { PageHeader } from '../../../components/layout/PageHeader';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHead } from '../../../components/ui/SectionHead';
import { CheckList } from '../../../components/ui/CheckList';
import { ValueBlock } from '../../../components/ui/ValueBlock';
import { ProcessTimeline } from '../../../components/ui/ProcessTimeline';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { TechnicalCTA } from '../../../components/ui/TechnicalCTA';
import { companyStats } from '../../../data/company';
import type { ProcessStep } from '../../../data/process';
import { asset } from '../../../lib/paths';

/** Jacking & skidding workflow — a subset of the full MRO sequence. */
const workflow: ProcessStep[] = [
  { step: '01', title: 'Assessment', description: 'System condition and the reported fault are assessed against the job scope.' },
  { step: '02', title: 'Disassembly', description: 'Units are stripped down so gearing, housings and drive components can be examined.' },
  { step: '03', title: 'Inspection', description: 'Visual and dimensional inspection of jacking or skidding components.' },
  { step: '04', title: 'Repair', description: 'Components are repaired or replaced according to the inspection findings.' },
  { step: '05', title: 'Assembly', description: 'Units are reassembled to the applicable job requirements.' },
  { step: '06', title: 'Testing', description: 'Applicable functional testing is carried out within the agreed scope.' },
];

const serviceScope = [
  {
    title: 'Inspection',
    icon: 'eye' as const,
    description: 'Condition assessment of jacking and skidding systems against the applicable job scope.',
  },
  {
    title: 'Hydraulic Checks',
    icon: 'gear' as const,
    description: 'Checks across hydraulic skidding systems as part of the inspection and repair scope.',
  },
  {
    title: 'Repair',
    icon: 'wrench' as const,
    description: 'Repair and remedial work on jacking and skidding components following inspection.',
  },
  {
    title: 'Component Replacement',
    icon: 'crate' as const,
    description: 'Replacement of components where repair is not viable within the agreed scope.',
  },
  {
    title: 'Complete Overhaul',
    icon: 'clipboard' as const,
    description: 'Full overhaul of jacking systems, with gearbox overhaul provided through partner shops.',
  },
  {
    title: 'Field Support',
    icon: 'globe' as const,
    description: 'Site-based execution where the system cannot practically be removed from the rig.',
  },
];

export function JackingSkidding() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-jacking-skidding.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Capabilities', href: '/services.html' },
          { label: 'Jacking & Skidding' },
        ]}
        eyebrow="Jacking & Skidding"
        title="Jacking & Skidding Equipment Services"
        description="Inspection, servicing, repair and field support for jacking and skidding systems."
        actions={
          <a href={asset('/contact.html#rfq')} className="btn btn-primary">
            Request Jacking &amp; Skidding Support
          </a>
        }
      />

      {/* ---- Two main capabilities, described separately ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Capabilities"
            title="Two Systems, Two Scopes"
            description="Jacking and skidding are handled as separate capabilities, because the systems, the failure modes and the service scope differ."
          />
          <div className="equip-rows">
            <Reveal as="article" className="equip-row">
              <div className="equip-row-media">
                <img src={asset('/assets/images/services/jacking-gear.jpg')} alt="Jacking gear units under refurbishment" />
              </div>
              <div className="equip-row-body">
                <div className="equip-row-head">
                  <h3>Jacking Systems</h3>
                  <span className="equip-scope-tag">{companyStats.rigsJackingOverhauled}+ rigs</span>
                </div>
                <p>
                  Inspection, repair and complete overhaul of all jacking systems used on drilling rigs, backed by
                  experience across more than {companyStats.rigsJackingOverhauled} rigs worldwide. Gearbox overhaul is
                  provided through partner shops.
                </p>
                <CheckList
                  items={[
                    'Inspection, repair & complete overhaul of all jacking systems',
                    'Gearbox overhaul via partner shops',
                    'Workshop or site-based execution',
                  ]}
                />
              </div>
            </Reveal>

            <Reveal as="article" className="equip-row">
              <div className="equip-row-media">
                <img
                  src={asset('/assets/images/services/service-jacking-skidding.svg')}
                  alt="Skidding system service"
                />
              </div>
              <div className="equip-row-body">
                <div className="equip-row-head">
                  <h3>Skidding Systems</h3>
                </div>
                <p>
                  Coverage spans electrical rack and pinion skidding systems as well as hydraulic skidding systems,
                  from inspection through repair and overhaul.
                </p>
                <CheckList
                  items={[
                    'Electrical rack & pinion skidding systems',
                    'Hydraulic skidding systems',
                    'Full inspection, repair & overhaul support',
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Service scope ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Service Scope"
            title="What the Scope Covers"
            description="Activities available across jacking and skidding systems, applied according to the requirement."
          />
          <div className="grid-3">
            {serviceScope.map((item) => (
              <ValueBlock key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Workflow ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Workflow"
            title="How a Jacking or Skidding Job Runs"
            description="Six stages, from initial assessment through to testing."
          />
          <ProcessTimeline steps={workflow} />
        </div>
      </section>

      {/* ---- Field support — visually distinct from workshop work ---- */}
      <section className="section section-dark">
        <div className="container split split--wide-left split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled eyebrow--on-dark">Field Service Support</span>
            <h2>When the Work Happens on the Rig</h2>
            <p>
              Jacking systems are frequently not practical to remove from a rig, so a large part of this work is
              carried out on site. GLS supports site-based execution where the scope requires it, with the same
              inspection and repair sequence applied in place of a workshop strip-down.
            </p>
            <p>
              Where a component does need shop facilities &mdash; gearbox overhaul in particular &mdash; it is routed
              to a partner shop and returned into the site scope.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a href={asset('/contact.html#rfq')} className="btn btn-primary">
                Request Field Support
              </a>
            </div>
          </Reveal>
          <Reveal>
            <CheckList
              items={[
                'Site-based inspection and condition assessment',
                'On-site repair and component replacement',
                'Gearbox overhaul routed via partner shops',
                'Applicable functional testing on completion',
              ]}
            />
          </Reveal>
        </div>
      </section>

      <RelatedServices excludeSlug="jacking-skidding" />

      <TechnicalCTA
        eyebrow="Next Step"
        title="Need Jacking or Skidding Support?"
        description="Tell us the rig, the system and the fault or scope you need covered, and our team will respond with the appropriate service approach."
        primaryLabel="Request Jacking & Skidding Support"
      />
    </Layout>
  );
}
