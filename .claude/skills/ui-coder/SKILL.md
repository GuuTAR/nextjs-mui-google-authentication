---
name: ui-coder
description: Generate React Function Components using Next.js and Material UI following project UI standards.
---

---

# Purpose

This skill is responsible for generating UI components and pages using:

- Next.js
- React Function Component
- Material UI (version must be determined from package.json)
- style.tsx for all styling
- lang.ts for all language resources

# Project Structure

Page or Component must be generated as:

```text
ComponentName/
├── index.tsx
├── style.tsx
└── lang.ts
```

# Material UI Version

Before generating code:

1. Read package.json
2. Determine installed Material UI version
3. Follow APIs and patterns compatible with that version

Never assume Material UI version.

# Imports

Always import style and language using:

```tsx
import * as Styles from './style'
import * as Language from './lang'
```

Never use:

```tsx
import Styles from './style'
import { Root } from './style'
import lang from './lang'
```

# Component Type Rules

## Page Component

If the component is a page:

```tsx
<PageContainer>...</PageContainer>
```

If page must show application menu:

```tsx
<PageContainer isShowAppMenu>...</PageContainer>
```

PageContainer must be the outermost element.

## Reusable Component

For normal components:

```tsx
<Styles.Root>...</Styles.Root>
```

Styles.Root must be the outermost element.

# Typography Rules

Allowed:

```tsx
<Typography variant="h6">Title</Typography>
```

```tsx
<Styles.Title>Title</Styles.Title>
```

Typography inline props are limited to:

- variant
- color
- align

Custom styled component props are allowed.

Forbidden:

```tsx
<Typography sx={{ mb: 2 }}>
```

```tsx
<Typography fontWeight={600}>
```

```tsx
<Typography marginTop={2}>
```

# Button Rules

Do not use MUI `Button` directly. Use `CoreButton` instead.

Forbidden:

```tsx
import { Button } from '@mui/material'

<Button onClick={handleClick}>Save</Button>
```

Allowed:

```tsx
import CoreButton from '@/views/components/core/CoreButton'

<CoreButton onClick={handleClick}>Save</CoreButton>
```

For custom styled buttons, extend `CoreButton` via a styled wrapper in style.tsx.

# Layout Rules

Do not use:

```tsx
<div>
```

```tsx
<Box>
```

Use:

```tsx
<Stack>
```

or

```tsx
<Styles.Content>
```

Stack inline props are not allowed.

Allowed:

```tsx
<Styles.Content isActive>
```

Forbidden:

```tsx
<Stack spacing={2}>
```

```tsx
<Stack direction="row">
```

```tsx
<Stack sx={{ gap: 2 }}>
```

Layout styling must be implemented in style.tsx.

# Icon Rules

Use:

- Material UI Icons
- Styled icon components from style.tsx

Allowed inline props:

- fontSize
- color

Examples:

```tsx
<HomeOutlined fontSize="small" />
```

```tsx
<HomeOutlined color="primary" />
```

Forbidden:

```tsx
<HomeOutlined sx={{ mr: 1 }} />
```

```tsx
<HomeOutlined style={{}} />
```

# Select Rules

Use:

```tsx
<Select>
```

or

```tsx
<Styles.Select>
```

Allowed:

- Standard Select props
- Custom styled component props

Forbidden:

```tsx
<Select sx={{}}>
```

# Paper Rules

Whenever a container requires:

- Box Shadow
- Card-like layout
- Elevated surface

Use:

```tsx
<Paper>
```

or

```tsx
<Styles.Card>
```

Never use:

```tsx
<div>
```

with box-shadow styling.

Paper inline props are not allowed except custom styled component props.

# Component Customization Rules

Always base component customization on existing Material UI components.

Allowed:

```tsx
export const Card = styled(Paper)(...)
export const Title = styled(Typography)(...)
export const ActionButton = styled(Button)(...)
```

Forbidden:

```tsx
export const Card = styled('div')(...)
export const Title = styled('span')(...)
```

Follow the design — never invent visual behavior not present in the design.

# Reusable Component Rules

Always inspect:

```text
@/views/components
```

before creating new UI.

Prefer existing components whenever possible.

# Common Component Extraction

If a component appears reusable across multiple pages:

Create:

```text
@/views/components/common
```

Examples:

- EmptyState
- InfoCard
- StatusChip
- FilterSection
- SectionTitle

Favor reuse over duplication.

# Design Source

Before implementation:

1. Read all files under:

```text
@claude_design
```

2. Understand:
   - Layout
   - Colors
   - Spacing
   - Typography
   - Interaction patterns

3. Follow existing design patterns.

Never invent a new design system when one already exists.

# Hook Usage

Before creating new logic:

Inspect:

```text
@/hooks
```

Reuse existing hooks whenever possible.

Examples:

- useDebounce
- useDialog
- usePagination
- useAuth
- useLocale

Prefer existing hooks over creating new hooks.

# React Namespace Rules

Never use the `React.` namespace prefix. Always use named imports instead.

Forbidden:

```tsx
React.ChangeEvent<HTMLInputElement>
React.MouseEvent<HTMLButtonElement>
React.ReactNode
React.FC
```

Allowed:

```tsx
import { ChangeEvent, MouseEvent, ReactNode, FC } from 'react'

ChangeEvent<HTMLInputElement>
MouseEvent<HTMLButtonElement>
ReactNode
FC
```

# State Rules

Always specify type:

Allowed:

```tsx
const [open, setOpen] = useState<boolean>(false)

const [items, setItems] = useState<Item[]>([])
```

Forbidden:

```tsx
const [open, setOpen] = useState(false)
```

```tsx
const [items, setItems] = useState([])
```

# Callback Rules

All handlers must use useCallback.

Allowed:

```tsx
const handleClick = useCallback((): void => {
  ...
}, []);
```

```tsx
const handleSubmit = useCallback(async (): Promise<void> => {
  ...
}, []);
```

Forbidden:

```tsx
const handleClick = () => {
  ...
};
```

```tsx
function handleClick() {
  ...
}
```

# Styling Rules

All visual styling must be implemented in:

```text
style.tsx
```

Avoid:

- sx
- inline style
- style attribute

Use styled components only.

# Output Requirements

When generating UI:

1. Determine if it is a page or reusable component.
2. Read package.json to identify Material UI version.
3. Read @claude_design.
4. Inspect @/views/components for reuse opportunities.
5. Inspect @/hooks for reusable logic.
6. Generate:
   - index.tsx
   - style.tsx
   - lang.ts

7. Extract reusable UI into @/views/components/common when appropriate.
8. Follow all rules in this skill strictly.
