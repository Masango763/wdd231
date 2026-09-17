document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    if (hamburgerButton && navigation) {
        hamburgerButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamburgerButton.classList.toggle('open');
        });
    }
});
