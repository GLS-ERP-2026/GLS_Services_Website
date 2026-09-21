import { Reveal } from './Reveal';
import type { ProcessStep } from '../../data/process';

/** Numbered technical markers — no decorative icons, no connecting graphics. */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <Reveal className="process-rail">
      {steps.map((step) => (
        <div className="process-step" key={step.step}>
          <span className="process-step-num">{step.step}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </Reveal>
  );
}

/** Compact labelled grid version, for listing workshop capabilities. */
export function ProcessChips({ items }: { items: string[] }) {
  return (
    <Reveal className="process-chips">
      {items.map((item, i) => (
        <div className="process-chip" key={item}>
          <span>{String(i + 1).padStart(2, '0')}</span>
          <span>{item}</span>
        </div>
      ))}
    </Reveal>
  );
}
