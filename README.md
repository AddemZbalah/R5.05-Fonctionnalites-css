# BUT3 MMI — Parcours WDI S5 2026

## Sujet de projet : "Ce que le prof ne vous a pas dit !" — Les nouvelles fonctionnalités CSS

**Débusquez-vous des fonctionnalités que même votre prof ne connaît pas encore !?**

---

### Contexte

CSS évolue vite. Entre les _container queries_, `:has()`, l'imbrication native, les _cascade layers_, `color-mix()`, le _scroll-driven animation_ ou encore l'_anchor positioning_, le langage a beaucoup changé ces trois dernières années — bien plus que ce qui a pu être vu en cours.

Votre mission : **construire une page web de référence** ("cheat sheet" interactive) qui recense les nouvelles fonctionnalités CSS, avec pour chacune :

- une explication claire (à quoi ça sert, quel problème ça résout),
- un exemple de code **et** une démonstration visuelle fonctionnelle,
- un tableau de compatibilité navigateurs,
- une solution de repli (_fallback_) ou une astuce de _progressive enhancement_ si la fonctionnalité n'est pas supportée partout.

---

### Travail demandé

#### 1. Recherche (veille)

Recensez **au minimum 10 fonctionnalités CSS récentes et méconnues**. Quelques pistes pour démarrer votre veille — à vous de trouver les plus pertinentes et intéressantes :

Pistes :

- Mise en page : Container Queries (`@container`), Subgrid, `:has()`, `text-wrap: balance`
- Couleurs & thèmes : `color-mix()`, espaces colorimétriques (`oklch`, `lab`), `light-dark()`
- Architecture CSS : `@scope`, `@property`
- Animation & interaction : Scroll-driven animations, `@starting-style`, transitions de vue (View Transitions API),
- Positionnement : Anchor Positioning (`anchor()`, `position-anchor`), `popover`
- Unités & fonctions : unités `dvh`/`svh`/`lvh`,
- Houdini API, canvas in HTML,
- Condition, fonctions...

Pour chaque fonctionnalité, indiquez vos sources (documentation officielle, spec W3C/WHATWG, articles).

#### 2. Réalisation de la page web

La page doit être **codée en HTML / CSS / JS**

1. **Une page d'accueil / sommaire** avec navigation vers chaque fiche fonctionnalité (ancre ou menu).
2. **Une fiche par fonctionnalité**, structurée ainsi :
   - Nom de la propriété/fonction CSS et date d'introduction approximative.
   - Explication en français, claire et synthétique (5–10 lignes).
   - Un bloc de code (utilisez `<pre><code>`) montrant la syntaxe.
   - **Une démo live** : la fonctionnalité doit être visible et testée en vrai dans la page (pas juste une capture d'écran).
   - Un tableau de compatibilité (navigateur / version minimale / support partiel ou total). Vous pouvez vous appuyer sur les données de [Can I Use](https://caniuse.com) ou du [MDN Browser Compatibility Data].
   - Une note sur le _fallback_ : que se passe-t-il si le navigateur ne supporte pas la fonctionnalité ? Comment sécuriser l'affichage (`@supports`, valeurs de repli, etc.) ?

---

### Livrables

- Le code source complet (dépôt Git : lien à fournir).
- La page déployée et accessible en ligne (GitHub Pages).
- Un court README expliquant vos choix techniques et vos éventuelles limites/bugs connus.

---

### Modalités

- **Travail** : individuel ou en binôme.
- **Durée indicative** : 2 séances de TP + travail personnel.
- **Format de rendu** : dépôt du lien du repo + lien de la page en ligne sur la plateforme du cours.

---

### Grille d'évaluation indicative

Critère

- Pertinence et diversité des fonctionnalités choisies (≥10, variées)
- Qualité des explications (clarté, justesse technique)
- Démos fonctionnelles et code exemple propre
- Tableaux de compatibilité navigateurs (exactitude, sourcing)
- Gestion des fallbacks / `@supports`
- Qualité du HTML/CSS (sémantique, responsive, accessibilité)
- Bonus : filtre/recherche JS, design soigné, originalité

### Pour bien démarrer

- [MDN Web Docs — CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- [Can I Use](https://caniuse.com)
- [Chrome for Developers — nouveautés CSS](https://developer.chrome.com/blog)
- [web.dev — CSS](https://web.dev/learn/css)
- Baseline (indicateur de support consolidé multi-navigateurs) sur MDN
- [State of CSS 2026](https://2026.stateofcss.com/en-US) — pour voir les tendances et l'adoption des nouvelles fonctionnalités.
- web ...

---

## Projet livré — site de démonstration

J'ai ajouté une page interactive qui liste 10 nouvelles fonctionnalités CSS avec démonstrations live, exemples de code, tableaux de compatibilité et notes de fallback.

- Fichiers ajoutés : `index.html`, `styles.css`, `script.js`.

### Tester localement

1. Ouvrez `index.html` dans un navigateur moderne (Chromium/Firefox récent). Exemple :

```powershell
# Depuis le dossier du projet
start index.html
```

2. Pour un serveur local (recommandé) :

```powershell
python -m http.server 8000
# puis ouvrez http://localhost:8000
```

### Sources et documentation utile

- MDN Web Docs — CSS
- Can I Use — https://caniuse.com
- Chrome Dev Blog — https://developer.chrome.com/blog
- web.dev — https://web.dev

Si vous voulez, je peux :
- ajouter une fiche supplémentaire, ou
- préparer le dépôt pour déploiement GitHub Pages (ajout d'un workflow), ou
- améliorer le design et l'accessibilité.

---

## Version réalisée

J’ai construit une version simple et lisible d’un cheat sheet CSS moderne avec :

- 10 fonctionnalités récentes et faciles à comprendre,
- une page d’accueil avec navigation rapide,
- une démo visuelle pour chaque propriété,
- un petit moteur de recherche pour filtrer les fiches,
- des tableaux de compatibilité et des notes de fallback.

Les fichiers principaux sont :
- [index.html](index.html)
- [styles.css](styles.css)
- [script.js](script.js)

Pour tester localement, ouvrez [index.html](index.html) dans un navigateur ou lancez un petit serveur local avec :

```bash
python -m http.server 8000
```

Puis rendez-vous sur http://localhost:8000
