import path from 'path';

const miniOcean = path.resolve(__dirname, '../packages/mini-ocean');
const themeChalk = path.resolve(__dirname, '../packages/theme-chalk');
const buildOutput = path.resolve(__dirname, './dist');
// 组件
const entry = path.resolve(miniOcean, 'entry.ts');

function createFileName(formatName) {
	return path.resolve(miniOcean, `lib/index.${formatName}.js`);
}

// 样式

export { miniOcean, themeChalk, entry, createFileName, buildOutput };
