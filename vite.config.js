/**
 * @file vite.config.js
 * @description Vite configuration for multi-page bundling of index.html and ecosystem.html.
 */

const path = require('path');

/**
 * Vite build configuration object.
 *
 * @type {{ build: { rollupOptions: { input: { main: string, ecosystem: string } } } }}
 */
const viteConfig = {
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                ecosystem: path.resolve(__dirname, 'ecosystem.html')
            }
        }
    }
};

module.exports = viteConfig;
