import { useEffect, useState } from 'react';

/** True once the page has been scrolled past `thresholdPx`. Used to reveal
 * chrome that's intentionally hidden at the very top of a page (e.g. the
 * home page's hero-only header). */
export function useScrollThreshold(thresholdPx: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    function check() {
      setIsPast((prev) => {
        const next = window.scrollY > thresholdPx;
        return prev === next ? prev : next;
      });
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [thresholdPx]);

  return isPast;
}
