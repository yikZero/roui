# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ROUI is a React UI component library built on shadcn/ui (base-nova style) with @base-ui/react headless primitives. Components are distributed via a registry system at https://ui.yikzero.com.

## Commands

- **Dev server:** `bun run dev`
- **Build:** `bun run build` (runs `shadcn build && tsc -b && vite build`)
- **Registry build:** `bun run registry:build`
- **Lint:** `bun run lint`
- **Format:** `bun run format`
- **Typecheck:** `bun run typecheck`

Always use `bun` as the package manager (not npm/pnpm).

## Code Style

- No semicolons
- Double quotes for strings
- 2-space indentation
- Tailwind classes are auto-sorted by prettier-plugin-tailwindcss (functions: `cn`, `cva`)
- Use `cn()` from `@/lib/utils` for composing class names (tailwind-merge + clsx)
- Use `class-variance-authority` (`cva`) for component variants

## Component Conventions

- UI components live in `src/components/ui/` and have registry copies in `registry/new-york/ui/`
- Components wrap `@base-ui/react` headless primitives for accessibility
- Props extend from Base UI primitive types
- Use path alias `@/` (maps to `./src/`)
- Icon library: lucide-react

## Testing

- **Smoke tests:** `bun run test` (52 tests, vitest + jsdom)
- **Visual regression:** `bun run test:visual` (8 playwright screenshot comparisons)
- **Update baselines:** `bun run test:visual:update`

## Consuming ROUI in Other Projects

### 1. Configure registry in `components.json`

```json
{
  "registries": {
    "@roui": "https://ui.yikzero.com/r"
  }
}
```

### 2. Install theme + components

```bash
npx shadcn add @roui/theme
npx shadcn add @roui/button @roui/card @roui/dialog
npx shadcn add @roui/use-debounce
```

### 3. MCP Server (AI-assisted development)

Add to your IDE's MCP config (Cursor, Claude Code, etc.):

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

The MCP server reads `components.json` registries automatically. AI can then discover and install ROUI components by name.

## Git

- Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, etc.
