# AGENTS.md

# AUSTRC Management System — AI Coding Agent Instructions

This file is the primary instruction contract for AI coding agents, Copilot, contributors, and developers working in this repository.

The project is the **AUST Robotics Club Management System (AUSTRC Management System)**.

It is a modular web application with:

- one React/Vite frontend application,
- one Node.js/Express backend application,
- one central Neon PostgreSQL database,
- separate Event Management and Administration modules,
- shared functionality used by both modules.

The architecture has already been intentionally designed so multiple development teams can work in parallel without frequently breaking each other's code or database schema.

**Do not redesign the project from scratch. Work inside the existing architecture.**

---

# 1. Mandatory Reading Before Any Work

Before implementing, modifying, deleting, moving, or generating code, inspect the existing repository.

For **every meaningful feature task**, first understand:

- the existing files,
- the owning module,
- the related shared functionality,
- the existing routes/services,
- the database tables already designed for the feature.

## Before ANY database-related task, you MUST read:

1. `database/README.md`
2. `database/DATABASE_SCHEMA.md`
3. `database/DATABASE_RULES.md`
4. `database/TABLE_OWNERSHIP.md`
5. `database/CHANGELOG.md`
6. `database/schema/current_schema.sql`

Do not make database assumptions from memory.

`database/DATABASE_SCHEMA.md` is the human/AI-readable table catalog.

`database/schema/current_schema.sql` is the current PostgreSQL schema snapshot.

`database/DATABASE_RULES.md` defines mandatory schema-change rules.

`database/TABLE_OWNERSHIP.md` defines which team owns each table.

`database/CHANGELOG.md` records approved database evolution.

If your preferred implementation conflicts with these files, **follow the approved project/database architecture instead of inventing your own structure**.

For frontend/UI tasks, the design documents under `docs/design/` and `src/styles/design-tokens.css` are also mandatory source material. Do not begin a visual implementation until they have been read.


---


# UI/UX Design Contract — Mandatory for Frontend Work

The repository contains a dedicated design contract.

Before creating, redesigning, or modifying any user-facing frontend interface, read:

1. `docs/design/README.md`
2. `docs/design/DESIGN_SYSTEM.md`
3. `docs/design/MOTION_SYSTEM.md`
4. `docs/design/COMPONENT_STANDARDS.md`
5. `src/styles/design-tokens.css`

These files define the approved:

- AUSTRC visual identity,
- color system,
- typography,
- spacing,
- radii,
- surfaces,
- dashboard language,
- form/table patterns,
- motion durations/easing,
- page transitions,
- accessibility rules,
- animation performance rules,
- shared component standards.

The approved primary brand colors are:

```text
Deep AUSTRC Green   #006838
Bright AUSTRC Green #39B54A
```

The product should feel like a **premium modern robotics control system**, not a generic admin template, gaming UI, or excessive cyberpunk/neon concept.

Event Management and Administration must use the same design system.

Do not invent module-specific color themes.

Do not hardcode arbitrary UI colors when a shared design token exists.

Do not create a new shared UI primitive before checking `shared-features/frontend/`.

Animation must be purposeful, smooth, optimized, responsive, and must respect `prefers-reduced-motion`.

Do not introduce heavy animation/WebGL libraries without clear need and approval.


# 2. Technology Stack

## Frontend

- React
- Vite
- JavaScript
- React Router

## Backend

- Node.js
- Express.js
- JavaScript ES Modules

## Database

- Neon PostgreSQL
- PostgreSQL driver: `pg`
- Connection through environment variable `DATABASE_URL`

## Important

This project uses **PostgreSQL**, not MySQL.

Do not generate MySQL-specific database syntax.

---

# 3. High-Level Project Architecture

The project contains three logical application areas:

1. **Event Management**
2. **Administration**
3. **Shared Features**

There is one common frontend bootstrap and one common backend bootstrap.

Conceptually:

```text
AUST-Robotics-Club-Management-System/
│
├── src/                         # root/common frontend composition
├── server/                      # root/common backend composition
│
├── event-management/
│   ├── frontend/
│   └── backend/
│
├── administration/
│   ├── frontend/
│   └── backend/
│
├── shared-features/
│   ├── frontend/
│   └── backend/
│
├── database/
│
├── AGENTS.md
├── README.md
├── package.json
└── .env.example
```

