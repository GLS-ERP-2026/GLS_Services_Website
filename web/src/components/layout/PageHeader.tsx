import type { ReactNode } from 'react';
import { asset } from '../../lib/paths';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  image: string;
  crumbs: Crumb[];
  /** Small uppercase technical label above the H1. */
  eyebrow: string;
  title: string;
  description: ReactNode;
  /** Optional action row beneath the description. */
  actions?: ReactNode;
}

export function PageHeader({ image, crumbs, eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-header-media">
        <img src={asset(image)} alt="" role="presentation" />
      </div>
      <div className="container page-header-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label}>
              {crumb.href ? <a href={asset(crumb.href)}>{crumb.label}</a> : <span>{crumb.label}</span>}
              {i < crumbs.length - 1 && <span className="sep"> / </span>}
            </span>
          ))}
        </nav>
        <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {actions && <div className="btn-row">{actions}</div>}
      </div>
    </section>
  );
}
