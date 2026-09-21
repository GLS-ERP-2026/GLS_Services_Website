import { certifications } from '../../data/certifications';
import { CheckIcon, FactoryIcon } from './icons';

/**
 * Horizontal credibility bar directly beneath the hero. Only carries
 * certifications and service facts that are verified in company data — no
 * client logos, no award badges, no "trusted by" claims.
 */
export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Certifications and service model">
      <div className="trust-strip-inner">
        {certifications.map((cert) => (
          <span className="trust-item" key={cert.standard}>
            <CheckIcon />
            {cert.standard}
          </span>
        ))}
        <span className="trust-item trust-item--muted">
          <FactoryIcon />
          Workshop &amp; Field Services
        </span>
      </div>
    </section>
  );
}
