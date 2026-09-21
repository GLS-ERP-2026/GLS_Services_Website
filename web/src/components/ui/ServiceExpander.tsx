import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";
import type { ServiceSummary } from "../../data/services";
import { asset } from "../../lib/paths";

/**
 * Service cards that open on hover (tap and keyboard focus also work, so the
 * row is usable without a mouse).
 *
 * The motion is two-stage and direction-dependent, timed in CSS: opening runs
 * sideways first and then down over 2s total, closing runs down first and then
 * sideways over 1.5s. See the `.service-expander` block in global.css.
 *
 * A card that is not the open one collapses to its photo alone — no title, no
 * copy — so the row reads as one wide panel between cropped images.
 *
 * Below 1080px the sideways stage is dropped entirely: cards stack and simply
 * expand downward.
 */

/**
 * Hover has to settle before a card opens. Without this, sweeping the cursor
 * across the row starts all four expansions in turn, and at a 2s open that
 * looks far worse than a short pause before anything moves.
 */
const HOVER_INTENT_MS = 120;

export function ServiceExpander({ services }: { services: ServiceSummary[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const intentTimer = useRef<number | null>(null);

  function clearIntent() {
    if (intentTimer.current !== null) {
      window.clearTimeout(intentTimer.current);
      intentTimer.current = null;
    }
  }

  /** Hover: wait for the pointer to settle. */
  function hoverCard(index: number) {
    clearIntent();
    intentTimer.current = window.setTimeout(
      () => setActiveIndex(index),
      HOVER_INTENT_MS,
    );
  }

  /** Tap, click and focus are deliberate, so they act immediately. */
  function selectCard(index: number | null) {
    clearIntent();
    setActiveIndex(index);
  }

  useEffect(() => clearIntent, []);

  // The grid lives on an inner element, not on Reveal itself: `.reveal` sets its
  // own `transition` at equal specificity and later in the stylesheet, so sharing
  // one element silently drops the grid-template-columns transition and the row
  // snaps instead of sliding.
  return (
    <Reveal>
      <div
        className="service-expander"
        // A data attribute rather than a class, so the column sizing stays pure
        // CSS and can be overridden wholesale in the mobile media query.
        data-active={activeIndex === null ? undefined : activeIndex}
        onMouseLeave={() => selectCard(null)}
      >
        {services.map((service, i) => {
          const isActive = activeIndex === i;
          return (
            <article
              key={service.slug}
              className={`service-exp-card${isActive ? " is-active" : ""}`}
              onMouseEnter={() => hoverCard(i)}
            >
              <div className="service-exp-media">
                <img src={asset(service.image)} alt={service.title} />
              </div>

              {/* Collapses to nothing on a compressed card, leaving just the photo. */}
              <div className="service-exp-panel">
                <div className="service-exp-clip">
                  <div className="service-exp-body">
                    <button
                      type="button"
                      className="service-exp-toggle"
                      aria-expanded={isActive}
                      onClick={() => selectCard(isActive ? null : i)}
                      onFocus={() => selectCard(i)}
                    >
                      <h3>{service.title}</h3>
                    </button>

                    {/* Summary and detail swap on the same delay, so an open card
                      never shows a description and its item list at once. */}
                    <div className="service-exp-summary">
                      <div className="service-exp-clip">
                        <p className="service-exp-blurb">{service.homeBlurb}</p>
                      </div>
                    </div>

                    <div className="service-exp-detail">
                      <div className="service-exp-clip">
                        <ul className="service-exp-items">
                          {service.items.map((item) => (
                            <li key={item}>
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={asset(service.href)}
                          className="service-card-link"
                        >
                          Explore {service.title}{" "}
                          <span className="arrow">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}
