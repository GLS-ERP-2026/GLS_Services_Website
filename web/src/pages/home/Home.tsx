import { Layout } from '../../components/layout/Layout';
import { HeroSlideshow } from '../../components/home/HeroSlideshow';
import { Reveal } from '../../components/ui/Reveal';
import { ServiceExpander } from '../../components/ui/ServiceExpander';
import { CertificationRow } from '../../components/ui/CertificationRow';
import { ValueCard } from '../../components/ui/ValueCard';
import { StatCounter } from '../../components/ui/StatCounter';
import { services } from '../../data/services';
import { certificationBadges } from '../../data/certifications';
import { homeCoreValues, whyGls } from '../../data/values';
import { asset } from '../../lib/paths';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';

const HERO_ACTIONS_REVEAL_THRESHOLD_PX = 4;

export function Home() {
  const showHeroActions = useScrollThreshold(HERO_ACTIONS_REVEAL_THRESHOLD_PX);

  return (
    <Layout headerVariant="home-hero">
      <section className="hero">
        <div className="hero-media">
          <HeroSlideshow />
        </div>
        <div className="hero-badge-row">
          <span className="hero-eyebrow">ISO 9001:2015 &middot; ISO 14001:2015 &middot; ISO 45001:2018</span>
        </div>
        <div className="container hero-inner">
          <h1 className="hero-title">
            A Comprehensive Solution for Your <em>Drilling Equipment</em> Requirements
          </h1>
          <p className="hero-sub">
            GLS Services supports drilling contractors with inspection, maintenance, repair, overhaul, jacking &amp;
            skidding, crane services, and used equipment supply across multiple operating regions.
          </p>
          <div className={`hero-actions${showHeroActions ? '' : ' is-concealed'}`}>
            <a href={asset('/contact.html')} className="btn btn-primary" tabIndex={showHeroActions ? undefined : -1}>
              Request a Quote
            </a>
            <a
              href={asset('/services.html')}
              className="btn btn-outline"
              tabIndex={showHeroActions ? undefined : -1}
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="stats-bar section-sm">
        <div className="container">
          <div className="stat-grid">
            <StatCounter target={17} suffix="+" label="Countries Served" icon="globe" />
            <StatCounter target={6000} suffix="+" label="Equipment Inspected & Serviced" icon="factory" />
            <StatCounter target={20} suffix="+" label="Years of Experience" icon="clock" />
            <StatCounter target={3000} suffix="+" label="Projects Completed" icon="check" />
          </div>
          <Reveal className="cert-bar">
            <CertificationRow badges={certificationBadges} size="sm" useFullName />
          </Reveal>
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
            <h2 className="section-title">Trusted Maintenance &amp; Overhaul Partner for Drilling Contractors</h2>
            <p className="section-sub">
              GLS Services provides servicing and technical support for drilling equipment across the oil &amp; gas
              industry. From inspection and maintenance through to repair and overhaul, our work is focused on
              equipment reliability and long-term performance. Operations are supported by ISO 9001:2015, ISO 14001:2015, ISO
              45001:2018 and API Q2 (2nd Edition) certifications.
            </p>
            <ul className="about-list">
              <li>
                <span className="check-ico">&#10003;</span> End-to-end inspection, repair &amp; overhaul solutions
              </li>
              <li>
                <span className="check-ico">&#10003;</span> Experienced, trained field technicians
              </li>
              <li>
                <span className="check-ico">&#10003;</span> Operations spanning 17+ countries worldwide
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
          <ServiceExpander services={services} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head center">
            <h2 className="section-title">Why GLS Services</h2>
          </Reveal>
          <div className="grid-4">
            {whyGls.map((item) => (
              <ValueCard key={item.title} title={item.title} description={item.description} icon={item.icon} onDark />
            ))}
          </div>

          <div className="section-block-divided">
            <Reveal className="section-head center">
              <h2 className="section-title">Our Core Values</h2>
            </Reveal>
            <div className="grid-3">
              {homeCoreValues.map((value) => (
                <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} onDark />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Looking for a Reliable Service Partner?</h2>
              <p>
                Speak with our team about equipment inspection, maintenance, repair, overhaul or supply requirements.
              </p>
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
