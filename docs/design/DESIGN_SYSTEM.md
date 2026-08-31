# AUSTRC Design System

# 1. Purpose

This is the master visual design contract for the AUSTRC Management System.

All Event Management, Administration, Shared Features, root layouts, authentication screens, dashboards, portals, scanners, forms, tables, certificates, and workflow interfaces must feel like parts of one product.

Do not create separate visual themes for Event Management and Administration.

They may have different page layouts because their workflows are different, but they must use the same brand system, component language, typography, spacing, radii, motion principles, and interaction patterns.

---

# 2. Design Vision

The product should feel like a **high-end robotics operations platform**.

Keywords:

- futuristic
- engineered
- precise
- premium
- responsive
- clean
- energetic
- intelligent
- confident
- modern
- professional

Avoid making it look like:

- a gaming website,
- a cyberpunk poster,
- a neon nightclub,
- a generic Bootstrap admin panel,
- an overly glassmorphic concept UI,
- a student project with inconsistent cards,
- a page where everything glows,
- a page where every section animates differently.

The target feeling is:

```text
Robotics Lab
+
Enterprise Control Center
+
Modern SaaS
+
AUSTRC Brand Energy
```

---

# 3. Brand Palette

The primary colors are derived from the AUSTRC logo.

## Core brand colors

```text
AUSTRC Deep Green
#006838

AUSTRC Bright Green
#39B54A

Structural Black
#050806

Off White
#F1F2F2
```

## Recommended extended palette

```text
--brand-green-950: #002A17
--brand-green-900: #003B20
--brand-green-800: #00522C
--brand-green-700: #006838
--brand-green-600: #16853D
--brand-green-500: #39B54A
--brand-green-400: #58CF69
--brand-green-300: #7CE288

--bg-canvas:       #050806
--bg-deep:         #070B08
--surface-1:       #0B100D
--surface-2:       #101713
--surface-3:       #16201A
--surface-hover:   #1B271F

--text-primary:    #F1F2F2
--text-secondary:  #B8C3BC
--text-tertiary:   #7F9086
--text-disabled:   #5E6B63

--border-subtle:   rgba(120, 255, 150, 0.10)
--border-default:  rgba(120, 255, 150, 0.16)
--border-strong:   rgba(120, 255, 150, 0.28)

--success:         #39B54A
--warning:         #F5B942
--danger:          #FF5D5D
--info:            #56A8FF
```

---

# 4. Color Usage Rules

The UI is primarily dark.

Recommended visual ratio:

```text
80% neutral dark structure
15% neutral light/text/content
5% brand green emphasis
```

Do not fill every card with green.

Use green intentionally for:

- active navigation,
- primary actions,
- progress,
- selected states,
- focus accents,
- important positive data,
- subtle section identity,
- loading/progress energy.

Use red only for danger/destructive/error states.

Do not use brand green for errors.

Do not use bright green as long body text.

Do not place low-contrast green text over black for critical information without verifying contrast.

---

# 5. Theme Philosophy

Default product theme:

**Dark premium control-room theme**

The interface may use lighter surfaces for special contexts such as:

- printable views,
- certificate previews,
- public registration forms when readability benefits,
- document-style sections.

However, the application shell should remain visually consistent.

---

# 6. Background Language

Use layered depth rather than flat black.

A premium page may combine:

1. near-black base,
2. subtle radial green glow,
3. extremely faint grid/circuit texture,
4. elevated surfaces,
5. sparse moving ambient highlights.

Example concept:

```text
Canvas
  ↓
Dark radial gradient
  ↓
Faint engineered grid
  ↓
Content surfaces
  ↓
Green active accents
```

Rules:

- background patterns must stay subtle,
- they must never compete with text,
- avoid large animated gradients behind every page,
- avoid high-opacity noise,
- do not reduce legibility.

---

# 7. Robotics Visual Motifs

The AUSTRC identity may be expressed through subtle motifs such as:

