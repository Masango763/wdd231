document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-button');
    const primaryNav = document.querySelector('#primary-nav');
    const menuIcon = document.querySelector('.menu-icon');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', isOpen.toString());
            menuIcon.textContent = isOpen ? '☰' : 'X';
        });
    }
});
