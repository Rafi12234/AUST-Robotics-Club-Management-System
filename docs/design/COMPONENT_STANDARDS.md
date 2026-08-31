# AUSTRC Component & UI Standards

# 1. Purpose

This document prevents each developer or AI agent from inventing a separate UI language.

Before creating a new component, search:

```text
shared-features/frontend/
```

for an existing shared component.

Reuse and extend approved shared primitives before creating duplicates.

---

# 2. Shared Primitive Strategy

Shared frontend should gradually provide consistent primitives such as:

```text
Button
IconButton
Input
Textarea
Select
Checkbox
Radio
Switch
Badge
Chip
Card
Panel
Modal
Drawer
Tooltip
Popover
Tabs
Table
Pagination
Skeleton
Spinner
Toast
EmptyState
ErrorState
PageHeader
SectionHeader
Breadcrumb
ConfirmDialog
PermissionGate
```

Do not create:

```text
EventButton
AdminButton
FancyGreenButton
NewButtonV2
```

when a shared Button variant can solve the need.

---

# 3. Button Variants

Recommended variants:

## Primary

Bright/deep AUSTRC green.

Used for the single strongest action in a local context.

## Secondary

Dark elevated surface with green/neutral border.

## Ghost

Minimal background, used for low-emphasis actions.

## Danger

Red semantic treatment.

## Icon

Compact icon-only button with accessible label.

Button must support:

- default,
- hover,
- focus-visible,
- active,
- disabled,
- loading.

Loading must preserve width where possible.

---

# 4. Button Sizes

Recommended:

```text
sm: 32–36px
md: 40–44px
lg: 48–52px
```

Mobile critical actions should generally meet ~44px touch target.

---

# 5. Inputs

Inputs should have:

- persistent label,
- optional description,
- error message,
- focus ring,
- disabled state,
- optional leading/trailing icon.

Do not rely on placeholder as label.

Default surface should be dark but clearly distinct from page background.

---

# 6. Cards

Card variants:

```text
standard
interactive
selected
metric
warning
danger
glass (rare)
```

Cards should have predictable padding and radius.

Do not create a unique shadow/radius for every page.

---

# 7. Metric Cards

Metric card hierarchy:

```text
small label
main value
trend/change
optional micro visualization
```

Use green for positive semantic change only when correct.

A large number is not automatically green.

---

# 8. Tables

Shared table behavior should support:

- sticky header,
- sortable columns,
- row actions,
- loading,
- empty,
- error,
- selected rows,
- pagination,
- filter integration,
- keyboard focus where practical.

Row action menus should not contain unlabeled mystery icons.

---

# 9. Status Badges

Recommended styles:

```text
success
warning
danger
info
neutral
```

Each uses:

- text label,
- low-opacity semantic background,
- clear text color,
- optional small icon/dot.

---

# 10. Modal

Use for:

- confirmations,
- focused forms,
- irreversible decisions,
- short contained workflows.

Modal must include:

- accessible title,
- close behavior,
- focus management,
- Escape support where appropriate,
- clear primary/secondary action.

---

# 11. Drawer

Use for contextual detail/editing where background context matters.

Examples:

- task detail,
- application quick review,
- participant detail,
- event service detail.

On small screens, drawer may become a full-screen sheet.

---

# 12. Toast

Use for transient feedback:

- saved,
- failed,
- queued,
- copied,
- generated.

Do not use toast as the only place for critical error details.

---

# 13. Confirmations

Destructive actions require deliberate confirmation when data/history may be affected.

Confirm dialogs should say exactly what will happen.

Bad:

```text
Are you sure?
```

Better:

```text
Remove this staff assignment?
The user's account will remain unchanged.
```

---

# 14. Page Header

Standard page header may contain:

```text
eyebrow/breadcrumb
title
description
primary action
secondary actions
context/status
```

Keep height reasonable on operational pages.

---

# 15. Search and Filters

Filter bars should be consistent across list pages.

Possible structure:

```text
Search
Status
Date
Module-specific filters
Reset
```

On mobile, move secondary filters into a sheet/drawer.

---

# 16. Command Palette

A command palette can be introduced as a premium shared feature if useful.

Possible commands:

- navigate,
- search participant/member,
- open event,
- create task,
- open form,
- scan QR.

Do not implement until permissions and route structure are clear.

---

# 17. Navigation Component

Navigation must be permission-aware.

Do not only hide links based on frontend assumptions.

Backend authorization remains mandatory.

---

# 18. QR Display Component

QR component should support:

