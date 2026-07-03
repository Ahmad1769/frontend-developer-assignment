# Frontend Developer Test — eSTOKKYAM Product Page

A React + Express property token marketplace with an **Explore page (product cards)**, **Offers table**, and **Product detail page**.

## Quick start (video demo)

**Requirements:** Node.js 18+

```bash
git clone https://github.com/Ahmad1769/frontend-developer-assignment.git
cd frontend-developer-assignment
npm install
npm start
```

Open **http://localhost:3000** — the Explore page loads with product cards.

| URL | Page |
|-----|------|
| http://localhost:3000 | Explore — product cards |
| http://localhost:3000/dashboard | Offers — table view |
| http://localhost:3000/product/371 | Product detail |

**No MongoDB required** — offers work out of the box with built-in demo data. Backend optional for live API.

## Video demo checklist

1. **Explore** (`/`) — 4 property cards, search, responsive grid
2. **Click a card** → product detail (image, stats, description, features, footer contact)
3. **Nav → Offers** → table with Property column, click row to open product
4. **Resize** browser: 375px (mobile), 768px (tablet), 1440px (desktop)

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Frontend (port 3000) + backend (port 5025) |
| `npm run client` | React dev server only |
| `npm run server` | Express API only |
| `npm run build` | Production build |
| `npm test` | Run tests |

**Important:** `@/` path aliases only work via CRACO. Always use `npm start` or `npm run client`. Do **not** run `react-scripts start` directly — it will fail with "Can't resolve '@/...'" errors.

## Troubleshooting

**`Can't resolve '@/components/...'` in the browser overlay**

An old dev server is probably still running without CRACO. Fix:

```bash
# Stop anything on port 3000, then restart
lsof -i :3000 -sTCP:LISTEN   # note the PID
kill <PID>
npm run client               # or npm start for full stack
```

You should see `craco start` in the terminal, not `react-scripts start`.

## Optional setup

Copy env file if you need custom ports:

```bash
cp .env.example .env
```

## Test requirements covered

- **Header** — product name on detail page
- **Product image** — hero image with live offer stats
- **Description** — property overview
- **Key features** — 4 feature items per product
- **Footer** — email, phone, address
- **Responsive** — mobile-first CSS Grid/Flexbox, breakpoints at 768px and 1024px

## Project structure

```
src/
├── features/offers/     All assignment logic (types, hooks, services, components, pages)
├── views/               Thin route wrappers (one-line re-exports)
├── components/          Shared shell (header, layout, SearchText)
└── routes/Router.tsx
```

## Code standards

Conventions follow [Athena](https://github.com) / Truvlet frontend layering (thin views, hooks for logic, services for HTTP).

| Layer | Rule |
|-------|------|
| `views/` | One-line re-export only — e.g. `export { ExplorePage as default } from '@/features/offers'` |
| `pages/` | Compose components + call hooks. No fetch. |
| `components/` | Presentational. Typed props. No API calls. |
| `hooks/` | Data loading and search state |
| `services/` | HTTP only |
| `constants/` | Routes, labels, theme tokens — no magic strings |

**Imports:** use `@/` for cross-folder paths (`@/components/...`, `@/features/offers/...`). Same-folder `./` is fine.

**CSS:** one `.module.css` per component or page. Colors from `MARKETPLACE_THEME` / CSS variables on the page root. Components do not import styles from `pages/`.

## Tech stack

React 18 · TypeScript · Material UI · Express · CSS Modules · CRACO (`@/` path alias)
