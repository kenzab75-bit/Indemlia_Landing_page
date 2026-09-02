/**
 * Structure métier du parcours victime.
 *
 * Règles d’affichage tenues par ce fichier et par tout ce qui le consomme :
 *  · L’ACCIDENT est un point d’origine, jamais une phase.
 *  · Les noms des 7 phases principales sont exacts et dans l’ordre.
 *  · Les 2 phases transversales avancent en parallèle et ne figurent
 *    JAMAIS sur la ligne principale.
 *  · Aucun numéro, aucun « X sur 7 », aucun pourcentage, aucun code technique.
 *  · Aucune durée de phase.
 */

export type Phase = {
  /** clé interne — jamais affichée */
  id: string;
  /** nom exact, tel qu’il doit apparaître */
  name: string;
  /** ce qui se joue, en une phrase */
  summary: string;
  /** ce sur quoi Indemlia veille pendant cette phase */
  watch: string;
};

export const PHASES: Phase[] = [
  {
    id: "ouverture",
    name: "Ouverture",
    summary:
      "On ouvre votre dossier et on situe votre point de départ : ce qui s’est passé, qui est concerné, ce que vous avez déjà entre les mains.",
    watch: "Rassembler ce qui existe déjà avant que les souvenirs s’effacent.",
  },
  {
    id: "mise-en-route",
    name: "Mise en route",
    summary:
      "Votre déclaration part dans les délais et vos premières pièces se rangent au même endroit, au lieu de se perdre.",
    watch: "Le délai de déclaration à votre assureur, surveillé jour par jour.",
  },
  {
    id: "expertise-medicale",
    name: "Expertise médicale",
    summary:
      "On prépare avec vous l’évaluation médicale de vos dommages : ce qui y sera examiné, ce que vous pouvez y apporter, qui peut vous y accompagner.",
    watch: "Les pièces médicales à réunir avant le rendez-vous.",
  },
  {
    id: "consolidation",
    name: "Consolidation",
    summary:
      "Le moment clé où votre état est considéré comme stabilisé. Il ne s’acte jamais sans un médecin-conseil de victime à vos côtés.",
    watch:
      "Qu’une date ne soit pas posée à votre place, sans avis médical qui vous soit propre.",
  },
  {
    id: "evaluation",
    name: "Évaluation",
    summary:
      "Chaque poste de préjudice est recensé, pièce à l’appui — pour qu’aucun ne manque simplement parce que personne ne vous en a parlé.",
    watch: "Les justificatifs qui manquent encore à un poste ouvert.",
  },
  {
    id: "offre-reglement",
    name: "Offre & règlement",
    summary:
      "Vous décidez face à l’offre, en connaissance de cause. Indemlia vous explique ce qu’elle contient et ce qu’elle engage — jamais ce qu’elle vaut.",
    watch: "Les délais de réponse et de rétractation attachés à une offre.",
  },
  {
    id: "cloture",
    name: "Clôture",
    summary:
      "On sécurise la fin : ce qui est réglé, ce qui reste ouvert, et les preuves que vous gardez pour la suite.",
    watch: "Les documents à conserver, et pour combien de temps.",
  },
];

export type CrossPhase = {
  id: string;
  name: string;
  summary: string;
};

/** Transversales : parallèles au parcours, hors de la ligne principale. */
export const CROSS_PHASES: CrossPhase[] = [
  {
    id: "suivi-medical",
    name: "Suivi médical",
    summary:
      "Vos soins, vos arrêts, vos douleurs, vos gênes au quotidien : le journal qui documente votre état dans la durée.",
  },
  {
    id: "echanges-assurance",
    name: "Échanges assurance & provisions",
    summary:
      "Chaque courrier, chaque appel, chaque avance versée : gardés, datés, retrouvables le jour où ils comptent.",
  },
];
