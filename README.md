# Navraj Portfolio

Modern React + TypeScript portfolio built with clean architecture and a themed UI.

## Stack

- React + TypeScript + Vite
- Ant Design for UI primitives
- Framer Motion for transitions and section animations
- Clean architecture layering: `domain`, `application`, `infrastructure`, `presentation`

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Docker

Development:

```bash
docker compose up portfolio-dev
```

Production image (Nginx serving `dist`):

```bash
docker compose up --build portfolio-prod
```

App will be available at `http://localhost:8080`.

## Netlify

- Config is in `netlify.toml`
- Build command: `yarn build`
- Publish directory: `dist`
- SPA redirects are enabled for React Router

## Data source

Portfolio content is currently in:

- `src/infrastructure/data/portfolioData.ts`

This keeps presentation components decoupled from source format and allows later replacement with API/CMS without rewriting UI.