- mechanical arm geometry,
- hinge/joint circles,
- circuit traces,
- node connections,
- technical grid lines,
- measured corner brackets,
- scanning lines,
- thin telemetry curves,
- restrained luminous edge effects.

Use these motifs mostly in:

- login/landing hero,
- dashboard headers,
- empty states,
- onboarding,
- loading/splash states,
- decorative large-screen backgrounds.

Do not place decorative robotics artwork behind dense tables or forms.

---

# 8. Typography

Preferred font strategy:

## Display / hero / major headings

Preferred:

```text
Space Grotesk
```

Fallback:

```text
Inter, system-ui, sans-serif
```

## Body / application UI

Preferred:

```text
Inter
```

Fallback:

```text
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

## Technical/data labels

Preferred where appropriate:

```text
JetBrains Mono
```

Fallback:

```text
ui-monospace, SFMono-Regular, Consolas, monospace
```

Do not use monospace for long body paragraphs.

Do not use more than these three typographic roles.

---

# 9. Typography Scale

Recommended desktop scale:

```text
Hero:          clamp(3rem, 7vw, 7rem)
Display:       clamp(2.25rem, 4vw, 4.5rem)
H1:            2.25rem
H2:            1.75rem
H3:            1.375rem
H4:            1.125rem

Body Large:    1.0625rem
Body:          0.9375rem
Body Small:    0.875rem
Caption:       0.75rem
Micro/Data:    0.6875rem
```

Use responsive `clamp()` for large display text.

Avoid giant dashboard headings that waste vertical space.

---

# 10. Heading Style

Headings should feel engineered and modern.

Good:

```text
EVENT CONTROL
Participant Operations
Executive Panel
Task Workflow
```

Use letter spacing carefully for small uppercase labels.

Avoid writing every heading in uppercase.

Use uppercase primarily for:

- eyebrow labels,
- telemetry labels,
- compact navigation categories,
- status clusters.

---

# 11. Spacing System

Use a consistent 4px base.

Recommended tokens:

```text
4
8
12
16
20
24
32
40
48
64
80
96
128
```

Do not use random spacing values for every component.

Default page rhythm:

```text
mobile horizontal padding: 16–20px
tablet:                   24–32px
desktop:                  32–48px
large desktop:            48–64px
```

---

# 12. Border Radius

The product should look modern but engineered, not overly bubbly.

Recommended:

```text
small:   8px
medium:  12px
large:   16px
xl:      20px
pill:    999px
```

Use pill shapes mainly for:

- status badges,
- segmented controls,
- compact chips.

Do not make every card 30–40px rounded.

---

# 13. Surface Hierarchy

Use three main elevation levels.

## Level 0 — canvas

Near-black page background.

## Level 1 — standard surface

Cards, tables, form sections.

## Level 2 — elevated surface

Dropdowns, command panels, dialogs, floating panels.

Use:

- border,
- subtle shadow,
- small tonal difference,
- optional restrained backdrop blur.

Do not rely only on shadows.

---

# 14. Glassmorphism

Allowed sparingly.

Good use:

- floating navbar,
- command palette,
- modal,
- hero overlay,
- compact status panel.

Bad use:

- every form field,
- every table row,
- every card,
- every dashboard section.

Glass should enhance hierarchy, not become the entire design.

---

# 15. Gradient Rules

Brand gradients may use:

```text
#006838 -> #39B54A
```

or translucent variants.

Recommended use:

- primary CTA border/highlight,
- progress,
- hero accent,
- active navigation marker,
- selected card edge,
- chart accent.

Avoid rainbow gradients.

Avoid green gradient text on every heading.

---

# 16. Shadows and Glow

The system may use subtle green glow.

Good:

```text
soft 8–32px bloom
low opacity
only on active/primary elements
```

Avoid:

- permanent strong neon shadows,
- glow around all body text,
- glowing every border,
- animating large blurred shadows continuously.

Glow is an accent.

---

# 17. Iconography

Use one consistent icon family.

Preferred if an icon dependency is being introduced:

```text
Lucide React
```

or reuse the project's already-approved icon library.

Rules:

- consistent stroke width,
- 16 / 18 / 20 / 24px standard sizes,
- icons support labels rather than replace clarity,
- destructive actions must look destructive,
- do not mix several icon packs,
- avoid emoji as primary application icons.

---

# 18. Application Shell

Desktop layout should generally support:

```text
Sidebar / Navigation
        +
