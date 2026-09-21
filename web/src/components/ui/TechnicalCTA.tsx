import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { asset } from '../../lib/paths';

interface TechnicalCTAProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  /** Label for the primary (orange) action. Defaults to the site-wide primary CTA. */
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/** Full-width dark closing CTA. Used as the last section of most pages. */
export function TechnicalCTA({
  eyebrow,
  title,
  description,
  primaryLabel = 'Request a Technical Quote',
  primaryHref = '/contact.html#rfq',
  secondaryLabel = 'Contact GLS',
  secondaryHref = '/contact.html',
}: TechnicalCTAProps) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <Reveal>
          {eyebrow && <span className="eyebrow eyebrow--ruled eyebrow--on-dark">{eyebrow}</span>}
          <h2>{title}</h2>
          <p>{description}</p>
        </Reveal>
        <Reveal className="btn-row">
          <a href={asset(primaryHref)} className="btn btn-primary">
            {primaryLabel}
          </a>
          {secondaryLabel && (
            <a href={asset(secondaryHref)} className="btn btn-outline-light">
              {secondaryLabel}
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/** Compact inline CTA for use inside a light section. */
export function InlineCTA({
  title,
  description,
  label = 'Request a Technical Quote',
  href = '/contact.html#rfq',
}: {
  title: ReactNode;
  description: ReactNode;
  label?: string;
  href?: string;
}) {
  return (
    <Reveal className="cta-inline">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={asset(href)} className="btn btn-primary">
        {label}
      </a>
    </Reveal>
  );
}
