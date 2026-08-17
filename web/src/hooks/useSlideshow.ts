import { useEffect, useState } from 'react';

interface SlideshowState {
  activeIndex: number;
  /** The slide that was active just before this one — kept around so it can
   * finish fading out without its in-progress zoom snapping back to scale(1). */
  prevIndex: number | null;
}

/** Cycles through `count` slides, advancing every `intervalMs`. */
export function useSlideshow(count: number, intervalMs: number): SlideshowState {
  const [state, setState] = useState<SlideshowState>({ activeIndex: 0, prevIndex: null });

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setState((current) => ({
        activeIndex: (current.activeIndex + 1) % count,
        prevIndex: current.activeIndex,
      }));
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs]);

  return state;
}
