import { useCounter } from '../../hooks/useCounter';
import { Reveal } from './Reveal';

export function StatCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { ref, display } = useCounter<HTMLSpanElement>(target, suffix);
  return (
    <Reveal>
      <div className="stat-number">
        <span ref={ref}>{display}</span>
      </div>
      <div className="stat-label">{label}</div>
    </Reveal>
  );
}
