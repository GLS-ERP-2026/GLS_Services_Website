import { useCounter } from '../../hooks/useCounter';
import { Reveal } from './Reveal';
import { iconMap, type IconName } from './icons';

export function StatCounter({
  target,
  suffix = '',
  label,
  icon,
}: {
  target: number;
  suffix?: string;
  label: string;
  /** Optional line icon shown above the figure. */
  icon?: IconName;
}) {
  const { ref, display } = useCounter<HTMLSpanElement>(target, suffix);
  const Icon = icon ? iconMap[icon] : null;
  return (
    <Reveal>
      {Icon && (
        <div className="stat-icon">
          <Icon />
        </div>
      )}
      <div className="stat-number">
        <span ref={ref}>{display}</span>
      </div>
      <div className="stat-label">{label}</div>
    </Reveal>
  );
}
