---
name: import-sorter
description: Sort TypeScript/JavaScript imports according to the project's import convention.
---

# Import Sorter

Your responsibility is to reorganize import statements without changing runtime behavior.

## General Rules

- Only reorder imports.
- Never modify imported identifiers.
- Never remove unused imports unless explicitly requested.
- Never merge or split imports unless required to preserve syntax.
- Preserve comments attached to imports.
- Imports within the same group must be contiguous.
- Separate different groups with exactly one blank line.
- Within each group, sort alphabetically unless a custom order is specified.
- Preserve side-effect imports (`import './xxx'`) and place them in the "Other imports" group unless otherwise
  specified.

---

# Import Groups

Sort imports from top to bottom using the following order.

## Group 1 — Next.js and React

Always place Next.js imports before React. Within Next.js, public APIs come before internal `next/dist/*` paths.

Order:

1. `next/*` (public APIs: `next/navigation`, `next/headers`, `next/server`, `next/image`, etc.)
2. `next/dist/*` (internal paths)
3. `react`

Example

```ts
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import React from 'react'
import { useMemo } from 'react'
```

---

## Group 2 — Material UI

Order:

1. `@mui/material`
2. `@mui/icons-material`
3. other `@mui/*`

Example

```ts
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import AddIcon from '@mui/icons-material/Add'

import { DatePicker } from '@mui/x-date-pickers'
```

---

## Group 3 — External libraries

All third-party packages from `package.json`.

Examples

```
axios
dayjs
lodash
clsx
zod
react-hook-form
```

Sort alphabetically.

---

## Group 4 — Libraries

```
@/libs/**
```

---

## Group 5 — Types and Enums

Order:

1. `@/types/**`
2. `@/enum/**`

---

## Group 6 — Theme, Data, Lang

Order:

1. `@/theme/**`
2. `@/data/**`
3. `@/lang/**`

---

## Group 7 — Repository

```
@/repository/**
```

---

## Group 8 — API

```
@/api/**
```

---

## Group 9 — Services

```
@/services/**
```

---

## Group 10 — Providers

```
@/providers/**
```

---

## Group 11 — Hooks

```
@/hooks/**
```

---

## Group 12 — Shared Components

Order:

1. `@/views/components/core/**`
2. `@/views/components/common/**`

---

## Group 13 — Local language and style

Always order exactly as follows.

```ts
import * as Language from './lang'
import * as Styles from './style'
```

If only one exists, keep it.

---

## Group 14 — Other imports

Everything not matched above.

Examples

```
@/*
./*
../*
*.css
*.scss
*.svg
*.png
```

Sort alphabetically.

---

# Sorting Rules Within a Group

Unless a custom order is defined:

- Sort by module path alphabetically.
- If multiple imports come from the same module, preserve existing import specifiers.
- Default import comes before named imports as produced by the existing code.

Example

```ts
import Alert from '@/components/Alert'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
```

---

# Blank Line Rules

Correct

```ts
import Link from 'next/link'
import React from 'react'

import Button from '@mui/material/Button'

import axios from 'axios'

import { formatDate } from '@/libs/date'
```

Incorrect

```ts
import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
```

---

# Priority Rules

When determining a group's priority, use the first matching rule.

For example:

```
@/theme/colors
```

must always belong to **Theme** rather than **Other imports**.

```
@/hooks/useAuth
```

must always belong to **Hooks** rather than **Other imports**.

---

# Goal

Whenever editing a TypeScript or JavaScript file:

1. Reorder all imports according to these groups.
2. Insert one blank line between groups.
3. Alphabetize imports inside each group unless a custom ordering is specified.
4. Do not change program behavior.
