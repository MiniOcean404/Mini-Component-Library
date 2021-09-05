module.exports = {
	presets: ['@babel/preset-typescript', ['@babel/preset-env', { targets: { node: 'current' } }]],
	plugins: [
		'@vue/babel-plugin-jsx',
		'syntax-dynamic-import',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
	],
	env: {
		utils: {
			ignore: ['**/*.test.ts', '**/*.spec.ts'],
			presets: [
				[
					'env',
					{
						loose: true,
						modules: 'commonjs',
						targets: {
							browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
						},
					},
				],
			],
			plugins: [
				[
					'module-resolver',
					{
						root: ['element-ui'],
						alias: {
							'element-ui/src': 'element-ui/lib',
						},
					},
				],
			],
		},
		test: {
			plugins: ['istanbul'],
			presets: [['env', { targets: { node: 'current' } }]],
		},
		esm: {
			presets: [['@babel/preset-env', { modules: false }]],
		},
	},
};
