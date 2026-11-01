/**
 * @file script.test.js
 * @description Comprehensive unit and real-DOM integration test suite for script.js.
 * Validates 100% of functions, lines, statements, and branches without monkey-patching
 * document.addEventListener, and verifies actual HTML markup from index.html and ecosystem.html.
 */

const fs = require('fs');
const path = require('path');
const {
    isValidTheme,
    readStoredTheme,
    writeStoredTheme,
    resolveEffectiveTheme,
    syncToggleButtonA11y,
    applyThemeToDOM,
    handleSystemThemeChange,
    initThemeController,
    bootstrap
} = require('./script.js');

/**
 * Mock MediaQueryList controller interface returned by createMockMatchMedia.
 *
 * @typedef {object} MockMediaController
 * @property {(query: string) => MediaQueryList} matchMedia The mock matchMedia function.
 * @property {(nextMatches: boolean) => void} setMatches Updates the matches boolean and fires change listeners.
 */

/**
 * Creates a controllable window.matchMedia mock for testing prefers-color-scheme behavior.
 *
 * @param {boolean} initialMatches Whether the media query initially matches.
 * @returns {MockMediaController} The mock media query controller.
 */
function createMockMatchMedia(initialMatches) {
    let currentMatches = initialMatches;
    /** @type {Array<(event: MediaQueryListEvent) => void>} */
    const listeners = [];

    /**
     * Adds an event listener to the mock MediaQueryList.
     *
     * @param {string} type The event type.
     * @param {EventListenerOrEventListenerObject | null} listener The callback function or listener object.
     * @returns {void}
     */
    const addEventListener = (type, listener) => {
        if (type === 'change' && typeof listener === 'function') {
            listeners.push(listener);
        }
    };

    /**
     * Removes an event listener from the mock MediaQueryList.
     *
     * @param {string} type The event type.
     * @param {EventListenerOrEventListenerObject | null} listener The callback function or listener object.
     * @returns {void}
     */
    const removeEventListener = (type, listener) => {
        if (type === 'change' && typeof listener === 'function') {
            const idx = listeners.indexOf(listener);
            if (idx !== -1) {
                listeners.splice(idx, 1);
            }
        }
    };

    /**
     * Legacy addListener stub.
     *
     * @returns {void}
     */
    const addListener = () => {};

    /**
     * Legacy removeListener stub.
     *
     * @returns {void}
     */
    const removeListener = () => {};

    /**
     * Mock dispatchEvent implementation.
     *
     * @returns {boolean} Always returns true.
     */
    const dispatchEvent = () => true;

    /**
     * Mock matchMedia implementation returning a live MediaQueryList object.
     *
     * @param {string} query The media query string.
     * @returns {MediaQueryList} The simulated MediaQueryList.
     */
    const matchMedia = (query) => ({
        /**
         * Returns whether the media query currently matches.
         *
         * @returns {boolean} True if currently matching.
         */
        get matches() {
            return currentMatches;
        },
        media: query,
        onchange: null,
        addListener,
        removeListener,
        addEventListener,
        removeEventListener,
        dispatchEvent
    });

    /**
     * Updates the current matches state and notifies all registered change listeners.
     *
     * @param {boolean} nextMatches The new matches state.
     * @returns {void}
     */
    const setMatches = (nextMatches) => {
        currentMatches = nextMatches;
        const event = /** @type {MediaQueryListEvent} */ ({
            matches: nextMatches,
            media: '(prefers-color-scheme: dark)'
        });
        for (const listener of [...listeners]) {
            listener(event);
        }
    };

    return { matchMedia, setMatches };
}

