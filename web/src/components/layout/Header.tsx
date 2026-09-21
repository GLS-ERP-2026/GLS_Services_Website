import { useEffect, useState, type MouseEvent } from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { primaryNav, servicesNav } from '../../data/nav';
import { contactInfo } from '../../data/contact';
import { asset, currentPagePath } from '../../lib/paths';
import { CaretDownIcon, MailIcon, PhoneIcon } from '../ui/icons';

/** Scroll distance over which the transparent hero header solidifies. */
const HERO_SOLIDIFY_RANGE_PX = 140;
/** Scroll distance over which an interior page header is considered "scrolled". */
const SCROLLED_THRESHOLD_PX = 8;

interface HeaderProps {
  /** 'over-hero' starts the bar transparent above the home hero photo and fades
   * the solid charcoal in on scroll. The navigation itself is always visible. */
  variant?: 'default' | 'over-hero';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const isOverHero = variant === 'over-hero';
  const headerRef = useHeaderScroll<HTMLElement>(HERO_SOLIDIFY_RANGE_PX);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isScrolled = useScrollThreshold(SCROLLED_THRESHOLD_PX);
  const currentPath = currentPagePath();

  // Stop the page scrolling behind the full-screen mobile panel.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const servicesActive = currentPath === '/services.html' || currentPath.startsWith('/services/');
  const isActive = (href: string) => currentPath === href;

  function toggleServices(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsServicesOpen((open) => !open);
  }

  return (
    <header
      ref={headerRef}
      className={[
        'site-header',
        isOverHero ? 'site-header--over-hero' : '',
        isScrolled ? 'is-scrolled' : '',
        isMenuOpen ? 'is-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="nav-inner">
        <a href={asset('/index.html')} className="nav-logo" aria-label="GLS Services — home">
          <img src={asset('/assets/images/logo/gls-logo-full.png')} alt="GLS Services" />
        </a>

        <nav aria-label="Primary" className="nav-primary">
          <ul className="nav-links">
            <li className="has-dropdown">
              <a
                className={`nav-link${servicesActive ? ' is-active' : ''}`}
                href={asset('/services.html')}
                aria-haspopup="true"
              >
                Capabilities
                <CaretDownIcon className="nav-caret" />
              </a>
              <ul className="nav-dropdown">
                {servicesNav.map((link) => (
                  <li key={link.href}>
                    <a href={asset(link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
            {primaryNav
              .filter((link) => link.label !== 'Capabilities')
              .map((link) => (
                <li key={link.href}>
                  <a className={`nav-link${isActive(link.href) ? ' is-active' : ''}`} href={asset(link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href={asset('/contact.html#rfq')} className="btn btn-primary btn-sm">
            Request a Technical Quote
          </a>
          <button
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="mobile-panel" id="mobile-menu">
        <div className="mobile-link-row">
          <a href={asset('/services.html')} className={`mobile-link${servicesActive ? ' is-active' : ''}`}>
            Capabilities
          </a>
          <button
            type="button"
            className="mobile-expand"
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="mobile-capabilities"
            aria-label="Show capability pages"
          >
            <CaretDownIcon className={isServicesOpen ? 'is-open' : undefined} />
          </button>
        </div>
        {isServicesOpen && (
          <div id="mobile-capabilities">
            {servicesNav.map((link) => (
              <a key={link.href} href={asset(link.href)} className="mobile-sublink">
                {link.label}
              </a>
            ))}
          </div>
        )}
        {primaryNav
          .filter((link) => link.label !== 'Capabilities')
          .map((link) => (
            <a
              key={link.href}
              href={asset(link.href)}
              className={`mobile-link${isActive(link.href) ? ' is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}

        <a href={asset('/contact.html#rfq')} className="btn btn-primary btn-block">
          Request a Technical Quote
        </a>

        <div className="mobile-contact">
          <a href={`mailto:${contactInfo.emails[0]}`}>
            <MailIcon />
            {contactInfo.emails[0]}
          </a>
          <a href={contactInfo.phoneHref}>
            <PhoneIcon />
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
