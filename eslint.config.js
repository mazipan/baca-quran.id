import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build/**',
			'.svelte-kit/**',
			'package/**',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'**/*.d.ts'
		]
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,ts,svelte}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020,
				extraFileExtensions: ['.svelte']
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020
			}
		},
		plugins: {
			'@typescript-eslint': typescript,
			svelte
		},
		rules: {
			...typescript.configs.recommended.rules,
			'svelte/no-at-html-tags': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-expressions': 'warn'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: typescriptParser
			}
		}
	},
	prettier
];
