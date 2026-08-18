import { useLayoutEffect, useRef } from 'react';

const DEFAULT_GRADIENT_RANGE_PX = 240;

/**
 * Drives the header's dark-to-light scroll gradient. Writes the live
 * scroll fraction to --scroll-t on the header element (not React state)
 * so the crossfade tracks every scroll frame without re-rendering —
 * and reverses automatically on scroll-up since t is recomputed live.
 *
 * `gradientRangePx` is the scroll distance over which the crossfade
 * completes (defaults to 240px). The home hero header passes its own
 * hero-derived distance so the background finishes fading in sync with
 * the nav reveal instead of on a fixed, unrelated range.
 *
 * Uses useLayoutEffect so the correct value is set before first paint —
 * otherwise a page that loads already scrolled (browser scroll
 * restoration, in-page anchors) would flash the dark top-of-page state
 * for a frame before snapping to the right one.
 */
export function useHeaderScroll<T extends HTMLElement>(gradientRangePx: number = DEFAULT_GRADIENT_RANGE_PX) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    function update() {
      const t = Math.min(Math.max(window.scrollY / gradientRangePx, 0), 1);
      el!.style.setProperty('--scroll-t', String(t));
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [gradientRangePx]);

  return ref;
}
