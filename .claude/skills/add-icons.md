# Skill: add-icons

Add new SVG icons to the @stage-ui/icons package, validate them, generate components, build, bump version, and publish to npm.

## When to use

User wants to add new icons from the `Icon/` directory (or another source directory with `Fill/` and `Outline/` subdirectories) into the icon library and publish a new version.

## Steps

### 1. Locate new icons

Check the source directory (default: `Icon/` in project root). It must contain `Fill/` and `Outline/` subdirectories with `.svg` files.

```
Icon/
  Fill/
    icon-name.svg
  Outline/
    icon-name.svg
```

### 2. Validate SVG files

For EACH svg file, verify:

- **File is valid SVG**: must start with `<svg` and end with `</svg>`
- **Has viewBox attribute**: must contain `viewBox="0 0 64 64"` (64x64 is the standard size in this project)
- **Exactly one `<path>` element**: each SVG MUST contain exactly one `<path>` element. Multiple `<path>` elements will cause JSX compilation errors in generated components (the generate script inserts SVG content directly into JSX without wrapping). If an SVG has multiple paths, they must be merged into a single compound path (combine `d` attributes, use `fill-rule="evenodd"` if needed)
- **File naming**: filename must be lowercase kebab-case (e.g. `arrow-bar-right.svg`), matching regex `^[a-z][a-z0-9]*(-[a-z0-9]+)*\.svg$`
- **Fill/Outline parity**: every icon in `Fill/` should have a matching file in `Outline/` and vice versa. Warn if there's a mismatch (the generate script can handle fill-only icons, but it's better to have both)
- **No duplicates**: check that the icon name doesn't already exist in `packages/icons/svg/Fill/` or `packages/icons/svg/Outline/`

If any validation fails, report ALL errors to the user and STOP. Do not proceed until the user fixes the issues or explicitly asks to skip validation.

### 3. Copy SVGs to source directory

Copy validated files:
- `Icon/Fill/*.svg` → `packages/icons/svg/Fill/`
- `Icon/Outline/*.svg` → `packages/icons/svg/Outline/`

### 4. Generate icon components

Run the generation script:
```bash
cd packages/icons && yarn gen
```

This reads SVGs from `packages/icons/svg/{Fill,Outline}/`, generates React components in `packages/icons/lib/`, and updates `packages/icons/index.ts`.

### 5. Verify generation

- Check that new `.tsx` files were created in `packages/icons/lib/` for each new icon (name converted from kebab-case to PascalCase, e.g. `arrow-bar-right` → `ArrowBarRight.tsx`)
- Check that `packages/icons/index.ts` contains export lines for the new icons
- Read generated files and verify each has exactly one `<path>` in both `filled:` and `outline:` properties

### 6. Build the package

Build ALL packages (they share the same version):
```bash
cd packages/system && yarn build
cd packages/icons && yarn build
cd packages/core && yarn build
```

Verify all builds succeed without errors.

### 7. Bump version

**IMPORTANT**: Check the ACTUAL latest version on npm, not the local `package.json` — local versions may be outdated:
```bash
npm view @stage-ui/icons version --registry=https://registry.npmjs.org
```

For a patch bump (most common for adding icons), increment the last number from the npm version. For example: `0.7.63` → `0.7.64`.

All packages in the monorepo MUST share the same version number. Update the version in ALL of these files:
- `package.json` (root)
- `packages/system/package.json`
- `packages/icons/package.json`
- `packages/core/package.json`
- `build/system/package.json`
- `build/icons/package.json` (also update `@stage-ui/system` dependency version)
- `build/core/package.json` (also update `@stage-ui/system` and `@stage-ui/icons` dependency versions)

Alternatively, the `scripts/make.js` script can do this interactively, but it requires stdin so run it manually:
```bash
node scripts/make
```

### 8. Publish to npm

The npm account uses **Security Key (WebAuthn) for 2FA**, which requires an interactive browser prompt. This means `npm publish` CANNOT be run non-interactively from Claude — the user must run it themselves in a terminal.

Tell the user to run:
```bash
yarn pub
```

This publishes all three packages (core → icons → system) via `npm publish --registry=https://registry.npmjs.org`. Each package will trigger a browser-based Security Key confirmation.

If publishing only icons, the user can run:
```bash
cd build/icons && npm publish --registry=https://registry.npmjs.org
```

Confirm with the user BEFORE they publish — it's irreversible.

### 9. Clean up

After successful publish, ask the user if they want to:
- Delete the source `Icon/` directory
- Commit the changes to git

## Important notes

- The generate script (`packages/icons/scripts/generate.js`) iterates over `Fill/` directory as the primary source. If an icon only exists in `Outline/`, it will be SKIPPED.
- SVG processing removes `fill`, `stroke`, and `id` attributes, and converts `clip-rule`/`fill-rule` to React camelCase equivalents.
- The template is in `packages/icons/scripts/template.txt`.
- All packages in the monorepo share the same version number.
- The `build/` directory contains compiled output. Build package.json files should NOT have `scripts` key (the make script strips it).
- npm publish with Security Key 2FA requires interactive terminal — always delegate to the user.
