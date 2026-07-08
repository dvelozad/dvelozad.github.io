# Diego Veloza Diaz — Scientific Profile Site

A single-page scientific profile site, implemented from the Claude Design handoff
bundle in [`../project`](../project). Built with **Vite + React**.

The design is the "Wes Anderson" cream/espresso system: a light cream default
theme with a warm espresso dark variant, terracotta / ochre / pine-sage accents,
Fraunces (display) · Space Grotesk (body) · IBM Plex Mono (labels), and an
animated phase-space particle field behind the hero.

## Sections

Hero → About → Flagship Software (AREPAS · H-AdResS GPU · VECI) → Research & Code
→ Publications → Contact.

## Develop

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html                  # entry; sets theme before paint (light default)
src/
  main.jsx                  # React root
  styles/
    styles.css              # token entry (@imports the token files)
    global.css              # document reset + responsive rules
    tokens/                 # colors, typography, spacing, effects, fonts (from the DS)
  components/               # the DS primitives: Button, Tag, SectionHead,
                            #   ProjectCard, PublicationRow, FactTable
  profile/                  # page-specific: Nav, FieldCanvas, FlagshipProjects, Profile
```

The `src/components` and `src/styles/tokens` files are ported verbatim from the
design system so the site and the DS stay in sync. Page assembly lives in
`src/profile/Profile.jsx`.

## Deploy (GitHub Pages)

`vite.config.js` sets `base: "/"` for a user/org page served at the domain root
(e.g. `dvelozad.github.io`). If you publish under a project path
(`user.github.io/<repo>/`), change `base` to `"/<repo>/"`.

A workflow at `../.github/workflows/deploy.yml` builds this site and publishes
`dist/` to GitHub Pages on every push to `main`. Enable Pages → "GitHub Actions"
in the repository settings to use it.

## Fonts

Fonts load from the Google Fonts CDN (Fraunces, Space Grotesk, IBM Plex Mono),
matching the source site. For an offline bundle, drop the `.woff2` files under
`src/styles/` and swap the `@import` in `tokens/fonts.css` for local
`@font-face` rules.
