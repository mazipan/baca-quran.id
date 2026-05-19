# Translation System

This directory contains the translation system for the Baca Quran application. It provides a reactive, type-safe way to manage multiple languages.

## Structure

```
translations/
├── index.ts          # Main translation utilities (imperative)
├── store.ts          # Svelte stores for reactive translations
├── id.json           # Indonesian translations
├── en.json           # English translations
└── README.md         # This file
```

---

## Usage

### Reactive template use (`$t`)

For text rendered inside Svelte templates, import the store version and use `$t`:

```svelte
<script>
	import { t } from '$lib/translations/store';
</script>

<p>{$t('common.loading')}</p><h1>{$t('surah.title')}</h1>
```

### Imperative use inside event handlers and async functions

When calling `t()` inside a `<script>` block function (event handler, async callback, etc.), import the **imperative** variant from the index file. It reads the current language via `get(languageStore)` at call time:

```svelte
<script>
	import { t as translate } from '$lib/translations';

	async function handleAction() {
		// Correct: reads language at the moment the function runs
		toast.show({ message: translate('sync.uploadSuccess'), type: 'success' });
	}
</script>
```

> **Why two variants?**  
> `$t` in a template is an auto-subscribed Svelte store that re-renders when the language changes.  
> Inside a function body, `$t` is not available — use the imperative `translate(...)` instead.

If a component needs `$t` in the template **and** `translate()` in handlers, import both:

```svelte
<script>
	import { t } from '$lib/translations/store'; // for template
	import { t as translate } from '$lib/translations'; // for handlers
</script>
```

### With parameters

Use `{{variableName}}` in the JSON value and pass a params object:

```svelte
<p>{$t('common.welcome', { name: 'Ahmad' })}</p>
```

```json
{ "common": { "welcome": "Welcome, {{name}}!" } }
```

### Namespace stores (bulk access)

```svelte
<script>
	import { createNamespaceStore } from '$lib/translations/store';
	const common = createNamespaceStore('common');
</script>

<p>{$common.loading}</p>
```

---

## Namespace conventions

| Namespace          | Use for                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| `common.*`         | Generic UI words reused across many pages (`close`, `back`, `save`, `unknownError`, `backToHome`, …) |
| `navigation.*`     | Drawer/menu link labels (`home`, `allSurah`, `prayerTime`, `worshipTracker`, …)                      |
| `surah.*`          | Quran reading page copy (`shareVerse`, `shareTranslation`, `listAllSurahs`, …)                       |
| `settings.*`       | Settings page labels (`title`, `featureSettings`, `chooseQari`, …)                                   |
| `aria.*`           | `aria-label` values on interactive controls (`toggleDrawer`, `switchTheme`, `changeLanguage`)        |
| `pages.*`          | Standalone page titles that don't fit elsewhere (`termsOfService`, `privacyPolicy`)                  |
| `worshipTracker.*` | Worship-tracker–specific copy                                                                        |
| `prayerSchedule.*` | Prayer-schedule–specific copy                                                                        |
| `sync.*`           | Sync-page toast messages                                                                             |
| `ui.*`             | Miscellaneous UI strings not covered above                                                           |

**Reuse before adding.** Before creating a new key, search both JSON files for an existing string that fits. `navigation.home`, `common.close`, `settings.translation`, and `surah.share*` keys are commonly reusable.

---

## Adding or updating translation keys

1. **Always edit both `id.json` and `en.json` at the same time.** A key present in one file but missing in the other will silently fall back to Indonesian, which is hard to notice during review.

2. **Pick the right namespace.** See the table above. If the key belongs to an existing namespace, extend it. Only add a new top-level namespace when no existing one fits.

3. **Use `camelCase` key names.** Examples: `featureSettings`, `noRecapData`, `locationSuccess`.

4. **Interpolation syntax** is `{{variableName}}` (double curly braces):

   ```json
   { "sync": { "loginSuccess": "Welcome {{name}}!" } }
   ```

5. **Avoid duplicating strings across namespaces.** If a word like "Close" / "Tutup" already exists at `common.close`, reference that key — don't add `modal.close` with the same text.

---

## Replacing hardcoded locale ternaries

The pattern below **bypasses the translation system** and should not be used:

```svelte
<!-- ❌ Do not do this -->
{current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Settings' : 'Setelan'}
```

Replace it with:

```svelte
<!-- ✅ Do this -->
{$t('settings.title')}
```

When removing a ternary, also check whether the surrounding `LANGUAGE_OPTIONS` / `languageStore` / `current` bindings are still needed elsewhere in the file. Remove them if they are now unused to avoid lint warnings.

---

## Adding new languages

1. Create a new JSON file (e.g., `ar.json` for Arabic).
2. Add the locale to `LANGUAGE_OPTIONS` in `checkLanguaguage.ts`.
3. Import and register it in `translations` object in `index.ts`.

---

## Verification checklist

Run these checks after any translation change before opening a PR:

### 1. Both JSON files updated

```bash
# Confirm the key exists in both files
grep -n "yourNewKey" src/lib/translations/id.json src/lib/translations/en.json
```

### 2. No hardcoded locale ternaries remain

```bash
# Should return no output in the files you changed
grep -rn "LANGUAGE_OPTIONS.ENGLISH.locale ?" src/routes/ src/lib/
```

### 3. No unused imports

```bash
# Check files you modified for leftover LANGUAGE_OPTIONS / languageStore / current
grep -n "LANGUAGE_OPTIONS\|languageStore\|current ==" src/routes/YOUR_FILE.svelte
```

### 4. Prettier formatting

```bash
pnpm lint
# or directly:
./node_modules/.bin/prettier --check "src/**/*.svelte" "src/**/*.json"
```

### 5. Type check

```bash
pnpm check
```

### 6. Manual smoke test

Switch the language using the globe icon and confirm:

- All changed strings update without a page reload.
- Toast messages (if any) appear in the selected language on next trigger.

---

## Type safety

Translation keys are validated at compile time. Missing keys fall back to Indonesian (the default language). Run `pnpm check` to catch missing or mis-typed keys early.
