import {
  IconHourglass,
  IconInfo,
  IconNoPercent,
  IconScale,
  IconUnlink,
  IconWalletOff,
} from "./Icons";
import "./Neutrality.css";

const PROOFS = [
  {
    id: "honoraires",
    icon: IconNoPercent,
    name: "Aucun honoraire au résultat",
    text: "Indemlia ne prend pas un pourcentage de ce que vous percevez. Ce que vous obtenez ne change rien à ce que nous gagnons — donc rien ne nous pousse à vous faire signer.",
  },
  {
    id: "apport",
    icon: IconUnlink,
    name: "Aucune commission d’apport",
    text: "Aucun avocat, aucun médecin-conseil, aucun expert ne nous rémunère pour être recommandé. Quand nous vous orientons, ce n’est pas nous que ça sert.",
  },
  {
    id: "paiement",
    icon: IconWalletOff,
    name: "Aucun paiement dans l’application",
    text: "Vous ne trouverez pas de moyen de paiement dans Indemlia : il n’y en a pas. Le service est pris en charge par la mutuelle, l’employeur ou la collectivité qui vous le propose.",
  },
];

const LIMITS = [
  {
    id: "professionnels",
    icon: IconScale,
    name: "Nous ne remplaçons ni votre avocat ni votre médecin",
    text: "Indemlia oriente, clarifie, organise et informe. Les actes et les décisions restent entre vos mains et celles des professionnels qui vous accompagnent.",
  },
  {
    id: "conseil",
    icon: IconInfo,
    name: "Information générale, jamais de conseil individualisé",
    text: "Nous expliquons les règles et les étapes telles qu’elles existent pour tout le monde. Ce qui s’applique à votre situation précise relève d’un professionnel.",
  },
  {
    id: "promesse",
    icon: IconHourglass,
    name: "Aucune promesse sur le montant, la durée ou l’issue",
    text: "Personne ne peut les connaître à l’avance, et quiconque vous les annonce vous raconte une histoire. Ce que nous promettons est ailleurs — juste en dessous.",
  },
];

export function Neutrality() {
  return (
    <section className="neutral section" id="neutralite">
      <div className="shell">
        <header className="neutral__head">
          <p className="eyebrow">Notre neutralité</p>
          <h2 className="title neutral__title">
            Une position se prouve, <em>elle ne se déclare pas.</em>
          </h2>
          <p className="lede">
            Le seul moyen de savoir si un accompagnement est neutre, c’est de
            regarder comment il gagne sa vie. Voici les nôtres, en clair.
          </p>
        </header>

        <ul className="neutral__proofs">
          {PROOFS.map(({ id, icon: Icon, name, text }) => (
            <li className="neutral__proof card" key={id}>
              <span className="neutral__proof-icon" aria-hidden>
                <Icon size={22} />
              </span>
              <h3 className="ui-title neutral__proof-name">{name}</h3>
              <p className="neutral__proof-text">{text}</p>
            </li>
          ))}
        </ul>

        <div className="neutral__limits">
          <h3 className="ui-title neutral__limits-title">
            Et voici ce qu’Indemlia ne fera jamais
          </h3>
          <ul className="neutral__limits-list">
            {LIMITS.map(({ id, icon: Icon, name, text }) => (
              <li className="neutral__limit" key={id}>
                <span className="neutral__limit-icon" aria-hidden>
                  <Icon size={18} />
                </span>
                <div>
                  <h4 className="neutral__limit-name">{name}</h4>
                  <p className="neutral__limit-text">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
