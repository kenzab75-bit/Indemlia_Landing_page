/**
 * Jeu d’icônes SVG inline, trait 1.75, cap rond.
 * `currentColor` partout : la couleur vient toujours du contexte,
 * et une icône ne voyage jamais sans son libellé.
 */

type IconProps = {
  size?: number;
  className?: string;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export function IconArrowRight({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowDown({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4v15" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconCheck({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function IconShieldCheck({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6l7-3z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconNoPercent({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M17.5 6.5l-11 11" />
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M3.2 3.2l17.6 17.6" />
    </svg>
  );
}

export function IconUnlink({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9.5 14.5l5-5" />
      <path d="M7.7 11.3L6.2 12.8a3.6 3.6 0 005.1 5.1l1.5-1.5" />
      <path d="M16.3 12.7l1.5-1.5a3.6 3.6 0 00-5.1-5.1l-1.5 1.5" />
      <path d="M3.2 3.2l17.6 17.6" />
    </svg>
  );
}

export function IconWalletOff({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 9V7.6A1.6 1.6 0 0018.4 6H5.6A1.6 1.6 0 004 7.6v8.8A1.6 1.6 0 005.6 18h12.8a1.6 1.6 0 001.6-1.6V15" />
      <path d="M20 9h-3.4a1.5 1.5 0 000 3H20" />
      <path d="M3.2 3.2l17.6 17.6" />
    </svg>
  );
}

export function IconAlert({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4.5l8.5 14.5H3.5L12 4.5z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function IconHourglass({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6.2 3.2h11.6" />
      <path d="M6.2 20.8h11.6" />
      <path d="M8.2 3.2v3.4c0 1.7 3.8 3.7 3.8 5.4s-3.8 3.7-3.8 5.4v3.4" />
      <path d="M15.8 3.2v3.4c0 1.7-3.8 3.7-3.8 5.4s3.8 3.7 3.8 5.4v3.4" />
    </svg>
  );
}

export function IconEye({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function IconStethoscope({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 3v5a4 4 0 008 0V3" />
      <path d="M6 3H4.5" />
      <path d="M12.5 3H14" />
      <path d="M10 16v.5a4.5 4.5 0 009 0V15" />
      <circle cx="19" cy="13" r="2" />
      <path d="M10 12v4" />
    </svg>
  );
}

export function IconMail({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M4 7l8 5.5L20 7" />
    </svg>
  );
}

export function IconFolder({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.5 7.2A1.7 1.7 0 015.2 5.5h3.4l1.8 2.2h8.4a1.7 1.7 0 011.7 1.7v7.1a1.7 1.7 0 01-1.7 1.7H5.2a1.7 1.7 0 01-1.7-1.7V7.2z" />
    </svg>
  );
}

export function IconDocument({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6.5 3.5h7L18 8v12.5H6.5z" />
      <path d="M13 3.5V8h5" />
      <path d="M9.5 13h5" />
      <path d="M9.5 16.5h5" />
    </svg>
  );
}

export function IconHome({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 10.5L12 4l8 6.5" />
      <path d="M6 10v9.5h12V10" />
    </svg>
  );
}

export function IconRoute({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="5.5" r="2.5" />
      <path d="M15.5 5.5H10a3 3 0 000 6h4a3 3 0 010 6H8.5" />
    </svg>
  );
}

export function IconCircleDot({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCircle({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
    </svg>
  );
}

export function IconInfo({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.7" />
      <path d="M12 11v5.2" />
      <path d="M12 7.8h.01" />
    </svg>
  );
}

export function IconScale({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M5 8h14" />
      <path d="M5 8l-2.5 5.5a2.9 2.9 0 005 0L5 8z" />
      <path d="M19 8l-2.5 5.5a2.9 2.9 0 005 0L19 8z" />
    </svg>
  );
}

export function IconUsers({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="9.5" cy="8.5" r="3.3" />
      <path d="M3.8 19.5a5.9 5.9 0 0111.4 0" />
      <path d="M16 5.6a3.3 3.3 0 010 5.9" />
      <path d="M18 14.6a5.9 5.9 0 012.4 4.9" />
    </svg>
  );
}

export function IconFootstep({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 1.35}
      viewBox="0 0 24 34"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      {/* Avant-pied + talon : deux masses, pour que l’empreinte se lise
          encore à 12 px de haut. */}
      <ellipse cx="12.6" cy="10.6" rx="8" ry="9.2" />
      <ellipse cx="11" cy="27" rx="5.4" ry="6.4" />
    </svg>
  );
}
