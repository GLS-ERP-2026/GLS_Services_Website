import { useEffect, useState } from 'react';

/** True while any element matching `selector` is on screen. The area under the
 * fixed header is excluded, since an element tucked behind it isn't visible. */
export function useAnyInView(selector: string): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    if (targets.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setInView(visible.size > 0);
      },
      { rootMargin: `-${Math.round(headerHeight)}px 0px 0px 0px` },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);

  return inView;
}
