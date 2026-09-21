import { Layout } from '../../../components/layout/Layout';
import { PageBanner } from '../../../components/layout/PageBanner';
import { Reveal } from '../../../components/ui/Reveal';
import { ValueCard } from '../../../components/ui/ValueCard';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { asset } from '../../../lib/paths';

const capabilities = [
  { title: 'Marine Machinery', description: 'Reusable and reconditioned marine machinery sourced from ship-breaking yards worldwide.', icon: 'crate' as const },
  { title: 'Spare Parts', description: 'A broad inventory of used and reconditioned spare parts for drilling equipment.', icon: 'gear' as const },
  { title: 'Global Network', description: 'An extensive network of service providers spanning ship-breaking yards across the world.', icon: 'globe' as const },
  { title: 'Quality Assessed', description: 'Equipment reviewed for quality and reliability before it reaches your operation.', icon: 'check' as const },
];

export function UsedEquipmentSupply() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-used-equipment.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Services', href: '/services.html' },
          { label: 'Used Equipment Supply' },
        ]}
        title="Used Equipment Supply"
        description="Reusable, reconditioned and used marine machinery and spare parts, sourced through a global network of ship-breaking yards."
      />

      <section className="section">
        <div className="container about-split">
          <Reveal>
            <span className="eyebrow">Global Sourcing Network</span>
            <h2 className="section-title">Reconditioned Machinery, Sourced Responsibly</h2>
            <p>
              GLS has an extensive network of service providers and supplies reusable, reconditioned and used marine
              machinery and spare parts obtained from various ship-breaking yards across the world.
            </p>
            <p>
              Every item is assessed to meet the quality and reliability standards our customers expect &mdash;
              giving drilling contractors a cost-effective route to equipment and spares without compromising on
              performance.
            </p>
          </Reveal>
          <Reveal className="about-media">
            <img src={asset('/assets/images/services/used-equipment.jpg')} alt="Used equipment supply" />
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What We Supply</span>
            <h2 className="section-title">Our Sourcing Capabilities</h2>
          </Reveal>
          <div className="grid-4">
            {capabilities.map((item) => (
              <ValueCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <RelatedServices excludeSlug="used-equipment-supply" alt={false} />

      <section className="section section-dark">
        <div className="container">
          <Reveal className="cta-banner" style={{ background: 'none', padding: 0 }}>
            <div>
              <h2>Looking to Source Equipment or Spares?</h2>
              <p>Tell us what you need and we'll check availability across our network.</p>
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
