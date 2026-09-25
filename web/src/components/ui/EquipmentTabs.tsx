import { useEffect, useRef, useState } from 'react';
import { equipment, equipmentCategories, type EquipmentCategory, type EquipmentWithPhotos } from '../../data/equipment';
import { asset } from '../../lib/paths';
import { CheckIcon } from './icons';
import { EquipmentSlideshow } from './EquipmentSlideshow';

/**
 * Services page: Mechanical / Electrical / Offshore tabs, each a grid of
 * equipment cards, three to a row.
 *
 * On desktop, hovering a card opens it sideways across its row: the photo moves
 * to the left half and grows to the full card height, a description appears on
 * the right, and the row's other cards shrink to slim photo strips at the side.
 * Each row opens independently, and a row never changes height when a card
 * opens (see the .equip-card rules in global.css), so the rows below never
 * shift under the cursor.
 *
 * The hover timing and the mouse, touch and keyboard handling follow
 * ServiceExpander on the home page. Below 1081px the cards sit in a plain grid
 * and a click or tap opens the description underneath instead.
 */

const HOVER_INTENT_MS = 120;
const LINGER_MS = 150;
const PER_ROW = 3;
/**
 * Neighbouring cards change slides SLIDE_STAGGER_MS apart, in a cycle of
 * SLIDE_STAGGER_STEPS, so no two adjacent cards change at once.
 */
const SLIDE_STAGGER_MS = 1100;
const SLIDE_STAGGER_STEPS = 4;

function canHover() {
  return typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
}

/** Must match the min-width breakpoint in global.css. */
function isSideBySide() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1081px)').matches;
}

function categoryFromHash(): EquipmentCategory {
  if (typeof window === 'undefined') return equipmentCategories[0].id;
  const hash = window.location.hash.slice(1);
  return equipmentCategories.find((c) => c.id === hash)?.id ?? equipmentCategories[0].id;
}

