/**
 * @file script.js
 * @description Handles the theme toggling functionality for the Offscale application.
 * Provides pure, strongly-typed functions for resolving, persisting, and applying
 * light/dark theme states across the DOM, Storage, and OS MediaQueryList listeners.
 */

/**
 * Valid theme mode literals supported by the application.
 *
 * @typedef {'light' | 'dark'} ThemeMode
 */

/**
 * Minimal storage interface required for reading and persisting theme state.
 *
 * @typedef {object} ThemeStorage
 * @property {(key: string) => string | null} getItem Reads a key from storage.
 * @property {(key: string, value: string) => void} setItem Writes a key-value pair to storage.
 */

/**
 * Type guard verifying whether an arbitrary string is a valid ThemeMode ('light' | 'dark').
 *
 * @param {string | null | undefined} value The candidate value to check.
 * @returns {value is ThemeMode} True if value is strictly 'light' or 'dark'.
 */
function isValidTheme(value) {
    return value === 'light' || value === 'dark';
}

/**
 * Safely reads the stored theme preference from a Storage instance.
 * Traps SecurityError or QuotaExceededError exceptions when storage is disabled.
 *
 * @param {ThemeStorage | null | undefined} storage The storage object (e.g. window.localStorage).
 * @returns {ThemeMode | null} The validated stored theme mode, or null if absent/inaccessible.
 */
function readStoredTheme(storage) {
    if (!storage) {
        return null;
    }
    try {
        const rawValue = storage.getItem('theme');
        return isValidTheme(rawValue) ? rawValue : null;
    } catch {
        return null;
    }
}

/**
 * Safely writes the chosen theme preference to a Storage instance.
 * Traps SecurityError or QuotaExceededError exceptions in private or sandboxed browsing.
 *
 * @param {ThemeStorage | null | undefined} storage The storage object (e.g. window.localStorage).
 * @param {ThemeMode} theme The theme mode to persist ('light' or 'dark').
 * @returns {boolean} True if persistence succeeded, false if storage was unavailable or threw.
 */
function writeStoredTheme(storage, theme) {
    if (!storage) {
        return false;
    }
    try {
        storage.setItem('theme', theme);
        return true;
    } catch {
        return false;
    }
}

/**
 * Resolves the effective active ThemeMode from the root element attribute, stored preference,
 * or OS-level prefers-color-scheme media query.
 *
 * @param {Element} rootElement The document root element (document.documentElement).
 * @param {ThemeMode | null} storedTheme The validated theme from storage, if any.
 * @param {boolean} prefersDark Whether the OS prefers dark mode via matchMedia.
 * @returns {ThemeMode} The effective active theme ('light' or 'dark').
 */
function resolveEffectiveTheme(rootElement, storedTheme, prefersDark) {
    const domTheme = rootElement.getAttribute('data-theme');
    if (isValidTheme(domTheme)) {
        return domTheme;
    }
    if (isValidTheme(storedTheme)) {
        return storedTheme;
    }
    return prefersDark ? 'dark' : 'light';
}

/**
 * Synchronizes the toggle button's accessible attributes (aria-label and aria-pressed)
 * with the currently active theme.
 *
 * @param {HTMLElement} toggleBtn The theme toggle button element.
 * @param {ThemeMode} activeTheme The currently active theme mode.
 * @returns {void}
 */
