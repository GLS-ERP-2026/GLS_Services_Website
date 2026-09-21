import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { Button } from '../../components/ui/Button';
import { FormOutcome } from '../../components/ui/FormOutcome';
import { PinIcon, FactoryIcon, MailIcon, PhoneIcon } from '../../components/ui/icons';
import { useMailtoForm } from '../../hooks/useMailtoForm';
import { contactInfo, rfqServices, rfqEquipmentTypes } from '../../data/contact';
import { asset } from '../../lib/paths';

const RFQ_LABELS: Record<string, string> = {
  company: 'Company',
  contactName: 'Contact Name',
  email: 'Email',
  phone: 'Phone',
  equipmentType: 'Equipment Type',
  manufacturer: 'Manufacturer',
  model: 'Model',
  serialNumber: 'Serial Number',
  service: 'Service Required',
  location: 'Equipment Location',
  requiredDate: 'Required Completion Date',
  description: 'Description / Scope of Work',
};

export function Contact() {
  const rfq = useMailtoForm({
    to: contactInfo.emails[0],
    subjectPrefix: 'Technical RFQ',
    subjectField: 'equipmentType',
    labels: RFQ_LABELS,
  });

  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-contact.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Contact' }]}
        eyebrow="Contact GLS"
        title="Discuss Your Equipment Requirement"
        description="Send us your equipment details, service requirement or RFQ and our team will review the request."
        actions={
          <>
            <a href="#rfq" className="btn btn-primary">
              Request a Technical Quote
            </a>
            <a href={`mailto:${contactInfo.emails[0]}`} className="btn btn-outline-light">
              Email GLS
            </a>
          </>
        }
      />

      {/* ---- Two contact routes ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Choose a Route"
            title="Two Ways to Reach Us"
            description="Pick the route that matches what you need, so your enquiry lands with the right information attached."
          />
          <div className="route-grid">
            <Reveal className="route-card route-card--primary">
              <span className="eyebrow">Technical RFQ</span>
              <h3>Equipment Inspection, Repair or Overhaul</h3>
              <p>
                For a specific piece of equipment. Include the make, model, serial number and the scope you need
                covered, and the request reaches our team ready to be reviewed.
              </p>
              <a href="#rfq" className="btn btn-primary">
                Request a Technical Quote
              </a>
            </Reveal>
            <Reveal className="route-card">
              <span className="eyebrow">General Enquiry</span>
              <h3>Company &amp; Service Enquiries</h3>
              <p>
                For questions about the company, capabilities, certifications or pre-qualification documentation,
                where no specific equipment is involved yet.
              </p>
              <a href={`mailto:${contactInfo.emails[0]}`} className="btn btn-outline">
                Contact GLS
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Contact details ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead eyebrow="Locations" title="Office & Workshop" />
          <div className="grid-4">
            <Reveal className="contact-block">
              <span className="contact-block-label">
                <PinIcon /> Head Office
              </span>
              <p>
                <strong>{contactInfo.headOffice.company}</strong>
                {contactInfo.headOffice.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal className="contact-block">
              <span className="contact-block-label">
                <FactoryIcon /> Workshop
              </span>
              <p>
                <strong>{contactInfo.workshop.company}</strong>
                {contactInfo.workshop.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal className="contact-block">
              <span className="contact-block-label">
                <MailIcon /> Email
              </span>
              <p>
                {contactInfo.emails.map((email) => (
                  <span key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                    <br />
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal className="contact-block">
              <span className="contact-block-label">
                <PhoneIcon /> Phone
              </span>
              <p>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Technical RFQ form ---- */}
      <section className="section" id="rfq">
        <div className="container split split--wide-left split--top">
          <Reveal className="form-panel">
            <div className="form-panel-head">
              <span className="eyebrow eyebrow--ruled">Technical RFQ</span>
              <h2>Request a Technical Quote</h2>
              <p>
                Fill in what you know &mdash; the more equipment detail you can give, the more specific the response
                can be. Fields marked with an asterisk are required.
              </p>
            </div>

            <form noValidate onSubmit={rfq.handleSubmit}>
              <fieldset className="form-fieldset">
                <legend>Your Details</legend>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="rfq-company">
                      Company <span className="req">*</span>
                    </label>
                    <input type="text" id="rfq-company" name="company" required autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-name">
                      Contact Name <span className="req">*</span>
                    </label>
                    <input type="text" id="rfq-name" name="contactName" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-email">
                      Email <span className="req">*</span>
                    </label>
                    <input type="email" id="rfq-email" name="email" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-phone">Phone</label>
                    <input type="tel" id="rfq-phone" name="phone" autoComplete="tel" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Equipment</legend>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="rfq-equipment">
                      Equipment Type <span className="req">*</span>
                    </label>
                    <select id="rfq-equipment" name="equipmentType" required defaultValue="">
                      <option value="" disabled>
                        Select equipment type
                      </option>
                      {rfqEquipmentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-manufacturer">Manufacturer</label>
                    <input type="text" id="rfq-manufacturer" name="manufacturer" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-model">Model</label>
                    <input type="text" id="rfq-model" name="model" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-serial">Serial Number</label>
                    <input type="text" id="rfq-serial" name="serialNumber" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Requirement</legend>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="rfq-service">
                      Service Required <span className="req">*</span>
                    </label>
                    <select id="rfq-service" name="service" required defaultValue="">
                      <option value="" disabled>
                        Select service
                      </option>
                      {rfqServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-location">Equipment Location</label>
                    <input type="text" id="rfq-location" name="location" placeholder="Port, yard, rig or country" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rfq-date">Required Completion Date</label>
                    <input type="date" id="rfq-date" name="requiredDate" />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="rfq-description">
                      Description <span className="req">*</span>
                    </label>
                    <textarea
                      id="rfq-description"
                      name="description"
                      required
                      placeholder="Scope of work, known faults, inspection findings to date, or anything else relevant to the requirement."
                    />
                  </div>
                  <div className="form-group full">
                    <span className="hint">
                      <strong>Attachments:</strong> drawings, inspection reports, equipment photos and RFQ documents
                      can be attached directly to the email this form opens.
                    </span>
                  </div>
                </div>
              </fieldset>

              <Button type="submit" block>
                Submit Technical RFQ
              </Button>
              <p className="form-note">
                This site has no backend. Submitting opens a pre-filled email in your own mail client &mdash; nothing
                is transmitted by the website, and no request is recorded here until you send that email.
              </p>
              <FormOutcome
                composed={rfq.composed}
                wasTruncated={rfq.wasTruncated}
                email={contactInfo.emails[0]}
                phone={contactInfo.phone}
                phoneHref={contactInfo.phoneHref}
                attachmentNote="Attach any drawings, reports or equipment photos to that email before sending."
              />
            </form>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow eyebrow--ruled">What Happens Next</span>
              <h2>How We Handle an RFQ</h2>
              <p>
                Your request is reviewed against the equipment and the scope described. Where the requirement is
                clear, you receive a service approach. Where it is not, we come back with the specific questions
                needed to scope it properly rather than guessing.
              </p>
            </Reveal>
            <Reveal className="fact-panel" style={{ marginTop: 32 }}>
              <div className="fact-panel-head">Useful to Include</div>
              <div className="fact-row">
                <span className="fact-label">Identification</span>
                <span className="fact-value">Make, model and serial number</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Condition</span>
                <span className="fact-value">Known faults or previous inspection findings</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Scope</span>
                <span className="fact-value">Inspection only, repair, or full overhaul</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Location</span>
                <span className="fact-value">Where the equipment sits, and whether it can be moved</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Timing</span>
                <span className="fact-value">Required completion date or rig schedule constraint</span>
              </div>
            </Reveal>
            <Reveal className="cta-inline" style={{ marginTop: 32 }}>
              <div>
                <h3>Not equipment-specific?</h3>
                <p>For company, capability or pre-qualification questions, email us directly.</p>
              </div>
              <a href={`mailto:${contactInfo.emails[0]}`} className="btn btn-outline">
                Contact GLS
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container text-center">
          <Reveal>
            <span className="eyebrow eyebrow--ruled eyebrow--on-dark" style={{ justifyContent: 'center' }}>
              Capabilities
            </span>
            <h2>Not Sure Which Service You Need?</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Start from the capability overview or the equipment list and work back to the right service line.
            </p>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 28 }}>
              <a href={asset('/services.html')} className="btn btn-outline-light">
                View Capabilities
              </a>
              <a href={asset('/equipment.html')} className="btn btn-outline-light">
                View Equipment
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
