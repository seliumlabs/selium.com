# Repository Guidelines

## Project Structure & Module Organization
- `app/` is the Next.js App Router entrypoint. Core layout lives in `app/layout.tsx`, the root page in `app/page.tsx`, route segments in `app/home` and `app/docs`, and shared UI in `app/_shared`.
- `content/docs/` holds documentation content (MDX). Docs wiring lives in `lib/docs-source.ts` and `source.config.ts`.
- `lib/` contains reusable helpers and submodules (for example `lib/lightning/`).
- `public/` stores static assets. Global styles live in `app/globals.css`; Tailwind v4 is wired via `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local dev server with Turbopack.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.

## Coding Style & Naming Conventions
- TypeScript is `strict` in `tsconfig.json`; prefer explicit types for props and exported utilities.
- Indentation is 2 spaces (match existing JSON and TS/TSX formatting).
- Components are named in `PascalCase`; route segments follow folder names under `app/` (lowercase here like `home`, `docs`).
- Use the `@/*` path alias for project-root imports.

## Testing Guidelines
- No test runner or `npm test` script is configured in this repo.
- For changes, run `npm run build` and manually verify key pages (home and docs).
- If you add tests, also add a script in `package.json` and document the test location (for example `app/.../__tests__/...`).

## Commit & Pull Request Guidelines
- Commit history favors short, descriptive summaries (examples: “Docs scaffold”, “Fixed placeholder docs”); follow this style.
- Avoid leaving “WIP” in final merges; squash or reword before merging.
- PRs should include a short summary, linked issues (if any), and screenshots for UI changes.

## Environment & Configuration
- Use the Node version in `.nvmrc` (`v25.2.1`) when running locally.
- App and docs configuration live in `next.config.ts` and `source.config.ts`.
