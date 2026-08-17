import { useState, type MouseEvent } from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { primaryNav, secondaryNav, servicesNav } from '../../data/nav';
import { asset, currentPagePath } from '../../lib/paths';

const HOME_HERO_REVEAL_THRESHOLD_PX = 4;

interface HeaderProps {
  /** 'home-hero' hides everything but the logo until the visitor scrolls
   * past the top of the page, so the hero slideshow shows through unobstructed. */
  variant?: 'default' | 'home-hero';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const headerRef = useHeaderScroll<HTMLElement>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const currentPath = currentPagePath();
  const isPastTop = useScrollThreshold(HOME_HERO_REVEAL_THRESHOLD_PX);

  const isHomeHero = variant === 'home-hero';
  const isConcealed = isHomeHero && !isPastTop;

  function isActive(href: string) {
    return currentPath === href;
  }

  function handleServicesLinkClick(e: MouseEvent<HTMLAnchorElement>) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setIsServicesOpen((open) => !open);
    }
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
            <li className={`has-dropdown${isServicesOpen ? ' is-open' : ''}`}>
              <a
                className={`nav-link${servicesActive ? ' is-active' : ''}`}
                href={asset('/services.html')}
                onClick={handleServicesLinkClick}
                tabIndex={concealedTabIndex}
              >
                Services
              </a>
              <ul className="nav-dropdown">
                {servicesNav.map((link) => (
                  <li key={link.href}>
                    <a href={asset(link.href)} tabIndex={concealedTabIndex}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
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
          <a href={asset('/contact.html')} className="btn btn-primary" tabIndex={concealedTabIndex}>
            Get a Quote
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
