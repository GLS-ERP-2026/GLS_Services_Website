import { useLayoutEffect, useState } from 'react';

/**
 * Half the rendered height of the home page's `.hero` section, in px, or
 * null when there is no `.hero` on the page (every page but the home page).
 * Recalculated on resize. Used to reveal the header's nav once the visitor
 * has scrolled about halfway down the hero, regardless of viewport size.
 */
export function useHeroHalfHeight(): number | null {
  const [half, setHalf] = useState<number | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const hero = document.querySelector<HTMLElement>('.hero');
      setHalf(hero ? hero.offsetHeight / 2 : null);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return half;
}
