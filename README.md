# Indemlia — landing page

Page publique d'Indemlia, le copilote neutre des victimes d'accident de la route.

Cette landing présente :

- le parcours d'une victime après un accident ;
- l'application et sa logique "une priorité à la fois" ;
- la neutralité d'Indemlia ;
- l'entrée dédiée aux mutuelles, employeurs et collectivités.

## Stack

- React 19
- TypeScript
- Vite
- CSS écrit à la main
- Aucune librairie UI
- Aucune dépendance de style
- Icônes en SVG inline

## Démarrer

```bash
npm install
npm run dev
```

Le serveur local démarre sur :

```text
http://localhost:5173
```

## Commandes

| Commande | Effet |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Vérifie TypeScript puis génère `dist/` |
| `npm run preview` | Sert le build produit depuis `dist/` |
| `npm run lint` | Lance `oxlint` |

## Structure

```text
src/
  styles/
    tokens.css        # Charte. Seul fichier autorisé à contenir des couleurs en dur.
    base.css          # Reset, typographie, primitives globales.

  components/         # Un composant .tsx et son .css par section.

  data/
    journey.ts        # Phases du parcours et règles d'affichage.

  hooks/
    useMediaQuery.ts
```

L'ordre d'import CSS dans `main.tsx` est important :

```text
tokens.css -> base.css -> CSS des composants
```

Si cet ordre change, les composants peuvent perdre leur capacité à surcharger le socle.

## Règles produit à ne pas casser

Ces règles viennent d'Indemlia. Elles priment sur les préférences de code.

### Couleurs

- Aucune couleur écrite en dur hors de `src/styles/tokens.css`.
- Jamais de blanc pur.
- Le jade ne doit pas être utilisé en petit texte sur fond ivoire.
- Le jade est réservé aux icônes et aux grands corps.
- Le fil accent n'est lisible que sur fond nuit.

### Parcours

- L'accident est un point d'origine, jamais une phase.
- Les phases visibles doivent reprendre exactement les noms de `src/data/journey.ts`.
- Les suivis transversaux ne vont pas sur la ligne principale.
- Le suivi médical avance en parallèle.
- Les échanges assurance et provisions avancent en parallèle.
- Aucun numéro de phase côté utilisateur.
- Aucun "X sur 7".
- Aucun pourcentage global.
- Aucun code technique visible.
- Une phase n'est jamais "terminée" du seul fait qu'on passe à la suivante.

### Promesse

Indemlia ne promet jamais :

- un montant ;
- une durée ;
- une issue ;
- une économie ;
- une indemnisation ;
- une décision favorable.

À éviter partout :

- chiffres inventés ;
- statistiques non sourcées ;
- badges de certification ;
- photos de banque d'images ;
- mot "gratuit".

Formulation correcte :

```text
Le service est pris en charge par la mutuelle, l'employeur ou la collectivité qui vous le propose.
```

### Neutralité

Indemlia doit rester neutre dans le fond et dans le ton.

À ne pas faire :

- attaquer les assureurs ;
- laisser entendre qu'Indemlia remplace un avocat ;
- laisser entendre qu'Indemlia remplace un médecin ;
- recommander un professionnel ;
- analyser une offre ou une stratégie individuelle.

Formulation correcte :

```text
Indemlia délivre une information générale, jamais un conseil individualisé.
```

## Écrans de démonstration

Le composant `AppDemo.tsx` contient des données fictives.

Règles :

- les données fictives doivent être signalées à l'écran ;
- Alice n'existe pas ;
- aucun contenu de démonstration ne doit ressembler à un vrai dossier ;
- aucun délai affiché ne doit créer une promesse de résultat.

## Accessibilité

Obligatoire avant validation :

- contrastes AA ;
- focus visible partout ;
- focus accentué sur les fonds sombres ;
- navigation clavier sur les jalons du parcours ;
- navigation clavier sur les onglets du prototype ;
- support des touches fléchées ;
- support de `Home` et `End` ;
- respect de `prefers-reduced-motion`.

Avec `prefers-reduced-motion`, les animations sont neutralisées, mais aucun contenu ne disparaît.

## Vérification responsive

Toute modification doit être vérifiée à ces deux largeurs :

| Largeur | Usage |
| --- | --- |
| `1280px` | Desktop |
| `375px` | Mobile |

Une modification n'est pas finie tant que ces deux vues n'ont pas été contrôlées.

## Points de vigilance UX

### Cible de la page

La page ne doit pas mélanger sans distinction :

- la victime ;
- le financeur ;
- le partenaire ;
- l'investisseur.

Si la landing parle aux victimes, le CTA principal doit leur correspondre.

Si la landing parle aux organisations, le hero doit l'annoncer plus tôt.

### Hero

Le hero doit expliquer en moins de cinq secondes :

- ce qu'est Indemlia ;
- pour qui c'est fait ;
- ce que la personne peut faire ensuite.

Attention aux formulations trop larges comme :

```text
On le fait avec vous.
```

Préférer une promesse plus bornée :

```text
Indemlia vous aide à savoir où vous en êtes, quoi regarder et quoi préparer.
```

### Parcours

La timeline doit rester utile, pas seulement décorative.

Elle doit permettre de comprendre :

- le point de départ ;
- l'étape actuelle ;
- la prochaine action ;
- les suivis qui avancent en parallèle.

### Application

Le bloc application est la partie la plus concrète de la landing.

À conserver :

- la priorité du jour ;
- les délais surveillés ;
- les éléments déjà sécurisés ;
- la mention "données fictives".

À surveiller :

- ne pas créer d'anxiété inutile avec les délais ;
- ne pas afficher de promesse de résolution ;
- ne pas afficher de vocabulaire assureur trop technique.

### Neutralité

La neutralité doit être prouvée par des faits simples.

Les trois preuves principales :

- aucun honoraire au résultat ;
- aucune commission d'apport ;
- aucun paiement dans l'application.

Les limites doivent rester visibles :

- information générale ;
- pas de conseil individualisé ;
- pas de remplacement d'un avocat ;
- pas de remplacement d'un médecin.

## Reste à brancher

- Le bouton `Parler à l'équipe Indemlia` dans `Funders.tsx`.
- Les liens `Mentions légales`, `Confidentialité`, `Accessibilité` dans `Footer.tsx`.

## Definition of done

Avant de considérer la landing comme finie :

- `npm run lint` passe ;
- `npm run build` passe ;
- la page est vérifiée à `1280px` ;
- la page est vérifiée à `375px` ;
- les CTA pointent vers une destination réelle ;
- les liens de footer sont branchés ;
- aucune couleur en dur n'existe hors `tokens.css`;
- aucune promesse interdite n'apparaît ;
- les données fictives sont signalées ;
- la cible principale de la landing est claire.
