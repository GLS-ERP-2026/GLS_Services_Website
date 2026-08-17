import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { ValueCard } from '../../components/ui/ValueCard';
import { services } from '../../data/services';
import { asset } from '../../lib/paths';

const whyGls = [
  { title: 'API-Aligned', description: 'Procedures follow applicable API standards on every inspection and overhaul.', icon: 'check' as const },
  { title: 'ISO Certified', description: 'ISO 9001, 14001 & 45001 certified quality, environmental and safety management.', icon: 'shield' as const },
  { title: '24-Hr Response', description: 'We aim to respond to every enquiry within 24 hours.', icon: 'clock' as const },
  { title: '11 Countries', description: 'Field-proven experience delivering services across global regions.', icon: 'globe' as const },
];

export function Services() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-services.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Services' }]}
        title="Our Services"
        description="Full-scope equipment MRO capabilities for drilling contractors — from rig-floor equipment to crane certification and used equipment sourcing."
      />

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} description={service.blurb} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Why GLS</span>
            <h2 className="section-title">Built Around Uptime, Safety &amp; Compliance</h2>
          </Reveal>
          <div className="grid-4">
            {whyGls.map((item) => (
              <ValueCard key={item.title} title={item.title} description={item.description} icon={item.icon} onDark />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Not Sure Which Service You Need?</h2>
              <p>Tell us about your equipment and requirements &mdash; we'll help you scope the right solution.</p>
            </div>
            <a href={asset('/contact.html')} className="btn btn-primary">
              Talk to Our Team
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
