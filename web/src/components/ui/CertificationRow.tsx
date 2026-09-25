import { CertificateIcon } from './icons';
import type { CertificationBadge } from '../../data/certifications';
import { asset } from '../../lib/paths';

/**
 * Certification logos under a centred heading. Every logo sits on a white tile
 * of the same height and keeps its own width, since the marks differ in shape
 * (the ISO marks are wide, API Q2 is nearly square). A badge without an
 * `image` renders a slot carrying its name instead.
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
                <span className="cert-tile">
                  <img
                    src={asset(badge.image.src)}
                    width={badge.image.width}
                    height={badge.image.height}
                    alt={label}
                    className="cert-logo"
                  />
                </span>
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
