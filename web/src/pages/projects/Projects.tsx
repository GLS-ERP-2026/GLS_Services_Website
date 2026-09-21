import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { ProjectCard, ProjectsPending } from '../../components/ui/ProjectCard';
import { CheckList } from '../../components/ui/CheckList';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { WorldMap } from '../../components/ui/WorldMap';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { companyStats } from '../../data/company';
import { operatingRegions, countriesByRegion } from '../../data/operatingCountries';
import { asset } from '../../lib/paths';

export function Projects() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-services.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Projects' }]}
        eyebrow="Project Experience"
        title="Where Our Equipment Work Has Been Done"
        description={`Equipment and field services delivered across ${companyStats.countriesServed} countries in the Middle East, Europe, Asia and Africa.`}
        actions={
          <a href={asset('/contact.html#rfq')} className="btn btn-primary">
            Request Project References
          </a>
        }
      />

      {/* ---- Case studies ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Case Studies"
            title="Selected Project Experience"
            description="Equipment-specific references covering scope of work, inspection findings, the work completed and the documentation issued."
          />
          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="split split--wide-left split--top">
              <ProjectsPending
                action={
                  <a href={asset('/contact.html#rfq')} className="btn btn-primary">
                    Request Project References
                  </a>
                }
              />
              <Reveal>
                <h3>What a reference covers</h3>
                <p>
                  References are issued against a named equipment type so they are useful for assessment rather than
                  promotional. Each one sets out:
                </p>
                <div style={{ marginTop: 18 }}>
                  <CheckList
                    items={[
                      'Equipment make, model and configuration',
                      'Scope of work as agreed',
                      'What the inspection established',
                      'Repair and remedial work carried out',
                      'Testing completed within scope',
                      'Documentation issued on release',
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* ---- Where the work happens ---- */}
      <section className="section section-dark" id="footprint">
        <div className="container">
          <SectionHead
            eyebrow="Global Footprint"
            title="Countries Served"
            description="Countries in which GLS has delivered equipment or field services."
            onDark
            center
          />
          <div className="text-center" style={{ marginBottom: 44 }}>
            <Reveal>
              <span className="metric-value">{companyStats.countriesServed}</span>
              <span className="metric-label">Countries Served</span>
            </Reveal>
          </div>
          <Reveal>
            <WorldMap />
          </Reveal>
          <Reveal className="region-grid" style={{ marginTop: 48 }}>
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
      </section>

      {/* ---- Experience by service line ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="By Service Line"
            title="Where the Experience Sits"
            description="Project work spans four service lines. Follow a line through to the equipment and scope it covers."
          />
          <div className="grid-4">
            {services.map((service) => (
              <Reveal className="value-block" key={service.slug}>
                <span className="project-type">{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.homeBlurb}</p>
                <a href={asset(service.href)} className="link-action" style={{ marginTop: 14 }}>
                  {service.cta} <span className="arrow">&rarr;</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechnicalCTA
        eyebrow="Next Step"
        title="Assessing GLS for a Specific Job?"
        description="Tell us the equipment you are assessing and we will share the relevant project experience, including scope of work and the documentation issued."
        primaryLabel="Request Project References"
      />
    </Layout>
  );
}
