# CyberGwen / haslo.ch Frontend

## Project Overview

React 18 + Vite 5 single-page application with Material-UI (MUI 5). Serves two domains from the same codebase:
- **cybergwen.com** — music posts (main content)
- **haslo.ch** — plugins, legal pages (TOS, Privacy, Impressum, Refunds)

`RedirectWrapper` (`src/shared/RedirectWrapper.jsx`) handles domain-based routing automatically.

## Build & Deploy

- **Build**: `npm run build` — runs Vite build then puppeteer pre-render (`scripts/prerender.mjs`)
- **Dev**: `npm start` — Vite dev server
- **Preview**: `npm run preview` — preview production build locally
- **Deploy**: GitHub Actions (`.github/workflows/deploy_with_scp.yml`) triggers on push to `main`
  - Builds with Node 20, SCPs `dist/*` to `sl2201.web.hostpoint.ch` (Hostpoint)
  - SSH user: `bkserfa`, deploy path: `/home/bkserfa/www/haslo.ch`
  - Secret: `SSH_DEPLOY_KEY` in GitHub repo settings

## Key Directories

```
src/
  pages/music/       Music posts — cards grid, SoundCloud iframe
  pages/plugins/     Plugin showcase (Haaschen, Ploink, DeSTRuKTor, etc.)
  pages/content/     Static legal pages (TOS, Privacy, Impressum, Refunds)
  shared/            SearchAppBar, NavButtons, BottomBar, HeroBox, RedirectWrapper
  services/          ApiAdapter (static data loader, formerly Contentful API)
  data/              Static JSON: musicPosts.json, newsPostTypes.json
  assets/            Background images
public/images/       Self-hosted images (thumbnails as webp, channel icons)
archive/images/      Full-size original images (backup, not deployed)
scripts/             Pre-render script (puppeteer)
```

## Data Architecture

Content is served from static JSON files in `src/data/`:
- `musicPosts.json` — 201 music posts (title, description, thumbnailImage, type, etc.)
- `newsPostTypes.json` — 11 channel types for bottom bar (YouTube, SoundCloud, Spotify, etc.)

These were originally fetched from Contentful CMS (GraphQL API). Contentful credentials are preserved as comments in `src/services/ApiAdapter.jsx` for future re-fetches.

Images are self-hosted in `public/images/` (thumbnails as webp, channel icons in original format). Full-size originals are archived in `archive/images/`.

## Content Update Process

To add new content from Contentful:
1. Run the GraphQL API fetch (credentials in `src/services/ApiAdapter.jsx`)
2. Download new images to `public/images/` and `archive/images/`
3. Update URLs in JSON to point to local paths
4. Commit and push to `main` — CI/CD handles the rest

## Pre-rendering

`scripts/prerender.mjs` runs after Vite build. It launches headless Chrome to visit each route and saves the fully-rendered HTML to `dist/`. This makes all content visible to crawlers and LLMs that don't execute JavaScript.

Routes pre-rendered: `/`, `/plugins`, `/tos`, `/impressum`, `/privacy`, `/refunds`

## Analytics

- Google Tag Manager: `GTM-TRDPC5B` (configured in `index.html`)
- GA4 via GTM
- Search event tracking via `window.dataLayer.push()` in `SearchAppBar.jsx`
- Cookie consent integration with `cookieconsent-optin-marketing` / `cookieconsent-optout-marketing` wrapper divs
