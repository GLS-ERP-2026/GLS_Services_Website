import { Reveal } from './Reveal';
import { DocumentIcon } from './icons';
import type { QualityDocument } from '../../data/certifications';
import { asset } from '../../lib/paths';

/**
 * A document tile is a visual indicator of the type of record supported, not a
 * download — a link is only rendered when an actual file exists (`href` set).
 */
export function DocumentGrid({ documents }: { documents: QualityDocument[] }) {
  return (
    <Reveal className="doc-grid">
      {documents.map((doc) => (
        <div className="doc-tile" key={doc.title}>
          <DocumentIcon className="doc-icon" />
          <div>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            {doc.href && (
              <a href={asset(doc.href)} className="link-action" target="_blank" rel="noreferrer">
                Open <span className="arrow">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </Reveal>
  );
}
