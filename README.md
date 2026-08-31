# AUST Robotics Club Management System

> **AUSTRC Management System** — the central web platform for AUST Robotics Club, unifying event operations and club administration in one secure, modular application.

---

## Overview

A single React frontend and a single Express backend, organised into three independently maintainable areas that sit on top of one governed Neon PostgreSQL database.

| Area | Responsibility |
| --- | --- |
| **Event Management** | The complete participant journey — events, segments, dynamic registration, QR services, attendance, results, certificates. |
| **Administration** | Internal club operations — recruitment forms, application review, executive panels, member history, teams, tasks, bulk email. |
| **Shared Features** | Cross-module functionality — authentication, RBAC, database access, files, email, documents, and shared UI primitives. |

Event Management and Administration never depend on each other directly; both build on Shared Features.

---

## Tech stack

**Frontend** — React 19, Vite 8, React Router 6, Tailwind CSS v4, Lucide React
**Backend** — Node.js, Express 4, ES Modules
**Database** — Neon PostgreSQL (via `pg`)

> This project uses **PostgreSQL only**. Do not introduce MySQL syntax.

---

## Getting started

### Prerequisites

- Node.js 20+
- A Neon PostgreSQL connection string

### Installation

```bash
git clone <repository-url>
cd AUST-Robotics-Club-Management-System
npm install
```

### Environment

Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Base URL the frontend calls, e.g. `http://localhost:5000/api` |
| `PORT` | Backend port (default `5000`) |
| `NODE_ENV` | `development` or `production` |
| `CLIENT_URL` | Frontend origin allowed by CORS, e.g. `http://localhost:5173` |
| `DATABASE_URL` | Neon PostgreSQL connection string |

`.env` is gitignored and must never be committed.

### Running

Run the frontend and backend in two terminals:

```bash
npm run dev          # frontend  -> http://localhost:5173
npm run server:dev   # backend   -> http://localhost:5000
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run server` | Start the Express backend |
| `npm run server:dev` | Start the backend with nodemon |

> **Windows note:** if PowerShell blocks `npm` with an execution-policy error, run commands through `cmd /c "npm run dev"` or invoke Node directly.

---

## Project structure

```text
AUST-Robotics-Club-Management-System/
│
├── src/                          # Root frontend: composition only
│   ├── main.jsx                  # Entry point + providers
│   ├── App.jsx
│   ├── routes/AppRoutes.jsx      # Composes module routes
│   ├── layouts/                  # MainLayout (app shell), AuthLayout
│   ├── pages/                    # Landing, Dashboard
│   ├── components/               # Public navbar/footer
│   └── styles/design-tokens.css  # Design tokens (Tailwind @theme)
│
├── server/                       # Root backend: bootstrap only
│   ├── server.js                 # Startup
│   ├── app.js                    # Express app, CORS, JSON, routes
│   ├── routes.js                 # Route aggregation
│   └── config/env.js
│
├── event-management/
│   ├── frontend/                 # pages, components, hooks, routes, services, utils
│   └── backend/                  # controllers, routes, services, repositories, validators, models
│
├── administration/
│   ├── frontend/
│   └── backend/
│
├── shared-features/
│   ├── frontend/                 # components, auth, hooks, services, utils
│   └── backend/                  # auth, middleware, database, email, files, permissions, utils
│
├── database/                     # Schema contract, rules, ownership, migrations
├── docs/design/                  # Design, motion and component standards
└── AGENTS.md                     # Contributor + AI agent contract
```

### Where code belongs

| Type of work | Location |
| --- | --- |
| Event feature | `event-management/frontend` · `event-management/backend` |
| Administration feature | `administration/frontend` · `administration/backend` |
| Reusable across modules | `shared-features/` |
| App-wide composition only | `src/` · `server/` |

---

## Database

One central Neon PostgreSQL database with an approved **56-table** architecture:

| Group | Prefix | Tables |
| --- | --- | --- |
| Shared / Core | `core_*`, `infra_*` | 14 |
| Event Management | `evt_*` | 20 |
| Administration | `adm_*` | 22 |

**Dependency rules**

