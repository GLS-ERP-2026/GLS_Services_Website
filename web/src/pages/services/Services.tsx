import { useEffect, useRef, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { EquipmentTabs } from '../../components/ui/EquipmentTabs';
import { Reveal } from '../../components/ui/Reveal';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { ValueCard } from '../../components/ui/ValueCard';
import { equipmentCategories } from '../../data/equipment';
import { services } from '../../data/services';
import { asset } from '../../lib/paths';

const whyGls = [
  { title: 'API-Aligned', description: 'Procedures follow applicable API standards on every inspection and overhaul.', icon: 'check' as const },
  { title: 'ISO Certified', description: 'ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certified quality, environmental and safety management.', icon: 'shield' as const },
  { title: '24-Hr Response', description: 'We aim to respond to every enquiry within 24 hours.', icon: 'clock' as const },
  { title: '17+ Countries', description: 'Field-proven experience delivering services across global regions.', icon: 'globe' as const },
];

const capabilities = [
  {
    title: 'Offshore Operations',
    description:
      'API Q2 certified crews perform critical services on offshore assets, with 24-hour mobilization. Integrated mechanical, electrical and Ex-inspection in a single deployment.',
    image: '/assets/images/services/capability-offshore.jpg',
  },
  {
    title: 'Workshop Operations',
    description:
      'Our 20,000 sq-ft OEM-agnostic workshop in Sharjah, UAE is equipped for full CAT IV overhauls on all major drilling equipment, with rigorous QA/QC documentation.',
    image: '/assets/images/services/capability-workshop.jpg',
  },
  {
    title: 'Onshore Field Teams',
    description:
      'Dedicated onshore field teams for land rig maintenance, repair, troubleshooting and commissioning, with rapid deployment across MENA, Africa and Asia-Pacific.',
    image: '/assets/images/services/capability-onshore.png',
  },
];

/**
 * The page has two views under one banner: an overview (page 1) and the
 * equipment tabs plus everything else (page 2). They swap in place rather
 * than being separate pages.
 *
 * Page 2 is marked by an equipment tab in the hash (#mechanical etc.), so
 * links to a tab land on page 2, and the browser's Back button returns from
 * page 2 to the overview.
 */
function isEquipmentHash() {
  return typeof window !== 'undefined' && equipmentCategories.some((c) => `#${c.id}` === window.location.hash);
}

export function Services() {
  const [showEquipment, setShowEquipment] = useState(isEquipmentHash);
  const contentRef = useRef<HTMLDivElement>(null);
  const shownView = useRef(showEquipment);

  useEffect(() => {
    const sync = () => setShowEquipment(isEquipmentHash());
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  // After a swap, bring the top of the new view into sight. Skipped on first
  // load so a plain visit starts at the banner as usual.
  useEffect(() => {
    if (shownView.current === showEquipment) return;
    shownView.current = showEquipment;
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showEquipment]);

  function openEquipment() {
    window.history.pushState(null, '', `#${equipmentCategories[0].id}`);
    setShowEquipment(true);
  }

  function openOverview() {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setShowEquipment(false);
  }

  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-services.jpg"
        title="Our Services"
        description="Full-scope maintenance, repair and overhaul for drilling contractors — from rig-floor equipment to crane certification and used equipment sourcing."
      />

      <div ref={contentRef} className="services-view" key={showEquipment ? 'equipment' : 'overview'}>
        {showEquipment ? <EquipmentView onBack={openOverview} /> : <OverviewView onNext={openEquipment} />}
      </div>
    </Layout>
  );
}

function OverviewView({ onNext }: { onNext: () => void }) {
  return (
    <>
      <section className="section services-intro-band">
        <div className="services-intro-bg" aria-hidden="true">
          <img src={asset('/assets/images/services/services-intro-bg.jpg')} alt="" />
        </div>
        <div className="container">
          <Reveal className="section-head center services-intro">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="section-title">Asset Life Cycle Management Experts</h2>
            <p className="section-sub">
              GLS is an API Q2 and ABS ISO-certified service provider in the drilling industry, delivering
              comprehensive maintenance, repair, overhaul and technical consultancy for offshore and onshore drilling
              operations. Our ground teams are led by supervisors with a minimum of 20 years of hands-on experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What We Deliver</span>
            <h2 className="section-title">Offshore and Onshore Operational Capabilities</h2>
          </Reveal>
          <div className="grid-3">
            {capabilities.map((item) => (
              <Reveal as="article" key={item.title} className="service-card capability-card">
                <div className="service-card-media">
                  <img src={asset(item.image)} alt={item.title} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="services-next">
            <button type="button" className="btn btn-primary" onClick={onNext}>
              View Equipment &amp; Scope <span className="arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function EquipmentView({ onBack }: { onBack: () => void }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <button type="button" className="services-back" onClick={onBack}>
            <span className="arrow">&larr;</span> Back to Overview
          </button>

          <EquipmentTabs />

          <div className="grid-4 section-block-divided">
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
    </>
  );
}
