import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  /** 'over-hero' is used by the home page so the bar sits transparent over the hero photo. */
  headerVariant?: 'default' | 'over-hero';
}

export function Layout({ children, headerVariant }: LayoutProps) {
  return (
    <>
      <Header variant={headerVariant} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
