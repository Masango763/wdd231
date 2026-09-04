document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector("#animatenav");
    const hamburgerButton = document.querySelector("#menu");

    hamburgerButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        hamburgerButton.classList.toggle("open");
    });
});
