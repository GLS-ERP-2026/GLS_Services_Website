import { Reveal } from './Reveal';
import type { ServiceSummary } from '../../data/services';
import { asset } from '../../lib/paths';

/** Large horizontal capability panel — photo left, technical detail right. */
export function ServiceRow({ service }: { service: ServiceSummary }) {
  return (
    <Reveal as="article" className="capability-row">
      <div className="capability-row-media">
        <span className="capability-row-index">{service.index}</span>
        <img src={asset(service.image)} alt={service.title} loading="lazy" />
      </div>
      <div className="capability-row-body">
        <h3>{service.title}</h3>
        <p>{service.homeBlurb}</p>
        <ul className="capability-covers">
          {service.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="btn-row">
          <a href={asset(service.href)} className="btn btn-outline btn-sm">
            {service.cta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceRowList({ services }: { services: ServiceSummary[] }) {
  return (
    <div className="capability-list">
      {services.map((service) => (
        <ServiceRow key={service.slug} service={service} />
      ))}
    </div>
  );
}
