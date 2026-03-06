# Stage UI

Monorepo for @stage-ui component library. Packages: system, core, icons, docs, lab.

## Project structure

- `packages/icons/` — icon library (@stage-ui/icons)
  - `svg/Fill/`, `svg/Outline/` — source SVG files (64x64)
  - `scripts/generate.js` — generates React components from SVGs
  - `lib/` — generated .tsx icon components
  - `index.ts` — auto-generated exports
- `packages/core/` — main component library
- `packages/system/` — design system core
- `build/` — compiled output for npm publishing
- `scripts/make.js` — interactive version bumper

## Skills

- `/add-icons` — Add new SVG icons to @stage-ui/icons, validate, generate, build, and publish. Place new icons in `Icon/Fill/` and `Icon/Outline/` directories at project root.
