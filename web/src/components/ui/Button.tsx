import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'outline-light' | 'dark';

interface CommonProps {
  variant?: Variant;
  block?: boolean;
  small?: boolean;
  children: ReactNode;
  className?: string;
}

function classesFor({ variant = 'primary', block, small, className }: Omit<CommonProps, 'children'>) {
  return ['btn', `btn-${variant}`, block ? 'btn-block' : '', small ? 'btn-sm' : '', className || '']
    .filter(Boolean)
    .join(' ');
}

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function LinkButton({ href, children, variant, block, small, className, ...anchorProps }: LinkButtonProps) {
  return (
    <a href={href} className={classesFor({ variant, block, small, className })} {...anchorProps}>
      {children}
    </a>
  );
}

type SubmitButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, block, small, className, ...buttonProps }: SubmitButtonProps) {
  return (
    <button className={classesFor({ variant, block, small, className })} {...buttonProps}>
      {children}
    </button>
  );
}
