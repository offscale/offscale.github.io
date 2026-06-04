const fs = require('fs');
const path = require('path');

describe('Theme Toggler', () => {
    let mockMatchMedia;
    let domContentLoadedCallback;

    beforeAll(() => {
        // Intercept DOMContentLoaded
        const originalAddEventListener = document.addEventListener;
        document.addEventListener = function(type, listener, options) {
            if (type === 'DOMContentLoaded') {
                domContentLoadedCallback = listener;
            } else {
                originalAddEventListener.call(document, type, listener, options);
            }
        };
        
        // Load the script once. It will attach the DOMContentLoaded listener.
        require('./script.js');
    });

    beforeEach(() => {
        // Clear DOM and local storage
        document.body.innerHTML = '';
        document.documentElement.removeAttribute('data-theme');
        localStorage.clear();

        // Mock window.matchMedia
        mockMatchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: mockMatchMedia
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should do nothing if theme toggle button is not found', () => {
        domContentLoadedCallback();
        expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    });

    it('should set data-theme to dark if localStorage has dark', () => {
        localStorage.setItem('theme', 'dark');
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should set data-theme to light if localStorage has light', () => {
        localStorage.setItem('theme', 'light');
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });
    
    it('should not set data-theme initially if localStorage has no theme or other value', () => {
        localStorage.setItem('theme', 'other');
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    });
    
    it('should toggle theme from dark to light on click', () => {
        localStorage.setItem('theme', 'dark');
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        
        const btn = document.getElementById('theme-toggle');
        btn.click();
        
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(localStorage.getItem('theme')).toBe('light');
        expect(btn.getAttribute('aria-label')).toBe('Switch to dark mode');
    });
    
    it('should toggle theme from light to dark on click', () => {
        localStorage.setItem('theme', 'light');
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        
        const btn = document.getElementById('theme-toggle');
        btn.click();
        
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(localStorage.getItem('theme')).toBe('dark');
        expect(btn.getAttribute('aria-label')).toBe('Switch to light mode');
    });
    
    it('should use prefers-color-scheme if no theme is set on document element and toggle to light if dark is preferred', () => {
        mockMatchMedia.mockImplementation(query => ({
            matches: true, // prefers dark
        }));
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        
        const btn = document.getElementById('theme-toggle');
        btn.click();
        
        // since prefers dark is true, isCurrentlyDark is true, so it toggles to light
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(localStorage.getItem('theme')).toBe('light');
    });
    
    it('should toggle to dark if no theme is set and prefers dark is false', () => {
        mockMatchMedia.mockImplementation(query => ({
            matches: false, // prefers light
        }));
        document.body.innerHTML = '<button id="theme-toggle"></button>';
        domContentLoadedCallback();
        
        const btn = document.getElementById('theme-toggle');
        btn.click();
        
        // since prefers dark is false, isCurrentlyDark is false, so it toggles to dark
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(localStorage.getItem('theme')).toBe('dark');
    });
});