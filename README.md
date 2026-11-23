# Shelton Maurício — Portfolio

## Project Overview

A personal portfolio for Shelton Maurício, a Software Developer and fourth-year Computer Engineering student at Universidade Eduardo Mondlane (UEM). It presents selected projects, technical interests, education, and ways to get in touch.

## Features

- English and Portuguese portfolio pages.
- Responsive navigation and homepage sections.
- Horizontal selected-project carousel with repository and live-demo actions where destinations are available.
- About, technical expertise, education, certifications, and language information.
- Contact links for email, LinkedIn, and WhatsApp.
- Dark-first design tokens, keyboard focus styles, and reduced-motion support.
- Static export for GitHub Pages.

## Tech Stack

- Next.js 16 (App Router and static export)
- React 19
- TypeScript
- Tailwind CSS 4 with CSS-first theme tokens
- ESLint 9 with `eslint-config-next`
- PostCSS with `@tailwindcss/postcss`
- GitHub Actions and GitHub Pages for deployment

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── cv.pdf
│   └── index.html
├── src/
│   ├── app/
│   │   ├── [lang]/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── dictionaries/
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── get-dictionary.ts
│   └── lib/
│       └── contact-links.ts
├── next.config.ts
├── package.json
└── postcss.config.mjs
```

## Getting Started

The deployment workflow uses Node.js 22. Use Node.js 22 and npm for local development.

```bash
git clone https://github.com/sheltonmauricio/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route selects `/pt` or `/en` based on the browser language; both localized routes can also be opened directly.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Builds the site and creates the static export in `out/`. |
| `npm run start` | Runs the `next start` command defined in `package.json`. The GitHub Pages deployment serves the static export instead. |
| `npm run lint` | Runs ESLint across the repository. |

## Internationalization

The localized pages are `/en` and `/pt`, generated from the `[lang]` route. Page content and metadata are stored in `src/dictionaries/en.json` and `src/dictionaries/pt.json`; `src/dictionaries/get-dictionary.ts` loads the selected dictionary on the server. The navigation includes a language switcher for these routes.

## Deployment

GitHub Pages deployment is configured through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow runs on pushes to `main` and supports manual dispatch. It installs dependencies with `npm ci`, runs the production build, checks the `out/` export, uploads the artifact, and deploys it to Pages.

`next.config.ts` sets `output: 'export'` and disables image optimization for static hosting. In production, it configures `/portfolio` as the base path and asset prefix used by this repository's GitHub Pages deployment.

## Architecture and Design

The localized App Router page composes small presentation components and supplies content from the server-loaded dictionaries. Interactive behavior is kept in focused client components, including the language switcher, mobile navigation, and carousel controls.

Global design tokens and component styles live in `src/app/globals.css` and use Tailwind CSS 4's CSS-first configuration. Shared content wrappers, responsive grids, compact surfaces, semantic markup, visible focus styles, and reduced-motion handling support the desktop and mobile layouts.

## Author

**Shelton Maurício** — Software Developer and Computer Engineering student at Universidade Eduardo Mondlane (UEM).

- [GitHub](https://github.com/sheltonmauricio)
- [LinkedIn](https://www.linkedin.com/in/sheltonmauricio)
- [Email](mailto:shelton.mauricio.m@gmail.com)
- [WhatsApp](https://wa.me/258872435087) — +258 872 435 087