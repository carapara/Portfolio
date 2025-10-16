// js/theme.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const applyTheme = (theme) => {
    body.classList.toggle('dark-mode', theme === 'dark');
    icon.classList.toggle('bi-sun-fill', theme === 'dark');
    icon.classList.toggle('bi-moon-fill', theme !== 'dark');
    localStorage.setItem('theme', theme);
};

themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
});

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);