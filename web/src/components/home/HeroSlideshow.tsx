import { asset } from '../../lib/paths';
import { useSlideshow } from '../../hooks/useSlideshow';

const SLIDE_INTERVAL_MS = 7000;

const slides = [
  '/assets/images/hero/home-hero-1.jpg',
  '/assets/images/hero/home-hero-2.jpg',
  '/assets/images/hero/home-hero-3.jpg',
  '/assets/images/hero/home-hero-4.jpg',
  '/assets/images/hero/home-hero-5.jpg',
];

export function HeroSlideshow() {
  const { activeIndex, prevIndex } = useSlideshow(slides.length, SLIDE_INTERVAL_MS);

  return (
    <div className="hero-slideshow">
      {slides.map((src, i) => {
        const state = i === activeIndex ? 'active' : i === prevIndex ? 'leaving' : 'idle';
        return (
          <div key={src} className={`hero-slide hero-slide--${state}`}>
            <img src={asset(src)} alt="" role="presentation" loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        );
      })}
    </div>
  );
}