The separation is intentional.

Do not collapse the modules into one large `src/features` folder unless explicitly approved by the maintainers.

Do not split the project into multiple independently running React or Express applications unless explicitly requested.

---

# 4. Root/Common Frontend Responsibility

The root frontend is under:

```text
src/
```

Root frontend files should contain only application-wide composition such as:

- `main.jsx`
- `App.jsx`
- application route composition,
- global layouts,
- application configuration,
- global styles,
- root providers where appropriate.

Root frontend code may import Event, Administration, and Shared frontend modules.

It should **not** become the normal location for module-specific business logic.

## Correct direction

```text
src/
 ├── imports Event Management frontend
 ├── imports Administration frontend
 └── imports Shared frontend
```

## Wrong direction

Do not move Event pages into root `src/` merely because importing them is easier.

Do not move Administration pages into root `src/`.

---

# 5. Root/Common Backend Responsibility

The root backend is under:

```text
server/
```

Root backend files should contain application-wide composition such as:

- Express application bootstrap,
- server startup,
- global middleware,
- CORS,
- JSON parsing,
- global error handling,
- global route aggregation,
- environment configuration.

Root backend should mount/import module routes.

Example conceptual direction:

```text
server/app.js
     |
     +--> Event Management routes
     +--> Administration routes
     +--> Shared/auth routes
```

Do not place normal Event controllers/services/repositories in `server/`.

Do not place normal Administration controllers/services/repositories in `server/`.

---

# 6. Event Management Module Ownership

Event Management code belongs under:

```text
event-management/
├── frontend/
└── backend/
```

Typical frontend structure:

```text
event-management/frontend/
├── pages/
├── components/
├── hooks/
├── routes/
├── services/
└── utils/
```

Typical backend structure:

```text
event-management/backend/
├── controllers/
├── routes/
├── services/
├── repositories/
├── validators/
└── models/
```

Event-specific business code belongs here.

Event database schema belongs to tables beginning with:

```text
evt_*
```

Future Event schema migrations belong under:

```text
database/migrations/event/
```

The Administration team/module must not directly modify Event-owned schemas or business code.

---

# 7. Administration Module Ownership

Administration code belongs under:

```text
administration/
├── frontend/
└── backend/
```

Typical frontend structure:

```text
administration/frontend/
├── pages/
├── components/
├── hooks/
├── routes/
├── services/
└── utils/
```

Typical backend structure:

```text
administration/backend/
├── controllers/
├── routes/
├── services/
├── repositories/
├── validators/
└── models/
```

Administration database schema belongs to tables beginning with:

```text
adm_*
```

Future Administration schema migrations belong under:

```text
database/migrations/administration/
```

The Event team/module must not directly modify Administration-owned schemas or business code.

---

# 8. Shared Features Ownership

Reusable functionality required by multiple modules belongs under:

```text
shared-features/
├── frontend/
└── backend/
```

## Shared frontend examples

Shared frontend may contain:

- login/authentication UI,
- authentication context/provider,
- protected route helpers,
- permission-aware UI helpers,
- common buttons,
- modals,
- tables,
- loaders,
- toast/notification components,
- common API client,
- common hooks,
- common formatters and utilities.

## Shared backend examples

Shared backend may contain:

- authentication,
- database connection,
- RBAC/permission middleware,
- common validation,
- file handling,
- email delivery,
- document generation,
- audit logging,
- common error handling,
- reusable utilities.

## Dependency rule

Allowed:

```text
Event Management -> Shared Features
Administration   -> Shared Features
Root             -> Shared Features
```

Avoid:

```text
Shared Features -> Event Management
Shared Features -> Administration
```

Shared Features must remain module-neutral.

---

# 9. Cross-Module Code Dependency Rule

Event Management and Administration must remain independently maintainable.

## Forbidden by default

```text
Event frontend -> Administration frontend
Administration frontend -> Event frontend

Event backend -> Administration backend
Administration backend -> Event backend
```

If both modules need the same logic, first evaluate whether the logic belongs in Shared Features.

Do not solve cross-module requirements by creating hidden circular dependencies.

---

# 10. Database Architecture — Critical

