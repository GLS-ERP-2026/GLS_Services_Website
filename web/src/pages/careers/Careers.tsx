import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { SectionHead } from '../../components/ui/SectionHead';
import { ValueBlock, ReasonList } from '../../components/ui/ValueBlock';
import { Button } from '../../components/ui/Button';
import { FormOutcome } from '../../components/ui/FormOutcome';
import { useMailtoForm } from '../../hooks/useMailtoForm';
import { careerCriteria } from '../../data/values';
import { contactInfo } from '../../data/contact';

const areasOfWork = [
  {
    title: 'Mechanical',
    icon: 'wrench' as const,
    description: 'Strip-down, repair and reassembly of drawworks, mud pumps, rig floor equipment and jacking systems.',
  },
  {
    title: 'Electrical',
    icon: 'gear' as const,
    description: 'Electrical troubleshooting and test work, including PLC, VFD and software testing on top drives.',
  },
  {
    title: 'Inspection',
    icon: 'eye' as const,
    description: 'Visual and dimensional inspection, including category inspection scopes and crane surveys.',
  },
  {
    title: 'Workshop',
    icon: 'factory' as const,
    description: 'Receipt, cleaning, assembly, preservation and packaging within the Hamriyah Free Zone workshop.',
  },
  {
    title: 'Field Service',
    icon: 'globe' as const,
    description: 'Site-based execution on rigs and at client facilities, across the regions GLS operates in.',
  },
  {
    title: 'Engineering',
    icon: 'ruler' as const,
    description: 'Technical support behind scope definition, repair decisions and testing requirements.',
  },
  {
    title: 'Administration',
    icon: 'clipboard' as const,
    description: 'Project documentation, QHSE records, procurement and commercial support functions.',
  },
];

const APPLICATION_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  area: 'Position / Area of Interest',
  experience: 'Experience',
  message: 'Message',
};

export function Careers() {
  const application = useMailtoForm({
    to: contactInfo.emails[0],
    subjectPrefix: 'Career Application',
    subjectField: 'area',
    labels: APPLICATION_LABELS,
  });

  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-careers.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Careers' }]}
        eyebrow="Careers"
        title="Build Your Career in Engineering Services"
        description="GLS welcomes applications from professionals interested in engineering, workshop, inspection, field service and supporting functions."
        actions={
          <a href="#apply" className="btn btn-primary">
            Submit Your CV
          </a>
        }
      />

      {/* ---- Areas of work ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Areas of Work"
            title="Where People Work at GLS"
            description="These are the functions the business actually runs on. There are no individually posted vacancies at present — applications are reviewed against current and upcoming requirements."
          />
          <div className="grid-4">
            {areasOfWork.map((area) => (
              <ValueBlock key={area.title} title={area.title} description={area.description} icon={area.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- What we look for ---- */}
      <section className="section section-muted">
        <div className="container">
          <SectionHead
            eyebrow="What We Look For"
            title="What Makes Someone Effective Here"
            description="Four things that matter across every function, whether you are in the workshop, on a rig or behind the documentation."
          />
          <ReasonList points={careerCriteria} />
        </div>
      </section>

      {/* ---- Application ---- */}
      <section className="section" id="apply">
        <div className="container split split--wide-left split--top">
          <Reveal className="form-panel">
            <div className="form-panel-head">
              <span className="eyebrow eyebrow--ruled">Application</span>
              <h2>Submit Your CV</h2>
              <p>
                Tell us where you fit and what you have worked on. Fields marked with an asterisk are required.
              </p>
            </div>

            <form noValidate onSubmit={application.handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="c-name">
                    Name <span className="req">*</span>
                  </label>
                  <input type="text" id="c-name" name="name" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" id="c-email" name="email" required autoComplete="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Phone</label>
                  <input type="tel" id="c-phone" name="phone" autoComplete="tel" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-area">
                    Position / Area of Interest <span className="req">*</span>
                  </label>
                  <select id="c-area" name="area" required defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    {areasOfWork.map((area) => (
                      <option key={area.title} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="c-experience">
                    Experience <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="c-experience"
                    name="experience"
                    required
                    placeholder="e.g. 6 years — mud pump and drawworks overhaul"
                  />
                </div>
                <div className="form-group full">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    name="message"
                    placeholder="Equipment you have worked on, certifications held, and where you are based."
                  />
                </div>
                <div className="form-group full">
                  <span className="hint">
                    <strong>CV:</strong> attach your CV to the email this form opens. PDF or Word is fine.
                  </span>
                </div>
              </div>

              <Button type="submit" block>
                Submit Application
              </Button>
              <p className="form-note">
                This site has no backend. Submitting opens a pre-filled email in your own mail client &mdash; nothing
                is transmitted by the website, and no application is recorded here until you send that email with
                your CV attached.
              </p>
              <FormOutcome
                composed={application.composed}
                wasTruncated={application.wasTruncated}
                email={contactInfo.emails[0]}
                phone={contactInfo.phone}
                phoneHref={contactInfo.phoneHref}
                attachmentNote="Attach your CV to that email before sending — it is the part we most need."
              />
            </form>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow eyebrow--ruled">Levels</span>
              <h2>Who We Hear From</h2>
              <p>
                Applications come from across the experience range, and all of them are reviewed. Being early in your
                career is not a barrier &mdash; a lot of this work is learned on the equipment.
              </p>
            </Reveal>
            <Reveal className="fact-panel" style={{ marginTop: 32 }}>
              <div className="fact-panel-head">Experience Levels</div>
              <div className="fact-row">
                <span className="fact-label">Fresher</span>
                <span className="fact-value">Entry level, no prior field experience required</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Junior</span>
                <span className="fact-value">2&ndash;8 years</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Senior</span>
                <span className="fact-value">8&ndash;15 years</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">Supervisor</span>
                <span className="fact-value">Workshop or field team leadership</span>
              </div>
            </Reveal>
            <Reveal className="cta-inline" style={{ marginTop: 32 }}>
              <div>
                <h3>Questions about a role?</h3>
                <p>
                  Email <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a> or call{' '}
                  <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
