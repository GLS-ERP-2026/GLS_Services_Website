import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Anything else (event handlers, data-* attributes) is passed straight to the element. */
  [key: string]: unknown;
}

export function Reveal({ as: Tag = 'div', className = '', style, children, ...rest }: RevealProps) {
  const { ref, isPending, isVisible } = useReveal<HTMLElement>();
  const classes = ['reveal', isPending ? 'reveal-pending' : '', isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag ref={ref} className={classes} style={style} {...(rest as ComponentPropsWithoutRef<'div'>)}>
      {children}
    </Tag>
  );
}
