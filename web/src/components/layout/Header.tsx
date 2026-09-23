import { useState } from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { useHeroHalfHeight } from '../../hooks/useHeroHalfHeight';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { useAnyInView } from '../../hooks/useAnyInView';
import { primaryNav, secondaryNav } from '../../data/nav';
import { asset, currentPagePath } from '../../lib/paths';

/** Fallback reveal threshold for the home hero header, used only before the
 * hero has been measured (see useHeroHalfHeight) — otherwise the reveal is
 * tied to half the hero's actual rendered height. */
const HOME_HERO_REVEAL_THRESHOLD_PX = 4;

/** The page's own quote buttons. While one is on screen the header's quote
 * button steps aside, so only one is ever visible at a time. */
const PAGE_CTA_SELECTOR = '.cta-banner .btn, .hero .hero-actions .btn';

interface HeaderProps {
  /** 'home-hero' hides everything but the logo until the visitor scrolls
   * past the top of the page, so the hero slideshow shows through unobstructed. */
  variant?: 'default' | 'home-hero';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const isHomeHero = variant === 'home-hero';
  const heroHalfHeight = useHeroHalfHeight();
  const revealThresholdPx = isHomeHero && heroHalfHeight ? heroHalfHeight : HOME_HERO_REVEAL_THRESHOLD_PX;
  const gradientRangePx = isHomeHero && heroHalfHeight ? heroHalfHeight : undefined;
  const headerRef = useHeaderScroll<HTMLElement>(gradientRangePx);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = currentPagePath();
  const isPastTop = useScrollThreshold(revealThresholdPx);

  const isConcealed = isHomeHero && !isPastTop;
  const isQuoteHidden = useAnyInView(PAGE_CTA_SELECTOR);

  function isActive(href: string) {
    return currentPath === href;
  }

  const servicesActive = currentPath === '/services.html' || currentPath.startsWith('/services/');
  const concealedTabIndex = isConcealed ? -1 : undefined;

  return (
    <header
      ref={headerRef}
      className={[
        'site-header',
        isHomeHero ? 'site-header--home-hero' : '',
        isPastTop ? 'is-past-top' : '',
        isMenuOpen ? 'is-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="nav-inner">
        <a href={asset('/index.html')} className="nav-logo">
          <img src={asset('/assets/images/logo/gls-logo-full.png')} alt="GLS Services" className="logo-full" />
          <img src={asset('/assets/images/logo/gls-logo-mark.png')} alt="GLS Services" className="logo-mark" />
        </a>
        <nav aria-label="Primary" className="nav-primary" aria-hidden={isConcealed || undefined}>
          <ul className="nav-links">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <a
                  className={`nav-link${isActive(link.href) ? ' is-active' : ''}`}
                  href={asset(link.href)}
                  tabIndex={concealedTabIndex}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className={`nav-link${servicesActive ? ' is-active' : ''}`}
                href={asset('/services.html')}
                tabIndex={concealedTabIndex}
              >
                Services
              </a>
            </li>
            {secondaryNav.map((link) => (
              <li key={link.href}>
                <a
                  className={`nav-link${isActive(link.href) ? ' is-active' : ''}`}
                  href={asset(link.href)}
                  tabIndex={concealedTabIndex}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta" aria-hidden={isConcealed || undefined}>
          <a
            href={asset('/contact.html')}
            className={`btn btn-primary nav-quote${isQuoteHidden ? ' is-hidden' : ''}`}
            tabIndex={isQuoteHidden ? -1 : concealedTabIndex}
            aria-hidden={isQuoteHidden || undefined}
          >
            Request a Quote
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            tabIndex={concealedTabIndex}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
