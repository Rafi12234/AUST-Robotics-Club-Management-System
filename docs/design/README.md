# AUSTRC UI/UX Design Documentation

This directory is the visual and interaction contract for the **AUST Robotics Club Management System (AUSTRC Management System)**.

The goal is to ensure that every developer and AI coding agent builds the system with one consistent visual language, motion language, component language, accessibility standard, and performance standard.

---

## Mandatory reading order for frontend work

Before creating or changing any user-facing UI, read:

1. `AGENTS.md`
2. `docs/design/DESIGN_SYSTEM.md`
3. `docs/design/MOTION_SYSTEM.md`
4. `docs/design/COMPONENT_STANDARDS.md`
5. `src/styles/design-tokens.css`

If the task also touches data, authentication, permissions, or database-backed workflows, additionally read the relevant database documentation required by `AGENTS.md`.

---

## Source-of-truth order

If visual guidance conflicts, use this priority:

1. `docs/design/DESIGN_SYSTEM.md`
2. `src/styles/design-tokens.css`
3. `docs/design/COMPONENT_STANDARDS.md`
4. `docs/design/MOTION_SYSTEM.md`
5. Existing approved shared UI components
6. Existing page implementation
7. Developer preference

Do not invent a new theme for an individual module.

---

## Brand direction

The interface is based on the AUSTRC visual identity:

- deep robotics green: `#006838`
- bright energy green: `#39B54A`
- black / near-black structural tones
- off-white text/surfaces where needed

The desired personality is:

**premium robotics control system + modern university technology organization + clean enterprise dashboard**

The UI should feel futuristic and highly polished, but never noisy, gimmicky, or difficult to use.

---

## Core rule

**Animation is part of the experience, not decoration added everywhere.**

Every animation must improve one or more of:

- hierarchy,
- orientation,
- feedback,
- continuity,
- perceived quality,
- delight.

Performance and accessibility always win over visual spectacle.
