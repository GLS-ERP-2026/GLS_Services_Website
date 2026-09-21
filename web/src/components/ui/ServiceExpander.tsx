import { useState } from 'react';
import { Reveal } from './Reveal';
import type { ServiceSummary } from '../../data/services';
import { asset } from '../../lib/paths';

/**
 * Service cards that open on hover (tap/click and keyboard focus also work, so
 * the row is usable without a mouse).
 *
 * The motion is deliberately two-stage: the active card first widens sideways
 * while its neighbours compress, and only once that settles does the detail
 * panel drop open beneath it. That ordering lives in CSS — the width change is
 * a `grid-template-columns` transition on the container keyed off `data-active`,
 * and the detail panel's own transition carries a delay so it waits its turn.
 *
 * Below the mobile breakpoint the sideways stage is dropped entirely (see
 * global.css): cards stack full width and simply expand downward on tap.
 */
export function ServiceExpander({ services }: { services: ServiceSummary[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Reveal
      className="service-expander"
      // Written as a data attribute so the column sizing is pure CSS and can be
      // overridden wholesale in the mobile media query.
      data-active={activeIndex === null ? undefined : activeIndex}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {services.map((service, i) => {
        const isActive = activeIndex === i;
        return (
          <article
            key={service.slug}
            className={`service-exp-card${isActive ? ' is-active' : ''}`}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className="service-exp-media">
              <img src={asset(service.image)} alt={service.title} />
            </div>
            <div className="service-exp-body">
              <button
                type="button"
                className="service-exp-toggle"
                aria-expanded={isActive}
                onClick={() => setActiveIndex(isActive ? null : i)}
                onFocus={() => setActiveIndex(i)}
              >
                <h3>{service.title}</h3>
              </button>

              {/* Summary and detail are both collapsible (grid-template-rows 0fr <-> 1fr
                  animates height without a hard-coded max). They swap on the same delay,
                  so the short line gives way to the full description rather than the card
                  showing both at once. */}
              <div className="service-exp-summary">
                <div className="service-exp-collapse-inner">
                  <p className="service-exp-blurb">{service.homeBlurb}</p>
                </div>
              </div>

              <div className="service-exp-detail">
                <div className="service-exp-collapse-inner">
                  <p>{service.blurb}</p>
                  <a href={asset(service.href)} className="service-card-link">
                    Explore {service.title} <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </Reveal>
  );
}
