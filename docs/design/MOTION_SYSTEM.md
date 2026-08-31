# AUSTRC Motion & Interaction System

# 1. Purpose

Motion is a core part of the AUSTRC interface.

The goal is a UI that feels:

- extremely smooth,
- responsive,
- premium,
- continuous,
- physically coherent,
- optimized.

The goal is NOT maximum animation quantity.

---

# 2. Motion Principles

Every animation should serve at least one purpose:

1. **Orientation** — show where content came from or went.
2. **Continuity** — connect one UI state to another.
3. **Feedback** — confirm user action.
4. **Hierarchy** — direct attention.
5. **Delight** — add restrained premium personality.

If an animation provides none of these, remove it.

---

# 3. Performance Principle

Prefer GPU-friendly properties:

```text
transform
opacity
filter (sparingly)
clip-path (carefully)
```

Avoid repeatedly animating layout-heavy properties:

```text
width
height
top
left
margin
padding
large box-shadow blur
```

where transform-based alternatives exist.

---

# 4. Duration Tokens

Recommended:

```text
--motion-instant:  90ms
--motion-fast:     140ms
--motion-base:     220ms
--motion-slow:     320ms
--motion-route:    420ms
--motion-hero:     650ms
```

Most UI interactions should stay between:

```text
120–320ms
```

Do not make ordinary dropdowns or buttons take 600ms.

---

# 5. Easing

Primary smooth entrance:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Standard interaction:

```css
cubic-bezier(0.2, 0, 0, 1)
```

Exit:

```css
cubic-bezier(0.4, 0, 1, 1)
```

Avoid random easing curves per component.

---

# 6. Page Transitions

Page transitions should preserve the application shell.

Recommended content transition:

```text
old page:
opacity 1 -> 0
translateY 0 -> -4px

new page:
opacity 0 -> 1
translateY 10–16px -> 0
```

Duration:

```text
300–450ms
```

Do not:

- rotate whole pages,
- zoom pages dramatically,
- animate sidebars from scratch on every route,
- block navigation while decorative animation completes.

---

# 7. Shared Layout Continuity

Where practical, shared elements should remain stable:

- sidebar,
- top navigation,
- page background,
- persistent filters,
- contextual header.

Animate only the changed workspace.

This makes the app feel faster.

---

# 8. Stagger

For lists/cards entering together:

```text
30–50ms stagger
```

Maximum visible stagger should generally stay under:

```text
250ms total
```

Do not delay the 12th table row by a full second.

---

# 9. Button Motion

Hover:

```text
translateY(-1px)
optional subtle border/glow increase
```

Press:

```text
scale(0.98)
```

Release should feel immediate.

Disabled buttons must not animate like interactive controls.

---

# 10. Card Motion

Interactive card:

```text
hover:
translateY(-2px)
border becomes slightly stronger
surface becomes slightly brighter
```

Optional local green glow only for important/selectable cards.

Static information cards should not all float on hover.

---

# 11. Navigation Motion

Active navigation indicator should transition smoothly.

Good:

- sliding indicator,
- background tint interpolation,
- text color transition.

Avoid bouncing navigation labels.

---

# 12. Modal Motion

Open:

```text
backdrop opacity 0 -> 1
panel opacity 0 -> 1
panel scale 0.97 -> 1
panel translateY 8px -> 0
```

Close should be slightly faster than open.

Backdrop and panel must feel synchronized.

---

# 13. Drawer Motion

Desktop drawer:

```text
translateX(100%) -> 0
```

Mobile bottom sheet:

```text
translateY(100%) -> 0
```

Use transform, not animated width.

---

# 14. Dropdown / Popover

Use:

```text
opacity
scale 0.98 -> 1
translateY -4/4px -> 0
```

Duration:

```text
120–180ms
```

Keep it crisp.

---

# 15. Accordion

Animate content expansion carefully.

Prefer a library/pattern that avoids janky measurement.

Keep transitions:

```text
180–260ms
```

Do not use slow elastic springs for settings panels.

---

# 16. Form Feedback

Focus:

- border color,
- soft focus ring,
- label emphasis.

Validation error:

- fade/slide error text,
- one subtle attention cue.

Do not repeatedly shake invalid fields.

---

# 17. Loading Motion

Allowed continuous animations:

- small spinner,
- skeleton shimmer,
- progress indicator,
- subtle scanner line.

Continuous ambient animation should be low cost and sparse.

---

# 18. Skeletons

Skeleton shimmer must be subtle.

Do not use bright moving green bars across every page.

