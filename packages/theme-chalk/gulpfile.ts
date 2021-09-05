/* eslint-disable no-console */

import chalk from 'chalk';
import gulp from 'gulp';
import gulpSass from 'gulp-sass'; //通过 libsass将Sass编译成 CSS
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer'; //- 解析CSS且根据规则添加浏览器兼容性前缀.
import cleanCSS from 'gulp-clean-css'; //- 压缩 CSS 通过 clean-css.
import rename from 'gulp-rename'; //- 轻松重命名文件
import { buildOutput } from '../../build/paths';
import path from 'path';

const noElPrefixFile = /(index|base|display)/;

const sass = gulpSass(dartSass);
export const distFolder = './lib';

//打包scss为css并压缩重命名，输出到lib目录下
function compile() {
	return gulp
		.src('./src/*.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({ cascade: false }))
		.pipe(
			cleanCSS({}, (details) => {
				console.log(
					`${chalk.cyan(details.name)}: ${chalk.yellow(
						details.stats.originalSize / 1000,
					)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
				);
			}),
		)
		.pipe(
			rename((path) => {
				if (!noElPrefixFile.test(path.basename)) {
					path.basename = `el-${path.basename}`;
				}
			}),
		)
		.pipe(gulp.dest(distFolder));
}

// 复制字体文件
function copyFont() {
	return gulp.src('./src/fonts/**').pipe(gulp.dest(`${distFolder}/fonts`));
}

const distBundle = path.resolve(buildOutput, './element-plus/theme-chalk');

// 复制lib文件到dist目录下
function copyToLib() {
	return gulp.src(distFolder + '/**').pipe(gulp.dest(distBundle));
}

// 复制src文件到dist下
function copySourceToLib() {
	return gulp.src('./src/**').pipe(gulp.dest(path.resolve(distBundle, './src')));
}

export const build = gulp.series(compile, copyFont, copyToLib, copySourceToLib);

export default build;
