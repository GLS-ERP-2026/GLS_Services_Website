import { Layout } from '../../../components/layout/Layout';
import { PageBanner } from '../../../components/layout/PageBanner';
import { Reveal } from '../../../components/ui/Reveal';
import { RelatedServices } from '../../../components/ui/RelatedServices';

const gallery = [
  { src: '/assets/images/services/crown-block.jpg', label: 'Crown Block' },
  { src: '/assets/images/services/travelling-block.jpg', label: 'Travelling Block' },
  { src: '/assets/images/services/rotary-table.jpg', label: 'Rotary Table' },
  { src: '/assets/images/services/iron-roughneck.jpg', label: 'Iron Roughneck' },
  { src: '/assets/images/services/casing-stabbing-board.jpg', label: 'Casing Stabbing Board' },
];

export function DrillingEquipmentMro() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-mro.jpg"
        crumbs={[
          { label: 'Home', href: '/index.html' },
          { label: 'Services', href: '/services.html' },
          { label: 'Drilling Equipment MRO' },
        ]}
        title="Drilling Equipment MRO"
        description="Inspection, repair & overhaul for the equipment that keeps your rig running — delivered under ISO 9001, 14001 & 45001 certified processes."
      />

      <section className="section">
        <div className="container">
          <Reveal className="subservice">
            <div className="subservice-media">
              <img src="/assets/images/services/drawworks.jpg" alt="Drawworks MRO" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Drawworks</span>
              <h3>Inspection, Repair &amp; Overhaul</h3>
              <p>
                Full inspection, repair and overhaul services for drawworks, alongside dedicated maintenance and
                troubleshooting support to keep hoisting systems reliable.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Inspection, Repair &amp; Overhaul
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Maintenance &amp; Troubleshooting
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="subservice">
            <div className="subservice-media dual-media">
              <img src="/assets/images/services/mud-pump-1.jpg" alt="Mud pump" />
              <img src="/assets/images/services/mud-pump-2.jpg" alt="Mud pump installed on a rig" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Mud Pumps</span>
              <h3>CAT III &amp; CAT IV Inspection, Refurbishment &amp; Overhaul</h3>
              <p>
                Comprehensive mud pump services spanning inspection through complete refurbishment, backed by CAT III
                and CAT IV inspection capability.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> Inspection, Repair &amp; Overhaul
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Maintenance &amp; Troubleshooting
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> CAT III &amp; CAT IV inspection
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Complete refurbishment and overhaul
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="subservice">
            <div className="subservice-media">
              <img src="/assets/images/services/top-drive.jpg" alt="Top Drives MRO" />
            </div>
            <div className="subservice-copy">
              <span className="eyebrow">Top Drives</span>
              <h3>CAT III Inspection with In-House PLC &amp; VFD Testing</h3>
              <p>
                CAT III and condition inspection for top drives, with mechanical and electrical troubleshooting
                supported by in-house PLC, VFD and software test capabilities.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> CAT III inspection and condition inspection
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Mechanical &amp; Electrical troubleshooting
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> In-house PLC, VFD and software test capabilities
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Assistance with overhaul
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="subservice-full">
            <div className="subservice-copy">
              <span className="eyebrow">Rig Floor Equipment</span>
              <h3>Crown Block, Travelling Block, Rotary Table, Iron Roughneck &amp; Casing Stabbing Board</h3>
              <p>
                Consistent CAT III &amp; CAT IV inspection, refurbishment, overhaul, installation and removal
                services across this equipment group.
              </p>
              <ul>
                <li>
                  <span className="check-ico">&#10003;</span> CAT III &amp; CAT IV inspection
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Refurbishment and Overhaul
                </li>
                <li>
                  <span className="check-ico">&#10003;</span> Installation &amp; Removal
                </li>
              </ul>
            </div>
            <div className="mini-gallery">
              {gallery.map((item) => (
                <figure key={item.src}>
                  <img src={item.src} alt={item.label} />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices excludeSlug="drilling-equipment-mro" />

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Have Equipment That Needs MRO?</h2>
              <p>Send us your equipment details and requirements &mdash; we'll get back to you within 24 hours.</p>
            </div>
            <a href="/contact.html" className="btn btn-primary">
              Request a Quote
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
