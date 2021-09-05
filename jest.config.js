module.exports = {
	testEnvironment: 'jsdom', // 默认JSdom
	roots: ['<rootDir>/types', '<rootDir>/packages'], //
	collectCoverage: true, // 生成测试覆盖率报告
	transform: {
		'^.+\\.vue$': 'vue-jest', // vue单⽂件
		'^.+\\js$': 'babel-jest', // esm最新语法 import
	},
	moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	testMatch: ['**/__tests__/**/*.spec.js'],
	// 别名
	moduleNameMapper: {
		'^element-ui(.*)$': '<rootDir>$1',
		'^main(.*)$': '<rootDir>/src$1',
	},
};
