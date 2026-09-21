import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { EquipmentCard } from '../../components/ui/EquipmentCard';
import { CapabilityTable } from '../../components/ui/CapabilityTable';
import { TechnicalCTA } from '../../components/ui/TechnicalCTA';
import { equipment, equipmentForService } from '../../data/equipment';
import { services } from '../../data/services';
import { asset } from '../../lib/paths';

const groups = [
  {
    slug: 'drilling-equipment-mro' as const,
    eyebrow: 'Drilling Equipment MRO',
    title: 'Drilling & Rig Equipment',
    description:
      'Hoisting, circulating and rig floor equipment, inspected and overhauled to the applicable category for each assembly.',
  },
  {
    slug: 'jacking-skidding' as const,
    eyebrow: 'Jacking & Skidding',
    title: 'Jacking & Skidding Systems',
    description:
      'Jacking systems and both electrical rack & pinion and hydraulic skidding systems, in the workshop or on the rig.',
  },
  {
    slug: 'cranes' as const,
    eyebrow: 'Crane Services',
    title: 'Crane Systems',
    description:
      'Electrical and diesel-hydraulic cranes, covering annual inspection, five-year special survey support, repair and overhaul.',
  },
];

export function Equipment() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-mro.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Equipment' }]}
        eyebrow="Equipment"
        title="Equipment We Support"
        description="Every equipment type GLS inspects, repairs, overhauls or supplies, with the published scope for each."
        actions={
          <>
            <a href={asset('/contact.html#rfq')} className="btn btn-primary">
              Request a Technical Quote
            </a>
            <a href="#matrix" className="btn btn-outline-light">
              View Capability Matrix
            </a>
          </>
        }
      />

      {groups.map((group, i) => {
        const items = equipmentForService(group.slug);
        const service = services.find((s) => s.slug === group.slug);
        return (
          <section className={`section${i % 2 === 1 ? ' section-muted' : ''}`} id={group.slug} key={group.slug}>
            <div className="container">
              <SectionHead
                eyebrow={group.eyebrow}
                title={group.title}
                description={group.description}
                action={
                  service && (
                    <a href={asset(service.href)} className="btn btn-outline btn-sm">
                      {service.cta}
                    </a>
                  )
                }
              />
              <Reveal className="equip-grid">
                {items.map((item) => (
                  <EquipmentCard key={item.slug} item={item} cta="View Capability" />
                ))}
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* ---- Capability matrix ---- */}
      <section className="section section-dark" id="matrix">
        <div className="container">
          <SectionHead
            eyebrow="Service Capability"
            title="Scope by Equipment Type"
            description="The full published scope in one table. Use it to check a requirement before sending an enquiry."
            onDark
          />
          <Reveal>
            <CapabilityTable items={equipment} caption="Service capability by equipment type" />
          </Reveal>
        </div>
      </section>

      {/* ---- Used equipment ---- */}
      <section className="section">
        <div className="container split split--wide-left split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled">Used Equipment</span>
            <h2>Looking to Buy Rather Than Repair?</h2>
            <p>
              GLS also supplies reusable and reconditioned marine machinery and spare parts, sourced through an
              established network of ship-breaking yards. Condition is stated as inspected, refurbished or as-is
              before anything is offered.
            </p>
            <div className="btn-row" style={{ marginTop: 26 }}>
              <a href={asset('/services/used-equipment-supply.html')} className="btn btn-outline">
                View Used Equipment
              </a>
            </div>
          </Reveal>
          <Reveal className="split-media">
            <img src={asset('/assets/images/services/used-equipment.jpg')} alt="Used marine machinery and spare parts" />
            <span className="media-caption">Reconditioned marine machinery</span>
          </Reveal>
        </div>
      </section>

      <TechnicalCTA
        eyebrow="Next Step"
        title="Can We Handle Your Equipment?"
        description="Send us the make, model and serial number along with the scope you need covered, and our team will confirm what GLS can do with it."
      />
    </Layout>
  );
}
