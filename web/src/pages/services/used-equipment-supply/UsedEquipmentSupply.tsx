import { Layout } from '../../../components/layout/Layout';
import { PageHeader } from '../../../components/layout/PageHeader';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHead } from '../../../components/ui/SectionHead';
import { RelatedServices } from '../../../components/ui/RelatedServices';
import { TechnicalCTA } from '../../../components/ui/TechnicalCTA';
import { CrateIcon } from '../../../components/ui/icons';
import { usedEquipmentStages } from '../../../data/process';
import { inventory, conditionCategories } from '../../../data/inventory';
import { asset } from '../../../lib/paths';

/** Fields an inventory card carries — shown as the listing schema while stock is empty. */
const listingFields = [
  'Manufacturer',
  'Model',
  'Serial Number',
  'Equipment Type',
  'Condition',
  'Inspection Status',
  'Refurbished / As-Is',
  'Location',
  'Availability',
];

export function UsedEquipmentSupply() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-used-equipment.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Capabilities', href: '/services.html' },
          { label: 'Used Equipment' },
        ]}
        eyebrow="Used Equipment"
        title="Inspected & Refurbished Equipment"
        description="Explore used equipment available through GLS, subject to current stock and project requirements."
        actions={
          <a href={asset('/contact.html#rfq')} className="btn btn-primary">
            Request Equipment Availability
          </a>
        }
      />

      {/* ---- How GLS handles used equipment ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="How GLS Handles Used Equipment"
            description="Equipment is sourced through an established network of ship-breaking yards and handled in three stages before it reaches you."
          />
          <Reveal className="process-rail process-rail--3">
            {usedEquipmentStages.map((stage) => (
              <div className="process-step" key={stage.stage}>
                <span className="process-step-num">{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---- Equipment listing ---- */}
      <section className="section section-muted" id="listing">
        <div className="container">
          <SectionHead
            eyebrow="Equipment Listing"
            title="Current Availability"
            description="Stock changes with what comes through the sourcing network, so availability is confirmed against a live enquiry."
          />
          {inventory.length > 0 ? (
            <div className="project-grid">
              {inventory.map((item) => (
                <article className="project-card" key={item.id}>
                  {item.image && (
                    <div className="project-card-media">
                      <img src={asset(item.image)} alt={`${item.manufacturer} ${item.model}`} loading="lazy" />
                    </div>
                  )}
                  <div className="project-card-body">
                    <span className="project-type">{item.equipmentType}</span>
                    <h3>
                      {item.manufacturer} {item.model}
                    </h3>
                    <dl className="project-spec">
                      {item.serialNumber && (
                        <div>
                          <dt>Serial Number</dt>
                          <dd>{item.serialNumber}</dd>
                        </div>
                      )}
                      <div>
                        <dt>Condition</dt>
                        <dd>{item.condition}</dd>
                      </div>
                      {item.inspectionStatus && (
                        <div>
                          <dt>Inspection Status</dt>
                          <dd>{item.inspectionStatus}</dd>
                        </div>
                      )}
                      {item.location && (
                        <div>
                          <dt>Location</dt>
                          <dd>{item.location}</dd>
                        </div>
                      )}
                      {item.availability && (
                        <div>
                          <dt>Availability</dt>
                          <dd>{item.availability}</dd>
                        </div>
                      )}
                    </dl>
                    <a href={asset('/contact.html#rfq')} className="btn btn-outline btn-sm">
                      Enquire
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="split split--wide-left split--top">
              <Reveal className="empty-state">
                <CrateIcon />
                <h3>Contact GLS for current equipment availability</h3>
                <p>
                  Stock is not published as a standing list. Tell us the equipment type, manufacturer or model you
                  are looking for and we will confirm what is currently available through the sourcing network.
                </p>
                <a href={asset('/contact.html#rfq')} className="btn btn-primary">
                  Request Equipment Availability
                </a>
              </Reveal>
              <Reveal className="fact-panel">
                <div className="fact-panel-head">What a Listing Carries</div>
                {listingFields.map((field) => (
                  <div className="fact-row" key={field} style={{ gridTemplateColumns: '1fr' }}>
                    <span className="fact-value">{field}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* ---- Condition categories ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Condition Categories"
            title="How Condition Is Stated"
            description="Every item offered is described using one of three categories, so its state is unambiguous before you commit."
          />
          <Reveal className="equip-rows">
            {conditionCategories.map((category) => (
              <div className="condition-row" key={category.label}>
                <span className="condition-tag">{category.label}</span>
                <p>{category.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---- Sourcing ---- */}
      <section className="section section-dark">
        <div className="container split split--wide-right split--top">
          <Reveal>
            <span className="eyebrow eyebrow--ruled eyebrow--on-dark">Sourcing Network</span>
            <h2>Where the Equipment Comes From</h2>
            <p>
              GLS supplies reusable, reconditioned and used marine machinery and spare parts obtained through an
              established network of service providers and ship-breaking yards. Equipment is assessed against the
              requirement before it is offered.
            </p>
          </Reveal>
          <Reveal className="split-media">
            <img src={asset('/assets/images/services/used-equipment.jpg')} alt="Used marine machinery and spare parts" />
            <span className="media-caption">Reconditioned marine machinery</span>
          </Reveal>
        </div>
      </section>

      <RelatedServices excludeSlug="used-equipment-supply" />

      <TechnicalCTA
        eyebrow="Next Step"
        title="Looking to Source Equipment or Spares?"
        description="Tell us the equipment type, manufacturer or model you need and we will check current availability across the sourcing network."
        primaryLabel="Request Equipment Availability"
      />
    </Layout>
  );
}