- clear code area,
- participant/event context,
- expiration/revocation state,
- save/download if authorized,
- high contrast,
- mobile display.

Do not place moving decorative effects directly over the QR code.

---

# 19. Scanner Result Component

Success result should clearly show:

```text
participant
service/session
time
result
next action
```

Error states must differentiate:

- invalid QR,
- expired/revoked,
- unauthorized event,
- already used,
- participant not eligible,
- network/server error.

---

# 20. Timeline Component

Useful for:

- participant journey,
- application history,
- task history,
- result revision,
- certificate status.

Timeline should use restrained motion and clear timestamps.

---

# 21. File Upload Component

Shared file upload should support:

- drag/drop where appropriate,
- browse,
- progress,
- allowed types,
- max size,
- remove/retry,
- error message,
- accessible input.

File upload API must use `FormData`.

---

# 22. Dynamic Form Field Component

Both module-specific form systems should use consistent visual primitives while preserving separate business logic.

Supported UI may include:

- text,
- textarea,
- number,
- date,
- select,
- radio,
- checkbox,
- multi-select,
- file.

Do not merge Event and Administration database form systems simply because frontend primitives are shared.

---

# 23. Data States

Every data-driven component must consider:

```text
initial
loading
success
empty
error
partial
disabled
unauthorized
```

Do not implement only the happy path UI.

---

# 24. Focus State

Use a consistent focus-visible ring.

Recommended:

```text
2px bright green ring
2px offset or equivalent
```

Focus must be clearly visible on dark surfaces.

---

# 25. Hover State

Hover must not be the only way to reveal essential information.

Touch devices do not have hover.

---

# 26. Selected State

Selected cards/rows should use:

- stronger border,
- subtle green tint,
- optional check/indicator.

Do not rely only on glow.

---

# 27. Destructive State

Destructive actions should:

- use danger color,
- avoid proximity to primary actions when accidental activation is risky,
- request confirmation where appropriate,
- explain consequences.

---

# 28. Responsive Component Rules

Components should not use fixed widths without reason.

Prefer:

```text
min()
max()
clamp()
grid
flex
container-aware patterns
```

Test important components at:

```text
360px
768px
1024px
1440px
```

---

# 29. Accessibility Rules

Components must support:

- semantic elements,
- keyboard use,
- focus visible,
- screen-reader labels,
- disabled semantics,
- readable contrast,
- reduced motion.

Do not add `div` click handlers when a native button is appropriate.

---

# 30. Performance Rules

Shared components are used everywhere.

Therefore:

- avoid unnecessary re-renders,
- avoid heavy effect hooks,
- do not ship huge libraries for one tiny effect,
- lazy-load heavy feature components,
- virtualize very large lists if required,
- debounce/throttle expensive search carefully,
- avoid unnecessary animations in large tables.

---

# 31. Styling Rules

Use the shared design tokens.

Do not hardcode random colors repeatedly.

Good:

```css
color: var(--text-primary);
background: var(--surface-1);
border-color: var(--border-default);
```

Avoid:

```css
color: #f4f4f4;
background: #0d110e;
```

in dozens of unrelated files.

If a reusable token is genuinely missing, update the design token system deliberately.

---

# 32. Module Styling

Module-specific components may have their own layout CSS, but must consume shared tokens.

Event Management should not introduce a blue theme.

Administration should not introduce a purple theme.

Both are AUSTRC.

---

# 33. Component Creation Checklist

Before creating a new UI component:

```text
[ ] Search Shared Features first
[ ] Confirm the component is not already available
[ ] Decide whether it is shared or module-specific
[ ] Use design tokens
[ ] Add keyboard/focus behavior
[ ] Add loading/empty/error states if data-driven
[ ] Add responsive behavior
[ ] Use approved motion tokens
[ ] Respect reduced motion
[ ] Avoid unnecessary dependency
```

---

# 34. Page Completion Checklist

Before declaring a page complete:

```text
[ ] Matches AUSTRC palette
[ ] Uses shared typography
[ ] Uses shared spacing/radius
[ ] Uses shared components where possible
[ ] Active/hover/focus/disabled states exist
[ ] Loading state exists
[ ] Empty state exists if applicable
[ ] Error state exists
[ ] Permission/unauthorized state considered
[ ] Responsive at 360/768/1024/1440
[ ] Keyboard usable
[ ] Reduced motion respected
[ ] No avoidable layout shift
[ ] No excessive continuous animation
[ ] No module-specific theme drift
[ ] Lint/build passes
```
