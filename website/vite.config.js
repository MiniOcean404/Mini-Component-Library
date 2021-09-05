import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	root: process.cwd(), //项目根目录
	base: './', //项目部署的基础路径
	publicDir: 'public', //静态资源服务的文件夹
	mode: 'development', //环境配置
	server: {
		//服务器主机名
		host: 'localhost',
		//端口号
		port: process.env.VITE_PORT,
		//设为 true 时若端口已被占用则会直接退出，
		//而不是尝试下一个可用端口
		strictPort: true,
		//https.createServer()配置项
		https: false,
		//服务器启动时自动在浏览器中打开应用程序。
		//当此值为字符串时，会被用作 URL 的路径名
		open: true,
		//自定义代理规则
		proxy: {
			// // 字符串简写写法
			// '/foo': 'http://localhost:4567/foo',
			// // 选项写法
			// '/api': {
			//     target: 'http://jsonplaceholder.typicode.com',
			//     changeOrigin: true,
			//     rewrite: (path) => path.replace(/^\/api/, '')
			// },
			// // 正则表达式写法
			// '^/fallback/.*': {
			//     target: 'http://jsonplaceholder.typicode.com',
			//     changeOrigin: true,
			//     rewrite: (path) => path.replace(/^\/fallback/, '')
			// }
			//     '/api': {
			//         target: 'http://localhost:3333/',
			//         changeOrigin: true,
			//         rewrite: (pathStr) => pathStr.replace('/api', '')
			//     },
		},
		//开发服务器配置 CORS
		//boolean | CorsOptions
		cors: {},
		//设置为 true 强制使依赖预构建
		force: true,
		//禁用或配置 HMR 连接
		hmr: {},
		//传递给 chokidar 的文件系统监视器选项
		watch: {},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			public: path.resolve(__dirname, 'public'),
			vue$: 'vue/dist/vue.esm.js',
			api: path.resolve(__dirname, 'src/api'),
			assets: path.resolve(__dirname, 'src/assets'),
			common: path.resolve(__dirname, 'src/common'),
			views: path.resolve(__dirname, 'src/views'),
			components: path.resolve(__dirname, 'src/components'),
		},
	},
	css: {
		//配置 CSS modules 的行为。选项将被传递给 postcss-modules。
		modules: {},
		// PostCSS 配置（格式同 postcss.config.js）
		// postcss-load-config 的插件配置
		postcss: {},
		//指定传递给 CSS 预处理器的选项
		preprocessorOptions: {
			scss: {
				// additionalData: `$injectedColor: orange;`
			},
		},
	},
	build: {
		// 压缩
		minify: 'esbuild',
		assetsDir: '',
		outDir: `./dist/${process.env.VITE_ENV}`,
	},
	json: {
		//是否支持从 .json 文件中进行按名导入
		namedExports: true,
		//若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好，
		//尤其是当 JSON 文件较大的时候。
		//开启此项，则会禁用按名导入
		stringify: false,
	},
	//继承自 esbuild 转换选项。最常见的用例是自定义 JSX
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
		jsxInject: `import React from 'react'`,
	},
	//静态资源处理  字符串|正则表达式
	assetsInclude: '',
	//调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
	logLevel: 'info',
	//设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
	clearScreen: true,
	//依赖优化选项
	optimizeDeps: {
		//检测需要预构建的依赖项
		entries: [],
		//预构建中强制排除的依赖项
		exclude: [],
		//默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
		include: [
			// "element-plus",
			// "element-plus/lib/locale/lang/zh-cn",
			// "dayjs/locale/zh-cn",
		],
	},
	//SSR 选项
	ssr: {
		//列出的是要为 SSR 强制外部化的依赖
		external: [],
		//列出的是防止被 SSR 外部化依赖项。
		noExternal: [],
	},
});
