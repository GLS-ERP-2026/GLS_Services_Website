import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { ValueCard } from '../../components/ui/ValueCard';
import { isoCertifications, additionalAccreditation } from '../../data/certifications';

export function Certifications() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-certifications.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Certifications' }]}
        title="Certifications"
        description="GLS Services is an ISO 9001-2015, ISO 14001-2015 and ISO 45001-2015 certified company providing various services to Oil & Gas drilling contractors."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Quality, Environment &amp; Safety</span>
            <h2 className="section-title">Our ISO Certifications</h2>
          </Reveal>
          <div className="grid-3">
            {isoCertifications.map((cert) => (
              <ValueCard key={cert.title} title={cert.title} description={cert.description} icon={cert.icon as 'check' | 'leaf' | 'shield'} centered />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Additional Accreditation</span>
            <h2 className="section-title">Independently Verified</h2>
            <p className="section-sub">Alongside our ISO certifications, GLS Services holds the following accreditations.</p>
          </Reveal>
          <Reveal className="cert-strip">
            {additionalAccreditation.map((item) => (
              <div className="cert-item" key={item.name}>
                <img src={item.badge} alt={item.name} />
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
            <a href="/contact.html" className="btn btn-primary">
              Contact Us
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
