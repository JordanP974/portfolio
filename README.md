# Portfolio — Jordan Paris

Portfolio personnel de développeur web Full Stack, construit avec React 19, TypeScript et Vite.

## Stack technique

| Outil | Version | Rôle |
|-------|---------|------|
| React | 19 | UI / composants |
| TypeScript | ~6.0 | Typage statique |
| Vite | 8 | Bundler / dev server |
| React Router DOM | 7 | Navigation client |
| Hanken Grotesk | — | Police corps de texte |
| Space Grotesk | — | Police titres |
| JetBrains Mono | — | Police monospace / code |

## Démarrage rapide

```bash
# Installer les dépendances
pnpm install   # ou npm install

# Lancer le serveur de développement
pnpm dev       # ou npm run dev

# Build de production
pnpm build     # ou npm run build

# Prévisualiser le build
pnpm preview   # ou npm run preview
```

## Structure du projet

```
portfolio/
├── index.html                    # Point d'entrée HTML + imports Google Fonts
├── src/
│   ├── main.tsx                  # Initialisation React + BrowserRouter
│   ├── App.tsx                   # Composition des sections
│   ├── index.css                 # Variables CSS globales, reset, typographie
│   ├── App.css                   # Styles des blocs de section (.block, .sec-head)
│   ├── @types/
│   │   └── index.d.tsx           # Interfaces TypeScript (ISkills)
│   ├── data/
│   │   ├── profile.ts            # Données personnelles (nom, email, liens)
│   │   └── skills.ts             # Liste des compétences par catégorie
│   └── components/
│       ├── Header/               # Barre de navigation sticky (responsive)
│       ├── Hero/                 # Section d'accroche principale
│       ├── About/                # Section "À propos" + fiche récapitulative
│       ├── Skills/               # Grille de compétences avec tags
│       └── Footer/               # Pied de page avec liens de contact
```

## Composants

### `Header`
Navigation sticky avec fond flou (`backdrop-filter`). Sur mobile (< 760px) les liens se masquent et un bouton "menu" ouvre un panneau déroulant. L'état du menu est géré par `useState`. Affiche un badge de disponibilité avec animation pulse.

### `Hero`
Section principale avec titre, sous-titre, boutons CTA et métadonnées (localisation, formation). Les titres utilisent `clamp()` pour être responsive sans media queries.

### `About`
Grille à 2 colonnes : texte de présentation à gauche, fiche rapide (focus, langues, disponibilité) à droite dans une carte.

### `Skills`
Grille de catégories de compétences (Langages, Frontend, Backend, DevOps, Méthodologies). Chaque catégorie affiche ses technologies sous forme de tags interactifs.

### `Footer`
Informations de contact (email, téléphone, GitHub) et mention de copyright.

## Personnalisation

Toutes les données personnelles sont centralisées dans `src/data/` — aucune modification de composant nécessaire pour mettre à jour le contenu.

### Modifier les couleurs
Les couleurs sont définies via des variables CSS dans `src/index.css` :

```css
:root {
  --paper:       #F4F4F1;  /* fond principal */
  --ink:         #17181A;  /* texte principal */
  --slate:       #6E7177;  /* texte secondaire */
  --accent:      #3540D9;  /* couleur d'accentuation (bleu) */
  --green:       #3FA66A;  /* indicateur de disponibilité */
  --line:        #E2E2DC;  /* bordures */
}
```

## Polices

Chargées depuis Google Fonts dans `index.html` :

```
Space Grotesk    → titres (h1, h2)
Hanken Grotesk   → corps de texte (body)
JetBrains Mono   → code, navigation, labels, tags
```

## Points à compléter

- [ ] Ajouter la section **Projets** (section 03)
- [ ] Ajouter la section **Parcours** / timeline (section 04)
- [ ] Implémenter la section **Contact** avec formulaire
- [ ] Câbler les vraies routes dans les `NavLink` (actuellement tous à `/#`)
- [ ] Implémenter les animations `.reveal` au scroll (Intersection Observer)
- [ ] Ajouter le menu mobile responsive (`@media (max-width: 760px)`)
