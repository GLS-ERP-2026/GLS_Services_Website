import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { ValueCard } from '../../components/ui/ValueCard';
import { WorldMap } from '../../components/ui/WorldMap';
import { aboutCoreValues } from '../../data/values';
import { operatingCountries } from '../../data/operatingCountries';
import { asset } from '../../lib/paths';

export function About() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-about.jpg"
        title="About GLS Services"
        description="An ISO-certified partner for drilling equipment maintenance, repair & overhaul — built on integrity, mindfulness and humility."
      />

      <section className="section">
        <div className="container about-split">
          <Reveal>
            <span className="eyebrow">Company Overview</span>
            <h2 className="section-title">Consolidated MRO, Delivered With Discipline</h2>
            <p>
              GLS Services is an ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified organization serving the
              oil and gas drilling sector. The company was established to provide comprehensive maintenance and
              equipment management solutions for drilling contractors across multiple regions.
            </p>
            <p>
              Recognizing industry demand for consolidated management of inspection, maintenance, repair and
              overhaul services, GLS Services built its offerings around cost efficiency and strict adherence to
              safety and environmental standards &mdash; without compromising on quality.
            </p>
            <p>
              <strong>GLS provides services across 17+ countries</strong>, tailoring its approach to each customer's
              requirements. Our team undergoes comprehensive training in equipment inspection and overhaul
              procedures, working in compliance with applicable API standards and rigorous safety protocols.
            </p>
          </Reveal>
          <Reveal className="about-media">
            <img src={asset('/assets/images/about/about-team.svg')} alt="GLS Services team on site" />
            <div className="about-badge">
              <strong>17+</strong>
              <span>Countries of Operation</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-split about-split--reverse">
          <Reveal>
            <span className="eyebrow">Where We Operate</span>
            <h2 className="section-title">At Our Workshop or On Your Site</h2>
            <p>
              With dedicated workshop capabilities and experienced field teams, GLS Services supports customers both
              at our facilities and at their operational sites. Our services extend to onshore and offshore
              locations, including drilling rigs, shipyards, dry docks and other customer facilities, so we can
              provide flexible equipment support wherever it's needed.
            </p>
          </Reveal>
          <Reveal className="about-media">
            <img
              src={asset('/assets/images/about/where-we-operate.jpg')}
              alt="Jack-up drilling rig alongside a shipyard quay"
            />
          </Reveal>
        </div>
      </section>

      <section className="section world-map-section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Global Footprint</span>
            <p className="section-sub">Drilling equipment MRO support delivered across 17+ countries.</p>
          </Reveal>
          <Reveal>
            <WorldMap />
            <ul className="world-map-countries">
              {operatingCountries.map((country) => (
                <li key={country.isoNumeric} className={`world-map-chip${country.isHq ? ' is-hq' : ''}`}>
                  {country.name}
                  {country.isHq && <span className="world-map-chip-tag">HQ</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section photo-section">
        <div className="photo-section-media">
          <img src={asset('/assets/images/about/vision-goal.jpg')} alt="" role="presentation" />
        </div>
        <Reveal className="container photo-section-inner text-center" style={{ maxWidth: 780, margin: '0 auto' }}>
          <span className="eyebrow">Our Vision</span>
          <h2 className="section-title">
            "To be the most preferred solution provider for drilling equipment maintenance, repair &amp; overhaul
            worldwide."
          </h2>
        </Reveal>
      </section>

      <section className="section photo-section">
        <div className="photo-section-media">
          <img src={asset('/assets/images/about/values.jpg')} alt="" role="presentation" />
        </div>
        <div className="container photo-section-inner">
          <Reveal className="section-head center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-sub">
              Three principles guide every engagement, every inspection and every relationship we build.
            </p>
          </Reveal>
          <div className="grid-3">
            {aboutCoreValues.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} onDark />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Certified Across Quality, Environment &amp; Safety</h2>
              <p>ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, plus ANAB and CT accreditation.</p>
            </div>
            <a href={asset('/certifications.html')} className="btn btn-primary">
              View Certifications
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
