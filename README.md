# Indemlia — landing page

Page publique d'Indemlia, le copilote neutre des victimes d'accident de la route.

React 19 + TypeScript + Vite. Aucune librairie UI, aucune dépendance de style :
tout le CSS est écrit à la main, toutes les icônes sont des SVG inline.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
```

| Commande          | Effet                                      |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | serveur de développement                   |
| `npm run build`   | vérification TypeScript puis build `dist/` |
| `npm run preview` | sert le `dist/` produit                    |
| `npm run lint`    | oxlint                                     |

## Structure

```
src/
  styles/tokens.css    ← la charte : LE seul fichier où une couleur peut être écrite en dur
  styles/base.css      ← reset, typographie, primitives (.btn, .card, .shell…)
  components/          ← un .tsx et un .css par section, le CSS importé depuis le composant
  data/journey.ts      ← les 7 phases et les 2 transversales, avec leurs règles d'affichage
  hooks/               ← useMediaQuery
```

L'ordre d'import dans `main.tsx` compte : tokens, puis socle, puis composants —
sinon le CSS des composants ne peut plus surcharger le socle.

## Règles à ne pas casser

Ces contraintes viennent du produit, pas du code. Elles sont plus faciles à
respecter qu'à réparer.

**Couleurs.** Aucune valeur en dur hors de `tokens.css`. Jamais de blanc pur.
Le jade ne passe pas AA sur ivoire en petit texte : il est réservé aux icônes et
aux grands corps. Le fil accent n'est lisible que sur fond nuit.

**Le parcours.** L'accident est un point d'origine, jamais une phase. Les sept
phases portent exactement les noms de `data/journey.ts`. Les deux phases
transversales (suivi médical, échanges assurance) n'apparaissent jamais sur la
ligne principale : elles ne s'arrêtent pas. Aucun numéro de phase, aucun
« X sur 7 », aucun pourcentage global, aucun code technique. Une phase n'est
jamais « terminée » du seul fait qu'on soit passé à la suivante.

**Ce qu'on ne promet pas.** Ni montant, ni durée, ni issue — nulle part, sous
aucune forme. Pas de chiffre inventé, pas de statistique, pas de badge de
certification, pas de photo de banque d'images. Le mot « gratuit » n'apparaît
pas : le service est pris en charge par la mutuelle, l'employeur ou la
collectivité, et ça se dit comme ça.

**Les écrans de démonstration** (`AppDemo.tsx`) contiennent des données fictives,
signalées comme telles à l'écran. Alice n'existe pas.

## Accessibilité

Contrastes AA, focus visible partout (accent sur les fonds sombres), navigation
au clavier sur les jalons du parcours et les onglets du prototype (flèches,
Home, End). `prefers-reduced-motion` neutralise les animations sans jamais
masquer de contenu : le sentier s'affiche alors déjà parcouru.

Toute modification doit être vue à **1280 px et à 375 px** avant d'être
considérée comme finie.

## Reste à brancher

- Le bouton « Parler à l'équipe Indemlia » (`Funders.tsx`) pointe sur `#`.
- Les liens Mentions légales / Confidentialité / Accessibilité (`Footer.tsx`).