The Neon PostgreSQL database contains an approved modular architecture with:

```text
56 total tables

14 Shared/Core tables
20 Event Management tables
22 Administration tables
```

Table prefixes define ownership.

## Shared/Core

```text
core_*
infra_*
```

## Event Management

```text
evt_*
```

## Administration

```text
adm_*
```

---

# 11. Database Dependency Rules

Allowed:

```text
evt_* -> evt_*
evt_* -> core_*
evt_* -> infra_*

adm_* -> adm_*
adm_* -> core_*
adm_* -> infra_*
```

Forbidden:

```text
evt_* -> adm_*

adm_* -> evt_*

core_* -> evt_*
core_* -> adm_*

infra_* -> evt_*
infra_* -> adm_*
```

These boundaries are intentional.

They allow two development teams to work in parallel with minimal schema coupling.

Do not introduce a direct Event ↔ Administration foreign key to solve an application problem.

If both modules require a common identity or infrastructure concept, use the approved Shared/Core model or propose a reviewed Shared/Core change.

---

# 12. Database Identity Model — Do Not Confuse These

The following are intentionally different concepts.

## `core_users`

Represents a **system identity/account**.

A user may be:

- system administrator,
- club executive,
- official club member,
- event staff,
- event participant with an account,
- applicant with an account,
- another authorized system user.

Being in `core_users` does **not** mean the person is automatically an official AUSTRC club member.

## `core_members`

Represents an **official AUSTRC club member**.

Club member history and Executive Panel membership depend on this concept.

## `evt_participants`

Represents a person participating in Event Management.

A participant may or may not be:

- a `core_user`,
- an AUSTRC `core_member`.

Never merge these identities simply to reduce joins.

Never create duplicate tables such as:

```text
admin_users
event_users
users_new
club_users
members_new
participant_users
```

unless a formal architecture redesign is approved.

---

# 13. Database Change Rule — Never Invent a Table Automatically

A requested feature does **not** automatically justify a new database table.

Before proposing any database change:

1. Read all mandatory database documentation.
2. Search `DATABASE_SCHEMA.md`.
3. Inspect `current_schema.sql`.
4. Identify existing tables related to the feature.
5. Understand their foreign keys.
6. Understand their unique constraints.
7. Check table ownership.
8. Check existing history/configuration tables.
9. Determine whether the requested feature can use the existing schema.

If the existing schema supports the feature:

**Use it.**

Do not create an alternative table simply because it seems easier.

---

# 14. AI Stop Condition for New/Breaking Schema Changes

If you believe:

- a new table is necessary,
- a column must be removed,
- a column/table must be renamed,
- a foreign-key relationship must change,
- ownership must change,
- a Shared/Core table must change,
- a breaking constraint must change,

**STOP before implementing the schema change.**

Provide this proposal first:

```text
SCHEMA CHANGE PROPOSAL

Feature:
Owning module:

Existing tables reviewed:
Existing columns reviewed:
Existing relationships reviewed:

Why the existing schema is insufficient:

Proposed schema change:

Tables affected:
New columns/tables:
Foreign keys:
Indexes:
Unique constraints:
Delete behavior:

Cross-module impact:
Shared/Core impact:

Backward compatibility:
Data migration/backfill:
Deployment order:

Migration required:
Human approval required: YES
```

Wait for approval before generating or applying the breaking/new schema change.

---

# 15. Database Migration Rules

Every permanent schema change must be represented by a migration.

Migration folders:

```text
database/migrations/shared/
database/migrations/event/
database/migrations/administration/
```

Use the folder matching the owner of the schema being changed.

## Do not

- manually change production Neon schema as the normal workflow,
- edit an already-applied migration,
- overwrite migration history,
- make an undocumented `ALTER TABLE`,
- change `current_schema.sql` while forgetting the migration history.

## Recommended migration naming

```text
YYYYMMDDHHMMSS_<module>_<description>.sql
```

Examples:

```text
20260901103000_evt_add_team_size_to_events.sql
20260901114500_adm_add_task_category.sql
20260901130000_shared_add_user_locale.sql
```

---

# 16. PostgreSQL-Only Database Rules

The project uses Neon PostgreSQL.

Do not generate MySQL-only syntax such as:

