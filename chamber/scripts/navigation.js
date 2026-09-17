const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');

if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
}
