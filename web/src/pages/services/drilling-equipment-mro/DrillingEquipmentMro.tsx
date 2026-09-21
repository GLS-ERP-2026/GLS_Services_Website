import { Layout } from '../../../components/layout/Layout';
import { PageHeader } from '../../../components/layout/PageHeader';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHead } from '../../../components/ui/SectionHead';
import { EquipmentRow } from '../../../components/ui/EquipmentCard';
import { CheckList } from '../../../components/ui/CheckList';
import { CapabilityTable } from '../../../components/ui/CapabilityTable';
import { ProcessTimeline } from '../../../components/ui/ProcessTimeline';
import { DocumentGrid } from '../../../components/ui/DocumentCard';
import { ValueBlock } from '../../../components/ui/ValueBlock';
import { ProjectCard, ProjectsPending } from '../../../components/ui/ProjectCard';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { TechnicalCTA } from '../../../components/ui/TechnicalCTA';
import { equipmentForService } from '../../../data/equipment';
import { mroProcess } from '../../../data/process';
import { projectDocuments } from '../../../data/certifications';
import { projectsForService } from '../../../data/projects';
import { asset } from '../../../lib/paths';

const mroEquipment = equipmentForService('drilling-equipment-mro');
const mroProjects = projectsForService('drilling-equipment-mro');

const scopeLeft = [
  'Equipment receipt and identification',
  'Disassembly',
  'Cleaning',
  'Visual inspection',
  'Dimensional inspection',
];

const scopeRight = [
  'Repair and remedial work',
  'Component replacement',
  'Refurbishment',
  'Assembly',
  'Testing within the agreed scope',
  'Preservation and packaging',
];

const inspectionTypes = [
  {
    title: 'Visual Inspection',
    icon: 'eye' as const,
    description:
      'Wear, damage, pitting, scoring and general condition are recorded across the assembly and its components before any repair decision is made.',
  },
  {
    title: 'Dimensional Inspection',
    icon: 'ruler' as const,
    description:
      'Critical measurements are taken and verified against the applicable tolerances, so component condition is established against a requirement rather than by judgement.',
  },
  {
    title: 'Category Inspection',
    icon: 'clipboard' as const,
    description:
      'CAT III and CAT IV inspection is carried out where the equipment and project requirements call for it, including mud pumps, rotary tables, iron roughnecks and hoisting assemblies.',
  },
];

export function DrillingEquipmentMro() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-mro.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Capabilities', href: '/services.html' },
          { label: 'Drilling Equipment MRO' },
        ]}
        eyebrow="Drilling Equipment MRO"
        title="Inspection, Repair & Overhaul of Drilling Equipment"
        description="GLS supports the inspection, repair, overhaul, assembly and testing of drilling and rig equipment within the defined project scope."
        actions={
          <>
            <a href={asset('/contact.html#rfq')} className="btn btn-primary">
              Request a Technical Quote
            </a>
            <a href="#equipment" className="btn btn-outline-light">
              View Equipment
            </a>
          </>
        }
      />

      {/* ---- Equipment coverage ---- */}
      <section className="section" id="equipment">
        <div className="container">
          <SectionHead
            eyebrow="Equipment Coverage"
            title="Equipment We Support"
            description="Each equipment group carries its own inspection category and scope of work."
          />
          <div className="equip-rows">
            {mroEquipment.map((item) => (
              <EquipmentRow key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- MRO scope ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Scope of Work"
            title="Our MRO Scope"
            description="The activities below make up a full MRO scope. A given job may use all of them or a defined subset, depending on the equipment and the requirement."
          />
          <Reveal className="check-cols">
            <CheckList items={scopeLeft} />
            <CheckList items={scopeRight} />
          </Reveal>
        </div>
      </section>

      {/* ---- Inspection ---- */}
      <section className="section" id="inspection">
        <div className="container">
          <SectionHead
            eyebrow="Inspection"
            title="Inspection & Condition Assessment"
            description="Inspection comes first, because it is what the repair scope is built from."
          />
          <div className="grid-3">
            {inspectionTypes.map((item) => (
              <ValueBlock key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Capability matrix ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Service Capability"
            title="Scope by Equipment Type"
            description="Published MRO scope for each supported equipment group."
          />
          <Reveal>
            <CapabilityTable items={mroEquipment} caption="MRO service capability by equipment type" />
          </Reveal>
        </div>
      </section>

      {/* ---- Repair & testing ---- */}
      <section className="section">
        <div className="container split split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled">Repair</span>
            <h2>Repair &amp; Remedial Work</h2>
            <p>
              Repair scope follows the inspection record. Components are repaired, refurbished or replaced according
              to what the inspection established and what the job scope allows, rather than replaced by default.
            </p>
            <div style={{ marginTop: 20 }}>
              <CheckList
                items={[
                  'Component repair and corrective work',
                  'Component replacement where repair is not viable',
                  'Refurbishment of assemblies and sub-assemblies',
                  'Reassembly to the applicable job requirements',
                ]}
              />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow eyebrow--ruled">Testing</span>
            <h2>Assembly &amp; Testing</h2>
            <p>
              Once reassembled, applicable functional or performance testing is carried out according to the agreed
              scope for that equipment. Testing is not a blanket capability &mdash; what is performed depends on the
              equipment and the project requirement.
            </p>
            <div style={{ marginTop: 20 }}>
              <CheckList
                items={[
                  'Reassembly against the applicable job requirements',
                  'Applicable functional testing within scope',
                  'In-house PLC, VFD and software test capability for top drives',
                  'Preservation and packaging before dispatch',
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Process ---- */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Workshop Process"
            title="From Receipt to Dispatch"
            description="The sequence equipment follows through the workshop, with the scope at each stage set by the job requirements and the previous stage's findings."
            onDark
          />
          <ProcessTimeline steps={mroProcess} />
        </div>
      </section>

      {/* ---- Documentation ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Project Documentation"
            title="What You Receive"
            description="The records applicable to the scope are compiled and issued with the equipment. Which of these apply depends on the job."
          />
          <DocumentGrid documents={projectDocuments} />
        </div>
      </section>

      {/* ---- Projects ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Project Experience"
            title="Related MRO Projects"
            description="Equipment-specific references covering scope of work, inspection findings and the documentation issued."
          />
          {mroProjects.length > 0 ? (
            <div className="project-grid">
              {mroProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <ProjectsPending
              action={
                <a href={asset('/contact.html#rfq')} className="btn btn-primary btn-sm">
                  Request Project References
                </a>
              }
            />
          )}
        </div>
      </section>

      <RelatedServices excludeSlug="drilling-equipment-mro" />

      <TechnicalCTA
        eyebrow="Next Step"
        title="Need an Equipment Evaluation?"
        description="Send us the equipment make, model and serial number along with the scope of work, and our team will review the requirement and respond with the appropriate service approach."
      />
    </Layout>
  );
}
