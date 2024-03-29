import nextJest from 'next/jest'

const customJestConfig = {
	coverageDirectory: 'coverage',
	collectCoverage: false,
	coverageProvider: 'v8',
	clearMocks: true,
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/styles/*.{js,jsx,ts,tsx}',
		'!<rootDir>/**/stories.{js,jsx,ts,tsx}',
		'!<rootDir>/node_modules/',
		'!**/*.d.ts',
		'!**/types.ts',
		'!<rootDir>/out/**',
		'!<rootDir>/.next/**',
		'!<rootDir>/*.config.js',
		'!<rootDir>/coverage/**',
		'!<rootDir>/src/graphql/**',
		'!<rootDir>/src/models/**'
	],
	testEnvironment: 'jest-environment-jsdom',
	moduleDirectories: ['node_modules', 'src/'],
	moduleNameMapper: {
		uuid: require.resolve('uuid')
	},
	testMatch: [
		'**/__tests__/**/*.[t]s?(x)',
		'**/?(*.)+(spec|test|tests).[tj]s?(x)'
	],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next',
		'/node_modules/(?!swiper|ssr-window|dom7)'
	],
	transform: {
		'^.+\\.(ts|tsx|js)$': 'babel-jest',
		'^.+\\.(css)$': '<rootDir>/.jest/fileTransform.js'
	},
	setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts']
}
const createJestConfig = nextJest({
	dir: './'
})

module.exports = createJestConfig(customJestConfig)
