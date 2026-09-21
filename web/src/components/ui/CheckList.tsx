import { CheckIcon } from './icons';

/** Bordered checklist row set. `cols` splits it into two aligned columns. */
export function CheckList({ items, cols }: { items: string[]; cols?: boolean }) {
  return (
    <ul className={`check-list${cols ? ' check-cols' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckIcon className="check-ico" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
