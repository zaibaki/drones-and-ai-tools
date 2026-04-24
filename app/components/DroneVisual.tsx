export function DeltaWingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 10 L190 110 L100 85 L10 110 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="100" cy="75" r="6" fill="currentColor" fillOpacity="0.6"/>
      <line x1="100" y1="10" x2="100" y2="115" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
    </svg>
  );
}

export function FixedWingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="50" rx="80" ry="12" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M40 50 L200 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M90 50 L50 20 L110 45 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M90 50 L50 80 L110 55 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M150 50 L190 20 L130 45 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M150 50 L190 80 L130 55 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="200" cy="50" r="5" fill="currentColor" fillOpacity="0.5"/>
      <path d="M160 35 L175 20 L170 45 Z" fill="currentColor" fillOpacity="0.3"/>
    </svg>
  );
}

export function QuadcopterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="65" y="65" width="30" height="30" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
      <line x1="80" y1="80" x2="30" y2="30" stroke="currentColor" strokeWidth="2"/>
      <line x1="80" y1="80" x2="130" y2="30" stroke="currentColor" strokeWidth="2"/>
      <line x1="80" y1="80" x2="30" y2="130" stroke="currentColor" strokeWidth="2"/>
      <line x1="80" y1="80" x2="130" y2="130" stroke="currentColor" strokeWidth="2"/>
      <circle cx="30" cy="30" r="14" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="130" cy="30" r="14" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="30" cy="130" r="14" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="130" cy="130" r="14" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="80" cy="80" r="8" fill="currentColor" fillOpacity="0.5"/>
    </svg>
  );
}

export function LoiteringMunitionIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 15 L155 80 L140 90 L100 70 L60 90 L45 80 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
      <path d="M100 70 L100 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M80 115 L100 125 L120 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.4"/>
      <circle cx="100" cy="50" r="5" fill="currentColor" fillOpacity="0.8"/>
      <path d="M40 55 Q70 40 100 45 Q130 40 160 55" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" fill="none"/>
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "shahed-136": DeltaWingIcon,
  "lancet-3": LoiteringMunitionIcon,
  "bayraktar-tb2": FixedWingIcon,
  "fpv-ukraine": QuadcopterIcon,
  "mohajer-6": FixedWingIcon,
};

export function DroneIcon({ id, className }: { id: string; className?: string }) {
  const Icon = iconMap[id] || FixedWingIcon;
  return <Icon className={className} />;
}
