import type { ReactNode } from 'react';
import { asset } from '../../lib/paths';

export function PageBanner({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <section className="page-banner">
      <div className="page-banner-media">
        <img src={asset(image)} alt="" role="presentation" />
      </div>
      <div className="container page-banner-inner">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
