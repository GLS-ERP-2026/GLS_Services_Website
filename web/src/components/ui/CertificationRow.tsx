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
  useFullName = false,
}: {
  badges: CertificationBadge[];
  /** 'sm' for the strip under the hero, 'lg' for the Certifications section. */
  size?: 'sm' | 'lg';
  heading?: string;
  showIcon?: boolean;
  /** Show the edition (ISO 45001:2018) rather than the short name (ISO 45001). */
  useFullName?: boolean;
}) {
  return (
    <div className={`cert-row cert-row--${size}`}>
      <p className="cert-row-heading">
        {showIcon && <CertificateIcon />}
        <span>{heading}</span>
      </p>
      <ul className="cert-row-list">
        {badges.map((badge) => {
          const label = useFullName ? badge.fullName : badge.name;
          return (
            <li key={badge.name}>
              {badge.image ? (
                <img src={asset(badge.image)} alt={label} className="cert-logo" />
              ) : (
                <span className="cert-slot" aria-label={label}>
                  <span className="cert-slot-name">{label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
