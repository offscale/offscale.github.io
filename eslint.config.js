/**
 * @file eslint.config.js
 * @description Flat ESLint configuration enforcing 100% JSDoc documentation coverage
 * (files, modules, classes, functions, methods, parameters, and return types) and strict type safety.
 */

const js = require('@eslint/js');
const jsdoc = require('eslint-plugin-jsdoc');
const tseslint = require('typescript-eslint');
const globals = require('globals');

module.exports = [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'coverage/**',
            'cdd-web-ui/**/*.js'
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    jsdoc.configs['flat/recommended'],
    {
        files: [
            'script.js',
            'script.test.js',
            'jest.config.js',
            'eslint.config.js',
            'vite.config.js',
            'cdd-web-ui/docs-ui/src/**/*.d.ts'
        ],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            }
        },
        settings: {
            jsdoc: {
                mode: 'typescript'
            }
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-empty-object-type': [
                'error',
                {
                    allowInterfaces: 'with-single-extends'
                }
            ],
            'jsdoc/require-file-overview': [
                'error',
                {
                    tags: {
                        file: {
                            initialCommentsOnly: true,
                            mustExist: false,
                            preventDuplicates: true
                        },
                        module: {
                            initialCommentsOnly: true,
                            mustExist: false,
                            preventDuplicates: true
                        }
                    }
                }
            ],
            'jsdoc/require-jsdoc': [
                'error',
                {
                    publicOnly: false,
                    require: {
                        ArrowFunctionExpression: true,
                        ClassDeclaration: true,
                        ClassExpression: true,
                        FunctionDeclaration: true,
                        FunctionExpression: true,
                        MethodDefinition: true
                    },
                    contexts: [
                        'TSInterfaceDeclaration',
                        'TSTypeAliasDeclaration',
                        'TSMethodSignature',
                        'TSPropertySignature'
                    ]
                }
            ],
            'jsdoc/require-description': 'error',
            'jsdoc/require-param': 'error',
            'jsdoc/require-param-description': 'error',
            'jsdoc/require-param-name': 'error',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-returns': 'error',
            'jsdoc/require-returns-description': 'error',
            'jsdoc/require-returns-type': 'off',
            'jsdoc/valid-types': 'error',
            'jsdoc/tag-lines': 'off',
            'jsdoc/no-undefined-types': 'off'
        }
    },
    {
        files: [
            'script.js',
            'script.test.js',
            'jest.config.js',
            'eslint.config.js',
            'vite.config.js'
        ],
        rules: {
            'jsdoc/require-param-type': 'error',
            'jsdoc/require-returns-type': 'error'
        }
    }
];
