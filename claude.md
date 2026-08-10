# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- nextjs
- app router
- firebase
- material ui v9
- dayjs
- axios

## Commands

```bash
# Run the server with live reload
yarn dev

# Run the server (no live reload)
yarn start

# Build
yarn build

# Format code
yarn lint

# Install dependencies
yarn
```

## Project Structure

The project follows a layered architecture:

```
claude_design/          # Claude Design
public/                 # Store image and svg icon
src/
  api/                  # Class store function calling API with axios
  app/                  # App Router
  data/                 # Constant value — app global constant store in global.ts otherwise store separate file
  enum/                 # Enum — app global enum store in global.ts otherwise store separate file
  hooks/                # Hook function
  lang/                 # App global language data
  libs/                 # Class for lib such as firebase
  provider/             # App Provider
  repository/           # Local database for demo user
  services/             # Class store helper and util function
  theme/                # Global theme file
  types/                # Type file
  views/
    components/         # Store reusable components
      common/
        {component}/    # Component name
          index.tsx     # Component file
          style.tsx     # style component for index.tsx
      core/             # Core reusable components (don't touch)
    pages/
      {page}/           # Page name
        section/
          {section}/    # Section name
            index.tsx   # Component file
            lang.ts     # Section lang data
            style.tsx   # style component for index.tsx
        enum.ts         # Page enum
        index.tsx       # Component file
        lang.ts         # Page lang data
        style.tsx       # style component for index.tsx
```

## Claude Skills

1. import-sorter - use everytime for code formatting to ensure that import sorted orderly
2. style-coder - use when create new style.tsx
3. ui-coder - use when create new components or new pages

## Commits and PR

1. use "import-sorter" before commits
2. remove unused import and never read var

## CI

GitHub Actions workflow: `.github/workflows/pr-build-check.yml`

Triggers on PRs targeting `main` or `dev`. Runs in order:

1. **Lint** — `yarn lint`
2. **Type Check** — `yarn tsc --noEmit`
3. **Build** — `yarn build`

All three must pass before a PR can be merged.

## Don't allow

1. Do not read/write .env file
2. Do not read/write file outside project
