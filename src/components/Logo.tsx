import "./Logo.css";

/**
 * Marque Indemlia : « route → i ».
 * Une route pointillée qui subit un choc puis se redresse en « i ».
 * Géométrie strictement conforme à la charte ; seules les couleurs
 * passent par les tokens (aucune valeur en dur hors tokens.css).
 */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={(size * 46) / 118}
      height={size}
      /* Cadré au plus près du tracé : sinon la marque se perd dans le vide
         latéral du carré d’origine. Géométrie inchangée. */
      viewBox="37 1 46 118"
      aria-hidden
      focusable="false"
    >
      <path
        d="M60 112 L60 80 L72 64 L48 48 L60 32"
        fill="none"
        stroke="var(--logo-road)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 112 L60 80 L72 64 L48 48 L60 32"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.5 9"
      />
      <circle cx="60" cy="17" r="8.5" fill="var(--logo-dot)" />
    </svg>
  );
}

export function Wordmark({ size = 34 }: { size?: number }) {
  return (
    <span className="wordmark">
      <LogoMark size={size} />
      <span className="wordmark__text">Indemlia</span>
    </span>
  );
}
