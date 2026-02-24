import globals from 'globals'
import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
	// Base JavaScript recommended rules
	js.configs.recommended,

	// Official Astro plugin recommended rules
	...eslintPluginAstro.configs.recommended,

	// Base TypeScript recommended rules
	{
		files: ['**/*.ts', '**/*.tsx'],
		...tseslint.configs.recommended, // recommended config for TypeScript (without overrides)
	},

	// Environment and global variable definitions
	{
		languageOptions: {
			globals: {
				...globals.browser, // Standard browser globals (window, document, etc.)
				...globals.node, // Node.js globals (process, __dirname, etc.)
				...globals.builtin, // Core JavaScript built-ins (Promise, Map, etc.)
			},
			ecmaVersion: 'latest',
			sourceType: 'module', // Modern ESM module support
		},
	},

	// Global ignore patterns (equivalent to .eslintignore)
	{
		ignores: [
			'dist/*',
			'.astro/*',
			'node_modules/*',
			'public/*',
			'.idea',
			'.vscode',
		],
	},

	// Specific configuration for Astro components
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: eslintPluginAstro.parser,
			parserOptions: {
				parser: tsParser, // Secondary parser for TypeScript inside the frontmatter
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			},
		},
		rules: {
			// "astro/no-set-html-directive": "error"
		},
	},

	// General rules
	{
		rules: {
			'no-unused-vars': 'warn',
			semi: ['error', 'never'],
		},
	},
]
