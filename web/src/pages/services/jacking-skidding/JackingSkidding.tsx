import { Layout } from '../../../components/layout/Layout';
import { PageBanner } from '../../../components/layout/PageBanner';
import { Reveal } from '../../../components/ui/Reveal';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { asset } from '../../../lib/paths';

export function JackingSkidding() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-jacking-skidding.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Services', href: '/services.html' },
          { label: 'Jacking & Skidding' },
        ]}
        title="Jacking & Skidding"
        description="Inspection, repair and complete overhaul of jacking and skidding systems, backed by experience overhauling 200+ rigs worldwide."
      />

      <section className="section">
        <div className="container">
          <Reveal className="subservice">
            <div className="subservice-media">
              <img src={asset('/assets/images/services/jacking-gear.jpg')} alt="Jacking system service" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Jacking System</span>
              <h3>Inspection, Repair &amp; Complete Overhaul</h3>
              <p>
                GLS offers inspection, repair and complete overhaul services for all jacking systems used in drilling
                rigs, with the experience of overhauling over 200 rigs worldwide. Gearbox overhaul is provided
                through partner shops.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Inspection, repair &amp; complete overhaul of all
                  jacking systems
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Experience overhauling 200+ rigs worldwide
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Gearbox overhaul via partner shops
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="subservice">
            <div className="subservice-media">
              <img src={asset('/assets/images/services/service-jacking-skidding.svg')} alt="Skidding system service" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Skidding System</span>
              <h3>Electrical &amp; Hydraulic Skidding Systems</h3>
              <p>
                We deliver comprehensive solutions covering all electrical rack and pinion skidding systems as well
                as hydraulic skidding systems.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Electrical rack &amp; pinion skidding systems
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Hydraulic skidding systems
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Full inspection, repair &amp; overhaul support
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices excludeSlug="jacking-skidding" />

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Need Jacking or Skidding Support?</h2>
              <p>Tell us about your system and we'll scope an inspection or overhaul plan.</p>
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
