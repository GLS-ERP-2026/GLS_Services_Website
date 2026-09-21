import { Layout } from '../../components/layout/Layout';
import { HeroSlideshow } from '../../components/home/HeroSlideshow';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { TrustStrip } from '../../components/ui/TrustStrip';
import { EquipmentCard } from '../../components/ui/EquipmentCard';
import { ServiceRowList } from '../../components/ui/ServiceSection';
import { ProcessTimeline } from '../../components/ui/ProcessTimeline';
import { CapabilityTable } from '../../components/ui/CapabilityTable';
import { ReasonList } from '../../components/ui/ValueBlock';
import { FigureBlock } from '../../components/ui/CompanyFact';
import { DocumentGrid } from '../../components/ui/DocumentCard';
import { ProjectCard, ProjectsPending } from '../../components/ui/ProjectCard';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { services } from '../../data/services';
import { featuredEquipment, equipment } from '../../data/equipment';
import { mroProcess } from '../../data/process';
import { whyClientsUseGls } from '../../data/values';
import { projectDocuments } from '../../data/certifications';
import { projects } from '../../data/projects';
import { companyStats, workshopFacts } from '../../data/company';
import { operatingRegions, countriesByRegion } from '../../data/operatingCountries';
import { asset } from '../../lib/paths';

export function Home() {
  return (
    <Layout headerVariant="over-hero">
      {/* ---- Hero — slideshow, Ken Burns zoom and copy kept as-is ---- */}
      <section className="hero">
        <div className="hero-media">
          <HeroSlideshow />
        </div>
        <div className="hero-badge-row">
          <span className="hero-eyebrow">ISO 9001 &middot; ISO 14001 &middot; ISO 45001</span>
        </div>
        <div className="container hero-inner">
          <h1 className="hero-title">
            A Comprehensive Solution for Your <em>Drilling Equipment</em> Requirements
          </h1>
          <p className="hero-sub">
            GLS Services delivers end-to-end inspection, maintenance, repair &amp; overhaul solutions for drilling
            equipment &mdash; backed by API-compliant procedures, experienced field technicians, and a track record
            across {companyStats.countriesServed} countries.
          </p>
          <div className="hero-actions">
            <a href={asset('/contact.html#rfq')} className="btn btn-primary">
              Request a Technical Quote
            </a>
            <a href={asset('/services.html')} className="btn btn-outline-light">
              View Our Capabilities
            </a>
          </div>
          <p className="hero-credibility">
            Workshop Services &nbsp;&bull;&nbsp; Equipment Inspection &nbsp;&bull;&nbsp; Repair &amp; Overhaul
            &nbsp;&bull;&nbsp; Field Support
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* ---- 3. Equipment we support ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Drilling Equipment MRO"
            title="Equipment We Support"
            description="GLS provides inspection, repair, overhaul and service support for a range of drilling and rig equipment."
            action={
              <a href={asset('/equipment.html')} className="btn btn-outline btn-sm">
                View All Equipment
              </a>
            }
          />
          <Reveal className="equip-grid">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.slug} item={item} />
            ))}
            <article className="equip-card equip-card--action">
              <h3>All Equipment</h3>
              <p>
                Crown blocks, travelling blocks, casing stabbing boards and skidding systems are supported too. See
                the full list with the published scope for each.
              </p>
              <a href={asset('/equipment.html')} className="link-action">
                View All Equipment <span className="arrow">&rarr;</span>
              </a>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---- 4. Core capabilities ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Engineering Capabilities"
            title="Engineering &amp; MRO Capabilities"
            description="Four capability areas covering the equipment lifecycle, from condition assessment through to supply."
          />
          <ServiceRowList services={services} />
        </div>
      </section>

      {/* ---- 5. How we work ---- */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Workshop Process"
            title="From Inspection to Return to Service"
            description="Equipment moves through a defined sequence, with the scope at each stage set by the job requirements and the findings of the stage before it."
            onDark
          />
          <ProcessTimeline steps={mroProcess} />
        </div>
      </section>

      {/* ---- 6. Capability matrix ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Service Capability"
            title="What We Do, By Equipment"
            description="Published service scope by equipment type. Use it to check a requirement before sending an enquiry."
          />
          <Reveal>
            <CapabilityTable items={equipment} caption="Service capability by equipment type" />
          </Reveal>
        </div>
      </section>

      {/* ---- 7. Why clients use GLS ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead eyebrow="Why GLS" title="Why Clients Use GLS" />
          <ReasonList points={whyClientsUseGls} />
        </div>
      </section>

      {/* ---- 8. Workshop ---- */}
      <section className="section" id="workshop">
        <div className="container split split--wide-left">
          <Reveal className="split-media">
            <img src={asset('/assets/images/services/jacking-gear.jpg')} alt="Jacking gear units under refurbishment" />
            <span className="media-caption">Jacking gear units under refurbishment</span>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow eyebrow--ruled">Workshop &amp; Facilities</span>
              <h2>Workshop Execution, Backed by Field Support</h2>
              <p>
                Equipment is received, stripped, inspected, repaired, reassembled and tested within a controlled
                workshop process, with site-based support available where the scope requires it.
              </p>
            </Reveal>
            <Reveal style={{ marginTop: 36 }}>
              {workshopFacts.map((fact) => (
                <FigureBlock key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </Reveal>
            <Reveal className="btn-row" style={{ marginTop: 36 }}>
              <a href={asset('/about.html#workshop')} className="btn btn-outline">
                Explore Our Facilities
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- 9. Project experience ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Project Experience"
            title="Selected Project Experience"
            description="Equipment-specific references covering scope of work, inspection findings and the documentation issued."
            action={
              <a href={asset('/projects.html')} className="btn btn-outline btn-sm">
                View Projects
              </a>
            }
          />
          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.slice(0, 3).map((project) => (
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

      {/* ---- 10. Quality & documentation ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Quality &amp; QHSE"
            title="Quality Is Documented"
            description="Engineering work is supported by structured inspection, repair and testing records appropriate to the project scope."
            action={
              <a href={asset('/certifications.html')} className="btn btn-outline btn-sm">
                View Quality &amp; Certifications
              </a>
            }
          />
          <DocumentGrid documents={projectDocuments} />
        </div>
      </section>

      {/* ---- 11. Global footprint ---- */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Global Footprint"
            title="Projects Across Multiple Markets"
            onDark
          />
          <div className="split split--wide-right split--top" style={{ gap: 56 }}>
            <Reveal>
              <span className="metric-value">{companyStats.countriesServed}</span>
              <span className="metric-label">Countries Served</span>
              <p className="metric-definition">
                Countries in which GLS has delivered equipment or field services.
              </p>
              <p style={{ marginTop: 26 }}>
                Project activity across the Middle East, Europe, Asia and Africa.
              </p>
              <div className="btn-row" style={{ marginTop: 26 }}>
                <a href={asset('/about.html#footprint')} className="btn btn-outline-light btn-sm">
                  View Global Footprint
                </a>
              </div>
            </Reveal>
            <Reveal className="region-grid">
              {operatingRegions.map((region) => (
                <div className="region-block" key={region}>
                  <h3>{region}</h3>
                  <ul>
                    {countriesByRegion(region).map((country) => (
                      <li key={country.isoNumeric}>{country.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- 12. Final CTA ---- */}
      <TechnicalCTA
        eyebrow="Next Step"
        title="Have Equipment Requiring Inspection, Repair or Overhaul?"
        description="Send us your equipment details and scope of work. Our team can review the requirement and respond with the appropriate service approach."
      />
    </Layout>
  );
}
