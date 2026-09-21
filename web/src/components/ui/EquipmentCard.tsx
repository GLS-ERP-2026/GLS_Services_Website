import type { EquipmentItem } from '../../data/equipment';
import { Reveal } from './Reveal';
import { CheckIcon } from './icons';
import { asset } from '../../lib/paths';

export function EquipmentCard({ item, cta = 'View Capability' }: { item: EquipmentItem; cta?: string }) {
  return (
    <article className="equip-card">
      <div className="equip-card-media">
        <img src={asset(item.image)} alt={item.name} loading="lazy" />
      </div>
      <div className="equip-card-body">
        <h3>{item.name}</h3>
        {item.inspectionScope && <span className="equip-scope-tag">{item.inspectionScope}</span>}
        <p>{item.summary}</p>
        <a href={asset(item.href)} className="link-action">
          {cta} <span className="arrow">&rarr;</span>
        </a>
      </div>
    </article>
  );
}

/** Full-width equipment row — photo left, name, description and stated activities right. */
export function EquipmentRow({ item }: { item: EquipmentItem }) {
  return (
    <Reveal as="article" className="equip-row">
      <div className="equip-row-media">
        <img src={asset(item.image)} alt={item.name} loading="lazy" />
      </div>
      <div className="equip-row-body">
        <div className="equip-row-head">
          <h3>{item.name}</h3>
          {item.inspectionScope && <span className="equip-scope-tag">{item.inspectionScope}</span>}
        </div>
        <p>{item.detail}</p>
        <ul className="equip-row-activities">
          {item.activities.map((activity) => (
            <li key={activity}>
              <CheckIcon className="check-ico" />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
