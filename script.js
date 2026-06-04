/**
 * @file script.js
 * @description Handles the theme toggling functionality for the application.
 * Listens for the DOMContentLoaded event to initialize the theme based on local storage
 * or system preferences, and sets up a click listener on the theme toggle button.
 */

/**
 * Initializes theme logic on DOMContentLoaded.
 *
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * @type {HTMLElement | null}
     */
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    /**
     * @type {MediaQueryList}
     */
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    /**
     * @type {string | null}
     */
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    /**
     * Handles the click event on the theme toggle button.
     * Toggles the theme between dark and light, updates localStorage,
     * and updates the button's aria-label.
     */
    themeToggleBtn.addEventListener('click', () => {
        /** @type {string | null} */
        let theme = document.documentElement.getAttribute('data-theme');
        
        /** @type {boolean} */
        let isCurrentlyDark = theme === 'dark' || (!theme && prefersDarkScheme.matches);

        if (isCurrentlyDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        }
    });
});
