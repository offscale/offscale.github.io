document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousedown', createRipple);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                createRipple(e, true);
            }
        });
    });

    function createRipple(event, isKeyboard = false) {
        const card = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(card.clientWidth, card.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        
        let clientX, clientY;

        if (isKeyboard) {
            clientX = card.getBoundingClientRect().left + card.clientWidth / 2;
            clientY = card.getBoundingClientRect().top + card.clientHeight / 2;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        circle.style.left = `${clientX - card.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${clientY - card.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        const ripple = card.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }

        card.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️';
    } else if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '🌙';
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '☀️';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rotatingContainer = document.getElementById('rotating-text-container');
    if (rotatingContainer) {
        const words = [
            'Development', 'Deployment', 'Documentation', 
            'Devices', 'Deep-learning', 'Dependability', 'Development'
        ];
        
        let html = '<span class="rotating-text" aria-hidden="true">';
        words.forEach(word => {
            html += `<span class="word">${word}</span>`;
        });
        html += '</span>';
        
        rotatingContainer.innerHTML = html;
        
        const heroTitle = document.querySelector('.hero-title');
        const rotatingText = document.querySelector('.rotating-text');
        
        if (heroTitle && rotatingText) {
            heroTitle.addEventListener('mouseenter', () => {
                rotatingText.style.animationPlayState = 'paused';
            });
            heroTitle.addEventListener('mouseleave', () => {
                rotatingText.style.animationPlayState = 'running';
            });
            
            heroTitle.addEventListener('focus', () => {
                rotatingText.style.animationPlayState = 'paused';
            });
            heroTitle.addEventListener('blur', () => {
                rotatingText.style.animationPlayState = 'running';
            });
        }
    }
});