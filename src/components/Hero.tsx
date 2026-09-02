import { useMediaQuery } from "../hooks/useMediaQuery";
import { IconArrowDown, IconArrowRight, IconFootstep, IconInfo, IconNoPercent, IconShieldCheck } from "./Icons";
import "./Hero.css";

/** Le « fil » du hero : reprend la géométrie du logo, déployée en paysage. */
const HERO_PATH =
  "M28 434 C96 434 128 424 158 402 L216 352 L120 286 L232 206 L232 74";

/* Empreintes posées de part et d’autre de la route, dans le sens de la
   marche : c’est la démarche qu’on veut lire, pas des taches. */
const HERO_STEPS = [
  { x: 50, y: 452, r: 90 },
  { x: 78, y: 412, r: 90 },
  { x: 106, y: 448, r: 88 },
  { x: 133, y: 404, r: 82 },
  { x: 162, y: 436, r: 68 },
];

export function Hero() {
  /* En dessous de 520 px l’illustration tombe à ~210 px de large : à cette
     échelle une empreinte de 22 unités devient une tache. On en pose moins,
     et plus grandes, pour que la démarche reste lisible. */
  const isNarrow = useMediaQuery("(max-width: 520px)");
  const steps = isNarrow ? HERO_STEPS.filter((_, i) => i % 2 === 0) : HERO_STEPS;
  const stepSize = isNarrow ? 38 : 22;

  return (
    <section className="hero" id="top">
      <div className="hero__inner shell">
        <div className="hero__copy">
          <p className="eyebrow">Copilote des victimes d’accident de la route</p>

          <h1 className="display hero__title">
            Le chemin est long.
            <br />
            <em>On le fait avec vous.</em>
          </h1>

          <p className="lede hero__lede">
            Après un accident : le choc, la fatigue, les papiers — et en face,
            des assureurs outillés. Indemlia vous montre{" "}
            <strong>où vous en êtes</strong>,{" "}
            <strong>ce qui compte aujourd’hui</strong>, et{" "}
            <strong>veille sur les délais</strong> à ne pas manquer, de la
            minute de l’accident jusqu’à l’indemnisation.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#parcours">
              Voir le parcours
              <IconArrowRight size={17} className="btn__arrow" />
            </a>
            <a className="btn btn--ghost" href="#neutralite">
              Comment on reste neutre
            </a>
          </div>

          <p className="hero__access">
            <IconInfo size={16} className="icon" />
            <span>
              Indemlia vous est proposé par votre mutuelle, votre employeur ou
              votre collectivité. Vous n’avez rien à régler dans l’application.
            </span>
          </p>

          <ul className="hero__pillars">
            <li className="hero__pillar">
              <IconNoPercent size={17} className="icon" />
              <span>Aucun honoraire au résultat</span>
            </li>
            <li className="hero__pillar">
              <IconShieldCheck size={17} className="icon" />
              <span>Aucune commission d’apport</span>
            </li>
            <li className="hero__pillar">
              <IconInfo size={17} className="icon" />
              <span>Information générale, jamais de conseil individualisé</span>
            </li>
          </ul>
        </div>

        <div className="hero__art" aria-hidden>
          <svg className="hero__svg" viewBox="0 0 380 500" role="presentation">
            <defs>
              <radialGradient id="heroGlowA" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--halo-accent)" />
                <stop offset="100%" stopColor="var(--halo-accent-soft)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="heroGlowB" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--halo-jade-soft)" />
                <stop offset="100%" stopColor="var(--halo-jade-soft)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Lumière : le haut du chemin est plus clair que le bas. */}
            <circle cx="238" cy="96" r="175" fill="url(#heroGlowA)" />
            <circle cx="96" cy="392" r="150" fill="url(#heroGlowB)" />

            <circle className="hero__ring hero__ring--a" cx="238" cy="96" r="86" />
            <circle className="hero__ring hero__ring--b" cx="238" cy="96" r="126" />

            {/* Le sol : une ligne d’horizon très discrète. */}
            <path className="hero__ground" d="M8 486 H352" />

            {/* La route, puis le pointillé Accent qui avance dessus. */}
            <path className="hero__road" d={HERO_PATH} />
            <path className="hero__thread" d={HERO_PATH} />

            {/* Le « i » : le point d’arrivée. */}
            <circle className="hero__dot" cx="232" cy="40" r="17" />

            <g className="hero__steps">
              {steps.map((step, i) => (
                <g
                  key={step.x}
                  transform={`translate(${step.x} ${step.y}) rotate(${step.r})`}
                  style={{ animationDelay: `${400 + i * 180}ms` }}
                  className="hero__step"
                >
                  <g transform={`translate(${-stepSize / 2} ${(-stepSize * 1.35) / 2})`}>
                    <IconFootstep size={stepSize} />
                  </g>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      <a className="hero__scroll" href="#parcours">
        <span>Le parcours, étape après étape</span>
        <IconArrowDown size={16} />
      </a>
    </section>
  );
}