```sql
AUTO_INCREMENT
LONGTEXT
ON UPDATE CURRENT_TIMESTAMP
UNIQUE KEY name (...)
KEY idx_name (...)
```

Use PostgreSQL conventions from the approved schema.

Examples include:

```sql
BIGINT GENERATED BY DEFAULT AS IDENTITY
TEXT
JSONB
TIMESTAMPTZ
CONSTRAINT ... UNIQUE (...)
CREATE INDEX ...
```

The current schema already contains the approved PostgreSQL `updated_at` trigger strategy.

Do not create a second competing timestamp-update mechanism without review.

---

# 17. Event Management — Functional Scope

The Event Management module manages the complete participant journey.

Before implementing Event features, inspect relevant `evt_*` tables in `DATABASE_SCHEMA.md`.

Core Event feature areas include:

## Event setup

- create/edit events,
- event dates,
- venue,
- registration window,
- event status,
- event configuration.

Related concept:

```text
evt_events
```

## Event segments

An event may contain multiple competition categories/segments.

Related concepts:

```text
evt_event_segments
evt_registration_segments
```

## Dynamic registration forms

Administrators must be able to configure event registration fields without physical database schema changes.

Related concepts:

```text
evt_registration_fields
evt_registration_field_options
evt_registration_answers
```

Do not add one database column for every new registration question.

## Participants and registrations

Related concepts:

```text
evt_participants
evt_registrations
evt_registration_segments
```

## Participant portal

The participant portal is primarily an application/query feature.

It may show:

- registered event,
- segments,
- registration/participation status,
- QR,
- attendance,
- result,
- rank/position,
- certificate availability.

Do not create `participant_portal` as a database table just because a portal page exists.

## QR system

One participant registration uses a unique QR identity.

The same QR can support authorized services such as:

- attendance,
- food,
- goodies,
- event kit,
- T-shirt collection,
- other configured event services.

Related concepts:

```text
evt_qr_codes
evt_service_types
evt_event_services
evt_service_usage
```

Duplicate-use protection must be enforced in backend/database logic, not only in UI.

## Event sessions and attendance

Related concepts:

```text
evt_event_sessions
evt_attendance
```

## Event staff

Related concept:

```text
evt_event_staff
```

Use central roles/RBAC instead of Event-specific duplicate role definitions.

## Results

Related concepts:

```text
evt_results
evt_result_revisions
```

Results may include:

- score,
- marks,
- time,
- textual result,
- position/rank.

Do not silently overwrite important result history.

## Certificates

Eligibility:

```text
evt_certificate_eligibility
```

Certificate business record:

```text
evt_certificates
```

Shared generation infrastructure:

```text
infra_document_templates
infra_generated_documents
infra_files
```

## Event notifications/email

Business trigger:

```text
evt_notification_events
```

Shared delivery:

```text
infra_email_templates
infra_email_messages
infra_email_delivery_attempts
```

---

# 18. Administration — Functional Scope

The Administration module manages club administration and internal workflows.

Before implementing Administration features, inspect relevant `adm_*` tables in `DATABASE_SCHEMA.md`.

## Dynamic form management

Initial use cases include:

- General Member Recruitment,
- Workshop,
- Bootcamp,
- Sub-Executive Recruitment,
- future custom forms.

Related concepts:

```text
adm_forms
adm_form_fields
adm_form_field_options
```

Forms should be dynamic.

Do not add a physical submission column every time administrators add a question.

## Form submissions and answers

Related concepts:

```text
adm_form_submissions
adm_form_answers
adm_form_answer_options
```

## Application review

Related concepts:

```text
adm_application_reviews
adm_application_status_history
```

Preserve review/status history.

## Executive Panel terms

Related concept:

```text
adm_panel_terms
```

Each panel term must remain historically separate.

## Positions

Related concept:

```text
adm_positions
```

Position hierarchy and task-assignment authority may depend on the approved position model.

## Teams

Related concept:

```text
adm_teams
```

Do not store a permanent current team directly on `core_members` as the historical truth.

## Panel membership history

Related concept:

```text
adm_panel_memberships
```

This connects:

```text
member + panel term + position + team
```

Historical panel memberships must not be overwritten.

## Executive certificates

Related concept:

```text
adm_member_certificates
```

