import { Reveal } from './Reveal';
import { ServiceCard } from './ServiceCard';
import { relatedServices, type ServiceSummary } from '../../data/services';

const shortBlurbs: Record<ServiceSummary['slug'], string> = {
  'drilling-equipment-mro': 'Inspection, repair & overhaul across drawworks, mud pumps, top drives and more.',
  'jacking-skidding': 'Inspection, repair and overhaul of jacking systems and skidding systems.',
  cranes: 'Inspection, repair and overhaul services for electrical and diesel-hydraulic cranes.',
  'used-equipment-supply': 'Reconditioned marine machinery and spare parts sourced globally.',
};

export function RelatedServices({ excludeSlug, alt = true }: { excludeSlug: ServiceSummary['slug']; alt?: boolean }) {
  return (
    <section className={`section${alt ? ' section-alt' : ''}`}>
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Explore More</span>
          <h2 className="section-title">Related Services</h2>
        </Reveal>
        <div className="grid-3">
          {relatedServices(excludeSlug).map((service) => (
            <ServiceCard key={service.slug} service={service} description={shortBlurbs[service.slug]} />
          ))}
        </div>
      </div>
    </section>
  );
}
