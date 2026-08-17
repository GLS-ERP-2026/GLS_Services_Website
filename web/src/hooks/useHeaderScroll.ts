import { useEffect, useRef } from 'react';

const GRADIENT_RANGE_PX = 240;

/**
 * Drives the header's dark-to-light scroll gradient. Writes the live
 * scroll fraction to --scroll-t on the header element (not React state)
 * so the crossfade tracks every scroll frame without re-rendering —
 * and reverses automatically on scroll-up since t is recomputed live.
 */
export function useHeaderScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    function update() {
      const t = Math.min(Math.max(window.scrollY / GRADIENT_RANGE_PX, 0), 1);
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
  }, []);

  return ref;
}
