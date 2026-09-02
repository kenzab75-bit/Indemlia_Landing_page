import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { CROSS_PHASES, PHASES } from "../data/journey";
import { useMediaQuery, useReducedMotion } from "../hooks/useMediaQuery";
import {
  IconAlert,
  IconArrowRight,
  IconEye,
  IconFootstep,
  IconMail,
  IconStethoscope,
} from "./Icons";
import "./Journey.css";

/* Géométrie du sentier — une polyligne à joints ronds, comme le logo.
   Le viewBox fait 130 de haut et l’SVG 130 px : l’axe Y est donc au 1:1,
   ce qui permet de poser les jalons HTML exactement sur les sommets. */
const VIEW_W = 1000;
const VIEW_H = 130;
const X_START = 78;
const X_END = 922;
const Y_AT = [94, 58, 90, 54, 86, 50, 78];

const NODES = PHASES.map((_, i) => ({
  x: X_START + (i * (X_END - X_START)) / (PHASES.length - 1),
  y: Y_AT[i],
}));

/* Le tracé déborde des jalons : on vient de l’accident, on va vers
   l’indemnisation. Le chemin ne commence ni ne finit sur une phase. */
const TRAIL_D = [
  `M14 ${Y_AT[0] + 16}`,
  ...NODES.map((n) => `L${n.x.toFixed(1)} ${n.y}`),
  `L986 ${Y_AT[6] - 14}`,
].join(" ");

/** Empreintes posées entre deux jalons. */
const STEP_TS = [0.3, 0.52, 0.74];

type Step = { key: string; seg: number; order: number; ux: number; uy: number; perp: number };

const STEPS: Step[] = NODES.slice(0, -1).flatMap((from, seg) => {
  const to = NODES[seg + 1];
  return STEP_TS.map((t, order) => ({
    key: `${seg}-${order}`,
    seg,
    order,
    ux: from.x + (to.x - from.x) * t,
    uy: from.y + (to.y - from.y) * t,
    perp: (seg * STEP_TS.length + order) % 2 === 0 ? 12 : -12,
  }));
});