```text
Allowed:    evt_* → core_*/infra_*      adm_* → core_*/infra_*
Forbidden:  evt_* ↔ adm_*               core_*/infra_* → evt_*/adm_*
```

**Identity model** — these are three distinct concepts and must never be merged:

- `core_users` — a system account
- `core_members` — an official AUSTRC club member
- `evt_participants` — an event participant

### Before any database work

Read, in order:

1. [`database/README.md`](database/README.md)
2. [`database/DATABASE_SCHEMA.md`](database/DATABASE_SCHEMA.md)
3. [`database/DATABASE_RULES.md`](database/DATABASE_RULES.md)
4. [`database/TABLE_OWNERSHIP.md`](database/TABLE_OWNERSHIP.md)
5. [`database/CHANGELOG.md`](database/CHANGELOG.md)
6. [`database/schema/current_schema.sql`](database/schema/current_schema.sql)

> **Never create a table because a feature needs storage.** Search the existing schema first. New or breaking schema changes require a written proposal and human approval, then a migration under `database/migrations/{shared,event,administration}/`.

---

## Design system

The UI follows a single approved visual language — a premium dark robotics control-system interface.

| Token | Value |
| --- | --- |
| Deep AUSTRC Green | `#006838` |
| Bright AUSTRC Green | `#39B54A` |

Design tokens live in [`src/styles/design-tokens.css`](src/styles/design-tokens.css) and are declared inside Tailwind's `@theme`, so each token is both a CSS variable and a generated utility (e.g. `--color-brand-500` → `bg-brand-500`).

Before building UI, read:

1. [`docs/design/DESIGN_SYSTEM.md`](docs/design/DESIGN_SYSTEM.md)
2. [`docs/design/MOTION_SYSTEM.md`](docs/design/MOTION_SYSTEM.md)
3. [`docs/design/COMPONENT_STANDARDS.md`](docs/design/COMPONENT_STANDARDS.md)

Rules of thumb: reuse shared primitives before creating new ones, consume tokens instead of hardcoded colors, use one icon family (Lucide), respect `prefers-reduced-motion`, and implement loading / empty / error states.

---

## Current status

| Area | State |
| --- | --- |
| Project architecture & module boundaries | ✅ Established |
| Database schema (56 tables, Neon) | ✅ Deployed |
| Design system & tokens | ✅ Established |
| Landing, login, dashboard, app shell | ✅ Implemented |
| Event Management features | 🚧 Placeholder — not started |
| Administration features | 🚧 Placeholder — not started |
| Backend authentication & RBAC | ⚠️ **Not implemented** |

> **Security notice:** authentication is currently a **frontend placeholder only** (see `TODO(backend-auth)` in `shared-features/frontend/auth/AuthContext.jsx`). No credentials are verified and no permissions are enforced. Frontend route guards are UX only — real authentication and authorization must be enforced on the backend before any deployment.

### Next steps

1. Implement backend authentication against `core_users` and RBAC via `core_user_roles` → `core_roles` → `core_role_permissions` → `core_permissions`.
2. Add shared `authenticate` / `authorize(permission)` middleware in `shared-features/backend/middleware/`.
3. Capture the existing 56-table schema as baseline migrations under `database/migrations/`.
4. Hand the module areas to the Event and Administration teams.

---

## Security guidelines

- Use parameterized SQL — never concatenate user input into queries.
- Enforce authentication, permissions and resource ownership on the **backend**.
- Never trust a client-supplied role or user ID.
- Never commit `.env`, credentials, tokens or password hashes.
- Normalize account emails consistently (trim → lowercase → validate).
- Preserve history — do not overwrite panel memberships, results, task submissions or status history.

---

## Contributing

1. Read [`AGENTS.md`](AGENTS.md) — the primary contract for contributors and AI agents.
2. Identify the owning module before writing code.
3. Reuse Shared Features instead of duplicating logic.
4. Never introduce an Event ↔ Administration dependency.
5. Run `npm run lint` and `npm run build` before opening a PR.
6. Update database documentation whenever an approved schema change ships.

---

## License

Internal project of AUST Robotics Club. All rights reserved.
