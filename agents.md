# baca-quran.id — Agent Instructions

Statically-prerendered SvelteKit app (adapter-static) with Svelte 5 runes,
Tailwind CSS v4, and full i18n (Indonesian + English).

## Quick reference

### Verification commands

| Command         | Purpose                           | Speed                          |
| --------------- | --------------------------------- | ------------------------------ |
| `pnpm check`    | svelte-check type pass            | fast                           |
| `pnpm lint`     | prettier + eslint                 | fast                           |
| `pnpm build:ci` | compile without sitemap/timestamp | **preferred for quick checks** |
| `pnpm build`    | full production build + sitemap   | slow (≈40 sitemap chunks)      |

**Always use `pnpm build:ci` for quick verification.** Only run `pnpm build`
when you specifically need to verify the sitemap or production timestamp.

### Svelte 5 rules

- Use `$state`, `$derived`, `$props`, `$bindable`, `$effect` — never `export let`, `$:`, or Svelte 4 stores
- Snippets replace slots: `{#snippet foo()}{/snippet}` / `{@render foo()}`
- Event handlers: `onclick={}`, `onchange={}` — never `on:click`, `on:change`

### Tailwind v4 design tokens

Only six semantic color tokens are valid. **Never** use hardcoded colors (`blue-500`, `teal-400`, etc.) for themed UI:

| Token                                       | Use for                     |
| ------------------------------------------- | --------------------------- |
| `bg-primary`                                | Page background             |
| `bg-secondary`                              | Cards / trays               |
| `text-foreground`                           | Body text                   |
| `text-foreground-secondary`                 | Muted / helper text         |
| `bg-control-accent` / `text-control-accent` | Accent fills, active states |
| `text-control-surface`                      | Text on accent backgrounds  |

Status colors (`green-*`, `red-*`, etc.) are acceptable only for semantic
state like a "done" indicator — not for branding or decoration.

### UI component inventory (`src/lib/ui/`)

Always use these before writing inline Tailwind:

- **Layout / structure**: `Card`, `CardShadow` (via `$lib/CardShadow.svelte`), `GradientCard`, `Banner`
- **Navigation**: `Tabs`, `Breadcrumb` (via `$lib/Breadcrumb.svelte`), `BottomSheet`
- **Buttons**: `Button`, `IconButton`
- **Form controls**: `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`
- **Feedback**: `Badge`, `Chip`
- **Progress / stepper**: `ProgressBar`, `ProgressDots`, `StepNav`, `CardStack`
- **Icons**: `src/lib/icons/` — accepts `size="xs|sm|md|lg|xl"` + `class`

Preferred `Button` props for stepper prev/next:
`variant="outline" color="secondary" size="sm"`

### i18n rules

- All user-visible strings go through `$t()` from `$lib/translations/store`
- Never use inline ternaries like `isEnglish ? 'x' : 'y'` for translated copy
- Add keys to **both** `src/lib/translations/id.json` and `en.json`
- `common.*` keys are reusable across pages (`common.previous`, `common.next`, `common.loading`, …)

### Stepper / carousel pattern

Pages with a card-by-card flow (adhkar, wirid, tahlil, iqra) share this pattern:

```svelte
<CardStack step={currentPlayIndex} {total} dir={slideDir}>
	<!-- active card content -->
</CardStack>

<ProgressBar {completed} {total} />

<!-- Nav row -->
<div class="flex items-center justify-between">
	<Button
		onClick={goPrev}
		variant="outline"
		color="secondary"
		size="sm"
		disabled={currentPlayIndex === 0}
	>
		← {$t('common.previous')}
	</Button>
	<Button
		onClick={goNext}
		variant="outline"
		color="secondary"
		size="sm"
		disabled={currentPlayIndex >= total - 1}
	>
		{$t('common.next')} →
	</Button>
</div>
```

### Adding a new page

Use the `/add-feature-page` skill — it covers route creation, prerender
registration, sitemap, SEO, breadcrumb, homepage entry, i18n, and
verification.

### Commit convention

```
feat(<scope>): short description

- bullet of key change

Refs #<issue>
```

Pre-commit hook runs prettier + eslint-fix on staged files automatically.
Do NOT use `--no-verify`.
