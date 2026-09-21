import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { ServiceRowList } from '../../components/ui/ServiceSection';
import { ProcessTimeline } from '../../components/ui/ProcessTimeline';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { services, serviceScopeColumns } from '../../data/services';
import { mroProcess } from '../../data/process';
import { asset } from '../../lib/paths';

export function Services() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-services.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Capabilities' }]}
        eyebrow="Capabilities"
        title="Engineering & MRO Services"
        description="From equipment inspection and overhaul to field support and used equipment supply, GLS provides services across the equipment lifecycle."
        actions={
          <>
            <a href={asset('/contact.html#rfq')} className="btn btn-primary">
              Request a Technical Quote
            </a>
            <a href={asset('/equipment.html')} className="btn btn-outline-light">
              View Equipment
            </a>
          </>
        }
      />

      {/* ---- Four core services ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Service Lines"
            title="Four Core Services"
            description="Each service line covers a defined equipment group and scope of work. Follow a line through to see the equipment, inspection categories and documentation it carries."
          />
          <ServiceRowList services={services} />
        </div>
      </section>

      {/* ---- Service comparison ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="Service Comparison"
            title="Scope at a Glance"
            description="Where each service is delivered and what falls inside its published scope."
          />
          <Reveal>
            <p className="table-scroll-hint">Scroll the table sideways to see every column.</p>
            <div className="table-wrap">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Delivery</th>
                    {serviceScopeColumns.map((col) => (
                      <th scope="col" key={col.key}>
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.slug}>
                      <th scope="row" className="cell-equipment">
                        <a href={asset(service.href)}>{service.title}</a>
                      </th>
                      <td>{service.delivery}</td>
                      {serviceScopeColumns.map((col) => (
                        <td key={col.key}>
                          {service.scope[col.key] ? (
                            <span className="tick" aria-label="Yes">
                              &#10003;
                            </span>
                          ) : (
                            <span className="tick-none" aria-label="Not stated">
                              &ndash;
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-note">
              &#10003; indicates an activity within the published scope of that service line. A dash indicates it is
              not part of that scope &mdash; contact GLS to confirm a specific requirement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Process ---- */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Workshop Process"
            title="How Equipment Moves Through GLS"
            description="The same sequence applies across the engineering service lines, with the scope at each stage set by the job requirements."
            onDark
          />
          <ProcessTimeline steps={mroProcess} />
        </div>
      </section>

      <TechnicalCTA
        eyebrow="Next Step"
        title="Need Equipment Support?"
        description="Send us the equipment details, service required and location. Our team will review the requirement and respond with the appropriate service approach."
      />
    </Layout>
  );
}
