import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { CheckIcon } from './icons';
import type { ServiceSummary } from '../../data/services';
import { asset } from '../../lib/paths';

/**
 * Service cards that open on hover. Click/tap and Enter open a card too, and
 * Escape closes it, so the row is usable without a mouse.
 *
 * On desktop the row has two heights — idle and open — and every card fills
 * it. Each card's photo covers the whole card and its text sits in a panel
 * pinned to the bottom. That means:
 *
 *   idle -> open    the row grows taller while the hovered card widens
 *   switching       only widths change; panels cross-fade, nothing collapses
 *                   vertically
 *   open -> idle    after the cursor has been away for LINGER_MS
 *
 * Below 1081px there is no sideways stage: cards stack, expand downward, and
 * open and close by click/tap only.
 */

/**
 * Hover has to settle before a card opens. Without this, sweeping the cursor
 * across the row starts every expansion in turn.
 */
const HOVER_INTENT_MS = 120;

/** How long the last card stays open after the cursor leaves the row. */
const LINGER_MS = 750;

/**
 * True on devices with a real hover (a mouse or trackpad). There, hover already
 * opens and closes cards, so a click on the open card must not close it again.
 * On touch there is no hover, so a second tap is how a card gets closed.
 */
function canHover() {
  return typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
}

/**
 * Hover-to-open and the auto-close after leaving only apply to the side-by-side
 * desktop row. In the stacked layout an opening card pushes the cards below it
 * down, which slides a different card under a stationary cursor — hover would
 * then open that one instead. Must match the min-width breakpoint in global.css.
 */
function isSideBySide() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1081px)').matches;
}

export function ServiceExpander({ services }: { services: ServiceSummary[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const intentTimer = useRef<number | null>(null);
  const lingerTimer = useRef<number | null>(null);

  function clearTimers() {
    if (intentTimer.current !== null) window.clearTimeout(intentTimer.current);
    if (lingerTimer.current !== null) window.clearTimeout(lingerTimer.current);
    intentTimer.current = null;
    lingerTimer.current = null;
  }

  /** Hover: wait for the pointer to settle. */
  function hoverCard(index: number) {
    if (!isSideBySide()) return;
    clearTimers();
    intentTimer.current = window.setTimeout(() => setActiveIndex(index), HOVER_INTENT_MS);
  }

  /** Cursor left the row: keep the last card open for a moment, then close. */
  function leaveRow() {
    if (!isSideBySide()) return;
    clearTimers();
    lingerTimer.current = window.setTimeout(() => setActiveIndex(null), LINGER_MS);
  }

  /**
   * Tap, click and keys are deliberate, so they act immediately. (Focus does not
   * open a card: pressing the mouse on a title focuses it before the click
   * lands, so opening on focus meant the click immediately closed it again.)
   */
  function selectCard(index: number | null) {
    clearTimers();
    setActiveIndex(index);
  }

  useEffect(() => clearTimers, []);

  // The row lives on an inner element, not on Reveal itself: `.reveal` sets its
  // own `transition` at equal specificity and later in the stylesheet, so
  // sharing one element silently drops the row's transitions.
  return (
    <Reveal>
      <div
        className="service-expander"
        // A data attribute rather than a class, so the open/idle sizing stays
        // pure CSS and can be overridden wholesale in the mobile media query.
        data-active={activeIndex === null ? undefined : activeIndex}
        onMouseLeave={leaveRow}
      >
        {services.map((service, i) => {
          const isActive = activeIndex === i;
          return (
            <article
              key={service.slug}
              className={`service-exp-card${isActive ? ' is-active' : ''}`}
              onMouseEnter={() => hoverCard(i)}
            >
              <div className="service-exp-media">
                <img src={asset(service.image)} alt={service.title} />
              </div>

              <div className="service-exp-panel">
                <button
                  type="button"
                  className="service-exp-toggle"
                  aria-expanded={isActive}
                  onClick={() => selectCard(isActive && !canHover() ? null : i)}
                  onKeyDown={(e) => e.key === 'Escape' && selectCard(null)}
                >
                  <h3>{service.title}</h3>
                </button>

                {/* On desktop summary and detail occupy the same grid cell and
                    cross-fade, so swapping them never changes the panel's height. */}
                <div className="service-exp-stack">
                  <div className="service-exp-summary">
                    <div className="service-exp-clip">
                      <p className="service-exp-blurb">{service.homeBlurb}</p>
                    </div>
                  </div>

                  <div className="service-exp-detail" aria-hidden={!isActive}>
                    <div className="service-exp-clip">
                      <div className="service-exp-detail-inner">
                        <ul className="service-exp-items">
                          {service.items.map((item) => (
                            <li key={item}>
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <a href={asset(service.href)} className="service-card-link" tabIndex={isActive ? 0 : -1}>
                          Explore {service.title} <span className="arrow">&rarr;</span>
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
