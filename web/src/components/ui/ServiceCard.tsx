import { Reveal } from './Reveal';
import type { ServiceSummary } from '../../data/services';
import { asset } from '../../lib/paths';

export function ServiceCard({ service, description }: { service: ServiceSummary; description?: string }) {
  return (
    <Reveal as="article" className="service-card">
      <div className="service-card-media">
        <img src={asset(service.image)} alt={service.title} />
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{description ?? service.homeBlurb}</p>
        <a href={asset(service.href)} className="service-card-link">
          Learn more <span className="arrow">&rarr;</span>
        </a>
      </div>
    </Reveal>
  );
}
