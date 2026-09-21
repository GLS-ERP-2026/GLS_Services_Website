import { footerCapabilities, footerCompany, footerQuality, footerLegal } from '../../data/nav';
import { contactInfo } from '../../data/contact';
import { certificationLabels } from '../../data/certifications';
import { companyStats } from '../../data/company';
import { asset } from '../../lib/paths';
import { PinIcon, FactoryIcon, MailIcon, PhoneIcon, LinkedInIcon } from '../ui/icons';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-grid">
          <div className="footer-about">
            <a href={asset('/index.html')} className="footer-logo">
              <img src={asset('/assets/images/logo/gls-logo-full.png')} alt="GLS Services" />
            </a>
            <p>
              Inspection, maintenance, repair, overhaul and field support for drilling and rig equipment, delivered
              from a workshop in Hamriyah Free Zone, Sharjah, to clients in {companyStats.countriesServed} countries.
            </p>
            <ul className="footer-certs">
              {certificationLabels.map((label) => (
                <li key={label} className="footer-cert-tag">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Capabilities</div>
            <ul className="footer-links">
              {footerCapabilities.map((link) => (
                <li key={link.href}>
                  <a href={asset(link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Company</div>
            <ul className="footer-links">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <a href={asset(link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Quality</div>
            <ul className="footer-links">
              {footerQuality.map((link) => (
                <li key={link.label}>
                  <a href={asset(link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <PinIcon />
                <span>
                  <strong>Head Office</strong>
                  {contactInfo.headOffice.short}
                </span>
              </div>
              <div className="footer-contact-item">
                <FactoryIcon />
                <span>
                  <strong>Workshop</strong>
                  {contactInfo.workshop.short}
                </span>
              </div>
              <div className="footer-contact-item">
                <MailIcon />
                <span>
                  <strong>Email</strong>
                  <a href={`mailto:${contactInfo.emails[0]}`}>{contactInfo.emails[0]}</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon />
                <span>
                  <strong>Phone</strong>
                  <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                </span>
              </div>
              {contactInfo.linkedin && (
                <div className="footer-contact-item">
                  <LinkedInIcon />
                  <span>
                    <strong>LinkedIn</strong>
                    <a href={contactInfo.linkedin} target="_blank" rel="noreferrer noopener">
                      GLS Services
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>&copy; {YEAR} GLS Services. All rights reserved.</span>
          <div className="footer-bottom-links">
            {footerLegal.map((link) => (
              <a key={link.href} href={asset(link.href)}>
                {link.label}
              </a>
            ))}
            <a href={asset('/contact.html')}>Contact GLS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