function syncToggleButtonA11y(toggleBtn, activeTheme) {
    const isDark = activeTheme === 'dark';
    toggleBtn.setAttribute(
        'aria-label',
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
    toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
}

/**
 * Applies the specified theme to the root element and synchronizes the toggle button's ARIA state.
 *
 * @param {Element} rootElement The document root element (document.documentElement).
 * @param {HTMLElement} toggleBtn The theme toggle button element.
 * @param {ThemeMode} theme The theme mode to apply ('light' or 'dark').
 * @returns {void}
 */
function applyThemeToDOM(rootElement, toggleBtn, theme) {
    rootElement.setAttribute('data-theme', theme);
    syncToggleButtonA11y(toggleBtn, theme);
}

/**
 * Handles OS-level prefers-color-scheme change events when no explicit user override is stored.
 *
 * @param {Element} rootElement The document root element.
 * @param {HTMLElement} toggleBtn The theme toggle button element.
 * @param {ThemeStorage | null | undefined} storage The storage object to check for user overrides.
 * @param {{ matches: boolean }} event The MediaQueryListEvent (or compatible object).
 * @returns {void}
 */
function handleSystemThemeChange(rootElement, toggleBtn, storage, event) {
    const stored = readStoredTheme(storage);
    if (stored !== null) {
        return;
    }
    const nextTheme = event.matches ? 'dark' : 'light';
    rootElement.removeAttribute('data-theme');
    syncToggleButtonA11y(toggleBtn, nextTheme);
}

/**
 * Initializes the theme controller for a given Document and Window environment.
 * Attaches click and system preference change listeners and returns a deterministic cleanup function.
 *
 * @param {Document} doc The DOM Document instance.
 * @param {Window} win The browser Window instance.
 * @returns {() => void} A teardown function that removes attached event listeners.
 */
function initThemeController(doc, win) {
    const themeToggleBtn = doc.getElementById('theme-toggle');
    if (!themeToggleBtn) {
        /**
         * No-op teardown when the toggle button is absent from the document.
         *
         * @returns {void}
         */
        const noopCleanup = () => {};
        return noopCleanup;
    }

    const rootElement = doc.documentElement;
    const prefersDarkScheme =
        typeof win.matchMedia === 'function'
            ? win.matchMedia('(prefers-color-scheme: dark)')
            : null;
    const prefersDark = Boolean(prefersDarkScheme && prefersDarkScheme.matches);

    let storage = null;
    try {
        storage = win.localStorage;
    } catch {
        storage = null;
    }

    const storedTheme = readStoredTheme(storage);
    if (storedTheme !== null) {
        applyThemeToDOM(rootElement, themeToggleBtn, storedTheme);
    } else {
        const initialEffective = resolveEffectiveTheme(rootElement, null, prefersDark);
        syncToggleButtonA11y(themeToggleBtn, initialEffective);
    }

    /**
     * Click handler that flips the active theme and persists the selection.
     *
     * @returns {void}
     */
    const onToggleClick = () => {
        const currentPrefersDark = Boolean(
            prefersDarkScheme && prefersDarkScheme.matches
        );
        const currentEffective = resolveEffectiveTheme(
            rootElement,
            readStoredTheme(storage),
            currentPrefersDark
        );
        const nextTheme = currentEffective === 'dark' ? 'light' : 'dark';
        applyThemeToDOM(rootElement, themeToggleBtn, nextTheme);
        writeStoredTheme(storage, nextTheme);
    };

    /**
     * System color scheme change handler.
     *
     * @param {MediaQueryListEvent} event The media query change event.
     * @returns {void}
     */
    const onSystemChange = (event) => {
        handleSystemThemeChange(rootElement, themeToggleBtn, storage, event);
    };

    themeToggleBtn.addEventListener('click', onToggleClick);
    if (
        prefersDarkScheme &&
        typeof prefersDarkScheme.addEventListener === 'function'
    ) {
        prefersDarkScheme.addEventListener('change', onSystemChange);
    }

    /**
     * Removes the click and media query change listeners registered by initThemeController.
     *
     * @returns {void}
     */
    const cleanup = () => {
        themeToggleBtn.removeEventListener('click', onToggleClick);
        if (
            prefersDarkScheme &&
            typeof prefersDarkScheme.removeEventListener === 'function'
        ) {
            prefersDarkScheme.removeEventListener('change', onSystemChange);
        }
    };

    return cleanup;
}

/**
 * Bootstraps the theme controller on the provided Document and Window, either immediately
 * if the document is already parsed or on DOMContentLoaded if still loading.
 *
 * @param {Document} doc The DOM Document instance.
 * @param {Window} win The browser Window instance.
 * @returns {() => void} A teardown function that removes any registered listeners.
 */
function bootstrap(doc, win) {
    /** @type {(() => void) | null} */
    let controllerCleanup = null;

    /**
     * DOMContentLoaded callback that initializes the theme controller.
     *
     * @returns {void}
     */
    const onReady = () => {
        controllerCleanup = initThemeController(doc, win);
    };

    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', onReady);
        /**
         * Cleanup function removing both the DOMContentLoaded listener and any active controller listeners.
         *
         * @returns {void}
         */
        const removeDeferred = () => {
            doc.removeEventListener('DOMContentLoaded', onReady);
            if (controllerCleanup) {
                controllerCleanup();
            }
        };
        return removeDeferred;
    }

    controllerCleanup = initThemeController(doc, win);
    return controllerCleanup;
}

/* istanbul ignore next */
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    bootstrap(document, window);
}

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidTheme,
        readStoredTheme,
        writeStoredTheme,
        resolveEffectiveTheme,
        syncToggleButtonA11y,
        applyThemeToDOM,
        handleSystemThemeChange,
        initThemeController,
        bootstrap
    };
}
