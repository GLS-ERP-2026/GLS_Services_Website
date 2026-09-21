import { Reveal } from './Reveal';
import type { CompanyFactItem } from '../../data/company';

/** Bordered company-profile panel — label/value rows under a dark header. */
export function FactPanel({ heading, facts }: { heading: string; facts: CompanyFactItem[] }) {
  return (
    <Reveal className="fact-panel">
      <div className="fact-panel-head">{heading}</div>
      {facts.map((fact) => (
        <div className="fact-row" key={fact.label}>
          <span className="fact-label">{fact.label}</span>
          <span className="fact-value">{fact.value}</span>
        </div>
      ))}
    </Reveal>
  );
}

/** Large accent-ruled label + value, for a handful of standout facts. */
export function FigureBlock({ label, value }: CompanyFactItem) {
  return (
    <div className="figure-block">
      <span className="figure-label">{label}</span>
      <span className="figure-value">{value}</span>
    </div>
  );
}
