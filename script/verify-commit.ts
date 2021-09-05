// Invoked on the commit-msg git hook by yorkie.
const chalk = require('chalk');
const fs = require('fs');
const msgPath = process.argv[2];

const commitRE =
	/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?(.{1,10})?: .{1,50}/;
const mergeRe = /^(Merge pull request|Merge branch)/;

const msg = fs.readFileSync(msgPath, 'utf-8').trim();
if (!commitRE.test(msg) && !mergeRe.test(msg)) {
	console.log('提交信息:' + msg + '\n\n');

	console.error(
		`${chalk.bgRed.white('错误')} ${chalk.red(`无效的提交消息格式.`)}\n\n` +
			`${chalk.red(` 自动生成更改日志需要正确的提交消息格式. 例如:\n\n`)}` +
			` ${chalk.green(`<type>(<scope>): <subject>`)}\n\n` +
			` ${chalk.green(`<BLANK LINE>`)}\n\n` +
			` ${chalk.green(`<body>`)}\n\n` +
			` ${chalk.green(`<BLANK LINE>`)}\n\n` +
			` ${chalk.green(`<footer>`)}\n\n`,
	);

	console.error(
		`${chalk.bgRed.white('type: commit 的类型')}\n\n` +
			` ${chalk.green(`feat: 新功能、新特性`)}\n` +
			` ${chalk.green(`fix: 修改 bug`)}\n\n` +
			` ${chalk.green(`perf: 更改代码，以提⾼性能`)}\n\n` +
			` ${chalk.green(`refactor: 代码重构（重构，在不影响代码内部⾏为、功能下的代码修改）`)}\n\n` +
			` ${chalk.green(`docs: ⽂档修改`)}\n\n` +
			` ${chalk.green(`style: 代码格式修改, 注意不是 css 修改（例如分号修改）`)}\n\n` +
			` ${chalk.green(`test: 测试⽤例新增、修改`)}\n\n` +
			` ${chalk.green(`build: 影响项⽬构建或依赖项修改`)}\n\n` +
			` ${chalk.green(`revert: 恢复上⼀次提交`)}\n\n` +
			` ${chalk.green(`ci: 持续集成相关⽂件修改`)}\n\n` +
			` ${chalk.green(`chore: 其他修改（不在上述类型中的修改）`)}\n\n` +
			` ${chalk.green(`release: 发布新版本`)}\n\n` +
			` ${chalk.green(`workflow: ⼯作流相关⽂件修改`)}\n\n`,
	);

	console.error(
		`${chalk.bgRed.white('例如:')}\n\n` +
			` ${chalk.green(`feat: 添加⽹站主⻚静态⻚⾯`)}\n\n` +
			` ${chalk.green(`这是⼀个示例，假设对点检任务静态⻚⾯进⾏了⼀些描述。`)}\n\n` +
			` ${chalk.green(`这⾥是备注，可以是放BUG链接或者⼀些重要性的东⻄。`)}\n\n`,
	);

	console.log(
		chalk.red(
			`更多详情请查看：https://github.com/vuejs/vue-next/blob/master/.github/commitconvention.md\n`,
		),
	);

	process.exit(1);
}
