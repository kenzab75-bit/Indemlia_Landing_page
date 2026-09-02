import { IconFootstep } from "./Icons";
import "./Promise.css";

export function PromiseBand() {
  return (
    <section className="promise" id="promesse">
      <div className="promise__inner shell">
        <p className="eyebrow">La promesse</p>

        <figure className="promise__figure">
          <blockquote className="promise__quote">
            <p>
              Indemlia promet de ne pas vous laisser <em>seule</em> entre les
              étapes.
            </p>
          </blockquote>
          <figcaption className="promise__caption">
            La fondatrice d’Indemlia
          </figcaption>
        </figure>

        <p className="promise__text">
          Indemlia est né après un accident grave : celui de sa fondatrice. De
          là vient une conviction simple — ce qui manque le plus après un
          accident, ce n’est pas l’information. C’est quelqu’un qui reste là{" "}
          <strong>entre</strong> deux rendez-vous, quand le silence s’installe
          et que la fatigue fait le reste.
        </p>

        <div className="promise__steps" aria-hidden>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              className="promise__step"
              key={i}
              style={{
                animationDelay: `${i * 260}ms`,
                translate: `0 ${i % 2 === 0 ? "-9px" : "9px"}`,
                rotate: "84deg",
              }}
            >
              <IconFootstep size={21} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
