# Translation System

This directory contains the translation system for the Baca Quran application. It provides a reactive, type-safe way to manage multiple languages.

## Structure

```
translations/
├── index.ts          # Main translation utilities
├── store.ts          # Svelte stores for reactive translations
├── id.json           # Indonesian translations
├── en.json           # English translations
└── README.md         # This file
```

## Usage

### Basic Translation

```svelte
<script>
	import { t } from './translations/store';
</script>

<p>{$t('common.loading')}</p><p>{$t('surah.title')}</p>
```

### With Parameters

```svelte
<script>
	import { t } from './translations/store';
</script>

<p>{$t('common.welcome', { name: 'John' })}</p>
```

### Namespace Stores

```svelte
<script>
	import { createNamespaceStore } from './translations/store';

	const commonTranslations = createNamespaceStore('common');
	const navigationTranslations = createNamespaceStore('navigation');
</script>

<p>{$commonTranslations.loading}</p><p>{$navigationTranslations.allSurah}</p>
```

### Direct Function Usage

```typescript
import { t } from './translations/index';

// In a function or component
const loadingText = t('common.loading');
const welcomeText = t('common.welcome', { name: 'User' });
```

## Adding New Languages

1. Create a new JSON file (e.g., `ar.json` for Arabic)
2. Add the language to `LANGUAGE_OPTIONS` in `checkLanguaguage.ts`
3. Import and add the translation to the `translations` object in `index.ts`

## Translation File Structure

Each translation file should follow this structure:

```json
{
	"common": {
		"loading": "Loading...",
		"error": "An error occurred"
	},
	"navigation": {
		"home": "Home",
		"about": "About"
	}
}
```

## String Interpolation

Use `{{variableName}}` syntax for parameters:

```json
{
	"common": {
		"welcome": "Welcome, {{name}}!"
	}
}
```

## Best Practices

1. Use nested objects to organize translations by feature
2. Keep translation keys descriptive and consistent
3. Always provide fallbacks for missing translations
4. Use TypeScript for better type safety
5. Test translations in all supported languages

## Type Safety

The translation system is fully typed. Translation keys are validated at compile time, and missing translations will fall back to Indonesian (the default language).