Shared generation infrastructure:

```text
infra_document_templates
infra_generated_documents
infra_files
```

## Bulk email

Related concepts:

```text
adm_email_campaigns
adm_email_campaign_recipients
```

Shared delivery:

```text
infra_email_templates
infra_email_messages
infra_email_delivery_attempts
```

## Task management

Main task:

```text
adm_tasks
```

Multiple assignees:

```text
adm_task_assignees
```

Status history:

```text
adm_task_status_history
```

Submission versions:

```text
adm_task_submissions
```

Files:

```text
adm_task_submission_files
```

Review:

```text
adm_task_submission_reviews
```

Collaboration:

```text
adm_task_comments
```

Do not overwrite previous task submission versions when revision is requested.

---

# 19. Shared File Infrastructure

Use:

```text
infra_files
```

for common file metadata.

Examples include:

- profile photos,
- registration uploads,
- application uploads,
- task submission attachments,
- certificate template files,
- generated certificate files.

Do not create separate file metadata systems for Event and Administration just because both modules upload files.

---

# 20. Shared Email Infrastructure

Use:

```text
infra_email_templates
infra_email_messages
infra_email_delivery_attempts
```

for shared email infrastructure.

Module-specific logic should create business triggers/campaigns while the Shared layer handles delivery.

Do not implement separate email-sending infrastructures in Event and Administration.

---

# 21. Shared Document Infrastructure

Use:

```text
infra_document_templates
infra_generated_documents
infra_files
```

for document generation/storage.

Event participant certificates and Administration Executive certificates remain separate business records but reuse the same generation infrastructure.

---

# 22. Audit and History Preservation

Historical integrity is important.

Do not casually delete or overwrite:

- Executive Panel history,
- position history,
- team history,
- application status history,
- result revision history,
- task status history,
- task submission versions,
- task submission reviews,
- certificate history,
- email delivery attempts,
- audit logs.

Use the approved lifecycle/status/history structures.

Use:

```text
infra_audit_logs
```

for system-wide audit events where appropriate.

---

# 23. Authentication and Authorization

The system requires real backend-enforced authentication and RBAC.

The current scaffold may contain placeholder frontend authentication.

Do not assume placeholder authentication is production security.

Conceptual final authentication flow:

```text
Login
  |
  v
Backend authentication
  |
  v
core_users
  |
  v
password verification
  |
  v
core_user_roles
  |
  v
core_roles
  |
  v
core_role_permissions
  |
  v
core_permissions
```

Frontend route guards improve UX.

They are **not** the security boundary.

Backend endpoints must enforce:

- authentication,
- role/permission,
- ownership,
- resource access,
- validation.

Never trust a user-supplied role or user ID without verifying the authenticated identity and permissions.

---

# 24. Database Queries and Security

Use parameterized PostgreSQL queries.

Do not concatenate untrusted values into raw SQL strings.

Bad:

```js
`SELECT * FROM core_users WHERE email = '${email}'`
```

Good:

```js
pool.query(
  'SELECT * FROM core_users WHERE email = $1',
  [email]
)
```

Do not expose:

- `DATABASE_URL`,
- database passwords,
- password hashes,
- session/token secrets,
- internal credentials.

Never commit `.env`.

Use `.env.example` for documentation.

---

# 25. Email Normalization

Account email handling should be consistent.

Before storing or matching login emails, use an approved normalization approach such as:

```text
trim
lowercase
validate
```

Do not let different routes apply different normalization behavior.

---

# 26. API Client and File Uploads

Shared frontend API logic should live in Shared Features.

Normal JSON requests may use `application/json`.

File uploads must support `FormData`.

When sending `FormData`, do not manually force:

```text
Content-Type: application/json
```

and do not manually set the multipart boundary.

Let the browser/client create the multipart content type correctly.

---

# 27. Neon Database Connection

There is one central Neon PostgreSQL database.

The common DB connection belongs in:

```text
shared-features/backend/database/
```

Event and Administration backend modules should reuse the shared DB layer.

Do not create independent competing DB connection files in both modules unless explicitly approved.

Environment configuration should be centralized and validated.

The backend should fail clearly if required database configuration is missing.

---

# 28. Health Checks

A basic Express health endpoint only proves the HTTP server is running.

