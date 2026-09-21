import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { InfoCard } from '../../components/ui/InfoCard';
import { Button } from '../../components/ui/Button';
import { useFormStub } from '../../hooks/useFormStub';
import { contactInfo } from '../../data/contact';

export function Careers() {
  const { message, handleSubmit } = useFormStub();

  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-careers.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Careers' }]}
        title="Careers at GLS Services"
        description="Thank you for your interest in career opportunities at GLS Services. Fill in the form below and we will get back to you soon."
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          <Reveal>
            <span className="eyebrow">Why GLS</span>
            <h2 className="section-title">Build Your Career in Drilling Equipment MRO</h2>
            <p>
              We're an ISO 9001, 14001 &amp; 45001 certified company serving oil &amp; gas drilling contractors
              across 11 countries. We look for people who share our values of integrity, mindfulness and humility.
            </p>
            <p className="pill-row" style={{ marginTop: 24 }}>
              <span className="pill">Fresher</span>
              <span className="pill">Junior Level (2&ndash;8 yrs)</span>
              <span className="pill">Senior Level (8&ndash;15 yrs)</span>
              <span className="pill">Supervisor</span>
            </p>
            <InfoCard icon="✉️" title="Questions about a role?">
              Email us at <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a> or call{' '}
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>.
            </InfoCard>
            <p className="form-note">
              There are currently no individually posted openings &mdash; this form routes general applications to
              our team for review against current and upcoming positions.
            </p>
          </Reveal>

          <Reveal className="form-card">
            <form noValidate onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="c-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input type="text" id="c-name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" id="c-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Phone</label>
                  <input type="tel" id="c-phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-position">
                    Position Type <span className="req">*</span>
                  </label>
                  <select id="c-position" name="position" required defaultValue="">
                    <option value="" disabled>
                      Select position type
                    </option>
                    <option value="fresher">Fresher</option>
                    <option value="junior">Junior Level (2&ndash;8 years)</option>
                    <option value="senior">Senior Level (8&ndash;15 years)</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="c-cv">
                    Attach Your CV <span className="req">*</span>
                  </label>
                  <input className="file-input" type="file" id="c-cv" name="cv" accept=".pdf,.doc,.docx" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    name="message"
                    placeholder="Tell us a little about yourself and the role you're interested in"
                  />
                </div>
              </div>
              <Button type="submit" block>
                Submit Application
              </Button>
              <p className="form-note">Submissions aren't wired to an email service yet &mdash; see note below.</p>
              <div className={`form-status${message ? ' is-visible' : ''}`} role="status">
                {message}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
