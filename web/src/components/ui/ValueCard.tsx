import { Reveal } from './Reveal';
import { iconMap } from './icons';

interface ValueCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  onDark?: boolean;
  centered?: boolean;
}

export function ValueCard({ title, description, icon, onDark, centered }: ValueCardProps) {
  const Icon = iconMap[icon];
  return (
    <Reveal className={['value-card', onDark ? 'on-dark' : '', centered ? 'text-center' : ''].filter(Boolean).join(' ')}>
      <div className="value-icon" style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Reveal>
  );
}
