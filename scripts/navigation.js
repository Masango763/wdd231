document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector("#animatenav");
    const hamburgerBtn = document.querySelector("#menu");

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            hamburgerBtn.classList.toggle("open");
        });
    }
});