export function Journey() {
  const isWide = useMediaQuery("(min-width: 860px)");
  const reduced = useReducedMotion();

  const [active, setActive] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const [inView, setInView] = useState(false);
  const [trailW, setTrailW] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  /* La marche ne démarre que lorsque la section est réellement regardée. */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || engaged || reduced) return;
    if (active >= PHASES.length - 1) return;
    const id = window.setTimeout(
      () => setActive((a) => a + 1),
      active === 0 ? 1500 : 2400,
    );
    return () => window.clearTimeout(id);
  }, [inView, engaged, reduced, active]);

  useLayoutEffect(() => {
    const el = trailRef.current;
    if (!el || !isWide) return;
    const ro = new ResizeObserver(([entry]) =>
      setTrailW(entry.contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, [isWide]);

  /* Mouvement réduit : le sentier est montré parcouru, sans animation. */
  const walked = reduced ? PHASES.length - 1 : active;
  const scaleX = trailW / VIEW_W;

  const select = (i: number) => {
    setEngaged(true);
    setActive(i);
  };

  const onKeyDown = (event: ReactKeyboardEvent, i: number) => {
    const last = PHASES.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = i === last ? 0 : i + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = i === 0 ? last : i - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabsRef.current[next]?.focus();
  };

  const phase = PHASES[active];

  return (
    <section className="journey is-deep section" id="parcours" ref={sectionRef}>
      <div className="shell">
        <header className="journey__head">
          <p className="eyebrow">Le parcours</p>
          <h2 className="title journey__title">
            Sept phases. Et <em>personne qui vous lâche</em> entre deux.
          </h2>
          <p className="lede">
            Le chemin est balisé à l’avance : vous savez toujours où vous êtes,
            et ce qui vous attend au jalon suivant.
          </p>
        </header>

        {/* Bornes du chemin — l’accident est une origine, pas une phase. */}
        <div className="journey__ends">
          <span className="journey__end">
            <IconAlert size={16} className="icon" />
            <span>
              Point d’origine : <strong>l’accident</strong>
            </span>
          </span>
          <span className="journey__ends-rule" aria-hidden />
          <span className="journey__end journey__end--right">
            <span>
              Jusqu’à <strong>l’indemnisation</strong>
            </span>
            <IconArrowRight size={16} className="icon" />
          </span>
        </div>

        <div
          className={`journey__trail${isWide ? " journey__trail--wide" : ""}`}
          ref={trailRef}
        >
          {isWide && (
            <svg
              className="journey__svg"
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="none"
              aria-hidden
              focusable="false"
            >
              <defs>
                <clipPath id="journeyWalked" clipPathUnits="userSpaceOnUse">
                  <rect
                    className="journey__clip"
                    x="0"
                    y="0"
                    height={VIEW_H}
                    style={{ width: `${NODES[walked].x + 18}px` }}
                  />
                </clipPath>
              </defs>

              <path className="journey__road" d={TRAIL_D} vectorEffect="non-scaling-stroke" />
              <path
                className="journey__road journey__road--walked"
                d={TRAIL_D}
                vectorEffect="non-scaling-stroke"
                clipPath="url(#journeyWalked)"
              />
              <path
                className="journey__thread"
                d={TRAIL_D}
                vectorEffect="non-scaling-stroke"
                clipPath="url(#journeyWalked)"
              />
            </svg>
          )}

          {isWide &&
            STEPS.map((step) => {
              const from = NODES[step.seg];
              const to = NODES[step.seg + 1];
              const dx = (to.x - from.x) * scaleX;
              const dy = to.y - from.y;
              const len = Math.hypot(dx, dy) || 1;
              const nx = -(dy / len);
              const ny = dx / len;
              const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
              return (
                <span
                  key={step.key}
                  className={`journey__step${walked > step.seg ? " is-shown" : ""}`}
                  aria-hidden
                  style={{
                    left: `${step.ux * scaleX + nx * step.perp}px`,
                    top: `${step.uy + ny * step.perp}px`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transitionDelay: `${step.order * 130}ms`,
                  }}
                >
                  <IconFootstep size={18} />
                </span>
              );
            })}

          <div className="journey__nodes" role="tablist" aria-label="Les phases du parcours">
            {PHASES.map((p, i) => {
              const state = i === active ? "is-active" : i < walked ? "is-walked" : "is-ahead";
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`phase-tab-${p.id}`}
                  aria-selected={i === active}
                  aria-controls="phase-panel"
                  tabIndex={i === active ? 0 : -1}
                  className={`journey__node ${state}`}
                  style={
                    isWide
                      ? { left: `${(NODES[i].x / VIEW_W) * 100}%` }
                      : undefined
                  }
                  onClick={() => select(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <span
                    className="journey__dot"
                    style={isWide ? { top: `${NODES[i].y}px` } : undefined}
                    aria-hidden
                  />
                  <span className="journey__label">{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="journey__panel"
          role="tabpanel"
          id="phase-panel"
          aria-labelledby={`phase-tab-${phase.id}`}
          tabIndex={-1}
        >
          <div className="journey__panel-main">
            <h3 className="ui-title journey__panel-title">{phase.name}</h3>
            <p className="journey__panel-text">{phase.summary}</p>
          </div>
          <p className="journey__watch">
            <IconEye size={17} className="icon" />
            <span>
              <span className="journey__watch-label">Indemlia veille sur</span>
              {phase.watch}
            </span>
          </p>
        </div>

        {/* Transversales : parallèles, jamais posées sur la ligne principale. */}
        <div className="journey__cross">
          <p className="journey__cross-intro">
            Deux suivis avancent <strong>en parallèle</strong>, du premier jour
            au dernier. Ils ne s’arrêtent pas entre deux phases — et c’est
            pour ça qu’ils ne figurent pas sur la ligne.
          </p>
          <ul className="journey__cross-list">
            {CROSS_PHASES.map((c, i) => (
              <li className="journey__cross-item" key={c.id}>
                <span className="journey__cross-icon" aria-hidden>
                  {i === 0 ? <IconStethoscope size={19} /> : <IconMail size={19} />}
                </span>
                <div>
                  <h3 className="journey__cross-name">{c.name}</h3>
                  <p className="journey__cross-text">{c.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