When implementing database health checks, actually query PostgreSQL, for example with:

```sql
SELECT 1;
```

Keep server health and database connectivity conceptually distinct if useful.

---

# 29. Repository Hygiene

Do not commit:

```text
.env
node_modules/
dist/
coverage/
log files
```

Do not share project ZIPs containing `.env` or secrets.

Do not share `node_modules`; developers should install dependencies from:

```text
package.json
package-lock.json
```

Prefer reproducible installation such as:

```bash
npm ci
```

where appropriate.

---

# 30. Feature Implementation Workflow

When the user requests a new feature, do **not** immediately start creating files.

First perform this analysis:

## Step 1 — Identify ownership

Is the feature:

- Event Management?
- Administration?
- Shared?
- Root/common composition?

## Step 2 — Inspect current code

Find existing:

- pages,
- components,
- routes,
- controllers,
- services,
- repositories,
- validators,
- shared helpers.

Do not duplicate existing code.

## Step 3 — Inspect database

If data is involved:

- read the database docs,
- identify existing tables,
- identify relationships,
- identify constraints,
- identify the owning module.

## Step 4 — Determine schema impact

Ask internally:

```text
Can this be implemented with existing schema?
```

If yes:

Use existing schema.

If no:

Follow the schema-change proposal process.

## Step 5 — Plan files

Briefly identify which files should be created/modified.

Do not touch unrelated modules.

## Step 6 — Implement

Keep changes focused.

## Step 7 — Validate

Run relevant:

- lint,
- build,
- tests,
- route checks,
- database checks,
- migration checks.

Do not claim success without validation where validation is possible.

---

# 31. Rules for Editing Existing Code

Before modifying an existing file:

1. Read the file.
2. Check where it is imported/used.
3. Check whether another module depends on it.
4. Preserve existing interfaces unless intentionally changing them.
5. Avoid unrelated refactoring.
6. Do not rename/move shared files casually.
7. Do not delete placeholder files that another route currently imports without updating references.

---

# 32. Rules for Creating Shared Code

Do not put code in Shared Features merely because it *might* be reused later.

Move/create something in Shared Features when it is genuinely cross-module.

Examples that usually belong in Shared:

- authentication,
- permissions,
- database connection,
- email sending,
- file storage,
- document generation,
- generic UI primitives,
- common API client.

Examples that usually do not belong in Shared:

- Event result calculation,
- Event registration rules,
- Administration application selection logic,
- panel membership rules,
- task review business logic.

---

# 33. Avoid Premature Abstraction

Prefer:

- clear module ownership,
- small focused services,
- explicit data flow,
- existing database contracts.

Do not build a large generic abstraction simply to reduce a few repeated lines when the business concepts are intentionally different.

Example:

Event registration forms and Administration forms are both dynamic but are intentionally module-owned systems.

Do not automatically merge their database/business logic into one universal generic form engine without architecture approval.

---

# 34. API Design Expectations

Keep routes module-specific.

Suggested conceptual prefixes:

```text
/api/auth/...                 # Shared/auth
/api/events/...               # Event Management
/api/administration/...       # Administration
```

The exact route names should follow existing code if already established.

Keep:

- request validation,
- authorization,
- controller logic,
- business/service logic,
- repository/database logic

separated when practical.

Avoid putting complex SQL directly inside route definitions.

---

# 35. Backend Layer Responsibilities

A useful default separation is:

## Route

- endpoint path,
- middleware chain,
- controller call.

## Validator

- input format/business input validation.

## Controller

- HTTP request/response handling.

## Service

- business rules/workflow.

## Repository

- PostgreSQL queries/data access.

Do not force this pattern for trivial one-line cases, but avoid mixing everything into giant route/controller files.

---

# 36. Frontend Responsibilities

Prefer module-local frontend organization.

## Pages

Route-level screens.

## Components

Reusable pieces within the owning module.

## Services

API communication specific to that module.

## Hooks

Reusable frontend state/data behavior.

## Utils

Small pure helpers.

Reusable cross-module primitives belong in Shared frontend.

---

# 37. Status/Workflow Values

Do not invent inconsistent status spellings.

Use the values expected by the approved database/business workflow.

Example task statuses:

