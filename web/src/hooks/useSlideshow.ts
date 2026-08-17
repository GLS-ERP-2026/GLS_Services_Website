import { useEffect, useState } from 'react';

/** Cycles through `count` slides, advancing every `intervalMs`. */
export function useSlideshow(count: number, intervalMs: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs]);

  return activeIndex;
}