Top command/header area
        +
Main content workspace
```

The shell should feel stable while content transitions inside it.

Do not reload or dramatically reanimate the whole shell on every route.

---

# 19. Navigation

Navigation should have:

- clear active state,
- permission-aware visibility,
- smooth indicator transition,
- concise labels,
- collapsible behavior where useful,
- responsive mobile drawer.

The active item can use:

- brighter text,
- green left/right indicator,
- subtle green-tinted background,
- soft local glow.

Do not animate the entire sidebar repeatedly.

---

# 20. Dashboard Language

Dashboards should prioritize information hierarchy.

Recommended composition:

```text
Page title + contextual actions

High-value summary metrics

Primary operational panel

Secondary analytics/status

Recent activity / queue / table
```

Cards must not all look identical if their importance differs.

Use size, spacing, and placement before using bright color.

---

# 21. Data Visualization

Charts should use a restrained palette.

Default series order:

1. bright AUSTRC green,
2. deep AUSTRC green,
3. muted neutral,
4. blue/info,
5. warning where semantically relevant.

Avoid rainbow dashboards.

Animate charts only on meaningful initial reveal or data change.

Never animate charts continuously.

---

# 22. Tables

Dense operational pages will need high-quality tables.

Tables should support:

- clear headers,
- sticky header where useful,
- row hover,
- selected state,
- keyboard focus,
- sorting indicator,
- filters,
- pagination,
- loading skeleton,
- empty state,
- error state,
- responsive fallback.

Do not turn every table into cards on desktop.

On mobile, use a deliberate compact/card strategy where the data cannot fit.

---

# 23. Forms

Forms should be calm and highly legible.

Use:

- strong label hierarchy,
- visible focus state,
- helper text,
- inline validation,
- proper error messages,
- clear required markers,
- grouped sections,
- progressive disclosure for complex settings.

Do not animate field labels excessively.

Do not use placeholder text as the only label.

---

# 24. Dynamic Form Builders

Event and Administration both include dynamic forms.

Form builders should feel like an editor/control system.

Recommended patterns:

- field list with drag handle,
- field type indicator,
- edit panel,
- visibility/required controls,
- option editor,
- preview mode,
- publish status.

Use animation to make reordering and editing feel smooth.

Do not let draggable transitions become slow or springy enough to reduce precision.

---

# 25. Status System

Statuses must be visually distinct but not cartoonish.

Examples:

```text
Active / Success      green
Pending / Warning     amber
Error / Rejected      red
Information           blue
Draft / Neutral       gray
Blocked               amber/red depending context
```

Badges should use low-opacity backgrounds with readable text.

Never depend on color alone; include labels/icons where useful.

---

# 26. Participant Portal

Participant Portal should feel more personal than admin dashboards.

Recommended characteristics:

- strong event hero/header,
- QR as a clear focal object,
- progress/journey timeline,
- registered segments,
- result/certificate cards,
- important status at a glance,
- mobile-first usability.

The participant should never need to understand internal database terminology.

---

# 27. Event Staff / QR Scanner UI

Scanner screens must prioritize speed over decoration.

Use:

- large scan area,
- very clear success/failure feedback,
- participant identity,
- service name,
- previous-use warning,
- operator action,
- large touch targets.

Animation may provide immediate feedback:

```text
scan
→ pulse
→ success/error state
→ clear next action
```

Do not put heavy ambient animations behind the camera/scanner area.

---

# 28. Administration UI

Administration should feel structured and authoritative.

Core patterns:

- form management,
- application review queues,
- panel/member history,
- campaign management,
- task workflow.

Use dense but organized layouts.

Do not turn every administrative workflow into oversized marketing-style cards.

---

# 29. Task Management UI

Task pages may use:

- list,
- board,
- detail drawer,
- timeline,
- submission history,
- review panel.

Status transitions should be visually smooth.

Submission versions must be visibly historical.

Do not hide version history behind ambiguous UI.

---

# 30. Empty States

Every important list/table needs an intentional empty state.

Empty states may use:

- small robotics illustration,
- thin line icon,
- concise explanation,
- next action.

Avoid giant decorative illustrations that dominate operational pages.

---

# 31. Loading States

Use skeletons for content that has a predictable structure.

Use spinners for:

- short isolated actions,
- button submission,
- small unknown-duration states.

Use progress bars for:

- uploads,
- document generation,
- multi-stage operations.

Avoid full-page spinners when the shell can remain visible.

---

# 32. Error States

Errors must explain:

- what failed,
- what the user can do,
- whether data is safe,
- how to retry.

Do not show raw backend stack traces.

Use animation only to draw attention once; do not shake fields repeatedly.

---

# 33. Modal and Drawer Strategy

Use modal for focused decisions.

Use drawer/side panel for contextual editing/detail where keeping background context matters.

Examples:

```text
Delete confirmation -> modal
Task detail -> drawer
Edit event settings -> page or drawer depending complexity
Application quick review -> drawer
```

Avoid nesting modals.

---

# 34. Responsive Design

The product must be intentionally designed for:

```text
360px+
480px+
768px+
1024px+
1280px+
1440px+
```

Do not design only at 1440px and then patch mobile.

Rules:

- no horizontal page overflow,
- tables get deliberate mobile behavior,
- drawers become full-screen sheets where needed,
- navigation becomes mobile drawer/bottom strategy as designed,
- touch targets at least ~44px,
- forms remain comfortable on mobile,
- animations become lighter on low-power/mobile contexts.

---

# 35. Accessibility

Target WCAG AA behavior.

Mandatory:

- keyboard navigation,
- visible focus,
- semantic HTML,
- labels for controls,
- alt text for meaningful images,
- aria labels where required,
- sufficient contrast,
- focus trapping in dialogs,
- escape to close modal/drawer where appropriate,
- no color-only critical status communication,
- reduced-motion support.

A fancy interface that is inaccessible is not approved.

---

# 36. Brand Logo Usage

Primary logo asset should be stored in a common location such as:

```text
public/brand/aust-robotics-club-logo.png
```

Use it on:

- login/authentication,
- app shell brand area,
- public pages,
- loading/splash where appropriate.

Do not stretch the logo.

Preserve aspect ratio.

Do not recolor the official logo arbitrarily.

On dark backgrounds, place it inside a controlled neutral/light treatment if the original artwork requires it.

---

# 37. Design Anti-Patterns

Do NOT:

- use random colors,
- use random gradients,
- use multiple visual themes,
- use heavy glass on every component,
- animate every text block,
- add 3D rotation to normal cards,
- use massive parallax in operational dashboards,
- use strong blur that harms performance,
- use excessive green glow,
- use several icon libraries,
- create inconsistent radii,
- hide key actions behind hover only,
- use animation as a substitute for hierarchy,
- create a different button style inside each module.

---

# 38. Visual Quality Bar

Before marking a page complete, ask:

```text
Does this look like the same AUSTRC product?
Is the hierarchy obvious in 3 seconds?
Is the primary action obvious?
Does motion feel smooth rather than slow?
Does the page remain usable without animation?
Does it work on mobile?
Does it remain readable at 200% zoom?
Does it feel premium without becoming noisy?
```

If not, refine it before considering the page finished.