export function EquipmentTabs() {
  const [active, setActive] = useState<EquipmentCategory>(categoryFromHash);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Back/forward and in-page links to #mechanical etc. switch tabs too.
  useEffect(() => {
    const onHashChange = () => setActive(categoryFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function selectTab(id: EquipmentCategory) {
    setActive(id);
    // replaceState, not location.hash, so the page doesn't jump to an anchor.
    window.history.replaceState(null, '', `#${id}`);
  }

  /** Arrow keys move between tabs, as in a native tab strip. */
  function onTabKeyDown(e: React.KeyboardEvent, index: number) {
    const last = equipmentCategories.length - 1;
    const next =
      e.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : e.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    selectTab(equipmentCategories[next].id);
    tabRefs.current[next]?.focus();
  }

  const items = equipment.filter((item) => item.category === active);
  const rows: EquipmentWithPhotos[][] = [];
  for (let i = 0; i < items.length; i += PER_ROW) rows.push(items.slice(i, i + PER_ROW));

  return (
    <div className="equip-tabs">
      <div className="equip-tablist" role="tablist" aria-label="Service categories">
        {equipmentCategories.map((category, i) => {
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`equip-tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`equip-panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              className={`equip-tab${selected ? ' is-active' : ''}`}
              onClick={() => selectTab(category.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Keyed by tab, so switching tabs remounts the grid: open cards and
          slideshows start fresh, and the entrance animation replays. */}
      <div
        key={active}
        className="equip-grid"
        role="tabpanel"
        id={`equip-panel-${active}`}
        aria-labelledby={`equip-tab-${active}`}
      >
        {rows.map((row, r) => (
          <EquipmentRow key={row[0].slug} items={row} firstIndex={r * PER_ROW} />
        ))}
      </div>
    </div>
  );
}

function EquipmentRow({ items, firstIndex }: { items: EquipmentWithPhotos[]; firstIndex: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const intentTimer = useRef<number | null>(null);
  const lingerTimer = useRef<number | null>(null);
  /** The card the intent timer is about to open. */
  const pendingIndex = useRef<number | null>(null);

  function clearTimers() {
    if (intentTimer.current !== null) window.clearTimeout(intentTimer.current);
    if (lingerTimer.current !== null) window.clearTimeout(lingerTimer.current);
    intentTimer.current = null;
    lingerTimer.current = null;
    pendingIndex.current = null;
  }

  /**
   * Called on every real mouse movement over a card, so repeat calls for the
   * card already open or about to open are no-ops (apart from cancelling a
   * pending close).
   */
  function hoverCard(index: number) {
    if (!isSideBySide()) return;
    if (index === pendingIndex.current) return;
    clearTimers();
    if (index === activeIndex) return;
    pendingIndex.current = index;
    intentTimer.current = window.setTimeout(() => {
      pendingIndex.current = null;
      setActiveIndex(index);
    }, HOVER_INTENT_MS);
  }

  function leaveRow() {
    if (!isSideBySide()) return;
    clearTimers();
    lingerTimer.current = window.setTimeout(() => setActiveIndex(null), LINGER_MS);
  }

  function selectCard(index: number | null) {
    clearTimers();
    setActiveIndex(index);
  }

  useEffect(() => clearTimers, []);

  return (
    <div
      className="equip-row"
      data-active={activeIndex === null ? undefined : activeIndex}
      // The open card's width depends on how many cards share its row.
      style={{ '--row-count': items.length } as React.CSSProperties}
      onMouseLeave={leaveRow}
    >
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        const hasScopes = item.scopes.length > 0;
        const scopeList = (
          <ul className="equip-scopes">
            {item.scopes.map((scope) => (
              <li key={scope}>
                <CheckIcon />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        );
        const enquire = (focusable: boolean) => (
          <a href={asset('/contact.html')} className="service-card-link" tabIndex={focusable ? 0 : -1}>
            Enquire Now <span className="arrow">&rarr;</span>
          </a>
        );

        return (
          <article
            key={item.slug}
            className={`equip-card${isActive ? ' is-active' : ''}`}
            // Opens on real pointer movement, not mouseenter: content scrolling
            // under a still cursor (after "View Equipment & Scope" scrolls the
            // page, or while the wheel scrolls past the grid) fires mouseenter
            // and zero-movement mouse events too, and that alone must not open
            // a card.
            onMouseMove={(e) => (e.movementX !== 0 || e.movementY !== 0) && hoverCard(i)}
          >
            <div className="equip-media">
              <EquipmentSlideshow
                photos={item.photos}
                name={item.name}
                isOpen={isActive}
                startDelayMs={((firstIndex + i) % SLIDE_STAGGER_STEPS) * SLIDE_STAGGER_MS}
              />
            </div>

            {/* The card at rest: photo on top, then name, rule and scopes. On
                small screens it also holds the description, opening downward. */}
            <div className="equip-summary">
              <button
                type="button"
                className="equip-toggle"
                aria-expanded={isActive}
                onClick={() => selectCard(isActive && !canHover() ? null : i)}
                onKeyDown={(e) => e.key === 'Escape' && selectCard(null)}
              >
                <h3>{item.name}</h3>
              </button>
              {hasScopes && scopeList}
              <div className="equip-more" aria-hidden={!isActive}>
                <div className="equip-clip">
                  <p>{item.description}</p>
                  {enquire(isActive && !isSideBySide())}
                </div>
              </div>
            </div>

            {/* Desktop only: the open card's right-hand column. The name and
                scopes repeat the summary's, so they're hidden from screen
                readers; only the description is new. */}
            <div className="equip-detail" aria-hidden={!isActive}>
              <div aria-hidden="true">
                <h3>{item.name}</h3>
                {hasScopes && scopeList}
              </div>
              <p>{item.description}</p>
              {enquire(isActive && isSideBySide())}
            </div>
          </article>
        );
      })}
    </div>
  );
}
