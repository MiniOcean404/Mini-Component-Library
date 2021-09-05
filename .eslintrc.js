module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:json/recommended',
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/prettier',
	],
	plugins: ['vue'],
	globals: {
		ga: true,
		chrome: true,
		__DEV__: true,
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		// 解决console.log报错，不添加的话需要window.console.log(error);
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error',
	},
};
