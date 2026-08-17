import { footerQuickLinks, servicesNav } from '../../data/nav';
import { contactInfo } from '../../data/contact';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/index.html" className="footer-logo">
              <img src="/assets/images/logo/gls-logo-full.png" alt="GLS Services" />
            </a>
            <p>
              An ISO 9001, 14001 &amp; 45001 certified provider of end-to-end drilling equipment MRO solutions for oil &amp;
              gas drilling contractors across 11 countries.
            </p>
          </div>
          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              {servicesNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span>📍</span>
                <span>
                  <strong>Head Office</strong>
                  {contactInfo.headOffice.short}
                </span>
              </div>
              <div className="footer-contact-item">
                <span>🏭</span>
                <span>
                  <strong>Workshop</strong>
                  {contactInfo.workshop.short}
                </span>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <span>
                  <strong>Email</strong>
                  <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <span>
                  <strong>Phone</strong>
                  <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; 2026 GLS Services. All rights reserved.</span>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
