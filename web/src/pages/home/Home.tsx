import { Layout } from '../../components/layout/Layout';
import { Reveal } from '../../components/ui/Reveal';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { ValueCard } from '../../components/ui/ValueCard';
import { StatCounter } from '../../components/ui/StatCounter';
import { services } from '../../data/services';
import { homeCoreValues } from '../../data/values';
import { asset } from '../../lib/paths';

export function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-media">
          <img src={asset('/assets/images/hero/hero-home.jpg')} alt="" role="presentation" />
        </div>
        <div className="container hero-inner">
          <span className="hero-eyebrow">ISO 9001 &middot; ISO 14001 &middot; ISO 45001 Certified</span>
          <h1 className="hero-title">
            A Comprehensive Solution for Your <em>Drilling Equipment</em> Requirements
          </h1>
          <p className="hero-sub">
            GLS Services delivers end-to-end inspection, maintenance, repair &amp; overhaul solutions for drilling
            equipment &mdash; backed by API-compliant procedures, experienced field technicians, and a track record
            across 11 countries.
          </p>
          <div className="hero-actions">
            <a href={asset('/contact.html')} className="btn btn-primary">
              Get a Quote
            </a>
            <a href={asset('/services.html')} className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="stats-bar section-sm">
        <div className="container stat-grid">
          <StatCounter target={11} suffix="+" label="Countries Served" />
          <StatCounter target={200} suffix="+" label="Rigs Overhauled" />
          <StatCounter target={3} label="ISO Certifications" />
          <StatCounter target={24} suffix="-Hr" label="Average Response Time" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-split">
          <Reveal className="about-media">
            <img src={asset('/assets/images/about/who-we-are.jpg')} alt="GLS Services offshore drilling platform" />
            <div className="about-badge">
              <strong>15+</strong>
              <span>Years Combined Field Experience</span>
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Trusted MRO Partner for Oil &amp; Gas Drilling Contractors</h2>
            <p className="section-sub">
              GLS Services is an ISO 9001-2015, ISO 14001-2015 and ISO 45001-2015 certified company providing an
              end-to-end service solution for the maintenance and upkeep of drilling equipment &mdash; combining
              modern technologies with a genuinely solution-oriented approach.
            </p>
            <ul className="about-list">
              <li>
                <span className="check-ico">&#10003;</span> End-to-end inspection, repair &amp; overhaul solutions
              </li>
              <li>
                <span className="check-ico">&#10003;</span> Procedures aligned with applicable API standards
              </li>
              <li>
                <span className="check-ico">&#10003;</span> Experienced, trained field technicians
              </li>
              <li>
                <span className="check-ico">&#10003;</span> Operations spanning 11 countries worldwide
              </li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 32 }}>
              <a href={asset('/about.html')} className="btn btn-dark">
                Learn More About Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub">
              A full suite of equipment MRO capabilities purpose-built for drilling contractors, from rig-floor
              equipment to crane certification and used equipment sourcing.
            </p>
          </Reveal>
          <div className="grid-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </Reveal>
          <div className="grid-3">
            {homeCoreValues.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} onDark />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Certified &amp; Compliant</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-sub">
              Our processes are independently certified so you can trust the quality behind every inspection, repair
              and overhaul.
            </p>
          </Reveal>
          <Reveal className="cert-strip">
            <div className="iso-badges">
              <span className="iso-badge">ISO 9001:2015</span>
              <span className="iso-badge">ISO 14001:2015</span>
              <span className="iso-badge">ISO 45001:2015</span>
            </div>
            <div className="cert-item">
              <img src={asset('/assets/images/certifications/badge-anab.svg')} alt="ANAB Certified" />
              <span>ANAB Certified</span>
            </div>
            <div className="cert-item">
              <img src={asset('/assets/images/certifications/badge-ct.svg')} alt="CT Certified" />
              <span>CT Certified</span>
            </div>
          </Reveal>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href={asset('/certifications.html')} className="btn btn-dark">
              View All Certifications
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Need a Reliable MRO Partner for Your Rig?</h2>
              <p>
                Talk to our team about inspection, repair, overhaul or used equipment requirements &mdash; we
                typically respond within 24 hours.
              </p>
            </div>
            <a href={asset('/contact.html')} className="btn btn-primary">
              Get in Touch
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