describe('Theme Toggler Unit & Integration Suite', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        document.documentElement.removeAttribute('data-theme');
        localStorage.clear();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('isValidTheme', () => {
        it('returns true only for exact "light" and "dark" strings', () => {
            expect(isValidTheme('light')).toBe(true);
            expect(isValidTheme('dark')).toBe(true);
            expect(isValidTheme('other')).toBe(false);
            expect(isValidTheme('')).toBe(false);
            expect(isValidTheme(null)).toBe(false);
            expect(isValidTheme(undefined)).toBe(false);
        });
    });

    describe('readStoredTheme & writeStoredTheme', () => {
        it('reads and writes valid themes to localStorage', () => {
            expect(readStoredTheme(localStorage)).toBeNull();
            expect(writeStoredTheme(localStorage, 'dark')).toBe(true);
            expect(readStoredTheme(localStorage)).toBe('dark');
            expect(writeStoredTheme(localStorage, 'light')).toBe(true);
            expect(readStoredTheme(localStorage)).toBe('light');
        });

        it('returns null when storage contains an unrecognized theme value', () => {
            localStorage.setItem('theme', 'solarized');
            expect(readStoredTheme(localStorage)).toBeNull();
        });

        it('gracefully handles null/undefined storage or storage SecurityError exceptions', () => {
            expect(readStoredTheme(null)).toBeNull();
            expect(readStoredTheme(undefined)).toBeNull();
            expect(writeStoredTheme(null, 'dark')).toBe(false);
            expect(writeStoredTheme(undefined, 'light')).toBe(false);

            /** @type {import('./script.js').ThemeStorage} */
            const throwingStorage = {
                /**
                 * Throws SecurityError on getItem.
                 *
                 * @throws {Error} Always throws SecurityError.
                 */
                getItem: () => {
                    throw new Error('SecurityError');
                },
                /**
                 * Throws QuotaExceededError on setItem.
                 *
                 * @throws {Error} Always throws QuotaExceededError.
                 */
                setItem: () => {
                    throw new Error('QuotaExceededError');
                }
            };

            expect(readStoredTheme(throwingStorage)).toBeNull();
            expect(writeStoredTheme(throwingStorage, 'dark')).toBe(false);
        });
    });

    describe('resolveEffectiveTheme', () => {
        it('prioritizes data-theme on rootElement over storedTheme and prefersDark', () => {
            document.documentElement.setAttribute('data-theme', 'light');
            expect(
                resolveEffectiveTheme(document.documentElement, 'dark', true)
            ).toBe('light');
        });

        it('falls back to storedTheme when data-theme is absent or invalid', () => {
            document.documentElement.setAttribute('data-theme', 'invalid');
            expect(
                resolveEffectiveTheme(document.documentElement, 'dark', false)
            ).toBe('dark');
        });

        it('falls back to prefersDark when both data-theme and storedTheme are absent', () => {
            expect(
                resolveEffectiveTheme(document.documentElement, null, true)
            ).toBe('dark');
            expect(
                resolveEffectiveTheme(document.documentElement, null, false)
            ).toBe('light');
        });
    });

    describe('syncToggleButtonA11y & applyThemeToDOM', () => {
        it('sets data-theme, aria-label, and aria-pressed accurately for dark and light modes', () => {
            const btn = document.createElement('button');
            applyThemeToDOM(document.documentElement, btn, 'dark');
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
            expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
            expect(btn.getAttribute('aria-pressed')).toBe('true');

            applyThemeToDOM(document.documentElement, btn, 'light');
            expect(document.documentElement.getAttribute('data-theme')).toBe('light');
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            expect(btn.getAttribute('aria-pressed')).toBe('false');

            syncToggleButtonA11y(btn, 'dark');
            expect(btn.getAttribute('aria-pressed')).toBe('true');
        });
    });

    describe('handleSystemThemeChange', () => {
        it('updates button ARIA state and clears data-theme when no stored override exists', () => {
            const btn = document.createElement('button');
            handleSystemThemeChange(document.documentElement, btn, localStorage, {
                matches: true
            });
            expect(document.documentElement.getAttribute('data-theme')).toBeNull();
            expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
            expect(btn.getAttribute('aria-pressed')).toBe('true');

            handleSystemThemeChange(document.documentElement, btn, localStorage, {
                matches: false
            });
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            expect(btn.getAttribute('aria-pressed')).toBe('false');
        });

        it('ignores OS theme change events when user has a stored theme preference', () => {
            const btn = document.createElement('button');
            localStorage.setItem('theme', 'light');
            applyThemeToDOM(document.documentElement, btn, 'light');

            handleSystemThemeChange(document.documentElement, btn, localStorage, {
                matches: true
            });
            expect(document.documentElement.getAttribute('data-theme')).toBe('light');
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            expect(btn.getAttribute('aria-pressed')).toBe('false');
        });
    });

    describe('initThemeController', () => {
        it('returns a safe no-op cleanup function when #theme-toggle is absent', () => {
            const cleanup = initThemeController(document, window);
            expect(typeof cleanup).toBe('function');
            cleanup();
            expect(document.documentElement.getAttribute('data-theme')).toBeNull();
        });

        it('initializes from stored dark theme and toggles to light and back to dark', () => {
            const media = createMockMatchMedia(false);
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                configurable: true,
                value: media.matchMedia
            });
            localStorage.setItem('theme', 'dark');
            document.body.innerHTML = '<button id="theme-toggle"></button>';

            const cleanup = initThemeController(document, window);
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );

            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
            expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
            expect(btn.getAttribute('aria-pressed')).toBe('true');

            btn.click();
            expect(document.documentElement.getAttribute('data-theme')).toBe('light');
            expect(localStorage.getItem('theme')).toBe('light');
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            expect(btn.getAttribute('aria-pressed')).toBe('false');

            btn.click();
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
            expect(localStorage.getItem('theme')).toBe('dark');
            expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
            expect(btn.getAttribute('aria-pressed')).toBe('true');

            cleanup();
            btn.click();
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        });

        it('respects prefers-color-scheme on initial load and reacts to live OS changes until overridden', () => {
            const media = createMockMatchMedia(true);
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                configurable: true,
                value: media.matchMedia
            });
            document.body.innerHTML = '<button id="theme-toggle"></button>';

            const cleanup = initThemeController(document, window);
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );

            expect(document.documentElement.getAttribute('data-theme')).toBeNull();
            expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
            expect(btn.getAttribute('aria-pressed')).toBe('true');

            media.setMatches(false);
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            expect(btn.getAttribute('aria-pressed')).toBe('false');

            btn.click();
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
            expect(localStorage.getItem('theme')).toBe('dark');

            media.setMatches(false);
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

            cleanup();
        });

        it('handles environments without window.matchMedia or with inaccessible localStorage', () => {
            const customWin = /** @type {Window} */ (
                /** @type {unknown} */ ({
                    matchMedia: undefined,
                    /**
                     * Throws when accessing localStorage.
                     *
                     * @throws {Error} Always throws SecurityError.
                     */
                    get localStorage() {
                        throw new Error('Storage disabled');
                    }
                })
            );

            document.body.innerHTML = '<button id="theme-toggle"></button>';
            const cleanup = initThemeController(document, customWin);
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );

            expect(btn.getAttribute('aria-pressed')).toBe('false');
            btn.click();
            expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
            cleanup();
        });
    });

    describe('bootstrap', () => {
        it('initializes immediately when document.readyState is not "loading"', () => {
            const media = createMockMatchMedia(false);
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                configurable: true,
                value: media.matchMedia
            });
            document.body.innerHTML = '<button id="theme-toggle"></button>';

            const cleanup = bootstrap(document, window);
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
            cleanup();
        });

        it('defers initialization until DOMContentLoaded when document.readyState is "loading"', () => {
            const media = createMockMatchMedia(false);
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                configurable: true,
                value: media.matchMedia
            });
            const readyStateSpy = jest
                .spyOn(document, 'readyState', 'get')
                .mockReturnValue('loading');

            document.body.innerHTML = '<button id="theme-toggle"></button>';
            const cleanup = bootstrap(document, window);
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );

            expect(btn.getAttribute('aria-label')).toBeNull();

            document.dispatchEvent(new Event('DOMContentLoaded'));
            expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');

            cleanup();
            readyStateSpy.mockRestore();
        });

        it('allows cancelling deferred initialization before DOMContentLoaded fires', () => {
            const readyStateSpy = jest
                .spyOn(document, 'readyState', 'get')
                .mockReturnValue('loading');

            document.body.innerHTML = '<button id="theme-toggle"></button>';
            const cleanup = bootstrap(document, window);
            cleanup();

            document.dispatchEvent(new Event('DOMContentLoaded'));
            const btn = /** @type {HTMLElement} */ (
                document.getElementById('theme-toggle')
            );
            expect(btn.getAttribute('aria-label')).toBeNull();
            readyStateSpy.mockRestore();
        });
    });

    describe('Real HTML DOM Integration (index.html & ecosystem.html)', () => {
        const htmlFiles = ['index.html', 'ecosystem.html'];

        for (const fileName of htmlFiles) {
            it(`verifies unique IDs, popover wiring, and theme toggling on real ${fileName}`, () => {
                const filePath = path.resolve(__dirname, fileName);
                const rawHtml = fs.readFileSync(filePath, 'utf8');
                const parser = new DOMParser();
                const parsedDoc = parser.parseFromString(rawHtml, 'text/html');

                const allElementsWithId = parsedDoc.querySelectorAll('[id]');
                const seenIds = new Set();
                for (const el of allElementsWithId) {
                    const id = el.getAttribute('id');
                    expect(seenIds.has(id)).toBe(false);
                    seenIds.add(id);
                }

                const toggleBtn = parsedDoc.getElementById('theme-toggle');
                expect(toggleBtn).not.toBeNull();
                if (toggleBtn) {
                    expect(toggleBtn.querySelector('.light-icon')).not.toBeNull();
                    expect(toggleBtn.querySelector('.dark-icon')).not.toBeNull();
                }

                const consultingBtn = parsedDoc.getElementById('consulting-link');
                const consultingPopover = parsedDoc.getElementById('consulting-popover');
                expect(consultingBtn).not.toBeNull();
                expect(consultingPopover).not.toBeNull();
                if (consultingBtn) {
                    expect(consultingBtn.getAttribute('popovertarget')).toBe(
                        'consulting-popover'
                    );
                }

                const media = createMockMatchMedia(false);
                Object.defineProperty(window, 'matchMedia', {
                    writable: true,
                    configurable: true,
                    value: media.matchMedia
                });

                const cleanup = initThemeController(parsedDoc, window);
                if (toggleBtn) {
                    expect(toggleBtn.getAttribute('aria-pressed')).toBe('false');
                    toggleBtn.click();
                    expect(parsedDoc.documentElement.getAttribute('data-theme')).toBe(
                        'dark'
                    );
                    expect(toggleBtn.getAttribute('aria-pressed')).toBe('true');
                }
                cleanup();
            });
        }

        it('ensures all cdd-web-ui icon references resolve relative to base href and exist on disk', () => {
            const cddDir = path.join(__dirname, 'cdd-web-ui');
            const chunkFiles = fs
                .readdirSync(cddDir)
                .filter((name) => name.endsWith('.js'));
            const iconRefs = new Set();

            for (const file of chunkFiles) {
                const content = fs.readFileSync(path.join(cddDir, file), 'utf8');
                expect(content).not.toContain('/assets/icons/');
                const matches = content.match(/assets\/icons\/[a-z0-9_-]+\.svg/gi);
                if (matches) {
                    for (const match of matches) {
                        iconRefs.add(match);
                    }
                }
            }

            expect(iconRefs.has('assets/icons/google.svg')).toBe(true);
            expect(iconRefs.has('assets/icons/openapi.svg')).toBe(true);
            for (const relPath of iconRefs) {
                expect(fs.existsSync(path.join(cddDir, relPath))).toBe(true);
            }
        });

        it('ensures SPA deep-link routes (e.g. /cdd-web-ui/login) and 404 fallbacks exist with matching index.html and base href', () => {
            const cddDir = path.join(__dirname, 'cdd-web-ui');
            const rootIndex = fs.readFileSync(
                path.join(cddDir, 'index.html'),
                'utf8'
            );
            expect(rootIndex).toContain('<base href="/cdd-web-ui/">');

            const fallbackPaths = [
                path.join(__dirname, '404.html'),
                path.join(cddDir, '404.html'),
                path.join(cddDir, 'workspace', 'index.html'),
                path.join(cddDir, 'login', 'index.html'),
                path.join(cddDir, 'auth-callback', 'index.html'),
                path.join(cddDir, 'dashboard', 'index.html'),
                path.join(cddDir, 'dashboard', 'organizations', 'index.html'),
                path.join(cddDir, 'dashboard', 'repositories', 'index.html'),
                path.join(cddDir, 'dashboard', 'secrets', 'index.html'),
                path.join(cddDir, 'dashboard', 'audit-logs', 'index.html')
            ];

            for (const targetPath of fallbackPaths) {
                expect(fs.existsSync(targetPath)).toBe(true);
                expect(fs.readFileSync(targetPath, 'utf8')).toBe(rootIndex);
            }
        });
    });
});
