import { useState } from "react";
import { CROSS_PHASES, PHASES } from "../data/journey";
import {
  IconAlert,
  IconArrowRight,
  IconCheck,
  IconCircle,
  IconCircleDot,
  IconDocument,
  IconEye,
  IconFolder,
  IconHome,
  IconHourglass,
  IconInfo,
  IconMail,
  IconRoute,
  IconStethoscope,
} from "./Icons";
import "./AppDemo.css";

/* ─────────────────────────────────────────────────────────────
   Écrans de démonstration. Toutes les données ci-dessous sont
   FICTIVES et signalées comme telles à l’écran.
   Aucun montant, aucune durée de phase, aucune issue : jamais.
   ───────────────────────────────────────────────────────────── */

type TabId = "aujourdhui" | "parcours" | "dossier";

const TABS: Array<{ id: TabId; label: string; icon: typeof IconHome }> = [
  { id: "aujourdhui", label: "Aujourd’hui", icon: IconHome },
  { id: "parcours", label: "Parcours", icon: IconRoute },
  { id: "dossier", label: "Dossier", icon: IconFolder },
];

/** Phase courante d’Alice dans la démonstration. */
const CURRENT = "mise-en-route";

const PIECES = [
  { name: "Constat amiable", meta: "Ajouté hier", status: "verifiee" },
  { name: "Certificat médical initial", meta: "Demandé à votre médecin", status: "attendue" },
  { name: "Attestation d’assurance", meta: "Ajoutée le jour de l’ouverture", status: "verifiee" },
];

