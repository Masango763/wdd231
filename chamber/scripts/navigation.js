const hamButton = document.querySelector('#ham-button');
const navMenu = document.querySelector('#primary-nav');

if (hamButton && navMenu) {
  hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}
