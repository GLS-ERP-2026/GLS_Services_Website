import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { FactPanel } from '../../components/ui/CompanyFact';
import { ValueBlock } from '../../components/ui/ValueBlock';
import { ProcessChips } from '../../components/ui/ProcessTimeline';
import { WorldMap } from '../../components/ui/WorldMap';
import { CertificateCard } from '../../components/ui/CertificateCard';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { coreValues } from '../../data/values';
import { serviceDisciplines, approachStages, workshopProcess } from '../../data/process';
import { certifications } from '../../data/certifications';
import { companyStats, companyFacts } from '../../data/company';
import { operatingRegions, countriesByRegion } from '../../data/operatingCountries';
import { asset } from '../../lib/paths';

export function About() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-about.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Company' }]}
        eyebrow="About GLS"
        title="Engineering Services for Critical Drilling Equipment"
        description="GLS provides equipment inspection, maintenance, repair, overhaul and related field services for the oil & gas and drilling sector."
        actions={
          <>
            <a href={asset('/services.html')} className="btn btn-primary">
              View Capabilities
            </a>
            <a href={asset('/certifications.html')} className="btn btn-outline-light">
              View Certifications
            </a>
          </>
        }
      />

      {/* ---- Who we are ---- */}
      <section className="section">
        <div className="container split split--wide-left split--top">
          <div>
            <Reveal>
              <span className="eyebrow eyebrow--ruled">Company Overview</span>
              <h2>Who We Are</h2>
              <p>
                GLS Services is an ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified organization serving
                the oil and gas drilling sector, with a head office in Dubai and a workshop in Hamriyah Free Zone,
                Sharjah.
              </p>
              <p>
                The company was established to consolidate inspection, maintenance, repair and overhaul under a
                single provider, so drilling contractors are not coordinating separate vendors for condition
                assessment, remedial work and testing on the same piece of equipment.
              </p>
              <p>
                Work has been delivered across {companyStats.countriesServed} countries in the Middle East, Europe,
                Asia and Africa. Technicians are trained in equipment inspection and overhaul procedures and work in
                compliance with applicable API standards.
              </p>
            </Reveal>
          </div>
          <FactPanel heading="Company Profile" facts={companyFacts} />
        </div>
      </section>

      {/* ---- What we do ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Engineering Capabilities"
            title="What We Do"
            description="Six service disciplines, applied to drilling and rig equipment across the workshop and in the field."
          />
          <div className="grid-3">
            {serviceDisciplines.map((item) => (
              <ValueBlock key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Our approach ---- */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Methodology"
            title="How We Approach Equipment Service"
            description="Three stages, in order. Each one only starts once the previous stage has produced a result to work from."
            onDark
          />
          <Reveal className="process-rail process-rail--3">
            {approachStages.map((stage) => (
              <div className="process-step" key={stage.stage}>
                <span className="process-step-num">{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---- Workshop ---- */}
      <section className="section" id="workshop">
        <div className="container">
          <SectionHead
            eyebrow="Workshop & Facilities"
            title="Workshop & Facilities"
            description="The Hamriyah Free Zone workshop in Sharjah handles equipment from receipt through to packaging, so inspection findings, repair work and testing stay under one process."
          />
          <div className="split split--wide-left split--top">
            <Reveal className="split-media">
              <img
                src={asset('/assets/images/services/jacking-gear.jpg')}
                alt="Jacking gear units under refurbishment in the GLS workshop"
              />
              <span className="media-caption">Jacking gear units under refurbishment</span>
            </Reveal>
            <div>
              <Reveal>
                <h3>Workshop Capability</h3>
                <p>
                  Equipment moves through the stages below within the workshop. Where a requirement cannot be met by
                  removing equipment from service, the same activities are supported on site.
                </p>
              </Reveal>
              <div style={{ marginTop: 26 }}>
                <ProcessChips items={workshopProcess} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Global footprint ---- */}
      <section className="section section-muted" id="footprint">
        <div className="container">
          <SectionHead
            eyebrow="Global Footprint"
            title="Where We Operate"
            description={`Equipment and field services delivered across ${companyStats.countriesServed} countries in four regions.`}
            center
          />
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

      {/* ---- Quality ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Quality & QHSE"
            title="Quality & QHSE"
            description="Three certified management systems govern how work is planned, carried out and recorded."
            action={
              <a href={asset('/certifications.html')} className="btn btn-outline btn-sm">
                View Certifications
              </a>
            }
          />
          <div className="cert-grid">
            {certifications.map((cert) => (
              <CertificateCard key={cert.standard} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead eyebrow="What Drives Us" title="Our Values" />
          <div className="grid-4">
            {coreValues.map((value) => (
              <ValueBlock key={value.title} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </div>
      </section>

      <TechnicalCTA
        eyebrow="Next Step"
        title="Discuss an Equipment Requirement"
        description="Send us the equipment details and scope of work, and our team will review the requirement and respond with the appropriate service approach."
      />
    </Layout>
  );
}
