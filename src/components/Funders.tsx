import { IconArrowRight, IconEye, IconScale, IconUsers } from "./Icons";
import "./Funders.css";

const POINTS = [
  {
    id: "confidentialite",
    icon: IconEye,
    name: "Vous financez, vous ne regardez pas",
    text: "Le dossier appartient à la personne accompagnée. Aucun contenu ne vous remonte, jamais.",
  },
  {
    id: "neutralite",
    icon: IconScale,
    name: "Neutre par construction",
    text: "Aucun honoraire au résultat, aucune commission d’apport : rien qui puisse un jour se retourner contre votre nom.",
  },
  {
    id: "acces",
    icon: IconUsers,
    name: "Une porte d’entrée simple",
    text: "Pensée pour des personnes qui n’ont ni l’énergie ni le temps d’en chercher une.",
  },
];

export function Funders() {
  return (
    <section className="funders section" id="organisations">
      <div className="funders__inner shell">
        <div className="funders__copy">
          <p className="eyebrow">Mutuelles · Employeurs · Collectivités</p>
          <h2 className="title funders__title">
            Vous ne pouvez pas empêcher l’accident.
            <br />
            <em>Vous pouvez empêcher la solitude qui suit.</em>
          </h2>
          <p className="lede">
            Indemlia est proposé à vos adhérents, vos salariés ou vos
            administrés, et financé par vous. Ils gardent la main sur leur
            dossier — vous, vous restez à la porte.
          </p>
          {/* TODO : brancher sur l’adresse de contact réelle de l’équipe. */}
          <a className="btn btn--primary funders__cta" href="#">
            Parler à l’équipe Indemlia
            <IconArrowRight size={17} className="btn__arrow" />
          </a>
        </div>

        <ul className="funders__points">
          {POINTS.map(({ id, icon: Icon, name, text }) => (
            <li className="funders__point" key={id}>
              <span className="funders__point-icon" aria-hidden>
                <Icon size={18} />
              </span>
              <div>
                <h3 className="funders__point-name">{name}</h3>
                <p className="funders__point-text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
