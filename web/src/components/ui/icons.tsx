/**
 * Line icons, drawn on a 24×24 grid with a consistent 1.75 stroke so they read
 * as one set. Size is controlled by the caller via CSS (width/height), colour
 * via `currentColor` — no icon carries its own colour.
 */
import type { SVGProps } from 'react';

function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.4-7.5 9.5-4.4-1.1-7.5-5.1-7.5-9.5V6L12 3Z" />
    <path d="M9.3 12.1l1.9 1.9 3.6-3.6" />
  </Svg>
);

export const LeafIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M4 20c0-7.2 4.6-12 12.5-12H20c0 7.2-4.8 12-12 12H4Z" />
    <path d="M4 20c2.3-4 5.4-6.8 9.5-8.5" />
  </Svg>
);

export const TargetIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" />
  </Svg>
);

export const GearIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 14.5a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
  </Svg>
);

export const GlobeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </Svg>
);

export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </Svg>
);

export const CrateIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" />
    <path d="m3 7.5 9 4.5 9-4.5M12 12v9" />
  </Svg>
);

export const WrenchIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M14.8 6.2a4.5 4.5 0 0 0 5.9 5.9l-8.3 8.3a2.4 2.4 0 0 1-3.4-3.4l8.3-8.3Z" />
    <path d="M14.8 6.2 17 4a4.5 4.5 0 0 1 3.7 7.9" />
  </Svg>
);

export const DocumentIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z" />
    <path d="M14 3v4.5h4.5M8.8 12.5h6.4M8.8 16h4.4" />
  </Svg>
);

export const ClipboardIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15" />
    <rect x="9" y="3" width="6" height="3.2" rx="0.8" />
    <path d="M9.5 12h5M9.5 15.5h3" />
  </Svg>
);

export const FactoryIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M3 20.5V11l6 3.5V11l6 3.5V7.5l6 3.5v9.5H3Z" />
    <path d="M7 17.5h2M13 17.5h2" />
  </Svg>
);

export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.6 6.2 8.4 6 8.4-6" />
  </Svg>
);

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M21 16.9v2.3a1.6 1.6 0 0 1-1.8 1.6 16.4 16.4 0 0 1-7.1-2.6 16 16 0 0 1-4.9-4.9A16.4 16.4 0 0 1 4.6 6.1 1.6 1.6 0 0 1 6.2 4.3h2.3a1.6 1.6 0 0 1 1.6 1.4c.1.9.3 1.7.6 2.5a1.6 1.6 0 0 1-.4 1.7l-1 1a13 13 0 0 0 4.9 4.9l1-1a1.6 1.6 0 0 1 1.7-.4c.8.3 1.6.5 2.5.6a1.6 1.6 0 0 1 1.4 1.6Z" />
  </Svg>
);

export const LinkedInIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
    <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a1.9 1.9 0 0 1 3.8 0V16" />
  </Svg>
);

export const CaretDownIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const InfoIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5M12 7.7v.1" />
  </Svg>
);

export const RulerIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <rect x="2.5" y="8" width="19" height="8" rx="1.2" />
    <path d="M6.5 8v3M10 8v4.5M13.5 8v3M17 8v4.5" />
  </Svg>
);

export const EyeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </Svg>
);

export const iconMap = {
  shield: ShieldIcon,
  target: TargetIcon,
  check: CheckIcon,
  leaf: LeafIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  crate: CrateIcon,
  gear: GearIcon,
  wrench: WrenchIcon,
  document: DocumentIcon,
  clipboard: ClipboardIcon,
  factory: FactoryIcon,
  pin: PinIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  ruler: RulerIcon,
  eye: EyeIcon,
  info: InfoIcon,
};

export type IconName = keyof typeof iconMap;
