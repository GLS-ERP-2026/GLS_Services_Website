import { useEffect, useState } from 'react';

interface SlideshowState {
  activeIndex: number;
  /** The slide that was active just before this one — kept around so it can
   * finish fading out without its in-progress zoom snapping back to scale(1). */
  prevIndex: number | null;
}

/**
 * Cycles through `count` slides, advancing every `intervalMs`. `startDelayMs`
 * postpones the first change, so several slideshows side by side can be put
 * out of step instead of all changing at once.
 */
export function useSlideshow(count: number, intervalMs: number, startDelayMs = 0): SlideshowState {
  const [state, setState] = useState<SlideshowState>({ activeIndex: 0, prevIndex: null });

  useEffect(() => {
    if (count <= 1) return;
    const advance = () =>
      setState((current) => ({
        activeIndex: (current.activeIndex + 1) % count,
        prevIndex: current.activeIndex,
      }));
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, intervalMs);
    }, intervalMs + startDelayMs);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [count, intervalMs, startDelayMs]);

  return state;
}
