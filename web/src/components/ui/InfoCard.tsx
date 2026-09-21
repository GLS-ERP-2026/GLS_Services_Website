import type { ReactNode } from 'react';

export function InfoCard({
  icon,
  title,
  children,
  style,
}: {
  icon: string;
  title: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="info-card" style={style}>
      <h3>
        <span className="ico-chip">{icon}</span> {title}
      </h3>
      <p>{children}</p>
    </div>
  );
}
