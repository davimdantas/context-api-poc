module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', 'jest'],
	rules: {
		'import/no-unresolved': 'off',
		'no-unused-vars': 'off',
		'prettier/prettier': 'error',
		'react/prop-types': 0,
	},
}
