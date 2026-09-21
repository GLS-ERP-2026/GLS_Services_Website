import { CertificateIcon } from './icons';
import type { CertificationBadge } from '../../data/certifications';
import { asset } from '../../lib/paths';

/**
 * Certification logos under a centred heading. A badge without an `image` set
 * renders a reserved slot at the logo's aspect ratio carrying the name, so the
 * layout is the final one before the artwork arrives.
 */
export function CertificationRow({
  badges,
  size = 'sm',
  heading = 'Certifications',
  showIcon = true,
}: {
  badges: CertificationBadge[];
  /** 'sm' for the strip under the hero, 'lg' for the Certifications section. */
  size?: 'sm' | 'lg';
  heading?: string;
  showIcon?: boolean;
}) {
  return (
    <div className={`cert-row cert-row--${size}`}>
      <p className="cert-row-heading">
        {showIcon && <CertificateIcon />}
        <span>{heading}</span>
      </p>
      <ul className="cert-row-list">
        {badges.map((badge) => (
          <li key={badge.name}>
            {badge.image ? (
              <img src={asset(badge.image)} alt={badge.name} className="cert-logo" />
            ) : (
              <span className="cert-slot" aria-label={badge.name}>
                <span className="cert-slot-name">{badge.name}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
