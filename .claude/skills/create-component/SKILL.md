---
name: create-component
description: Create a React component that matches this project's Next.js, TypeScript, CSS module, and barrel export conventions. Use when the user asks to add a new component, section, button, or UI building block.
disable-model-invocation: true
argument-hint: [component-name] [target-directory]
arguments:
  - component_name
  - target_directory
---

Create a new React component named `$component-name` in `$target_directory` when arguments are provided. If either value is missing, infer it from the conversation or ask for the smallest missing detail.

Follow the project conventions in [CLAUDE.md](../../../CLAUDE.md).

## Requirements

- Use Next.js App Router conventions.
- Components should be created inside the `src/components` directory or a relevant subdirectory.
- Default to a server component.
- Add `'use client';` only when the component needs hooks, browser APIs, Jotai, animation libraries, DOM access, or when there are no API requests.
- Use TypeScript with strict-compatible types.
- Prefer a folder per component when the component has styles, hooks, or nested subcomponents.
- Name the component file `$component-name.tsx`.
- Name the component function `$component-name` and named export it.
- Create a barrel file `index.ts` that re-exports the named component.
- If the component needs styles, create a colocated CSS module using kebab-case, such as `component-name.module.css`.
- Keep imports sorted: third-party, `@/`, parent-relative, same-folder.
- Use the `@/` alias for cross-folder imports under `src`.
- Do not add a `React` import for JSX or TSX.
- If props are needed, define a `T${component-name}Props` type with a clear exported shape.
- Reuse existing CSS custom properties and patterns before introducing new hard-coded values.

## Folder Structure

- `src/components/$component-name/index.ts`
- `src/components/$component-name/$component-name.tsx`
- `src/components/$component-name/$component-name.module.css` (if styles are needed)
- `src/components/$component-name/$component-name.hook.ts` (if hooks are needed)

For a tiny wrapper with no styles or siblings, a single `.tsx` file plus `index.ts` is acceptable if it fits surrounding patterns.

## Component Structure

- The component should be a functional component using an arrow function.

```tsx
export const ComponentName = () => {
  // Component logic and JSX here
};
```

## index.ts Format

```ts
export { ComponentName } from './ComponentName';
```

## Child Components

- Check the $component-name if the name is prefixed by an existing component, such as `FooterStatusBadge` being a child of `Footer`.
- If the component is a child of an existing component, place it in a new folder under the parent component, such as `src/components/footer/footer-status-badge/`.
- If the component is not a child of an existing component, place it in a new folder under `src/components/`, such as `src/components/status-badge/`.

## Output

When finished:

- Briefly state which files were created.
- Mention whether the component is a server or client component.
- Note any follow-up the user may still need, such as wiring the component into a page.
