import { Layout } from '../../../components/layout/Layout';
import { PageBanner } from '../../../components/layout/PageBanner';
import { Reveal } from '../../../components/ui/Reveal';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { asset } from '../../../lib/paths';

export function Cranes() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-cranes.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Services', href: '/services.html' }, { label: 'Cranes' }]}
        title="Cranes"
        description="Crane inspection, repair and overhaul services, backed by a strong engineering and technical background and API-approved field technicians."
      />

      <section className="section">
        <div className="container">
          <Reveal className="subservice">
            <div className="subservice-media">
              <img src={asset('/assets/images/services/crane.jpg')} alt="Crane inspection service" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Inspection</span>
              <h3>Annual &amp; Five-Year Special Survey Inspections</h3>
              <p>
                We provide annual inspections for all crane types, plus five-year special survey inspections, giving
                you confidence your lifting equipment stays compliant and safe.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Annual inspections for all crane types
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Five-year special survey inspections
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> API-approved field technicians
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="subservice">
            <div className="subservice-media">
              <img src={asset('/assets/images/services/service-cranes.svg')} alt="Crane repair and overhaul service" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Repair &amp; Overhaul</span>
              <h3>Electrical &amp; Diesel-Hydraulic Crane Services</h3>
              <p>
                GLS handles challenging crane repair and overhaul situations across both electrical and
                diesel-hydraulic crane types, with strong engineering and technical support behind every job.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Electrical crane services
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Diesel-hydraulic crane services
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Repair and overhaul operations
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices excludeSlug="cranes" />

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Due for a Crane Inspection?</h2>
              <p>Get in touch to schedule an annual or five-year special survey inspection.</p>
            </div>
            <a href={asset('/contact.html')} className="btn btn-primary">
              Request a Quote
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