export function AppDemo() {
  const [tab, setTab] = useState<TabId>("aujourdhui");
  const currentIndex = PHASES.findIndex((p) => p.id === CURRENT);

  return (
    <section className="demo section" id="application">
      <div className="demo__inner shell">
        <div className="demo__copy">
          <p className="eyebrow">L’application</p>
          <h2 className="title demo__title">
            Ce qui compte aujourd’hui.
            <br />
            <em>Rien de plus.</em>
          </h2>
          <p className="lede">
            Un écran d’accueil qui ne réclame qu’une seule chose à la fois, et
            qui montre ce qui est déjà en sécurité. Le reste attend son tour :
            Indemlia s’en souvient à votre place.
          </p>

          <ul className="demo__points">
            <li className="demo__point">
              <span className="demo__point-icon demo__point-icon--warn">
                <IconAlert size={17} />
              </span>
              <div>
                <h3 className="demo__point-name">Une priorité, expliquée</h3>
                <p className="demo__point-text">
                  Ce qu’il faut faire, pourquoi maintenant, et comment s’y
                  prendre — sans vocabulaire d’assureur.
                </p>
              </div>
            </li>
            <li className="demo__point">
              <span className="demo__point-icon demo__point-icon--accent">
                <IconEye size={17} />
              </span>
              <div>
                <h3 className="demo__point-name">Les délais surveillés</h3>
                <p className="demo__point-text">
                  Les échéances légales sont tenues à l’œil. Indemlia vous
                  prévient avant, pas après.
                </p>
              </div>
            </li>
            <li className="demo__point">
              <span className="demo__point-icon demo__point-icon--jade">
                <IconCheck size={17} />
              </span>
              <div>
                <h3 className="demo__point-name">Ce qui est déjà sécurisé</h3>
                <p className="demo__point-text">
                  Chaque pièce rangée reste visible. On avance sur du solide,
                  pas sur de la mémoire.
                </p>
              </div>
            </li>
          </ul>

          <p className="demo__disclaimer">
            <IconInfo size={16} className="icon" />
            <span>
              Écrans de démonstration, <strong>données fictives</strong>&#160;:
              Alice n’existe pas. Et vous ne trouverez nulle part dans Indemlia un
              montant, une durée ou une issue annoncés à l’avance — personne ne
              les connaît.
            </span>
          </p>
        </div>

        <div className="demo__stage">
          <span className="tag demo__tag">
            <IconInfo size={14} />
            Démonstration · données fictives
          </span>

          <div className="phone">
            <div className="phone__frame">
              <div className="phone__island" aria-hidden />
              <div className="phone__screen">
                <div className="phone__status" aria-hidden>
                  <span>9:41</span>
                  <span className="phone__status-icons">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>

                <div className="app">
                  <div className="app__body">
                    {tab === "aujourdhui" && (
                      <div className="app__screen" id="panel-aujourdhui" role="tabpanel">
                        <p className="app__hello">Bonjour Alice</p>
                        <p className="app__phase">
                          <span className="app__phase-dot" aria-hidden />
                          Phase en cours · {PHASES[currentIndex].name}
                        </p>

                        <article className="app__card app__card--priority">
                          <p className="app__kicker app__kicker--warn">
                            <IconAlert size={14} />
                            Priorité du jour
                          </p>
                          <h4 className="app__card-title">
                            Déclarez l’accident à votre assureur
                          </h4>
                          <p className="app__deadline">
                            <IconHourglass size={15} />
                            <strong>4 jours restants</strong>
                          </p>
                          <span className="app__link">
                            Voir comment faire
                            <IconArrowRight size={14} />
                          </span>
                        </article>

                        <article className="app__card app__card--watch">
                          <span className="app__card-icon app__card-icon--accent">
                            <IconEye size={16} />
                          </span>
                          <div>
                            <h4 className="app__card-title app__card-title--sm">
                              Délai de déclaration
                            </h4>
                            <p className="app__card-text">
                              Surveillé par Indemlia. Vous serez prévenue avant
                              l’échéance.
                            </p>
                          </div>
                        </article>

                        <article className="app__card app__card--done">
                          <span className="app__card-icon app__card-icon--jade">
                            <IconCheck size={16} />
                          </span>
                          <div>
                            <h4 className="app__card-title app__card-title--sm">
                              Constat amiable enregistré
                            </h4>
                            <p className="app__card-text">
                              Ajouté à votre dossier hier.
                            </p>
                          </div>
                        </article>
                      </div>
                    )}

                    {tab === "parcours" && (
                      <div className="app__screen" id="panel-parcours" role="tabpanel">
                        <p className="app__hello app__hello--sm">Votre parcours</p>
                        <ul className="app__steps">
                          {PHASES.map((p, i) => {
                            const done = i < currentIndex;
                            const now = i === currentIndex;
                            return (
                              <li
                                key={p.id}
                                className={`app__step${now ? " is-now" : ""}${done ? " is-done" : ""}`}
                              >
                                <span className="app__step-icon" aria-hidden>
                                  {done ? (
                                    <IconCheck size={14} />
                                  ) : now ? (
                                    <IconCircleDot size={14} />
                                  ) : (
                                    <IconCircle size={14} />
                                  )}
                                </span>
                                <span className="app__step-name">{p.name}</span>
                                <span className="app__step-state">
                                  {done ? "Vérifiée" : now ? "En cours" : "À venir"}
                                </span>
                              </li>
                            );
                          })}
                        </ul>

                        <p className="app__aside-label">En parallèle</p>
                        <ul className="app__aside">
                          {CROSS_PHASES.map((c, i) => (
                            <li className="app__aside-item" key={c.id}>
                              <span aria-hidden>
                                {i === 0 ? (
                                  <IconStethoscope size={15} />
                                ) : (
                                  <IconMail size={15} />
                                )}
                              </span>
                              {c.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {tab === "dossier" && (
                      <div className="app__screen" id="panel-dossier" role="tabpanel">
                        <p className="app__hello app__hello--sm">Votre dossier</p>
                        <ul className="app__pieces">
                          {PIECES.map((piece) => (
                            <li className="app__piece" key={piece.name}>
                              <span className="app__piece-icon" aria-hidden>
                                <IconDocument size={16} />
                              </span>
                              <div className="app__piece-body">
                                <span className="app__piece-name">{piece.name}</span>
                                <span className="app__piece-meta">{piece.meta}</span>
                              </div>
                              <span
                                className={`app__badge app__badge--${piece.status}`}
                              >
                                {piece.status === "verifiee" ? (
                                  <IconCheck size={13} />
                                ) : (
                                  <IconHourglass size={13} />
                                )}
                                {piece.status === "verifiee" ? "Vérifiée" : "Attendue"}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="app__note">
                          <IconInfo size={14} />
                          Rangées au même endroit, retrouvables le jour où elles
                          comptent.
                        </p>
                      </div>
                    )}
                  </div>

                  <nav className="app__tabs" role="tablist" aria-label="Écrans de la démonstration">
                    {TABS.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={tab === id}
                        aria-controls={`panel-${id}`}
                        tabIndex={tab === id ? 0 : -1}
                        className={`app__tab${tab === id ? " is-current" : ""}`}
                        onClick={() => setTab(id)}
                      >
                        <Icon size={19} />
                        <span>{label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <p className="demo__hint">
            Touchez les onglets pour parcourir les écrans.
          </p>
        </div>
      </div>
    </section>
  );
}
