import { useState, type MouseEvent } from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { primaryNav, secondaryNav, servicesNav } from '../../data/nav';
import { asset, currentPagePath } from '../../lib/paths';

export function Header() {
  const headerRef = useHeaderScroll<HTMLElement>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const currentPath = currentPagePath();

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

  return (
    <header ref={headerRef} className={`site-header${isMenuOpen ? ' is-open' : ''}`}>
      <div className="nav-inner">
        <a href={asset('/index.html')} className="nav-logo">
          <img src={asset('/assets/images/logo/gls-logo-full.png')} alt="GLS Services" className="logo-full" />
          <img src={asset('/assets/images/logo/gls-logo-mark.png')} alt="GLS Services" className="logo-mark" />
        </a>
        <nav aria-label="Primary" className="nav-primary">
          <ul className="nav-links">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <a className={`nav-link${isActive(link.href) ? ' is-active' : ''}`} href={asset(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={`has-dropdown${isServicesOpen ? ' is-open' : ''}`}>
              <a
                className={`nav-link${servicesActive ? ' is-active' : ''}`}
                href={asset('/services.html')}
                onClick={handleServicesLinkClick}
              >
                Services
              </a>
              <ul className="nav-dropdown">
                {servicesNav.map((link) => (
                  <li key={link.href}>
                    <a href={asset(link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
            {secondaryNav.map((link) => (
              <li key={link.href}>
                <a className={`nav-link${isActive(link.href) ? ' is-active' : ''}`} href={asset(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a href={asset('/contact.html')} className="btn btn-primary">
            Get a Quote
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
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
