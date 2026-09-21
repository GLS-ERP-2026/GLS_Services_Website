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

export function GlobeIcon() {
  return (
    <svg className="svg-ico" viewBox="0 0 24 24" stroke="#fff">
      <path d="M3 12h18M12 3v18" />
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
};
