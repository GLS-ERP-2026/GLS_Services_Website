import { Reveal } from './Reveal';
import { iconMap } from './icons';
import type { Certification } from '../../data/certifications';
import { asset } from '../../lib/paths';

const PENDING = 'Available on request';

/**
 * A certificate panel renders only the detail rows that have verified values.
 * Anything not yet supplied shows "Available on request" rather than a blank,
 * a guess or an invented certificate number.
 */
export function CertificateCard({ cert }: { cert: Certification }) {
  const Icon = iconMap[cert.icon];
  const details: { label: string; value?: string }[] = [
    { label: 'Certification Body', value: cert.body },
    { label: 'Certificate No.', value: cert.certificateNo },
    { label: 'Validity', value: cert.validity },
  ];

  return (
    <Reveal as="article" className="cert-panel">
      <div className="cert-panel-head">
        <Icon />
        <div>
          <span className="cert-standard">{cert.standard}</span>
          <span className="cert-system">{cert.system}</span>
        </div>
      </div>
      <div className="cert-panel-body">
        <p>{cert.meaning}</p>
        <dl className="cert-detail-list">
          {details.map((row) => (
            <div className="cert-detail-row" key={row.label}>
              <dt>{row.label}</dt>
              <dd className={row.value ? undefined : 'is-pending'}>{row.value ?? PENDING}</dd>
            </div>
          ))}
          {cert.scope && (
            <div className="cert-detail-row">
              <dt>Scope</dt>
              <dd>{cert.scope}</dd>
            </div>
          )}
        </dl>
        {cert.documentHref ? (
          <a href={asset(cert.documentHref)} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
            View Certificate
          </a>
        ) : (
          <a href={asset('/contact.html')} className="btn btn-outline btn-sm">
            Request Certificate Copy
          </a>
        )}
      </div>
    </Reveal>
  );
}
