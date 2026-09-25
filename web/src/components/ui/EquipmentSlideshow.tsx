import type { EquipmentPhoto } from '../../data/equipment';
import { useSlideshow } from '../../hooks/useSlideshow';
import { asset } from '../../lib/paths';
import { GearIcon } from './icons';

const SLIDE_INTERVAL_MS = 4500;

/**
 * `sizes` for a collapsed card vs an open one. A collapsed card loads the
 * smaller file; opening it swaps in the full-size one, and the browser keeps
 * showing the smaller file until the larger has loaded, so nothing blanks.
 */
const SIZES_IDLE = '(min-width: 1081px) 380px, (min-width: 641px) 50vw, 100vw';
const SIZES_OPEN = '(min-width: 1081px) 640px, (min-width: 641px) 50vw, 100vw';

interface Props {
  photos: EquipmentPhoto[];
  name: string;
  isOpen: boolean;
  /** Puts neighbouring cards' slideshows out of step. */
  startDelayMs: number;
}

export function EquipmentSlideshow({ photos, name, isOpen, startDelayMs }: Props) {
  const { activeIndex, prevIndex } = useSlideshow(photos.length, SLIDE_INTERVAL_MS, startDelayMs);

  if (photos.length === 0) {
    return (
      <div className="equip-slides equip-slides--empty" aria-hidden="true">
        <GearIcon />
      </div>
    );
  }

  return (
    <div className="equip-slides">
      {photos.map((photo, i) => {
        const state = i === activeIndex ? 'active' : i === prevIndex ? 'leaving' : 'idle';
        const largest = photo.sources[photo.sources.length - 1];
        return (
          <img
            key={largest.src}
            className={`equip-slide equip-slide--${state}`}
            src={asset(largest.src)}
            srcSet={photo.sources.map((s) => `${asset(s.src)} ${s.width}w`).join(', ')}
            sizes={isOpen ? SIZES_OPEN : SIZES_IDLE}
            width={photo.width}
            height={photo.height}
            alt={i === activeIndex ? name : ''}
            loading="lazy"
            decoding="async"
          />
        );
      })}
    </div>
  );
}
