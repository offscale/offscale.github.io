/**
 * @file jest.config.js
 * @description Jest configuration enforcing 100% statement, branch, function, and line coverage.
 */

/**
 * Jest configuration object.
 *
 * @type {{
 *   testEnvironment: string,
 *   collectCoverage: boolean,
 *   collectCoverageFrom: string[],
 *   coverageThreshold: {
 *     global: {
 *       branches: number,
 *       functions: number,
 *       lines: number,
 *       statements: number
 *     }
 *   }
 * }}
 */
const jestConfig = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['script.js'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};

module.exports = jestConfig;
