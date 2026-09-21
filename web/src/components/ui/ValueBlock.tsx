import { Reveal } from './Reveal';
import { iconMap, type IconName } from './icons';
import type { ReasonPoint } from '../../data/values';

/** Bordered information block with an icon, heading and a short explanation. */
export function ValueBlock({ title, description, icon }: { title: string; description: string; icon?: IconName }) {
  const Icon = icon ? iconMap[icon] : null;
  return (
    <Reveal className="value-block">
      {Icon && <Icon className="value-block-icon" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </Reveal>
  );
}

/** Stacked label/paragraph rows — one point per row, aligned on a grid. */
export function ReasonList({ points, onDark }: { points: ReasonPoint[]; onDark?: boolean }) {
  return (
    <Reveal className={`reason-list${onDark ? ' on-dark' : ''}`}>
      {points.map((point) => (
        <div className="reason-item" key={point.title}>
          <h3>{point.title}</h3>
          <p>{point.description}</p>
        </div>
      ))}
    </Reveal>
  );
}