```text
TODO
IN_PROGRESS
BLOCKED
DONE
```

Do not introduce variants such as:

```text
IN PROGRESS
in-progress
completed
FINISHED
```

for the same workflow without an approved change.

Centralize application constants/enums where practical.

---

# 38. JSONB Usage

The database contains JSONB columns for flexible configuration/metadata.

Use JSONB for intended flexible data such as:

- validation rules,
- configuration,
- result configuration,
- metadata,
- audit snapshots.

Do not hide normal relational entities in JSONB merely to avoid creating proper relationships.

Do not create a new table merely because JSONB exists either.

Follow the existing schema intent.

---

# 39. Historical Snapshot Fields

Snapshot fields are deliberate.

They preserve historical values when current user/event/form/panel data later changes.

Do not remove or ignore snapshot columns simply because the same value can be joined from a current table.

Historical correctness is more important than avoiding all duplicate text.

---

# 40. No Silent Database Redesign

Never silently:

- merge tables,
- split tables,
- rename tables,
- rename columns,
- change key types,
- change FK ownership,
- remove constraints,
- change NULL behavior,
- move concepts between Shared/Event/Admin.

If architecture redesign is genuinely required, explain it explicitly and wait for approval.

---

# 41. Documentation Synchronization

When an approved schema change is implemented, update the appropriate documentation.

Depending on the change, update:

```text
database/DATABASE_SCHEMA.md
database/DATABASE_RULES.md
database/TABLE_OWNERSHIP.md
database/CHANGELOG.md
database/schema/current_schema.sql
database/erd/
```

Do not leave AI/developer documentation describing an old schema.

---

# 42. Current Database Baseline

The approved current logical database baseline is:

```text
Neon PostgreSQL
56 tables

Shared/Core        14
Event Management   20
Administration     22
```

A table-count change is a schema architecture change and must be documented.

Do not casually create the 57th table.

---

# 43. Pull Request / Change Review Checklist

For any meaningful code/database change, verify:

```text
[ ] Correct module selected
[ ] Existing related code inspected
[ ] Shared functionality reused where appropriate
[ ] No Event <-> Administration dependency added
[ ] Database docs read if data/schema involved
[ ] Existing database tables reused where possible
[ ] No duplicate user/member/file/email/document system added
[ ] PostgreSQL syntax only
[ ] Parameterized SQL used
[ ] Authentication/authorization enforced in backend where required
[ ] History/snapshots preserved
[ ] Migration added if schema changed
[ ] Documentation updated if schema changed
[ ] No secrets committed
[ ] Lint/build/tests/checks run where relevant
```

---

# 44. Response Behavior for AI Agents

When given an implementation task:

1. Inspect relevant repository files first.
2. State the owning module briefly.
3. State which existing database tables will be used if data is involved.
4. State whether a schema change is required.
5. Reuse existing code before creating duplicates.
6. Make focused changes.
7. Validate the result.
8. Report what changed and any remaining limitations.

Do not repeatedly ask the user questions that can be answered by reading the repository.

Do not claim a database table/feature is missing until you have checked the database documentation.

---

# 45. Highest-Priority Rules

If you remember only a few things, remember these:

## Rule A

**Read the database documentation before database work.**

## Rule B

**Do not create a new table until all existing tables have been checked.**

## Rule C

**Event and Administration must not directly depend on each other.**

## Rule D

**Both modules may reuse Shared Features.**

## Rule E

**`core_users`, `core_members`, and `evt_participants` are different identities.**

## Rule F

**Use Neon PostgreSQL syntax only.**

## Rule G

**All permanent schema changes require migrations and documentation updates.**

## Rule H

**Backend authorization is mandatory; frontend route protection is not sufficient security.**

## Rule I

**Preserve history and snapshot data.**

## Rule J

**Work within the existing project architecture instead of rebuilding it.**

---

# 46. Final Instruction

This repository already has a carefully designed modular architecture and database contract.

Your role as an AI coding agent is to:

- understand the existing system,
- preserve module boundaries,
- reuse the approved 56-table database,
- reuse Shared Features,
- implement requested functionality in the correct location,
- protect security and historical data,
- avoid unnecessary schema changes,
- keep documentation and code consistent.

**Build on the approved architecture. Do not continuously redesign it.**
