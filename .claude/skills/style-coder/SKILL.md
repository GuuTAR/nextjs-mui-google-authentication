---
name: style-coder
description: Generate style.tsx files using Material UI styled components following project styling standards.
---

---

# Purpose

This skill is responsible for generating:

```text
style.tsx
```

for React / Next.js components using Material UI styled API.

The generated file must contain only styling concerns and be designed for use from:

```tsx
import * as Styles from './style'
```

# Import Rules

Always import `styled` and all MUI components from `@mui/material` only:

```tsx
import { styled, Stack, Typography, Paper } from '@mui/material'
```

Forbidden:

```tsx
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
```

# General Rules

- Export all styled components
- Use Material UI styled API
- Follow Material UI version from package.json
- Support responsive design
- Use theme values whenever possible
- Avoid inline styling patterns

# Export Rules

Every styled component must be exported.

Allowed:

```tsx
export const Root = styled(Stack)(...)
export const Title = styled(Typography)(...)
```

Forbidden:

```tsx
const Root = styled(Stack)(...)
export default Root;
```

# Custom Props Rules

Whenever a styled component contains custom props:

1. Create a dedicated props type
2. Type name must be:

```text
<ComponentName>Props
```

3. Use shouldForwardProp

Example:

```tsx
type CardProps = {
  isSelected?: boolean
}

export const Card = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CardProps>(({ theme, isSelected }) => ({
  border: isSelected ? `1px solid ${theme.palette.primary.main}` : 'none',
}))
```

Forbidden:

```tsx
export const Card = styled(Paper)<{
  isSelected?: boolean
}>(({ isSelected }) => ({}))
```

Forbidden:

```tsx
export const Card = styled(Paper)(({ isSelected }) => ({}))
```

# Spacing Rules

Gap must always use:

```tsx
theme.spacing(...)
```

Examples:

```tsx
gap: theme.spacing(1)
gap: theme.spacing(2)
gap: theme.spacing(3)
```

Padding must always use:

```tsx
padding: theme.spacing(...);
paddingTop: theme.spacing(...);
paddingBottom: theme.spacing(...);
paddingLeft: theme.spacing(...);
paddingRight: theme.spacing(...);
```

Forbidden:

```tsx
gap: '16px'
gap: 2
```

Forbidden:

```tsx
padding: '24px'
padding: 3
```

# Stack Rules

When styling a Stack:

Do not add:

```tsx
display: 'flex'
```

Example:

```tsx
export const Root = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}))
```

Forbidden:

```tsx
export const Root = styled(Stack)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}))
```

Stack already provides flex behavior.

# Flex Layout Rules

When a styled component sets both `flexDirection` and `flexWrap`, combine them into `flexFlow` instead.

Allowed:

```tsx
export const Row = styled(Stack)(({ theme }) => ({
  flexFlow: 'row wrap',
  gap: theme.spacing(1),
}))
```

Forbidden:

```tsx
export const Row = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}))
```

If only one of `flexDirection` or `flexWrap` is needed, set that property directly — do not force a `flexFlow` shorthand for a single axis.

# Background Rules

Always use:

```tsx
background: ...
```

Allowed:

```tsx
background: theme.palette.background.paper
background: '#FFFFFF'
background: `linear-gradient(...)`
```

Forbidden:

```tsx
backgroundColor: theme.palette.background.paper
backgroundColor: '#FFFFFF'
```

# Responsive Rules

## Tablet

Use:

```tsx
[theme.breakpoints.down('md')]: {
}
```

Definition:

```text
tablet = down('md')
```

## Mobile

Use:

```tsx
[theme.breakpoints.down('sm')]: {
}
```

Definition:

```text
mobile = down('sm')
```

Example:

```tsx
export const Root = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
  },

  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}))
```

# Palette Rules

**Never add new palette entries. Never modify `src/theme/palette.ts` or `src/theme.d.ts`. Never hardcode a color value.**

## Step 1 — Use existing token

Before referencing any color, read the current palette:

```text
src/theme/palette.ts
```

Use an existing token whenever the color matches exactly:

```tsx
color: theme.palette.text.primary       // #0B1B3B
color: theme.palette.text.secondary     // #3A4A6E
color: theme.palette.text.disabled      // #A4AFC9
background: theme.palette.background.default  // #F2F6FD
background: theme.palette.background.paper    // #FFFFFF
```

## Step 2 — If no exact match, use the nearest token

Never hardcode. If no exact token exists, pick the nearest available color from the palette:

```tsx
// Design specifies #7383A6 — nearest is theme.palette.text.secondary (#3A4A6E)
color: theme.palette.text.secondary,
```

## Step 3 — Suggest missing token in the summary

After generation, list every color that had no exact match and suggest a palette token for it:

```
Palette suggestions:
- custom.text.muted (#7383A6) — used on PageSubtitle, ProfileEmail, SectionLabel
- custom.border.card (#E6EDF7) — used on AvatarCard, SectionCard
```

The user decides whether to add these to the palette.

## Forbidden

Never write or modify:

```text
src/theme/palette.ts
src/theme.d.ts
```

Never hardcode a color value.

# Button Rules

Do not style `Button` from MUI directly. Use `CoreButton` as the base for button styled components.

Forbidden:

```tsx
import { Button, styled } from '@mui/material'

export const ActionButton = styled(Button)(...)
```

Allowed:

```tsx
import { styled } from '@mui/material'
import CoreButton from '@/views/components/core/CoreButton'

export const ActionButton = styled(CoreButton)(...)
```

# Component Customization Rules

Always base styled components on existing Material UI components.

Allowed:

```tsx
export const Card = styled(Paper)(...)
export const Title = styled(Typography)(...)
export const Row = styled(Stack)(...)
```

Forbidden:

```tsx
export const Card = styled('div')(...)
export const Title = styled('span')(...)
```

Follow the design — never invent visual behavior not present in the design.

# Styling Standards

Prefer:

- Stack
- Paper
- Typography
- Material UI components

Use theme values whenever available.

Examples:

```tsx
color: theme.palette.text.primary
borderColor: theme.palette.divider
background: theme.palette.background.paper
```

# File Structure

Preferred order:

```tsx
imports

types

Root

layout components

content components

action components
```

Example:

```tsx
import { styled, Stack, Typography } from '@mui/material'

type CardProps = {
  isSelected?: boolean
}

export const Root = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}))

export const Card = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CardProps>(({ theme, isSelected }) => ({
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
  border: isSelected ? `1px solid ${theme.palette.primary.main}` : 'none',
}))

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}))
```

# Output Requirements

When generating style.tsx:

1. Export all styled components.
2. Create explicit props type for every custom prop.
3. Use shouldForwardProp for every custom prop.
4. Use theme.spacing exclusively for gap and padding.
5. Never add display:flex to Stack.
6. Combine flexDirection and flexWrap into flexFlow when both are needed.
7. Use background instead of backgroundColor.
8. Use down('md') for tablet.
9. Use down('sm') for mobile.
10. Follow Material UI styled API conventions.
11. Read src/theme/palette.ts first. Use exact match if available; otherwise use the nearest token.
12. Never hardcode a color value. Never modify palette.ts or theme.d.ts.
13. After generation, list all colors with no exact match as palette suggestions in the summary.
