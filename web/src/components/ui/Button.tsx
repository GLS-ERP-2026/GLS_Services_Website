import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'dark';

interface CommonProps {
  variant?: Variant;
  block?: boolean;
  children: ReactNode;
  className?: string;
}

function classesFor({ variant = 'primary', block, className }: CommonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-dark';
  return ['btn', variantClass, block ? 'btn-block' : '', className || ''].filter(Boolean).join(' ');
}

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  const { variant, block, className, ...anchorProps } = props;
  return (
    <a href={href} className={classesFor({ variant, block, className, children })} {...anchorProps}>
      {children}
    </a>
  );
}

type SubmitButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: SubmitButtonProps) {
  const { variant, block, className, ...buttonProps } = props;
  return (
    <button className={classesFor({ variant, block, className, children })} {...buttonProps}>
      {children}
    </button>
  );
}
