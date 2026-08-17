import type { ReactNode } from 'react';

export interface Crumb {
  label: string;
  href?: string;
}

export function PageBanner({
  image,
  crumbs,
  title,
  description,
}: {
  image: string;
  crumbs: Crumb[];
  title: string;
  description: ReactNode;
}) {
  return (
    <section className="page-banner">
      <div className="page-banner-media">
        <img src={image} alt="" role="presentation" />
      </div>
      <div className="container page-banner-inner">
        <div className="breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label}>
              {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}
              {i < crumbs.length - 1 ? ' / ' : ''}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
