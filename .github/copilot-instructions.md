# GitHub Copilot Repository Instructions — AUSTRC

You are working on the AUST Robotics Club Management System.

Before making meaningful changes, read the repository's `AGENTS.md`.

## Mandatory frontend/design reading

Before creating or modifying any user-facing frontend UI, read:

1. `AGENTS.md`
2. `docs/design/DESIGN_SYSTEM.md`
3. `docs/design/MOTION_SYSTEM.md`
4. `docs/design/COMPONENT_STANDARDS.md`
5. `src/styles/design-tokens.css`

Do not invent a separate theme for Event Management or Administration.

The approved visual direction is a premium dark robotics control-system interface using AUSTRC deep green `#006838`, bright green `#39B54A`, near-black structural surfaces, and off-white typography.

The interface should be highly polished, animated, and smooth, but animation must remain purposeful, accessible, responsive, and performant.

## Mandatory database reading

For database-related tasks, follow `AGENTS.md` and read all database documentation specified there before changing or proposing schema work.

Never create a database table automatically because a feature needs storage.

## Code ownership

- root `src/` = common frontend composition
- root `server/` = common backend composition
- `event-management/` = Event business features
- `administration/` = Administration business features
- `shared-features/` = reusable cross-module features

Event and Administration must not directly depend on each other.

## UI implementation rules

- reuse Shared frontend primitives before creating duplicates,
- consume design tokens instead of random hardcoded colors,
- use one icon family,
- preserve keyboard/focus behavior,
- implement loading/empty/error/disabled states,
- test responsive behavior,
- respect `prefers-reduced-motion`,
- prefer transform/opacity animations,
- avoid excessive glow, blur, parallax, and continuous animation,
- do not add heavy animation/WebGL dependencies without clear justification.

When asked to build a page, first identify:
- owning module,
- existing shared components,
- related routes/data,
- relevant design pattern,
- performance/accessibility concerns.

Then implement within the existing architecture.