Prefer neutral dark shimmer with small green undertone if desired.

---

# 19. Success Feedback

Examples:

- QR accepted,
- task updated,
- certificate generated,
- application status saved.

Use:

```text
short pulse
check icon reveal
local surface highlight
toast
```

Avoid confetti for routine operations.

Confetti may be reserved for rare milestone experiences only if explicitly approved.

---

# 20. Error Feedback

Use:

```text
single red edge pulse
error icon
clear message
```

Do not create aggressive repeated shaking or flashing.

---

# 21. QR Scanner Motion

Scanner can use:

- restrained scan line,
- corner bracket pulse,
- short success bloom,
- short error flash.

The camera/scanner interaction must remain performant.

Stop unnecessary decorative animation while scanning if device performance is constrained.

---

# 22. Hero / Login Animation

The login/public hero may be the richest animated area.

Possible elements:

- slow robotic-arm line reveal,
- subtle circuit path movement,
- drifting green radial light,
- logo reveal,
- layered grid parallax,
- telemetry micro-elements.

Rules:

- animation should settle quickly,
- do not block login form interaction,
- continuous ambient effects must be extremely lightweight,
- mobile gets simplified effects.

---

# 23. Scroll Animation

Use scroll reveals selectively.

Recommended:

```text
opacity 0 -> 1
translateY 16–24px -> 0
```

Trigger once.

Do not animate every dashboard row as the user scrolls.

Operational pages should prioritize stability over storytelling.

---

# 24. Drag and Drop

Dynamic field builders and task boards may use drag-and-drop.

Requirements:

- dragged item clearly elevated,
- destination clearly indicated,
- other items transition smoothly,
- no excessive spring overshoot,
- keyboard accessibility where supported,
- preserve precision.

---

# 25. Number / Metric Motion

Metric values may animate on initial dashboard reveal.

Use once.

Do not constantly count values up whenever the component re-renders.

---

# 26. Chart Motion

Animate chart reveal:

```text
300–700ms
```

depending complexity.

Disable/reduce animation for frequently refreshing telemetry/data.

---

# 27. Route Loading

Navigation should respond immediately.

If data takes time:

```text
route changes
shell stays stable
content skeleton appears
data fills in
```

Do not hold the old page for a long decorative exit animation.

---

# 28. Reduced Motion

Mandatory.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is requested:

- remove parallax,
- remove decorative continuous motion,
- remove large translations,
- shorten transitions,
- keep functional state changes clear.

The application must remain fully usable.

---

# 29. Mobile Motion

Mobile devices may have lower GPU/CPU budgets.

On mobile:

- reduce background effects,
- reduce blur,
- reduce simultaneous animated layers,
- avoid large fixed canvas effects,
- prioritize transform/opacity,
- keep touch feedback immediate.

---

# 30. Animation Technology Guidance

Prefer the lightest solution that solves the problem.

## CSS transitions/animations

Use for:

- button hover/press,
- simple fades,
- border/focus,
- small loaders,
- simple local state.

## React animation library

If an approved animation library already exists, use it consistently.

If the project decides to add one, a React-oriented motion library can be used for:

- route transitions,
- presence animations,
- drawers/modals,
- shared layout transitions,
- list reordering.

Do not add multiple overlapping animation libraries casually.

## GSAP

Use only if explicitly approved for complex:

- hero sequences,
- advanced scroll storytelling,
- timeline choreography.

Do not use GSAP for every button/card.

## Three.js / WebGL

Not a default dependency.

Only use for a clearly justified high-value visual experience with:

- performance budget,
- lazy loading,
- mobile fallback,
- reduced-motion fallback.

A fancy dashboard does not automatically require WebGL.

---

# 31. Motion Performance Budget

Aim for:

```text
60fps on normal modern devices
```

Rules:

- no more than a few large animated layers at once,
- avoid multiple full-screen blurred objects moving continuously,
- avoid layout thrashing,
- clean up intervals/RAF/listeners,
- pause offscreen ambient animation,
- lazy-load expensive visual modules,
- profile before adding more effects.

---

# 32. Motion Review Checklist

Before approving an animation:

```text
[ ] Does it communicate something?
[ ] Is it faster than the user's patience?
[ ] Is it transform/opacity based where possible?
[ ] Does it avoid layout thrashing?
[ ] Does it respect reduced motion?
[ ] Does it remain smooth on mobile?
[ ] Does it stop when not visible?
[ ] Does it match existing easing/duration?
[ ] Does it improve rather than distract?
```
