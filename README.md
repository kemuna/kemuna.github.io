# Kemuna portfolio

Personal bilingual portfolio website for 2D artist and graphic designer Kemuna.

## Technology

- [Astro](https://astro.build/) for static page generation.
- TypeScript for small interactive enhancements.
- Plain CSS for the neutral responsive foundation.
- JSON files for interface translations.
- GitHub Pages for hosting.

The production build contains static HTML, CSS and JavaScript only. It does not
require a server or database.

## Development

Requirements: Node.js 22 LTS or Node.js 24 LTS. The recommended version is also
recorded in `.nvmrc`.

```bash
npm install
npm run dev
```

If PowerShell blocks `npm.ps1` on Windows, use `npm.cmd install` and
`npm.cmd run dev` instead.

Create a production build with `npm run build`. The generated website is written
to `dist/`.

## Localization

English and Ukrainian have separate static URLs:

- `/en/`
- `/uk/`

Interface translations are stored in `src/i18n/en.json` and
`src/i18n/uk.json`. The root page selects the saved language or the visitor's
browser language and redirects to the corresponding version.

## Project structure

```text
src/
  components/       Shared page components
  content/projects/ Future Markdown portfolio entries
  i18n/             English and Ukrainian translations
  layouts/          Shared HTML document layout and metadata
  pages/            Static routes for each language
  style.css         Global styles and responsive design
public/             Static files copied without processing
```

## Deployment

GitHub Pages deployment is handled by GitHub Actions after changes are pushed to
the `main` branch. Commits that change only `README.md` do not trigger a build or
deployment.
