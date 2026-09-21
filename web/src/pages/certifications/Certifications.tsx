import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { ValueCard } from '../../components/ui/ValueCard';
import { CertificationRow } from '../../components/ui/CertificationRow';
import { certificationBadges, additionalAccreditation } from '../../data/certifications';
import { asset } from '../../lib/paths';

export function Certifications() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-certifications.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Certifications' }]}
        title="Certifications"
        description="GLS Services is an ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and API Q2 2nd Edition certified company providing services to oil & gas drilling contractors."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Quality, Environment &amp; Safety</span>
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-sub">
              Four certified management systems govern how work is planned, carried out and recorded.
            </p>
          </Reveal>

          {/* Same logo row as the home page, with editions rather than short names. */}
          <Reveal>
            <CertificationRow badges={certificationBadges} size="lg" showIcon={false} useFullName />
          </Reveal>

          <div className="grid-4" style={{ marginTop: 56 }}>
            {certificationBadges.map((cert) => (
              <ValueCard key={cert.name} title={cert.fullName} description={cert.description} icon={cert.icon} centered />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Additional Accreditation</span>
            <h2 className="section-title">Independently Verified</h2>
            <p className="section-sub">Alongside our certifications, GLS Services holds the following accreditations.</p>
          </Reveal>
          <Reveal className="cert-strip">
            {additionalAccreditation.map((item) => (
              <div className="cert-item" key={item.name}>
                <img src={asset(item.badge)} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Want to Verify Our Certifications?</h2>
              <p>Reach out and we'll be happy to share certificate copies for your due diligence.</p>
            </div>
            <a href={asset('/contact.html')} className="btn btn-primary">
              Contact Us
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
