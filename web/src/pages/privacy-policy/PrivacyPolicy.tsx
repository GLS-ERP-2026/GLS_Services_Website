import { Layout } from '../../components/layout/Layout';
import { PageBanner } from '../../components/layout/PageBanner';
import { Reveal } from '../../components/ui/Reveal';
import { contactInfo } from '../../data/contact';

export function PrivacyPolicy() {
  return (
    <Layout>
      <PageBanner
        image="/assets/images/hero/banner-privacy.jpg"
        crumbs={[{ label: 'Home', href: '/index.html' }, { label: 'Privacy Policy' }]}
        title="Privacy Policy"
        description="Last updated: 14 August 2026"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal
            className="info-card"
            style={{ borderColor: 'var(--accent-500)', background: 'rgba(224, 164, 88, 0.08)' }}
          >
            <h3>⚠️ Placeholder Content</h3>
            <p>
              This is a generic draft privacy policy included so the page isn't empty. It has{' '}
              <strong>not been reviewed by legal counsel</strong> and should be replaced with GLS Services' actual
              policy (or the original site's wording) before this site goes live.
            </p>
          </Reveal>

          <Reveal>
            <h2>1. Introduction</h2>
            <p>
              GLS Services ("GLS", "we", "us", or "our") respects your privacy and is committed to protecting the
              personal information you share with us through this website. This policy explains what information we
              collect, how we use it, and the choices you have.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information you voluntarily provide through our Contact and Careers forms, including
              your name, email address, phone number, message content, and &mdash; for career applications &mdash;
              your CV/resume and related documents.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information collected to respond to enquiries, evaluate job applications, and communicate
              with you about our services. We do not sell your personal information to third parties.
            </p>

            <h2>4. Form Submissions</h2>
            <p>
              At present, the Contact and Careers forms on this site are not yet connected to an email delivery or
              storage service. Please contact us directly at{' '}
              <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a> or{' '}
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a> until this is enabled.
            </p>

            <h2>5. Cookies</h2>
            <p>
              This website does not currently use tracking or analytics cookies. If that changes in the future, this
              policy will be updated to describe what is collected and how to opt out.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We take reasonable measures to protect information you share with us. However, no method of
              transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information you have shared with us
              by contacting <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a>.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a
              revised "last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
