# Portfolio — SlyZ

Portfolio personnel axé Computer Graphics / Game Dev / Ingénieur.  
Aucune dépendance — HTML, CSS et JS vanilla pur.

## Structure

```
portfolio/
├── index.html              # Page principale
├── css/
│   ├── base.css            # Reset, variables CSS, boutons, animations
│   ├── nav.css             # Barre de navigation sticky
│   ├── hero.css            # Section hero + canvas animé
│   ├── sections.css        # Styles partagés + section À propos
│   ├── projects.css        # Grille de projets
│   ├── skills.css          # Grille de compétences
│   └── contact.css         # Section contact
└── js/
    ├── hero-canvas.js      # Grille de points réactive à la souris
    ├── raytracer.js        # Mini ray tracer CPU animé (thumbnail projet)
    └── scroll-reveal.js    # Apparition au scroll via IntersectionObserver
```

## Lancer en local

Ouvre simplement `index.html` dans un navigateur, ou utilise un serveur local :

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

## Personnaliser

- **Tes vraies infos** : remplace les textes dans `index.html`
- **Tes vrais projets** : modifie les `.project-card` et leurs liens GitHub
- **Email / LinkedIn** : section `#contact` dans `index.html`
- **Couleurs** : variables `:root` dans `css/base.css`
