---
name: add-translation-key
description: Add or update an i18n translation key in baca-quran.id. Use whenever the user asks to add a translation, change a label, add a new string for a UI element, or fix Indonesian/English wording. Ensures both id.json and en.json stay in sync and the key is consumed reactively.
---

# Add a translation key

baca-quran.id ships two locale files. Indonesian (`id`) is the fallback
— if a key is missing in `en.json`, the runtime falls through to
`id.json`, then to the literal key. That fallback is silent, so it's
easy to ship English UI with Indonesian text leaking through.

## 1. Decide on namespace + key

Open `src/lib/translations/id.json` and find the existing namespace
that fits, e.g.:

- `common.*` — generic UI verbs (save, cancel, loading, …)
- `navigation.*` — drawer / menu labels
- `surah.*` — Qur'an reader strings
- `prayer.*` — prayer-time strings
- `settings.*` — the settings page
- `<feature>.*` — feature-specific (e.g. `hijri.*`, `ayahOfTheDay.*`)

If none fits, create a new namespace named after the feature (camelCase).

Key naming: `camelCase`, descriptive but short. Avoid sentence-shaped
keys — they break when copy is tweaked.

## 2. Add to BOTH files

### `src/lib/translations/id.json`

```json
"<namespace>": {
	"<key>": "<Indonesian text>"
}
```

### `src/lib/translations/en.json`

```json
"<namespace>": {
	"<key>": "<English text>"
}
```

Same path, both files. Both are valid JSON — no trailing commas, no
JSONC comments.

If the string has variables, use `{{name}}` interpolation:

```json
"welcome": "Selamat datang, {{name}}!"
```

Then call: `t('common.welcome', { name: 'Irfan' })`.

## 3. Use it in a component

**Reactive (preferred for UI)** — updates when the user switches
language without a reload:

```svelte
<script lang="ts">
	import { t } from '$lib/translations/store';
</script>

<h1>{$t('namespace.key')}</h1>
```

**Imperative (one-shot, non-reactive)** — for module-init code,
constants, etc. Won't update on language change:

```ts
import { t } from '$lib/translations';

const TITLE = t('namespace.key');
```

For dynamic text that depends on locale at render time, prefer
deriving from `$languageStore` directly when you need per-render
branching that the `t` function alone can't express:

```svelte
<script lang="ts">
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);
</script>
```

## 4. Verify

```bash
pnpm check     # JSON parse + svelte-check; catches typos in $t() keys
pnpm lint      # prettier reformats id.json/en.json on save
```

Manual: `pnpm dev`, toggle the language switcher in the header,
confirm both versions render correctly. If switching to English and
the string still appears in Indonesian, the `en.json` entry is missing
or misnested — check the path with the dot-notation key.

## 5. Anti-patterns

- ❌ Adding the key to only one file. Always both.
- ❌ Hard-coding the string in JSX/Svelte and translating later.
- ❌ Concatenating partial strings in code (`"Halo, " + name`). Use
  `{{name}}` interpolation in the locale value.
- ❌ Reusing a key with different meanings across screens. Make a new
  one — keys are cheap.
- ❌ Putting locale-dependent UI logic in `src/lib/utils/*` modules
  by importing the `t` function at module load. Always call `t()`
  inside the consumer at use-time, or accept a translated string as a
  parameter.
