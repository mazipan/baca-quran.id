# AGENTS.md

Guide for AI coding agents (Claude Code, Cursor, Codex, Aider, etc.) working
on this repository. Human contributors will also find it useful.

## 1. Project at a glance

**Baca-Quran.id** is a free, ad-free, analytics-free Qur'an reader for the
web (https://www.baca-quran.id). SvelteKit single-page app, statically
prerendered, deployed to GitHub Pages.

### Non-negotiable philosophy

- **Local-first.** State lives in `localStorage` / `IndexedDB`. No backend,
  no DB, no server.
- **No tracking, no ads, no analytics.** Don't add any.
- **Optional opt-in Firebase sync** for the existing flow only — don't
  wire new features through it.
- **Offline-friendly.** No new third-party HTTP calls without a strong
  reason. Prefer pure-JS solutions and shipped JSON over APIs.
- **No new dependencies** unless a feature is impossible without them.
  Justify additions in the PR description.

If an idea contradicts the above, push back or scope it down.

## 2. Tech stack

| Area          | Choice                                                                       |
| ------------- | ---------------------------------------------------------------------------- |
| Framework     | SvelteKit 2 + **Svelte 5 runes** (`$state`, `$derived`, `$props`, `$effect`) |
| Language      | TypeScript                                                                   |
| Styling       | Tailwind CSS v4 (no `tailwind.config.js`; uses `@tailwindcss/postcss`)       |
| Adapter       | `@sveltejs/adapter-static` — everything prerendered                          |
| Dates         | `dayjs` (Gregorian); `Intl.DateTimeFormat` (Hijri)                           |
| Optional sync | `firebase` — opt-in only                                                     |
| Tests         | None. Verification is `check` + `lint` + `build:ci` + manual.                |
| Package mgr   | **pnpm 10.33+**                                                              |
| Node          | **24.14+** (see `.nvmrc`)                                                    |

**Svelte 5 reminder:** use runes, not `let` reactivity / `$:` blocks.
Component props go through `$props()`, not `export let`.

## 3. Setup

```bash
# Use the pinned Node version
nvm install   # reads .nvmrc → 24.14.1
nvm use

# Install
pnpm install --frozen-lockfile

# Dev server
pnpm dev          # http://localhost:5173

# Verify (run all three before opening a PR)
pnpm check        # svelte-check + tsc
pnpm lint         # prettier --check + eslint
pnpm build:ci     # svelte-kit build (matches CI)
```

If `pnpm` complains `Unsupported environment` it means Node is < 24.14.
`nvm use` first.

The husky pre-commit hook runs `lint-staged` (prettier + eslint --fix on
the staged files). If it fails, fix the underlying issue and re-stage —
don't bypass with `--no-verify`.

## 4. Repository layout

```
src/
  app.css                  Tailwind entry
  app.html                 HTML shell, theme bootstrap
  data/                    Static, shipped JSON / TS data
    surah-data/            Per-surah Arabic + translations
    surah-info/            Per-surah metadata
    daily-doa.ts           Daily prayers
    asmaul-husna.ts
    ayah-of-the-day.ts     Themed seed pool
    islamic-events.ts      Hijri-date events
  lib/                     Reusable Svelte components, stores, utils
    icons/                 SVG icon components (one file each, consistent props)
    translations/          i18n: id.json + en.json + reactive `t` store
    utils/                 Pure-TS helpers (no Svelte)
    ui/                    Generic UI primitives (Button, etc.)
    views/                 Page-level view composites
    *.svelte               Reusable feature components
  routes/                  SvelteKit file-based routes
    +layout.svelte
    +layout.ts             prerender = true; trailingSlash = 'always'
    +page.svelte           Home
    <feature>/+page.svelte ...one folder per feature page
  store/                   Cross-page Svelte stores (state + persistence)
  service-worker.js
scripts/
  routes.js                Static URL list — drives BOTH prerender entries AND sitemap
  makeSitemap.js
  makeTimestamp.js
  verseCountPerSurah.js
.github/
  workflows/ci.yml         Runs on PR: lint + check + build:ci
  workflows/deploy.yml     Runs on push to master: build + push to gh-pages repo
  ISSUE_TEMPLATE/          bug_report.md, feature_request.md
```

### Path aliases (configured in `svelte.config.js`)

| Alias    | Maps to     | Use for                          |
| -------- | ----------- | -------------------------------- |
| `$lib`   | `src/lib`   | Components, utils                |
| `$data`  | `src/data`  | Static data files                |
| `$store` | `src/store` | Cross-page stores                |
| `$app/*` | SvelteKit   | `$app/stores`, `$app/navigation` |

## 5. Conventions cheat sheet

### Adding a new page

1. **Create the route**

   ```text
   src/routes/<slug>/+page.svelte
   ```

   `+page.ts` is **not required** — `src/routes/+layout.ts` already sets
   `prerender = true` and `trailingSlash = 'always'` globally.

2. **Register the URL** in `scripts/routes.js → staticUrls`. This single
   array drives both:
   - prerender entries in `svelte.config.js`
   - the sitemap in `scripts/makeSitemap.js`

   Forgetting this means your page won't be in the static build's entry
   list nor in `sitemap.xml`.

3. **SEO**: include `<MetaTag>` from `$lib/MetaTag.svelte` in
   `<svelte:head>`. Add a `META_TITLE_<X>` and `META_DESC_<X>` constant
   in `src/lib/constants.ts`.

4. **Breadcrumb**: render `<Breadcrumb items={...} />` from `$lib`.

5. **Drawer entry** (if user-facing nav): add a list item in
   `src/lib/DrawerMenus.svelte` with an icon from `src/lib/icons/`. If
   no icon fits, add a new one following the `HashtagIcon.svelte`
   pattern (props: `size`, `class`; uses `CLASS_BY_SIZE`).

6. **Translations**: add a `navigation.<key>` string and a feature
   namespace (e.g. `myFeature.title`) to **both** `id.json` and
   `en.json`. Indonesian is the fallback locale.

7. **Verify**: `pnpm check && pnpm lint && pnpm build:ci`. Confirm
   `build/<slug>/index.html` exists. Run `pnpm run make:sitemap` and
   grep `build/sitemaps/static.xml` for the new URL.

### Adding a new feature (general)

- **Storage**: persist with `localStorage` (see `src/store/index.ts`
  patterns and `LogPrayer*` types). Key with stable, namespaced strings.
- **Pure logic** → `src/lib/utils/<name>.ts`. No Svelte imports.
- **Static data** → `src/data/<name>.ts`. Type the export, freeze with
  `as const` or `readonly`.
- **Components** → `src/lib/<Name>.svelte`. Use Svelte 5 runes.
- **Cross-page state** → `src/store/<name>.ts`.
- **i18n**: every user-visible string goes through `t('namespace.key')`.

### i18n (`src/lib/translations/`)

- **Reactive in components**: `import { t } from '$lib/translations/store'`
  then `{$t('namespace.key')}`. Updates on language change.
- **Imperative**: `import { t } from '$lib/translations'` then `t('...')`.
  Snapshot at call time — only use outside reactive contexts.
- Add the same key to **both** `id.json` and `en.json`. Missing keys
  fall back to Indonesian, then to the literal key.
- Interpolation: `{{name}}` placeholders, e.g.
  `t('common.welcome', { name: 'Irfan' })`.

### Theme

- Themes are listed in `src/lib/constants.ts → THEMES`.
- The active theme is in the `activeTheme` writable store
  (`src/store/index.ts`) and bootstrapped from `window.__theme` in
  `app.html`.
- Use `$activeTheme` in components; switch via
  `window.__setActiveTheme(name)`.

### Icons

- Live in `src/lib/icons/`. One Svelte file per icon.
- Pattern: copy `HashtagIcon.svelte`, swap the `<path>`. Keep the
  `size` + `class` props and `CLASS_BY_SIZE` import.
- Prefer Heroicons SVG paths for consistency.

### Date / Hijri

- Gregorian formatting: `dayjs` via `src/lib/utils/date.ts`.
- Hijri (Umm al-Qura): `src/lib/utils/hijri.ts` —
  `getHijriDate`, `formatHijriDate`, `hijriToGregorian`,
  `getDaysInHijriMonth`, `shiftHijriMonth`, plus
  `HIJRI_MONTHS_ID/EN/AR` constants.
- Islamic events: `src/data/islamic-events.ts` with
  `getEventsForHijriDate(month, day)`.
- **Note**: Umm al-Qura can differ ±1 day from Indonesian rukyat
  (Kemenag) dates around Idul Fitri / Idul Adha — surface this in UI
  copy when relevant.

## 6. Workflow: issue → PR → merge → deploy

### 6.1 Pick or open an issue

- Browse https://github.com/mazipan/baca-quran.id/issues for `good
first issue`, `enhancement`, or `bug`.
- For new ideas, use the templates in
  `.github/ISSUE_TEMPLATE/`. Issue #404 is the local-first feature
  brainstorm — tie new ideas back to it where applicable.
- Comment on the issue if it's substantial — confirm scope and approach
  before coding. For a multi-phase feature, split phases into their own
  issues (see #408 / #409 for an example).

### 6.2 Branch

Branch from `master`. Naming convention used in this repo:

```bash
git checkout master
git pull origin master
git checkout -b claude/<short-slug>-<issue-number>
# examples:
#   claude/hijri-calendar-page-409
#   claude/streak-heatmap-411
```

Other prefixes (`feat/`, `fix/`) are also fine. Whatever you pick, keep
it lowercase, hyphenated, and reference the issue number when there is
one.

### 6.3 Implement

- Stay within scope. Don't refactor surrounding files unrelated to the
  task.
- Don't add backwards-compatibility shims, unused exports, or "just in
  case" abstractions.
- Don't add comments that restate the code. Add a comment only when the
  _why_ is non-obvious.
- Update `id.json` AND `en.json` together when adding strings.
- For UI: open the page in `pnpm dev`, exercise it manually. Don't
  claim a UI task is done from a clean `pnpm check` alone.

### 6.4 Verify (mandatory before commit)

```bash
pnpm check        # 0 errors expected; pre-existing warnings can stay
pnpm lint         # 0 errors; ignore pre-existing warnings
pnpm build:ci     # must succeed
```

For new pages, also confirm:

```bash
ls build/<slug>/index.html
pnpm run make:sitemap
grep <slug> build/sitemaps/static.xml
```

There is no automated test suite. Be deliberate about manual
verification: think through edge cases, test in both `id` and `en`
locales, test theme switching, test on a narrow viewport.

### 6.5 Commit

- Conventional-commit style is used in master: `feat(scope): ...`,
  `fix(scope): ...`, `chore(deps): ...`, `ci(deps): ...`, `docs: ...`.
- Subject line ≤ 70 chars. Body explains _why_ and references issues
  with `Refs #N` or `Closes #N`.
- The husky pre-commit hook runs `lint-staged`. If it modifies files,
  re-stage and commit. **Do not** use `--no-verify` or `HUSKY=0`.
- Never `git commit --amend` after a hook failure — the previous commit
  may not be what you think it is. Make a new commit.
- Never `git add -A` blindly. Stage explicit paths.

### 6.6 Push and open a PR

```bash
git push -u origin <branch-name>
```

Then open a PR via the GitHub UI or `gh pr create`. PR body template:

```markdown
## Summary

- Bullet list of what changed and why.

## Verification

- [ ] `pnpm check` — 0 errors
- [ ] `pnpm lint` — 0 errors
- [ ] `pnpm build:ci` — green
- [ ] Manually tested in `id` and `en` locales
- [ ] (For UI) Tested on narrow viewport

Refs #<issue>
```

CI (`.github/workflows/ci.yml`) runs `lint`, `check`, `build:ci` on
every PR. All three must pass before merge.

**Do not** open a PR unless the user explicitly asks for one.

### 6.7 Merge and deploy

- The repo owner squash-merges into `master`.
- `.github/workflows/deploy.yml` triggers on master push and publishes
  to GitHub Pages. Nothing for the contributor to do.

## 7. CI / GitHub Actions

| Workflow                | Trigger        | Does                                         |
| ----------------------- | -------------- | -------------------------------------------- |
| `ci.yml`                | PR open / sync | lint, check, build:ci                        |
| `deploy.yml`            | push to master | build, push static site to Pages             |
| `dependabot.yml`        | scheduled      | dep updates                                  |
| `rotate-ayah-seed.yml`  | scheduled      | rotates `ayah-of-the-day-seeds.json`         |
| `switch-ayah-theme.yml` | scheduled      | switches `ayah-of-the-day-config.json` theme |

## 8. Anti-patterns to avoid

- ❌ Adding a backend, REST endpoint, or external API call for state
  that could live in `localStorage`.
- ❌ Adding analytics, tracking, ads, or third-party scripts.
- ❌ Adding npm dependencies for things the platform / `Intl` already
  does (date math, formatting).
- ❌ Using `export let` (Svelte 4) — this codebase is on Svelte 5
  runes.
- ❌ Hard-coded user-visible strings — must go through `t()`.
- ❌ Touching the deploy workflow or `mazipan-quran-offline/*` — only
  the maintainer publishes.
- ❌ Skipping git hooks (`--no-verify`, `--no-gpg-sign`, `HUSKY=0`, `HUSKY_SKIP_HOOKS=1`). If the hook fails due to an environment constraint (e.g. Node version mismatch in the hook runner), fix the environment — don't bypass the hook.
- ❌ `git push --force` to a branch someone else may have based work
  on. Force-pushing your own feature branch is fine when needed.
- ❌ Renaming or deleting routes without first checking
  `scripts/routes.js`, the sitemap, and any inbound links / drawer
  entries.

## 9. When unsure

- Read the matching existing file. The first PR for a Hijri feature
  (#410) and the calendar page (#411 series) are both worth skimming
  for the "feature page" pattern.
- Read `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`.
- Comment on the issue and ask. Better to clarify scope before writing
  code than to get a "not what I wanted" review.
