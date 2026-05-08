---
name: add-feature-page
description: Add a new feature page/route to this SvelteKit + Svelte 5 app following baca-quran.id conventions. Use whenever the user asks to add a new page, new route, new feature with its own URL (e.g. "/kalender-hijriyah", "/khatam-tracker"), or expose a feature through the navigation drawer. Covers route creation, prerender registration, sitemap, SEO, breadcrumb, drawer, i18n, and verification.
---

# Add a feature page

This repo is a statically-prerendered SvelteKit app (adapter-static).
Adding a new page touches more than just `+page.svelte` — miss any of
these and the page will silently be missing from prerender, sitemap, or
nav. Follow every step.

## 1. Create the route

```text
src/routes/<slug>/+page.svelte
```

- Slug is lowercase, hyphenated, Indonesian where the rest of the
  routes already are (e.g. `jadwal-sholat`, `pencatat-ibadah`,
  `kalender-hijriyah`).
- **Do not** add a `+page.ts`. `src/routes/+layout.ts` already sets
  `prerender = true` and `trailingSlash = 'always'` globally.

Skeleton:

```svelte
<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	const META_TITLE = `<Indonesian title> | ${TITLE_CONSTANTS.TITLE_META}`;
	const META_DESC = '<Indonesian description, mention free, no ads, no analytics>';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}<slug>/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		🌙 {isEnglish ? 'English title' : 'Judul Indonesia'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: isEnglish ? '🏠 Home' : '🏠 Beranda', href: '/' },
			{ text: isEnglish ? '<English>' : '<Indonesian>', href: '/<slug>/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-6">
	<!-- feature content -->
</div>
```

Use Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`). **Never**
use `export let` or `$:`.

## 2. Register the URL in `scripts/routes.js`

This single array drives **both** the build's `prerender.entries`
(via `svelte.config.js`) **and** the sitemap (`scripts/makeSitemap.js`).
Skipping this is the single most common mistake when adding a page.

Open `scripts/routes.js` and insert the new path into `staticUrls`,
keeping the existing alphabetical-ish grouping:

```js
export const staticUrls = [
	// ...existing entries
	'/<slug>'
	// ...
];
```

No leading `/` is fine — match the existing style (no trailing slash in
this list; the sitemap and prerender machinery add it).

## 3. Add SEO constants (optional but preferred)

For consistency with other pages, add to `src/lib/constants.ts`:

```ts
export const META_TITLE_<UPPER_SLUG> = `<Title> | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_<UPPER_SLUG> = `<Description>`;
```

…then import and use them in `+page.svelte` instead of inline strings.

## 4. Add a drawer menu entry (if user-facing)

Edit `src/lib/DrawerMenus.svelte`:

```svelte
<li class="sidebar__item">
	<a
		data-sveltekit-reload
		href="/<slug>/"
		class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
	>
		<<Icon> />
		{$t('navigation.<key>')}
	</a>
</li>
```

If no existing icon in `src/lib/icons/` fits, add one by copying
`HashtagIcon.svelte` and swapping the `<path>` (Heroicons paths work
well). Keep the `size` and `class` props.

## 5. Add translations (BOTH files)

Open `src/lib/translations/id.json` AND `src/lib/translations/en.json`.

Add:

```json
"navigation": {
	// ...existing
	"<key>": "<Indonesian / English>"
},
"<feature>": {
	"title": "...",
	"subtitle": "...",
	// any other strings used by the page
}
```

Indonesian is the fallback locale; missing keys in `en.json` will fall
through to `id.json`. Still add both for cleanliness.

In components: `import { t } from '$lib/translations/store'` and use
`{$t('feature.title')}` (reactive). For non-component code, import
from `$lib/translations` instead.

## 6. Verify

Run all three from the repo root with Node 24+:

```bash
pnpm check        # 0 errors expected
pnpm lint         # 0 errors expected
pnpm build:ci     # must succeed
```

Then confirm the page is actually in the build:

```bash
ls build/<slug>/index.html
pnpm run make:sitemap
grep <slug> build/sitemaps/static.xml
```

If any are missing → step 2 was skipped.

## 7. Manual UI check

Skip this only if the page is content-only (no interactivity).

```bash
pnpm dev
```

- Visit `http://localhost:5173/<slug>/`.
- Toggle the language (id ↔ en) — every visible string must switch.
- Toggle theme — text must remain readable on every theme.
- Resize to a narrow viewport (~320 px) — no horizontal scroll, no
  layout breakage.
- Click the drawer entry — it must navigate correctly.
- Use the Breadcrumb to navigate back to `/`.

If you cannot run the dev server (e.g. headless agent without a
browser), state explicitly that the UI was not visually verified.

## 8. Commit

Conventional commit, scoped to the feature:

```text
feat(<scope>): add /<slug> page

<1–3 sentence description of what and why>

- Bullet of major change
- Bullet of major change

Refs #<issue>
```

The husky pre-commit hook runs `lint-staged` (prettier + eslint --fix
on staged files). If it modifies files, re-stage and re-commit. **Do
not** use `--no-verify`.
