document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
