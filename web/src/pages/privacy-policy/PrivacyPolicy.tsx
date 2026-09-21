import { Layout } from '../../components/layout/Layout';
import { PageHeader } from '../../components/layout/PageHeader';
import { Reveal } from '../../components/ui/Reveal';
import { contactInfo } from '../../data/contact';

/**
 * Structure only. The wording below is a generic draft and has NOT been
 * reviewed by legal counsel — the banner at the top of the page says so
 * plainly rather than presenting it as a finished policy. Replace the section
 * bodies with legally reviewed content before launch; the headings match the
 * structure that review should fill in.
 */
const EFFECTIVE_DATE = '14 August 2026';

export function PrivacyPolicy() {
  return (
    <Layout>
      <PageHeader
        image="/assets/images/hero/banner-privacy.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy Policy"
        description="How GLS Services handles information submitted through this website."
      />

      <section className="section">
        <div className="container">
          <div className="legal-doc">
            <Reveal className="legal-meta">
              <span>
                <strong>Effective Date:</strong> {EFFECTIVE_DATE}
              </span>
              <span>
                <strong>Applies to:</strong> glsserv.com
              </span>
              <span>
                <strong>Status:</strong> Draft, pending legal review
              </span>
            </Reveal>

            <Reveal className="notice-panel">
              <h3>Draft &mdash; not yet legally reviewed</h3>
              <p>
                This document sets out the structure of the policy and a generic draft of its content. It has not
                been reviewed by legal counsel and should be replaced with GLS Services&rsquo; reviewed policy before
                this site goes live. Do not rely on it as a statement of GLS Services&rsquo; legal position.
              </p>
            </Reveal>

            <Reveal>
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly through the forms on this website &mdash; principally
                your name, company, email address, telephone number, the equipment and service details you describe,
                and any documents you choose to send us.
              </p>

              <h2>2. How Information Is Used</h2>
              <p>
                Information is used to respond to enquiries, scope and quote requested services, evaluate job
                applications, and communicate with you about those matters. We do not sell personal information.
              </p>

              <h2>3. Contact Forms</h2>
              <p>
                The forms on this site do not transmit data to a server operated by GLS Services. Submitting a form
                opens a pre-filled message in your own email client, which you then send yourself. Until you send
                that email, nothing has been shared with us, and the website itself stores no copy of what you typed.
              </p>

              <h2>4. CV Submissions</h2>
              <p>
                CVs and supporting documents sent to us by email are used to assess your application against current
                and upcoming requirements. They are handled by the personnel involved in that assessment.
              </p>

              <h2>5. Cookies</h2>
              <p>
                This website does not set advertising or analytics cookies. Your browser may store limited technical
                data required to display the site, and the web font used on the site is served by a third party (see
                section 6).
              </p>

              <h2>6. Third-Party Services</h2>
              <p>
                This site is hosted on GitHub Pages and loads its typeface from Google Fonts. Those providers may
                record technical request information, such as IP address and browser type, under their own privacy
                policies. Email you send us is handled by our email provider.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                Information you send us by email is retained for as long as needed to handle your enquiry or
                application and to meet any applicable record-keeping obligations, after which it is deleted.
              </p>

              <h2>8. Your Rights</h2>
              <p>
                Subject to applicable law, you may request access to the personal information we hold about you, ask
                for it to be corrected or deleted, or object to how it is used. Contact us using the details below
                and we will respond to your request.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                For any question about this policy or about information you have sent us, contact GLS Services at{' '}
                <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a> or{' '}
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>.
              </p>
              <p>{contactInfo.headOffice.short}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
