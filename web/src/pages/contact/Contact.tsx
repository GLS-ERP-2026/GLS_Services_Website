import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { InfoCard } from '../../components/ui/InfoCard';
import { Button } from '../../components/ui/Button';
import { useFormStub } from '../../hooks/useFormStub';
import { contactInfo } from '../../data/contact';

export function Contact() {
  const { message, handleSubmit } = useFormStub();

  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-contact.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Contact Us' }]}
        title="Contact Us"
        description="Drop us a message and we will get back to you within 24 hours."
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          <Reveal>
            <InfoCard icon="📍" title="Head Office">
              {contactInfo.headOffice.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < contactInfo.headOffice.lines.length - 1 && <br />}
                </span>
              ))}
            </InfoCard>
            <InfoCard icon="🏭" title="Workshop">
              {contactInfo.workshop.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < contactInfo.workshop.lines.length - 1 && <br />}
                </span>
              ))}
            </InfoCard>
            <InfoCard icon="✉️" title="Email">
              {contactInfo.emails.map((email, i) => (
                <span key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                  {i < contactInfo.emails.length - 1 && <br />}
                </span>
              ))}
            </InfoCard>
            <InfoCard icon="📞" title="Phone">
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
            </InfoCard>
          </Reveal>

          <Reveal className="form-card">
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
              Send Us a Message
            </h2>
            <form noValidate onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ct-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input type="text" id="ct-name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="ct-email">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" id="ct-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="ct-phone">Phone</label>
                  <input type="tel" id="ct-phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="ct-subject">Subject</label>
                  <input type="text" id="ct-subject" name="subject" />
                </div>
                <div className="form-group full">
                  <label htmlFor="ct-message">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="ct-message"
                    name="message"
                    required
                    placeholder="Tell us about your equipment or requirement"
                  />
                </div>
              </div>
              <Button type="submit" block>
                Send Message
              </Button>
              <p className="form-note">
                Submissions aren't wired to an email service yet &mdash; please use the details on the left in the
                meantime.
              </p>
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
