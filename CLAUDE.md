# Coding Conventions

## Current stack baseline

- Use Next.js 16, React 19, and TypeScript 6 conventions.
- Keep the codebase compatible with Node.js 20.9+.
- This project uses the App Router, strict TypeScript, and the `react-jsx` JSX runtime.

## Formatting

- Let Prettier be the source of truth.
- Use 2 spaces, semicolons, single quotes, and `trailingComma: 'es5'`.
- Keep imports sorted with this order:
	1. third-party packages
	2. `@/` imports
	3. parent-relative imports
	4. same-folder imports
- Do not manually add `React` imports for JSX.

## TypeScript

- Preserve `strict` TypeScript compatibility.
- Avoid `any` unless there is no practical alternative.
- Prefer inference for local values, but give exported types clear shapes.
- Use the `@/` alias for cross-folder imports under `src`.
- Keep shared types in `src/types` with the existing `T...` naming pattern.
- Follow the existing suffixes:
	- `*.type.ts`
	- `*.data.ts`
	- `*.constants.ts`
	- `*.store.ts`
	- `*.hook.ts`

## React and Next.js

- Default to server components in `src/app`.
- Add `'use client';` only when a file needs hooks, browser APIs, Jotai, animations, or DOM access.
- Prefer default-exported component functions named after the file or folder.
- Keep barrel files as thin default re-exports when a folder already follows that pattern.
- Co-locate component styles beside the component.

## Naming

- Components: PascalCase.
- Hooks: `use...Hook`.
- Atoms: `...Atom`.
- Constants and enums: uppercase names matching the current codebase.
- CSS module files: kebab-case plus `.module.css`.

## State and data organization

- Keep Jotai atoms in `src/stores`.
- Keep reusable constants and enums in `src/constants`.
- Keep static content arrays and records in `src/data`.
- Keep app-wide providers in `src/providers`.

## Styling

- Prefer CSS modules for component-scoped styling.
- Use global CSS only for shared tokens, utilities, resets, and theme variables.
- Reuse existing CSS custom properties before introducing new hard-coded values.

## Linting and quality

- Follow the flat ESLint config extending `next/core-web-vitals` and `next/typescript`.
- Prefer fixing lint issues over suppressing rules.
- If a rule must be disabled, keep the scope narrow and add a short reason.

## Dependency upgrade guidance

- Keep new code aligned with the current upgrade to Next.js 16, React 19, Font Awesome 7, Jotai 2.20, and TypeScript 6.
- Prefer APIs that are current for those versions instead of legacy patterns.
