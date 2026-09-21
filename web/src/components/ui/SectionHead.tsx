import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  onDark?: boolean;
  /** Renders heading left / action right with a rule beneath. */
  action?: ReactNode;
}

export function SectionHead({ eyebrow, title, description, center, onDark, action }: SectionHeadProps) {
  const eyebrowClass = `eyebrow eyebrow--ruled${onDark ? ' eyebrow--on-dark' : ''}`;

  if (action) {
    return (
      <Reveal className="section-head-split">
        <div>
          <span className={eyebrowClass}>{eyebrow}</span>
          <h2>{title}</h2>
          {description && <p className="lead" style={{ marginTop: 14 }}>{description}</p>}
        </div>
        <div>{action}</div>
      </Reveal>
    );
  }

  return (
    <Reveal className={`section-head${center ? ' center' : ''}`}>
      <span className={eyebrowClass}>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </Reveal>
  );
}
