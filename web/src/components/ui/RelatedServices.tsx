import { SectionHead } from './SectionHead';
import { ServiceRowList } from './ServiceSection';
import { relatedServices, type ServiceSummary } from '../../data/services';

/** "Other capabilities" block shown at the foot of each service detail page. */
export function RelatedServices({ excludeSlug }: { excludeSlug: ServiceSummary['slug'] }) {
  return (
    <section className="section section-divided">
      <div className="container">
        <SectionHead eyebrow="Other Capabilities" title="Related Services" />
        <ServiceRowList services={relatedServices(excludeSlug)} />
      </div>
    </section>
  );
}
