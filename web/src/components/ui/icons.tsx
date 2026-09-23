export function ShieldIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    </svg>
  );
}

export function TargetIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11z" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function LeafIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <path d="M12 2C8 6 6 9.5 6 13a6 6 0 0 0 12 0c0-3.5-2-7-6-11z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

/* Note: `.svg-ico` sets `stroke: currentColor` in CSS, which overrides the
   `stroke="#fff"` presentation attribute on the older icons above — so every
   icon already takes its colour from the surrounding `color`. New icons leave
   the attribute off rather than carry it as dead weight. */

export function GlobeIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

/** Works/plant silhouette — used for the equipment-serviced figure. */
export function FactoryIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24">
      <path d="M3 21V10l6 3.5V10l6 3.5V6l6 3.5V21H3z" />
      <path d="M7 17.5h2M13 17.5h2" />
    </svg>
  );
}

/** Certificate document with a seal and ribbon. */
export function CertificateIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24">
      <path d="M19 11.5V5.5A1.5 1.5 0 0 0 17.5 4h-11A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20H12" />
      <path d="M8.5 8.5h8M8.5 12h5" />
      <circle cx="17" cy="16" r="2.8" />
      <path d="m15.3 18.3-.8 3.4 2.5-1.3 2.5 1.3-.8-3.4" />
    </svg>
  );
}

export function CrateIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <rect x="3" y="9" width="18" height="10" rx="1" />
      <path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z" />
    </svg>
  );
}

/** Brand mark, so it is filled rather than stroked like the `.svg-ico` set
 * above — it is not part of iconMap for that reason. */
export function LinkedInIcon() {
  return (
    <svg className="brand-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6.5 0h3.8v1.64h.06c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.84c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.52-2.3 3.1V21h-4V9z" />
    </svg>
  );
}

export const iconMap = {
  shield: ShieldIcon,
  target: TargetIcon,
  heart: HeartIcon,
  check: CheckIcon,
  leaf: LeafIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  crate: CrateIcon,
  gear: GearIcon,
  factory: FactoryIcon,
  certificate: CertificateIcon,
};

export type IconName = keyof typeof iconMap;
