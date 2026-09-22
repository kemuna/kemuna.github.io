**English** | [Українська](README.uk.md)

# Kemuna — portfolio

![Kemuna portfolio preview](public/branding/social-preview.png)

Personal portfolio website of Yelyzaveta Danchenko (`kemuna`), a graphic
designer and 2D artist.

[View the live website](https://kemuna.github.io/)

## Features

- English and Ukrainian versions with automatic language selection.
- Light and dark themes with the visitor's preference saved locally.
- Responsive experience and illustration galleries.
- Full-screen image viewer with keyboard, button and swipe navigation.
- Responsive WebP images and lazy loading for gallery content.
- Page transitions, scroll reveals and reduced-motion support.
- Accessible navigation, controls, focus states and image descriptions.
- Custom favicon, social sharing preview and localized 404 pages.

Search indexing is intentionally disabled. The portfolio is intended to be
shared directly, while preview crawlers used by Telegram, LinkedIn and other
messaging platforms remain allowed.

## Technology

- [Astro](https://astro.build/) for static site generation and image
  optimization.
- TypeScript for interactive components.
- Plain CSS for the responsive layout, themes and animations.
- JSON files for English and Ukrainian translations.
- Locally hosted Manrope and Onest fonts.
- GitHub Pages and GitHub Actions for hosting and deployment.

The production build contains static HTML, CSS and JavaScript. It does not
require a server or database.

## Local development

Requirements: Node.js 22 LTS or Node.js 24 LTS. The recommended version is
recorded in `.nvmrc`.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:4321/` by default.

If PowerShell blocks `npm.ps1` on Windows, use `npm.cmd install` and
`npm.cmd run dev` instead.

Useful commands:

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Localization

English and Ukrainian use separate static routes:

- `/en/`
- `/uk/`

Translations are stored in `src/i18n/en.json` and `src/i18n/uk.json`. The root
page redirects to the saved language or, on the first visit, to the language
that best matches the browser preferences.

## Project structure

```text
src/
  assets/           Profile, experience and illustration images
  components/       Pages and shared interactive components
  i18n/             English and Ukrainian translations
  layouts/          Shared document layout and metadata
  pages/            Localized static routes and 404 pages
  utils/            Responsive gallery image helpers
  style.css         Global styles, themes and responsive design
public/
  branding/         Social preview image
  cursors/          Theme-aware custom cursors
  robots.txt        Search and social crawler rules
```

## Deployment

Pushing changes to the `main` branch triggers the GitHub Actions workflow that
builds the Astro project and deploys `dist/` to GitHub Pages. Commits that only
change `README.md` are ignored by the deployment workflow.
