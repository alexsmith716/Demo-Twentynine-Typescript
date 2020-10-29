module.exports = {
	env: {
		browser: true,
		node: true,
		jest: true
	},

	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: true,
		ecmaVersion: 9,
		ecmaFeatures: {
			jsx: true
		}
	},

	globals: {
		__DEVELOPMENT__: true,
		__CLIENT__: true,
		__SERVER__: true,
		__DISABLE_SSR__: true
	},

	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},

	overrides: [
		{
			files: ['*.js'],
			extends: [
				'eslint:recommended',
				'plugin:prettier/recommended',
				'plugin:react/recommended'
			],
			plugins: [
				'react',
				'react-hooks'
			],
			parser: '@babel/eslint-parser',
			rules: {
				'no-unused-vars': 0,
				'react-hooks/rules-of-hooks': 2,
				'react-hooks/exhaustive-deps': 1
			}
		},
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'eslint:recommended',
				'plugin:prettier/recommended',
				'prettier/@typescript-eslint',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:react/recommended'
			],
			plugins: [
				'@typescript-eslint',
				'react',
				'react-hooks'
			],
			parser: '@typescript-eslint/parser',
			rules: {
				'@typescript-eslint/no-empty-function': 2,
				'@typescript-eslint/no-use-before-define': 2,
				'@typescript-eslint/explicit-function-return-type': 2,
				'@typescript-eslint/no-explicit-any': 2,
				'react/display-name': 2,
				'react/prop-types': 0,
				'react-hooks/rules-of-hooks': 2,
				'react-hooks/exhaustive-deps': 1
			}
		}
	]
};
