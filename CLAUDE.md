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

## Git

- Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, etc.
