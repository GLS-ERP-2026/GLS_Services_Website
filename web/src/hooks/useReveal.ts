import { useEffect, useRef, useState } from 'react';

/**
 * Ports the site's scroll-reveal behavior. Content is visible by default
 * (isPending stays false) unless IntersectionObserver is available, so a
 * slow/broken observer never leaves content permanently hidden.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;

    setIsPending(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, isPending, isVisible };
}
