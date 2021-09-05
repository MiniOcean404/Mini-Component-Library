import pkg from '../package.json';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue'; //支持Vue单文件打包
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript';

import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import { entry, createFileName } from './paths.ts';

const name = 'MiniOcean';
const banner = () => {
	return `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} kkb
 * @license MIT
 */`;
};

function mergeConfig(baseConfig, everyoneConfig) {
	const config = Object.assign({}, baseConfig);
	// plugin
	if (everyoneConfig.plugins) {
		baseConfig.plugins.push(...everyoneConfig.plugins);
	}
	// output
	config.output = Object.assign({}, baseConfig.output, everyoneConfig.output);
	return config;
}

function mergeAllConfigs() {
	return configs.map((c) => {
		return mergeConfig(baseConfig(), c);
	});
}

const baseConfig = () => {
	return {
		input: entry,
		external: ['vue'],
		plugins: [
			peerDepsExternal(),
			typescript(),
			scss(),
			vue({
				target: 'browser',
				css: true,
			}),
			babel({
				babelHelpers: 'bundled',
			}),
			resolve({
				extensions: ['.vue', '.jsx', '.js', '.tsx', '.ts'],
			}),
			commonjs(),
			json(),
			terser(),
		],
		output: {
			sourcemap: true,
			banner: banner(),
			externalLiveBindings: false,
			exports: 'auto',
			globals: {
				vue: 'Vue',
			},
		},
	};
};

// es-bundle
const esBundleConfig = {
	plugins: [
		replace({
			__DEV__: `(process.env.NODE_ENV !== 'production')`,
			preventAssignment: true,
		}),
	],
	output: {
		file: createFileName('esm-bundler'),
		format: 'es',
	},
};

// es-browser
const esBrowserConfig = {
	plugins: [
		replace({
			preventAssignment: true,
			__DEV__: true,
		}),
	],
	output: {
		file: createFileName('esm-browser'),
		format: 'es',
	},
};

// es-browser.prod
const esBrowserProdConfig = {
	plugins: [
		terser(),
		replace({
			preventAssignment: true,
			__DEV__: false,
		}),
	],
	output: {
		file: createFileName('esm-browser.prod'),
		format: 'es',
	},
};

// cjs
const cjsConfig = {
	plugins: [
		replace({
			preventAssignment: true,
			__DEV__: true,
		}),
	],
	output: {
		file: createFileName('cjs'),
		format: 'cjs',
		exports: 'auto',
	},
};

// cjs.prod
const cjsProdConfig = {
	plugins: [
		terser(),
		replace({
			preventAssignment: true,
			__DEV__: false,
		}),
	],
	output: {
		file: createFileName('cjs.prod'),
		format: 'cjs',
		exports: 'auto',
	},
};

// global
const globalConfig = {
	plugins: [
		replace({
			preventAssignment: true,
			__DEV__: true,
			'process.env.NODE_ENV': true,
		}),
	],
	output: {
		file: createFileName('global'),
		format: 'iife',
		name,
	},
};

// global.prod
const globalProdConfig = {
	plugins: [
		terser(),
		replace({
			preventAssignment: true,
			__DEV__: false,
		}),
	],
	output: {
		file: createFileName('global.prod'),
		format: 'iife',
		name,
	},
};

const configs = [
	esBundleConfig,
	esBrowserProdConfig,
	esBrowserConfig,
	cjsConfig,
	cjsProdConfig,
	globalConfig,
	globalProdConfig,
];

export default mergeAllConfigs();

// export default {
// 	input: 'src/entry.js',
// 	output: [
// 		// ESModule文件打包
// 		{
// 			file: 'dist/index.es.js',
// 			name: 'Element', //模块导出的变量名
// 			format: 'es',
// 			sourcemap: true,
// 			globals: {
// 				vue: 'Vue', // 指定与外部模块相对应的浏览器全局变量名称
// 			},
// 		},
// 		// 打包script标签引用的iife合适问题件
// 		{
// 			file: 'dist/iife.js',
// 			name: 'Element',
// 			format: 'iife',
// 			sourcemap: true,
// 			globals: {
// 				vue: 'Vue', //调用window的全局变量
// 			},
// 		},
// 		// min.js文件打包
// 		{
// 			file: 'dist/index.min.js',
// 			name: 'Element',
// 			format: 'umd',
// 			sourcemap: true,
// 			globals: {
// 				vue: 'Vue',
// 			},
// 		},
// 		// commonjs文件打包
// 		{
// 			file: 'dist/index.cjs.js',
// 			name: 'Element',
// 			format: 'cjs',
// 			sourcemap: true,
// 			exports: 'auto',
// 			globals: {
// 				vue: 'Vue',
// 			},
// 		},
// 	],
// 	external: ['vue'],
// 	plugins: [
// 		babel({
// 			babelHelpers: 'bundled',
// 		}),
// 		vue({
// 			css: true,
// 		}),
// 		terser(),
// 		json(),
// 	],
// };

// export default [es, iife, minEs, cjs];
