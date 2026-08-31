# INSTALLATION / PLACEMENT GUIDE

Copy the contents of this package into the ROOT of the AUSTRC repository.

Final structure should include:

```text
AUST-Robotics-Club-Management-System/
│
├── AGENTS.md                              # replace existing with provided updated version
│
├── .github/
│   └── copilot-instructions.md
│
├── docs/
│   └── design/
│       ├── README.md
│       ├── DESIGN_SYSTEM.md
│       ├── MOTION_SYSTEM.md
│       └── COMPONENT_STANDARDS.md
│
├── src/
│   └── styles/
│       └── design-tokens.css
│
└── public/
    └── brand/
        └── aust-robotics-club-logo.png
```

Then import the token file once from the root frontend entry or global stylesheet.

Example from `src/main.jsx`:

```js
import './styles/design-tokens.css'
```

If the project already has a global stylesheet, it can import:

```css
@import "./design-tokens.css";
```

Do not copy design tokens into each module.

Event Management and Administration must both consume the same root/shared token system.

## Why no SKILL.md?

A generic `SKILL.md` is not required for this repository design contract.

Use:
- `AGENTS.md` for AI behavior/architecture rules,
- `.github/copilot-instructions.md` for Copilot repository guidance,
- `docs/design/*.md` for detailed design source of truth,
- `src/styles/design-tokens.css` for executable visual tokens.

This is clearer and easier for every team member and AI agent to follow.
