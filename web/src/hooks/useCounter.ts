import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1400;

/** Ports the animated stat-counter: counts up once the element scrolls into view. */
export function useCounter<T extends HTMLElement>(target: number, suffix = '') {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          let start: number | null = null;
          function step(timestamp: number) {
            if (start === null) start = timestamp;
            const progress = Math.min((timestamp - start) / DURATION_MS, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) window.requestAnimationFrame(step);
          }
          window.requestAnimationFrame(step);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return { ref, display: `${value}${suffix}` };
}
