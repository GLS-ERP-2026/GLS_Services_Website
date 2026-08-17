import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', className = '', style, children }: RevealProps) {
  const { ref, isPending, isVisible } = useReveal<HTMLElement>();
  const classes = ['reveal', isPending ? 'reveal-pending' : '', isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
